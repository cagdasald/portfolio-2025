import { Card } from './ui/Card';
import { experience } from '../constants/data';
import { cn } from '../utils/cn';

interface ExperienceSectionProps {
  isDarkMode: boolean;
}

export const ExperienceSection = ({ isDarkMode }: ExperienceSectionProps) => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={cn(
            'text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-colors duration-1000',
            isDarkMode ? 'text-white' : 'text-gray-900'
          )}>
            Work Experience
          </h2>
          <p className={cn(
            'text-lg sm:text-xl transition-colors duration-1000',
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          )}>
            My professional journey
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className={cn(
            'absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 transform sm:-translate-x-0.5 transition-colors duration-1000',
            isDarkMode ? 'bg-gradient-to-b from-purple-500 to-pink-500' : 'bg-gradient-to-b from-blue-500 to-indigo-500'
          )} />
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div 
                key={index}
                className={cn(
                  'relative flex items-center animate-slide-in-up',
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                )}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className={cn(
                  'absolute left-4 sm:left-1/2 w-4 h-4 rounded-full transform -translate-x-2 sm:-translate-x-2 z-10 transition-all duration-1000',
                  exp.type === 'current' 
                    ? (isDarkMode ? 'bg-purple-500 animate-pulse-glow' : 'bg-blue-500 animate-pulse-glow')
                    : (isDarkMode ? 'bg-gray-600' : 'bg-gray-400')
                )} />
                
                {/* Content Card */}
                <div className={cn(
                  'ml-12 sm:ml-0 sm:w-1/2',
                  index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'
                )}>
                  <Card isDarkMode={isDarkMode} className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={cn(
                        'text-xl sm:text-2xl font-bold transition-colors duration-1000',
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      )}>
                        {exp.title}
                      </h3>
                      <span className={cn(
                        'px-3 py-1 rounded-full text-sm font-semibold transition-all duration-1000',
                        exp.type === 'current'
                          ? (isDarkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-600')
                          : (isDarkMode ? 'bg-gray-500/20 text-gray-400' : 'bg-gray-200 text-gray-600')
                      )}>
                        {exp.period}
                      </span>
                    </div>
                    
                    <h4 className={cn(
                      'text-lg font-semibold mb-2 transition-colors duration-1000',
                      isDarkMode ? 'text-purple-400' : 'text-blue-600'
                    )}>
                      {exp.company}
                    </h4>
                    
                    <p className={cn(
                      'mb-4 transition-colors duration-1000',
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    )}>
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className={cn(
                            'px-3 py-1 rounded-full text-sm transition-all duration-1000',
                            isDarkMode 
                              ? 'bg-white/10 text-white hover:bg-white/20' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          )}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
