import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Skills3D from './components/Skills3D';
import Projects3D from './components/Projects3D';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/mockData';

function App() {
  const [data] = useState(portfolioData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 500);

    // Create particles
    const createParticles = () => {
      const container = document.getElementById('particles');
      if (!container) return;
      
      container.innerHTML = '';
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        container.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#f8fafc]">
      {/* Particle Background */}
      <div className="particles-container" id="particles"></div>
      <div className="gradient-overlay gradient-1"></div>
      <div className="gradient-overlay gradient-2"></div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero3D data={data} />
        <About data={data} />
        <Skills3D data={data} />
        <Projects3D data={data} />
        <Achievements data={data} />
        <Contact data={data} />
      </main>
      
      {/* Footer */}
      <Footer data={data} />
    </div>
  );
}

export default App;
