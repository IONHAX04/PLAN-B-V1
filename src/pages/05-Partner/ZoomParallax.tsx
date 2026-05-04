import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

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
      src: '/assets/images/parallax/partner_1.png',
      scale: scale4,
      className: 'parallax-item-1'
    },
    {
      src: '/assets/images/parallax/partner_2.png',
      scale: scale5,
      className: 'parallax-item-2'
    },
    {
      src: '/assets/images/parallax/partner_3.png',
      scale: scale6,
      className: 'parallax-item-3'
    },
    {
      src: '/assets/images/parallax/partner_4.png',
      scale: scale8,
      className: 'parallax-item-4'
    },
    {
      src: '/assets/images/parallax/partner_5.png',
      scale: scale5,
      className: 'parallax-item-5'
    },
    {
      src: '/assets/images/parallax/partner_6.png',
      scale: scale6,
      className: 'parallax-item-6'
    },
    {
      src: '/assets/images/parallax/partner_7.png',
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
