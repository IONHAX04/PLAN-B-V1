import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { services, projectCategories, siteConfig, filmfactoryContent } from '../../data/mockData';
import { InstagramIcon, FacebookIcon, LinkedinIcon, YoutubeIcon, TiktokIcon, TwitterIcon } from '../../components/SocialIcons';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Private Events',
    date: '',
    guests: '',
    message: '',
    selectedServices: [] as string[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (serviceName: string) => {
    setFormData(prev => {
      const isSelected = prev.selectedServices.includes(serviceName);
      if (isSelected) {
        return { ...prev, selectedServices: prev.selectedServices.filter(s => s !== serviceName) };
      } else {
        return { ...prev, selectedServices: [...prev.selectedServices, serviceName] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="contact-page"
    >
      {/* Announcement Banner */}
      <div className="contact-announcement-banner">
        <div className="container">
          <div className="banner-inner">
            <span className="banner-text">Interested in joining our creative community?</span>
            <Link 
              to="/register" 
              className="btn-join-banner"
            >
              Join Now <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div className="container section-padding">
        <div className="contact-layout">
          <div className="contact-info-section">
            <div className="decor-script">Get in Touch</div>
            <motion.h1 
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Let's Plan Your <span className="text-gold">Event</span>
            </motion.h1>
            <motion.p
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Tell us about your event – we will get back to you within 48 hours with ideas and suggestions.
            </motion.p>
            
            <div className="contact-details-grid">
              <div className="detail-item">
                <h3>Our Office</h3>
                <p>{siteConfig.contact.address}</p>
              </div>
              <div className="detail-item">
                <h3>General Inquiries</h3>
                <p>{siteConfig.contact.email}</p>
              </div>
              <div className="detail-item">
                <h3>Call Us</h3>
                <p>{siteConfig.contact.phone}</p>
              </div>
            </div>

            <div className="contact-socials-wrapper">
              <h3>Follow Our Journey</h3>
              <div className="contact-socials-grid">
                <a href={siteConfig.contact.socials.instagram} target="_blank" rel="noreferrer" className="contact-social-link">
                  <InstagramIcon size={20} /> <span>Plan B – The Eventguide</span>
                </a>
                <a href={siteConfig.contact.socials.instagramFilmfactory} target="_blank" rel="noreferrer" className="contact-social-link">
                  <InstagramIcon size={20} /> <span>Plan B – The Filmfactory</span>
                </a>
                <a href={siteConfig.contact.socials.facebook} target="_blank" rel="noreferrer" className="contact-social-link">
                  <FacebookIcon size={20} /> <span>Plan B – The Eventguide</span>
                </a>
                <a href={siteConfig.contact.socials.linkedin} target="_blank" rel="noreferrer" className="contact-social-link">
                  <LinkedinIcon size={20} /> <span>Plan B – The Eventguide</span>
                </a>
                <a href={siteConfig.contact.socials.youtube} target="_blank" rel="noreferrer" className="contact-social-link">
                  <YoutubeIcon size={20} /> <span>Plan B – The Eventguide</span>
                </a>
                <a href={siteConfig.contact.socials.tiktok} target="_blank" rel="noreferrer" className="contact-social-link">
                  <TiktokIcon size={20} /> <span>Plan B – The Eventguide</span>
                </a>
                <a href={siteConfig.contact.socials.x} target="_blank" rel="noreferrer" className="contact-social-link">
                  <TwitterIcon size={20} /> <span>Plan B – The Eventguide</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            {submitted ? (
              <motion.div 
                className="success-message"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <CheckCircle2 size={64} className="text-gold" />
                <h2>Thank You!</h2>
                <p>Your message has been sent. We'll be in touch within 48 hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn btn-outline">Send another message</button>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-info-card">
                  <p>
                    Looking to join our creative community <strong>"My Frame - My Story"</strong>?
                  </p>
                  <Link to="/register" className="btn-register-link">
                    Register as a Creator <ExternalLink size={14} />
                  </Link>
                </div>

                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    placeholder="Your full name" 
                    required 
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="+41 78 000 00 00" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="your@email.com" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Event Type</label>
                    <select name="eventType" value={formData.eventType} onChange={handleInputChange}>
                      {projectCategories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                      <option value="Wedding">Wedding</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Approximate Date</label>
                    <input 
                      type="date" 
                      name="date" 
                      value={formData.date} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Approximate Guest Count</label>
                  <input 
                    type="number" 
                    name="guests" 
                    value={formData.guests} 
                    onChange={handleInputChange} 
                    placeholder="e.g. 150" 
                  />
                </div>

                <div className="form-group">
                  <label>Tell us about your event</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    placeholder="Describe your vision, theme, and any special requests..."
                    rows={4}
                  />
                </div>

                <div className="form-group">
                  <label>Services Interested In (Select all that apply)</label>
                  <div className="services-checkbox-grid">
                    {services.map(service => (
                      <div 
                        key={service.id} 
                        className={`service-checkbox ${formData.selectedServices.includes(service.title) ? 'active' : ''}`}
                        onClick={() => handleServiceToggle(service.title)}
                      >
                        {service.title}
                      </div>
                    ))}
                  </div>
                </div>

                <button type="submit" className="btn btn-gold btn-full">
                  Let's Plan Your Event <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
