import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ data }) => {
  const { personalInfo } = data;
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // EmailJS configuration
      // Replace these with your actual EmailJS credentials
      const serviceId = 'service_uvpm56r';
      const templateId = 'template_daotr8s';
      const publicKey = 'U_sH9L3XeT6ASid6d';

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setIsSubmitting(false);
      setError('Failed to send message. Please try again.');
      console.error('EmailJS error:', err);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-500"></div>
            <span className="text-blue-400">Get In Touch</span>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-500"></div>
          </div>
          <h2 className="section-title">
            Contact <span className="text-blue-400">Me</span>
          </h2>
          <p className="section-subtitle">
            Let's collaborate and build something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info - Left Side */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Let's <span className="text-blue-500">Connect</span>
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              I'm always excited to discuss new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {/* Email Card */}
              <div className="card flex items-center gap-4 py-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <p className="text-slate-500 text-xs">Email</p>
                  <p className="text-slate-800 font-medium">{personalInfo?.email}</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="card flex items-center gap-4 py-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <p className="text-slate-500 text-xs">Phone</p>
                  <p className="text-slate-800 font-medium">{personalInfo?.phone}</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="card flex items-center gap-4 py-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <p className="text-slate-500 text-xs">Location</p>
                  <p className="text-slate-800 font-medium">{personalInfo?.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-6">
              <p className="text-slate-800 font-medium mb-4">Connect on Social</p>
              <div className="flex gap-3">
                <a
                  href={personalInfo?.social?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-all"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href={personalInfo?.social?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-all"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href={personalInfo?.social?.email}
                  className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-all"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>

            {/* Download Resume Button */}
            <a
              href="/mine.pdf"
              download="Resume.pdf"
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <i className="fas fa-download"></i>
              Download Resume
            </a>
          </div>

          {/* Contact Form - Right Side */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-slate-700 text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-slate-700 text-sm mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-slate-700 text-sm mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label className="block text-slate-700 text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-input resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-600 text-center">
                  <i className="fas fa-check-circle mr-2"></i>
                  Message sent successfully!
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-center">
                  <i className="fas fa-exclamation-circle mr-2"></i>
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
