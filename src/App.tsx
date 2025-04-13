import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReviewSection } from './components/ReviewSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CherryBlossomAnimation } from './components/animations/CherryBlossomAnimation';
import { CloudAnimation } from './components/animations/CloudAnimation';
export function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return <div className="relative w-full bg-stone-50 overflow-hidden">
      <CherryBlossomAnimation />
      <CloudAnimation />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <div className="bg-pattern-wave">
          <AboutSection />
        </div>
        <MenuSection />
        <div className="bg-pattern-asanoha">
          <GallerySection />
        </div>
        <ReviewSection />
        <div className="bg-pattern-wave">
          <ReservationSection />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>;
}