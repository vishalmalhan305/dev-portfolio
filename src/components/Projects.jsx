import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';

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
    <section id="projects" className="bg-yotei-black text-yotei-white py-12 sm:py-20">
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .project-card {
          animation: slideUp 0.6s ease-out forwards;
        }
        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.2s; }
        .project-card:nth-child(3) { animation-delay: 0.3s; }
        .project-card:hover::before {
          opacity: 1;
        }
        .project-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%);
          border-radius: 0.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yotei-gold to-yotei-cream">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-yotei-cream max-w-2xl mx-auto">
            Showcasing my expertise in full-stack development, cloud architecture, and modern web technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card relative bg-yotei-gray p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border border-yotei-gold/30 hover:border-yotei-gold hover:-translate-y-2 group">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-5 h-5 text-yotei-gold flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold text-yotei-gold group-hover:text-white transition-colors">
                  {project.title}
                </h3>
              </div>
              <p className="mb-4 text-yotei-cream text-xs sm:text-sm leading-relaxed">
                {project.description.substring(0, 150)}...
              </p>
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-yotei-gold text-xs sm:text-sm">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-gradient-to-r from-yotei-gold/80 to-yotei-gold/60 text-yotei-black px-2 sm:px-3 py-1 rounded-full text-xs font-semibold hover:from-yotei-gold hover:to-yotei-gold transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 pt-4 border-t border-yotei-gold/20">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-yotei-gold hover:text-yotei-cream transition-colors duration-300 font-semibold text-xs sm:text-sm"
                >
                  <Code2 className="w-4 h-4" /> GitHub
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-yotei-gold hover:text-yotei-cream transition-colors duration-300 font-semibold text-xs sm:text-sm"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
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