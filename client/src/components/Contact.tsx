import { useState } from 'react';
import { Mail, MapPin, Clock, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-darkslate">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-4">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-textgray dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to discuss your next DevOps project or looking for collaboration opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-primary p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-primary dark:text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white dark:bg-darkslate text-gray-900 dark:text-white transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white dark:bg-darkslate text-gray-900 dark:text-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white dark:bg-darkslate text-gray-900 dark:text-white transition-colors"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-accent hover:bg-cyan-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary dark:text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-accent/10 rounded-lg mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary dark:text-white mb-1">Email</h4>
                    <p className="text-textgray dark:text-gray-300">alexphilipjames20@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-accent/10 rounded-lg mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary dark:text-white mb-1">Location</h4>
                    <p className="text-textgray dark:text-gray-300">Kollam, Kerala, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-accent/10 rounded-lg mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary dark:text-white mb-1">Availability</h4>
                    <p className="text-textgray dark:text-gray-300">Open to new opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-primary dark:text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  className="p-3 bg-gray-100 dark:bg-primary rounded-lg text-gray-600 dark:text-gray-400 hover:text-accent hover:bg-accent/10 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="p-3 bg-gray-100 dark:bg-primary rounded-lg text-gray-600 dark:text-gray-400 hover:text-accent hover:bg-accent/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://twitter.com" 
                  className="p-3 bg-gray-100 dark:bg-primary rounded-lg text-gray-600 dark:text-gray-400 hover:text-accent hover:bg-accent/10 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
