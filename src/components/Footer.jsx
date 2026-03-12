import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-yotei-dark-gray text-yotei-white py-6 sm:py-8 border-t border-yotei-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="text-center sm:text-left">
            <p className="text-xs sm:text-sm text-yotei-cream">&copy; 2024 VISHAL MALHAN. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 text-xs sm:text-sm">
            <a href="https://linkedin.com/in/vishalmalhan" target="_blank" rel="noopener noreferrer" className="text-yotei-gold hover:text-yotei-cream transition duration-300">
              LinkedIn
            </a>
            <a href="https://github.com/vishalmalhan305" target="_blank" rel="noopener noreferrer" className="text-yotei-gold hover:text-yotei-cream transition duration-300">
              GitHub
            </a>
            <a href="mailto:vishal.malhan305@gmail.com" className="text-yotei-gold hover:text-yotei-cream transition duration-300">
              Email
            </a>
          </div>
          <button onClick={scrollToTop} className="bg-yotei-gold hover:bg-yotei-gold/90 text-yotei-black px-3 sm:px-4 py-2 rounded-lg transition duration-300 font-semibold text-xs sm:text-sm">
            Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;