export function Experience() {
  const experiences = [
    {
      role: 'Cloud Infra & DevOps Specialist',
      company: 'Predigle',
      duration: 'Jun 2024 - Present',
      tasks: [
        'Provision, configure, and manage multiple Kubernetes clusters on AWS EKS and on-premises OpenShift',
        'Automate infrastructure provisioning and management using Terraform & Ansible',
        'Monitoring utilizing Dynatrace in a SAAS environment for unified observability and security',
        'Leverage Azure DevOps for CI/CD integrating with custom hosted agent pools'
      ],
      isRight: false
    },
    {
      role: 'CloudOps Engineer',
      company: 'QBurst',
      duration: 'Jul 2023 - May 2024',
      tasks: [
        'Worked with multiple client projects as DevOps engineer with handover on time',
        'Documented every DevOps projects advancements & shared with respective stakeholders',
        'Round-the-clock support for outages, DR & critical maintenance of servers',
        'Managed CI/CD pipelines with multiple tools like Jenkins, Gitlab CI, Forge & Bamboo'
      ],
      isRight: true
    },
    {
      role: 'Junior DevOps Engineer',
      company: 'Equipo Health',
      duration: 'Jan 2023 - Jun 2023',
      tasks: [
        'Responsible for tech upgrade, Migration of Legacy to monolithic systems',
        'Implemented Observability stack using Prometheus, Grafana, and Alert manager for monitoring',
        'Implemented Terraform modules to use across multiple AWS environments',
        'Successfully led deployment and management of projects using agile lifecycle'
      ],
      isRight: false
    },
    {
      role: 'Trainee DevOps Engineer',
      company: 'Teknowmics',
      duration: 'Dec 2021 - Aug 2022',
      tasks: [
        'Worked with multiple flavours of Linux like RHEL, CentOS and Ubuntu for deployment',
        'Troubleshooting Production related issues on time & SLA to be followed',
        'Worked closely with Japanese clients to understand their requirements & worked accordingly',
        'Gained hands-on experience in DevOps tools and practices'
      ],
      isRight: true
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-darkslate">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-4">
            Professional <span className="text-accent">Experience</span>
          </h2>
          <p className="text-textgray dark:text-gray-300 text-lg max-w-2xl mx-auto">
            3+ years of experience in cloud infrastructure and DevOps automation across multiple domains
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent transform md:-translate-x-px"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center mb-12">
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-accent rounded-full transform md:-translate-x-2"></div>
                <div className={`ml-16 md:ml-0 ${exp.isRight ? 'md:w-1/2 md:ml-1/2 md:pl-8' : 'md:w-1/2 md:pr-8'}`}>
                  <div className="bg-gray-50 dark:bg-primary p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">{exp.role}</h3>
                    <h4 className="text-accent font-medium mb-2">{exp.company}</h4>
                    <p className="text-textgray dark:text-gray-300 text-sm mb-4">{exp.duration}</p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                      {exp.tasks.map((task, taskIndex) => (
                        <li key={taskIndex}>• {task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
