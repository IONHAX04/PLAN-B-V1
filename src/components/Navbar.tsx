import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { InstagramIcon, FacebookIcon, LinkedinIcon, YoutubeIcon, TiktokIcon } from './SocialIcons';
import { navLinks, siteConfig } from '../data/mockData';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as any,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as any,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo">
          <span className="logo-decor">The Eventguide</span>
          <div className="logo-text">
            <span className="logo-p">PLAN</span>
            <span className="logo-b">B</span>
          </div>
          <span className="logo-location">Switzerland</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <div key={link.name} className="nav-item-wrapper">
              <Link 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} />}
              </Link>
              
              {link.dropdown && (
                <div className="dropdown-menu">
                  {link.dropdown.map((sub) => (
                    <Link key={sub.name} to={sub.path} className="dropdown-link">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="nav-actions">
          <Link to="/contact" className="btn-inquire">Inquire Now</Link>
          
          {/* Mobile Toggle */}
          <button 
            className={`mobile-toggle ${isOpen ? 'active' : ''}`} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="mobile-menu-content">
              <nav className="mobile-nav">
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link 
                      to={link.path} 
                      className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="mobile-dropdown">
                        {link.dropdown.map((sub) => (
                          <Link key={sub.name} to={sub.path} className="mobile-sub-link">
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              <motion.div className="mobile-menu-footer" variants={itemVariants}>
                <div className="mobile-socials">
                  <a href={siteConfig.contact.socials.instagram} target="_blank" rel="noreferrer"><InstagramIcon size={24} /></a>
                  <a href={siteConfig.contact.socials.facebook} target="_blank" rel="noreferrer"><FacebookIcon size={24} /></a>
                  <a href={siteConfig.contact.socials.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={24} /></a>
                  <a href={siteConfig.contact.socials.youtube} target="_blank" rel="noreferrer"><YoutubeIcon size={24} /></a>
                  <a href={siteConfig.contact.socials.tiktok} target="_blank" rel="noreferrer"><TiktokIcon size={24} /></a>
                </div>
                <p className="mobile-contact-info">{siteConfig.contact.email}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
