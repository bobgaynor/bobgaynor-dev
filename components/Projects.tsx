
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  // We are only displaying the first project since it is the single featured one
  const featuredProject = PROJECTS[0];

  if (!featuredProject) return null;

  return (
    <section id="projects" className="py-24 bg-dark relative">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-primary/10 rounded-full blur-3xl -z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Project</h2>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
            <div 
              className="group relative rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-800 hover:border-primary/50 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Side */}
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative bg-slate-950">
                   <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-20"></div>
                   <img 
                      src={featuredProject.imageUrl} 
                      alt={featuredProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                
                {/* Content Side */}
                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {featuredProject.title}
                  </h3>
                  <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                    {featuredProject.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.tags.map(tag => (
                      <span key={tag} className="text-sm font-medium px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={featuredProject.link} 
                    className="inline-flex w-fit items-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-teal-600 transition-all shadow-lg shadow-primary/20"
                  >
                    View on GitHub
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;