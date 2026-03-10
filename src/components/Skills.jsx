import React from 'react';

const Skills = () => {
  const skills = [
    'C#', 'Java', 'JavaScript', 'Python', 'React', 'Node.js', 'Spring Boot', 'Express.js', '.NET', 'MongoDB', 'PostgreSQL', 'MySQL', 'DynamoDB', 'AWS', 'Azure', 'Git', 'Docker', 'Jira', 'Postman', 'Jenkins', 'GitHub Actions', 'OAuth', 'JWT'
  ];

  return (
    <section id="skills" className="bg-yotei-dark-gray text-yotei-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-yotei-gold">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-yotei-black p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300 text-center border border-yotei-gold/40 hover:border-yotei-gold hover:bg-yotei-gray">
              <h3 className="text-xl font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;