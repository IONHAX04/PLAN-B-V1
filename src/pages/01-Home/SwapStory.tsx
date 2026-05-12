import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { aboutContent } from '../../data/mockData';
import whoWeAre1 from '../../assets/home/who-we-are1.jpg';
import whoWeAre2 from '../../assets/home/who-we-are2.jpeg';
import whoWeAre3 from '../../assets/home/who-we-are3.jpeg';

const features = [
  {
    id: 1,
    title: "Plan B – The Eventguide",
    description: aboutContent.intro,
    path: "/about",
    linkText: "Learn More",
    image: whoWeAre1
  },
  {
    id: 2,
    title: "Our Vision",
    description: aboutContent.vision,
    path: "/about#vision",
    linkText: "Explore Vision",
    image: whoWeAre2
  },
  {
    id: 3,
    title: "Our Mission",
    description: aboutContent.mission,
    path: "/about#mission",
    linkText: "See Mission",
    image: whoWeAre3
  }
];

export const SwapStory = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="swap-story-container">
      {/* Sticky Media Column */}
      <div className="swap-sticky-media-col">
        <motion.div
          className="swap-media-window"
          animate={{
            x: activeId % 2 === 0 ? '0%' : '100%',
          }}
          transition={{
            type: 'spring',
            stiffness: 250,
            damping: 25,
            mass: 1
          }}
        >
          <div className="media-content-stack">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="media-item"
                initial={false}
                animate={{
                  opacity: activeId === feature.id ? 1 : 0,
                  scale: activeId === feature.id ? 1 : 0.92,
                  filter: activeId === feature.id ? 'blur(0px)' : 'blur(6px)',
                }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <img src={feature.image} alt={feature.title} />
                <div className="media-overlay" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scrollable Content Column */}
      <div className="swap-scroll-content-col">
        {features.map((feature, index) => (
          <ContentSection
            key={feature.id}
            feature={feature}
            index={index}
            setActiveId={setActiveId}
          />
        ))}
      </div>
    </div>
  );
};

const ContentSection = ({
  feature,
  index,
  setActiveId,
}: {
  feature: (typeof features)[0];
  index: number;
  setActiveId: (id: number) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (isInView) setActiveId(feature.id);
  }, [isInView, feature.id, setActiveId]);

  return (
    <div
      ref={ref}
      className={`swap-section-item ${isInView ? 'active' : ''} ${
        index % 2 === 0 ? 'align-left' : 'align-right'
      }`}
    >
      <div className="item-content-wrapper">
        <div className="item-number">0{feature.id}</div>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
        <Link to={feature.path} className="btn-text-gold">
          {feature.linkText} <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};
