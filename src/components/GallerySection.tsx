import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryImages = [{
    url: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2025',
    alt: 'Assorted sushi platter'
  }, {
    url: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?q=80&w=1974',
    alt: 'Salmon sashimi'
  }, {
    url: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1974',
    alt: 'Tuna nigiri'
  }, {
    url: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=1888',
    alt: 'Restaurant interior'
  }, {
    url: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=1974',
    alt: 'Dragon roll'
  }, {
    url: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=2070',
    alt: 'Chef preparing sushi'
  }];
  return <section id="gallery" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
          <p className="text-gray-700">
            A visual journey through our culinary creations and ambiance
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => <div key={index} className="aspect-square overflow-hidden cursor-pointer relative group" onClick={() => setSelectedImage(image.url)}>
              <img src={image.url} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-sm md:text-base font-medium">View</span>
                </div>
              </div>
            </div>)}
        </div>
      </div>
      {/* Lightbox */}
      {selectedImage && <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-5 right-5 text-white hover:text-gray-300" onClick={() => setSelectedImage(null)}>
            <XIcon size={24} />
          </button>
          <div className="max-w-4xl max-h-[90vh] relative" onClick={e => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged view" className="max-w-full max-h-[90vh] object-contain" />
          </div>
        </div>}
    </section>;
};