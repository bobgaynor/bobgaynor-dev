
import React from 'react';
import { FOCUS_AREAS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="focus" className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>

      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Core Capabilities
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
             Bridging the gap between offensive security and automated defense using advanced Machine Learning.
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {FOCUS_AREAS.map((area) => (
            <div 
              key={area.id} 
              className="group p-8 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors shadow-lg">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={area.iconPath} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
