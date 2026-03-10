import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Project-based: E-Commerce Marketplace',
      duration: 'Jan 2024 – Apr 2024',
      description: 'Developed a scalable e-commerce platform with seller dashboards using MERN stack. Implemented JWT authentication, role-based access control, Redux state management, and real-time order tracking features.'
    },
    {
      title: 'Cloud & DevOps Engineer',
      company: 'Project-based: AWS Bookstore System',
      duration: 'Sep 2024 – Dec 2024',
      description: 'Designed and deployed a cloud-native bookstore using AWS Lambda, DynamoDB, and S3. Built serverless APIs, automated deployments with GitHub Actions, and ensured SOC 2/GDPR compliance.'
    },
    {
      title: 'Full-Stack Developer',
      company: 'Course Project: Library Management System',
      duration: 'Sep 2024 – Dec 2024',
      description: 'Built a microservices-based system using Spring Boot WebFlux with reactive programming. Developed REST APIs and integrated a React frontend for managing book records.'
    }
  ];

  return (
    <section id="experience" className="bg-yotei-dark-gray text-yotei-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-yotei-gold">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-yotei-black p-6 rounded-lg shadow-lg border-l-4 border-yotei-gold">
              <h3 className="text-2xl font-semibold text-yotei-gold">{exp.title}</h3>
              <h4 className="text-xl mb-2">{exp.company}</h4>
              <p className="text-yotei-cream mb-4">{exp.duration}</p>
              <p className="text-yotei-cream">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;