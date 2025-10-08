import { Button } from './ui/Button';
import { cn } from '../utils/cn';

interface HeroSectionProps {
  isDarkMode: boolean;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection = ({ isDarkMode, onNavigate }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="text-center transition-all duration-1000 opacity-100 translate-y-0">
        <div className="mb-8">
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-[30px] sm:text-[40px] font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Ç</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              Frontend
            </span>
            <br />
            <span className={cn('transition-colors duration-1000', isDarkMode ? 'text-white' : 'text-gray-900')}>
              Developer
            </span>
          </h1>
          <p className={cn(
            'text-lg sm:text-xl mb-8 max-w-2xl mx-auto px-4 transition-colors duration-1000',
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          )}>
            Crafting modern, responsive, and user-focused web applications with clean code and thoughtful design.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <Button onClick={() => onNavigate('projects')} variant="primary">
            View My Work
          </Button>
          <Button onClick={() => onNavigate('contact')} variant="secondary" className={cn(isDarkMode ? 'text-white' : 'text-gray-900')}>
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center transition-colors duration-1000 ${isDarkMode ? 'border-white/30' : 'border-gray-600'
          }`}>
          <div className={`w-1 h-3 rounded-full mt-2 animate-pulse transition-colors duration-1000 ${isDarkMode ? 'bg-white/60' : 'bg-gray-600'
            }`}></div>
        </div>
      </div>
    </section>
  );
};
