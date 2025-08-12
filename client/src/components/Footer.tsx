import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const specializations = [
    'Cloud Architecture',
    'Container Orchestration',
    'CI/CD Pipelines',
    'Infrastructure as Code',
    'Monitoring & Observability'
  ];

  const socialLinks = [
    {
      href: 'https://github.com/alexphilipjames',
      icon: Github,
      label: 'GitHub',
      ariaLabel: 'Visit Alex Philip James on GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/alexphilipjames/',
      icon: Linkedin,
      label: 'LinkedIn',
      ariaLabel: 'Visit Alex Philip James on LinkedIn'
    }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-accent">AP</span>
              <span className="ml-3 text-lg">Alex Philip</span>
            </div>
            <p className="text-gray-300 mb-6">
              Cloud Infra & DevOps Specialist with expertise in Kubernetes, AWS, and automation 
              helping organizations accelerate their cloud transformation journey.
            </p>
            
            {/* Social Links Section */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-white">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors p-2 rounded-lg hover:bg-white/10 group"
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium group-hover:text-accent">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-accent transition-colors text-left hover:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Specializations</h4>
            <ul className="space-y-2 text-gray-400">
              {specializations.map((spec, index) => (
                <li key={index} className="hover:text-gray-300 transition-colors">{spec}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Alex Philip. All rights reserved. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
