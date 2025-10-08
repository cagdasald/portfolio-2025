import { useMousePosition } from '../hooks/useMousePosition';
import { cn } from '../utils/cn';

interface AnimatedBackgroundProps {
  isDarkMode: boolean;
}

export const AnimatedBackground = ({ isDarkMode }: AnimatedBackgroundProps) => {
  const mousePosition = useMousePosition();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div 
        className={cn(
          'absolute w-96 h-96 rounded-full blur-3xl animate-pulse transition-all duration-1000',
          isDarkMode ? 'bg-purple-500/20' : 'bg-blue-500/20'
        )}
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          transition: 'all 0.3s ease-out'
        }}
      />
      <div className={cn(
        'absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-2xl animate-bounce transition-all duration-1000',
        isDarkMode ? 'bg-blue-500/20' : 'bg-indigo-500/20'
      )} style={{ animationDelay: '1s' }} />
      <div className={cn(
        'absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse transition-all duration-1000',
        isDarkMode ? 'bg-pink-500/20' : 'bg-purple-500/20'
      )} style={{ animationDelay: '2s' }} />
    </div>
  );
};
