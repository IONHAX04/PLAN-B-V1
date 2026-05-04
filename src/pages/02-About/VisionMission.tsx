import { motion } from 'framer-motion';
import { Target, Rocket, Lightbulb, Sprout, ShieldCheck, Users } from 'lucide-react';
import { aboutContent } from '../../data/mockData';
import './About.css';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const VisionMission = () => {
  const processSteps = [
    { title: "Inquiry", desc: "Initial contact & expert consultation", date: "Step 01" },
    { title: "Planning", desc: "Bespoke concept & budget orchestration", date: "Step 02" },
    { title: "Execution", desc: "Flawless on-site management & support", date: "Step 03" },
    { title: "Finalization", desc: "Post-event wrap-up & future curation", date: "Step 04" }
  ];

  return (
    <div className="about-page-reimagined">
      {/* Hero */}
      <section className="about-hero-alipay dark-bg">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title-alipay"
          >
            <div className="decor-script">Our Philosophy</div>
            <h1>Vision & <span>Mission</span></h1>
            <div className="title-divider-center"></div>
            <p>Setting new standards in the Swiss event industry through innovation and empathy.</p>
          </motion.div>
        </div>
      </section>

      {/* Main VM Cards */}
      <section className="vision-mission-premium-section section-padding">
        <div className="container">
          <div className="vm-premium-grid">
            <motion.div {...fadeInUp} className="vm-premium-card">
               <div className="vm-card-icon"><Target size={40} /></div>
               <div className="decor-script">The Vision</div>
               <h2>Revolutionizing Events</h2>
               <p>{aboutContent.vision}</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="vm-premium-card">
               <div className="vm-card-icon"><Rocket size={40} /></div>
               <div className="decor-script">The Mission</div>
               <h2>Unique Experiences</h2>
               <p>{aboutContent.mission}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values-alipay section-padding bg-alt">
        <div className="container">
          <motion.div {...fadeInUp} className="section-title-alipay">
            <div className="decor-script">Core Pillars</div>
            <h2>What We Stand For</h2>
            <div className="title-divider-center"></div>
          </motion.div>
          
          <div className="values-grid-alipay">
            <motion.div {...fadeInUp} className="value-item">
              <div className="value-icon"><Lightbulb size={40} /></div>
              <h3>Innovation</h3>
              <p>We think one step ahead, always providing a Plan B for every possible scenario.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="value-item">
              <div className="value-icon"><Users size={40} /></div>
              <h3>Collaboration</h3>
              <p>Deep-rooted partnerships with an elite network of Swiss service providers.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="value-item">
              <div className="value-icon"><ShieldCheck size={40} /></div>
              <h3>Precision</h3>
              <p>Every detail is meticulously calculated to ensure absolute operational excellence.</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.6 }} className="value-item">
              <div className="value-icon"><Sprout size={40} /></div>
              <h3>Growth</h3>
              <p>Creating long-term cultural impact through high-energy festivals and film projects.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="about-process-alipay dark-bg section-padding">
        <div className="container">
          <motion.div {...fadeInUp} className="section-title-alipay">
            <div className="decor-line"></div>
            <h2>The Plan B Workflow</h2>
            <p>Our commitment to excellence at every touchpoint.</p>
          </motion.div>

          <div className="process-timeline-container">
            <div className="timeline-line"></div>
            <div className="timeline-steps">
              {processSteps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  className="timeline-step"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="step-node"></div>
                  <div className="step-content">
                    <span className="step-date">{step.date}</span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
