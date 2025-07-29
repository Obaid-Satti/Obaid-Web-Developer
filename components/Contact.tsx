import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'obaidsatti17@gmail.com',
      description: 'Send me a direct message',
      href: 'obaidsatti17@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+92 3135192214',
      description: 'Let\'s have a conversation',
      href: 'tel: +92 3135192214',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Pakistan ,Rawalpindi',
      description: 'Available for meetups',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'https://www.linkedin.com/in/obaid-saleem-b57a77307',
      description: 'Connect professionally',
      href: 'https://www.linkedin.com/in/obaid-saleem-b57a77307',
      
      color: 'from-blue-600 to-blue-800'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', href: '#', color: 'hover:bg-gray-800' },
    { name: 'LinkedIn', icon: '💼', href: '#', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: '🐦', href: '#', color: 'hover:bg-blue-400' },
    { name: 'Discord', icon: '🎮', href: '#', color: 'hover:bg-indigo-600' }
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
              Let's Work
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your next project to life? Let's discuss how we can 
            create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="text-2xl">🤝</span>
                Get In Touch
              </h3>
              
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="group block"
                  onMouseEnter={() => setHoveredContact(index)}
                  onMouseLeave={() => setHoveredContact(null)}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:scale-105 overflow-hidden">
                    <CardContent className="p-6 relative">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                          <p className="text-blue-300 font-medium mb-1">{method.value}</p>
                          <p className="text-sm text-slate-400">{method.description}</p>
                        </div>
                        <svg 
                          className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" 
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

            {/* Social links */}
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
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`group w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 ${social.color} hover:text-white`}
                      title={social.name}
                    >
                      <span className="group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fun fact */}
            <Card className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl animate-bounce">⚡</span>
                  <h4 className="font-semibold text-black">Quick Response</h4>
                </div>
               <p className="text-black text-sm">
               I typically respond to messages within 24 hours. For urgent 
                  matters, feel free to call or send a LinkedIn message!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
              <CardHeader className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
                <div className="relative">
                  <CardTitle className="text-2xl text-white flex items-center gap-3">
                    <span className="text-2xl">💌</span>
                    Send Me a Message
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Tell me about your project and let's create something amazing together
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      rows={6}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white border-0 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed h-12"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}