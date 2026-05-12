import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { testimonials } from '../../data/mockData';

export const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  // Function to render quote with bolded keywords
  const renderQuote = (text: string) => {
    const boldKeywords = [
      'handled with great care,', 
      'professionalism, and passion.', 
      'Keep growing, keep shining!',
      'planning, creative ideas, and',
      'marketing.',
      'the way you took care of the',
      'artists',
      "You're the best!",
      'guiding',
      'designing',
      'This cooperation will surely continue!',
      'A young team full of energy.',
      'Plan B - The Eventguide!',
      'making sure my wishes were',
      'implemented exactly as I had envisioned',
      'So keep it up and always stay this amazing.',
      'I truly couldn\'t have wished for a better planner.',
      'you didn\'t just act as a planner',
      'passion and precision.',
      'Thanks Fam!',
      'I\'ve received great feedback',
      'I definitely won\'t be booking you for the last time',
      'Plan B Team',
      'Plan B',
      '21st birthday party!',
      'Thanks Fam, You\'re amazing!'
    ];
    
    let parts: (string | JSX.Element)[] = [text];
    boldKeywords.forEach(keyword => {
      let newParts: (string | JSX.Element)[] = [];
      parts.forEach(part => {
        if (typeof part === 'string') {
          const splitPart = part.split(keyword);
          for (let i = 0; i < splitPart.length; i++) {
            newParts.push(splitPart[i]);
            if (i < splitPart.length - 1) {
              newParts.push(<strong key={keyword + i}>{keyword}</strong>);
            }
          }
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });
    return parts;
  };

  return (
    <div className="testimonial-section-wrapper">
      <div className="feedback-background">
        <img src={t.image} alt="" className="bg-blur" />
        <div className="bg-overlay"></div>
      </div>

      <div className="testimonial-carousel-container">
        <div className="feedback-header">
          <h2 className="decor-script-white">Customer Feedback</h2>
        </div>

        <div className="carousel-main">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="feedback-card"
            >
              <div className="profile-image-container">
                <div className="profile-image-circle">
                  <img src={t.image} alt={t.clientName} />
                </div>
              </div>

              <div className="quote-mark left">
                <svg width="45" height="35" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 0C6.04416 0 0 6.04416 0 13.5V35H18V13.5H9C9 11.0147 11.0147 9 13.5 9V0ZM36 0C28.5442 0 22.5 6.04416 22.5 13.5V35H40.5V13.5H31.5C31.5 11.0147 33.5147 9 36 9V0Z" fill="black"/>
                </svg>
              </div>
              
              <div className="feedback-content">
                <h3 className="client-name">{t.clientName}</h3>
                <p className="event-date">{t.eventDate}</p>
                <p className="event-type">{t.eventType}</p>
                
                <div className="divider-with-heart">
                  <div className="line"></div>
                  <Heart size={14} fill="currentColor" />
                  <div className="line"></div>
                </div>

                <p className="feedback-text">
                  {renderQuote(t.quote)}
                </p>
              </div>

              <div className="quote-mark right">
                <svg width="45" height="35" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.5 35C38.9558 35 45 28.9558 45 21.5V0H27V21.5H36C36 23.9853 33.9853 26 31.5 26V35ZM9 35C16.4558 35 22.5 28.9558 22.5 21.5V0H4.5V21.5H13.5C13.5 23.9853 11.4853 26 9 26V35Z" fill="black"/>
                </svg>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="instagram-handle">@planb_theeventguide</div>

          {/* Navigation Controls Overlay */}
          <div className="carousel-controls-overlay">
            <button onClick={prev} className="nav-btn prev"><ChevronLeft size={32} /></button>
            <button onClick={next} className="nav-btn next"><ChevronRight size={32} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};
