import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/Card';
import { projects } from '../constants/data';
import { cn } from '../utils/cn';

interface ProjectsSectionProps {
  isDarkMode: boolean;
}

export const ProjectsSection = ({ isDarkMode }: ProjectsSectionProps) => {
  const [tiltedCard, setTiltedCard] = useState<number | null>(null);

  const handleCardTilt = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    setTiltedCard(index);
  };

  const handleCardReset = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    setTiltedCard(null);
  };

  return (
    <section className={cn(
      'py-16 sm:py-20 px-4 sm:px-6',
      isDarkMode ? 'bg-black/20' : 'bg-gray-50'
    )}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={cn(
            'text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-colors duration-1000',
            isDarkMode ? 'text-white' : 'text-gray-900'
          )}>
            Featured Projects
          </h2>
          <p className={cn(
            'text-lg sm:text-xl transition-colors duration-1000',
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          )}>
            Some of my recent work
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              isDarkMode={isDarkMode}
              className="group relative overflow-hidden cursor-pointer"
              style={{ 
                animationDelay: `${index * 0.2}s`
              }}
              onMouseMove={(e) => handleCardTilt(index, e)}
              onMouseLeave={handleCardReset}
              onClick={() => project.link && window.open(project.link, '_blank', 'noopener,noreferrer')}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                {project.imageType === 'image' ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3 className={cn(
                  'text-2xl font-bold mb-2 group-hover:transition-colors duration-300',
                  isDarkMode ? 'text-white group-hover:text-purple-400' : 'text-gray-900 group-hover:text-blue-600'
                )}>
                  {project.title}
                </h3>
                <p className={cn(
                  'mb-4 group-hover:transition-colors duration-300',
                  isDarkMode ? 'text-gray-300 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'
                )}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className={cn(
                        'px-3 py-1 text-sm rounded-full transition-all duration-300 hover:scale-105',
                        isDarkMode 
                          ? 'bg-white/10 text-white hover:bg-white/20' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      )}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'flex-1 py-3 px-4 rounded-lg font-semibold hover:scale-105 transform transition-all duration-300 hover:shadow-lg relative overflow-hidden group flex items-center justify-center gap-2',
                        'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-purple-500/25'
                      )}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="relative z-10">Live Demo</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'py-3 px-4 rounded-lg font-semibold hover:scale-105 transform transition-all duration-300 hover:shadow-lg relative overflow-hidden group flex items-center justify-center gap-2',
                        isDarkMode 
                          ? 'bg-gray-800 text-white hover:bg-gray-700 hover:shadow-gray-500/25' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-gray-400/25'
                      )}
                    >
                      <Github className="w-4 h-4" />
                      <span className="relative z-10">Code</span>
                    </a>
                  )}
                </div>
              </div>
              
              {/* 3D Tilt Effect Overlay */}
              <div className={cn(
                'absolute inset-0 rounded-2xl transition-all duration-500',
                isDarkMode 
                  ? 'bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10'
                  : 'bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10'
              )} />
              
              {/* Glow effect on tilt */}
              {tiltedCard === index && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 animate-glow" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
