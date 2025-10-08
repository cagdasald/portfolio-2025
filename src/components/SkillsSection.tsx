import { useState } from 'react';
import { Card } from './ui/Card';
import { skillCategories } from '../constants/data';
import { cn } from '../utils/cn';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SkillsSectionProps {
  isDarkMode: boolean;
}

export const SkillsSection = ({ isDarkMode }: SkillsSectionProps) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set([0])); // Sadece ilk kategori açık

  const toggleCategory = (index: number) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const getSkillIcon = (skillName: string) => {
    const icons: { [key: string]: string } = {
      'React.js': '⚛️',
      'Next.js': '▲',
      'Vue.js': '💚',
      'Angular': '🅰️',
      'HTML5': '🔷',
      'CSS3': '🎨',
      'JavaScript': '⚡',
      'TypeScript': '🔷',
      'TailwindCSS': '🎨',
      'Sass': '💎',
      'Redux': '🔄',
      'Firebase': '🔥',
      'Supabase': '⚡',
      'JWT': '🔐',
      'WebSockets': '🔌',
      'Jest': '🎯',
      'React Testing Library': '⚛️',
      'Mocha': '☕',
      'Webpack': '📦',
      'Vite': '⚡',
      'Git': '🌿',
      'GitHub Actions': '🚀',
      'ESLint': '🔍',
      'React Native': '📱',
      'REST API': '🌐'
    };
    return icons[skillName] || '💻';
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={cn(
            'text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-colors duration-1000',
            isDarkMode ? 'text-white' : 'text-gray-900'
          )}>
            Skills & Expertise
          </h2>
          <p className={cn(
            'text-lg sm:text-xl transition-colors duration-1000',
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          )}>
            Technologies I work with
          </p>
        </div>
        
        <div className="space-y-6">
          {skillCategories.map((category, categoryIndex) => {
            const isExpanded = expandedCategories.has(categoryIndex);
            const visibleSkills = isExpanded ? category.skills : category.skills.slice(0, 3);
            const hasMoreSkills = category.skills.length > 3;
            
            return (
              <Card 
                key={category.title} 
                isDarkMode={isDarkMode}
                className="p-6 animate-slide-in-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={cn(
                    'flex items-center px-4 py-2 rounded-full',
                    `bg-gradient-to-r ${category.color} text-white shadow-md`
                  )}>
                    <span className="text-xl mr-2">{category.icon}</span>
                    <h3 className="text-lg font-bold">{category.title}</h3>
                  </div>
                  
                  {hasMoreSkills && (
                    <button
                      onClick={() => toggleCategory(categoryIndex)}
                      className={cn(
                        'p-2 rounded-full transition-all duration-300 hover:scale-110',
                        isDarkMode 
                          ? 'text-white/80 hover:text-white hover:bg-white/10' 
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      )}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  )}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                  {visibleSkills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group relative p-2 text-center transition-all duration-300 rounded-xl overflow-hidden"
                      style={{ 
                        animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                      }}
                    >
                      {/* Skill Container */}
                      <div className="relative z-10">
                        {/* Skill Icon */}
                        <div className={cn(
                          'w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center text-sm',
                          `bg-gradient-to-r ${skill.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`
                        )}>
                          {getSkillIcon(skill.name)}
                        </div>

                        {/* Skill Name */}
                        <h4 className={cn(
                          'text-xs font-medium mb-1 transition-colors duration-300',
                          isDarkMode 
                            ? 'text-white/90 group-hover:text-white' 
                            : 'text-gray-700 group-hover:text-gray-900'
                        )}>
                          {skill.name}
                        </h4>

                        {/* Skill Level - Mini Progress Bar */}
                        <div className="flex items-center justify-center">
                          <div className={cn(
                            'w-full rounded-full h-1 overflow-hidden',
                            isDarkMode ? 'bg-gray-700/50' : 'bg-gray-200/50'
                          )}>
                            <div 
                              className={`h-1 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Hover Effect Background */}
                      <div className={cn(
                        'absolute inset-0 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100',
                        `bg-gradient-to-br ${skill.color} opacity-5`
                      )} />
                      
                      {/* Hover Glow Effect */}
                      <div className={cn(
                        'absolute inset-0 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100',
                        `shadow-lg shadow-${skill.color.split('-')[1]}-500/20`
                      )} />
                    </div>
                  ))}
                  
                  {/* Show More Indicator */}
                  {hasMoreSkills && !isExpanded && (
                    <div className="flex items-center justify-center p-2">
                      <div className={cn(
                        'text-xs font-medium px-2 py-1 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer',
                        isDarkMode 
                          ? 'text-gray-400 bg-gray-700/30 hover:bg-gray-600/50' 
                          : 'text-gray-500 bg-gray-100/50 hover:bg-gray-200/50'
                      )}>
                        +{category.skills.length - 3} more
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
