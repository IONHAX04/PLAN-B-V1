import { useState, useEffect } from 'react';
import { 
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
import firstTakeIntroVideo from '../../assets/video/filmFactory.mp4';
import newsPaperPdf from '../../assets/video/newsPaper.pdf';
import mithranImg from '../../assets/directors/mithran.jpeg';
import tamizhImg from '../../assets/directors/tamizh.jpeg';
import ganeshImg from '../../assets/directors/ganesh-k-babu.jpeg';
import ffHeroPoster from '../../assets/filmFactory/The-film-factory1.jpg';
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
      {/* Hero Section - Simplified & Professional */}
      <section className="ff-hero-video-section">
        <div className="video-background">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto"
            poster={ffHeroPoster}
            className="bg-video"
          >
            <source src={firstTakeIntroVideo} type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>
        
        <div className="container ff-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="ff-hero-text-box"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {filmfactoryContent.hero.title}
            </motion.h1>
          </motion.div>
        </div>

        <motion.div 
          className="ff-hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={() => scrollToSection('ff-intro')}
        >
          <span className="scroll-text">Explore Filmfactory</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      <div className="ff-real-content">
        {/* New Intro & Pillars Section - "Next Page" look */}
        <section id="ff-intro" className="ff-intro-section section-padding">
          <div className="container">
            <div className="ff-intro-grid">
              <motion.div 
                className="ff-intro-text"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="decor-script-gold">The Cinematic Arm</span>
                <p>{filmfactoryContent.hero.description}</p>
              </motion.div>
              
              <div className="ff-pillars-nav-v2">
                <p className="pillars-intro-v2">{filmfactoryContent.hero.pillarsIntro}</p>
                <div className="pillars-links-v2">
                  {filmfactoryContent.hero.pillars.map((pillar) => (
                    <div key={pillar.id} className="pillar-link-card-v2" onClick={() => scrollToSection(pillar.id)}>
                      <h3>{pillar.title}</h3>
                      <p>{pillar.description}</p>
                      <span className="scroll-hint-v2">Explore Section <ArrowDown size={14} /></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

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
              </div>
              <div className="ff-history-visual">
                <div className="poster-stack">
                  <img src={poster2025} alt="2025 Poster" className="poster-main" />
                </div>
              </div>
            </div>

            {/* Dedicated Winners Showcase */}
            <div className="ff-winners-showcase-v2">
              <div className="showcase-header">
                <Trophy size={32} className="text-gold" />
                <h3>First Take 2025 <span>Award Winners</span></h3>
              </div>
              <div className="winners-grid-v3">
                {filmfactoryContent.firstTake.year2025.winners.map((w, i) => (
                  <div key={i} className="winner-card-v3">
                    <span className="cat">{w.category}</span>
                    <span className="name">{w.winner}</span>
                    <span className="film">"{w.film}"</span>
                  </div>
                ))}
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
                    <img 
                      src={jury.name.includes('Mithran') ? mithranImg : jury.name.includes('Tamizh') ? tamizhImg : ganeshImg} 
                      alt={jury.name} 
                      className="jury-actual-img" 
                    />
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
                <span className="year-label">The Festival Upgrade</span>
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
            
            {/* Dedicated Winners Showcase 2026 */}
            <div className="ff-winners-showcase-v2">
              <div className="showcase-header">
                <Trophy size={32} className="text-gold" />
                <h3>First Take 2026 <span>Award Winners</span></h3>
              </div>
              <div className="winners-grid-v3">
                {filmfactoryContent.firstTake.year2026.winners?.map((w, i) => (
                  <div key={i} className="winner-card-v3">
                    <span className="cat">{w.category}</span>
                    <span className="name">{w.winner}</span>
                    <span className="film">"{w.film}"</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Jury 2026 */}
            <div className="ff-jury-section">
              <div className="jury-header">
                <h3>The 2026 Jury</h3>
                <div className="jury-divider"></div>
              </div>
              <div className="jury-list-v2">
                {filmfactoryContent.firstTake.year2026.jury.map((jury, i) => (
                  <div key={i} className={`jury-card-v2 ${i % 2 !== 0 ? 'reverse' : ''}`}>
                    <div className="jury-img-box">
                      <img 
                        src={jury.name.includes('Tamizh') ? tamizhImg : ganeshImg} 
                        alt={jury.name} 
                        className="jury-actual-img" 
                      />
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

        {/* Newspaper Download Section - Enhanced */}
        <section className="ff-newspaper-section section-padding">
          <div className="container">
            <motion.div 
              className="newspaper-premium-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="newspaper-content">
                <div className="news-badge">Festival Exclusive</div>
                <h2>The First Take <span>Chronicle</span></h2>
                <p>Dive deep into the stories behind the frames. Our official festival newspaper features exclusive interviews with the 2025 jury, detailed breakdowns of the 19 screened films, and a look at the future of Tamil cinema in Europe.</p>
                
                <div className="news-features">
                  <div className="n-feat"><Play size={16} /> Jury Insights</div>
                  <div className="n-feat"><Play size={16} /> Film Breakdowns</div>
                  <div className="n-feat"><Play size={16} /> Event Gallery</div>
                </div>

                <a href={newsPaperPdf} download className="btn btn-gold news-btn">
                  Download Digital Edition <Download size={18} />
                </a>
              </div>

              <div className="newspaper-visual">
                <div className="newspaper-mockup">
                  <div className="mock-page front">
                    <img src={poster2025} alt="Newspaper Preview" />
                    <div className="mock-overlay"></div>
                    <div className="mock-header">THE CHRONICLE</div>
                  </div>
                  <div className="mock-page back"></div>
                  <div className="mock-floating-icon"><Download size={30} /></div>
                </div>
              </div>
            </motion.div>
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

