import React from 'react';
import { Calendar, Gift, Trophy, Film } from 'lucide-react';

const Events: React.FC = () => {
  const giveaways = [
    {
      title: "Discord Nitro Giveaway",
      description: "Dapatkan kesempatan untuk memenangkan Discord Nitro 1 hingga 3 bulan!",
      icon: <Gift className="h-6 w-6 text-pink-500" />,
      prize: "Discord Nitro",
      style: "bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 border-pink-300 dark:border-pink-800"
    },
    {
      title: "E-Wallet Giveaway",
      description: "Dapatkan kesempatan untuk memenangkan saldo E-Wallet!",
      icon: <Gift className="h-6 w-6 text-blue-500" />,
      prize: "E-Wallet Balance",
      style: "bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-300 dark:border-blue-800"
    },
    {
      title: "Dan masih banyak lagi!",
      description: "Ikuti giveaway kami untuk kesempatan memenangkan hadiah menarik lainnya!",
      icon: <Gift className="h-6 w-6 text-green-500" />,
      prize: "Join Discord info lanjut!",
      style: "bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20 border-green-300 dark:border-green-800"
    }
  ];

  const events = [
    {
      title: "Game Tournament",
      description: "Ikuti turnamen game untuk memenangkan hadiah menarik!",
      date: "Info Lengkap Discord",
      icon: <Trophy className="h-6 w-6 text-amber-500" />
    },
    {
      title: "Night Podcast",
      description: "Dengarkan podcast malam yang menarik dengan tamu spesial!",
      date: "Info Lengkap Discord",
      icon: <Film className="h-6 w-6 text-indigo-500" />
    },
    {
      title: "Community Game Night",
      description: "Play party games with other members in a casual, fun environment",
      date: "Info Lengkap Discord",
      icon: <Calendar className="h-6 w-6 text-purple-500" />
    }
  ];

  const testimonials = [
    {
      quote: "Kami membangun komunitas yang positif dan suportif di sini. Sangat menyenangkan!",
      name: "Near",
      avatar: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      quote: "Kaze Serenity adalah tempat yang sempurna untuk bersantai dan bersenang-senang apalagi main game!.",
      name: "ERr-Sama",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <section id="events" className="py-16 md:py-24 bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Events & Giveaways</h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Kami menyelenggarakan acara rutin dan memberikan hadiah menarik untuk menjaga komunitas kami tetap menarik dan bermanfaat.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-300 mb-6">Giveaway</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {giveaways.map((giveaway, index) => (
            <div 
              key={index} 
              className={`rounded-xl border p-6 transition-all duration-300 hover:shadow-md ${giveaway.style}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-sm">
                  {giveaway.icon}
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{giveaway.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{giveaway.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium bg-white dark:bg-gray-800 px-3 py-1 rounded-full dark:text-gray-300">
                  Prize: {giveaway.prize}
                </span>
                <a 
                  href="https://discord.gg/kazeindo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm font-medium"
                >
                  Enter Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-300 mb-6">Regular Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                  {event.icon}
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">{event.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-4">{event.description}</p>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium text-center">{event.date}</p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 mb-10">
          <h3 className="text-2xl font-bold text-center text-indigo-800 dark:text-indigo-300 mb-8">Staff-Staff Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <blockquote className="text-gray-600 dark:text-gray-300 italic mb-2">"{testimonial.quote}"</blockquote>
                  <p className="font-medium text-indigo-600 dark:text-indigo-400">- {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Jangan lewatkan acara dan hadiah menarik ini!
          </p>
          <a 
            href="https://discord.gg/kazeindo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Join Our Discord
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;