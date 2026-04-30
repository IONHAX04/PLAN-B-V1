import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { X, Quote, ArrowLeft, ArrowRight, Users, Target, Rocket, Lightbulb, Sprout, ShieldCheck, ChevronRight } from 'lucide-react';
import { aboutContent, teamMembers } from '../../data/mockData';
import './About.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const About = () => {
  const [selectedMember, setSelectedMember] = React.useState<any>(null);

  const processSteps = [
    { title: "Inquiry", desc: "Initial contact & meeting", date: "Step 01" },
    { title: "Planning", desc: "Concept & budget design", date: "Step 02" },
    { title: "Execution", desc: "On-site coordination", date: "Step 03" },
    { title: "Finalization", desc: "Event wrap-up & feedback", date: "Step 04" }
  ];

  return (
    <div className="about-page-reimagined">
      {/* 1. Hero Section - Alipay Style */}
      <section className="about-hero-alipay">
        <div className="container hero-grid">
          <motion.div 
            className="hero-text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-year">2026</div>
            <h1>Plan B – The Event Guide<br /><span>Excellence Redefined</span></h1>
            <p className="hero-desc">{aboutContent.intro}</p>
            <button className="btn-gold-alipay">Get Started <ChevronRight size={18} /></button>
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

      {/* 2. Team Carousel Section */}
      <section className="about-team-alipay dark-bg">
        <div className="container">
          <motion.div {...fadeInUp} className="section-title-alipay">
            <div className="decor-line"></div>
            <h2>Meet Our Visionaries</h2>
            <p>The driving force behind unforgettable moments</p>
          </motion.div>
          
          <div className="swiper-container-outer">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                1024: { slidesPerView: 3 }
              }}
              modules={[EffectCoverflow, Navigation, Autoplay]}
              className="team-swiper-alipay"
            >
              {teamMembers.map((member) => (
                <SwiperSlide key={member.id} className="team-slide-alipay">
                  <div className="slide-card-inner" onClick={() => setSelectedMember(member)}>
                    <div className="card-image-box">
                      <img src={member.image || '/assets/images/abyy.png'} alt={member.name} />
                    </div>
                    <div className="card-info-box">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="swiper-button-prev-custom"><ArrowLeft size={24} /></button>
            <button className="swiper-button-next-custom"><ArrowRight size={24} /></button>
          </div>
        </div>
      </section>

      {/* 3. Values/Benefits Section */}
      <section className="about-values-alipay">
        <div className="container">
          <motion.div {...fadeInUp} className="section-title-alipay">
            <div className="decor-line"></div>
            <h2>Core Pillars</h2>
          </motion.div>
          
          <div className="values-grid-alipay">
            <motion.div {...fadeInUp} className="value-item">
              <div className="value-icon"><Lightbulb size={40} /></div>
              <h3>Innovation</h3>
              <p>We think one step ahead, always providing a Plan B.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="value-item">
              <div className="value-icon"><Users size={40} /></div>
              <h3>Collaboration</h3>
              <p>Deep-rooted partnerships with elite service providers.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="value-item">
              <div className="value-icon"><ShieldCheck size={40} /></div>
              <h3>Precision</h3>
              <p>Every detail calculated for flawless execution.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.6 }} className="value-item">
              <div className="value-icon"><Sprout size={40} /></div>
              <h3>Growth</h3>
              <p>Creating long-term impact through cultural events.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Process Timeline Section */}
      <section className="about-process-alipay dark-bg">
        <div className="container">
          <motion.div {...fadeInUp} className="section-title-alipay">
            <div className="decor-line"></div>
            <h2>Our Journey to Excellence</h2>
          </motion.div>

          <div className="process-timeline-container">
            <div className="timeline-line"></div>
            <div className="timeline-steps">
              {processSteps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  className="timeline-step"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="step-node"></div>
                  <div className="step-content">
                    <span className="step-date">{step.date}</span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="final-cta-box">
            <button className="btn-gold-alipay large">Request a Consultation</button>
          </div>
        </div>
      </section>

      {/* Modal - Reusing the one from before but slightly more integrated */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            className="team-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div 
              className="team-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setSelectedMember(null)}>
                <X size={24} />
              </button>
              <div className="modal-inner">
                <div className="modal-left">
                  <img src={selectedMember.image || '/assets/images/abyy.png'} alt={selectedMember.name} />
                </div>
                <div className="modal-right">
                  <span className="modal-role">{selectedMember.role}</span>
                  <h2>{selectedMember.name}</h2>
                  <p className="modal-bio-text">{selectedMember.bio}</p>
                  {selectedMember.extendedBio && (
                    <div className="modal-quote">
                      <Quote size={20} className="text-gold" />
                      <p>{selectedMember.extendedBio}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
