import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, CheckCircle2, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    postalCode: '',
    dob: '', // Date of Birth YYYY-MM-DD
    email: '',
    phoneNumber: '', // Masked format (000) 000-0000
    instagramId: '',
    agreeDataProcessing: false
  });

  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [fileError, setFileError] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-format phone number to (000) 000-0000 as the user types
  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return value;
    
    let formatted = '';
    if (match[1]) {
      formatted += `(${match[1]}`;
      if (match[1].length === 3) {
        formatted += ') ';
      }
    }
    if (match[2]) {
      formatted += match[2];
      if (match[2].length === 3) {
        formatted += '-';
      }
    }
    if (match[3]) {
      formatted += match[3];
    }
    return formatted;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (name === 'phoneNumber') {
      setFormData(prev => ({ ...prev, phoneNumber: formatPhone(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (file: File) => {
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      setFileError("File size exceeds 10MB limit.");
      setPhotoFile(null);
      return;
    }
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'pdf'];
    const ext = file.name.split('.').pop()?.toLowerCase() || '';
    if (!allowedExtensions.includes(ext)) {
      setFileError("Please upload a valid image (JPG, PNG, GIF) or PDF.");
      setPhotoFile(null);
      return;
    }
    setFileError('');
    setPhotoFile(file);
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setFileError('');

    // Validations
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setErrorMsg('First name and Last name are required.');
      return;
    }
    if (!formData.streetAddress.trim() || !formData.city.trim() || !formData.postalCode.trim()) {
      setErrorMsg('Please fill in your complete Address.');
      return;
    }
    if (!formData.dob) {
      setErrorMsg('Please select your Date of Birth.');
      return;
    }
    if (!formData.email.trim()) {
      setErrorMsg('Email address is required.');
      return;
    }
    
    // Verify phone format: (000) 000-0000
    const phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setErrorMsg('Please enter a valid phone number in format: (000) 000-0000.');
      return;
    }

    if (!formData.instagramId.trim()) {
      setErrorMsg('Instagram ID is required.');
      return;
    }
    if (!photoFile) {
      setFileError('Please upload a photo of yourself.');
      return;
    }
    if (!formData.agreeDataProcessing) {
      setErrorMsg('You must agree to the data processing terms.');
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append('firstName', formData.firstName.trim());
      data.append('lastName', formData.lastName.trim());
      data.append('streetAddress', formData.streetAddress.trim());
      data.append('city', formData.city.trim());
      data.append('postalCode', formData.postalCode.trim());
      
      // Convert dob from YYYY-MM-DD to DD-MM-YYYY
      const [year, month, day] = formData.dob.split('-');
      const formattedDob = `${day}-${month}-${year}`;
      data.append('dob', formattedDob);
      
      data.append('email', formData.email.trim());
      data.append('phoneNumber', formData.phoneNumber.trim());
      data.append('instagramId', formData.instagramId.trim());
      data.append('photo', photoFile);

      const API_BASE_URL = import.meta.env.DEV 
        ? (import.meta.env.VITE_API_URL || 'http://127.0.0.1:5001') 
        : (import.meta.env.VITE_API_URL || '');
        
      const response = await fetch(`${API_BASE_URL}/api/register`, {
        method: 'POST',
        body: data
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(errJson.error || 'Server error occurred during submission.');
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Unable to submit registration. Please verify server status and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="register-page"
    >
      <div className="container section-padding">
        <div className="back-nav">
          <Link to="/filmfactory" className="back-link">
            <ArrowLeft size={16} /> Back to Filmfactory
          </Link>
        </div>

        <div className="register-card">
          {submitted ? (
            <motion.div 
              className="register-success"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <CheckCircle2 size={72} className="text-gold animate-pulse" />
              <h2>Registration Submitted Successfully</h2>
              <p className="success-subtitle">
                Thank you for registering for the <strong>"First Take"</strong> Tamil Short Film Festival Switzerland!
              </p>
              <div className="success-info">
                <p>We have received your details and photo. Our festival curation team will review your application soon.</p>
              </div>
              <div className="success-actions">
                <Link to="/" className="btn btn-gold">Back to Homepage</Link>
                <Link to="/filmfactory" className="btn btn-outline">Back to Filmfactory</Link>
              </div>
            </motion.div>
          ) : (
            <>
              {/* Header section matching First Take */}
              <div className="register-header">
                <div className="decor-script-gold">First Take</div>
                <h1>First Take</h1>
                <p className="register-subtitle">Tamil Short Film Festival Switzerland</p>
              </div>

              {errorMsg && (
                <div className="form-error-banner">
                  <AlertTriangle size={20} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form className="register-form" onSubmit={handleSubmit}>
                {/* Full Name Section */}
                <div className="form-section-block">
                  <h3 className="section-title">Full Name <span className="required-asterisk">*</span></h3>
                  <div className="form-row">
                    <div className="form-group">
                      <input 
                        type="text" 
                        name="firstName" 
                        value={formData.firstName}
                        onChange={handleInputChange} 
                        placeholder="First Name" 
                        required 
                      />
                      <span className="field-sublabel">First Name</span>
                    </div>
                    <div className="form-group">
                      <input 
                        type="text" 
                        name="lastName" 
                        value={formData.lastName}
                        onChange={handleInputChange} 
                        placeholder="Last Name" 
                        required 
                      />
                      <span className="field-sublabel">Last Name</span>
                    </div>
                  </div>
                </div>

                {/* Address Section */}
                <div className="form-section-block">
                  <h3 className="section-title">Address <span className="required-asterisk">*</span></h3>
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="streetAddress" 
                      value={formData.streetAddress}
                      onChange={handleInputChange} 
                      placeholder="Street Address" 
                      required 
                    />
                    <span className="field-sublabel">Street Address</span>
                  </div>
                  <div className="form-row margin-top-sm">
                    <div className="form-group">
                      <input 
                        type="text" 
                        name="city" 
                        value={formData.city}
                        onChange={handleInputChange} 
                        placeholder="City" 
                        required 
                      />
                      <span className="field-sublabel">City</span>
                    </div>
                    <div className="form-group">
                      <input 
                        type="text" 
                        name="postalCode" 
                        value={formData.postalCode}
                        onChange={handleInputChange} 
                        placeholder="Postal / Zip Code" 
                        required 
                      />
                      <span className="field-sublabel">Postal / Zip Code</span>
                    </div>
                  </div>
                </div>

                {/* Date of Birth */}
                <div className="form-section-block">
                  <h3 className="section-title">Date of Birth <span className="required-asterisk">*</span></h3>
                  <div className="form-group">
                    <input 
                      type="date" 
                      name="dob" 
                      value={formData.dob} 
                      onChange={handleInputChange}
                      required
                    />
                    <span className="field-sublabel">DD-MM-YYYY Date</span>
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="form-row">
                  <div className="form-section-block">
                    <h3 className="section-title">Email Address <span className="required-asterisk">*</span></h3>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange} 
                      placeholder="example@example.com" 
                      required 
                    />
                    <span className="field-sublabel">example@example.com</span>
                  </div>

                  <div className="form-section-block">
                    <h3 className="section-title">Phone Number <span className="required-asterisk">*</span></h3>
                    <input 
                      type="text" 
                      name="phoneNumber" 
                      value={formData.phoneNumber}
                      onChange={handleInputChange} 
                      placeholder="(000) 000-0000" 
                      maxLength={14}
                      required 
                    />
                    <span className="field-sublabel">Please enter a valid phone number. Format: (000) 000-0000.</span>
                  </div>
                </div>

                {/* Instagram ID */}
                <div className="form-section-block">
                  <h3 className="section-title">Instagram ID <span className="required-asterisk">*</span></h3>
                  <input 
                    type="text" 
                    name="instagramId" 
                    value={formData.instagramId}
                    onChange={handleInputChange} 
                    placeholder="@username" 
                    required
                  />
                  <span className="field-sublabel">@exampl_</span>
                </div>

                {/* Photo Upload Section */}
                <div className="form-section-block">
                  <h3 className="section-title">Upload Photo <span className="required-asterisk">*</span></h3>
                  <div 
                    className={`upload-zone ${dragActive ? 'active' : ''} ${photoFile ? 'has-file' : ''} ${fileError ? 'error' : ''}`}
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    onClick={triggerFileSelect}
                  >
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden-file-input"
                      accept="image/*,application/pdf"
                    />
                    <Upload size={36} className="upload-icon text-gold" />
                    {photoFile ? (
                      <div className="file-info">
                        <span className="file-name">{photoFile.name}</span>
                        <span className="file-size">({(photoFile.size / (1024 * 1024)).toFixed(2)} MB)</span>
                      </div>
                    ) : (
                      <div className="upload-prompt">
                        <span className="browse-btn-text">Browse Files</span>
                        <span className="desktop-prompt">Drag and drop files here</span>
                        <span className="mobile-prompt">Choose a file</span>
                        <span className="upload-limits">Max. file size: 10 MB</span>
                      </div>
                    )}
                  </div>
                  <span className="upload-tip-text">The picture will be used for posters & flyers</span>
                  {fileError && <span className="field-error-text">{fileError}</span>}
                </div>

                {/* Terms Agreement */}
                <div className="form-section-block agreement-block">
                  <h3 className="section-title">Consent <span className="required-asterisk">*</span></h3>
                  <label className="checkbox-item alignment-top">
                    <input 
                      type="checkbox" 
                      name="agreeDataProcessing"
                      checked={formData.agreeDataProcessing}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="checkmark"></span>
                    <span className="label-text consent-text">
                      I agree that my personal data may be processed as part of the “First Take” short film festival project.
                    </span>
                  </label>
                </div>

                {/* Submit Area */}
                <div className="form-submit-wrapper">
                  <button 
                    type="submit" 
                    className="btn btn-gold btn-full btn-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Registering...' : 'Register'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Register;
