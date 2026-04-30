import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Target, Rocket, Quote } from 'lucide-react';
import { aboutContent, teamMembers } from '../../data/mockData';
import './About.css';

const VisionMission = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="about-content"
  >
    <div className="vision-grid">
      <div className="vision-card">
        <Target size={40} className="text-gold" />
        <h2>Our Vision</h2>
        <p>{aboutContent.vision}</p>
      </div>
      <div className="vision-card">
        <Rocket size={40} className="text-gold" />
        <h2>Our Mission</h2>
        <p>{aboutContent.mission}</p>
      </div>
    </div>
  </motion.div>
);

const Team = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="about-content"
  >
    <p className="team-intro-text">{aboutContent.teamIntro}</p>
    <div className="team-grid">
      {teamMembers.map((member) => (
        <div key={member.id} className="team-card">
          <div className="team-img-placeholder">
            <Users size={48} />
          </div>
          <h3>{member.name}</h3>
          <p className="role">{member.role}</p>
          <p className="bio">{member.bio}</p>
          {member.extendedBio && (
            <p className="bio extended">{member.extendedBio}</p>
          )}
        </div>
      ))}
    </div>
  </motion.div>
);

const AboutMain = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="about-intro"
  >
    <div className="about-quote">
      <Quote size={32} className="text-gold" />
      <h2>{aboutContent.intro}</h2>
    </div>
    <p className="about-founder">{aboutContent.founderNote}</p>
    <p className="about-extended">{aboutContent.extended}</p>
    <div className="about-cta-links">
      <Link to="/about/vision" className="btn btn-outline">Our Vision & Mission</Link>
      <Link to="/about/team" className="btn btn-outline">Meet The Team</Link>
    </div>
  </motion.div>
);

const About = () => {
  const location = useLocation();
  
  return (
    <div className="about-page section-padding">
      <div className="container">
        <div className="section-header">
          <h1>About Us</h1>
          <div className="title-divider"></div>
        </div>

        <nav className="about-sub-nav">
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Overview</Link>
          <Link to="/about/vision" className={location.pathname === '/about/vision' ? 'active' : ''}>Vision & Mission</Link>
          <Link to="/about/team" className={location.pathname === '/about/team' ? 'active' : ''}>Our Team</Link>
        </nav>

        <div className="about-render-area">
          <Routes>
            <Route index element={<AboutMain />} />
            <Route path="vision" element={<VisionMission />} />
            <Route path="team" element={<Team />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default About;
