import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarCheck,
  Gauge,
  HeartHandshake,
  MapPin,
  Mic2,
  Music,
  Palette
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
  Mic2
} as const;

const cardThemes = ['theme-gold', 'theme-slate', 'theme-plum', 'theme-teal', 'theme-charcoal', 'theme-amber'];

type StepCardProps = {
  item: ServiceItem;
  index: number;
  activeIndex: number;
  onBecomeActive: (index: number) => void;
};

const StepCard = ({ item, index, activeIndex, onBecomeActive }: StepCardProps) => {
  const stepRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(stepRef, { margin: '-40% 0px -40% 0px', amount: 0.35 });
  const depth = index - activeIndex;
  const Icon = iconMap[item.icon as keyof typeof iconMap] || Gauge;

  useEffect(() => {
    if (isInView && activeIndex !== index) {
      onBecomeActive(index);
    }
  }, [activeIndex, index, isInView, onBecomeActive]);

  return (
    <div ref={stepRef} className="sticky-step">
      <motion.article
        className={`sticky-feature-card ${cardThemes[index % cardThemes.length]} ${depth === 0 ? 'active' : ''}`}
        animate={{
          scale: depth < 0 ? 0.93 : depth === 0 ? 1 : 0.98,
          opacity: depth < 0 ? 0.42 : depth === 0 ? 1 : 0.76,
          filter: depth < 0 ? 'blur(1.5px)' : 'blur(0px)'
        }}
        transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="sticky-card-icon">
          <Icon size={22} />
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <Link to={`/services#${item.id}`} className="btn-text-gold">
          View Details <ArrowRight size={16} />
        </Link>
      </motion.article>
    </div>
  );
};

const StickyCardsFeatures = ({ items }: { items: ServiceItem[] }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-28, 28]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.5, 0.25]);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={sectionRef} className="sticky-features-section">
      <motion.div className="sticky-features-bg" style={{ y: parallaxY, opacity: parallaxOpacity }} />

      <div className="container sticky-features-container">
        <div className="sticky-features-header">
          <span className="decor-script-small">Our Expertise</span>
          <h2>Built to Deliver Seamless Events</h2>
          <p>Scroll to explore the services we orchestrate from first consultation to final applause.</p>
        </div>

        <div className="sticky-progress">
          <div className="sticky-progress-track">
            <motion.div className="sticky-progress-fill" style={{ height: progressHeight }} />
          </div>
          <div className="sticky-progress-dots">
            {items.map((item, index) => (
              <span key={item.id} className={`progress-dot ${index === activeIndex ? 'active' : ''}`} />
            ))}
          </div>
        </div>

        <div className="sticky-stack">
          {items.map((item, index) => (
            <StepCard
              key={item.id}
              item={item}
              index={index}
              activeIndex={activeIndex}
              onBecomeActive={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickyCardsFeatures;
