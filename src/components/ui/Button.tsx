import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 hover:scale-105 transform active:scale-95 touch-manipulation',
          {
            'px-6 py-3 sm:px-8 sm:py-4': size === 'md',
            'px-4 py-2 sm:px-6 sm:py-3': size === 'sm',
            'px-8 py-4 sm:px-10 sm:py-5': size === 'lg',
            'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25': variant === 'primary',
            'border border-white/90 text-white hover:bg-white/10': variant === 'secondary',
            'text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg': variant === 'ghost',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
