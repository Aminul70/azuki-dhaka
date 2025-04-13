import React from 'react';
interface BrushStrokeBorderProps {
  children: React.ReactNode;
  className?: string;
}
export const BrushStrokeBorder = ({
  children,
  className = ''
}: BrushStrokeBorderProps) => {
  return <div className={`relative ${className}`}>
      {/* Top brush stroke */}
      <svg className="absolute top-0 left-0 w-full h-8 -mt-4" viewBox="0 0 1200 32" preserveAspectRatio="none">
        <path d="M0,16 C300,32 900,32 1200,16 L1200,0 L0,0 Z" className="fill-sage opacity-10" />
      </svg>
      {/* Right brush stroke */}
      <svg className="absolute top-0 right-0 h-full w-8 -mr-4" viewBox="0 0 32 1200" preserveAspectRatio="none">
        <path d="M16,0 C32,300 32,900 16,1200 L32,1200 L32,0 Z" className="fill-sage opacity-10" />
      </svg>
      {/* Bottom brush stroke */}
      <svg className="absolute bottom-0 left-0 w-full h-8 -mb-4" viewBox="0 0 1200 32" preserveAspectRatio="none">
        <path d="M0,16 C300,0 900,0 1200,16 L1200,32 L0,32 Z" className="fill-sage opacity-10" />
      </svg>
      {/* Left brush stroke */}
      <svg className="absolute top-0 left-0 h-full w-8 -ml-4" viewBox="0 0 32 1200" preserveAspectRatio="none">
        <path d="M16,0 C0,300 0,900 16,1200 L0,1200 L0,0 Z" className="fill-sage opacity-10" />
      </svg>
      {/* Corners - Sumi-e style */}
      <div className="absolute -top-6 -left-6 w-12 h-12">
        <svg viewBox="0 0 100 100">
          <path d="M100,100 Q50,50 100,0 Q50,50 0,0 Q50,50 0,100 Q50,50 100,100" className="fill-sage opacity-20" />
        </svg>
      </div>
      <div className="absolute -top-6 -right-6 w-12 h-12">
        <svg viewBox="0 0 100 100">
          <path d="M0,100 Q50,50 0,0 Q50,50 100,0 Q50,50 100,100 Q50,50 0,100" className="fill-sage opacity-20" />
        </svg>
      </div>
      <div className="absolute -bottom-6 -left-6 w-12 h-12">
        <svg viewBox="0 0 100 100">
          <path d="M100,0 Q50,50 100,100 Q50,50 0,100 Q50,50 0,0 Q50,50 100,0" className="fill-sage opacity-20" />
        </svg>
      </div>
      <div className="absolute -bottom-6 -right-6 w-12 h-12">
        <svg viewBox="0 0 100 100">
          <path d="M0,0 Q50,50 0,100 Q50,50 100,100 Q50,50 100,0 Q50,50 0,0" className="fill-sage opacity-20" />
        </svg>
      </div>
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>;
};