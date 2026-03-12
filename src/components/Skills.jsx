import React from 'react';
import { Zap } from 'lucide-react';

const Skills = () => {
  const skills = [
    'C#', 'Java', 'JavaScript', 'Python', 'React', 'Node.js', 'Spring Boot', 'Express.js', '.NET', 'MongoDB', 'PostgreSQL', 'MySQL', 'DynamoDB', 'AWS', 'Azure', 'Git', 'Docker', 'Jira', 'Postman', 'Jenkins', 'GitHub Actions', 'OAuth', 'JWT'
  ];

  return (
    <section id="skills" className="bg-yotei-dark-gray text-yotei-white py-12 sm:py-20">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-border {
          0%, 100% { border-color: rgb(212, 175, 55, 0.3); }
          50% { border-color: rgb(212, 175, 55, 0.8); }
        }
        .skill-card {
          animation: float 3s ease-in-out infinite;
          position: relative;
          overflow: hidden;
        }
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent);
          transition: left 0.5s;
          pointer-events: none;
        }
        .skill-card:hover::before {
          left: 100%;
        }
        .skill-card:nth-child(1) { animation-delay: 0s; }
        .skill-card:nth-child(2) { animation-delay: 0.1s; }
        .skill-card:nth-child(3) { animation-delay: 0.2s; }
        .skill-card:nth-child(4) { animation-delay: 0.3s; }
        .skill-card:nth-child(5) { animation-delay: 0.1s; }
        .skill-card:nth-child(6) { animation-delay: 0.2s; }
        .skill-card:nth-child(7) { animation-delay: 0.3s; }
        .skill-card:nth-child(8) { animation-delay: 0s; }
        .skill-card:nth-child(n+9) { animation-delay: calc(0.1s * (var(--index, 0) - 8)); }
        @media (max-width: 640px) {
          .skill-card { animation-duration: 2.5s; }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-2 sm:gap-3">
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-yotei-gold" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yotei-gold to-yotei-cream">
              Core Skills
            </span>
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-yotei-gold" />
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-yotei-cream max-w-2xl mx-auto">
            Technologies and tools I specialize in for building scalable applications.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card bg-gradient-to-br from-yotei-black to-yotei-dark-gray p-3 sm:p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-yotei-gold/30 hover:border-yotei-gold/80 group cursor-pointer"
            >
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-yotei-gold group-hover:text-white transition-colors duration-300 line-clamp-2">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;