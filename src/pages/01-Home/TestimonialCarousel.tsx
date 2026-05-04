import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
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

  return (
    <div className="testimonial-carousel-container">
      <div className="carousel-main">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="testimonial-slide"
          >
            <div className="testimonial-quote-icon">
              <Quote size={64} fill="var(--accent)" stroke="none" />
            </div>
            
            <p className="testimonial-text">
              {t.quote}
            </p>

            <div className="testimonial-author">
              <div className="author-info">
                <h4 className="author-name">{t.clientName}</h4>
                <p className="author-event">{t.eventType} — {t.eventDate}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="carousel-controls">
          <button onClick={prev} className="carousel-btn prev" aria-label="Previous testimonial">
            <ChevronLeft size={24} />
          </button>
          
          <div className="carousel-pagination">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`pagination-dot ${i === index ? 'active' : ''}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button onClick={next} className="carousel-btn next" aria-label="Next testimonial">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
