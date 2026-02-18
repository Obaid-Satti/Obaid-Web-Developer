import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Full-Stack Developer',
    'React.js Developer',
    'Node js Developer',
    'Mobile App Developer'
  ];

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentIndex];

    if (isTyping) {
      if (displayedText.length < currentRole.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setIsTyping(true);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, [displayedText, currentIndex, isTyping, roles]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Greeting with animation */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Available for new opportunities</span>
              </div>
            </div>

            {/* Main heading with gradient */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                  Obaid Saleem
                </span>
              </h1>

              {/* Typewriter effect */}
              <div className="h-16 flex items-center">
                <span className="text-2xl sm:text-3xl text-muted-foreground">
                  {displayedText}
                  {isTyping && <span className="animate-blink">|</span>}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Passionate full-stack developer with expertise in React.js, Node js, .NET, and modern web technologies.
              I create scalable applications and user-friendly interfaces that deliver exceptional digital experiences.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white border-0 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25"
                onClick={() => scrollToSection('projects')}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-blue-600/20 text-foreground bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                <span className="flex items-center gap-2">
                  Get In Touch
                  <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </Button>
            </div>

            {/* Social proof */}
            <div className="pt-8 flex flex-col sm:flex-row items-center gap-8 text-center lg:text-left">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <div className="font-semibold text-foreground">Internship Experience</div>
                  <div className="text-xs">Full-Stack Web Developer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Interactive code block */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Floating icons */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-lg rotate-12 flex items-center justify-center shadow-lg animate-float">
                ⚡
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-float animation-delay-1000">
                ✨
              </div>
              <div className="absolute -bottom-4 -left-2 w-7 h-7 bg-purple-400 rounded-lg -rotate-12 flex items-center justify-center shadow-lg animate-float animation-delay-2000">
                🚀
              </div>

              {/* Main card */}
              <div className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                {/* Code editor header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm text-muted-foreground ml-2">portfolio.js</div>
                  <div className="ml-auto text-xs text-muted-foreground">TypeScript</div>
                </div>

                {/* Code content */}
                <div className="font-mono text-sm space-y-3 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">const</span>
                    <span className="text-blue-500">developer</span>
                    <span className="text-gray-500">=</span>
                    <span className="text-orange-500">&#123;</span>
                  </div>

                  <div className="ml-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">name:</span>
                      <span className="text-green-500">"Obaid Saleem"</span>,
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">skills:</span>
                      <span className="text-blue-500">[</span>
                      <span className="text-green-500">"React"</span>,
                      <span className="text-green-500">"Node js"</span>,
                      <span className="text-green-500">".NET"</span>
                      <span className="text-blue-500">]</span>,
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">experience:</span>
                      <span className="text-green-500">"Full-Stack"</span>,
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">passion:</span>
                      <span className="text-green-500">"Building Solutions"</span>,
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">hireable:</span>
                      <span className="text-purple-500">true</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-orange-500">&#125;</span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">developer</span>
                      <span className="text-gray-500">.</span>
                      <span className="text-yellow-500">createAwesome</span>
                      <span className="text-gray-500">()</span>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}