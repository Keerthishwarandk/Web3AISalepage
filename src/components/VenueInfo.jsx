import React from 'react';
import { MapPin, ExternalLink, Car, Train, Building } from 'lucide-react';

const VenueInfo = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden" id="venue">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 animate-pulse opacity-30"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-300 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-300 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-indigo-300 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-4 animate-fade-in">
            Venue Information
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full animate-scale-in"></div>
        </div>

        <div className="backdrop-blur-lg bg-white/70 rounded-3xl p-8 shadow-2xl border border-white/20 mb-8 group hover:shadow-3xl transition-all duration-700 hover:scale-105 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              <MapPin size={32} />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Bharat Mandapam
          </h3>
          <p className="text-center text-gray-600 text-lg">New Delhi, India</p>
          
          <div className="mt-8 text-center">
            <p className="text-gray-700 leading-relaxed animate-slide-in-right">
              India's premier convention center located in the heart of New Delhi
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Building, title: 'Nearby Hotels', desc: 'Premium accommodations within walking distance' },
            { icon: Car, title: 'Parking Available', desc: 'Secure parking facilities for all attendees' },
            { icon: Train, title: 'Metro Access', desc: 'Direct metro connectivity for easy commute' }
          ].map((item, index) => (
            <div 
              key={item.title}
              className="backdrop-blur-sm bg-white/50 rounded-2xl p-6 border border-white/30 hover:bg-white/70 transition-all duration-500 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:from-purple-700 hover:to-blue-700 group animate-pulse"
          >
            <span>View on Google Maps</span>
            <ExternalLink size={20} className="group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default VenueInfo;
