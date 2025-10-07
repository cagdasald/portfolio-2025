import { useEffect, useRef } from 'react';
import Head from 'next/head';

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Portfolio - Kişisel Web Sitesi</title>
        <meta name="description" content="Modern ve responsive portfolio web sitesi" />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section id="home" className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                    Merhaba, Ben{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Çağdaş
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    Full-Stack Developer olarak modern web teknolojileri ile 
                    yaratıcı ve kullanıcı dostu uygulamalar geliştiriyorum.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => scrollToSection(projectsRef)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-center"
                    >
                      Projelerimi İncele
                    </button>
                    <button
                      onClick={() => scrollToSection(contactRef)}
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-center"
                    >
                      İletişime Geç
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-2xl flex items-center justify-center">
                    <span className="text-white text-2xl font-semibold">Profil Fotoğrafı</span>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Hakkımda
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Bu sayfa hakkımda bilgilerinizi paylaşabileceğiniz alandır. 
                  Kendinizi, deneyimlerinizi ve hedeflerinizi burada anlatabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
                Teknolojiler
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { name: 'React', icon: '⚛️' },
                  { name: 'Next.js', icon: '▲' },
                  { name: 'TypeScript', icon: '📘' },
                  { name: 'Node.js', icon: '🟢' },
                  { name: 'Python', icon: '🐍' },
                  { name: 'MongoDB', icon: '🍃' },
                  { name: 'PostgreSQL', icon: '🐘' },
                  { name: 'Docker', icon: '🐳' }
                ].map((tech, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl mb-3">{tech.icon}</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{tech.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" ref={projectsRef} className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 flex items-center">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Projelerim
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Proje 1",
                    description: "Bu projenin açıklaması burada yer alacak.",
                    tech: ["React", "TypeScript", "Tailwind"],
                    image: "/placeholder-project.jpg"
                  },
                  {
                    title: "Proje 2", 
                    description: "Bu projenin açıklaması burada yer alacak.",
                    tech: ["Next.js", "Node.js", "MongoDB"],
                    image: "/placeholder-project.jpg"
                  },
                  {
                    title: "Proje 3",
                    description: "Bu projenin açıklaması burada yer alacak.",
                    tech: ["Vue.js", "Python", "PostgreSQL"],
                    image: "/placeholder-project.jpg"
                  }
                ].map((project, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">Proje Görseli</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={contactRef} className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 dark:from-gray-900 dark:to-gray-800 flex items-center">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                İletişim
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Benimle İletişime Geçin
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400">📧</span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">email@example.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                        <span className="text-green-600 dark:text-green-400">📱</span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">+90 555 123 45 67</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 dark:text-purple-400">📍</span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">İstanbul, Türkiye</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Mesaj Gönderin
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Adınız"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="E-posta"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="Mesajınız"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                    >
                      Mesaj Gönder
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
