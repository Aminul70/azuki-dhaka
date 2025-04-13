import React from 'react';
interface InkWashBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}
export const InkWashBorder = ({
  children,
  className = '',
  color = 'var(--color-sage)'
}: InkWashBorderProps) => {
  return <div className={`relative ${className}`}>
      {/* Top ink wash */}
      <div className="absolute top-0 left-0 w-full h-16 -mt-8 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 800 64" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 Q200,20 400,10 Q600,0 800,20 L800,64 L0,64 Z" fill={color} fillOpacity="0.05" />
          <path d="M0,10 Q200,30 400,20 Q600,10 800,30 L800,64 L0,64 Z" fill={color} fillOpacity="0.1" />
        </svg>
      </div>
      {/* Right ink wash */}
      <div className="absolute top-0 right-0 w-16 h-full -mr-8 overflow-hidden">
        <svg className="absolute h-full w-full" viewBox="0 0 64 800" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 Q20,200 10,400 Q0,600 20,800 L64,800 L64,0 Z" fill={color} fillOpacity="0.05" transform="rotate(180 32 400)" />
          <path d="M10,0 Q30,200 20,400 Q10,600 30,800 L64,800 L64,0 Z" fill={color} fillOpacity="0.1" transform="rotate(180 32 400)" />
        </svg>
      </div>
      {/* Bottom ink wash */}
      <div className="absolute bottom-0 left-0 w-full h-16 -mb-8 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 800 64" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64 Q200,44 400,54 Q600,64 800,44 L800,0 L0,0 Z" fill={color} fillOpacity="0.05" />
          <path d="M0,54 Q200,34 400,44 Q600,54 800,34 L800,0 L0,0 Z" fill={color} fillOpacity="0.1" />
        </svg>
      </div>
      {/* Left ink wash */}
      <div className="absolute top-0 left-0 w-16 h-full -ml-8 overflow-hidden">
        <svg className="absolute h-full w-full" viewBox="0 0 64 800" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64,0 Q44,200 54,400 Q64,600 44,800 L0,800 L0,0 Z" fill={color} fillOpacity="0.05" />
          <path d="M54,0 Q34,200 44,400 Q54,600 34,800 L0,800 L0,0 Z" fill={color} fillOpacity="0.1" />
        </svg>
      </div>
      {/* Ink wash corners */}
      <div className="absolute -top-8 -left-8 w-16 h-16">
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path d="M64,64 C44,44 24,44 0,64 C44,44 44,24 64,0 C44,44 64,44 64,64 Z" fill={color} fillOpacity="0.15" />
        </svg>
      </div>
      <div className="absolute -top-8 -right-8 w-16 h-16">
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path d="M0,64 C20,44 40,44 64,64 C20,44 20,24 0,0 C20,44 0,44 0,64 Z" fill={color} fillOpacity="0.15" />
        </svg>
      </div>
      <div className="absolute -bottom-8 -left-8 w-16 h-16">
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path d="M64,0 C44,20 24,20 0,0 C44,20 44,40 64,64 C44,20 64,20 64,0 Z" fill={color} fillOpacity="0.15" />
        </svg>
      </div>
      <div className="absolute -bottom-8 -right-8 w-16 h-16">
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path d="M0,0 C20,20 40,20 64,0 C20,20 20,40 0,64 C20,20 0,20 0,0 Z" fill={color} fillOpacity="0.15" />
        </svg>
      </div>
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>;
};