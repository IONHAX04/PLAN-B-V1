import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Film, Users, Trophy, Clapperboard } from 'lucide-react';
import { filmfactoryContent } from '../../data/mockData';
import './Filmfactory.css';

const Column = ({ images, y }: { images: string[], y: any }) => {
  return (
    <motion.div style={{ y }} className="ff-column">
      {images.map((src, i) => (
        <div key={i} className="ff-image-container">
          <img src={src} alt="Film" />
          <div className="ff-image-overlay"></div>
        </div>
      ))}
    </motion.div>
  );
};

const Filmfactory = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  // Text Animations
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  // Column Parallax
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -1500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -2500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -1200]);

  const imagesColumn1 = [
    "https://images.unsplash.com/photo-1485846234645-a62644ef7467?q=80&w=2069",
    "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070",
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925",
    "https://images.unsplash.com/photo-1542204172-83160b9434ca?q=80&w=2070",
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed0963c?q=80&w=2070"
  ];

  const imagesColumn2 = [
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1968",
    "https://images.unsplash.com/photo-1535016120720-40c646bebbfc?q=80&w=2070",
    "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070",
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071",
    "https://images.unsplash.com/photo-1598897349489-0d27ef233e1a?q=80&w=2070"
  ];

  const imagesColumn3 = [
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070",
    "https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80&w=2070",
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
  ];

  return (
    <div className="filmfactory-wrapper-olivier">
      <div ref={container} className="ff-scroll-container">
        {/* Sticky Hero Background (Grid) */}
        <div className="ff-sticky-3d">
          <div className="ff-perspective-plane">
            <div className="ff-columns-container">
              <Column images={imagesColumn1} y={y1} />
              <Column images={imagesColumn2} y={y2} />
              <Column images={imagesColumn3} y={y3} />
            </div>
          </div>
          
          {/* Centered Text - Fades out */}
          <motion.div 
            style={{ opacity: titleOpacity, scale: titleScale }}
            className="ff-intro-text"
          >
            <div className="ff-badge-top decor-script-small">Sub Company of Plan B</div>
            <h1 className="ff-main-title">FILMFACTORY</h1>
            <div className="title-divider-center"></div>
            <p className="ff-scroll-hint">Scroll to begin the journey</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="ff-real-content">
        <section className="ff-festival section-padding">
          <div className="container">
            <div className="ff-grid-info">
              <div className="ff-text-box">
                <h2>{filmfactoryContent.firstTake.year2025.title}</h2>
                <p>{filmfactoryContent.firstTake.year2025.description}</p>
                <div className="ff-stats-box">
                  {filmfactoryContent.firstTake.year2025.stats.map((stat: any, i: number) => (
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

        {/* Community Section */}
        <section className="ff-community-box-section section-padding">
          <div className="container">
            <div className="premium-community-card">
              <Clapperboard size={50} className="text-gold" />
              <h2>{filmfactoryContent.myFrame.title}</h2>
              <p>{filmfactoryContent.myFrame.description}</p>
              
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

export default Filmfactory;
