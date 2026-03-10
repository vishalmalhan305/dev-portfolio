import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Marketplace with Seller Dashboard',
      description: 'Developed a scalable e-commerce platform with seller dashboards using MongoDB, Express.js, React, and Node.js (MERN). Secured user authentication with JWT and implemented role-based access control for over 50 users. Integrated Redux for state management, improving frontend responsiveness and reducing load times by 30%. Built a real-time order tracking feature, reducing customer inquiry calls by 40% and increasing engagement by 15%.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Redux'],
      github: 'https://github.com/vishalmalhan305/ecommerce-marketplace',
      demo: 'https://ecommerce-marketplace-demo.com'
    },
    {
      title: 'AWS-Powered Online Bookstore Management',
      description: 'Designed and deployed a cloud-native bookstore system using AWS Lambda, DynamoDB, and S3, ensuring 99.99% uptime for 1,000+ users. Built RESTful serverless APIs with sub-second latency, supporting 1,000+ monthly transactions. Automated deployments using GitHub Actions, cutting release time by 50%. Enforced IAM least-privilege policies and encrypted sensitive data to ensure SOC 2/GDPR compliance.',
      technologies: ['AWS Lambda', 'DynamoDB', 'S3', 'GitHub Actions', 'IAM'],
      github: 'https://github.com/vishalmalhan305/aws-bookstore',
      demo: 'https://aws-bookstore-demo.com'
    },
    {
      title: 'Library Management System with Spring Boot',
      description: 'Built a microservices-based system using Spring Boot WebFlux with reactive programming for asynchronous CRUD operations. Developed REST APIs with Mono and Flux for efficient handling of concurrent user activity. Integrated a React frontend for managing book records with seamless CORS and routing. Delivered responsive UI consuming WebFlux APIs hosted on a local Spring Boot server.',
      technologies: ['Spring Boot', 'WebFlux', 'React', 'REST APIs', 'CORS'],
      github: 'https://github.com/vishalmalhan305/library-management',
      demo: 'https://library-management-demo.com'
    }
  ];

  return (
    <section id="projects" className="bg-yotei-black text-yotei-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-yotei-gold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-yotei-gray p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300 border border-yotei-gold/30 hover:border-yotei-gold">
              <h3 className="text-2xl font-semibold mb-4 text-yotei-gold">{project.title}</h3>
              <p className="mb-4 text-yotei-cream">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-yotei-gold">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-yotei-red text-yotei-white px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-yotei-gold hover:text-yotei-red transition duration-300">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-yotei-gold hover:text-yotei-red transition duration-300">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;