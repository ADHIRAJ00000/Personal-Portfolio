import React from 'react';

const About = ({ data }) => {
  const { stats, experience } = data;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
            <span className="text-blue-400">Get To Know Me</span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate developer dedicated to building innovative solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Row 1: Journey and Metrics */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* My Journey Card */}
            <div className="card h-full">
              <div className="flex items-center gap-3 mb-4">
                <i className="fas fa-code text-blue-400 text-xl"></i>
                <h3 className="text-2xl font-bold text-slate-800">My Journey</h3>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Dynamic software developer, excelling in MERN Stack. Adept at project management and system debugging, I deliver innovative solutions that enhance user experience. My strong foundation in data structures and algorithms drives efficient coding practices, ensuring high-quality results in every project.
                </p>
                <p>
                  As a student at BMS Institute of Technology & Management, I'm constantly expanding my knowledge in software development, with a particular focus on the MERN stack and modern web technologies.
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="card py-6 px-6 flex flex-col justify-center">
                <div className="text-3xl font-bold text-blue-500 mb-1">{stats?.projectsCompleted}+</div>
                <div className="text-slate-800 font-medium text-sm">Projects</div>
                <div className="text-slate-500 text-xs">Completed</div>
              </div>
              <div className="card py-6 px-6 flex flex-col justify-center">
                <div className="text-3xl font-bold text-blue-500 mb-1">{stats?.technologiesMastered}+</div>
                <div className="text-slate-800 font-medium text-sm">Technologies</div>
                <div className="text-slate-500 text-xs">Mastered</div>
              </div>
              <div className="card py-6 px-6 flex flex-col justify-center">
                <div className="text-3xl font-bold text-blue-500 mb-1">{stats?.cgpa}</div>
                <div className="text-slate-800 font-medium text-sm">CGPA</div>
                <div className="text-slate-500 text-xs">Academic</div>
              </div>
              <div className="card py-6 px-6 flex flex-col justify-center">
                <div className="text-3xl font-bold text-blue-500 mb-1">{stats?.awardsWon}+</div>
                <div className="text-slate-800 font-medium text-sm">Awards</div>
                <div className="text-slate-500 text-xs">Won</div>
              </div>
            </div>
          </div>

          {/* Row 2: Education and Experience */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <i className="fas fa-graduation-cap text-blue-400 text-xl"></i>
                <h3 className="text-xl font-bold text-slate-800">Education</h3>
              </div>
              <div className="space-y-4">
                {/* College */}
                <div className="card">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-1">Bachelor of Engineering</h4>
                      <p className="text-blue-400 text-sm mb-1">BMS Institute of Technology & Management</p>
                      <p className="text-slate-500 text-xs">Electronics and Telecommunication</p>
                      <p className="text-slate-400 text-xs mt-1">2023 - Present</p>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Current</span>
                      <p className="text-green-400 font-bold mt-2">CGPA: 7.95</p>
                    </div>
                  </div>
                </div>

                {/* 12th */}
                <div className="card">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-1">ISC (XII)</h4>
                      <p className="text-blue-400 text-sm mb-1">Shri J.N. Shah Inter College</p>
                      <p className="text-slate-500 text-xs">Science</p>
                      <p className="text-slate-400 text-xs mt-1">2021-2022</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-bold">91.25%</p>
                    </div>
                  </div>
                </div>

                {/* 10th */}
                <div className="card">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-1">ICSE (X)</h4>
                      <p className="text-blue-400 text-sm mb-1">Shri J.N. Shah Inter College</p>
                      <p className="text-slate-500 text-xs">General</p>
                      <p className="text-slate-400 text-xs mt-1">2019-2020</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-bold">92%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <i className="fas fa-briefcase text-blue-400 text-xl"></i>
                <h3 className="text-xl font-bold text-slate-800">Experience</h3>
              </div>
              {experience?.map((exp, index) => (
                <div key={index} className="card">
                  <h4 className="text-lg font-bold text-slate-800 mb-1">{exp.title}</h4>
                  <p className="text-blue-400 text-sm mb-3">{exp.company}</p>
                  <p className="text-slate-600 text-sm mb-4">{exp.description}</p>
                  <ul className="space-y-2 mb-4">
                    {exp.achievements?.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                        <i className="fas fa-caret-right text-blue-400 mt-1"></i>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-400 text-sm">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
