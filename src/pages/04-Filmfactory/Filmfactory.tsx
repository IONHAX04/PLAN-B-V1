import React from 'react';
import { motion } from 'framer-motion';
import { Film, Users, Play, Calendar, Trophy, Clapperboard } from 'lucide-react';
import { filmfactoryContent } from '../../data/mockData';
import './Filmfactory.css';

const Filmfactory = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.div 
      initial="initial" 
      animate="animate" 
      exit={{ opacity: 0 }}
      className="filmfactory-page"
    >
      {/* Hero */}
      <section className="ff-hero">
        <div className="ff-hero-content container">
          <motion.div variants={fadeInUp} className="ff-badge">Sub Company of Plan B</motion.div>
          <motion.h1 variants={fadeInUp}>FILMFACTORY</motion.h1>
          <motion.p variants={fadeInUp}>Where Stories Come to Life</motion.p>
        </div>
        <div className="ff-hero-video-placeholder">
          <Play size={64} fill="white" />
          <span>Watch Highlight Video</span>
        </div>
      </section>

      {/* First Take Festival */}
      <section className="ff-festival section-padding">
        <div className="container">
          <div className="ff-section-grid">
            <div className="ff-text">
              <motion.h2 variants={fadeInUp}>{filmfactoryContent.firstTake.title}</motion.h2>
              <motion.p variants={fadeInUp}>
                {filmfactoryContent.firstTake.description}
              </motion.p>
              
              <div className="ff-stats">
                {filmfactoryContent.firstTake.stats.map((stat, i) => (
                  <div className="stat" key={i}>
                    {i === 0 && <Film size={24} />}
                    {i === 1 && <Trophy size={24} />}
                    {i === 2 && <Users size={24} />}
                    <div>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ff-posters-grid">
              <div className="poster-item">Poster 2024</div>
              <div className="poster-item">Poster 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* Winners & Gallery */}
      <section className="ff-gallery section-padding bg-dark">
        <div className="container">
          <div className="section-header text-white">
            <h2>Moments & Milestones</h2>
            <div className="title-divider"></div>
          </div>
          
          <div className="ff-gallery-grid">
            <div className="gallery-item-large">Photo Gallery Placeholder</div>
            <div className="gallery-item">Winner Photo 1</div>
            <div className="gallery-item">Winner Photo 2</div>
            <div className="gallery-item">Event Snap</div>
            <div className="gallery-item">BTS Shot</div>
          </div>
        </div>
      </section>

      {/* My Frame | My Story Community */}
      <section className="ff-community section-padding">
        <div className="container">
          <div className="community-box">
            <div className="community-header">
              <Clapperboard size={48} className="text-gold" />
              <h2>{filmfactoryContent.myFrame.title}</h2>
              <p>{filmfactoryContent.myFrame.description}</p>
            </div>
            
            <div className="upcoming-events">
              <h3>Upcoming Workshops</h3>
              <div className="event-list">
                {filmfactoryContent.myFrame.workshops.map((workshop, i) => (
                  <div className="event-item" key={i}>
                    <Calendar size={18} />
                    <span>{workshop.title} — {workshop.date}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="community-actions">
              <button className="btn btn-gold">Join Us Now</button>
              <button className="btn btn-outline">View Community Portfolio</button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Filmfactory;
