import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-yotei-black text-yotei-white sticky top-0 z-50 shadow-lg border-b border-yotei-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-yotei-gold">VISHAL MALHAN</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => scrollToSection('home')} className="hover:text-yotei-gold transition duration-300">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-yotei-gold transition duration-300">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-yotei-gold transition duration-300">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-yotei-gold transition duration-300">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-yotei-gold transition duration-300">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-yotei-gold transition duration-300">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;