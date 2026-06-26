import express from 'express';
import cors from 'cors';
import multer from 'multer';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

// Define allowed origins for CORS
const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
  'https://planb-theeventguide.ch',
  'https://www.planb-theeventguide.ch',
  'https://version-one.planb-theeventguide.ch'
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl) or if in allowed list
    if (
      !origin || 
      allowedOrigins.includes(origin) || 
      origin.startsWith('http://localhost:') || 
      origin.startsWith('http://127.0.0.1:') ||
      /^https?:\/\/(?:[a-zA-Z0-9-]+\.)*planb-theeventguide\.ch$/.test(origin)
    ) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup temporary upload directory
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage engine - strictly sanitizes and renames uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Generate an unpredictable, random filename to prevent collisions and path injection
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    // Sanitize original extension and clean filename safely
    const originalExt = path.extname(file.originalname).toLowerCase();
    const cleanExt = ['.png', '.jpg', '.jpeg', '.gif', '.pdf', '.docx', '.doc', '.zip'].includes(originalExt) ? originalExt : '.bin';
    cb(null, `photo-${uniqueSuffix}${cleanExt}`);
  }
});

// Configure upload limits and file filters
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'image/jpeg', 'image/png', 'image/gif', 
      'application/pdf', 
      'application/msword', 
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/zip', 'application/x-zip-compressed'
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only images, PDFs, Word docs, and ZIP files are allowed.'));
    }
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'UP', message: 'Mailer service is running.' });
});

