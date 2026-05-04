import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  MapPin,
  Palette,
  Music,
  HeartHandshake,
  Mic2,
  Users,
  Film,
  CheckCircle2,
  CalendarCheck,
  Compass,
  Lock,
  Sparkles
} from 'lucide-react';
import { HeroVariant1 } from './HeroVariants';
import {
  siteConfig,
  services,
  aboutContent,
  testimonials,
  projects,
  filmfactoryContent,
  partners
} from '../../data/mockData';
import './Home.css';

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

      {/* Secondary Hero Section - Features Grid */}
      <section className="home-features-grid section-padding">
        <div className="container grid-layout">
          {/* Card 1: Strategic Curation */}
          <motion.div {...fadeInUp} className="feature-card large light-card curation-card">
            <div className="card-top">
              <Compass className="icon-gold" size={32} />
              <h3>Strategic Curation</h3>
            </div>
            <p>Every event is a unique architectural project. We design not just for the moment, but for the legacy.</p>
            <div className="card-bg-decor-map"></div>
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
      </section>

      {/* Three-Part Story Section (About, Vision, Mission) */}
      <section className="home-story-immersive section-padding">
        <div className="container">
          <motion.div {...fadeInUp} className="section-title-center">
             <div className="decor-script">Our Story</div>
             <h2>Who We Are</h2>
             <div className="title-divider-center"></div>
          </motion.div>

          <div className="story-panels-container">
            {/* Page 1: About */}
            <motion.div {...fadeInUp} className="story-panel panel-about">
               <div className="panel-content">
                  <div className="panel-number">01</div>
                  <h3>Plan B – The Eventguide</h3>
                  <p>{aboutContent.intro}</p>
                  <Link to="/about" className="btn-text-gold">Learn More <ArrowRight size={16} /></Link>
               </div>
               <div className="panel-bg-decor"></div>
            </motion.div>

            {/* Page 2: Vision */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="story-panel panel-vision">
               <div className="panel-content">
                  <div className="panel-number">02</div>
                  <h3>Our Vision</h3>
                  <p>{aboutContent.vision}</p>
                  <Link to="/about#vision" className="btn-text-gold">Explore Vision <ArrowRight size={16} /></Link>
               </div>
               <div className="panel-bg-decor"></div>
            </motion.div>

            {/* Page 3: Mission */}
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="story-panel panel-mission">
               <div className="panel-content">
                  <div className="panel-number">03</div>
                  <h3>Our Mission</h3>
                  <p>{aboutContent.mission}</p>
                  <Link to="/about#mission" className="btn-text-gold">See Mission <ArrowRight size={16} /></Link>
               </div>
               <div className="panel-bg-decor"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-overview section-padding">
        <div className="container">
          <div className="section-header">
            <motion.h2 variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }}>Our Expertise</motion.h2>
            <motion.div variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }} className="title-divider"></motion.div>
            <motion.p variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }} className="section-subtitle">
              We provide all-in-one packages tailored to your specific needs.
            </motion.p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => {
              const IconComponent = {
                CalendarCheck,
                MapPin,
                Palette,
                Music,
                HeartHandshake,
                Mic2: Mic2
              }[service.icon] || Calendar;

              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="service-card"
                >
                  <div className="service-icon"><IconComponent size={24} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={`/services#${service.id}`} className="read-more">
                    View Details <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filmfactory Showcase */}
      <section className="ff-home-showcase section-padding dark-section">
        <div className="container">
          <div className="ff-home-content">
            <div className="ff-text">
              <motion.div variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }} className="ff-label">Sub-Company</motion.div>
              <motion.h2 variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }}>The Filmfactory</motion.h2>
              <motion.h3 variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }}>{filmfactoryContent.firstTake.title}</motion.h3>
              <motion.p variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }}>
                {filmfactoryContent.firstTake.description}
              </motion.p>
              <div className="ff-stats">
                {filmfactoryContent.firstTake.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="stat-item"
                  >
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }}>
                <Link to="/filmfactory" className="btn btn-gold">Explore Filmfactory</Link>
              </motion.div>
            </div>
            <motion.div
              variants={fadeInUp}
              whileInView="whileInView"
              viewport={{ once: true }}
              className="ff-media-placeholder"
            >
              <div className="placeholder-inner">
                <Film size={64} />
                <span>Cinematic Excellence</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="projects-home section-padding">
        <div className="container">
          <div className="section-header">
            <motion.h2 variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }}>Successful Projects</motion.h2>
            <motion.div variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }} className="title-divider"></motion.div>
          </div>

          <div className="projects-preview-grid">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="project-preview-card"
              >
                <div className="project-image-placeholder">
                  <span>{project.category}</span>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to="/projects" className="read-more">View Project <ArrowRight size={16} /></Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="center-cta mt-4">
            <Link to="/projects" className="btn btn-outline">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section-padding bg-alt">
        <div className="container">
          <div className="section-header">
            <motion.h2 variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }}>Client Voice</motion.h2>
            <motion.div variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }} className="title-divider"></motion.div>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.id}
                variants={fadeInUp}
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="testimonial-card"
              >
                <div className="quote-icon">"</div>
                <p className="quote-text">{t.quote}</p>
                <div className="client-info">
                  <span className="client-name">{t.clientName}</span>
                  <span className="event-type">{t.eventType} — {t.eventDate}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Network */}
      <section className="partners-home-section section-padding">
        <div className="container">
          <div className="partners-home-layout">
            <div className="partners-content">
              <motion.h2 variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }}>Our Professional Network</motion.h2>
              <motion.p variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }}>
                We cooperate with carefully selected partners in catering, technology, decoration, and more to provide you with exclusive benefits and a seamless experience.
              </motion.p>
              <div className="partners-mini-grid">
                {partners.slice(0, 8).map((p, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="partner-tag"
                  >
                    <CheckCircle2 size={14} className="text-gold" /> {p.name}
                  </motion.div>
                ))}
                <motion.div variants={fadeInUp} whileInView="whileInView" viewport={{ once: true }} className="partner-tag more">
                  + {partners.length - 8} more
                </motion.div>
              </div>
              <Link to="/partner" className="btn btn-gold mt-3">Partner Network</Link>
            </div>
            <motion.div
              variants={fadeInUp}
              whileInView="whileInView"
              viewport={{ once: true }}
              className="partners-visual"
            >
              <div className="visual-circle">
                <Users size={48} />
                <span className="circle-text">14+ Trusted Partners</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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

