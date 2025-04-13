import React, { useEffect, useState } from 'react';
interface Petal {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  speed: number;
  opacity: number;
  rotationSpeed: number;
  color: string;
}
export const CherryBlossomAnimation = () => {
  const [petals, setPetals] = useState<Petal[]>([]);
  useEffect(() => {
    const colors = ['#FFE0E9', '#FFD1DC', '#FFC2D4', '#FFB3CB'];
    const createPetal = (): Petal => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: -20 - Math.random() * 100,
      size: 12 + Math.random() * 8,
      rotation: Math.random() * 360,
      speed: 0.8 + Math.random() * 1.2,
      opacity: 0.4 + Math.random() * 0.3,
      rotationSpeed: 0.2 + Math.random() * 1,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
    const initialPetals = Array.from({
      length: 30
    }, createPetal);
    setPetals(initialPetals);
    const animationFrame = requestAnimationFrame(function animate() {
      setPetals(prevPetals => prevPetals.map(petal => {
        let newY = petal.y + petal.speed;
        let newX = petal.x + Math.sin(newY / 50) * 0.7;
        let newRotation = petal.rotation + petal.rotationSpeed;
        if (newY > window.innerHeight + 50) {
          return createPetal();
        }
        return {
          ...petal,
          y: newY,
          x: newX,
          rotation: newRotation
        };
      }));
      requestAnimationFrame(animate);
    });
    return () => cancelAnimationFrame(animationFrame);
  }, []);
  return <div className="fixed inset-0 pointer-events-none z-0">
      {petals.map(petal => <div key={petal.id} className="absolute" style={{
      left: `${petal.x}px`,
      top: `${petal.y}px`,
      width: `${petal.size}px`,
      height: `${petal.size}px`,
      opacity: petal.opacity,
      transform: `rotate(${petal.rotation}deg)`,
      transition: 'transform 0.1s linear'
    }}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0C50 27.6142 72.3858 50 100 50C72.3858 50 50 72.3858 50 100C50 72.3858 27.6142 50 0 50C27.6142 50 50 27.6142 50 0Z" fill={petal.color} />
          </svg>
        </div>)}
    </div>;
};