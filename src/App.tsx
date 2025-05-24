import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Collaborations from './components/Collaborations';
import Partnership from './components/Partnership';
import Events from './components/Events';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './styles/animations.css';

function App() {
  useEffect(() => {
    document.title = 'Kaze Serenity - Join Our Discord Community';
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <Hero />
        <About />
        <Collaborations />
        <Partnership />
        <Events />
        <CTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;