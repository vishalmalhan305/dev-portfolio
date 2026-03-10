import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-yotei-black text-yotei-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-yotei-gold">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 bg-yotei-gray rounded-full flex items-center justify-center border-2 border-yotei-gold">
            <span className="text-6xl">👤</span>
          </div>
          <div className="flex-1">
            <p className="text-lg mb-4 text-yotei-cream">
              Recent Software Engineering graduate with strong hands-on experience in full-stack development and cloud-native application design. Passionate about building reliable, secure, and user-friendly software. Skilled in Java, React, Spring Boot, AWS, and CI/CD pipelines. Proven ability to deliver real-world projects in collaborative and fast-paced environments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-yotei-gold">Education</h3>
                <p>Advanced Diploma in Software Engineering Technology</p>
                <p>Centennial College, Toronto, ON | April 2025</p>
                <p>GPA: 4.0/4.5</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-yotei-gold">Location</h3>
                <p className="text-yotei-cream">Unionville, ON</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-2 text-yotei-gold">Interests</h3>
                <p className="text-yotei-cream">Strong analytical and problem-solving abilities, Excellent communication and teamwork skills, Ability to adapt quickly in dynamic environments, Multilingual: Fluent in English, Hindi, and Punjabi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;