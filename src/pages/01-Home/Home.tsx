import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  Film,
  Compass,
  Lock,
  Sparkles
} from 'lucide-react';
import { HeroVariant1 } from './HeroVariants';
import { SwapStory } from './SwapStory';
import StickyCardsFeatures from './StickyCardsFeatures';
import { TestimonialCarousel } from './TestimonialCarousel';
import './TestimonialCarousel.css';
import {
  siteConfig,
  services,
  projects,
  filmfactoryContent,
  targetGroups
} from '../../data/mockData';
import './Home.css';
import './ProjectsEnhancement.css';
import './StickyCardsFeatures.css';

// Import all logos from the partnerlogo folder
const logoModules = import.meta.glob('../../assets/partnerlogo/Partners*.{png,jpg,jpeg,webp}', { eager: true });
const partnerImages = Object.values(logoModules).map((mod: any) => mod.default || mod).slice(0, 15); // Show first 15 on home
import ffHero from '../../assets/filmFactory/The-film-factory1.jpg';
import penImage from '../../assets/home/pen.png';

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
      <HeroVariant1 />

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

      {/* Filmfactory Showcase (Dark Tone) */}
      <section className="ff-home-showcase section-padding dark-section">
        <div className="container">
          <div className="ff-home-content">
            <div className="ff-text">
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

      {/* Successful Projects Showcase (Light Tone) */}
      <section className="projects-home section-padding light-section">
        <div className="container">
          <div className="section-title-center">
            <span className="decor-script">Selected Works</span>
            <h2>Successful Projects</h2>
            <div className="title-divider-center"></div>
          </div>

          <div className="projects-poster-grid">
            {projects.map((project, index) => (
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
                      <Link to="/projects" className="view-project-btn">Explore Case Study <ArrowRight size={16} /></Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="center-cta mt-6">
            <Link to="/projects" className="btn-outline-gold">View Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Private Events Spotlight */}
      <section className="private-events-spotlight">
        <div className="spotlight-bg">
          <img src="/assets/images/projects/project_3.png" alt="Private Events" />
          <div className="spotlight-overlay"></div>
        </div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="spotlight-glass-card"
          >
            <div className="decor-script-gold">Exclusively Yours</div>
            <h2>Private Events</h2>
            <p>From intimate weddings to ultra-luxury anniversaries, we provide discrete management for high-profile portfolios and private estates. Every detail is orchestrated with absolute privacy, foresight, and the highest level of precision.</p>
            <div className="spotlight-actions">
              <Link to="/contact" className="btn-gold">Request Private Access</Link>
              <Link to="/services" className="btn-text-white">Our Standards <ArrowRight size={16} /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Groups Section (Grey Tone) */}
      <section className="target-groups-section section-padding grey-section">
        <div className="container">
          <div className="section-title-center">
            <span className="decor-script">Who We Serve</span>
            <h2>Our Target Groups</h2>
            <div className="title-divider-center"></div>
          </div>
          <div className="target-groups-grid">
            {targetGroups && targetGroups.map((group, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="target-group-card"
              >
                <div className="group-icon-box">
                  {i === 0 && <Users size={32} />}
                  {i === 1 && <Compass size={32} />}
                  {i === 2 && <Sparkles size={32} />}
                </div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Client Voice (Light Tone) */}
      <section className="testimonials-section section-padding light-section">
        <div className="container">
          <div className="section-title-center">
            <span className="decor-script">Client Voice</span>
            <h2>Words From Our Partners</h2>
            <div className="title-divider-center"></div>
          </div>

          <TestimonialCarousel />
        </div>
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

