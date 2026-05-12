import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import home1 from '../../assets/home/home1.jpg';
import home2 from '../../assets/home/home2.jpg';
import home3 from '../../assets/home/home3.jpg';
import homeVideo from '../../assets/video/home.mp4';

export const HeroVideo = () => {
  return (
    <section className="hero-video-section">
      <div className="video-background">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="bg-video"
        >
          <source src={homeVideo} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <div className="container hero-video-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="video-text-box"
        >
          <motion.div 
            className="decor-script-gold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Since 2017
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            We think one step ahead <br /> 
            and always have a <span className="text-gold">Plan B</span>
          </motion.h1>

          <motion.div 
            className="hero-video-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <Link to="/contact" className="btn btn-gold">Plan Your Event</Link>
            <Link to="/projects" className="btn btn-outline-white">Explore Projects</Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mouse"
        >
          <div className="wheel"></div>
        </motion.div>
      </div>
    </section>
  );
};

export const HeroVariant1 = () => {
  return (
    <section className="hero-variant-1">
      <div className="container hero-v1-grid">
        <div className="gallery-left">
          <motion.div 
            className="polaroid p1"
            initial={{ rotate: -15, x: -100, opacity: 0 }}
            animate={{ rotate: -10, x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img src={home1} alt="Elegance" />
          </motion.div>
          <motion.div 
            className="polaroid p2"
            initial={{ rotate: 15, x: -50, opacity: 0 }}
            animate={{ rotate: 5, x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img src={home2} alt="Architecture" />
          </motion.div>
        </div>

        <div className="hero-v1-content">
          <motion.div 
            className="decor-script"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Anticipatory Luxury
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            The Architecture of Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            Meticulously curated event management for the highly discerning. Where absolute reliability meets effortless sophistication.
          </motion.p>
        </div>

        <div className="gallery-right">
          <motion.div 
            className="polaroid p3"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <img src={home3} alt="Details" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const HeroVariant2 = () => {
  return (
    <section className="hero-variant-2">
      <div className="hero-v2-bg">
        <motion.img 
          src="/assets/images/hero_immersive_bg.png" 
          alt="Luxury Venue"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="v2-overlay"></div>
      </div>
      
      <div className="container hero-v2-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="v2-glass-card"
        >
          <div className="decor-script">The Art of Planning</div>
          <h1>Crafting Unforgettable <br /><span className="text-gold">Swiss Moments</span></h1>
          <p>We think one step ahead and always have a Plan B. Your vision, executed with absolute precision and creative excellence.</p>
          <div className="v2-actions">
            <Link to="/contact" className="btn btn-gold">Inquire Now</Link>
            <Link to="/projects" className="btn btn-outline-white">View Portfolio</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const HeroVariant3 = () => {
  return (
    <section className="hero-variant-3">
      <div className="hero-v3-grid">
        <div className="v3-text-side">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="decor-script">Exquisite Experience</div>
              <h1>Events that <br /><span>Inspire Passion</span></h1>
              <p>Plan B – The Eventguide specializes in high-end private and corporate events. We bring your unique ideas to life with meticulous organization and creative vision.</p>
              <div className="v3-stats">
                <div className="stat">
                  <span className="val">10+</span>
                  <span className="lab">Years Exp</span>
                </div>
                <div className="stat">
                  <span className="val">500+</span>
                  <span className="lab">Events</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-gold">Plan Your Event <ArrowRight size={18} /></Link>
            </motion.div>
          </div>
        </div>
        <div className="v3-visual-side">
          <div className="v3-img-grid">
            <motion.div 
              className="img-box b1"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <img src="/assets/images/hero_gallery_interior.png" alt="Venue" />
            </motion.div>
            <motion.div 
              className="img-box b2"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <img src="/assets/images/hero_gallery_table.png" alt="Table" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
