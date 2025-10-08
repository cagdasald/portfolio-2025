'use client';

import { useState } from 'react';

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Card({ title, description, children, className = '', style }: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`
        relative bg-[#101010] border border-white/5 rounded-[20px] p-6 
        transition-all duration-500 ease-in-out overflow-hidden
        hover:shadow-lg hover:shadow-white/10
        ${isExpanded ? 'col-span-2 row-span-2' : ''}
        ${className}
      `}
      style={style}
    >
      {/* Genişletme İkonu */}
      <button
        onClick={toggleExpanded}
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center 
                   bg-white/10 hover:bg-white/20 rounded-full 
                   transition-all duration-300 ease-in-out
                   group"
        aria-label={isExpanded ? 'Küçült' : 'Genişlet'}
      >
        <svg
          className={`w-4 h-4 text-white transition-transform duration-300 ${
            isExpanded ? 'rotate-45' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>

      {/* Card İçeriği */}
      <div className="h-full flex flex-col">
        <h3 className="text-xl font-semibold text-white mb-3 pr-12">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>
        
        {/* Genişletilmiş İçerik */}
        <div 
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isExpanded 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
