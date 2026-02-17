import React from 'react';
import { scrollToSection } from '../lib/utils';

const Footer = ({ data }) => {
  const { personalInfo } = data;
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-slate-800 mb-4">AD</div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Full Stack Developer specializing in MERN Stack.
              Building innovative solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-800 font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-600 hover:text-blue-500 transition-colors text-left text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-slate-800 font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">
                <i className="fas fa-envelope mr-2 text-blue-500"></i>
                {personalInfo?.email}
              </p>
              <p className="text-gray-600">
                <i className="fas fa-phone mr-2 text-blue-500"></i>
                {personalInfo?.phone}
              </p>
              <p className="text-gray-600">
                <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
                {personalInfo?.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {personalInfo?.name}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href={personalInfo?.social?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:text-blue-500 hover:bg-blue-50 transition-all"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={personalInfo?.social?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:text-blue-500 hover:bg-blue-50 transition-all"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
