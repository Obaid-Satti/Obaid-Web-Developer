import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Obaid Saleem
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Data Analyst @ Systems Ltd and MERN stack developer. 
                Passionate about data engineering, business intelligence, and building scalable digital architectures.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: '🐙', href: '#', label: 'GitHub' },
                  { icon: '💼', href: '#', label: 'LinkedIn' },
                  { icon: '📧', href: '#', label: 'Email' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center text-lg transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Contact', href: '#contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Get In Touch</h4>
              <div className="space-y-2 text-sm">
                <p className="text-slate-400 flex items-center gap-2">
                  <span>📧</span>
                  obaidsatti17@gmail.com
                </p>
                <p className="text-slate-400 flex items-center gap-2">
                  <span>💼</span>
                  Data Analyst @ Systems Ltd
                </p>
                <p className="text-slate-400 flex items-center gap-2">
                  <span>🎓</span>
                  Certified in React.js & JavaScript
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2026 Obaid Saleem. Built with React & TypeScript.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                 <span className="text-red-400 animate-pulse">❤️</span> 
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}