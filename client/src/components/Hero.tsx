import { Download, Mail, Github, Linkedin } from 'lucide-react';

export function Hero() {
  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume
    alert('Resume download would start here');
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-primary dark:to-darkslate pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary dark:text-white mb-4">
                Alex <span className="text-accent">Philip</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-textgray dark:text-gray-300 font-medium mb-6">
                Cloud Infra & DevOps Specialist
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                Hailing from Kerala, India, with extensive experience in Cloud and DevOps domain. 
                Specialized in Kubernetes, AWS EKS, Terraform, and CI/CD automation with proven expertise 
                in provisioning and managing cloud infrastructure across multiple environments.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleDownloadResume}
                className="bg-accent hover:bg-cyan-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>
              <button 
                onClick={handleContactClick}
                className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </button>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com" className="text-gray-500 hover:text-accent transition-colors" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="Alex Philip - DevOps Specialist" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
