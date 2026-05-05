import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Film, Users, Trophy, Clapperboard, Calendar } from 'lucide-react';
import Lenis from 'lenis';
import { filmfactoryContent } from '../../data/mockData';
import poster2024 from '../../assets/filmFactory/First-take-2024.jpg';
import poster2025 from '../../assets/filmFactory/First-take-2025.jpg';
import ffImg1 from '../../assets/filmFactory/The-film-factory1.jpg';
import ffImg2 from '../../assets/filmFactory/The-film-factory2.jpg';
import ffImg3 from '../../assets/filmFactory/The-film-factory3.jpg';
import ffImg4 from '../../assets/filmFactory/The-film-factory4.jpg';
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
                <img src={ffImg1} alt="Plan B Filmfactory 1" />
              </div>
              <div>
                <img src={ffImg2} alt="Plan B Filmfactory 2" />
              </div>
              <div>
                <img src={ffImg3} alt="Plan B Filmfactory 3" />
              </div>
              <div>
                <img src={ffImg4} alt="Plan B Filmfactory 4" />
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
                <div className="poster-wrapper-v2">
                  <img src={poster2024} alt="First Take 2024" />
                  <div className="poster-label-v2">First Take 2024</div>
                </div>
                <div className="poster-wrapper-v2">
                  <img src={poster2025} alt="First Take 2025" />
                  <div className="poster-label-v2">First Take 2025</div>
                </div>
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
