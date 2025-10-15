'use client'

import { useEffect, useState } from 'react'

const technologies = [
  { name: 'Salesforce', color: 'from-blue-500 to-blue-600', icon: '☁️' },
  { name: 'Einstein AI', color: 'from-purple-500 to-purple-600', icon: '🧠' },
  { name: 'Tableau', color: 'from-orange-500 to-orange-600', icon: '📊' },
  { name: 'MuleSoft', color: 'from-teal-500 to-teal-600', icon: '🔗' },
  { name: 'Lightning', color: 'from-yellow-500 to-yellow-600', icon: '⚡' },
  { name: 'IoT Platforms', color: 'from-green-500 to-green-600', icon: '🌐' },
  { name: 'Machine Learning', color: 'from-indigo-500 to-indigo-600', icon: '🤖' },
  { name: 'Cloud Services', color: 'from-cyan-500 to-cyan-600', icon: '☁️' }
];

export function TechnologyStack() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Technology</span> Stack
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to deliver innovative solutions
          </p>
        </div>

        {/* Main Featured Technology */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className={`w-32 h-32 bg-gradient-to-r ${technologies[currentIndex].color} rounded-3xl flex items-center justify-center text-6xl shadow-2xl transform transition-all duration-500 hover:scale-110`}>
              {technologies[currentIndex].icon}
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
          </div>
          <h3 className="text-2xl text-white mt-6 mb-2">{technologies[currentIndex].name}</h3>
          <div className="flex justify-center space-x-2">
            {technologies.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-cyan-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`group relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-cyan-500/50 bg-white/10' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center text-2xl mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </div>
                <h4 className="text-white text-sm group-hover:text-cyan-400 transition-colors duration-300">
                  {tech.name}
                </h4>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Integration Showcase */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
            <h3 className="text-2xl text-white mb-6">Seamless Integration Across Platforms</h3>
            
            <p className="text-white/70 mt-6 max-w-2xl mx-auto">
              Our expertise in API integration and cloud connectivity ensures your systems work together harmoniously
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
