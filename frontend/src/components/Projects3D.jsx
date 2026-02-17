import React from 'react';

const Projects3D = ({ data }) => {
  const { projects } = data;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-blue-400 mb-2">My Work</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent development work
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects?.map((project, index) => (
            <div 
              key={index} 
              className="card project-card-3d overflow-hidden animate-fade-in-up transition-transform duration-300 hover:scale-105"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* Project Image */}
              <div className="relative h-56 -mx-6 -mt-6 mb-6 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              
              {/* Project Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-3">{project.description}</p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies?.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors text-sm"
                >
                  <i className="fab fa-github"></i>
                  Code
                </a>
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  <i className="fas fa-external-link-alt"></i>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects Section */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">
            Want to see more of my work? Check out my complete portfolio on GitHub.
          </p>
          <a 
            href="https://github.com/ADHIRAJ00000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Projects
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects3D;
