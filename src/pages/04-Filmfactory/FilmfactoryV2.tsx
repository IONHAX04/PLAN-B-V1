import { useEffect } from 'react';
import { Film, Users, Trophy, Clapperboard, Calendar, Target, Eye, Star } from 'lucide-react';
import Lenis from 'lenis';
import { filmfactoryContent } from '../../data/mockData';
import poster2024 from '../../assets/filmFactory/First-take-2024.jpg';
import poster2025 from '../../assets/filmFactory/First-take-2025.jpg';
import './Filmfactory.css';
import './FilmfactoryV2.css';

const FilmfactoryV2 = () => {
  useEffect(() => {
    const lenis = new Lenis();
    let animationFrameId = 0;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="v2-page">
      {/* Hero section hidden for now as per user request */}
      
      <div className="ff-real-content" style={{ paddingTop: '120px' }}>
        <section className="ff-festival section-padding">
          <div className="container">
            <div className="ff-header-v2">
              <span className="ff-badge">{filmfactoryContent.firstTake.subtitle}</span>
              <h1>{filmfactoryContent.firstTake.title}</h1>
              <p className="ff-tagline">{filmfactoryContent.firstTake.tagline}</p>
            </div>

            <div className="ff-grid-info">
              <div className="ff-text-box">
                <p className="main-desc">{filmfactoryContent.firstTake.description}</p>
                
                <div className="ff-mission-vision">
                  <div className="mv-item">
                    <div className="mv-icon"><Target size={20} /></div>
                    <div>
                      <h3>Mission</h3>
                      <p>{filmfactoryContent.firstTake.mission}</p>
                    </div>
                  </div>
                  <div className="mv-item">
                    <div className="mv-icon"><Eye size={20} /></div>
                    <div>
                      <h3>Vision</h3>
                      <p>{filmfactoryContent.firstTake.vision}</p>
                    </div>
                  </div>
                  <div className="mv-item">
                    <div className="mv-icon"><Star size={20} /></div>
                    <div>
                      <h3>Core Values</h3>
                      <p>{filmfactoryContent.firstTake.coreValues}</p>
                    </div>
                  </div>
                </div>

                <div className="ff-stats-box">
                  {filmfactoryContent.firstTake.stats.map((stat, i) => (
                    <div className="stat-card" key={i}>
                      {i === 0 && <Film size={24} />}
                      {i === 1 && <Trophy size={24} />}
                      {i === 2 && <Users size={24} />}
                      <div className="val">{stat.value}</div>
                      <div className="lab">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ff-posters-visual">
                <div className="poster-wrapper-v2">
                  <img src={poster2024} alt="First Take 2024" />
                  <div className="poster-label-v2">First Take 2024</div>
                </div>
                <div className="poster-wrapper-v2">
                  <img src={poster2025} alt="First Take 2025" />
                  <div className="poster-label-v2">First Take 2025</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ff-community-box-section section-padding">
          <div className="container">
            <div className="premium-community-card">
              <Clapperboard size={60} className="text-gold" />
              <h2>{filmfactoryContent.myFrame.title}</h2>
              <p className="ff-tagline-community">{filmfactoryContent.myFrame.tagline}</p>
              <p className="community-desc">{filmfactoryContent.myFrame.description}</p>

              <div className="community-offerings-grid">
                {filmfactoryContent.myFrame.offerings.map((offering, i) => (
                  <div key={i} className="offering-card">
                    <h3>{offering.title}</h3>
                    <p>{offering.description}</p>
                  </div>
                ))}
              </div>

              <div className="workshop-list-mini">
                <h4 className="upcoming-title">Upcoming Workshops</h4>
                <div className="workshops-flex">
                  {filmfactoryContent.myFrame.workshops.map((w, i) => (
                    <div key={i} className="mini-item">
                      <Calendar size={14} />
                      <span>
                        {w.title} — {w.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cta-group">
                <button className="btn-ff">Join Community</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FilmfactoryV2;
