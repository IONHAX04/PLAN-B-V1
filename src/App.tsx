import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/01-Home/Home';
import About from './pages/02-About/About';
import Services from './pages/03-Services/Services';
import Filmfactory from './pages/04-Filmfactory/Filmfactory';
import Partner from './pages/05-Partner/Partner';
import Projects from './pages/06-Projects/Projects';
import Contact from './pages/07-Contact/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about/*" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/filmfactory" element={<Filmfactory />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
