import React, { useMemo, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, Calendar, MapPin, Quote, ChevronRight } from 'lucide-react';
import { projects, projectCategories, testimonials } from '../../data/mockData';
import './Projects.css';

const ImageGridHero = ({ setSelectedProject }: { setSelectedProject: (p: any) => void }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });
  
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -100]);
  
  const p = projects.length >= 6 ? projects : [...projects, ...projects, ...projects].slice(0, 6);

  // Scatter images outward at scroll 0, then bring them to 0,0 at scroll 0.6
  // p[0] - Top Left (col-span-2)
  const img1X = useTransform(scrollYProgress, [0, 0.6], ["-15vw", "0vw"]);
  const img1Y = useTransform(scrollYProgress, [0, 0.6], ["-20vh", "0vh"]);
  
  // p[2] - Top Right (row-span-2)
  const img2X = useTransform(scrollYProgress, [0, 0.6], ["15vw", "0vw"]);
  const img2Y = useTransform(scrollYProgress, [0, 0.6], ["-20vh", "0vh"]);
  
  // p[3] - Bottom Left (row-span-2)
  const img3X = useTransform(scrollYProgress, [0, 0.6], ["-15vw", "0vw"]);
  const img3Y = useTransform(scrollYProgress, [0, 0.6], ["20vh", "0vh"]);

  // p[1] - Middle Center
  const img4X = useTransform(scrollYProgress, [0, 0.6], ["0vw", "0vw"]);
  const img4Y = useTransform(scrollYProgress, [0, 0.6], ["-20vh", "0vh"]);
  
  // p[4] - Bottom Center
  const img5X = useTransform(scrollYProgress, [0, 0.6], ["0vw", "0vw"]);
  const img5Y = useTransform(scrollYProgress, [0, 0.6], ["25vh", "0vh"]);

  // p[5] - Bottom Right
  const img6X = useTransform(scrollYProgress, [0, 0.6], ["15vw", "0vw"]);
  const img6Y = useTransform(scrollYProgress, [0, 0.6], ["25vh", "0vh"]);

  const imgScale = useTransform(scrollYProgress, [0, 0.6], [1.2, 1]);
  const textPointerEvents = useTransform(scrollYProgress, (pos) => pos > 0.3 ? "none" : "auto");

  return (
    <section ref={targetRef} className="pixii-hero relative bg-white">
      <div className="h-screen sticky top-0 z-0 grid grid-cols-3 grid-rows-3 gap-4 p-4 overflow-hidden">
        
        <motion.div style={{ opacity: textOpacity, y: textY, pointerEvents: textPointerEvents as any }} className="absolute px-8 w-full h-screen z-20 flex flex-col items-center justify-center">
          <h1 className="text-stone-950 text-5xl md:text-7xl font-bold text-center max-w-xl leading-tight">Photo gallery<br/>for artists</h1>
          <p className="text-stone-600 text-sm md:text-base text-center max-w-xl my-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, minus nisi? Quod praesentium quaerat possimus.</p>
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 bg-violet-600 hover:bg-violet-700 transition-colors text-white font-medium rounded-md">Try for free</button>
            <button className="px-6 py-3 bg-transparent hover:bg-stone-200 transition-colors text-stone-950 font-medium rounded-md">Learn about us</button>
          </div>
        </motion.div>

        <motion.div 
          style={{ x: img1X, y: img1Y, scale: imgScale, backgroundImage: `url(${p[0].image})`, backgroundSize: 'cover', backgroundPosition: 'center center' }} 
          className="col-span-2 relative z-10 rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-shadow" 
          onClick={() => setSelectedProject(p[0])}
        ></motion.div>

        <motion.div 
          style={{ x: img2X, y: img2Y, scale: imgScale, backgroundImage: `url(${p[2].image})`, backgroundSize: 'cover', backgroundPosition: 'center center' }} 
          className="row-span-2 relative z-10 rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-shadow" 
          onClick={() => setSelectedProject(p[2])}
        ></motion.div>

        <motion.div 
          style={{ x: img3X, y: img3Y, scale: imgScale, backgroundImage: `url(${p[3].image})`, backgroundSize: 'cover', backgroundPosition: 'center center' }} 
          className="row-span-2 relative z-10 rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-shadow" 
          onClick={() => setSelectedProject(p[3])}
        ></motion.div>

        <motion.div 
          style={{ x: img4X, y: img4Y, scale: imgScale, backgroundImage: `url(${p[1].image})`, backgroundSize: 'cover', backgroundPosition: 'center center' }} 
          className="relative z-10 rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-shadow" 
          onClick={() => setSelectedProject(p[1])}
        ></motion.div>

        <motion.div 
          style={{ x: img5X, y: img5Y, scale: imgScale, backgroundImage: `url(${p[4].image})`, backgroundSize: 'cover', backgroundPosition: 'center center' }} 
          className="relative z-10 rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-shadow" 
          onClick={() => setSelectedProject(p[4])}
        ></motion.div>

        <motion.div 
          style={{ x: img6X, y: img6Y, scale: imgScale, backgroundImage: `url(${p[5].image})`, backgroundSize: 'cover', backgroundPosition: 'center center' }} 
          className="relative z-10 rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-shadow" 
          onClick={() => setSelectedProject(p[5])}
        ></motion.div>

        <div className="w-3/5 max-w-[850px] min-w-[400px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 left-0 top-0 -translate-x-[50%] -translate-y-[50%] pointer-events-none"></div>
        <div className="w-1/2 max-w-[600px] min-w-[300px] aspect-square border-[8px] border-slate-200 rounded-full absolute z-0 right-0 bottom-0 translate-x-[50%] translate-y-[50%] pointer-events-none"></div>
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
