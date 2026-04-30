import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Palette, Music, HeartHandshake, Mic2 } from 'lucide-react';
import { siteConfig, services } from '../../data/mockData';
import './Home.css';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      initial="initial" 
      animate="animate" 
      exit={{ opacity: 0 }}
      className="home-page"
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <motion.p variants={fadeInUp} className="hero-subtitle">
            {siteConfig.tagline}
          </motion.p>
          <motion.h1 variants={fadeInUp} className="hero-title">
            PLAN <span className="text-gold">B</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="hero-description">
            {siteConfig.heroDescription}
          </motion.p>
          <motion.div variants={fadeInUp} className="hero-cta">
            <Link to="/contact" className="btn btn-gold">
              Secure Your Free Consultation <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section section-padding">
        <div className="container">
          <div className="section-header">
            <motion.h2 variants={fadeInUp}>What We Do</motion.h2>
            <motion.div variants={fadeInUp} className="title-divider"></motion.div>
          </div>
          
          <motion.div variants={stagger} className="overview-grid">
            {services.slice(0, 3).map((service) => (
              <motion.div key={service.id} variants={fadeInUp} className="overview-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="read-more">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filmfactory Preview */}
      <section className="filmfactory-preview section-padding dark-section">
        <div className="container">
          <div className="ff-preview-content">
            <motion.h2 variants={fadeInUp}>FILMFACTORY</motion.h2>
            <motion.p variants={fadeInUp}>
              A sub-company of Plan B focusing on Tamil short film competitions, creative communities, and the art of storytelling.
            </motion.p>
            <motion.div variants={fadeInUp} className="ff-preview-links">
              <Link to="/filmfactory" className="btn btn-gold">
                Discover Filmfactory
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Intro */}
      <section className="partners-intro section-padding">
        <div className="container">
          <div className="partners-flex">
            <div className="partners-text">
              <motion.h2 variants={fadeInUp}>Our Network</motion.h2>
              <motion.p variants={fadeInUp}>
                We cooperate with carefully selected partners in the areas of catering, decoration, technology and entertainment to deliver the best results for your event.
              </motion.p>
              <Link to="/partner" className="btn btn-gold">
                See Our Partners
              </Link>
            </div>
            <div className="partners-logos-mini">
              <div className="logo-placeholder">14+</div>
              <div className="logo-placeholder-text">Trusted Partners</div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
