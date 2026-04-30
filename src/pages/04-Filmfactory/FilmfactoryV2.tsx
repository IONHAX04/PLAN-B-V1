import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import './FilmfactoryV2.css';

const FilmfactoryV2 = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    let animationFrameId = 0;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const textOneOpacity = useTransform(scrollYProgress, [0, 0.14, 0.24, 0.34], [1, 1, 0, 0]);
  const textTwoOpacity = useTransform(scrollYProgress, [0.2, 0.32, 0.48, 0.62], [0, 1, 1, 0]);
  const textThreeOpacity = useTransform(scrollYProgress, [0.52, 0.68, 0.95, 1], [0, 1, 1, 1]);

  const textOneScale = useTransform(scrollYProgress, [0, 0.24], [1, 0.8]);
  const textTwoScale = useTransform(scrollYProgress, [0.2, 0.62], [0.8, 1]);
  const textThreeScale = useTransform(scrollYProgress, [0.52, 1], [0.8, 1]);

  const carouselOpacity = useTransform(scrollYProgress, [0.24, 1], [0, 1]);
  const carouselScale = useTransform(scrollYProgress, [0.24, 1], [0.5, 1.5]);
  const carouselRotate = useTransform(scrollYProgress, [0.24, 1], [0, 100]);

  return (
    <main ref={container} className="v2-smooth-main">
      <div className="v2-smooth-sticky">
        <div className="v2-text-stack">
          <motion.div className="v2-text-container" style={{ opacity: textOneOpacity, scale: textOneScale }}>
            <p>Smooth Scroll</p>
          </motion.div>
          <motion.div className="v2-text-container" style={{ opacity: textTwoOpacity, scale: textTwoScale }}>
            <p>So smooooth</p>
          </motion.div>
          <motion.div className="v2-text-container" style={{ opacity: textThreeOpacity, scale: textThreeScale }}>
            <p>Weeeeeeeee</p>
          </motion.div>
        </div>

        <div className="v2-carousel-container">
          <motion.div
            className="v2-carousel"
            style={{ opacity: carouselOpacity, scale: carouselScale, rotate: carouselRotate }}
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1887&auto=format&fit=crop"
                alt="Plan B visual 1"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=1887&auto=format&fit=crop"
                alt="Plan B visual 2"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1888&auto=format&fit=crop"
                alt="Plan B visual 3"
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop"
                alt="Plan B visual 4"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default FilmfactoryV2;
