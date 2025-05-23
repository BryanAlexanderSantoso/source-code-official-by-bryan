import React, { useState, useEffect } from 'react';
import { Menu, X, Wind } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <Wind className="h-8 w-8 text-indigo-500" />
              <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-indigo-800' : 'text-white'}`}>
                Kaze Serenity
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <a 
                href="#about" 
                className={`${isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-200'} transition-colors duration-200`}
              >
                About
              </a>
              <a 
                href="#collaborations" 
                className={`${isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-200'} transition-colors duration-200`}
              >
                Collaborations
              </a>
              <a 
                href="#partnership" 
                className={`${isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-200'} transition-colors duration-200`}
              >
                Partnership
              </a>
              <a 
                href="#events" 
                className={`${isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-indigo-200'} transition-colors duration-200`}
              >
                Events
              </a>
              <a 
                href="https://discord.gg/kazeindo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full transition-colors duration-200"
              >
                Join Now
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} p-2`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#about" 
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#collaborations" 
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Collaborations
            </a>
            <a 
              href="#partnership" 
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Partnership
            </a>
            <a 
              href="#events" 
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Events
            </a>
            <a 
              href="https://discord.gg/kazeindo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block px-3 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-md text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;