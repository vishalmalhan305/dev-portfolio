import React from 'react';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';

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
    <section id="experience" className="bg-yotei-dark-gray text-yotei-white py-12 sm:py-20">
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .timeline-item {
          animation: slideIn 0.6s ease-out forwards;
        }
        .timeline-item:nth-child(1) { animation-delay: 0.1s; }
        .timeline-item:nth-child(2) { animation-delay: 0.2s; }
        .timeline-item:nth-child(3) { animation-delay: 0.3s; }
        .timeline-marker {
          position: absolute;
          left: -42px;
          top: 24px;
          width: 24px;
          height: 24px;
          background: rgb(212, 175, 55);
          border: 3px solid rgb(15, 15, 15);
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        @media (max-width: 640px) {
          .timeline-marker { left: -28px; width: 18px; height: 18px; border-width: 2px; top: 20px; }
          .timeline-line { left: 0px; }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yotei-gold to-yotei-cream">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-yotei-cream max-w-2xl mx-auto">
            My journey building innovative solutions through hands-on project experience.
          </p>
        </div>
        <div className="space-y-4 sm:space-y-6 relative">
          <div className="timeline-line absolute left-[6px] sm:left-[6px] top-0 bottom-0 w-[2px] bg-yotei-gold/30"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item relative ml-8 sm:ml-12 bg-gradient-to-r from-yotei-black to-yotei-dark-gray p-4 sm:p-8 rounded-lg shadow-lg hover:shadow-2xl border border-yotei-gold/30 hover:border-yotei-gold/80 transition-all duration-300 group">
              <div className="timeline-marker bg-yotei-gold group-hover:bg-yotei-cream group-hover:scale-125 transition-all"></div>
              
              <div className="flex items-start justify-between mb-4 flex-col sm:flex-row">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-yotei-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-yotei-gold group-hover:text-white transition-colors">
                      {exp.title}
                    </h3>
                    <h4 className="text-sm sm:text-lg text-yotei-cream">{exp.company}</h4>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-yotei-cream/70 text-xs sm:text-sm mb-4">
                <Calendar className="w-4 h-4 text-yotei-gold flex-shrink-0" />
                {exp.duration}
              </div>
              
              <p className="text-xs sm:text-base text-yotei-cream leading-relaxed">
                {exp.description}
              </p>
              
              <div className="mt-4 flex items-center gap-2 text-yotei-gold font-semibold text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;