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

  return (
    <div className="service-screen-wrapper">
      <div className="service-screen-sticky">
        <div className="service-card-v4">
          <div className="card-content-grid">
            <div className="card-text-side">
              <div className="service-header-mini">
                <span className="service-index">Service 0{index + 1}</span>
                <div className="service-icon-wrap">
                  <IconComponent size={24} />
                </div>
              </div>
              
              <h2>{service.title}</h2>
              <p className="service-main-desc">{service.description}</p>
              
              <div className="service-detailed-features">
                {service.details.map((detail: any, idx: number) => (
                  <div key={idx} className="detail-feature-item">
                    <h4>{detail.subtitle}</h4>
                    <p>{detail.text}</p>
                  </div>
                ))}
              </div>

              <div className="card-footer">
                <button className="btn-gold-small">Inquire Now</button>
              </div>
            </div>

            <div className="card-image-side">
              <img src={`/assets/images/services/service_${index + 1}.png`} alt={service.title} />
              <div className="image-overlay-gradient"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="services-page-v4"
    >
      {/* Intro Header - Not sticky, scrolls away */}
      <section className="services-hero-v4">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title-alipay"
          >
            <div className="decor-script">Our Expertise</div>
            <h1>Bespoke <span>Event Solutions</span></h1>
            <div className="title-divider-center"></div>
            <p className="hero-description">{servicesIntro}</p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Screens Container */}
      <div className="services-screens-container">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            index={index} 
          />
        ))}
      </div>

      {/* Final CTA - Scrolls into view after all screens */}
      <section className="services-final-cta-v4 section-padding dark-bg">
        <div className="container text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to transform your vision into an extraordinary event?</h2>
            <p>Our team is ready to orchestrate your next masterpiece.</p>
            <div className="cta-buttons mt-4">
              <button className="btn-gold large">Book a Consultation</button>
              <button className="btn-outline">View Our Projects</button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
