import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, Users } from 'lucide-react';
import { partners, partnersIntro } from '../../data/mockData';
// Import all logos from the partnerlogo folder
const logoModules = import.meta.glob('../../assets/partnerlogo/*.{png,jpg,jpeg,webp}', { eager: true });
// Extract the numbers from the filenames to sort them correctly
const logoPaths = Object.keys(logoModules);
const partnerImagesMap = logoPaths.reduce((acc, path) => {
  const filename = path.split('/').pop() || "";
  
  // Handle PartnersN pattern
  const numMatch = filename.match(/Partners(\d+)/);
  if (numMatch) {
    acc[parseInt(numMatch[1])] = (logoModules[path] as any).default || logoModules[path];
  }
  
  // Handle specific named logos from the user request
  if (filename.toLowerCase().includes('mandram')) acc[28] = (logoModules[path] as any).default || logoModules[path];
  if (filename.toLowerCase().includes('sakthi')) acc[29] = (logoModules[path] as any).default || logoModules[path];
  if (filename.toLowerCase().includes('thecrown')) {
    acc[3] = (logoModules[path] as any).default || logoModules[path];
    acc[40] = (logoModules[path] as any).default || logoModules[path];
  }
  if (filename.toLowerCase().includes('tvs')) {
    acc[20] = (logoModules[path] as any).default || logoModules[path];
    acc[39] = (logoModules[path] as any).default || logoModules[path];
  }
  
  return acc;
}, {} as Record<number, string>);

import './Partner.css';

const Partner = () => {
  const [selectedPartner, setSelectedPartner] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const groupedPartners = useMemo(() => {
    return partners.reduce((acc, partner) => {
      if (!acc[partner.service]) {
        acc[partner.service] = [];
      }
      acc[partner.service].push(partner);
      return acc;
    }, {} as Record<string, typeof partners>);
  }, []);

  const categories = Object.keys(groupedPartners);
  const filterCategories = ['All', ...categories];

  const filteredCategories = activeCategory === 'All' 
    ? categories 
    : [activeCategory];

  return (
    <div className="partner-page">
      <section className="partners-hero">
        <div className="container">
          <div className="hero-title-area">
            <div className="decor-script">Our Network</div>
            <h1>The Partner List</h1>
          </div>
          <div className="hero-info-area">
            <p className="section-subtitle">{partnersIntro}</p>
          </div>
        </div>
      </section>

      <section className="partners-list-section">
        <div className="container">
          <div className="partners-filter-bar">
            {filterCategories.map((cat) => (
              <button 
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredCategories.map((category) => (
            <div 
              key={category} 
              className="category-group"
            >
              <div className="category-header">
                <div className="category-title-wrap">
                  <span className="category-number">0{categories.indexOf(category) + 1}</span>
                  <h2>{category.toUpperCase()}</h2>
                </div>
                <div className="category-line"></div>
              </div>

              <div className="partners-category-grid">
                {groupedPartners[category].map((partner) => (
                  <motion.div
                    key={partner.id}
                    className="partner-minimal-card"
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedPartner(partner)}
                  >
                    <div className="partner-card-inner">
                      <div className="partner-card-image">
                        <img
                          src={partnerImagesMap[partner.id] || '/assets/images/logo.png'}
                          alt={partner.name}
                        />
                        <div className="partner-card-overlay">
                          <ExternalLink size={20} />
                        </div>
                      </div>
                      <div className="partner-card-content">
                        <h3>{partner.name}</h3>
                        <p>{category}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedPartner && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPartner(null)}
          >
            <motion.div
              className="partner-modal"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setSelectedPartner(null)}>
                <X size={24} />
              </button>

              <div className="modal-inner">
                <div className="modal-left">
                  <div className="modal-main-image">
                    <img
                      src={partnerImagesMap[selectedPartner.id] || '/assets/images/logo.png'}
                      alt={selectedPartner.name}
                    />
                  </div>
                </div>
                <div className="modal-right">
                  <div className="modal-content-header">
                    <span className="partner-tag">Certified Partner</span>
                    <h2>{selectedPartner.name}</h2>
                    <p className="partner-category-text">{selectedPartner.service}</p>
                  </div>

                  <div className="modal-info-grid">
                    <div className="info-item">
                      <Award className="text-gold" size={20} />
                      <div>
                        <h4>Premium Quality</h4>
                        <p>Vetted for excellence in event services.</p>
                      </div>
                    </div>
                    <div className="info-item">
                      <Users className="text-gold" size={20} />
                      <div>
                        <h4>Collaboration</h4>
                        <p>Trusted partner for Plan B's signature events.</p>
                      </div>
                    </div>
                  </div>

                  <div className="modal-description">
                    <p>
                      {selectedPartner.description || (
                        <>
                          We have worked with <strong>{selectedPartner.name}</strong> on several successful projects,
                          ensuring the highest quality of {selectedPartner.service.toLowerCase()} for our
                          clients. Through our partnership, clients gain access to exclusive benefits, 
                          attractive discounts, and premium service reserved for Plan B customers.
                        </>
                      )}
                    </p>
                  </div>

                  <button className="btn-gold-outline" onClick={() => setSelectedPartner(null)}>
                    Inquire About This Partner
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Partner;

