import { motion } from 'framer-motion';
import { Target, Rocket, Quote, Shield, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { aboutContent } from '../../data/mockData';

import visionImg from '../../assets/home/home2.jpg';
import missionImg from '../../assets/home/home3.jpg';
import heroImg from '../../assets/home/home1.jpg';

import './About.css';
import './VisionMission.css';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] as any }
};

const VisionMission = () => {
  return (
    <div className="vision-mission-reimagined">
      {/* Premium Decorative Hero */}
      <section className="philosophy-hero-v2">
        <div className="container">
          <div className="hero-v2-grid">
            <motion.div 
              className="hero-v2-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="decor-script-gold">Our Essence</span>
              <h1>The Architecture of <span>Excellence</span></h1>
              <div className="title-divider"></div>
              <p>We don't just plan events; we architect legacies and curate unforgettable Swiss experiences with precision and passion.</p>
            </motion.div>
            <motion.div 
              className="hero-v2-visual"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <div className="visual-stack">
                <img src={heroImg} alt="Hero Decoration" className="main-img" />
                <div className="glass-accent"></div>
                <div className="text-decor-side">EST. 2012</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Overlap Section */}
      <section className="philosophy-overlap section-padding">
        <div className="container">
          <div className="overlap-row">
            <motion.div {...fadeInUp} className="overlap-img-box">
              <img src={visionImg} alt="Vision" />
              <div className="img-caption">The Vision</div>
            </motion.div>
            <motion.div {...fadeInUp} className="overlap-content-box">
              <Target className="icon-accent" size={40} />
              <h2 className="serif-title">Setting New Global <br />Standards</h2>
              <p>{aboutContent.vision}</p>
              <div className="pillar-quote">"Innovation is our compass."</div>
            </motion.div>
          </div>

          <div className="overlap-row reverse">
            <motion.div {...fadeInUp} className="overlap-img-box">
              <img src={missionImg} alt="Mission" />
              <div className="img-caption">The Mission</div>
            </motion.div>
            <motion.div {...fadeInUp} className="overlap-content-box">
              <Rocket className="icon-accent" size={40} />
              <h2 className="serif-title">Crafting The <br />Extraordinary</h2>
              <p>{aboutContent.mission}</p>
              <div className="pillar-quote">"Precision is our signature."</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DNA Pillars - Decorative Grid */}
      <section className="dna-pillars-section section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="decor-script-gold">Core Values</span>
            <h2 className="serif-title">The Plan B DNA</h2>
            <div className="title-divider-center"></div>
          </div>

          <div className="dna-grid">
            <motion.div {...fadeInUp} className="dna-card">
              <Shield className="dna-icon" size={32} />
              <h3>Integrity</h3>
              <p>Unwavering commitment to honesty and transparency in every collaboration.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="dna-card">
              <Zap className="dna-icon" size={32} />
              <h3>Precision</h3>
              <p>Swiss-level accuracy from technical planning to final execution.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="dna-card">
              <Sparkles className="dna-icon" size={32} />
              <h3>Excellence</h3>
              <p>Striving for results that transcend expectations and define standards.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="quote-banner-premium">
        <div className="container">
          <motion.div 
            className="quote-content-premium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Quote className="quote-icon-lg" size={60} />
            <blockquote>{aboutContent.quote || "To be the guiding star in the universe of events, where every detail is a masterpiece of precision and every moment a legacy of excellence."}</blockquote>
            <cite>— The Plan B Philosophy</cite>
          </motion.div>
        </div>
      </section>

      {/* Final Action */}
      <section className="vision-final-cta section-padding">
        <div className="container">
          <div className="cta-premium-box">
            <h2 className="serif-title">Experience the Standard</h2>
            <p>Ready to bring your vision to life with the precision of Plan B?</p>
            <div className="cta-group">
              <Link to="/contact" className="btn btn-gold">Let's Plan Your Event</Link>
              <Link to="/about/team" className="btn btn-outline">Meet The Architects</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
