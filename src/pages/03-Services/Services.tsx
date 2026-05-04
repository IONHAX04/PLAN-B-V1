import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { services, servicesIntro } from '../../data/mockData';
import './Services.css';

interface ServiceCardProps {
  service: any;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.HelpCircle;
  const themes = ['theme-dark', 'theme-gold-dark', 'theme-black', 'theme-slate'];
  const themeClass = themes[index % themes.length];

  return (
    <section className={`service-screen-sticky ${themeClass}`}>
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
            <button className="btn-premium-screen">
              Experience Excellence <LucideIcons.ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="services-page-v5"
    >
      {/* Intro - Scrolls away */}
      <section className="services-intro-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="intro-text-center"
          >
            <div className="decor-script">Our Expertise</div>
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
              <button className="btn-gold">Get in Touch</button>
              <button className="btn-outline">View Portfolio</button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
