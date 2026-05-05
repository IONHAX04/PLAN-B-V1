import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import partner1 from '../../assets/partners/Partner1.jpg';
import partner2 from '../../assets/partners/Partner2.jpg';
import partner3 from '../../assets/partners/Partner3.jpg';
import partner4 from '../../assets/partners/Partner4.jpg';
import partner5 from '../../assets/partners/Partner5.jpg';
import partner6 from '../../assets/partners/Partner6.jpg';
import partner7 from '../../assets/partners/Partner7.jpg';

export const ZoomParallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: partner1,
      scale: scale4,
      className: 'parallax-item-1'
    },
    {
      src: partner2,
      scale: scale5,
      className: 'parallax-item-2'
    },
    {
      src: partner3,
      scale: scale6,
      className: 'parallax-item-3'
    },
    {
      src: partner4,
      scale: scale8,
      className: 'parallax-item-4'
    },
    {
      src: partner5,
      scale: scale5,
      className: 'parallax-item-5'
    },
    {
      src: partner6,
      scale: scale6,
      className: 'parallax-item-6'
    },
    {
      src: partner7,
      scale: scale9,
      className: 'parallax-item-7'
    }
  ];

  return (
    <div ref={container} className="zoom-parallax-container">
      <div className="zoom-parallax-sticky">
        {pictures.map(({ src, scale, className }, index) => (
          <motion.div key={index} style={{ scale }} className="parallax-wrapper">
            <div className={`parallax-image-container ${className}`}>
              <img src={src} alt={`Partner ${index + 1}`} />
              <div className="parallax-overlay"></div>
            </div>
          </motion.div>
        ))}
        
        <div className="parallax-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="parallax-text"
          >
            <span className="decor-script">Our Network</span>
            <h1>Elite Collaborations</h1>
            <p>We partner with the world's most prestigious vendors to deliver perfection.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
