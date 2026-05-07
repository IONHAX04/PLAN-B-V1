import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, Users } from 'lucide-react';
import { partners, partnersIntro } from '../../data/mockData';
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
  const [selectedPartner, setSelectedPartner] = useState<any>(null);

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

  return (
    <div className="partner-page">
      <section className="partners-hero">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="decor-script">Our Network</div>
            <h1>The Partner List</h1>
            <div className="title-divider-center"></div>
            <p className="section-subtitle">{partnersIntro}</p>
          </motion.div>
        </div>
      </section>

      <section className="partners-list-section">
        <div className="container">
          {categories.map((category, catIndex) => (
            <motion.div 
              key={category} 
              className="category-group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <div className="category-header">
                <div className="category-title-wrap">
                  <span className="category-number">0{catIndex + 1}</span>
                  <h2>{category}</h2>
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
                          src={partnerImages[(partner.id as number - 1) % partnerImages.length]}
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
            </motion.div>
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
                      src={partnerImages[(selectedPartner.id as number - 1) % partnerImages.length]}
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
                      We have worked with <strong>{selectedPartner.name}</strong> on several successful projects,
                      ensuring the highest quality of {selectedPartner.service.toLowerCase()} for our
                      clients. Through our partnership, clients gain access to exclusive benefits, 
                      attractive discounts, and premium service reserved for Plan B customers.
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

