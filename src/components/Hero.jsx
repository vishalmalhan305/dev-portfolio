import React, { useState, useEffect } from 'react';
import TubesBackground from './TubesBackground';

const Hero = () => {
  const titles = ["Software Developer", "Full-Stack Developer", "Cloud Developer", "Frontend Developer"];
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout;

    if (!isDeleting && displayText.length < currentTitle.length) {
      // Typing phase - add one character every 100ms
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      }, 100);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting phase - remove one character every 50ms
      timeout = setTimeout(() => {
        setDisplayText(displayText.substring(0, displayText.length - 1));
      }, 50);
    } else if (!isDeleting && displayText === currentTitle) {
      // Pause for 1500ms before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next title in the array
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex, titles]);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="text-yotei-white min-h-screen flex items-center justify-center">
      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .cursor-blink {
          animation: blink 0.7s infinite;
          display: inline-block;
          margin-left: 2px;
        }
      `}</style>
      <TubesBackground className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yotei-white">
            VISHAL MALHAN
          </h1>
          <h2 className="text-2xl md:text-3xl mb-4 text-yotei-gold min-h-[3.5rem] md:min-h-[4rem] flex items-center justify-center">
            {displayText}
            <span className="cursor-blink">|</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 text-yotei-cream">
            Recent Software Engineering graduate with expertise in full-stack development, cloud-native applications, and modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('projects')} className="bborder-2 border-yotei-gold text-yotei-gold hover:bg-yotei-gold hover:text-yotei-black px-6 py-3 rounded-lg transition duration-300 font-semibold">
              View Projects
            </button>
            <button className="border-2 border-yotei-gold text-yotei-gold hover:bg-yotei-gold hover:text-yotei-black px-6 py-3 rounded-lg transition duration-300 font-semibold">
              Download Resume
            </button>
          </div>
        </div>
      </TubesBackground>
    </section>
  );
};

export default Hero;