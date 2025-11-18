
import React from 'react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 text-center z-10">
        {/* Reduced mb-6 to mb-2 to close the gap. Kept py-4 to prevent animation clipping on Chrome. */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-2 leading-relaxed py-4">
          Finding the <span className="signal-text">signal</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          {PROFILE.bio}
        </p>
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