import React from 'react';
import { Heart, Users, MessageSquare, Shield } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: 'Welcoming Community',
      description: 'A friendly, inclusive space where everyone feels valued and respected.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: 'Meaningful Connections',
      description: 'Form lasting friendships with like-minded individuals who share your interests.'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-500" />,
      title: 'Engaging Conversations',
      description: 'Participate in lively discussions on gaming, art, music, and more.'
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: 'Safe Environment',
      description: 'Active moderation ensures a positive experience for all members.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Kaze Serenity</h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Kaze Serenity is more than a server – it's a sanctuary for gamers, creators, and chill-seekers to connect, 
            grow, and vibe in a friendly, supportive environment. Our community values kindness, creativity, and genuine connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-indigo-50 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:bg-indigo-100"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8 md:p-10 shadow-sm">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">Our Mission</h3>
              <p className="text-indigo-900">
                To create a vibrant online space where members feel valued, supported, and inspired. 
                We strive to foster genuine connections, celebrate creativity, and provide a positive 
                escape from the stresses of everyday life.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <img src="https://i.pinimg.com/736x/1d/25/5f/1d255f5302a9ea2702916124601dd053.jpg" alt="Kaze Serenity Logo" className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;