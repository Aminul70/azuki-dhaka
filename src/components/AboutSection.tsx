import React, { memo } from 'react';
import { InkWashBorder } from './ui/InkWashBorder';
export const AboutSection = () => {
  return <section id="about" className="py-20 bg-stone-50 relative overflow-hidden">
      {/* Japanese pattern background */}
      <div className="absolute inset-0 opacity-5 bg-repeat" style={{
      backgroundImage: "url('https://www.transparenttextures.com/patterns/japanese-asanoha.png')"
    }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-sage mx-auto mb-8"></div>
        </div>
        <InkWashBorder className="p-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1607301405390-d831c242f59b?q=80&w=1964" alt="Chef preparing sushi" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-sage -z-10"></div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-stone mb-4">
                Tradition Meets Innovation
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded in 2005, Azuki brings the authentic taste of Japan to
                your plate. Our master chef, with over 20 years of experience in
                traditional Japanese cuisine, carefully selects the freshest
                ingredients to create memorable dining experiences.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Azuki, we honor the time-honored traditions of Japanese
                culinary art while embracing innovative techniques. Each dish
                tells a story of our heritage and passion for excellence.
              </p>
              <div className="flex items-center space-x-6">
                <div>
                  <p className="text-3xl font-bold text-sage">15+</p>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <p className="text-3xl font-bold text-sage">50+</p>
                  <p className="text-gray-600">Unique Dishes</p>
                </div>
              </div>
            </div>
          </div>
        </InkWashBorder>
      </div>
    </section>;
};