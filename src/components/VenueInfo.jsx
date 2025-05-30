
import React, { useEffect, useState } from 'react';
import { MapPin, ExternalLink, Car, Train, Building } from 'lucide-react';

const VenueInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const venueFeatures = [
    {
      icon: Building,
      title: 'Luxury Accommodations',
      description: 'Five-star hotels within premium proximity',
      details: 'Curated selection of world-class hospitality partners',
      gradient: 'from-slate-700 to-gray-800',
      accent: 'slate'
    },
    {
      icon: Car,
      title: 'Valet & VIP Parking',
      description: 'Exclusive parking with concierge service',
      details: 'Dedicated attendant service for all delegates',
      gradient: 'from-blue-700 to-indigo-800',
      accent: 'blue'
    },
    {
      icon: Train,
      title: 'Premium Transit',
      description: 'Direct metro & executive transport access',
      details: 'Seamless connectivity to the business district of Delhi',
      gradient: 'from-purple-700 to-violet-800',
      accent: 'purple'
    }
  ];

  const FloatingElement = ({ delay, size, position, color, blur = false }) => (
    <div 
      className={`absolute ${position} ${size} ${blur ? 'blur-sm' : ''}`}
      style={{
        background: `linear-gradient(135deg, ${color})`,
        borderRadius: '50%',
        opacity: 0.08,
        animation: `float 20s ease-in-out infinite ${delay}s, pulse 8s ease-in-out infinite ${delay * 0.3}s`
      }}
    />
  );

  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
            25% { transform: translateY(-25px) rotate(2deg) scale(1.02); }
            50% { transform: translateY(-15px) rotate(-1deg) scale(0.98); }
            75% { transform: translateY(-20px) rotate(1deg) scale(1.01); }
          }
          
          @keyframes meshMove {
            0%, 100% { transform: rotate(0deg) scale(1) translate(0, 0); }
            25% { transform: rotate(0.8deg) scale(1.02) translate(15px, -8px); }
            50% { transform: rotate(-0.5deg) scale(0.98) translate(-8px, 15px); }
            75% { transform: rotate(1deg) scale(1.03) translate(12px, -12px); }
          }
          
          @keyframes shimmerLine {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.08; }
            50% { opacity: 0.15; }
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
      
      <section className="relative py-16 px-4 overflow-hidden" id="venue">
        {/* Ultra-premium background */}
        <div className="absolute inset-0">
          {/* Base sophisticated gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-50 to-stone-100"></div>
          
          {/* Luxury mesh overlay */}
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              background: `
                radial-gradient(circle at 30% 20%, rgba(71, 85, 105, 0.08) 0%, transparent 60%),
                radial-gradient(circle at 70% 80%, rgba(99, 102, 241, 0.06) 0%, transparent 60%),
                radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.05) 0%, transparent 60%),
                radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.07) 0%, transparent 60%)
              `,
              animation: 'meshMove 35s ease-in-out infinite'
            }}
          />

          {/* Premium texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.25) 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}
          />
        </div>

        {/* Elegant floating elements */}
        <FloatingElement delay={0} size="w-24 h-24" position="top-8 left-[5%]" color="rgba(71, 85, 105, 0.1), rgba(148, 163, 184, 0.05)" />
        <FloatingElement delay={4} size="w-16 h-16" position="top-32 right-[8%]" color="rgba(99, 102, 241, 0.08), rgba(165, 180, 252, 0.04)" blur />
        <FloatingElement delay={2} size="w-20 h-20" position="bottom-16 left-[75%]" color="rgba(168, 85, 247, 0.06), rgba(196, 181, 253, 0.03)" />
        <FloatingElement delay={6} size="w-12 h-12" position="top-48 right-[70%]" color="rgba(59, 130, 246, 0.09), rgba(147, 197, 253, 0.05)" blur />

        <div className="relative max-w-4xl mx-auto">
          {/* Refined Header */}
          <div className={`text-center mb-12 transform transition-all duration-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="flex justify-center items-center mb-6">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-slate-600/10 via-blue-600/10 to-purple-600/10 blur-2xl rounded-full"></div>
                <div className="relative p-3 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/70 shadow-xl">
                  <MapPin className="w-8 h-8 text-slate-700" strokeWidth={1.5} />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight relative">
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                  Venue Information
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
                India's premier convention center in New Delhi
              </p>
            </div>
            
            <div className="flex justify-center mt-8">
              <div className="relative">
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                <div 
                  className="absolute inset-0 w-32 h-0.5 bg-gradient-to-r from-slate-500 via-blue-500 to-purple-500 opacity-60"
                  style={{ 
                    animation: 'shimmerLine 4s ease-in-out infinite',
                    background: 'linear-gradient(90deg, transparent, rgba(71, 85, 105, 0.8), transparent)',
                    backgroundSize: '200% 100%'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Premium Venue Card */}
          <div className={`transform transition-all duration-1000 mb-12 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-all duration-700 blur-xl rounded-2xl"></div>
              
              <div className="relative backdrop-blur-xl bg-white/80 rounded-2xl border border-white/50 shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-700">
                <div className="p-8">
                  <div className="text-center">
                    <div className="relative inline-block mb-4">
                      <div className="absolute -inset-2 bg-gradient-to-r from-slate-600/20 via-blue-600/20 to-purple-600/20 blur-xl rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                      <div className="relative p-3 bg-gradient-to-r from-slate-700 via-blue-700 to-purple-700 rounded-xl text-white shadow-lg">
                        <Building size={28} strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">
                      Bharat Mandapam
                    </h3>
                    <p className="text-lg text-slate-600 font-light mb-6 tracking-wide">
                      New Delhi, India
                    </p>
                    
                    <div className="max-w-2xl mx-auto">
                      <p className="text-base text-slate-700 leading-relaxed font-light mb-6">
                        India's architectural crown jewel and premier international convention center, strategically positioned in the heart of New Delhi's diplomatic quarter.
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-3 text-slate-600 text-sm">
                        <div className="flex items-center justify-center gap-2 p-3 bg-white/60 rounded-lg">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                          <span className="font-medium">Heritage Location</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 p-3 bg-white/60 rounded-lg">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                          <span className="font-medium">Modern Facilities</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 p-3 bg-white/60 rounded-lg">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                          <span className="font-medium">Premium Access</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Features Grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {venueFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className={`group transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                style={{ 
                  transitionDelay: `${800 + index * 200}ms`,
                }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className={`relative h-full backdrop-blur-xl bg-white/70 rounded-2xl border border-white/40 shadow-lg overflow-hidden transition-all duration-700 ${
                  hoveredFeature === index ? 'shadow-xl scale-105 -translate-y-1' : ''
                }`}>
                  {/* Premium glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} opacity-0 transition-all duration-700 blur-lg rounded-2xl ${
                    hoveredFeature === index ? 'opacity-25' : ''
                  }`}></div>
                  
                  <div className="relative z-10 p-6">
                    <div className="text-center">
                      <div className="relative inline-block mb-4">
                        <div className={`absolute -inset-2 bg-gradient-to-r ${feature.gradient} opacity-20 blur-lg rounded-xl transition-all duration-500 ${
                          hoveredFeature === index ? 'scale-110 opacity-30' : ''
                        }`}></div>
                        <div className={`relative p-3 bg-gradient-to-r ${feature.gradient} rounded-xl text-white shadow-lg transition-all duration-500 ${
                          hoveredFeature === index ? 'scale-110 rotate-2' : ''
                        }`}>
                          <feature.icon size={24} strokeWidth={1.5} />
                        </div>
                      </div>
                      
                      <h4 className={`text-lg md:text-xl font-bold text-slate-900 mb-3 tracking-tight transition-all duration-300 ${
                        hoveredFeature === index ? 'text-slate-800' : ''
                      }`}>
                        {feature.title}
                      </h4>
                      
                      <p className={`text-slate-700 text-sm leading-relaxed font-light mb-4 transition-all duration-300 ${
                        hoveredFeature === index ? 'text-slate-800' : ''
                      }`}>
                        {feature.description}
                      </p>
                      
                      <p className={`text-${feature.accent}-600 font-medium text-xs tracking-wide uppercase transition-all duration-500 ${
                        hoveredFeature === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                      }`}>
                        {feature.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Call to Action */}
          <div className={`text-center transform transition-all duration-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} style={{ transitionDelay: '1400ms' }}>
            <div className="backdrop-blur-lg bg-white/80 rounded-2xl p-8 border border-white/50 max-w-2xl mx-auto shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Navigate with Premium Convenience
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed mb-8 font-light">
                Experience seamless access to India's diplomatic heart with world-class transportation.
              </p>
              
              <div className="relative inline-block">
                <div className="absolute -inset-3 bg-gradient-to-r from-slate-600/30 via-blue-600/30 to-purple-600/30 blur-lg rounded-full animate-pulse"></div>
                <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-slate-700 via-blue-700 to-purple-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
                  {/* Sophisticated hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <MapPin size={20} strokeWidth={2} className="group-hover:scale-110 transition-transform duration-500 relative z-10" />
                  <span className="relative z-10 tracking-wide">Explore Location</span>
                  <ExternalLink size={20} strokeWidth={2} className="group-hover:rotate-45 transition-transform duration-500 relative z-10" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"></div>
      </section>
    </>
  );
};

export default VenueInfo;


/* 
import React, { useEffect, useState } from 'react';
import { MapPin, ExternalLink, Car, Train, Building } from 'lucide-react';

const VenueInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const venueFeatures = [
    {
      icon: Building,
      title: 'Luxury Accommodations',
      description: 'Five-star hotels within premium proximity',
      details: 'Curated selection of world-class hospitality partners',
      gradient: 'from-slate-700 to-gray-800',
      accent: 'slate'
    },
    {
      icon: Car,
      title: 'Valet & VIP Parking',
      description: 'Exclusive parking with concierge service',
      details: 'Dedicated attendant service for all delegates',
      gradient: 'from-blue-700 to-indigo-800',
      accent: 'blue'
    },
    {
      icon: Train,
      title: 'Premium Transit',
      description: 'Direct metro & executive transport access',
      details: 'Seamless connectivity to the business district of Delhi',
      gradient: 'from-purple-700 to-violet-800',
      accent: 'purple'
    }
  ];

  const FloatingElement = ({ delay, size, position, color, blur = false }) => (
    <div 
      className={`absolute ${position} ${size} ${blur ? 'blur-sm' : ''}`}
      style={{
        background: `linear-gradient(135deg, ${color})`,
        borderRadius: '50%',
        opacity: 0.08,
        animation: `float 20s ease-in-out infinite ${delay}s, pulse 8s ease-in-out infinite ${delay * 0.3}s`
      }}
    />
  );

  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
            25% { transform: translateY(-25px) rotate(2deg) scale(1.02); }
            50% { transform: translateY(-15px) rotate(-1deg) scale(0.98); }
            75% { transform: translateY(-20px) rotate(1deg) scale(1.01); }
          }
          
          @keyframes meshMove {
            0%, 100% { transform: rotate(0deg) scale(1) translate(0, 0); }
            25% { transform: rotate(0.8deg) scale(1.02) translate(15px, -8px); }
            50% { transform: rotate(-0.5deg) scale(0.98) translate(-8px, 15px); }
            75% { transform: rotate(1deg) scale(1.03) translate(12px, -12px); }
          }
          
          @keyframes shimmerLine {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.08; }
            50% { opacity: 0.15; }
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
      
      <section className="relative min-h-screen py-24 px-6 overflow-hidden" id="venue">
        
        <div className="absolute inset-0">
       
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-50 to-stone-100"></div>
          
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              background: `
                radial-gradient(circle at 30% 20%, rgba(71, 85, 105, 0.08) 0%, transparent 60%),
                radial-gradient(circle at 70% 80%, rgba(99, 102, 241, 0.06) 0%, transparent 60%),
                radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.05) 0%, transparent 60%),
                radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.07) 0%, transparent 60%)
              `,
              animation: 'meshMove 35s ease-in-out infinite'
            }}
          />

        
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.25) 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}
          />
        </div>

       
        <FloatingElement delay={0} size="w-40 h-40" position="top-16 left-[5%]" color="rgba(71, 85, 105, 0.1), rgba(148, 163, 184, 0.05)" />
        <FloatingElement delay={4} size="w-28 h-28" position="top-60 right-[8%]" color="rgba(99, 102, 241, 0.08), rgba(165, 180, 252, 0.04)" blur />
        <FloatingElement delay={2} size="w-32 h-32" position="bottom-32 left-[75%]" color="rgba(168, 85, 247, 0.06), rgba(196, 181, 253, 0.03)" />
        <FloatingElement delay={6} size="w-20 h-20" position="top-80 right-[70%]" color="rgba(59, 130, 246, 0.09), rgba(147, 197, 253, 0.05)" blur />

        <div className="relative max-w-7xl mx-auto">
         
          <div className={`text-center mb-24 transform transition-all duration-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="flex justify-center items-center mb-10">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-slate-600/10 via-blue-600/10 to-purple-600/10 blur-3xl rounded-full"></div>
                <div className="relative p-6 bg-white/90 backdrop-blur-sm rounded-3xl border border-white/70 shadow-2xl">
                  <MapPin className="w-16 h-16 text-slate-700" strokeWidth={1.5} />
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-7xl md:text-8xl font-black tracking-tight relative">
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                  Venue
                </span>
                <br />
                <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Info
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                India's most prestigious convention destination, where world leaders convene to shape the future
              </p>
            </div>
            
            <div className="flex justify-center mt-16">
              <div className="relative">
                <div className="w-64 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                <div 
                  className="absolute inset-0 w-64 h-0.5 bg-gradient-to-r from-slate-500 via-blue-500 to-purple-500 opacity-60"
                  style={{ 
                    animation: 'shimmerLine 4s ease-in-out infinite',
                    background: 'linear-gradient(90deg, transparent, rgba(71, 85, 105, 0.8), transparent)',
                    backgroundSize: '200% 100%'
                  }}
                />
              </div>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 mb-20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-all duration-700 blur-xl rounded-3xl"></div>
              
              <div className="relative backdrop-blur-xl bg-white/80 rounded-3xl border border-white/50 shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-700">
                <div className="p-12">
                  <div className="text-center">
                    <div className="relative inline-block mb-8">
                      <div className="absolute -inset-4 bg-gradient-to-r from-slate-600/20 via-blue-600/20 to-purple-600/20 blur-2xl rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                      <div className="relative p-6 bg-gradient-to-r from-slate-700 via-blue-700 to-purple-700 rounded-2xl text-white shadow-xl">
                        <Building size={48} strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
                      Bharat Mandapam
                    </h3>
                    <p className="text-2xl text-slate-600 font-light mb-8 tracking-wide">
                      New Delhi, India
                    </p>
                    
                    <div className="max-w-3xl mx-auto">
                      <p className="text-xl text-slate-700 leading-relaxed font-light mb-10">
                        India's architectural crown jewel and premier international convention center, strategically positioned in the heart of New Delhi's diplomatic quarter. This world-class venue has hosted G20 summits and represents the pinnacle of Indian hospitality and infrastructure excellence.
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-6 text-slate-600">
                        <div className="flex items-center justify-center gap-3 p-4 bg-white/60 rounded-xl">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <span className="font-medium">World Heritage Location</span>
                        </div>
                        <div className="flex items-center justify-center gap-3 p-4 bg-white/60 rounded-xl">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <span className="font-medium">State-of-Art Facilities</span>
                        </div>
                        <div className="flex items-center justify-center gap-3 p-4 bg-white/60 rounded-xl">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <span className="font-medium">Diplomatic Excellence</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 mb-20">
            {venueFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className={`group transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                style={{ 
                  transitionDelay: `${800 + index * 200}ms`,
                }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className={`relative h-full backdrop-blur-xl bg-white/70 rounded-3xl border border-white/40 shadow-xl overflow-hidden transition-all duration-700 ${
                  hoveredFeature === index ? 'shadow-2xl scale-105 -translate-y-2' : ''
                }`}>
                  
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} opacity-0 transition-all duration-700 blur-xl rounded-3xl ${
                    hoveredFeature === index ? 'opacity-25' : ''
                  }`}></div>
                  
                  <div className="relative z-10 p-10">
                    <div className="text-center">
                      <div className="relative inline-block mb-8">
                        <div className={`absolute -inset-3 bg-gradient-to-r ${feature.gradient} opacity-20 blur-xl rounded-2xl transition-all duration-500 ${
                          hoveredFeature === index ? 'scale-110 opacity-30' : ''
                        }`}></div>
                        <div className={`relative p-5 bg-gradient-to-r ${feature.gradient} rounded-2xl text-white shadow-xl transition-all duration-500 ${
                          hoveredFeature === index ? 'scale-110 rotate-3' : ''
                        }`}>
                          <feature.icon size={36} strokeWidth={1.5} />
                        </div>
                      </div>
                      
                      <h4 className={`text-2xl md:text-3xl font-bold text-slate-900 mb-4 tracking-tight transition-all duration-300 ${
                        hoveredFeature === index ? 'text-slate-800' : ''
                      }`}>
                        {feature.title}
                      </h4>
                      
                      <p className={`text-slate-700 text-lg leading-relaxed font-light mb-6 transition-all duration-300 ${
                        hoveredFeature === index ? 'text-slate-800' : ''
                      }`}>
                        {feature.description}
                      </p>
                      
                      <p className={`text-${feature.accent}-600 font-medium text-sm tracking-wide uppercase transition-all duration-500 ${
                        hoveredFeature === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}>
                        {feature.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

         
          <div className={`text-center transform transition-all duration-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} style={{ transitionDelay: '1400ms' }}>
            <div className="backdrop-blur-lg bg-white/80 rounded-3xl p-12 border border-white/50 max-w-4xl mx-auto shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Navigate with Premium Convenience
              </h3>
              <p className="text-slate-700 text-xl leading-relaxed mb-10 font-light">
                Experience seamless access to India's diplomatic heart with world-class transportation and accommodation partners.
              </p>
              
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gradient-to-r from-slate-600/30 via-blue-600/30 to-purple-600/30 blur-xl rounded-full animate-pulse"></div>
                <button className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-slate-700 via-blue-700 to-purple-700 text-white px-12 py-6 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden text-lg">
                 
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <MapPin size={24} strokeWidth={2} className="group-hover:scale-110 transition-transform duration-500 relative z-10" />
                  <span className="relative z-10 tracking-wide">Explore Location</span>
                  <ExternalLink size={24} strokeWidth={2} className="group-hover:rotate-45 transition-transform duration-500 relative z-10" />
                </button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"></div>
      </section>
    </>
  );
};

export default VenueInfo; */



/* import React from 'react';
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
*/