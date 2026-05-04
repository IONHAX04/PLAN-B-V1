import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Film, Users, Trophy, Clapperboard, Calendar } from 'lucide-react';
import Lenis from 'lenis';
import { filmfactoryContent } from '../../data/mockData';
import './Filmfactory.css';
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

  // Keep text transitions separated to avoid overlap and hide all text at the end.
  const textOneOpacity = useTransform(scrollYProgress, [0, 0.14, 0.2, 0.24], [1, 1, 0, 0]);
  const textTwoOpacity = useTransform(scrollYProgress, [0.26, 0.34, 0.46, 0.52], [0, 1, 1, 0]);
  const textThreeOpacity = useTransform(scrollYProgress, [0.56, 0.64, 0.72, 0.78, 1], [0, 1, 1, 0, 0]);

  const textOneScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.82]);
  const textTwoScale = useTransform(scrollYProgress, [0.26, 0.52], [0.82, 1]);
  const textThreeScale = useTransform(scrollYProgress, [0.56, 0.78], [0.82, 1]);

  const carouselOpacity = useTransform(scrollYProgress, [0.24, 1], [0, 1]);
  const carouselScale = useTransform(scrollYProgress, [0.24, 1], [0.5, 1.5]);
  const carouselRotate = useTransform(scrollYProgress, [0.24, 1], [0, 100]);

  return (
    <div className="v2-page">
      <main ref={container} className="v2-smooth-main">
        <div className="v2-smooth-sticky">
          <div className="v2-text-stack">
            <motion.div className="v2-text-container" style={{ opacity: textOneOpacity, scale: textOneScale }}>
              <p>Film Factory</p>
            </motion.div>
            <motion.div className="v2-text-container" style={{ opacity: textTwoOpacity, scale: textTwoScale }}>
              <p>So smooooth</p>
            </motion.div>
            <motion.div className="v2-text-container" style={{ opacity: textThreeOpacity, scale: textThreeScale }}>
              <p>My Frame</p>
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

      <div className="ff-real-content">
        <section className="ff-festival section-padding">
          <div className="container">
            <div className="ff-grid-info">
              <div className="ff-text-box">
                <h2>{filmfactoryContent.firstTake.title}</h2>
                <p>{filmfactoryContent.firstTake.description}</p>
                <div className="ff-stats-box">
                  {filmfactoryContent.firstTake.stats.map((stat, i) => (
                    <div className="stat-card" key={i}>
                      {i === 0 && <Film size={24} />}
                      {i === 1 && <Trophy size={24} />}
                      {i === 2 && <Users size={24} />}
                      <div className="val">{stat.value}</div>
                      <div className="lab">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ff-posters-visual">
                <div className="poster-2024">First Take 2024</div>
                <div className="poster-2025">First Take 2025</div>
              </div>
            </div>
          </div>
        </section>

        <section className="ff-community-box-section section-padding">
          <div className="container">
            <div className="premium-community-card">
              <Clapperboard size={50} className="text-gold" />
              <h2>{filmfactoryContent.myFrame.title}</h2>
              <p>{filmfactoryContent.myFrame.description}</p>

              <div className="workshop-list-mini">
                {filmfactoryContent.myFrame.workshops.map((w, i) => (
                  <div key={i} className="mini-item">
                    <Calendar size={14} />
                    <span>
                      {w.title} — {w.date}
                    </span>
                  </div>
                ))}
              </div>

              <div className="cta-group">
                <button className="btn-ff">Join Community</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FilmfactoryV2;
