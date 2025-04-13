import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from 'lucide-react';
interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  image?: string;
}
export const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const reviews: Review[] = [{
    id: 1,
    name: 'Emma Thompson',
    rating: 5,
    date: 'October 15, 2023',
    text: "The most authentic Japanese dining experience I've had outside of Japan. The sushi was incredibly fresh and the presentation was beautiful. The chef's attention to detail is remarkable!",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974'
  }, {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    date: 'September 3, 2023',
    text: "Azuki has become our family's favorite restaurant. The service is impeccable and the sushi is always fresh. The ambiance transports you straight to Japan!",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974'
  }, {
    id: 3,
    name: 'Sarah Johnson',
    rating: 4,
    date: 'November 22, 2023',
    text: "I was impressed by the variety of dishes and the quality of ingredients. The chef's special rolls are innovative and delicious. Will definitely return!",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976'
  }];
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, reviews.length]);
  const goToPrev = () => {
    setAutoplay(false);
    setCurrentIndex(prevIndex => prevIndex === 0 ? reviews.length - 1 : prevIndex - 1);
  };
  const goToNext = () => {
    setAutoplay(false);
    setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length);
  };
  return <section id="reviews" className="py-20 bg-stone-100 relative overflow-hidden">
      {/* Japanese wave pattern background */}
      <div className="absolute inset-0 opacity-5 bg-repeat" style={{
      backgroundImage: "url('https://www.transparenttextures.com/patterns/japanese-wave.png')"
    }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Guest Reviews
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
          <p className="text-gray-700">
            Read what our guests have to say about their dining experience
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}>
                {reviews.map(review => <div key={review.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white p-8 rounded-sm shadow-md">
                      <div className="flex items-center mb-6">
                        {review.image && <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                            <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                          </div>}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">
                            {review.name}
                          </h3>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => <StarIcon key={i} size={16} className={i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'} />)}
                            <span className="text-sm text-gray-500 ml-2">
                              {review.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">{review.text}</p>
                    </div>
                  </div>)}
              </div>
            </div>
            <button onClick={goToPrev} className="absolute top-1/2 left-0 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all" aria-label="Previous review">
              <ChevronLeftIcon size={20} />
            </button>
            <button onClick={goToNext} className="absolute top-1/2 right-0 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all" aria-label="Next review">
              <ChevronRightIcon size={20} />
            </button>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => <button key={index} onClick={() => {
            setAutoplay(false);
            setCurrentIndex(index);
          }} className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? 'bg-red-700 w-6' : 'bg-gray-300'}`} aria-label={`Go to review ${index + 1}`} />)}
          </div>
        </div>
      </div>
    </section>;
};