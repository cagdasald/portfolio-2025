import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  isDarkMode?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, isDarkMode = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'group relative p-6 rounded-2xl glass-effect hover-lift animate-slide-in-up transition-all duration-1000',
          {
            'bg-white/5 border-white/10 hover:border-white/20': isDarkMode,
            'bg-white/80 border-gray-200 hover:border-gray-300 shadow-lg': !isDarkMode,
          },
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

export { Card };
