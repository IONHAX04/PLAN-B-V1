import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
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

  const serviceCategories = useMemo(
    () => Array.from(new Set(partners.map((partner) => partner.service))),
    []
  );

  return (
    <div className="partner-page">
      <section className="partners-gallery-hero">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="decor-script">Our Partners</div>
            <h1>Partner Gallery</h1>
            <div className="title-divider-center"></div>
            <p className="section-subtitle">{partnersIntro}</p>
          </motion.div>

          <div className="partner-service-chips">
            {serviceCategories.map((service) => (
              <span key={service} className="partner-service-chip">
                {service}
              </span>
            ))}
          </div>

          <div className="partners-gallery-grid">
            <AnimatePresence>
              {partners.map((partner, index) => (
                <motion.button
                  key={partner.id}
                  type="button"
                  className="partner-gallery-card"
                  onClick={() => setSelectedPartner(partner)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="partner-gallery-image">
                    <img
                      src={partnerImages[(partner.id as number - 1) % partnerImages.length]}
                      alt={partner.name}
                    />
                  </div>
                  <div className="partner-gallery-meta">
                    <h3>{partner.name}</h3>
                    <span>{partner.service}</span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
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
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
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
                  <span className="text-gold uppercase tracking-widest text-sm">
                    {selectedPartner.service} Partner
                  </span>
                </div>
              </div>

              <div className="modal-body">
                <div className="modal-section">
                  <h3>About Our Collaboration</h3>
                  <p>
                    We have worked with {selectedPartner.name} on several successful projects,
                    ensuring the highest quality of {selectedPartner.service.toLowerCase()} for our
                    clients.
                  </p>
                </div>

                <div className="modal-section">
                  <h3>Partner Benefits</h3>
                  <p>
                    Through our partnership, clients gain access to exclusive benefits, attractive
                    discounts, and premium service reserved for Plan B customers.
                  </p>
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
