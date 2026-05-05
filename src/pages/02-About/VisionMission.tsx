import { motion } from 'framer-motion';
import { Target, Rocket, Lightbulb, ShieldCheck, Users, Zap, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { aboutContent } from '../../data/mockData';
import visionImg from '../../assets/home/home1.jpg';
import missionImg from '../../assets/home/home2.jpg';
import './About.css';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] as any }
};

const VisionMission = () => {
  const values = [
    { icon: <Lightbulb />, title: "Innovation", desc: "Always thinking one step ahead with a reliable Plan B." },
    { icon: <ShieldCheck />, title: "Precision", desc: "Meticulous calculation in every operational detail." },
    { icon: <Users />, title: "Empathy", desc: "Putting human connection at the heart of every event." },
    { icon: <Zap />, title: "Energy", desc: "Injecting passion and vitality into every project." },
    { icon: <Award />, title: "Excellence", desc: "Setting the gold standard in the Swiss event industry." },
    { icon: <Heart />, title: "Dedication", desc: "Absolute commitment to your unique vision." }
  ];

  return (
    <div className="vision-mission-page">
      {/* Cinematic Hero */}
      <section className="philosophy-hero">
        <div className="hero-bg-overlay"></div>
        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="decor-script-gold">The Philosophy</div>
            <h1>The Architecture <br />of <span>Excellence</span></h1>
            <p>We don't just plan events; we architect legacies and curate unforgettable Swiss experiences.</p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission - Dual Pillars */}
      <section className="vm-dual-pillars section-padding">
        <div className="container">
          <div className="pillar-row">
            <motion.div {...fadeInUp} className="pillar-image-side">
              <div className="pillar-img-wrapper">
                <img src={visionImg} alt="Our Vision" />
                <div className="pillar-label">Vision 2030</div>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="pillar-text-side">
              <Target className="pillar-icon" size={48} />
              <div className="decor-script">The Vision</div>
              <h2>Setting New <br />Global Standards</h2>
              <p>{aboutContent.vision}</p>
              <div className="pillar-quote">"Innovation is our compass."</div>
            </motion.div>
          </div>

          <div className="pillar-row reverse">
            <motion.div {...fadeInUp} className="pillar-image-side">
              <div className="pillar-img-wrapper">
                <img src={missionImg} alt="Our Mission" />
                <div className="pillar-label">Execution</div>
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="pillar-text-side">
              <Rocket className="pillar-icon" size={48} />
              <div className="decor-script">The Mission</div>
              <h2>Crafting The <br />Extraordinary</h2>
              <p>{aboutContent.mission}</p>
              <div className="pillar-quote">"Precision is our signature."</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Mosaic Grid */}
      <section className="values-mosaic-section section-padding bg-alt">
        <div className="container">
          <motion.div {...fadeInUp} className="section-header-center">
            <div className="decor-script">Our DNA</div>
            <h2>Core Pillars of Plan B</h2>
            <div className="title-divider-center"></div>
          </motion.div>

          <div className="values-mosaic-grid">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                className="mosaic-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="mosaic-icon-wrap">{val.icon}</div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Process Footer */}
      <section className="vision-cta-footer section-padding">
        <div className="container">
          <motion.div {...fadeInUp} className="cta-box-premium">
             <h2>Experience the Standard</h2>
             <p>Ready to bring your vision to life with the precision of Plan B?</p>
             <div className="cta-btns">
                <Link to="/contact" className="btn btn-gold">Plan Your Event</Link>
                <Link to="/about/team" className="btn btn-outline">Meet Our Team</Link>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
