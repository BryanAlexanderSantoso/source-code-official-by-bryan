import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Collaborations: React.FC = () => {
  const collaborations = [
    {
      name: "Ace Anthem",
      role: "Streamer & Content Creator",
      image:
        "https://i.pinimg.com/736x/d0/d8/cb/d0d8cb80bdf6ddddec926e7eda3c4b9a.jpg",
      testimonial:
        "Collaborating with Kaze Serenity was an incredible experience. The community is incredibly supportive and engaging!",
      highlight: "Chill Podcast",
    },
    {
      name: "Wielino",
      role: "Streamer & Content Creator",
      image:
        "https://i.pinimg.com/736x/56/db/0d/56db0d4aef30da75f3cc7acb1f759d7d.jpg",
      testimonial:
        "The Kaze Serenity community brings such positive energy to every collaboration. It's always a highlight of my month!",
      highlight: "Chill Podcast",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % collaborations.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + collaborations.length) % collaborations.length
    );
  };

  return (
    <section
      id="collaborations"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Kolaborasi Eksklusif
          </h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Kami telah bermitra dengan beberapa pembuat konten paling menarik untuk menghadirkan pengalaman unik bagi komunitas kami.
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {collaborations.map((collab, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="md:flex bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                    <div className="md:w-2/5 relative h-64 md:h-[450px]">
                      <img
                        src={collab.image}
                        alt={collab.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <div className="flex items-center">
                          <Star className="text-yellow-400 w-5 h-5 mr-1" />
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 inline-block px-3 py-1 rounded-full text-sm font-medium mb-4">
                          {collab.highlight}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {collab.name}
                        </h3>
                        <p className="text-indigo-600 dark:text-indigo-400 mb-4">{collab.role}</p>
                        <blockquote className="italic text-gray-600 dark:text-gray-300 border-l-4 border-indigo-300 dark:border-indigo-600 pl-4 mb-6">
                          "{collab.testimonial}"
                        </blockquote>
                      </div>
                      <div className="mt-4">
                        <a
                          href="https://discord.gg/kazeindo"
                          className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200"
                        >
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between px-4">
            <button
              onClick={prevSlide}
              className="bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-indigo-600 dark:text-indigo-400 rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none"
              aria-label="Previous collaboration"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-indigo-600 dark:text-indigo-400 rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none"
              aria-label="Next collaboration"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {collaborations.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === activeIndex ? "bg-indigo-600 dark:bg-indigo-400 w-6" : "bg-indigo-300 dark:bg-indigo-700"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Tertarik berkolaborasi dengan Kaze Serenity?
          </p>
          <a
            href="https://discord.gg/kazeindo"
            className="inline-block bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Ajukan Permohonan Kerjasama
          </a>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;