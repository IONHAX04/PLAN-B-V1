import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, CheckCircle2, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import myFrameMyStoryLogo from '../../assets/filmFactory/myFrameMyStory.png';
import './Register.css';

const expertiseOptions = [
  'Director',
  'Writer',
  'Actor/Actress',
  'Videography',
  'Photography',
  'Editor',
  'Designer',
  'Soundmixing',
  'Music Composer',
  'Singer',
  'Dancer/Choreographer',
  'Make-Up Artist',
  'Costume Designer'
];

const countries = [
  'Switzerland',
  'Germany',
  'Austria',
  'Liechtenstein',
  'France',
  'Italy',
  'United Kingdom',
  'United States',
  'Spain',
  'Netherlands',
  'Belgium',
  'Canada',
  'Australia',
  'Other'
];

// Generate birth date lists
const days = Array.from({ length: 31 }, (_, i) => String(i + 1));
const months = [
  { name: 'January', value: '1' },
  { name: 'February', value: '2' },
  { name: 'March', value: '3' },
  { name: 'April', value: '4' },
  { name: 'May', value: '5' },
  { name: 'June', value: '6' },
  { name: 'July', value: '7' },
  { name: 'August', value: '8' },
  { name: 'September', value: '9' },
  { name: 'October', value: '10' },
  { name: 'November', value: '11' },
  { name: 'December', value: '12' }
];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1920 + 1 }, (_, i) => String(currentYear - i));

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    gender: '',
    streetAddress: '',
    city: '',
    postalCode: '',
    country: '',
    email: '',
    countryCode: '',
    phoneNumber: '',
    instagramId: '',
    expertise: [] as string[],
    otherExpertise: '',
    agreeDataProcessing: false
  });

  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [fileError, setFileError] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleExpertiseChange = (option: string) => {
    setFormData(prev => {
      const current = [...prev.expertise];
      const index = current.indexOf(option);
      if (index > -1) {
        current.splice(index, 1);
      } else {
        current.push(option);
      }
      return { ...prev, expertise: current };
    });
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
    const allowedExtensions = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'csv', 'txt', 'rtf', 'html', 'zip', 'mp3', 'wma', 'mpg', 'flv', 'avi', 'jpg', 'jpeg', 'png', 'gif'];
    const ext = file.name.split('.').pop()?.toLowerCase() || '';
    if (!allowedExtensions.includes(ext)) {
      setFileError("File type not supported. Allowed formats: images, pdf, zip, word/excel documents.");
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

    // Field level checks
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setErrorMsg('First name and Last name are required.');
      return;
    }
    if (!formData.birthDay || !formData.birthMonth || !formData.birthYear) {
      setErrorMsg('Please fill in your complete Birth Date.');
      return;
    }
    if (!formData.streetAddress.trim() || !formData.city.trim() || !formData.postalCode.trim() || !formData.country) {
      setErrorMsg('Please fill in all address details.');
      return;
    }
    if (!formData.email.trim() || !formData.phoneNumber.trim() || !formData.countryCode.trim()) {
      setErrorMsg('Email and phone numbers are required.');
      return;
    }
    if (formData.expertise.length === 0 && !formData.otherExpertise.trim()) {
      setErrorMsg('Please select at least one Area of Expertise.');
      return;
    }
    if (!photoFile) {
      setFileError('Please upload a photo of yourself.');
      return;
    }
    if (!formData.agreeDataProcessing) {
      setErrorMsg('You must consent to data processing to join the community.');
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append('firstName', formData.firstName.trim());
      data.append('lastName', formData.lastName.trim());
      data.append('birthDay', formData.birthDay);
      data.append('birthMonth', formData.birthMonth);
      data.append('birthYear', formData.birthYear);
      data.append('gender', formData.gender);
      data.append('streetAddress', formData.streetAddress.trim());
      data.append('city', formData.city.trim());
      data.append('postalCode', formData.postalCode.trim());
      data.append('country', formData.country);
      data.append('email', formData.email.trim());
      data.append('countryCode', formData.countryCode.trim());
      data.append('phoneNumber', formData.phoneNumber.trim());
      data.append('instagramId', formData.instagramId.trim());
      data.append('expertise', JSON.stringify(formData.expertise));
      data.append('otherExpertise', formData.otherExpertise.trim());
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
          <Link to="/contact" className="back-link">
            <ArrowLeft size={16} /> Back to Contact
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
              <h2>Community Registration Submitted</h2>
              <p className="success-subtitle">
                Thank you for applying to join <strong>"My Frame - My Story"</strong>! We've received your details and photo.
              </p>
              <div className="success-info">
                <p>A confirmation email request has been sent, and our curation team will review your application soon.</p>
              </div>
              <div className="success-actions">
                <Link to="/" className="btn btn-gold">Back to Homepage</Link>
                <Link to="/contact" className="btn btn-outline">Go to Contact</Link>
              </div>
            </motion.div>
          ) : (
            <>
              {/* Header section matching PDF */}
              <div className="register-header">
                <img src={myFrameMyStoryLogo} alt="My Frame My Story Logo" className="register-logo" />
                <h1>Join Community</h1>
                <p className="register-subtitle">Fill out the form carefully for registration</p>
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
                  <h3 className="section-title">Name <span className="required-asterisk">*</span></h3>
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

                {/* Birth Date and Gender Section */}
                <div className="form-row">
                  <div className="form-section-block">
                    <h3 className="section-title">Birth Date <span className="required-asterisk">*</span></h3>
                    <div className="birthdate-selects">
                      <select 
                        name="birthDay" 
                        value={formData.birthDay} 
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Day</option>
                        {days.map(d => <option key={d} value={d}>{d}</option>)}
                      </select>

                      <select 
                        name="birthMonth" 
                        value={formData.birthMonth} 
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Month</option>
                        {months.map(m => <option key={m.value} value={m.value}>{m.name}</option>)}
                      </select>

                      <select 
                        name="birthYear" 
                        value={formData.birthYear} 
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Year</option>
                        {years.map(y => <option key={y} value={y}>{y}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="form-section-block">
                    <h3 className="section-title">Gender</h3>
                    <select 
                      name="gender" 
                      value={formData.gender} 
                      onChange={handleInputChange}
                    >
                      <option value="">Please Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="N/A">N/A</option>
                    </select>
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
                  <div className="form-group margin-top-sm">
                    <select 
                      name="country" 
                      value={formData.country} 
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Please Select Country</option>
                      {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <span className="field-sublabel">Country</span>
                  </div>
                </div>

                {/* Email and Mobile Phone */}
                <div className="form-row">
                  <div className="form-section-block">
                    <h3 className="section-title">E-Mail <span className="required-asterisk">*</span></h3>
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
                    <h3 className="section-title">Mobile Number <span className="required-asterisk">*</span></h3>
                    <div className="phone-row">
                      <input 
                        type="text" 
                        name="countryCode" 
                        value={formData.countryCode}
                        onChange={handleInputChange} 
                        placeholder="+41" 
                        className="phone-code"
                        required 
                      />
                      <input 
                        type="tel" 
                        name="phoneNumber" 
                        value={formData.phoneNumber}
                        onChange={handleInputChange} 
                        placeholder="78 000 00 00" 
                        className="phone-num"
                        required 
                      />
                    </div>
                    <div className="phone-labels">
                      <span className="field-sublabel font-mono">Country Code</span>
                      <span className="field-sublabel font-mono">Phone Number</span>
                    </div>
                  </div>
                </div>

                {/* Instagram ID */}
                <div className="form-section-block">
                  <h3 className="section-title">Instagram ID</h3>
                  <input 
                    type="text" 
                    name="instagramId" 
                    value={formData.instagramId}
                    onChange={handleInputChange} 
                    placeholder="@username" 
                  />
                  <span className="field-sublabel">@exampl_</span>
                </div>

                {/* Area of Expertise */}
                <div className="form-section-block">
                  <h3 className="section-title">Area(s) of Expertise <span className="required-asterisk">*</span></h3>
                  <div className="expertise-grid">
                    {expertiseOptions.map(option => (
                      <label key={option} className="checkbox-item">
                        <input 
                          type="checkbox" 
                          checked={formData.expertise.includes(option)}
                          onChange={() => handleExpertiseChange(option)} 
                        />
                        <span className="checkmark"></span>
                        <span className="label-text">{option}</span>
                      </label>
                    ))}
                  </div>
                  <div className="expertise-other-wrapper">
                    <label className="checkbox-item">
                      <input 
                        type="checkbox"
                        checked={!!formData.otherExpertise || formData.expertise.includes('Other')}
                        onChange={() => {
                          if (formData.expertise.includes('Other')) {
                            handleExpertiseChange('Other');
                            setFormData(prev => ({ ...prev, otherExpertise: '' }));
                          } else {
                            handleExpertiseChange('Other');
                          }
                        }}
                      />
                      <span className="checkmark"></span>
                      <span className="label-text">Other</span>
                    </label>
                    {(formData.expertise.includes('Other') || !!formData.otherExpertise) && (
                      <input 
                        type="text"
                        name="otherExpertise"
                        value={formData.otherExpertise}
                        onChange={handleInputChange}
                        placeholder="Please type another option here"
                        className="other-expertise-input animate-fade-in"
                        required
                      />
                    )}
                  </div>
                </div>

                {/* Photo Upload Section */}
                <div className="form-section-block">
                  <h3 className="section-title">Upload a Photo of yourself <span className="required-asterisk">*</span></h3>
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
                      I agree that my personal data may be processed as part of the “My Frame – my Story” project.
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
                    {isSubmitting ? 'Processing Entry...' : 'Enter the Community "My Frame - My Story"'}
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
