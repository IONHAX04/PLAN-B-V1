import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Film,
  Compass,
  Lock,
  Sparkles
} from 'lucide-react';
import { HeroVideo } from './HeroVariants';
import { SwapStory } from './SwapStory';
import StickyCardsFeatures from './StickyCardsFeatures';
import { TestimonialCarousel } from './TestimonialCarousel';
import './TestimonialCarousel.css';
import {
  siteConfig,
  services,
  projects
} from '../../data/mockData';
import './Home.css';
import './ProjectsEnhancement.css';
import './StickyCardsFeatures.css';

// Import all logos from the partnerlogo folder
const logoModules = import.meta.glob('../../assets/partnerlogo/*.{png,jpg,jpeg,webp}', { eager: true });
const partnerImages = Object.values(logoModules).map((mod: any) => mod.default || mod).slice(0, 16); // Show first 16 on home
import ffHero from '../../assets/filmFactory/The-film-factory1.jpg';
import goat2 from '../../assets/events/goat_2.jpg';
import penImage from '../../assets/home/pen.png';
import ffBrandedLogo from '../../assets/home/plan-b-film-factory.png';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] as any }
  } as any;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="home-page"
    >
      {/* 
        HERO VARIANTS:
        <HeroVariant1 /> - Gallery style from screenshot
        <HeroVariant2 /> - Immersive full-screen
        <HeroVariant3 /> - Dynamic split screen
      */}
      <HeroVideo />

      {/* Secondary Hero Section - Features Grid (Grey Tone) */}
      <section className="home-features-grid section-padding grey-section">
        <div className="container">
          <motion.div {...fadeInUp} className="features-header">
            <span className="decor-script-small">The Method</span>
            <h2>Precision in Every Detail</h2>
          </motion.div>
          
          <div className="grid-layout">
          {/* Card 1: Strategic Curation */}
          <motion.div {...fadeInUp} className="feature-card large light-card curation-card">
            <div className="card-top">
              <Compass className="icon-gold" size={32} />
              <h3>Strategic Curation</h3>
            </div>
            <p>Every event is a unique architectural project. We design not just for the moment, but for the legacy.</p>
            <div className="card-bg-decor-pen">
              <img src={penImage} alt="" />
            </div>
          </motion.div>

          {/* Card 2: Absolute Privacy */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="feature-card small light-card privacy-card">
            <div className="card-top">
              <Lock className="icon-gold" size={32} />
              <h3>Absolute Privacy</h3>
            </div>
            <p>Discrete management for high-profile portfolios and private family estates.</p>
            <Link to="/about" className="learn-more-link">Learn More <ArrowRight size={14} /></Link>
          </motion.div>

          {/* Card 3: Effortless Tech */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="feature-card medium light-card tech-card">
            <div className="card-top">
              <Sparkles className="icon-gold" size={32} />
              <h3>Effortless Tech</h3>
            </div>
            <p>Advanced event technology hidden within seamless, high-touch hospitality.</p>
          </motion.div>

          {/* Card 4: The Filmfactory (Dark) */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="feature-card medium dark-card ff-grid-card">
            <div className="ff-grid-content">
              <h3>The Filmfactory</h3>
              <p>Capturing the ephemeral. Our dedicated cinematic unit documents your milestones with gallery-quality precision.</p>
              <Link to="/filmfactory" className="btn-outline-gold">View Reel</Link>
            </div>
            <div className="ff-grid-visual">
               <img src="/assets/images/ff_camera_luxe.png" alt="Cinema Camera" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Three-Part Story Section - Who We Are (Light Tone) */}
      <section className="home-story-immersive section-padding light-section">
        <div className="container">
          <motion.div {...fadeInUp} className="section-title-center">
             <div className="decor-script">Our Story</div>
             <h2>Who We Are</h2>
             <div className="title-divider-center"></div>
          </motion.div>
        </div>
        <SwapStory />
      </section>

      {/* Services Section (Grey Tone) */}
      <div className="grey-section">
        <StickyCardsFeatures items={services} />
      </div>

      {/* Filmfactory Showcase (Light Tone) */}
      <section className="ff-home-showcase section-padding light-section">
        <div className="container">
          <div className="ff-home-content">
            <div className="ff-text">
              <motion.div variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }} className="ff-logo-wrap">
                <img src={ffBrandedLogo} alt="Plan B - The Filmfactory" className="ff-logo-branded" />
              </motion.div>
              <motion.div variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }} className="ff-label italic-gold">Where Vision Meets the Frame</motion.div>
              <motion.h2 variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }}>Plan B – The Filmfactory</motion.h2>
              <motion.div variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }} className="ff-description-wrapper">
                <p>
                  Plan B – The Filmfactory is the dedicated cinematic arm of Plan B – The Eventguide. Born out of a passion for visual storytelling, we were established to bridge the gap between aspiring creators and the professional film industry. We don’t just host events; we build a sanctuary for rising talents to refine their craft, share their voices, and see their stories come to life on the big screen.
                </p>
                <p className="mt-4">
                  Through our two core pillars, we turn artistic potential into cinematic reality:
                </p>
                <ul className="ff-pillars-list">
                  <li><span>1.</span> First Take</li>
                  <li><span>2.</span> My Frame | My Story</li>
                </ul>
              </motion.div>
              <motion.div variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }} className="mt-6">
                <Link to="/filmfactory" className="btn btn-gold">Explore Filmfactory</Link>
              </motion.div>
            </div>
            <motion.div
              variants={fadeInUp}
              whileInView="whileInView"
              viewport={{ once: true }}
              className="ff-media-visual"
            >
              <img src={ffHero} alt="Filmfactory Excellence" />
              <div className="ff-visual-overlay">
                <Film size={32} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Public Events Showcase (High Energy) */}
      <section className="public-events-spotlight">
        <div className="spotlight-accent-light"></div>
        <div className="container">
          <div className="public-grid-layout">
            <motion.div 
              className="public-text-box"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="decor-script-gold">Public Power</span>
              <h2>Scale. Energy. <span className="highlight">Unforgettable.</span></h2>
              <p className="mb-4">
                From high-energy concerts and stand-up comedy tours to cultural festivals and exclusive club nights. We bring the vision, the crowd, and the flawless execution.
              </p>
              
              <div className="public-stats">
                <div className="stat-item">
                  <span className="number">700+</span>
                  <span className="label">Guests / Event</span>
                </div>
                <div className="stat-item">
                  <span className="number">10+</span>
                  <span className="label">Major Tours</span>
                </div>
              </div>

              <div className="spotlight-actions">
                <Link to="/projects?category=Public%20Events" className="btn btn-gold">View Public Portfolio</Link>
                <Link to="/contact" className="btn-text-white">Partner With Us <ArrowRight size={18} /></Link>
              </div>
            </motion.div>

            <motion.div 
              className="public-image-collage"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="collage-img large">
                <img src={projects.find(p => p.id === 13)?.image as string} alt="The GOAT Tour" />
              </div>
              <div className="collage-img">
                <img src={goat2} alt="The GOAT Highlights" />
              </div>
              <div className="collage-img">
                <img src={projects.find(p => p.id === 12)?.image as string} alt="Premgi Concert" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Combined Portfolio & Pillars Section */}
      <section className="portfolio-pillars-section section-padding light-section">
        <div className="container">
          <div className="section-title-center">
            <span className="decor-script">Selected Works</span>
            <h2>Portfolio Highlights</h2>
            <div className="title-divider-center"></div>
          </div>

          <div className="projects-poster-grid">
            {[
              projects.find(p => p.category === "Private Events" && (p as any).image),
              projects.find(p => p.category === "Public Events" && (p as any).image),
              projects.find(p => p.category === "Corporate Events" && (p as any).image)
            ].filter(Boolean).map((project: any, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="project-poster-card"
              >
                <div className="poster-image">
                  <img 
                    src={(project as any).image} 
                    alt={project.title} 
                  />
                  <div className="poster-overlay">
                    <div className="poster-info">
                      <span className="project-tag">{project.category}</span>
                      <h3>{project.title}</h3>
                      <div className="project-date-row">
                        <span className="project-date">{project.date}</span>
                      </div>
                      <Link to="/projects" className="view-project-btn">View Details <ArrowRight size={16} /></Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="center-cta mt-6">
            <Link to="/projects" className="btn-outline-gold">View Portfolio</Link>
          </div>

          {/* Integrated Core Pillars (Exclusively Yours) Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pillars-integrated-panel"
          >
            <div className="pillars-panel-content">
              <div className="decor-script-gold">Exclusively Yours</div>
              <h2>Our Core Pillars</h2>
              <div className="spotlight-pillars">
                <div className="pillar-item">
                  <span className="pillar-dot"></span>
                  <span>Private Events</span>
                </div>
                <div className="pillar-item">
                  <span className="pillar-dot"></span>
                  <span>Public Events</span>
                </div>
                <div className="pillar-item">
                  <span className="pillar-dot"></span>
                  <span>Corporate Events</span>
                </div>
              </div>
              <p>From intimate weddings to large-scale public festivals and professional corporate gatherings, we provide seamless management for every occasion. Every detail is orchestrated with absolute foresight, creativity, and the highest level of precision.</p>
              <div className="spotlight-actions">
                <Link to="/contact" className="btn btn-gold">Let's plan your Event</Link>
                <Link to="/services" className="btn-text-gold">Our Services <ArrowRight size={16} /></Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Testimonials - Client Voice (Full Width Immersive) */}
      <section className="testimonials-section-immersive">
        <TestimonialCarousel />
      </section>

      {/* Partner Network (Grey Tone) */}
      <section className="partners-home-section section-padding grey-section">
        <div className="container">
          <div className="partners-home-wrapper">
            <div className="partners-text-area">
              <span className="decor-script-small">Synergy</span>
              <h2>Our Professional Network</h2>
              <div className="title-divider"></div>
              <p>
                We cooperate with carefully selected partners in catering, technology, decoration, and more to provide you with exclusive benefits and a seamless experience.
              </p>
              <Link to="/partner" className="btn btn-gold">View Partner Network</Link>
            </div>
            
            <div className="partners-logo-grid-home">
              {partnerImages.map((img, i) => (
                <div
                  key={i}
                  className="partner-logo-box-home"
                >
                  <img src={img} alt={`Partner ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Background Decorative Text */}
        <div className="bg-decor-text-partners">NETWORK</div>
      </section>

      {/* Contact CTA (Dark Tone) */}
      <section className="final-cta section-padding dark-section">
        <div className="container">
          <div className="cta-content">
            <motion.h2 variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }}>Ready to Create Something Extraordinary?</motion.h2>
            <motion.p variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }}>
              Tell us about your event – we will get back to you within 48 hours with ideas and suggestions.
            </motion.p>
            <motion.div variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }} className="cta-buttons">
              <Link to="/contact" className="btn btn-gold">Let's Plan Your Event</Link>
              <a href={`tel:${siteConfig.contact.phone}`} className="btn btn-outline">Call Us Now</a>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;

