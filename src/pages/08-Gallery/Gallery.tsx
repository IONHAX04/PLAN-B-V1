import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Filter, Image as ImageIcon } from 'lucide-react';
import './Gallery.css';

const categories = ['All', 'Weddings', 'Club Events', 'Corporate', 'Concerts', 'Filmfactory'];

const galleryItems = [
  { id: 1, category: 'Weddings', title: 'Luxury Estate Wedding', description: 'Exclusive garden ceremony in Zurich', size: 'large' },
  { id: 2, category: 'Club Events', title: 'Mayileh Night', description: 'High-energy Tamil club night', size: 'medium' },
  { id: 3, category: 'Corporate', title: 'Innovation Summit', description: 'Tech conference hospitality', size: 'small' },
  { id: 4, category: 'Concerts', title: 'Premgi Live', description: 'Artist management and on-site support', size: 'medium' },
  { id: 5, category: 'Filmfactory', title: 'First Take 2025', description: 'Short film festival highlights', size: 'large' },
  { id: 6, category: 'Weddings', title: 'Royal Banquet', description: 'Grand ballroom reception', size: 'small' },
  { id: 7, category: 'Club Events', title: 'The Goat Club', description: 'Premium nightlife experience', size: 'medium' },
  { id: 8, category: 'Corporate', title: 'Product Launch', description: 'Immersive brand activation', size: 'large' },
  { id: 9, category: 'Filmfactory', title: 'Cinematic Reel', description: 'High-end event documentation', size: 'medium' },
  { id: 10, category: 'Concerts', title: 'Musical Gala', description: 'Symphonic evening management', size: 'small' },
  { id: 11, category: 'Weddings', title: 'Lakeside Vows', description: 'Intimate sunset celebration', size: 'medium' },
  { id: 12, category: 'Club Events', title: 'Glow Party', description: 'Neon themed event production', size: 'large' },
  { id: 13, category: 'Concerts', title: 'Summer Festival', description: 'Outdoor stage production', size: 'medium' },
  { id: 14, category: 'Corporate', title: 'Gala Dinner', description: 'Black tie corporate event', size: 'small' },
  { id: 15, category: 'Weddings', title: 'Traditional Vows', description: 'Cultural ceremony coordination', size: 'large' },
];

const galleryStats = [
  { label: 'Events Captured', value: '150+' },
  { label: 'Cities Covered', value: '12' },
  { label: 'Happy Clients', value: '500+' },
  { label: 'Short Films', value: '45' }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <motion.div 
      className="gallery-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-bg"></div>
        <div className="container">
          <motion.div 
            className="gallery-hero-content"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="decor-script">Visual Legacy</div>
            <h1>Our Gallery</h1>
            <div className="title-divider-center"></div>
            <p className="section-subtitle">
              A curated collection of moments that define our standard of excellence. 
              Each image tells a story of precision, passion, and perfection.
            </p>
          </motion.div>

          <div className="gallery-stats-bar">
            {galleryStats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="gallery-stat-item"
              >
                <span className="stat-val">{stat.value}</span>
                <span className="stat-lab">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Interaction Section */}
      <section className="gallery-main-section section-padding">
        <div className="container">
          {/* Filters */}
          <div className="gallery-filters-container">
            <div className="gallery-filters-wrap">
              <div className="filter-icon">
                <Filter size={18} />
                <span>Filter by:</span>
              </div>
              <div className="filters-list">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                    onClick={() => setActiveFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Masonry-style Grid */}
          <div className="gallery-masonry-wrapper">
            <motion.div 
              layout
              className="gallery-masonry-grid"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`gallery-item-card sz-${item.size}`}
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="item-inner">
                      <div className="item-placeholder">
                        <ImageIcon size={48} className="placeholder-icon" />
                        <div className="placeholder-text">{item.category} #{item.id}</div>
                      </div>
                      <div className="item-overlay">
                        <div className="overlay-content">
                          <span className="item-category">{item.category}</span>
                          <h3>{item.title}</h3>
                          <div className="view-action">
                            <Maximize2 size={18} />
                            <span>View Moment</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="gallery-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-lightbox" onClick={() => setSelectedImage(null)}>
                <X size={24} />
              </button>
              <div className="lightbox-grid">
                <div className="lightbox-image-side">
                  <div className="lightbox-placeholder">
                     <ImageIcon size={80} />
                     <span>Cinematic Asset Pending</span>
                  </div>
                </div>
                <div className="lightbox-info-side">
                  <div className="lightbox-info-content">
                    <span className="lightbox-cat">{selectedImage.category}</span>
                    <h2>{selectedImage.title}</h2>
                    <p>{selectedImage.description}</p>
                    <div className="lightbox-meta">
                      <div className="meta-item">
                        <strong>Location</strong>
                        <span>Switzerland</span>
                      </div>
                      <div className="meta-item">
                        <strong>Year</strong>
                        <span>2024-2025</span>
                      </div>
                    </div>
                    <button className="btn-gold-full" onClick={() => setSelectedImage(null)}>
                      Enquire about this event
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="gallery-cta section-padding">
        <div className="container">
          <div className="cta-wrap">
            <span className="decor-script">The Next Chapter</span>
            <h2>Ready to be our next masterpiece?</h2>
            <p>Let's plan an event that will look as good as these moments feel. Our team is ready to bring your vision to life with cinematic precision.</p>
            <div className="cta-actions">
              <button className="btn-gold">Start Planning Your Event</button>
              <button className="btn-outline">View Our Services</button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;
