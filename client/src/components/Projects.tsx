import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      name: 'LowCode Application',
      description: 'This low code app aims to be a cutting-edge platform for Enterprise Application Development and Content Management. The DMS module ensures secure access, sharing, and control of content across various devices. It provides policy-based content archival for long-term document retention needs.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
      technologies: ['AWS EC2', 'S3', 'SES', 'IAM', 'RDS', 'EBS', 'Python', 'React'],
      githubUrl: 'https://github.com',
      demoUrl: '#'
    },
    {
      name: 'Health Care App',
      description: 'The scope of the project allows providers to significantly improve clinical and financial performance in value-based and risk-based reimbursement models. This is achieved through smart care coordination, patient engagement, advanced data management, and analytics.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
      technologies: ['AWS EC2', 'S3', 'SES', 'IAM', 'RDS', 'EBS', 'EFS', 'VPC', 'CloudFront', 'QuickSight', 'Python', 'React', 'PHP'],
      githubUrl: 'https://github.com',
      demoUrl: '#'
    },
    {
      name: 'Crowdfunding Application',
      description: 'A comprehensive crowdfunding platform hosted on AWS utilizing the latest DevOps technologies including Kubernetes for container orchestration. Built with modern cloud-native architecture to handle scalable funding campaigns.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300',
      technologies: ['AWS', 'Kubernetes', 'Docker', 'CI/CD', 'DevOps'],
      githubUrl: 'https://github.com',
      demoUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-textgray dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Real-world implementations showcasing modern DevOps practices and cloud-native solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-darkslate rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <img 
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl} 
                    className="text-accent hover:text-cyan-400 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.demoUrl} 
                    className="text-accent hover:text-cyan-400 transition-colors"
                    aria-label="View demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
