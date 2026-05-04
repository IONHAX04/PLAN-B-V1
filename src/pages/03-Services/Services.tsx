import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { services, servicesIntro } from '../../data/mockData';
import './Services.css';

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
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
      className="services-page section-padding"
    >
      <div className="container">
        <div className="section-header">
          <motion.div variants={fadeInUp} className="decor-script">Our Expertise</motion.div>
          <motion.h1 variants={fadeInUp}>Tailor-Made Solutions</motion.h1>
          <motion.div variants={fadeInUp} className="title-divider-center"></motion.div>
          <motion.p variants={fadeInUp} className="section-subtitle">
            {servicesIntro}
          </motion.p>
        </div>

        <motion.div variants={stagger} className="services-detailed-grid">
          {services.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.HelpCircle;
            return (
              <motion.div 
                key={service.id} 
                variants={fadeInUp} 
                className="service-card-premium"
              >
                <div className="service-card-inner">
                  <div className="service-visual">
                    <div className="service-number">0{index + 1}</div>
                    <div className="service-icon-bg">
                      <IconComponent size={120} strokeWidth={0.5} />
                    </div>
                  </div>
                  <div className="service-info">
                    <div className="service-icon-small">
                      <IconComponent size={24} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="service-features-list">
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="feature-item">
                          <LucideIcons.CheckCircle2 size={16} className="text-gold" />
                          <span>{detail.subtitle}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
