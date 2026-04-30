import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Lenis from 'lenis';
import './FilmfactoryV2.css';

interface CarouselCardProps {
  progress: MotionValue<number>;
  src: string;
  className: string;
  rotateFrom: number;
  rotateTo: number;
  xFrom: number;
  xTo: number;
  yFrom: number;
  yTo: number;
}

const CarouselCard = ({
  progress,
  src,
  className,
  rotateFrom,
  rotateTo,
  xFrom,
  xTo,
  yFrom,
  yTo,
}: CarouselCardProps) => {
  const rotate = useTransform(progress, [0.28, 0.9], [rotateFrom, rotateTo]);
  const x = useTransform(progress, [0.28, 0.9], [xFrom, xTo]);
  const y = useTransform(progress, [0.28, 0.9], [yFrom, yTo]);

  return (
    <motion.div className={`v2-card ${className}`} style={{ rotate, x, y }}>
      <img src={src} alt="Plan B visual" />
    </motion.div>
  );
};

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

  const carouselOpacity = useTransform(scrollYProgress, [0.24, 0.38], [0, 1]);
  const carouselScale = useTransform(scrollYProgress, [0.24, 1], [0.5, 1.9]);
  const carouselRotate = useTransform(scrollYProgress, [0.24, 1], [0, 45]);

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
            <CarouselCard
              progress={scrollYProgress}
              className="v2-card-top"
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1887&auto=format&fit=crop"
              rotateFrom={6}
              rotateTo={2}
              xFrom={0}
              xTo={220}
              yFrom={-260}
              yTo={-460}
            />
            <CarouselCard
              progress={scrollYProgress}
              className="v2-card-right"
              src="https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=1887&auto=format&fit=crop"
              rotateFrom={10}
              rotateTo={3}
              xFrom={280}
              xTo={460}
              yFrom={0}
              yTo={120}
            />
            <CarouselCard
              progress={scrollYProgress}
              className="v2-card-bottom"
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1888&auto=format&fit=crop"
              rotateFrom={-10}
              rotateTo={-3}
              xFrom={0}
              xTo={-220}
              yFrom={260}
              yTo={460}
            />
            <CarouselCard
              progress={scrollYProgress}
              className="v2-card-left"
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop"
              rotateFrom={-8}
              rotateTo={-2}
              xFrom={-280}
              xTo={-460}
              yFrom={0}
              yTo={-120}
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default FilmfactoryV2;
