import { motion } from 'framer-motion';
import { Quote, ChevronRight } from 'lucide-react';
import { aboutContent } from '../../data/mockData';
import { Link } from 'react-router-dom';
import partner1 from '../../assets/partners/Partner1.jpg';
import partner2 from '../../assets/partners/Partner2.jpg';
import partner3 from '../../assets/partners/Partner3.jpg';
import partner4 from '../../assets/partners/Partner4.jpg';
import partner5 from '../../assets/partners/Partner5.jpg';
import partner6 from '../../assets/partners/Partner6.jpg';
import partner7 from '../../assets/partners/Partner7.jpg';
import { SwapStory } from '../01-Home/SwapStory';
import './About.css';

const partners = [partner1, partner2, partner3, partner4, partner5, partner6, partner7];

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
              <img src="/assets/images/hero.png" alt="Plan B Trophy" />
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
                <img src="/assets/images/abyy.png" alt="Founder" />
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

        <SwapStory />
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
