import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

// Import all images from the gallery folder
const imageModules = import.meta.glob('../../assets/gallery/*.{png,jpg,jpeg,webp}', { eager: true });

const galleryMetadata: Record<string, { title: string, date: string }> = {
  'anojan': { title: '60th Birthday - Anojan', date: '14.07.2024' },
  'avvv': { title: 'AVVV - Movie Night', date: '07.06.2025' },
  'ayesha': { title: 'Ayesha MUAH Workshop', date: '27.04.2024' },
  'babu_gowry': { title: '30th Wedding Anniversary', date: '22.02.2025' },
  'corporate_event': { title: 'Let\'s Go Travel Grand Opening', date: '14.04.2025' },
  'jaci': { title: '30th Birthday - Jaci', date: '09.08.2025' },
  'kathushan_thenuka': { title: 'Proposal - Kathushan & Thenuka', date: '28.12.2024' },
  'manoja_marko': { title: 'Wedding Reception - Manoja & Marko', date: '03.05.2025' },
  'mayileh': { title: 'Mayileh - Club Event', date: '28.06.2024' },
  'mehendi': { title: 'Mehendi - Pritthiya', date: '23.05.2025' },
  'mervyn': { title: 'Merviyn Moving On - StandUp', date: '18.10.2024' },
  'monika': { title: 'Monika - Clubevent', date: '09.08.2025' },
  'paintera': { title: 'PaintEra - Grand Opening', date: '02.11.2024' },
  'premgi': { title: 'Premgi - Concert', date: '09.08.2024' },
  'private_event': { title: '25th Birthday - Pritthiya', date: '15.06.2024' },
  'public_event': { title: 'The GOAT Tour', date: '28.09.2024' },
  'subinthan_vithuja': { title: 'Proposal - Subinthan & Vithuja', date: '01.09.2024' },
  'tharshan_maunika': { title: 'Proposal - Tharshan & Maunika', date: '14.02.2025' },
  'thasmija': { title: '21st Birthday - Thasmija', date: '10.08.2024' },
  'witp': { title: 'Where is the Party', date: '30.08.2025' }
};

const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const galleryItems = Object.entries(imageModules).map(([path, mod]: [string, any]) => {
    const fileName = path.split('/').pop()?.split('.')[0] || '';
    const meta = galleryMetadata[fileName];
    return {
      src: mod.default || mod,
      title: meta?.title || fileName.replace(/_/g, ' ').replace(/-/g, ' '),
      date: meta?.date || ''
    };
  });

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % galleryItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + galleryItems.length) % galleryItems.length);
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
            {galleryItems.map((item, index) => (
              <motion.div 
                key={index}
                className="masonry-item-v2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 10) * 0.1 }}
                onClick={() => setSelectedIdx(index)}
              >
                <img src={item.src as string} alt={item.title} loading="lazy" />
                <div className="item-hover-overlay">
                  <div className="hover-info-box">
                    <span className="hover-date">{item.date}</span>
                    <span className="hover-title">{item.title}</span>
                  </div>
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
                src={galleryItems[selectedIdx].src as string} 
                alt={galleryItems[selectedIdx].title} 
              />
              <div className="lightbox-caption-v2">
                <h3>{galleryItems[selectedIdx].title}</h3>
                <p>{galleryItems[selectedIdx].date}</p>
              </div>
            </motion.div>

            <button className="nav-btn-v2 next" onClick={nextImage}>
              <ChevronRight size={48} />
            </button>

            <div className="lightbox-counter">
              {selectedIdx + 1} / {galleryItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
