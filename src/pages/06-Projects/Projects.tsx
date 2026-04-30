import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { X, Calendar, MapPin, Users, Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { projects, projectCategories, testimonials } from '../../data/mockData';
import './Projects.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';

const Projects = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [selectedProject, setSelectedProject] = React.useState<any>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const heroProjects = projects.slice(0, 3);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="projects-page"
    >
      <section className="projects-hero-slider">
        <Swiper
          speed={1200}
          parallax={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}">0${index + 1}</span>`;
            },
          }}
          navigation={{
            prevEl: '.projects-prev',
            nextEl: '.projects-next',
          }}
          modules={[Parallax, Autoplay, Navigation, Pagination]}
          className="hero-swiper"
        >
          {heroProjects.map((project) => (
            <SwiperSlide key={project.id} className="hero-slide">
              <div 
                className="slide-bg" 
                style={{ backgroundImage: `url(${project.image})` }}
                data-swiper-parallax="50%"
              ></div>
              <div className="slide-overlay"></div>
              <div className="container slide-content">
                <div className="slide-text-box">
                  <span data-swiper-parallax="-300" className="slide-cat">
                    {project.category}
                  </span>
                  <h2 data-swiper-parallax="-500" className="slide-title">
                    {project.title}
                  </h2>
                  <p data-swiper-parallax="-700" className="slide-desc">
                    {project.description.substring(0, 150)}...
                  </p>
                  <div data-swiper-parallax="-900">
                    <button className="btn btn-gold" onClick={() => setSelectedProject(project)}>
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          <div className="slider-nav">
            <button className="projects-prev"><ArrowLeft size={24} /></button>
            <div className="nav-divider"></div>
            <button className="projects-next"><ArrowRight size={24} /></button>
          </div>
        </Swiper>
      </section>

      <div className="container section-padding">
        <div className="section-header">
          <h1>Our Projects</h1>
          <div className="title-divider"></div>
        </div>

        <div className="category-tabs">
          <button 
            className={activeCategory === 'All' ? 'active' : ''} 
            onClick={() => setActiveCategory('All')}
          >
            All Events
          </button>
          {projectCategories.map(cat => (
            <button 
              key={cat} 
              className={activeCategory === cat ? 'active' : ''} 
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="project-card-large"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-img-box">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-main-img" />
                  ) : (
                    <div className="img-placeholder">
                      <span>{project.category}</span>
                    </div>
                  )}
                </div>
                <div className="project-overlay-info">
                  <span className="project-cat">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description.substring(0, 120)}...</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Client Feedback Section */}
        <div className="testimonials-section section-padding">
          <div className="section-header">
            <h2>Client Feedback</h2>
            <div className="title-divider"></div>
          </div>

          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div className="testimonial-card" key={testimonial.id}>
                <Quote size={28} className="text-gold" />
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-footer">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--accent)" stroke="var(--accent)" />)}
                  </div>
                  <strong>{testimonial.clientName}</strong>
                  <span>{testimonial.eventDate} · {testimonial.eventType}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                className="project-modal"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-modal" onClick={() => setSelectedProject(null)}>
                  <X size={24} />
                </button>

                <div className="modal-hero-placeholder">
                  <div className="hero-text">
                    <span className="category-tag">{selectedProject.category}</span>
                    <h2>{selectedProject.title}</h2>
                  </div>
                </div>

                <div className="modal-content">
                  <div className="modal-main-text">
                    <h3>About the Event</h3>
                    <p>{selectedProject.description}</p>
                    
                    <div className="event-meta-grid">
                      <div className="meta-item">
                        <Calendar size={20} />
                        <div>
                          <strong>Category</strong>
                          <p>{selectedProject.category}</p>
                        </div>
                      </div>
                      <div className="meta-item">
                        <MapPin size={20} />
                        <div>
                          <strong>Location</strong>
                          <p>Switzerland</p>
                        </div>
                      </div>
                      <div className="meta-item">
                        <Users size={20} />
                        <div>
                          <strong>Type</strong>
                          <p>{selectedProject.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="modal-side-info">
                    <div className="side-section">
                      <h3>Partners Involved</h3>
                      <div className="partners-chips">
                        {selectedProject.partners.map((p: string) => (
                          <span key={p} className="partner-chip">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;
