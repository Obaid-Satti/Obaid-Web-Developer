import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface Skill {
  name: string;
  level: number;
  icon: string;
  description: string;
}

interface Category {
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skillCategories: Record<string, Category> = {
    frontend: {
      title: 'Frontend Development',
      icon: '🎨',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 90, icon: '⚛️', description: 'Component-based UI development' },
        { name: 'React Native', level: 80, icon: '📱', description: 'Cross-platform mobile apps' },
        { name: 'JavaScript', level: 85, icon: '📜', description: 'ES6+ modern JavaScript' },
        { name: 'Tailwind CSS', level: 85, icon: '🎨', description: 'Utility-first CSS framework' },
        { name: 'Bootstrap', level: 80, icon: '🅱️', description: 'Responsive CSS framework' },
        { name: 'HTML/CSS', level: 90, icon: '🌐', description: 'Semantic markup & styling' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: '⚙️',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'C# .NET', level: 85, icon: '🔷', description: 'Web API & RESTful services' },
        { name: 'RESTful APIs', level: 85, icon: '🔗', description: 'API design & implementation' },
        { name: 'Node.js', level: 75, icon: '🟢', description: 'Server-side JavaScript' },
        { name: 'Python', level: 60, icon: '🐍', description: 'Backend development & scripting' },
        { name: '.NET Windows Forms', level: 80, icon: '🖥️', description: 'Desktop application development' },
        { name: 'Web APIs', level: 85, icon: '🌐', description: 'HTTP services & endpoints' }
      ]
    },
    database: {
      title: 'Database & Storage',
      icon: '💾',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'SQL Server', level: 85, icon: '🗄️', description: 'Advanced database design & queries' },
        { name: 'MongoDB', level: 75, icon: '🍃', description: 'NoSQL document database' },
        { name: 'Database Design', level: 80, icon: '📊', description: 'Normalization & optimization' },
        { name: 'Advanced Queries', level: 80, icon: '🔍', description: 'Complex SQL operations' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: '🛠️',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Visual Studio', level: 85, icon: '🟣', description: 'Full-featured IDE' },
        { name: 'VS Code', level: 90, icon: '💙', description: 'Lightweight code editor' },
        { name: 'Git', level: 80, icon: '📝', description: 'Version control system' },
        { name: 'GitHub', level: 85, icon: '🐙', description: 'Code repository & collaboration' },
        { name: 'Figma', level: 60, icon: '🎨', description: 'Basic UI/UX design' },
        { name: 'Visily', level: 60, icon: '✨', description: 'Basic wireframing & prototyping' },
        { name: 'WordPress', level: 65, icon: '📝', description: 'Basic CMS development' }
      ]
    }
  };

  const certifications = [
    { name: 'JavaScript Certification', icon: '📜', year: '2024' },
    { name: 'React.js Certification', icon: '⚛️', year: '2024' },
    { name: 'WordPress Certification', icon: '📝', year: '2024' }
  ];

  const getAllSkills = () => {
    const allSkills: Array<{
      skill: Skill;
      category: string;
      categoryData: Category;
    }> = [];

    Object.entries(skillCategories).forEach(([categoryKey, categoryData]) => {
      categoryData.skills.forEach(skill => {
        allSkills.push({
          skill,
          category: categoryKey,
          categoryData
        });
      });
    });

    return allSkills;
  };

  const getDisplaySkills = () => {
    if (activeCategory) {
      const categoryData = skillCategories[activeCategory as keyof typeof skillCategories];
      return categoryData.skills.map(skill => ({
        skill,
        category: activeCategory,
        categoryData
      }));
    }
    return getAllSkills();
  };

  const displaySkills = getDisplaySkills();

  return (
    <section id="skills" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-purple-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(120,219,226,0.2),transparent_70%)]"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-300 text-sm font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">Skills &</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            My comprehensive toolkit spanning frontend development, backend services, database management, and modern development tools.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveCategory(null)}
            className={`group relative px-8 py-4 rounded-2xl transition-all duration-300 ${
              activeCategory === null
                ? 'bg-white/20 text-white shadow-xl scale-105'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <span className="relative z-10 flex items-center gap-3">
              <span className="text-2xl">🌟</span>
              <span className="font-semibold">All Skills</span>
            </span>
            {activeCategory === null && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-20 rounded-2xl"></div>
            )}
          </button>

          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`group relative px-8 py-4 rounded-2xl transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-white/20 text-white shadow-xl scale-105'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <span className="font-semibold">{category.title}</span>
              </span>
              {activeCategory === key && (
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-20 rounded-2xl`}></div>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {displaySkills.map(({ skill, category, categoryData }, index) => (
            <Card
              key={`${category}-${skill.name}`}
              className="group relative bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                {activeCategory === null && (
                  <div className="mb-3">
                    <Badge variant="secondary" className={`bg-gradient-to-r ${categoryData.color} text-white border-0 text-xs`}>
                      <span className="mr-1">{categoryData.icon}</span>
                      {categoryData.title}
                    </Badge>
                  </div>
                )}
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{skill.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg text-white">{skill.name}</h3>
                    <p className="text-sm text-slate-300">{skill.description}</p>
                  </div>
                </div>
                {/* <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-300">Proficiency</span>
                    <span className="text-sm font-bold text-white">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${categoryData.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%`, transitionDelay: `${index * 50 + 300}ms` }}
                    ></div>
                  </div>
                </div> */}
                {/* <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i < Math.floor(skill.level / 20) ? `bg-gradient-to-r ${categoryData.color}` : 'bg-white/20'
                      }`}
                      style={{ transitionDelay: `${index * 50 + 400 + i * 50}ms` }}
                    ></div>
                  ))}
                </div> */}
              </CardContent>
              <div className={`absolute inset-0 bg-gradient-to-r ${categoryData.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </Card>
          ))}
        </div>

        {activeCategory === null && (
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              {Object.entries(skillCategories).map(([key, category]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <div className="text-sm text-slate-300">{category.skills.length}</div>
                  <div className="text-xs text-slate-400">Skills</div>
                </div>
              ))}
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl mb-2">🚀</div>
                <div className="text-sm text-slate-300">{getAllSkills().length}</div>
                <div className="text-xs text-slate-400">Total</div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <span className="text-2xl">🏆</span>
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-xl">{cert.icon}</span>
                  <span className="text-white font-medium">{cert.name}</span>
                  <span className="text-slate-400 text-sm">({cert.year})</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
