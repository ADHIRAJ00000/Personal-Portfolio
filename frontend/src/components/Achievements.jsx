import React from 'react';

const Achievements = ({ data }) => {
  const { achievements } = data;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'trophy':
        return 'fa-trophy';
      case 'award':
        return 'fa-award';
      case 'basketball':
        return 'fa-basketball-ball';
      default:
        return 'fa-star';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
            <span className="text-blue-400">Recognition</span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>
          <h2 className="section-title">
            Achievements & <span className="text-blue-400">Awards</span>
          </h2>
          <p className="section-subtitle">
            Recognition for innovation, dedication, and excellence
          </p>
        </div>
        
        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 via-blue-300 to-blue-500"></div>
          
          {achievements?.map((achievement, index) => (
            <div 
              key={index}
              className={`relative flex items-center mb-12 ${
                achievement.side === 'left' ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div className={`w-5/12 ${achievement.side === 'left' ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div 
                  className="card achievement-card animate-fade-in-up"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  {/* Date Badge */}
                  <div className={`inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium mb-3 ${achievement.side === 'left' ? 'float-right' : 'float-left'}`}>
                    {achievement.date}
                  </div>
                  <div className="clear-both"></div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {achievement.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  {/* Highlight */}
                  <div className={`flex items-center gap-2 text-blue-400 text-sm ${achievement.side === 'left' ? 'justify-end' : 'justify-start'}`}>
                    <i className="fas fa-check-circle"></i>
                    <span>{achievement.highlight}</span>
                  </div>
                </div>
              </div>
              
              {/* Center Icon */}
              <div className="w-2/12 flex justify-center relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 border-4 border-white">
                  <i className={`fas ${getIcon(achievement.icon)} text-white text-xl`}></i>
                </div>
              </div>
              
              {/* Empty Space for other side */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
