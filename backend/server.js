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
  'https://planb-theeventguide.ch'
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl) or if in allowed list
    if (!origin || allowedOrigins.includes(origin) || origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:')) {
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

    const subject = `First Take Festival Application: ${firstName} ${lastName}`;
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; border: 1px solid #c5a022; padding: 20px; border-radius: 8px;">
        <h2 style="color: #c5a022; border-bottom: 2px solid #c5a022; padding-bottom: 10px;">First Take Festival Entry</h2>
        <p>A new applicant has registered for the <strong>"First Take"</strong> Tamil Short Film Festival Switzerland.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Full Name</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Date of Birth</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${dob}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Address</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${streetAddress}, ${postalCode} ${city}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email Address</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone Number</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${phoneNumber}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Instagram ID</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${instagramId ? `<a href="https://instagram.com/${instagramId.replace('@', '')}">${instagramId}</a>` : 'N/A'}</td>
          </tr>
        </table>
        
        <p style="margin-top: 25px; font-size: 0.85em; color: #888; border-top: 1px solid #eee; padding-top: 10px;">
          This email contains the photo submitted by the applicant as an attachment. The picture will be used for posters and flyers.
        </p>
      </div>
    `;

    // Safe path basename validation
    const safeAttachmentName = path.basename(file.originalname);

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
