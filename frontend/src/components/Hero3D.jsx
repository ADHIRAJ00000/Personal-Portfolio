import React from 'react';
import { scrollToSection } from '../lib/utils';

const Hero3D = ({ data }) => {
  const { personalInfo } = data;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-blue-50/80 z-0"></div>

      {/* Decorative Background Elements */}
      {/* Large soft circle - top right */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl z-0"></div>
      {/* Large soft circle - bottom left */}
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-indigo-200/20 blur-3xl z-0"></div>
      {/* Medium circle - top left */}
      <div className="absolute top-40 left-10 w-32 h-32 rounded-full bg-sky-200/30 blur-2xl z-0"></div>
      {/* Small circle - right side */}
      <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-blue-100/50 blur-xl z-0"></div>
      {/* Decorative dots pattern */}
      <div className="absolute top-20 right-1/4 w-2 h-2 rounded-full bg-blue-400/40 z-0"></div>
      <div className="absolute top-32 right-1/3 w-1.5 h-1.5 rounded-full bg-indigo-400/30 z-0"></div>
      <div className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-sky-400/30 z-0"></div>
      <div className="absolute bottom-32 right-1/3 w-1 h-1 rounded-full bg-blue-500/30 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <span className="text-blue-400 text-sm font-medium">
                <i className="fas fa-code mr-2"></i>
                {personalInfo?.subtitle}
              </span>
            </div>

            <h1 className="hero-title mb-6">
              Hi, I'm {personalInfo?.name}
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {personalInfo?.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                View My Work
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <a
                href={personalInfo?.social?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-github text-xl text-slate-600"></i>
              </a>
              <a
                href={personalInfo?.social?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-linkedin-in text-xl text-slate-600"></i>
              </a>

            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                <img
                  src="/profile-new.jpg"
                  alt={personalInfo?.name}
                  className="w-full h-full object-cover object-[35%_50%]"
                />
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-14 h-14 bg-white shadow-lg rounded-xl border border-slate-100 flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
                <i className="fab fa-react text-blue-500 text-2xl"></i>
              </div>
              <div className="absolute top-20 -right-8 w-12 h-12 bg-white shadow-lg rounded-xl border border-slate-100 flex items-center justify-center animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                <i className="fab fa-js text-yellow-500 text-xl"></i>
              </div>
              <div className="absolute bottom-20 -right-6 w-12 h-12 bg-white shadow-lg rounded-xl border border-slate-100 flex items-center justify-center animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <i className="fab fa-node text-green-500 text-xl"></i>
              </div>
              <div className="absolute bottom-32 -left-6 w-11 h-11 bg-white shadow-lg rounded-xl border border-slate-100 flex items-center justify-center animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '0.3s' }}>
                <i className="fas fa-database text-sky-500 text-lg"></i>
              </div>
              <div className="absolute top-10 -left-4 w-10 h-10 bg-white shadow-lg rounded-xl border border-slate-100 flex items-center justify-center animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.7s' }}>
                <i className="fab fa-html5 text-orange-500 text-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <button
          onClick={() => scrollToSection('about')}
          className="text-slate-400 hover:text-slate-600 transition-colors"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </button>
      </div>
    </section>
  );
};

export default Hero3D;
