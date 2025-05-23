import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900"></div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 15}s`,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Welcome to <span className="text-indigo-300">Kaze Serenity</span>
        </h1>
        <p className="text-xl md:text-2xl text-indigo-100 mb-10 max-w-3xl mx-auto">
          Tempat perlindungan bagi para gamer, kreator, dan pencari ketenangan untuk terhubung, berkembang, dan bergembira dalam lingkungan yang bersahabat dan suportif.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="https://discord.gg/kazeindo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-800 hover:bg-indigo-100 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Join the Community
          </a>
          <a
            href="#about"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;