import  { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export default function Contact() {
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'obaidsatti17@gmail.com',
      description: 'Send me a direct message',
      href: 'mailto:obaidsatti17@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+92 3135192214',
      description: 'Let\'s have a conversation',
      href: 'tel:+923135192214',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Rawalpindi, Pakistan',
      description: 'Available for meetups',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Connect with me',
      description: 'Professional networking',
      href: 'https://www.linkedin.com/in/obaid-saleem-b57a77307',
      color: 'from-blue-600 to-blue-800'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', href: 'https://github.com', color: 'hover:bg-gray-800' },
    { name: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/in/obaid-saleem-b57a77307', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: '🐦', href: 'https://twitter.com', color: 'hover:bg-blue-400' },
    { name: 'Discord', icon: '🎮', href: 'https://discord.com', color: 'hover:bg-indigo-600' }
  ];


  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-purple-900/50"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 text-sm font-medium">Available for opportunities</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Let's Connect
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              & Collaborate
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your next project to life? I'm always excited to discuss new opportunities 
            and collaborate on innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-2xl">🤝</span>
              Get In Touch
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="group block"
                  onMouseEnter={() => setHoveredContact(index)}
                  onMouseLeave={() => setHoveredContact(null)}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:scale-105 overflow-hidden h-full">
                    <CardContent className="p-6 relative">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300 mt-1">
                          {method.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white mb-2">{method.title}</h4>
                          <p className="text-blue-300 font-medium mb-2 break-words">{method.value}</p>
                          <p className="text-sm text-slate-400">{method.description}</p>
                        </div>
                        <svg 
                          className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                      
                      {/* Animated background */}
                      {hoveredContact === index && (
                        <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-10 transition-opacity duration-300`}></div>
                      )}
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Working Hours & Availability */}
          <div className="space-y-8">
            {/* <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <span className="text-2xl">⏰</span>
                  Working Hours
                </CardTitle>
                <CardDescription className="text-slate-300">
                  When I'm typically available for communication
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
                    <span className="text-slate-300 text-sm">{schedule.day}</span>
                    <span className="text-white text-sm font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>  */}

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <span className="text-2xl">🌐</span>
                  Follow Me
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Stay connected across different platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 p-3 bg-white/10 rounded-xl transition-all duration-300 hover:scale-105 ${social.color} hover:text-white`}
                      title={social.name}
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </span>
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA and Quick Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border-blue-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl animate-bounce">⚡</span>
                <h4 className="font-semibold text-">Quick Response</h4>
              </div>
             <p className="text-black text-sm mb-4">

                I typically respond to messages within 24 hours. For urgent 
                matters, feel free to call or send a LinkedIn message!
              </p>
              <div className="flex items-center gap-2 text-green-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Currently available for new projects</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🚀</span>
                <h4 className="font-semibold text-black">Let's Build Something Amazing</h4>
              </div>
            <p className="text-black text-sm mb-4">

                Whether it's a web application, mobile app, or a complex system, 
                I'm ready to turn your ideas into reality.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'C# .NET', 'React Native', 'SQL'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-white/10 rounded-full text-xs text-green">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}