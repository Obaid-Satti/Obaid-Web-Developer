import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './Image/ImageWithFallback';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filters = [
    { id: 'all', name: 'All Projects', count: 8 },
    { id: 'web', name: 'Web Apps', count: 5 },
    { id: 'mobile', name: 'Mobile', count: 2 },
    { id: 'ai', name: 'AI/ML', count: 1 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Foodhub',
      description: 'Online platform for food ordering with dedicated admin and customer interfaces.',
      longDescription: 'A complete food ordering solution built with React, Node.js, and MongoDB. Features include real-time order tracking, menu management, secure payments, and separate dashboards for restaurants and customers.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGl6emElMjBkZWxpdmVyeXxlbnwxfHx8fDE3NzE0MjIyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'web',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express'],
      features: ['Order Tracking', 'Admin Dashboard', 'Restaurant Management', 'Secure Payments'],
      github: '#',
      demo: '#',
      status: 'Completed',
      year: '2025'
    },
    {
      id: 2,
      title: 'Smart Cart',
      description: 'Mobile shopping assistant allowing users to scan QR codes or barcodes for instant product info and checkout.',
      longDescription: 'Revolutionizing the retail experience with a scan-and-go mobile app. Built with React Native and Node.js, it enables customers to scan items in-store, view details, and checkout via their mobile device.',
      image: 'https://images.unsplash.com/photo-1661169398346-aecdc4f5068b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGJhcmNvZGUlMjBzY2FuJTIwYXBwfGVufDF8fHx8MTc3MTQyMTg3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'mobile',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'QR Scanning'],
      features: ['Barcode Scanning', 'Instant Checkout', 'Inventory Management', 'Purchase History'],
      github: '#',
      demo: '#',
      status: 'Completed',
      year: '2025'
    },
    {
      id: 3,
      title: 'Blood Bank',
      description: 'A life-saving platform connecting blood donors with patients in need through an intuitive web interface.',
      longDescription: 'Dedicated to streamlining blood donation, this platform allows donors to register and patients to find matches quickly. Features include location-based search, emergency requests, and donor eligibility screening.',
      image: 'https://images.unsplash.com/photo-1586768630682-6ffccd5624ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYmxvb2QlMjBkb25hdGlvbiUyMGRvY3RvciUyMHBhdGllbnR8ZW58MXx8fHwxNzcxNDIyNDAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'web',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express'],
      features: ['Donor Registration', 'Blood Search', 'Emergency Alerts', 'Admin Panel'],
      github: '#',
      demo: '#',
      status: 'Completed',
      year: '2025'
    },
    {
      id: 4,
      title: 'Handymen Services Platform',
      description: 'A comprehensive platform connecting customers with skilled handymen, featuring service booking, real-time tracking, and payment processing.',
      longDescription: 'Built with .NET Web API for robust backend services, SQL Server for data management, and React.js for responsive frontend. Features include user authentication, service categories, booking system, and payment integration.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      category: 'web',
      technologies: ['.NET Web API', 'React.js', 'SQL Server', 'Entity Framework'],
      features: ['Service Booking', 'Real-time Tracking', 'Payment Processing', 'User Reviews'],
      github: '#',
      demo: '#',
      status: 'Completed',
      year: '2025'
    },
    {
      id: 5,
      title: 'AI-Powered Resume Screening',
      description: 'Intelligent resume screening system using machine learning to match candidates with job requirements automatically.',
      longDescription: 'Advanced AI system built with React.js frontend, Node.js backend, and MongoDB for data storage. Uses natural language processing to analyze resumes and job descriptions for optimal matching.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
      category: 'ai',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'NLP'],
      features: ['AI Matching', 'Resume Parsing', 'Skill Analysis', 'Automated Screening'],
      github: '#',
      demo: '#',
      status: 'Completed',
      year: '2024'
    },
    {
      id: 6,
      title: 'Naatkhuwaan App',
      description: 'Cultural and educational mobile application developed using C# MVC architecture with comprehensive content management.',
      longDescription: 'A culturally focused application built with C# MVC for server-side logic and SQL Server for robust data management. Features content management, user engagement tools, and cultural resource sharing.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      category: 'mobile',
      technologies: ['C# MVC', 'SQL Server', 'ASP.NET', 'Entity Framework'],
      features: ['Content Management', 'User Engagement', 'Cultural Resources', 'Multi-language Support'],
      github: '#',
      demo: '#',
      status: 'Completed',
      year: '2023'
    },
    {
      id: 7,
      title: 'E-commerce Store',
      description: 'Full-featured online store built with WordPress, offering seamless shopping experience with modern design and functionality.',
      longDescription: 'Professional e-commerce solution developed with WordPress and WooCommerce. Features include product catalog, shopping cart, payment gateway integration, and order management system.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      category: 'web',
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Management'],
      github: '#',
      demo: '#',
      status: 'Completed',
      year: '2023'
    },
    {
      id: 8,
      title: 'Todo List Application',
      description: 'Modern task management application with clean interface, built using React.js frontend and C# backend for reliable performance.',
      longDescription: 'Efficient task management solution featuring React.js for interactive user interface and C# backend for robust data handling. Includes task organization, priority settings, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
      category: 'web',
      technologies: ['React.js', 'C#', 'ASP.NET Core', 'SQL Server'],
      features: ['Task Organization', 'Priority Settings', 'Progress Tracking', 'Categories'],
      github: '#',
      demo: '#',
      status: 'Completed',
      year: '2023'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const handleFilterClick = (filterId: string) => setActiveFilter(filterId);

  const handleProjectClick = useCallback((project: typeof projects[0], event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('Project clicked:', project.title);
  }, []);

  const handleDemoClick = useCallback((project: typeof projects[0], event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('Demo clicked for:', project.title);
  }, []);

  const handleCodeClick = useCallback((project: typeof projects[0], event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('Code clicked for:', project.title);
  }, []);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Portfolio</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-slate-100 dark:via-blue-100 dark:to-slate-100 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my development projects across different technologies including React, Node.js, .NET, and more.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleFilterClick(filter.id);
              }}
              className={`group relative px-6 py-3 rounded-full transition-all duration-200 ease-out select-none cursor-pointer ${activeFilter === filter.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                : 'bg-white/80 dark:bg-slate-800/80 text-muted-foreground hover:text-foreground hover:scale-105 border border-border/50 hover:border-blue-300 dark:hover:border-blue-600'
                }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {filter.name}
                <Badge variant="secondary" className={`text-xs ${activeFilter === filter.id
                  ? 'bg-white/20 text-white'
                  : 'bg-muted text-muted-foreground'
                  }`}>
                  {filter.count}
                </Badge>
              </span>
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-white/20 overflow-hidden cursor-pointer will-change-transform transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl select-none"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={(e) => handleProjectClick(project, e)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleProjectClick(project, e as any);
                }
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <div
                  className="w-full h-48 will-change-transform transition-transform duration-500 ease-out cursor-pointer"
                  style={{ transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)' }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ease-out"
                  style={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                >
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2 mb-3">
                      <Button
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm cursor-pointer"
                        onClick={(e) => handleDemoClick(project, e)}
                      >
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm cursor-pointer"
                        onClick={(e) => handleCodeClick(project, e)}
                      >
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusColor(project.status)} border backdrop-blur-sm`}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-black/20 text-white border-0 backdrop-blur-sm">
                    {project.year}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3 cursor-pointer">
                <CardTitle
                  className="text-xl transition-colors duration-200 cursor-pointer"
                  style={{ color: hoveredProject === project.id ? 'rgb(37 99 235)' : 'inherit' }}
                >
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0 cursor-pointer">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-muted-foreground">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-500 rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
