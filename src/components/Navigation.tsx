import { useState } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { cn } from '../utils/cn';

interface NavigationProps {
  activeSection: string;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onNavigate: (sectionId: string) => void;
}

const navItems = [
  { name: 'About', id: 'hero' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' }
];

export const Navigation = ({ activeSection, isDarkMode, onToggleDarkMode, onNavigate }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300',
      isDarkMode 
        ? 'bg-black/20 border-white/10' 
        : 'bg-white/20 border-gray-100'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer transition-all duration-300" 
            onClick={() => onNavigate('hero')}
          >
            Çağdaş Aldoğan
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button 
                key={item.name}
                onClick={() => onNavigate(item.id)}
                className={cn(
                  'relative transition-all duration-300 hover:scale-105 transform',
                  isDarkMode 
                    ? `text-white/80 hover:text-white ${activeSection === item.id ? 'text-white' : ''}`
                    : `text-gray-700 hover:text-gray-900 ${activeSection === item.id ? 'text-gray-900' : ''}`
                )}
              >
                {item.name}
                {activeSection === item.id && (
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Dark Mode Toggle & CV Download */}
          <div className="flex items-center space-x-2">
            {/* CV Download Button */}
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/cv.pdf';
                link.download = 'Cagdas_Aldogan_CV.pdf';
                link.click();
              }}
              className={cn(
                'group relative px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform active:scale-95 touch-manipulation',
                'bg-gradient-to-r from-rose-400 to-pink-400 text-white shadow-md hover:shadow-lg',
                'hover:from-rose-300 hover:to-pink-300',
                'border border-rose-300/50 hover:border-rose-200'
              )}
            >
              <div className="flex items-center">
                <Download className="w-4 h-4 mr-1 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm">CV</span>
              </div>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg transition-all duration-300 hover:scale-110 transform"
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6 text-yellow-400" />
              ) : (
                <Moon className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={cn(
              'md:hidden p-2 transition-colors duration-300',
              isDarkMode ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button 
                  key={item.name}
                  onClick={() => handleNavigate(item.id)}
                  className={cn(
                    'text-left transition-all duration-300 py-2 px-4 rounded-lg',
                    isDarkMode 
                      ? `text-white/80 hover:text-white hover:bg-white/10 ${activeSection === item.id ? 'text-white bg-white/10' : ''}`
                      : `text-gray-700 hover:text-gray-900 hover:bg-gray-100 ${activeSection === item.id ? 'text-gray-900 bg-gray-100' : ''}`
                  )}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile CV Download Button */}
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/cv.pdf';
                  link.download = 'Cagdas_Aldogan_CV.pdf';
                  link.click();
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  'group relative px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform active:scale-95 touch-manipulation',
                  'bg-gradient-to-r from-rose-400 to-pink-400 text-white shadow-md hover:shadow-lg',
                  'hover:from-rose-300 hover:to-pink-300',
                  'border border-rose-300/50 hover:border-rose-200'
                )}
              >
                <div className="flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Download CV</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
