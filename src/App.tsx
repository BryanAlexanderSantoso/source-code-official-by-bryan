import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Collaborations from './components/Collaborations';
import Partnership from './components/Partnership';
import Events from './components/Events';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Kaze Serenity - Join Our Discord Community';
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Collaborations />
      <Partnership />
      <Events />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;