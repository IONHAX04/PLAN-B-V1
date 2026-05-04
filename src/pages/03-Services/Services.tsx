import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { services, servicesIntro } from '../../data/mockData';
import './Services.css';

interface StickyCardProps {
  service: any;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const StickyCard: React.FC<StickyCardProps> = ({ service, index, progress, range, targetScale }) => {
  const container = useRef(null);
  useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.HelpCircle;

  return (
    <div ref={container} className="sticky-card-container">
      <motion.div 
        style={{ 
          scale, 
          top: `calc(10vh + ${index * 40}px)`,
        }} 
        className="sticky-card"
      >
        <div className="card-content-grid">
          <div className="card-text-side">
            <div className="service-header-mini">
              <span className="service-index">0{index + 1}</span>
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
      </motion.div>
    </div>
  );
};

const Services = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="services-page-v3"
    >
      {/* Intro Header */}
      <section className="services-hero-minimal">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
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

      {/* Sticky Cards Main */}
      <div ref={container} className="sticky-cards-main">
        {services.map((service, index) => {
          const targetScale = 1 - ( (services.length - index) * 0.05);
          return (
            <StickyCard 
              key={service.id} 
              service={service} 
              index={index} 
              progress={scrollYProgress}
              range={[index * (1 / services.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      {/* Final CTA */}
      <section className="services-final-cta section-padding dark-bg">
        <div className="container text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to transform your vision into an extraordinary event?</h2>
            <p>Our team is ready to orchestration your next masterpiece.</p>
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
