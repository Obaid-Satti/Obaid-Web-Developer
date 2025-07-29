import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero', icon: '🏠' },
    { name: 'About', id: 'about', icon: '👨‍💻' },
    { name: 'Skills', id: 'skills', icon: '⚡' },
    { name: 'Projects', id: 'projects', icon: '🚀' },
    { name: 'Contact', id: 'contact', icon: '📬' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with animated gradient */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="group relative overflow-hidden px-4 py-2 rounded-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0.5 bg-background rounded-[10px] group-hover:bg-background/90"></div>
              <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent font-bold text-xl">
                Obaid Saleem
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-xs">{item.icon}</span>
                  {item.name}
                </span>
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white border-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10">Let's Talk</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 rounded-xl bg-muted/50 backdrop-blur-sm border border-border/50 flex items-center justify-center group transition-all duration-300 hover:bg-muted/80"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
                <span className={`w-4 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`w-4 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-4 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-card/50 backdrop-blur-xl rounded-2xl mt-4 border border-border/50">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 ${
                  activeSection === item.id ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-primary' : 'text-muted-foreground'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            ))}
            <div className="px-6 pt-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}