
import React from 'react';
import { SOCIAL_LINKS, PROFILE } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-secondary border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Let's Connect</h2>
          <div className="flex justify-center items-center gap-10 mb-10">
             {/* Social Links */}
             {SOCIAL_LINKS.map((social) => (
               <a 
                key={social.platform} 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors transform hover:scale-110 duration-200"
                aria-label={social.platform}
               >
                 <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                   <path d={social.iconPath} />
                 </svg>
               </a>
             ))}

             {/* Email Link - Opens default mail client */}
             <a 
               href={`mailto:${PROFILE.email}`}
               className="text-slate-400 hover:text-primary transition-colors transform hover:scale-110 duration-200"
               aria-label="Email Me"
             >
               <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
               </svg>
             </a>
          </div>

          <footer className="text-slate-600 text-sm">
            <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
