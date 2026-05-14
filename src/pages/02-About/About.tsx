import { motion } from 'framer-motion';
import { Quote, ChevronRight, Users, Compass, Sparkles } from 'lucide-react';
import { aboutContent, targetGroups } from '../../data/mockData';
import { Link } from 'react-router-dom';
// Import assets from the about folder
const aboutAssets = import.meta.glob('../../assets/about/*.{png,jpg,jpeg,webp}', { eager: true });
const aboutImages = Object.keys(aboutAssets).reduce((acc, path) => {
  const fileName = path.split('/').pop()?.split('.')[0] || '';
  acc[fileName] = (aboutAssets[path] as any).default || aboutAssets[path];
  return acc;
}, {} as Record<string, string>);

import { AboutStory } from './AboutStory';
import abbyFounder from '../../assets/aboutTeam/abby.png';
import mainLogo from '../../assets/logo/logo.png';
import './About.css';

const partners = [
  aboutImages['Partners1'],
  aboutImages['Partners2'],
  aboutImages['Partners3'],
  aboutImages['Partners4'],
  aboutImages['Partners5'],
  aboutImages['Partners6'],
  aboutImages['Partners7']
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const About = () => {
  return (
    <div className="about-page-reimagined">
      {/* Hero Section */}
      <section className="about-hero-alipay">
        <div className="container hero-grid">
          <motion.div
            className="hero-text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="decor-script-small">Plan B – The Eventguide</div>
            <h1>Excellence<br /><span>Redefined</span></h1>
            <p className="hero-desc">{aboutContent.intro}</p>
            <div className="hero-cta-alipay">
              <Link to="/about/vision" className="btn-gold-alipay">Explore Our Vision <ChevronRight size={18} /></Link>
            </div>
          </motion.div>
          <motion.div
            className="hero-image-right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="mascot-placeholder">
              <div className="golden-glow"></div>
              <img src={mainLogo} alt="Plan B Eventguide" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Note Section */}
      <section className="founder-note-section section-padding">
        <div className="container">
          <div className="founder-grid">
            <motion.div {...fadeInUp} className="founder-image-box">
              <div className="founder-img-wrapper">
                <img src={abbyFounder} alt="Founder" />
              </div>
              <div className="founder-label">
                <span className="name">Abishana</span>
                <span className="role">Founder of Plan B</span>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="founder-text-box">
              <div className="decor-script">A Personal Note</div>
              <h2>Forward-Thinking Planning</h2>
              <div className="title-divider"></div>
              <p>{aboutContent.founderNote}</p>
              <Quote size={40} className="text-gold-fade" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Immersive Story Section (Swap Column Style) */}
      <section className="about-story-immersive section-padding dark-bg">
        <div className="container">
          <motion.div {...fadeInUp} className="section-title-alipay">
            <div className="decor-script">Our Story</div>
            <h2>The Plan B Journey</h2>
            <div className="title-divider-center"></div>
          </motion.div>
        </div>

        <AboutStory />
      </section>

      {/* Target Groups Section (Restored on About Page) */}
      <section className="target-groups-section section-padding grey-section">
        <div className="container">
          <div className="section-title-alipay">
            <div className="decor-script">Who We Serve</div>
            <h2>Our Target Groups</h2>
            <div className="title-divider-center"></div>
          </div>
          <div className="target-groups-grid">
            {targetGroups && targetGroups.map((group, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="target-group-card"
              >
                <div className="group-icon-box">
                  {i === 0 && <Users size={32} />}
                  {i === 1 && <Compass size={32} />}
                  {i === 2 && <Sparkles size={32} />}
                </div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="partners-section section-padding">
        <div className="container">
          <motion.div {...fadeInUp} className="section-title-alipay">
            <div className="decor-script">Our Network</div>
            <h2>Trusted Partners</h2>
            <div className="title-divider-center"></div>
            <p>Collaborating with the industry's best to deliver excellence.</p>
          </motion.div>
          
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <motion.div 
                key={index} 
                className="partner-logo-wrapper"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={partner} alt={`Partner ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      < section className="about-final-cta section-padding dark-bg" >
        <div className="container">
          <div className="cta-glass-card">
            <motion.div {...fadeInUp} className="text-center">
              <div className="decor-script-gold">Join the Experience</div>
              <h2>Ready to experience the Plan B standard?</h2>
              <p>Discover the difference that professional planning and cinematic vision can make for your next event.</p>
              <div className="cta-row-new">
                <Link to="/about/team" className="btn btn-gold">Meet the Team</Link>
                <Link to="/contact" className="btn btn-outline">Start Planning</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section >
    </div >
  );
};

export default About;
