import { useEffect, useState } from 'react';
import { Film, Users, Trophy, Clapperboard, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { filmfactoryContent } from '../../data/mockData';
import poster2025 from '../../assets/filmFactory/2025.jpg';
import poster2026 from '../../assets/filmFactory/2026.jpg';
import './Filmfactory.css';
import './FilmfactoryV2.css';

// Import all images from the filmFactory folder for the gallery
const imageModules = import.meta.glob('../../assets/filmFactory/Gallery*.{png,jpg,jpeg,webp}', { eager: true });
const galleryImages = Object.values(imageModules).map((mod: any) => mod.default || mod);

const FilmfactoryV2 = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

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

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % galleryImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="v2-page">
      {/* Hero section hidden for now as per user request */}
      
      <div className="ff-real-content" style={{ paddingTop: '120px' }}>
        <section className="ff-festival section-padding">
          <div className="container">
            <div className="ff-header-v2">
              <span className="ff-badge">{filmfactoryContent.firstTake.subtitle}</span>
              <h1>{filmfactoryContent.firstTake.title}</h1>
              <p className="ff-tagline">{filmfactoryContent.firstTake.tagline}</p>
            </div>

            <div className="ff-grid-info">
              <div className="ff-text-box">
                <p className="main-desc">{filmfactoryContent.firstTake.description}</p>
                
                <div className="ff-highlights">
                  {filmfactoryContent.firstTake.highlights.map((h, i) => (
                    <div key={i} className="highlight-item">
                      <h3>{h.title}</h3>
                      <p>{h.description}</p>
                    </div>
                  ))}
                </div>

                <div className="ff-stats-box">
                  {filmfactoryContent.firstTake.stats.map((stat, i) => (
                    <div className="stat-card" key={i}>
                      {i === 0 && <Film size={24} />}
                      {i === 1 && <Clapperboard size={24} />}
                      {i === 2 && <Users size={24} />}
                      <div className="val">{stat.value}</div>
                      <div className="lab">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ff-posters-visual">
                <div className="ff-decorative-images">
                  <div className="decorative-item main">
                    <img src={poster2025} alt="First Take 2025" />
                    <div className="item-badge">2025</div>
                  </div>
                  <div className="decorative-item secondary">
                    <img src={poster2026} alt="First Take 2026" />
                    <div className="item-badge">2026</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Winners Section */}
            <div className="ff-winners-section section-padding">
              <div className="ff-section-header-minimal">
                <Trophy size={40} className="text-gold" />
                <h2>First Take 2025 <span>Winners</span></h2>
              </div>
              <div className="winners-grid">
                {filmfactoryContent.firstTake.winners.map((w, i) => (
                  <div key={i} className="winner-card">
                    <div className="winner-cat">{w.category}</div>
                    <div className="winner-name">{w.winner}</div>
                    <div className="winner-film">"{w.film}"</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Full-width Gallery Section */}
        <section className="ff-gallery-section-v2 section-padding">
          <div className="container-fluid px-4">
            <div className="section-header-v2">
              <h1 className="massive-title-ff">GALLERY</h1>
              <p className="subtitle-ff">PHOTOS & HIGHLIGHTS</p>
              <div className="title-divider-center"></div>
            </div>
            <div className="ff-collage-masonry">
              {galleryImages.map((img, index) => {
                // Logic to create a collaged look: 
                // Every 7th item is large, every 5th is tall, every 3rd is wide
                let sizeClass = "";
                if (index % 7 === 0) sizeClass = "large";
                else if (index % 5 === 0) sizeClass = "tall";
                else if (index % 3 === 0) sizeClass = "wide";

                return (
                  <div 
                    className={`collage-item-ff ${sizeClass}`} 
                    key={index}
                    onClick={() => setSelectedIdx(index)}
                  >
                    <img src={img as string} alt={`Gallery ${index + 1}`} loading="lazy" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Lightbox Modal for FF Gallery */}
        <AnimatePresence>
          {selectedIdx !== null && (
            <motion.div 
              className="lightbox-overlay-v2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIdx(null)}
            >
              <motion.button 
                className="close-btn-v2"
                onClick={() => setSelectedIdx(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={32} />
              </motion.button>

              <button className="nav-btn-v2 prev" onClick={prevImage}>
                <ChevronLeft size={48} />
              </button>

              <motion.div 
                className="lightbox-img-container"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={galleryImages[selectedIdx] as string} 
                  alt={`Gallery Large ${selectedIdx + 1}`} 
                />
              </motion.div>

              <button className="nav-btn-v2 next" onClick={nextImage}>
                <ChevronRight size={48} />
              </button>

              <div className="lightbox-counter">
                {selectedIdx + 1} / {galleryImages.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <section className="ff-community-box-section section-padding">
          <div className="container">
            <div className="premium-community-card">
              <Clapperboard size={60} className="text-gold" />
              <h2>{filmfactoryContent.myFrame.title}</h2>
              <p className="ff-tagline-community">{filmfactoryContent.myFrame.tagline}</p>
              <p className="community-desc">{filmfactoryContent.myFrame.description}</p>

              <div className="community-offerings-grid">
                {filmfactoryContent.myFrame.offerings.map((offering, i) => (
                  <div key={i} className="offering-card">
                    <h3>{offering.title}</h3>
                    <p>{offering.description}</p>
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

