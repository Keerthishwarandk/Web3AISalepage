
import React, { useEffect, useState } from 'react';
import { Clock, Award, Users, Calendar, Coffee, Mic, Star, Sparkles } from 'lucide-react';

const EventSchedule = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scheduleItems = [
    {
      icon: Mic,
      time: '10:00 AM – 10:30 AM',
      title: 'Morning Kickoff',
      description: 'Inaugural address by national leaders + Cultural performances',
      emoji: '☀️',
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50'
    },
    {
      icon: Users,
      time: '10:30 AM – 2:00 PM',
      title: 'Industry Roundtables',
      description: 'AI, FinTech, Energy, MSME, HealthTech + Networking breaks',
      emoji: '🔍',
      gradient: 'from-blue-500 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50'
    },
    {
      icon: Award,
      time: '3:00 PM – 4:30 PM',
      title: 'Viksit Bharat Awards',
      description: 'Honors for leaders + Press coverage',
      emoji: '🏆',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: Coffee,
      time: '4:30 PM – 9:00 PM',
      title: 'Gala Dinner',
      description: "Networking with India's elite",
      emoji: '🥂',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50'
    }
  ];

  const FloatingIcon = ({ delay, size, position, rotation }) => (
    <div 
      className={`absolute ${position} ${size} text-purple-300/20`}
      style={{
        animation: `float 8s ease-in-out infinite ${delay}s, fadeInOut 6s ease-in-out infinite ${delay}s`,
        transform: `rotate(${rotation}deg)`
      }}
    >
      <Calendar className="w-full h-full" />
    </div>
  );

  const TimelineConnector = ({ index, total }) => (
    index < total - 1 && (
      <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-purple-300 to-blue-300 opacity-60"></div>
    )
  );

  return (
    <section className="relative min-h-screen py-20 px-6 overflow-hidden" id="schedule">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50/80 to-pink-100/90"></div>
        
        {/* Animated mesh gradient */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)
            `,
            animation: 'meshMove 25s ease-in-out infinite'
          }}
        />

        {/* Dynamic light rays */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(147, 51, 234, 0.1) 60deg, transparent 120deg, rgba(59, 130, 246, 0.1) 180deg, transparent 240deg, rgba(236, 72, 153, 0.1) 300deg, transparent 360deg)',
            animation: 'spin 30s linear infinite'
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <FloatingIcon delay={0} size="w-6 h-6" position="top-20 left-[15%]" rotation={15} />
      <FloatingIcon delay={2} size="w-4 h-4" position="top-40 right-[20%]" rotation={-20} />
      <FloatingIcon delay={1} size="w-5 h-5" position="bottom-32 left-[70%]" rotation={45} />
      <FloatingIcon delay={3} size="w-3 h-3" position="top-80 right-[60%]" rotation={-15} />

      <div className="relative max-w-6xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex justify-center items-center mb-6">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl rounded-full animate-pulse"></div>
              <Calendar className="relative w-16 h-16 text-purple-600" />
            </div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-extrabold mb-6 relative">
            <span className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 bg-clip-text text-transparent">
              Event Schedule
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl -z-10 animate-pulse"></div>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A meticulously crafted agenda designed to inspire, connect, and drive India's future forward
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="w-40 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                style={{ animation: 'shimmer 2s ease-in-out infinite' }}
              />
            </div>
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="relative">
          {scheduleItems.map((item, index) => (
            <div 
              key={item.title}
              className={`relative mb-12 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
              style={{ 
                transitionDelay: `${400 + index * 200}ms`,
                transform: hoveredItem === index ? 'scale(1.02) translateY(-4px)' : 'scale(1) translateY(0)'
              }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Timeline Connector */}
              <TimelineConnector index={index} total={scheduleItems.length} />
              
              <div className={`relative backdrop-blur-xl bg-gradient-to-r ${item.bgGradient} rounded-3xl p-8 border border-white/40 shadow-xl group hover:shadow-2xl transition-all duration-500`}>
                {/* Animated border glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm -z-10`}></div>
                
                <div className="flex items-start gap-6">
                  {/* Icon & Timeline dot */}
                  <div className="flex flex-col items-center">
                    <div 
                      className={`relative p-4 bg-gradient-to-r ${item.gradient} rounded-2xl text-white shadow-lg transition-all duration-500 group-hover:shadow-xl z-10`}
                      style={{
                        transform: hoveredItem === index ? 'scale(1.15) rotate(-5deg)' : 'scale(1) rotate(0deg)',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                      <item.icon size={32} className="relative z-10" />
                      
                      {/* Emoji overlay */}
                      <div className="absolute -top-2 -right-2 text-2xl">{item.emoji}</div>
                    </div>
                    
                    {/* Pulsing dot for timeline */}
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4 animate-pulse shadow-lg"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <span className="text-purple-700 font-semibold text-lg">{item.time}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                      {item.description}
                    </p>

                    {/* Decorative elements */}
                    <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(3)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 text-${item.gradient.split('-')[1]}-400`}
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '1400ms' }}>
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-xl rounded-full animate-pulse"></div>
            <a 
              href="#" 
              className="relative inline-flex items-center gap-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-12 py-6 rounded-3xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 group overflow-hidden text-lg"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Shimmer effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"
                style={{ transform: 'translateX(-100%)' }}
              />
              
              <Sparkles className="relative z-10 group-hover:rotate-180 transition-transform duration-700" size={24} />
              <span className="relative z-10">Reserve Your Seat</span>
              <Star className="relative z-10 group-hover:scale-125 transition-transform duration-500" size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default EventSchedule;




/* import React from 'react';

const EventSchedule = () => (
  <section className="bg-white py-10 px-6" id="schedule">
    <h2 className="text-3xl font-bold text-center text-purple-900 mb-6">🗓️ Event Schedule</h2>
    <ul className="max-w-3xl mx-auto text-gray-700 space-y-4">
      <li><strong>☀️ Morning Kickoff (10:00 AM – 10:30 AM):</strong> Inaugural address by national leaders + Cultural performances</li>
      <li><strong>🔍 Industry Roundtables (10:30 AM – 2:00 PM):</strong> AI, FinTech, Energy, MSME, HealthTech + Networking breaks</li>
      <li><strong>🏆 Viksit Bharat Awards (3:00 PM – 4:30 PM):</strong> Honors for leaders + Press coverage</li>
      <li><strong>🥂 Gala Dinner (4:30 PM – 9:00 PM):</strong> Networking with India’s elite</li>
    </ul>
  </section>
);

export default EventSchedule; */