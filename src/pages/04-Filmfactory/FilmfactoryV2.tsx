import { useEffect, useState } from 'react';
import { 
  Film, 
  Users, 
  Trophy, 
  Clapperboard, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  ArrowDown,
  Download,
  ExternalLink,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { filmfactoryContent, aboutContent } from '../../data/mockData';
import poster2025 from '../../assets/filmFactory/2025.jpg';
import poster2026 from '../../assets/filmFactory/2026.jpg';
import ffLogo from '../../assets/home/plan-b-film-factory.png';
import firstTakeIntroVideo from '../../assets/video/home.mp4';
import newsPaperPdf from '../../assets/video/newsPaper.pdf';
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      {/* Hero Section with Video Background */}
      <section className="ff-hero-video-section">
        <div className="video-background">
          <video autoPlay muted loop playsInline className="bg-video">
            <source src={firstTakeIntroVideo} type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>
        
        <div className="container ff-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="ff-hero-text-box"
          >
            <div className="ff-logo-branded-wrap">
              <img src={ffLogo} alt="Plan B - The Filmfactory" className="ff-hero-logo" />
            </div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {filmfactoryContent.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {filmfactoryContent.hero.description}
            </motion.p>
            
            <motion.div 
              className="ff-pillars-nav"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <p className="pillars-intro">{filmfactoryContent.hero.pillarsIntro}</p>
              <div className="pillars-links">
                {filmfactoryContent.hero.pillars.map((pillar) => (
                  <div key={pillar.id} className="pillar-link-card" onClick={() => scrollToSection(pillar.id)}>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                    <span className="scroll-hint">Explore <ArrowDown size={14} /></span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="ff-real-content">
        {/* About First Take Section */}
        <section id="first-take" className="ff-about-first-take section-padding">
          <div className="container">
            <div className="ff-header-v2">
              <span className="ff-badge">{filmfactoryContent.aboutFirstTake.tagline}</span>
              <h1>{filmfactoryContent.aboutFirstTake.title}</h1>
              <div className="title-divider-center"></div>
            </div>
            <div className="ff-about-desc-wrapper">
              <p className="main-desc-v2">{filmfactoryContent.aboutFirstTake.description}</p>
            </div>
          </div>
        </section>

        {/* First Take 2025 History */}
        <section className="ff-festival-history section-padding">
          <div className="container">
            <div className="ff-history-grid">
              <div className="ff-history-text">
                <span className="year-label">Established 2025</span>
                <h2>{filmfactoryContent.firstTake.year2025.title}</h2>
                <p>{filmfactoryContent.firstTake.year2025.description}</p>
                
                <div className="ff-stats-row">
                  {filmfactoryContent.firstTake.year2025.stats.map((stat, i) => (
                    <div className="stat-pill" key={i}>
                      <span className="val">{stat.value}</span>
                      <span className="lab">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Winners Table */}
                <div className="ff-winners-grid-v2">
                  <h3>2025 Award Winners</h3>
                  <div className="winners-mini-list">
                    {filmfactoryContent.firstTake.year2025.winners.slice(0, 6).map((w, i) => (
                      <div key={i} className="winner-row">
                        <span className="cat">{w.category}</span>
                        <span className="name">{w.winner}</span>
                      </div>
                    ))}
                    <div className="and-more">...and 7 more categories</div>
                  </div>
                </div>
              </div>
              <div className="ff-history-visual">
                <div className="poster-stack">
                  <img src={poster2025} alt="2025 Poster" className="poster-main" />
                </div>
              </div>
            </div>

            {/* Jury 2025 */}
            <div className="ff-jury-section">
              <div className="jury-header">
                <h3>The 2025 Jury</h3>
                <div className="jury-divider"></div>
              </div>
              {filmfactoryContent.firstTake.year2025.jury.map((jury, i) => (
                <div key={i} className="jury-card-v2">
                  <div className="jury-img-box">
                    <div className="placeholder-jury-img"><Users size={40} /></div>
                  </div>
                  <div className="jury-info-v2">
                    <h4>{jury.name}</h4>
                    <span className="jury-credits">{jury.credits}</span>
                    <p>{jury.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* First Take 2026 Expansion */}
        <section className="ff-festival-history section-padding alt-bg">
          <div className="container">
            <div className="ff-history-grid reverse">
              <div className="ff-history-text">
                <span className="year-label">The Bern Edition</span>
                <h2>{filmfactoryContent.firstTake.year2026.title}</h2>
                <p className="ff-tagline-v2">{filmfactoryContent.firstTake.year2026.tagline}</p>
                <p>{filmfactoryContent.firstTake.year2026.description}</p>
                
                <div className="ff-stats-row">
                  {filmfactoryContent.firstTake.year2026.stats.map((stat, i) => (
                    <div className="stat-pill gold" key={i}>
                      <span className="val">{stat.value}</span>
                      <span className="lab">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ff-history-visual">
                <div className="poster-stack">
                  <img src={poster2026} alt="2026 Poster" className="poster-main" />
                </div>
              </div>
            </div>

            {/* Jury 2026 */}
            <div className="ff-jury-section">
              <div className="jury-header">
                <h3>The 2026 Jury</h3>
                <div className="jury-divider"></div>
              </div>
              <div className="jury-grid-v2">
                {filmfactoryContent.firstTake.year2026.jury.map((jury, i) => (
                  <div key={i} className="jury-card-v2 small">
                    <div className="jury-img-box">
                      <div className="placeholder-jury-img"><Users size={30} /></div>
                    </div>
                    <div className="jury-info-v2">
                      <h4>{jury.name}</h4>
                      <span className="jury-credits">{jury.credits}</span>
                      <p>{jury.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newspaper Download Section */}
        <section className="ff-newspaper-section section-padding">
          <div className="container">
            <div className="newspaper-glass-card">
              <div className="news-icon"><Download size={40} /></div>
              <h2>In the Headlines</h2>
              <p>Download our official First Take Newspaper featuring deep dives into the films, exclusive interviews, and festival highlights.</p>
              <a href={newsPaperPdf} download className="btn btn-gold">
                Download PDF Newspaper <Download size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* My Frame | My Story Section */}
        <section id="my-frame" className="ff-community-box-section section-padding">
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
                <a href={filmfactoryContent.links.joinCommunity} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                  Join Community <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Quote Banner */}
        <section className="ff-quote-banner-v2">
          <div className="container">
            <motion.div 
              className="ff-quote-content-v2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Quote className="quote-icon-v2" size={50} />
              <blockquote className="ff-quote-text-v2">
                {aboutContent.filmfactoryQuote}
              </blockquote>
              <cite className="ff-quote-cite-v2">— The Plan B Philosophy</cite>
            </motion.div>
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
      </div>
    </div>
  );
};

export default FilmfactoryV2;

