import React from 'react';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-yotei-black text-yotei-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yotei-white">
          VISHAL MALHAN
        </h1>
        <h2 className="text-2xl md:text-3xl mb-4 text-yotei-gold">
          Software Developer
        </h2>
        <p className="text-lg md:text-xl mb-8 text-yotei-cream">
          Recent Software Engineering graduate with expertise in full-stack development, cloud-native applications, and modern web technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => scrollToSection('projects')} className="bg-yotei-gold hover:bg-yotei-red text-yotei-black hover:text-white px-6 py-3 rounded-lg transition duration-300 font-semibold">
            View Projects
          </button>
          <button className="border-2 border-yotei-gold text-yotei-gold hover:bg-yotei-gold hover:text-yotei-black px-6 py-3 rounded-lg transition duration-300 font-semibold">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;