// Registration submission endpoint
app.post('/api/register', upload.single('photo'), async (req, res) => {
  const file = req.file;

  // Clean-up handler function to remove file from disk
  const cleanupFile = (filePath) => {
    if (filePath && fs.existsSync(filePath)) {
      fs.unlink(filePath, (err) => {
        if (err) console.error(`Error deleting temp file ${filePath}:`, err);
      });
    }
  };

  try {
    const {
      firstName,
      lastName,
      streetAddress,
      city,
      postalCode,
      dob,
      email,
      phoneNumber,
      instagramId
    } = req.body;

    // 1. Validate required inputs
    if (!firstName || !lastName || !streetAddress || !city || !postalCode || 
        !dob || !email || !phoneNumber || !instagramId) {
      
      if (file) cleanupFile(file.path);
      return res.status(400).json({ error: 'Required text inputs are missing.' });
    }

    if (!file) {
      return res.status(400).json({ error: 'Photo upload is required.' });
    }

    // 2. Configure mail details
    const emailTo = process.env.EMAIL_TO || 'info@planb-theeventguide.ch';
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Safe path basename validation
    const safeAttachmentName = path.basename(file.originalname);

    const subject = `First Take Festival Application: ${firstName} ${lastName}`;
    const htmlBody = `
      <div style="background-color: #0d0d0d; padding: 40px 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #ffffff; text-align: center;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #1a1a1a; border: 1px solid #c5a022; border-radius: 8px; overflow: hidden; text-align: left; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          <!-- Header Banner -->
          <div style="background: linear-gradient(135deg, #1f1d18 0%, #0d0d0d 100%); padding: 30px; border-bottom: 2px solid #c5a022; text-align: center;">
            <span style="font-family: Georgia, serif; font-size: 28px; font-style: italic; color: #c5a022; letter-spacing: 2px; display: block; margin-bottom: 5px;">First Take</span>
            <h1 style="font-size: 20px; margin: 0; color: #ffffff; letter-spacing: 3px; text-transform: uppercase; font-weight: 300;">Tamil Short Film Festival</h1>
            <span style="font-size: 11px; color: #c5a022; text-transform: uppercase; letter-spacing: 2px; display: block; margin-top: 5px;">Switzerland</span>
          </div>
          
          <!-- Body Content -->
          <div style="padding: 40px 30px;">
            <h2 style="font-size: 18px; color: #c5a022; margin-top: 0; margin-bottom: 20px; border-bottom: 1px solid rgba(197, 160, 34, 0.2); padding-bottom: 10px; font-weight: 400; text-transform: uppercase; letter-spacing: 1px;">New Application Received</h2>
            
            <p style="font-size: 14px; line-height: 1.6; color: #cccccc; margin-bottom: 30px;">
              A new filmmaker has submitted their registration for the <strong>First Take</strong> Short Film Festival Swiss edition. Below are the registration details:
            </p>

            <!-- Details Card -->
            <div style="background-color: #111111; border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 6px; padding: 25px; margin-bottom: 30px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #c5a022; font-weight: bold; width: 140px;">Applicant Name</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 14px; color: #ffffff; font-weight: 500;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #c5a022; font-weight: bold;">Date of Birth</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 14px; color: #ffffff;">${dob}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #c5a022; font-weight: bold;">Residential Address</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 14px; color: #ffffff; line-height: 1.4;">${streetAddress}<br/>${postalCode} ${city}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #c5a022; font-weight: bold;">Email Address</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 14px;"><a href="mailto:${email}" style="color: #c5a022; text-decoration: none; border-bottom: 1px dashed #c5a022;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #c5a022; font-weight: bold;">Phone Number</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05); font-size: 14px; color: #ffffff;">${phoneNumber}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #c5a022; font-weight: bold;">Instagram ID</td>
                  <td style="padding: 10px 0; font-size: 14px;">
                    ${instagramId ? `<a href="https://instagram.com/${instagramId.replace('@', '')}" style="color: #c5a022; text-decoration: none; font-weight: 500;">${instagramId}</a>` : '<span style="color: #666666;">N/A</span>'}
                  </td>
                </tr>
              </table>
            </div>

            <!-- Action Note -->
            <div style="background-color: rgba(197, 160, 34, 0.05); border-left: 3px solid #c5a022; padding: 15px; border-radius: 4px;">
              <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #dddddd;">
                <strong>Photo Attachment:</strong> The applicant's profile picture is attached to this email (Filename: <code>${safeAttachmentName}</code>). This photo will be utilized for festival posters, brochures, and digital promotions.
              </p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #111111; padding: 20px 30px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.05); font-size: 11px; color: #666666;">
            <p style="margin: 0 0 5px 0;">Sent via Plan B Community Management System.</p>
            <p style="margin: 0;">&copy; 2026 Plan B - The Eventguide. All rights reserved.</p>
          </div>
        </div>
      </div>
    `;

    // 3. Dispatch Email
    // Check if SMTP is configured. If not, log a warning and return mock success to prevent blockages
    if (!smtpHost || !smtpPass || smtpHost.includes('yourprovider') || smtpPass.includes('your-smtp-password')) {
      console.warn('--------------------------------------------------');
      console.warn('TODO(security): SMTP email credentials are not fully configured.');
      console.warn('Printing registration details to local console instead:');
      console.warn(`TO: ${emailTo}`);
      console.warn(`SUBJECT: ${subject}`);
      console.warn(`DATA: Name: ${firstName} ${lastName}, Email: ${email}, Phone: ${phoneNumber}, Dob: ${dob}`);
      console.warn(`ATTACHED FILE TEMP PATH: ${file.path}`);
      console.warn('--------------------------------------------------');
      
      // Clean up the uploaded file
      cleanupFile(file.path);
      
      return res.status(200).json({
        success: true,
        message: 'Registration simulated successfully. SMTP credentials need configuration in backend/.env for real dispatch.'
      });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // Use SSL/TLS for 465, STARTTLS for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    // Send the email
    await transporter.sendMail({
      from: `"First Take Festival Registration" <${smtpUser}>`,
      to: emailTo,
      subject: subject,
      html: htmlBody,
      attachments: [
        {
          filename: safeAttachmentName,
          path: file.path
        }
      ]
    });

    console.log(`Registration email successfully sent to ${emailTo} for ${firstName} ${lastName}`);

    // Clean up uploaded file
    cleanupFile(file.path);

    res.status(200).json({ success: true, message: 'First Take registration submitted successfully.' });

  } catch (error) {
    // Make sure we clean up the file in case of error
    if (file) cleanupFile(file.path);

    console.error('Error handling First Take application submit:', error);
    
    // Send generic client response, prevent leaking internal stack trace
    res.status(500).json({ error: 'An internal error occurred while processing registration.' });
  }
});

// Start Express server on loopback interface (localhost) for local testing
const server = app.listen(PORT, '127.0.0.1', () => {
  console.log(`[Plan B Mailer Backend] server running on http://127.0.0.1:${PORT}`);
});
