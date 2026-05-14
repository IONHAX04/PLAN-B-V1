import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { aboutContent } from '../../data/mockData';
import eventGuideImg from '../../assets/about/eventGuide.jpeg';
import visionImg from '../../assets/about/vision.jpeg';
import missionImg from '../../assets/about/mission.jpeg';

const features = [
  {
    id: 1,
    title: "Plan B – The Eventguide",
    description: aboutContent.extended,
    path: "/about",
    linkText: "Learn More",
    image: eventGuideImg
  },
  {
    id: 2,
    title: "Our Vision",
    description: aboutContent.vision,
    path: "/about#vision",
    linkText: "Explore Vision",
    image: visionImg
  },
  {
    id: 3,
    title: "Our Mission",
    description: aboutContent.mission,
    path: "/about#mission",
    linkText: "See Mission",
    image: missionImg
  }
];

export const AboutStory = () => {
  return (
    <div className="about-story-stack">
      {features.map((feature, index) => (
        <motion.div
          key={feature.id}
          className={`about-story-card ${index % 2 === 1 ? 'reverse' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-story-content">
            <div className="item-number">0{feature.id}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <Link to={feature.path} className="btn-text-gold">
              {feature.linkText} <ArrowRight size={18} />
            </Link>
          </div>
          <div className="about-story-image">
            <img src={feature.image} alt={feature.title} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
