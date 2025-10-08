import { cn } from '../utils/cn';

interface FooterProps {
  isDarkMode: boolean;
}

export const Footer = ({ isDarkMode }: FooterProps) => {
  return (
    <footer className={cn(
      'py-8 px-6 border-t transition-colors duration-1000',
      isDarkMode ? 'border-white/10' : 'border-gray-200'
    )}>
      <div className="max-w-7xl mx-auto text-center">
        <p className={cn(
          'transition-colors duration-1000',
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        )}>
          © 2025 Çağdaş Aldoğan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
