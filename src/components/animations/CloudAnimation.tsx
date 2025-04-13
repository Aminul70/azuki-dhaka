import React, { useEffect, useState } from 'react';
interface Cloud {
  id: number;
  x: number;
  y: number;
  speed: number;
  scale: number;
  opacity: number;
}
export const CloudAnimation = () => {
  const [clouds, setClouds] = useState<Cloud[]>([]);
  useEffect(() => {
    const createCloud = (): Cloud => ({
      id: Math.random(),
      x: -200,
      y: Math.random() * (window.innerHeight / 2),
      speed: 0.2 + Math.random() * 0.3,
      scale: 0.5 + Math.random() * 0.5,
      opacity: 0.2 + Math.random() * 0.2
    });
    // Create initial clouds
    const initialClouds = Array.from({
      length: 5
    }, createCloud);
    setClouds(initialClouds);
    const animate = () => {
      setClouds(prevClouds => prevClouds.map(cloud => {
        const newX = cloud.x + cloud.speed;
        return newX > window.innerWidth + 200 ? createCloud() : {
          ...cloud,
          x: newX
        };
      }));
    };
    const animationInterval = setInterval(animate, 50);
    return () => clearInterval(animationInterval);
  }, []);
  return <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {clouds.map(cloud => <div key={cloud.id} className="absolute" style={{
      left: `${cloud.x}px`,
      top: `${cloud.y}px`,
      transform: `scale(${cloud.scale})`,
      opacity: cloud.opacity,
      transition: 'transform 0.5s ease-out'
    }}>
          <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 40 C20 45, 30 45, 40 40 C50 35, 60 35, 70 40 C80 45, 90 45, 100 40 C110 35, 120 35, 130 40 C140 45, 150 45, 160 40 C170 35, 180 35, 190 40" stroke="white" strokeWidth="20" strokeLinecap="round" />
          </svg>
        </div>)}
    </div>;
};