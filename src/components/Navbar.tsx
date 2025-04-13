import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-95 shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://i.postimg.cc/KjRvsgwV/images-1-removebg-preview.png" alt="Azuki Logo" className="h-10 mr-3" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'menu', 'gallery', 'reviews', 'reservation', 'contact'].map(item => <button key={item} onClick={() => scrollToSection(item)} className={`capitalize font-medium transition-colors ${isScrolled ? 'text-stone hover:text-sage-dark' : 'text-[#8c9c8c] hover:text-[#8c9c8c]'}`}>
              {item}
            </button>)}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`focus:outline-none transition-colors ${isScrolled ? 'text-gray-800' : 'text-[#8c9c8c]'}`}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMenuOpen && <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg">
          <div className="flex flex-col py-4">
            {['home', 'about', 'menu', 'gallery', 'reviews', 'reservation', 'contact'].map(item => <button key={item} onClick={() => scrollToSection(item)} className={`py-3 px-4 capitalize font-medium text-left transition-colors ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-[#8c9c8c] hover:text-[#8c9c8c]'}`}>
                {item}
              </button>)}
          </div>
        </div>}
    </nav>;
};