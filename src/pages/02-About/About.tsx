import { motion } from 'framer-motion';
import { Quote, ChevronRight, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { aboutContent } from '../../data/mockData';
import { Link } from 'react-router-dom';
import './About.css';

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

      {/* Story Extension */}
      <section className="story-extension section-padding dark-bg">
        <div className="container">
          <div className="story-content-box">
            <motion.div {...fadeInUp} className="story-text">
              <div className="decor-script">Our Story</div>
              <h2>Beyond Event Management</h2>
              <p>{aboutContent.extended}</p>
            </motion.div>
            
            <div className="story-highlights">
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="highlight-card">
                <Sparkles className="highlight-icon" />
                <h3>Creative Vision</h3>
                <p>Transforming abstract ideas into stunning realities with unique Swiss flair.</p>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="highlight-card">
                <ShieldCheck className="highlight-icon" />
                <h3>Absolute Reliability</h3>
                <p>Our "Plan B" philosophy ensures a seamless experience even in the unexpected.</p>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.6 }} className="highlight-card">
                <Heart className="highlight-icon" />
                <h3>Client Empathy</h3>
                <p>We listen closely to create moments that resonate deeply with your audience.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="about-simple-cta section-padding">
        <div className="container text-center">
          <h2>Ready to experience the Plan B standard?</h2>
          <div className="cta-row">
            <Link to="/about/team" className="btn-gold-alipay">Meet the Team</Link>
            <Link to="/contact" className="btn-outline">Start Planning</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
