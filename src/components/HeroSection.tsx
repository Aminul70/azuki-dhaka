import React from 'react';
import { ChevronDownIcon } from 'lucide-react';
export const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative h-screen flex items-center justify-center bg-stone overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070')] bg-cover bg-center opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          <span className="block transform transition-transform duration-700 translate-y-0 opacity-100">
            AZUKI
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
          Authentic Japanese cuisine crafted with tradition and passion
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => document.getElementById('menu')?.scrollIntoView({
          behavior: 'smooth'
        })} className="px-8 py-3 bg-sage hover:bg-sage-dark text-white rounded-sm transition-all transform hover:-translate-y-1 hover:shadow-lg">
            View Menu
          </button>
          <button onClick={() => document.getElementById('reservation')?.scrollIntoView({
          behavior: 'smooth'
        })} className="px-8 py-3 bg-transparent border border-white text-white hover:bg-white/10 rounded-sm transition-all transform hover:-translate-y-1">
            Reserve Table
          </button>
        </div>
      </div>
      <button onClick={scrollToAbout} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce" aria-label="Scroll down">
        <ChevronDownIcon size={36} />
      </button>
    </section>;
};