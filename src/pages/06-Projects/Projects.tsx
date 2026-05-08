import React, { useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, Calendar, MapPin } from 'lucide-react';
import { projects } from '../../data/mockData';
import project1 from '../../assets/projects/Projects1.jpg';
import project2 from '../../assets/projects/Projects2.jpg';
import project3 from '../../assets/projects/Projects3.jpg';
import project4 from '../../assets/projects/Projects4.jpg';
import project5 from '../../assets/projects/Projects5.jpg';
import project6 from '../../assets/projects/Projects6.jpg';
import './Projects.css';

const projectImages = [project1, project2, project3, project4, project5, project6];

const ImageGridHero = ({ setSelectedProject }: { setSelectedProject: (p: any) => void }) => {
  const targetRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.18, 0.34, 1], [1, 1, 0, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.42], [0, -80]);
  const textZIndex = useTransform(scrollYProgress, [0, 0.32, 1], [10, 1, 1]);

  const p = projects.length >= 6 ? projects : [...projects, ...projects, ...projects].slice(0, 6);

  // Start scattered then gather to a clean grid.
  const img1X = useTransform(scrollYProgress, [0, 0.62], ['-18vw', '0vw']);
  const img1Y = useTransform(scrollYProgress, [0, 0.62], ['-18vh', '0vh']);

  const img2X = useTransform(scrollYProgress, [0, 0.62], ['0vw', '0vw']);
  const img2Y = useTransform(scrollYProgress, [0, 0.62], ['-38vh', '0vh']);

  const img3X = useTransform(scrollYProgress, [0, 0.62], ['18vw', '0vw']);
  const img3Y = useTransform(scrollYProgress, [0, 0.62], ['-18vh', '0vh']);

  const img4X = useTransform(scrollYProgress, [0, 0.62], ['-16vw', '0vw']);
  const img4Y = useTransform(scrollYProgress, [0, 0.62], ['13vh', '0vh']);

  const img5X = useTransform(scrollYProgress, [0, 0.62], ['0vw', '0vw']);
  const img5Y = useTransform(scrollYProgress, [0, 0.62], ['15vh', '0vh']);

  const img6X = useTransform(scrollYProgress, [0, 0.62], ['16vw', '0vw']);
  const img6Y = useTransform(scrollYProgress, [0, 0.62], ['14vh', '0vh']);

  const imgScale = useTransform(scrollYProgress, [0, 0.62], [0.82, 1]);
  const img2Scale = useTransform(scrollYProgress, [0, 0.62], [0.56, 1]);
  const textPointerEvents = useTransform(scrollYProgress, (pos) => (pos > 0.28 ? 'none' : 'auto'));
  return (
    <section ref={targetRef} className="image-grid-hero">
      <div className="image-grid-sticky">
        <motion.div
          style={{ opacity: textOpacity, y: textY, zIndex: textZIndex, pointerEvents: textPointerEvents as any }}
          className="image-grid-content"
        >
          <div className="decor-script">Exquisite Experiences</div>
          <h1>Our Portfolio</h1>
          <p>
            Discover our portfolio of exclusive corporate events, breathtaking weddings, and high-energy club nights across Switzerland.
          </p>
          <div className="image-grid-actions">
            <button className="hero-btn hero-btn-primary">Our Services</button>
            <button className="hero-btn hero-btn-secondary">Get in touch</button>
          </div>
        </motion.div>

        <div className="image-grid-layout">
          <motion.div
            style={{ x: img1X, y: img1Y, scale: imgScale }}
            className="hero-card card-a"
            onClick={() => setSelectedProject(p[0])}
          >
            <img src={projectImages[0]} alt={p[0].title} />
          </motion.div>

          <motion.div
            style={{ x: img2X, y: img2Y, scale: img2Scale }}
            className="hero-card card-b"
            onClick={() => setSelectedProject(p[1])}
          >
            <img src={projectImages[1]} alt={p[1].title} />
          </motion.div>

          <motion.div
            style={{ x: img3X, y: img3Y, scale: imgScale }}
            className="hero-card card-c"
            onClick={() => setSelectedProject(p[2])}
          >
            <img src={projectImages[2]} alt={p[2].title} />
          </motion.div>

          <motion.div
            style={{ x: img4X, y: img4Y, scale: imgScale }}
            className="hero-card card-d"
            onClick={() => setSelectedProject(p[3])}
          >
            <img src={projectImages[3]} alt={p[3].title} />
          </motion.div>

          <motion.div
            style={{ x: img5X, y: img5Y, scale: imgScale }}
            className="hero-card card-e"
            onClick={() => setSelectedProject(p[4])}
          >
            <img src={projectImages[4]} alt={p[4].title} />
          </motion.div>

          <motion.div
            style={{ x: img6X, y: img6Y, scale: imgScale }}
            className="hero-card card-f"
            onClick={() => setSelectedProject(p[5])}
          >
            <img src={projectImages[5]} alt={p[5].title} />
          </motion.div>
        </div>

        <div className="hero-circle hero-circle-left"></div>
        <div className="hero-circle hero-circle-right"></div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [activeCategory] = React.useState('All');
  const [selectedProject, setSelectedProject] = React.useState<any>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="projects-page-v2"
    >
      {/* Pixii Inspired Hero */}
      <ImageGridHero setSelectedProject={setSelectedProject} />

      {/* Projects Grid Section */}
      <div className="container section-padding">
        <div className="section-header center">
          <div className="decor-line"></div>
          <h1>Explore Portfolio</h1>
          <p className="section-subtitle">A glimpse into the magical moments we've created.</p>
        </div>

        <div className="projects-grid-fashion">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="project-card-fashion"
                onClick={() => setSelectedProject(project)}
              >
                <div className="card-img-wrapper">
                  <img 
                    src={projectImages[(project.id as number - 1) % projectImages.length]} 
                    alt={project.title} 
                  />
                  <div className="project-date-badge">{project.date}</div>
                </div>
                <div className="card-info-box">
                  <div className="card-client-name">{project.client}</div>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Vertical Timeline Section */}
        <div className="projects-timeline-section section-padding">
          <div className="section-header-center">
            <div className="decor-script">History</div>
            <h2>Project Timeline</h2>
            <div className="title-divider-center"></div>
          </div>
          <div className="timeline-container">
            <div className="timeline-line"></div>
            {projects.map((project, idx) => (
              <motion.div 
                key={project.id}
                className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => setSelectedProject(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{project.date}</span>
                  <h3>{project.title}</h3>
                  <div className="timeline-client">{project.client}</div>
                  <p>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal remains the same */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div className="modal-fashion-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}>
              <motion.div className="modal-fashion-content" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
                <button className="close-modal-fashion" onClick={() => setSelectedProject(null)}><X size={24} /></button>
                <div className="modal-top">
                  <img 
                    src={projectImages[(selectedProject.id as number - 1) % projectImages.length]} 
                    alt={selectedProject.title} 
                  />
                  <div className="modal-hero-text">
                    <span>{selectedProject.category || 'Event'}</span>
                    <h2>{selectedProject.title}</h2>
                  </div>
                </div>
                <div className="modal-bottom">
                  <div className="modal-main">
                    <h3>Overview</h3>
                    <p>{selectedProject.description}</p>
                    <div className="modal-stats">
                      <div className="stat"><Calendar size={18} /><span>{selectedProject.date || 'Switzerland'}</span></div>
                      <div className="stat"><MapPin size={18} /><span>{selectedProject.category || 'Portfolio'}</span></div>
                    </div>
                  </div>
                  <div className="modal-side">
                    <h3>Partners</h3>
                    <div className="partner-tags">
                      {selectedProject.partners?.map((p: string) => (<span key={p}>{p}</span>)) || <span>Plan B Network</span>}
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
