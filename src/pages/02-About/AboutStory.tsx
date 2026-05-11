import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { aboutContent } from '../../data/mockData';
import whoWeAre1 from '../../assets/home/who-we-are1.jpg';
import whoWeAre2 from '../../assets/home/who-we-are2.jpeg';
import whoWeAre3 from '../../assets/home/who-we-are3.jpg';

const features = [
  {
    id: 1,
    title: "Plan B – The Eventguide",
    description: aboutContent.extended,
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
