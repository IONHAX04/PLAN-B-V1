import { useEffect } from 'react';
import { Film, Users, Trophy, Clapperboard, Calendar, Target, Eye, Star } from 'lucide-react';
import Lenis from 'lenis';
import { filmfactoryContent } from '../../data/mockData';
import poster2024 from '../../assets/filmFactory/First-take-2024.jpg';
import poster2025 from '../../assets/filmFactory/First-take-2025.jpg';
import firstTakeImg from '../../assets/contents/first-take.jpeg';
import galleryImg from '../../assets/contents/gallery.jpeg';
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
                
                <div className="ff-highlights">
                  {filmfactoryContent.firstTake.highlights.map((h, i) => (
                    <div key={i} className="highlight-item">
                      <h3>{h.title}</h3>
                      <p>{h.description}</p>
                    </div>
                  ))}
                </div>

                <div className="ff-stats-box">
                  {filmfactoryContent.firstTake.stats.map((stat, i) => (
                    <div className="stat-card" key={i}>
                      {i === 0 && <Film size={24} />}
                      {i === 1 && <Clapperboard size={24} />}
                      {i === 2 && <Users size={24} />}
                      <div className="val">{stat.value}</div>
                      <div className="lab">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ff-posters-visual">
                <div className="poster-wrapper-v2">
                  <img src={firstTakeImg} alt="First Take Live" />
                  <div className="poster-label-v2">Live Event 2025</div>
                </div>
                <div className="poster-wrapper-v2">
                  <img src={poster2025} alt="First Take 2025 Poster" />
                  <div className="poster-label-v2">Official Poster</div>
                </div>
              </div>
            </div>

            {/* Winners Section */}
            <div className="ff-winners-section section-padding">
              <div className="ff-section-header-minimal">
                <Trophy size={40} className="text-gold" />
                <h2>First Take 2025 <span>Winners</span></h2>
              </div>
              <div className="winners-grid">
                {filmfactoryContent.firstTake.winners.map((w, i) => (
                  <div key={i} className="winner-card">
                    <div className="winner-cat">{w.category}</div>
                    <div className="winner-name">{w.winner}</div>
                    <div className="winner-film">"{w.film}"</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Section */}
            <div className="ff-gallery-section section-padding">
              <div className="section-header-center">
                <div className="decor-script">Moments</div>
                <h2>Festival Gallery</h2>
                <div className="title-divider-center"></div>
              </div>
              <div className="ff-gallery-full">
                <img src={galleryImg} alt="First Take Festival Gallery" className="gallery-wide-img" />
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
