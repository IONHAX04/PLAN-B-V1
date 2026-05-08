import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

// Import all images from the gallery folder
const imageModules = import.meta.glob('../../assets/gallery/*.{png,jpg,jpeg,webp}', { eager: true });
const galleryImages = Object.values(imageModules).map((mod: any) => mod.default || mod);

const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

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
    <motion.div 
      className="gallery-page-v2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className="gallery-header-v2">
        <div className="header-overlay-v2"></div>
        <div className="container">
          <motion.div 
            className="header-content-v2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="massive-title">GALLERY</h1>
            <p className="subtitle-v2">PHOTOS & HIGHLIGHTS</p>
          </motion.div>
        </div>
      </header>

      <section className="gallery-grid-section-v2">
        <div className="container-fluid">
          <div className="masonry-grid-v2">
            {galleryImages.map((img, index) => (
              <motion.div 
                key={index}
                className="masonry-item-v2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 10) * 0.1 }}
                onClick={() => setSelectedIdx(index)}
              >
                <img src={img as string} alt={`Gallery ${index + 1}`} loading="lazy" />
                <div className="item-hover-overlay">
                  <span className="view-text">View Image</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
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
    </motion.div>
  );
};

export default Gallery;


