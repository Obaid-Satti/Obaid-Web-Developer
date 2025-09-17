import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './Image/ImageWithFallback';
import dp from '../src/assets/dp.jpg'
export default function About() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    { number: '20+', label: 'Technologies Mastered', icon: '🚀', color: 'from-blue-500 to-cyan-500' },
    { number: '3+', label: 'Certifications Earned', icon: '🏆', color: 'from-purple-500 to-pink-500' },
    { number: '1+', label: 'Years Learning', icon: '📈', color: 'from-green-500 to-emerald-500' },
    { number: '∞', label: 'Passion for Code', icon: '💻', color: 'from-orange-500 to-red-500' }
  ];

  const technologies = [
    { name: 'React.js', level: 90, color: 'bg-blue-500' },
    { name: 'C# .NET', level: 85, color: 'bg-purple-600' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'SQL', level: 85, color: 'bg-green-500' },
    { name: 'React Native', level: 80, color: 'bg-blue-600' },
    { name: 'Node.js', level: 75, color: 'bg-green-600' }
  ];

  const timeline = [
    { year: '2022', title: 'Started Programming Journey', desc: 'Began learning web development technologies' },
    { year: '2024', title: 'First React.js Project', desc: 'Built interactive web applications' },
    { year: '2025', title: 'Full-Stack Internship', desc: 'Gained hands-on industry experience' },
    { year: '2025', title: 'Certified Developer', desc: 'Earned JavaScript & React certifications' }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,219,226,0.1),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">About Me</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-slate-100 dark:via-blue-100 dark:to-slate-100 bg-clip-text text-transparent">
              Building Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Left column - Story */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-2xl">👨‍💻</span>
                My Story
              </h3>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm Obaid Saleem, a passionate full-stack developer with expertise in 
                  modern web technologies. My journey in software development has been 
                  driven by curiosity and a genuine love for creating digital solutions 
                  that make a difference.
                </p>
                
                <p>
                  I specialize in React.js for frontend development and C# .NET for 
                  backend services, with strong database skills in SQL and MongoDB. 
                  My experience includes building responsive web applications, RESTful 
                  APIs, and cross-platform mobile apps using React Native.
                </p>
                
                <p>
                  Through my internship experience as a full-stack web developer, I've 
                  gained hands-on experience in the complete software development lifecycle. 
                  I'm always eager to learn new technologies and take on challenging projects 
                  that push the boundaries of what's possible.
                </p>
              </div>

              {/* Technology stack */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-lg">Core Technologies</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <div key={tech.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{tech.name}</span>
                        <span className="text-sm text-muted-foreground">{tech.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${tech.level}%`,
                            animationDelay: `${index * 100}ms` 
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                My Journey
              </h3>
              
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {item.year.slice(-2)}
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-500 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">{item.year}</div>
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Stats and profile */}
          <div className="space-y-8">
            {/* Profile card */}
            <Card className="group relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                {/* Profile image with gradient border */}
                <div className="relative mx-auto mb-6 w-32 h-32">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full p-1 animate-spin-slow">
                    <div className="w-full h-full bg-white dark:bg-slate-800 rounded-full overflow-hidden">
                      <ImageWithFallback
                        src={dp}
                        alt="Obaid Saleem - Full Stack Developer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">Obaid Saleem</h3>
                <p className="text-muted-foreground mb-6">Full-Stack Developer</p>
                
                {/* Social links */}
                <div className="flex justify-center gap-3">
                  {[
                    { name: 'GitHub', icon: '🐙', href: '#' },
                    { name: 'LinkedIn', icon: '💼', href: '#' },
                    { name: 'Email', icon: '📧', href: '#' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 bg-muted hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-xl flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:text-white group"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                  
                  {/* Hover gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Animated border */}
                  {hoveredStat === index && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-20 animate-pulse`}></div>
                  )}
                </Card>
              ))}
            </div>

            {/* Fun fact */}
            <Card className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">💡</span>
                  <h4 className="font-semibold">Fun Fact</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  I love exploring new technologies and frameworks! Currently diving 
                  deeper into advanced React patterns and .NET Core optimization. ⚡
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}