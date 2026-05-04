import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/01-Home/Home';
import About from './pages/02-About/About';
import VisionMission from './pages/02-About/VisionMission';
import Team from './pages/02-About/Team';
import Services from './pages/03-Services/Services';
import FilmfactoryV2 from './pages/04-Filmfactory/FilmfactoryV2';
import Partner from './pages/05-Partner/Partner';
import Projects from './pages/06-Projects/Projects';
import Contact from './pages/07-Contact/Contact';

function AppLayout() {
  const location = useLocation();
  const isV2Route = location.pathname === '/v2';

  return (
    <div className="app-wrapper">
      {!isV2Route && <Navbar />}
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/vision" element={<VisionMission />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/services" element={<Services />} />
            <Route path="/filmfactory" element={<FilmfactoryV2 />} />
            <Route path="/v2" element={<FilmfactoryV2 />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      {!isV2Route && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
    </Router>
  );
}

export default App;
