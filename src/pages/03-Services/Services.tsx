import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { services, servicesIntro } from '../../data/mockData';
import './Services.css';

const Services = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

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

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
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
          <motion.h1 variants={fadeInUp}>Our Services</motion.h1>
          <motion.p variants={fadeInUp} className="section-subtitle">
            {servicesIntro}
          </motion.p>
          <motion.div variants={fadeInUp} className="title-divider"></motion.div>
        </div>

        <motion.div variants={stagger} className="services-grid">
          {services.map((service) => {
            const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.HelpCircle;
            const isExpanded = expandedId === service.id;
            return (
              <motion.div 
                key={service.id} 
                variants={fadeInUp} 
                className={`service-card-detailed ${isExpanded ? 'expanded' : ''}`}
                onClick={() => toggleExpand(service.id)}
              >
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
                    <IconComponent size={40} strokeWidth={1.5} />
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="expand-toggle">
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>
                
                <AnimatePresence>
                  {isExpanded && service.details && (
                    <motion.div 
                      className="service-details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul>
                        {service.details.map((detail, idx) => (
                          <li key={idx}>
                            <strong>{detail.subtitle}:</strong> {detail.text}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="service-card-bg"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
