import React from 'react';
import { GraduationCap, MapPin, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-yotei-black text-yotei-white py-12 sm:py-20">
      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.3); }
          50% { box-shadow: 0 0 40px rgba(212, 175, 55, 0.6); }
        }
        .about-image {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yotei-gold to-yotei-cream">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <div className="about-image w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-br from-yotei-gold/20 to-yotei-gray rounded-full flex items-center justify-center border-3 border-yotei-gold/50 flex-shrink-0">
            <span className="text-6xl sm:text-7xl md:text-8xl animate-bounce" style={{ animationDuration: '3000ms' }}><img
  src="src/assets/Avatar.jpg"
  alt="Vishal Malhan"
  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-yotei-gold animate-bounce"
  style={{ animationDuration: '2s' }}
/></span>
          </div>
          <div className="flex-1">
            <p className="text-sm sm:text-base lg:text-lg mb-6 text-yotei-cream leading-relaxed">
              Recent Software Engineering graduate with strong hands-on experience in full-stack development and cloud-native application design. Passionate about building reliable, secure, and user-friendly software. Skilled in Java, React, Spring Boot, AWS, and CI/CD pipelines. Proven ability to deliver real-world projects in collaborative and fast-paced environments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-yotei-gray to-yotei-dark-gray p-4 sm:p-6 rounded-lg border border-yotei-gold/30 hover:border-yotei-gold transition-colors duration-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-yotei-gold flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-semibold text-yotei-gold">Education</h3>
                </div>
                <p className="text-sm sm:text-base text-yotei-cream mb-1">Advanced Diploma in Software Engineering Technology</p>
                <p className="text-xs sm:text-sm text-yotei-cream/70 mb-2">Centennial College, Toronto, ON</p>
                <p className="text-xs sm:text-sm text-yotei-gold font-semibold">GPA: 4.0/4.5 • Graduated April 2025</p>
              </div>
              <div className="bg-gradient-to-br from-yotei-gray to-yotei-dark-gray p-4 sm:p-6 rounded-lg border border-yotei-gold/30 hover:border-yotei-gold transition-colors duration-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-yotei-gold flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-semibold text-yotei-gold">Location</h3>
                </div>
                <p className="text-sm sm:text-base text-yotei-cream mb-3">Unionville, Ontario</p>
                <p className="text-xs sm:text-sm text-yotei-cream/70">Greater Toronto Area</p>
              </div>
              <div className="md:col-span-2 bg-gradient-to-br from-yotei-gray to-yotei-dark-gray p-4 sm:p-6 rounded-lg border border-yotei-gold/30 hover:border-yotei-gold transition-colors duration-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-yotei-gold flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-semibold text-yotei-gold">Key Strengths</h3>
                </div>
                <p className="text-xs sm:text-sm text-yotei-cream leading-relaxed">
                  Strong analytical and problem-solving abilities • Excellent communication and teamwork skills • Ability to adapt quickly in dynamic environments • Multilingual: Fluent in English, Hindi, and Punjabi • Passionate about continuous learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;