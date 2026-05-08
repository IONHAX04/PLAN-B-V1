import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { InstagramIcon, FacebookIcon, LinkedinIcon, YoutubeIcon, TiktokIcon } from './SocialIcons';
import { siteConfig, navLinks } from '../data/mockData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-p">PLAN</span>
            <span className="logo-b">B</span>
          </Link>
          <p className="footer-tagline">The Event Guide</p>
          <div className="social-links">
            <a href={siteConfig.contact.socials.instagram} target="_blank" rel="noreferrer" title="Instagram"><InstagramIcon size={20} /></a>
            <a href={siteConfig.contact.socials.facebook} target="_blank" rel="noreferrer" title="Facebook"><FacebookIcon size={20} /></a>
            <a href={siteConfig.contact.socials.linkedin} target="_blank" rel="noreferrer" title="LinkedIn"><LinkedinIcon size={20} /></a>
            <a href={siteConfig.contact.socials.youtube} target="_blank" rel="noreferrer" title="YouTube"><YoutubeIcon size={20} /></a>
            <a href={siteConfig.contact.socials.tiktok} target="_blank" rel="noreferrer" title="TikTok"><TiktokIcon size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <Mail size={18} />
            <span>{siteConfig.contact.email}</span>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <span>{siteConfig.contact.phone}</span>
          </div>
          <div className="contact-item">
            <MapPin size={18} />
            <span>{siteConfig.contact.address}</span>
          </div>
        </div>

      </div>
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.</p>
        <div className="footer-legal">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
