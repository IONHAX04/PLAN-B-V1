import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarCheck,
  MapPin,
  Palette,
  Music,
  HeartHandshake,
  Mic2,
  Sparkles,
  Zap,
  Star
} from 'lucide-react';

type ServiceItem = {
  id: number | string;
  title: string;
  description: string;
  icon: string;
};

const iconMap = {
  CalendarCheck,
  MapPin,
  Palette,
  Music,
  HeartHandshake,
  Mic2,
  Sparkles,
  Zap,
  Star
} as const;

const ExpertiseCard = ({ item, index }: { item: ServiceItem; index: number }) => {
  const Icon = iconMap[item.icon as keyof typeof iconMap] || Zap;
  
  // New Symmetric Alignment Logic:
  // Row 1: Wide, Normal
  // Row 2: Normal, Wide
  // Row 3: Wide, Normal
  const isWide = index === 0 || index === 3 || index === 4;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bento-card ${isWide ? 'bento-wide' : ''}`}
    >
      <div className="bento-card-content">
        <div className="bento-icon-wrapper">
          <Icon size={24} />
        </div>
        <div className="bento-text">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
        <Link to={`/services#${item.id}`} className="bento-link">
          Explore <ArrowRight size={16} />
        </Link>
      </div>
      
      {/* Visual Accents */}
      <div className="bento-blur-bg" />
      <div className="bento-border-glow" />
    </motion.div>
  );
};

const StickyCardsFeatures = ({ items }: { items: ServiceItem[] }) => {
  return (
    <section className="expertise-grid-section">
      <div className="container">
        <div className="expertise-header">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="decor-script-small"
          >
            The Plan B Standard
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Expertise. <br /><span>Built for Excellence.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            We don't just manage events; we architect experiences. From technical precision to creative vision, we deliver seamless results every time.
          </motion.p>
        </div>

        <div className="bento-grid">
          {items.map((item, index) => (
            <ExpertiseCard key={item.id} item={item} index={index} />
          ))}
        </div>
        
        <div className="expertise-footer-cta">
          <Link to="/services" className="btn btn-gold">
            View All Services <Sparkles size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StickyCardsFeatures;
