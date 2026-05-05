import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { partners, partnersIntro } from '../../data/mockData';
import { ZoomParallax } from './ZoomParallax';
import partner1 from '../../assets/partners/Partner1.jpg';
import partner2 from '../../assets/partners/Partner2.jpg';
import partner3 from '../../assets/partners/Partner3.jpg';
import partner4 from '../../assets/partners/Partner4.jpg';
import partner5 from '../../assets/partners/Partner5.jpg';
import partner6 from '../../assets/partners/Partner6.jpg';
import partner7 from '../../assets/partners/Partner7.jpg';
import './Partner.css';

const partnerImages = [partner1, partner2, partner3, partner4, partner5, partner6, partner7];

const Partner = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('All');
  const [selectedPartner, setSelectedPartner] = useState<any>(null);

  const serviceCategories = ['All', ...new Set(partners.map(p => p.service))];

  const filteredPartners = partners.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesService = selectedService === 'All' || p.service === selectedService;
    return matchesSearch && matchesService;
  });

  return (
    <div className="partner-page">
      <ZoomParallax />
      
      <div className="partner-content-section">
        <div className="container">
          <div className="section-header">
            <div className="decor-script">Our Partners</div>
            <h1>Strong Collaborations</h1>
            <div className="title-divider-center"></div>
            <p className="section-subtitle">{partnersIntro}</p>
          </div>

          {/* Filters */}
          <div className="partner-filters">
            <div className="search-wrapper">
              <div className="search-box">
                <Search size={18} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search partners by name..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button className="clear-search" onClick={() => setSearchTerm('')}>
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
            <div className="service-tabs">
              {serviceCategories.map(service => (
                <button 
                  key={service}
                  className={selectedService === service ? 'active' : ''}
                  onClick={() => setSelectedService(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Partners Grid */}
          <div className="partners-grid">
            <AnimatePresence mode="popLayout">
              {filteredPartners.map(partner => (
                <motion.div 
                  key={partner.id}
                  layout
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="partner-card"
                  onClick={() => setSelectedPartner(partner)}
                >
                  <div className="partner-image-box">
                    <img 
                      src={partnerImages[(partner.id as number - 1) % partnerImages.length]} 
                      alt={partner.name} 
                      className="partner-card-img"
                    />
                    <div className="partner-overlay-info">
                      <div className="partner-initial">{partner.name.charAt(0)}</div>
                    </div>
                  </div>
                  <div className="partner-info">
                    <h3>{partner.name}</h3>
                    <span className="partner-service">{partner.service}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Partner Detail Modal */}
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
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button className="close-modal" onClick={() => setSelectedPartner(null)}>
                    <X size={24} />
                  </button>
                  
                  <div className="modal-header">
                    <div className="modal-image-placeholder">
                      <img 
                        src={partnerImages[(selectedPartner.id as number - 1) % partnerImages.length]} 
                        alt={selectedPartner.name} 
                      />
                    </div>
                    <div>
                      <h2>{selectedPartner.name}</h2>
                      <span className="text-gold uppercase tracking-widest text-sm">{selectedPartner.service} Partner</span>
                    </div>
                  </div>

                  <div className="modal-body">
                    <div className="modal-section">
                      <h3>About Our Collaboration</h3>
                      <p>We have worked with {selectedPartner.name} on several successful projects, ensuring the highest quality of {selectedPartner.service.toLowerCase()} for our clients. As a valued partner, they receive exclusive access to our event network and collaborative opportunities.</p>
                    </div>

                    <div className="modal-section">
                      <h3>Partner Benefits</h3>
                      <p>Through our partnership, clients gain access to exclusive benefits, attractive discounts, and premium service that is reserved exclusively for Plan B customers.</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Partner;
