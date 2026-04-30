import React, { useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { projects, projectCategories } from '../../data/mockData';
import './Projects.css';

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
  const img1X = useTransform(scrollYProgress, [0, 0.62], ['-16vw', '0vw']);
  const img1Y = useTransform(scrollYProgress, [0, 0.62], ['-16vh', '0vh']);

  const img2X = useTransform(scrollYProgress, [0, 0.62], ['0vw', '0vw']);
  const img2Y = useTransform(scrollYProgress, [0, 0.62], ['-38vh', '0vh']);

  const img3X = useTransform(scrollYProgress, [0, 0.62], ['16vw', '0vw']);
  const img3Y = useTransform(scrollYProgress, [0, 0.62], ['-16vh', '0vh']);

  const img4X = useTransform(scrollYProgress, [0, 0.62], ['-14vw', '0vw']);
  const img4Y = useTransform(scrollYProgress, [0, 0.62], ['11vh', '0vh']);

  const img5X = useTransform(scrollYProgress, [0, 0.62], ['0vw', '0vw']);
  const img5Y = useTransform(scrollYProgress, [0, 0.62], ['13vh', '0vh']);

  const img6X = useTransform(scrollYProgress, [0, 0.62], ['14vw', '0vw']);
  const img6Y = useTransform(scrollYProgress, [0, 0.62], ['12vh', '0vh']);

  const imgScale = useTransform(scrollYProgress, [0, 0.62], [1.12, 1]);
  const textPointerEvents = useTransform(scrollYProgress, (pos) => (pos > 0.28 ? 'none' : 'auto'));
  return (
    <section ref={targetRef} className="image-grid-hero">
      <div className="image-grid-sticky">
        <motion.div
          style={{ opacity: textOpacity, y: textY, zIndex: textZIndex, pointerEvents: textPointerEvents as any }}
          className="image-grid-content"
        >
          <h1>
            Photo gallery
            <br />
            for artists
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, minus nisi? Quod praesentium quaerat
            possimus.
          </p>
          <div className="image-grid-actions">
            <button className="hero-btn hero-btn-primary">Try for free</button>
            <button className="hero-btn hero-btn-secondary">Learn about us</button>
          </div>
        </motion.div>

        <div className="image-grid-layout">
          <motion.div
            style={{ x: img1X, y: img1Y, scale: imgScale }}
            className="hero-card card-a"
            onClick={() => setSelectedProject(p[0])}
          >
            <img src={p[0].image} alt={p[0].title} />
          </motion.div>

          <motion.div
            style={{ x: img2X, y: img2Y, scale: imgScale }}
            className="hero-card card-b"
            onClick={() => setSelectedProject(p[1])}
          >
            <img src={p[1].image} alt={p[1].title} />
          </motion.div>

          <motion.div
            style={{ x: img3X, y: img3Y, scale: imgScale }}
            className="hero-card card-c"
            onClick={() => setSelectedProject(p[2])}
          >
            <img src={p[2].image} alt={p[2].title} />
          </motion.div>

          <motion.div
            style={{ x: img4X, y: img4Y, scale: imgScale }}
            className="hero-card card-d"
            onClick={() => setSelectedProject(p[3])}
          >
            <img src={p[3].image} alt={p[3].title} />
          </motion.div>

          <motion.div
            style={{ x: img5X, y: img5Y, scale: imgScale }}
            className="hero-card card-e"
            onClick={() => setSelectedProject(p[4])}
          >
            <img src={p[4].image} alt={p[4].title} />
          </motion.div>

          <motion.div
            style={{ x: img6X, y: img6Y, scale: imgScale }}
            className="hero-card card-f"
            onClick={() => setSelectedProject(p[5])}
          >
            <img src={p[5].image} alt={p[5].title} />
          </motion.div>
        </div>

        <div className="hero-circle hero-circle-left"></div>
        <div className="hero-circle hero-circle-right"></div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');
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

      {/* Solid Purple Transition (Screenshot 4) */}
      <div className="purple-transition-section">
        <h2>Other content here :)</h2>
      </div>

      {/* Projects Grid Section */}
      <div className="container grid-section">
        <div className="grid-header">
          <div className="decor-line-gold"></div>
          <h1>Explore Portfolio</h1>
        </div>

        <div className="grid-filters">
          <button className={activeCategory === 'All' ? 'active' : ''} onClick={() => setActiveCategory('All')}>All</button>
          {projectCategories.map(cat => (
            <button key={cat} className={activeCategory === cat ? 'active' : ''} onClick={() => setActiveCategory(cat)}>{cat}</button>
          ))}
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
                  <img src={project.image} alt={project.title} />
                  <div className="card-overlay-fashion">
                    <span className="card-cat-tag">{project.category}</span>
                    <h3>{project.title}</h3>
                    <div className="view-link">View Project <ChevronRight size={14} /></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal remains the same */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div className="modal-fashion-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}>
              <motion.div className="modal-fashion-content" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
                <button className="close-modal-fashion" onClick={() => setSelectedProject(null)}><X size={24} /></button>
                <div className="modal-top">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                  <div className="modal-hero-text">
                    <span>{selectedProject.category}</span>
                    <h2>{selectedProject.title}</h2>
                  </div>
                </div>
                <div className="modal-bottom">
                  <div className="modal-main">
                    <h3>Overview</h3>
                    <p>{selectedProject.description}</p>
                    <div className="modal-stats">
                      <div className="stat"><Calendar size={18} /><span>Switzerland</span></div>
                      <div className="stat"><MapPin size={18} /><span>{selectedProject.category}</span></div>
                    </div>
                  </div>
                  <div className="modal-side">
                    <h3>Partners</h3>
                    <div className="partner-tags">{selectedProject.partners.map((p: string) => (<span key={p}>{p}</span>))}</div>
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
