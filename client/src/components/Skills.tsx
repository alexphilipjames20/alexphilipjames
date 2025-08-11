import { Cloud, Server, RefreshCw, Code, BarChart3, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 5 },
      { name: 'Google Cloud', level: 4 },
      { name: 'Azure', level: 3 },
    ]
  },
  {
    title: 'Containerization',
    icon: Server,
    skills: ['Docker', 'Kubernetes', 'Docker Compose', 'Helm Charts']
  },
  {
    title: 'CI/CD',
    icon: RefreshCw,
    skills: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'ArgoCD']
  },
  {
    title: 'Infrastructure as Code',
    icon: Code,
    skills: ['Terraform', 'AWS CloudFormation', 'Ansible', 'Pulumi']
  },
  {
    title: 'Monitoring & Security',
    icon: BarChart3,
    skills: ['Prometheus & Grafana', 'ELK Stack', 'SonarQube', 'HashiCorp Vault']
  },
  {
    title: 'Programming',
    icon: Terminal,
    skills: ['Python', 'Bash/Shell', 'Go', 'YAML/JSON']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-darkslate">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-4">
            Technical <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-textgray dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive experience across the entire DevOps lifecycle with modern tools and platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-primary p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-accent/10 rounded-lg mr-4">
                  <category.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    {typeof skill === 'object' ? (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < skill.level ? 'bg-accent' : 'bg-gray-300 dark:bg-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
