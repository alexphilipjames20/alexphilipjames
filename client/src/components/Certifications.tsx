export function Certifications() {
  const certifications = [
    {
      name: 'Certified Kubernetes Administrator',
      acronym: 'CKA',
      issued: 'October 2024',
      expires: 'October 2026',
      credentialId: '1ee53149-76b8-406f-bbe5-3fcb0165022f',
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100'
    },
    {
      name: 'Certified Kubernetes Security Specialist',
      acronym: 'CKS',
      issued: 'December 2024',
      expires: 'December 2026',
      credentialId: '695c4213-6130-4390-a625-6c492489d0d2',
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100'
    },
    {
      name: 'Associate Cloud Engineer',
      acronym: 'ACE',
      issued: 'January 2024',
      expires: 'January 2027',
      credentialId: '6ab2fe60-6dad-4432-9823-2334b7a818d1',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-4">
            Professional <span className="text-accent">Certifications</span>
          </h2>
          <p className="text-textgray dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise in cloud-native technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-darkslate p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={cert.image}
                  alt={`${cert.acronym} Certification Badge`}
                  className="w-16 h-16 rounded-lg mr-4 object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-primary dark:text-white">{cert.name}</h3>
                  <p className="text-textgray dark:text-gray-300">{cert.acronym}</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Issued:</span> {cert.issued}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Expires:</span> {cert.expires}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Credential ID:</span> {cert.credentialId}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
