import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Import pages
import Home from './pages/Home';
import Services from './pages/Services';
import OurApproach from './pages/OurApproach';
import AboutUs from './pages/AboutUs';
import Resources from './pages/Resources';
import StartProject from './pages/StartProject';

//Import components
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-approach" element={<OurApproach />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/start-project" element={<StartProject />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;