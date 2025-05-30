
const DelegatePasses = () => {
  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-15px) rotate(3deg); }
            50% { transform: translateY(-8px) rotate(-2deg); }
            75% { transform: translateY(-12px) rotate(1deg); }
          }
          
          @keyframes meshFloat {
            0%, 100% { transform: rotate(0deg) scale(1); }
            33% { transform: rotate(0.5deg) scale(1.01); }
            66% { transform: rotate(-0.5deg) scale(0.99); }
          }
          
          @keyframes shimmerLine {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.2; }
          }
        `}
      </style>
      
      <section className="relative py-12 px-6 overflow-hidden" id="passes">
        {/* Premium background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-50 to-stone-100"></div>
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.06) 0%, transparent 60%),
                radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.04) 0%, transparent 60%),
                radial-gradient(circle at 75% 25%, rgba(245, 158, 11, 0.03) 0%, transparent 60%),
                radial-gradient(circle at 25% 75%, rgba(99, 102, 241, 0.05) 0%, transparent 60%)
              `,
              animation: 'meshFloat 30s ease-in-out infinite'
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-6">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-amber-600/10 blur-xl rounded-full"></div>
                <div className="relative p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-white/60 shadow-lg">
                  <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                Delegate Experiences
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Curated access tiers designed for India's most discerning business leaders
            </p>
            
            <div className="flex justify-center mt-8">
              <div className="relative">
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                <div 
                  className="absolute inset-0 w-32 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 opacity-60"
                  style={{ 
                    animation: 'shimmerLine 3s ease-in-out infinite',
                    background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)',
                    backgroundSize: '200% 100%'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Pass Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Executive Pass */}
            <div className="group relative">
              <div className="relative h-full backdrop-blur-xl bg-white/70 rounded-2xl border border-white/40 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 opacity-0 group-hover:opacity-15 transition-all duration-500 blur-xl rounded-2xl"></div>
                
                <div className="relative z-10 p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="relative p-3 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-xl text-white shadow-lg group-hover:shadow-xl transition-all duration-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 mb-1">Executive</h3>
                        <p className="text-slate-600 font-medium text-sm uppercase">Essential Access</p>
                      </div>
                    </div>
                    <div className="text-2xl opacity-20">✨</div>
                  </div>

                  <p className="text-slate-700 text-base leading-relaxed mb-6 font-light">
                    Comprehensive access to all sessions with luxury amenities
                  </p>

                  <div className="mb-6">
                    <div className="flex items-end gap-3 mb-1">
                      <span className="text-3xl font-black bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                        ₹35,000
                      </span>
                      <span className="text-slate-400 text-sm line-through mb-1">₹42,000</span>
                    </div>
                    <p className="text-slate-500 text-xs font-medium">Early bird pricing • Limited time offer</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-bold text-slate-800 mb-3 tracking-wide">INCLUDED BENEFITS</h4>
                    {[
                      'Full conference access',
                      'Premium networking sessions',
                      'Michelin-inspired dining experience',
                      'Executive resource library',
                      'Digital credentials & certificates',
                      'Priority customer support'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="p-1 bg-blue-50 rounded-lg">
                          <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-700 text-sm font-medium leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-3 px-4 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group/btn overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      SECURE YOUR ACCESS
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Presidential Pass */}
            <div className="group relative">
              {/* Most Exclusive Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-red-500 blur-md opacity-60 rounded-full"></div>
                  <div className="relative bg-gradient-to-r from-amber-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2 border border-white/20">
                    <svg className="w-3 h-3 text-yellow-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
                    </svg>
                    <span className="tracking-wide">MOST EXCLUSIVE</span>
                  </div>
                </div>
              </div>
              
              <div className="relative h-full backdrop-blur-xl bg-white/70 rounded-2xl border border-white/40 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl rounded-2xl"></div>
                
                <div className="relative z-10 p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="relative p-3 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 rounded-xl text-white shadow-lg group-hover:shadow-xl transition-all duration-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3l14 9-14 9V3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 mb-1">Presidential</h3>
                        <p className="text-slate-600 font-medium text-sm uppercase">Ultimate Experience</p>
                      </div>
                    </div>
                    <div className="text-2xl opacity-20">👑</div>
                  </div>

                  <p className="text-slate-700 text-base leading-relaxed mb-6 font-light">
                    Exclusive all-access experience with VIP privileges
                  </p>

                  <div className="mb-6">
                    <div className="flex items-end gap-3 mb-1">
                      <span className="text-3xl font-black bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                        ₹55,000
                      </span>
                      <span className="text-slate-400 text-sm line-through mb-1">₹68,000</span>
                    </div>
                    <p className="text-slate-500 text-xs font-medium">Early bird pricing • Limited time offer</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-bold text-slate-800 mb-3 tracking-wide">INCLUDED BENEFITS</h4>
                    {[
                      'Everything in Executive tier',
                      'Private VIP lounge with concierge',
                      'Front-row reserved seating',
                      'Exclusive C-level networking',
                      'Professional media coverage',
                      'Personal brand consultation',
                      'Luxury welcome package',
                      'Post-event digital assets'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="p-1 bg-amber-50 rounded-lg">
                          <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-700 text-sm font-medium leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white py-3 px-4 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group/btn overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      SECURE YOUR ACCESS
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Trust signals */}
          <div className="text-center">
            <div className="backdrop-blur-lg bg-white/60 rounded-2xl p-6 border border-white/40 max-w-3xl mx-auto shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Exclusive Early Access</h3>
              <p className="text-slate-700 text-base leading-relaxed mb-6 font-light">
                Join India's most distinguished business leaders. Limited availability with exclusive early-bird pricing.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-slate-600">
                <div className="flex items-center justify-center gap-2 p-3 bg-white/40 rounded-xl">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium text-sm">Secure Payment</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-3 bg-white/40 rounded-xl">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium text-sm">Instant Confirmation</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-3 bg-white/40 rounded-xl">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium text-sm">100% Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DelegatePasses;



/* import React, { useEffect, useState } from 'react';
import { Crown, Star, Sparkles, Award, Zap, CheckCircle } from 'lucide-react';

const DelegatePasses = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const passes = [
    {
      icon: Star,
      type: 'Executive',
      subtitle: 'Essential Access',
      emoji: '✨',
      price: '₹35,000',
      originalPrice: '₹42,000',
      description: 'Comprehensive access to all sessions with luxury amenities',
      features: [
        'Full conference access',
        'Premium networking sessions',
        'Michelin-inspired dining experience',
        'Executive resource library',
        'Digital credentials & certificates',
        'Priority customer support'
      ],
      gradient: 'from-slate-900 via-blue-900 to-indigo-900',
      bgGradient: 'from-slate-50/80 via-blue-50/60 to-indigo-50/80',
      glowColor: 'blue-500/20',
      popular: false,
      accent: 'blue'
    },
    {
      icon: Crown,
      type: 'Presidential',
      subtitle: 'Ultimate Experience',
      emoji: '👑',
      price: '₹55,000',
      originalPrice: '₹68,000',
      description: 'Exclusive all-access experience with VIP privileges',
      features: [
        'Everything in Executive tier',
        'Private VIP lounge with concierge',
        'Front-row reserved seating',
        'Exclusive C-level networking',
        'Professional media coverage',
        'Personal brand consultation',
        'Luxury welcome package',
        'Post-event digital assets'
      ],
      gradient: 'from-amber-600 via-orange-600 to-red-600',
      bgGradient: 'from-amber-50/80 via-orange-50/60 to-red-50/80',
      glowColor: 'amber-500/30',
      popular: true,
      accent: 'amber'
    }
  ];

  const FloatingElement = ({ delay, size, position, color, blur = false }) => (
    <div 
      className={`absolute ${position} ${size} ${blur ? 'blur-sm' : ''}`}
      style={{
        background: `linear-gradient(135deg, ${color})`,
        borderRadius: '50%',
        opacity: 0.1,
        animation: `float 12s ease-in-out infinite ${delay}s, pulse 4s ease-in-out infinite ${delay * 0.5}s`
      }}
    />
  );

  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-20px) rotate(5deg); }
            50% { transform: translateY(-10px) rotate(-3deg); }
            75% { transform: translateY(-15px) rotate(2deg); }
          }
          
          @keyframes meshFloat {
            0%, 100% { transform: rotate(0deg) scale(1); }
            33% { transform: rotate(1deg) scale(1.02); }
            66% { transform: rotate(-1deg) scale(0.98); }
          }
          
          @keyframes shimmerLine {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.2; }
          }
        `}
      </style>
      
      <section className="relative min-h-screen py-24 px-6 overflow-hidden" id="passes">
       
        <div className="absolute inset-0">
         
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-slate-50 to-stone-100"></div>
          
       
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: `
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 60%),
                radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.06) 0%, transparent 60%),
                radial-gradient(circle at 75% 25%, rgba(245, 158, 11, 0.05) 0%, transparent 60%),
                radial-gradient(circle at 25% 75%, rgba(99, 102, 241, 0.07) 0%, transparent 60%)
              `,
              animation: 'meshFloat 30s ease-in-out infinite'
            }}
          />

          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }}
          />
        </div>

        <FloatingElement delay={0} size="w-32 h-32" position="top-20 left-[8%]" color="rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.05)" />
        <FloatingElement delay={3} size="w-24 h-24" position="top-60 right-[12%]" color="rgba(168, 85, 247, 0.08), rgba(196, 181, 253, 0.04)" blur />
        <FloatingElement delay={1.5} size="w-20 h-20" position="bottom-40 left-[70%]" color="rgba(245, 158, 11, 0.06), rgba(253, 230, 138, 0.03)" />
        <FloatingElement delay={4} size="w-16 h-16" position="top-96 right-[65%]" color="rgba(99, 102, 241, 0.07), rgba(165, 180, 252, 0.04)" blur />

        <div className="relative max-w-7xl mx-auto">
          
          <div className={`text-center mb-20 transform transition-all duration-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="flex justify-center items-center mb-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-amber-600/10 blur-2xl rounded-full"></div>
                <div className="relative p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg">
                  <Award className="w-12 h-12 text-slate-700" />
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-7xl md:text-8xl font-black tracking-tight relative">
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                  Delegate
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-800 via-purple-800 to-amber-700 bg-clip-text text-transparent">
                  Experiences
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                Curated access tiers designed for India's most discerning business leaders
              </p>
            </div>
            
            <div className="flex justify-center mt-12">
              <div className="relative">
                <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                <div 
                  className="absolute inset-0 w-48 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 opacity-60"
                  style={{ 
                    animation: 'shimmerLine 3s ease-in-out infinite',
                    background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)',
                    backgroundSize: '200% 100%'
                  }}
                />
              </div>
            </div>
          </div>

          
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {passes.map((pass, index) => (
              <div 
                key={pass.type}
                className={`group relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                style={{ 
                  transitionDelay: `${600 + index * 400}ms`,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                
                {pass.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-red-500 blur-md opacity-60 rounded-full"></div>
                      <div className="relative bg-gradient-to-r from-amber-500 to-red-500 text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl flex items-center gap-3 border border-white/20">
                        <Crown size={16} className="text-yellow-200" />
                        <span className="tracking-wide">MOST EXCLUSIVE</span>
                        <Sparkles size={16} className="text-yellow-200" />
                      </div>
                    </div>
                  </div>
                )}
                
                <div 
                  className={`relative h-full backdrop-blur-xl bg-white/70 rounded-3xl border border-white/40 shadow-2xl overflow-hidden transition-all duration-700 ${
                    hoveredCard === index ? 'shadow-3xl scale-[1.02] -translate-y-2' : ''
                  }`}
                >
                  
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${pass.gradient} opacity-0 group-hover:opacity-20 transition-all duration-700 blur-xl rounded-3xl`}></div>
                  
                  <div className="relative z-10 p-10">
                   
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-6">
                        <div 
                          className={`relative p-5 bg-gradient-to-br ${pass.gradient} rounded-2xl text-white shadow-xl transition-all duration-700 group-hover:shadow-2xl group-hover:scale-110`}
                        >
                          <pass.icon size={36} strokeWidth={1.5} />
                          <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <div>
                          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-1 tracking-tight">
                            {pass.type}
                          </h2>
                          <p className="text-slate-600 font-medium tracking-wide text-sm uppercase">
                            {pass.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                        {pass.emoji}
                      </div>
                    </div>

                    <p className="text-slate-700 text-lg leading-relaxed mb-10 font-light">
                      {pass.description}
                    </p>

                    <div className="mb-10">
                      <div className="flex items-end gap-4 mb-2">
                        <span className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${pass.gradient} bg-clip-text text-transparent`}>
                          {pass.price}
                        </span>
                        <span className="text-slate-400 text-lg line-through mb-2">
                          {pass.originalPrice}
                        </span>
                      </div>
                      <p className="text-slate-500 text-sm font-medium">
                        Early bird pricing • Limited time offer
                      </p>
                    </div>

                    <div className="space-y-5 mb-12">
                      <h3 className="text-lg font-bold text-slate-800 mb-6 tracking-wide">
                        INCLUDED BENEFITS
                      </h3>
                      {pass.features.map((feature, featureIndex) => (
                        <div 
                          key={feature}
                          className={`flex items-center gap-4 transition-all duration-500 ${
                            hoveredCard === index ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-80'
                          }`}
                          style={{ 
                            transitionDelay: `${featureIndex * 80}ms`
                          }}
                        >
                          <div className={`p-1.5 bg-${pass.accent}-50 rounded-lg`}>
                            <CheckCircle 
                              size={18} 
                              className={`text-${pass.accent}-600`}
                              strokeWidth={2.5}
                            />
                          </div>
                          <span className="text-slate-700 font-medium leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    
                    <button 
                      className={`group/btn w-full relative bg-gradient-to-r ${pass.gradient} text-white py-5 px-8 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                    >
                     
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                      
                      <span className="relative z-10 flex items-center justify-center gap-3 tracking-wide">
                        <Zap size={22} strokeWidth={2} className="group-hover/btn:scale-110 transition-transform duration-300" />
                        SECURE YOUR ACCESS
                        <Star size={22} strokeWidth={2} className="group-hover/btn:rotate-12 transition-transform duration-500" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

       
          <div className={`text-center transform transition-all duration-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} style={{ transitionDelay: '1400ms' }}>
            <div className="backdrop-blur-lg bg-white/60 rounded-3xl p-10 border border-white/40 max-w-4xl mx-auto shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Exclusive Early Access
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed mb-8 font-light">
                Join India's most distinguished business leaders. Limited availability with exclusive early-bird pricing.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-slate-600">
                <div className="flex items-center justify-center gap-3 p-4 bg-white/40 rounded-xl">
                  <CheckCircle size={20} className="text-emerald-600" strokeWidth={2.5} />
                  <span className="font-medium">Secure Payment</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 bg-white/40 rounded-xl">
                  <CheckCircle size={20} className="text-emerald-600" strokeWidth={2.5} />
                  <span className="font-medium">Instant Confirmation</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 bg-white/40 rounded-xl">
                  <CheckCircle size={20} className="text-emerald-600" strokeWidth={2.5} />
                  <span className="font-medium">100% Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"></div>
      </section>
    </>
  );
};

export default DelegatePasses; */



/* import React from 'react';

const DelegatePasses = () => (
  <section className="bg-gray-100 py-10 px-6" id="passes">
    <h2 className="text-3xl font-bold text-center text-purple-900 mb-6">🎟 Delegate Passes</h2>
    <div className="flex flex-col md:flex-row justify-center gap-6">
      <div className="bg-white p-6 rounded shadow-md w-full md:w-1/3">
        <h3 className="text-xl font-bold">🎫 Standard</h3>
        <p>Access to all sessions + luxury dining</p>
        <p className="font-semibold mt-2">₹35,000</p>
      </div>
      <div className="bg-white p-6 rounded shadow-md w-full md:w-1/3">
        <h3 className="text-xl font-bold">🏅 VIP</h3>
        <p>All-access pass + media exposure + VIP lounge</p>
        <p className="font-semibold mt-2">₹55,000</p>
      </div>
    </div>
  </section>
);

export default DelegatePasses;
*/