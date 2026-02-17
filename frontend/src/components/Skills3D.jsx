import React, { useState } from 'react';

const Skills3D = ({ data }) => {
  const { skills } = data;
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all'
    ? skills?.technical
    : skills?.technical?.filter(skill => skill.category === activeCategory);

  // Get category color based on category id
  const getCategoryColor = (categoryId) => {
    const colors = {
      frontend: '#3B82F6',
      backend: '#8B5CF6',
      database: '#10B981',
      languages: '#F59E0B',
      tools: '#EF4444',
      cs: '#6366F1'
    };
    return colors[categoryId] || '#3B82F6';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
            <span className="text-blue-400">Technical Expertise</span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-5xl mx-auto">
          {skills?.categories?.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
            >
              <i className={`fas ${category.icon}`}></i>
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredSkills?.map((skill, index) => (
            <div
              key={`${activeCategory}-${index}`}
              className="card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 text-xl">
                  <i className={skill.icon}></i>
                </div>
                <h3 className="text-lg font-bold text-slate-800">{skill.name}</h3>
              </div>
              <div className="skill-bar-container">
                <div
                  className="skill-bar-fill"
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${getCategoryColor(skill.category)}, ${getCategoryColor(skill.category)}aa)`
                  }}
                ></div>
              </div>
              <div className="mt-3">
                <span
                  className="inline-block px-2 py-1 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200"
                >
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills3D;
