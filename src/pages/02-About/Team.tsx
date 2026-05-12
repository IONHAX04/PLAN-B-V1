import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { X, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { teamMembers } from '../../data/mockData';
import teamBg from '../../assets/about/aboutUsBg.jpeg';
import './About.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const Team = () => {
  const [selectedMember, setSelectedMember] = React.useState<any>(null);

  return (
    <div className="about-page-reimagined">
      {/* Team Header */}
      <section 
        className="about-hero-alipay team-hero-special"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${teamBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title-alipay"
            style={{ color: '#fff' }}
          >
            <div className="decor-script" style={{ color: 'var(--accent)' }}>Our People</div>
            <h1 style={{ color: '#fff' }}>Meet Our <span style={{ color: 'var(--accent)' }}>Visionaries</span></h1>
            <div className="title-divider-center" style={{ background: 'var(--accent)' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', fontWeight: 500 }}>The driving force behind unforgettable moments across Switzerland.</p>
          </motion.div>
        </div>
      </section>

      {/* Team Swiper Section */}
      <section className="about-team-alipay dark-bg section-padding">
        <div className="container">
          <div className="swiper-container-outer">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              breakpoints={{
                320: { slidesPerView: 1.5, spaceBetween: 20 },
                768: { slidesPerView: 2.2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 50 }
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

      {/* Member Detail Modal */}
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
                  <div className="modal-meta-info">
                    <div className="meta-item">
                      <strong>Languages:</strong> {selectedMember.languages}
                    </div>
                    <div className="meta-item">
                      <strong>Skills:</strong> {selectedMember.skills}
                    </div>
                  </div>
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

export default Team;
