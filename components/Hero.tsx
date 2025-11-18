import React from 'react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 text-center z-10">
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Finding the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
            signal
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          {PROFILE.bio}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-teal-600 transition-all shadow-[0_0_20px_rgba(20,184,166,0.5)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)]"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-full bg-slate-800 text-white font-medium border border-slate-700 hover:bg-slate-700 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;