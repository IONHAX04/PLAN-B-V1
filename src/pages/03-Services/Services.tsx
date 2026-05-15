import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { services, servicesIntro } from '../../data/mockData';
import './Services.css';

// Import carousel images
import img1 from '../../assets/ourServiceCarousel/img1.jpeg';
import img2 from '../../assets/ourServiceCarousel/img2.jpeg';
import img3 from '../../assets/ourServiceCarousel/img3.jpeg';
import img4 from '../../assets/ourServiceCarousel/img4.jpeg';

const serviceImages = [img1, img2, img3, img4];

interface ServiceCardProps {
  service: any;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.HelpCircle;

  return (
    <section 
      className="service-screen-sticky"
      style={{ zIndex: index + 1 }}
    >
      <div className="service-screen-content">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] as any }}
          viewport={{ margin: "-10%" }}
          className="screen-inner-centered"
        >
          <div className="screen-icon-box">
            <IconComponent size={56} strokeWidth={1} />
          </div>
          
          <h2 className="screen-title">{service.title}</h2>
          
          <p className="screen-description">
            {service.description}
          </p>
          
          <div className="screen-features-mini">
            {service.details.slice(0, 4).map((detail: any, idx: number) => (
              <div key={idx} className="feature-pill">
                <LucideIcons.Sparkle size={12} className="text-gold" />
                <span>{detail.subtitle}</span>
              </div>
            ))}
          </div>

          <div className="screen-action">
            <Link to="/contact" className="btn-premium-screen">
              Get in Touch <LucideIcons.MessageSquare size={20} />
            </Link>
            <Link to="/projects" className="btn-outline-screen">
              View Portfolio <LucideIcons.ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % serviceImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="services-page-v5"
    >
      {/* Intro - Hero with Carousel */}
      <section className="services-intro-hero">
        <div className="hero-carousel-bg">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentImg}
              src={serviceImages[currentImg]}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 1.2, ease: [0.6, 0.05, -0.01, 0.9] as any }}
              className="carousel-img"
              style={{ position: 'absolute' }}
            />
          </AnimatePresence>
          <div className="hero-overlay"></div>
        </div>

        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="intro-text-center"
          >
            <div className="decor-script-gold">Our Expertise</div>
            <h1>Bespoke <span>Event Solutions</span></h1>
            <p className="intro-para">{servicesIntro}</p>
            <div className="scroll-indicator-gold">
              <div className="mouse"></div>
              <span>Scroll to Explore</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Screens Stack */}
      <div className="services-screens-stack">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            index={index} 
          />
        ))}
      </div>

      {/* Footer CTA */}
      <section className="services-footer-cta">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="footer-cta-glass"
          >
            <h2>Ready to plan your next masterpiece?</h2>
            <p>Connect with our experts today for a bespoke consultation.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-gold">Get in Touch</Link>
              <Link to="/projects" className="btn-outline">View Portfolio</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;

