import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen,    setIsOpen]    = useState(false);
  const [scrolled,  setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navLinks = [
    { label: 'Home',       id: 'home'       },
    { label: 'About',      id: 'about'      },
    { label: 'Skills',     id: 'skills'     },
    { label: 'Projects',   id: 'projects'   },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact',    id: 'contact'    },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: '16px',
        left: '16px',
        right: '16px',
        zIndex: 50,
        background: scrolled ? 'rgba(8,11,20,0.92)' : 'rgba(8,11,20,0.7)',
        border: '1px solid rgba(125,249,255,0.12)',
        borderRadius: '14px',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        transition: 'background 0.3s',
        boxShadow: '0 0 40px rgba(125,249,255,0.04)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            style={{ fontFamily: "'JetBrains Mono', monospace", cursor: 'none', background: 'none', border: 'none', color: '#7DF9FF', fontSize: '16px', fontWeight: 700, padding: 0 }}
          >
            vm<span style={{ color: '#c9d1d9', opacity: 0.5 }}>.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                style={{ fontFamily: "'JetBrains Mono', monospace", cursor: 'none', fontSize: '13px', background: 'none', border: 'none', color: '#c9d1d9', padding: '4px 0', position: 'relative', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#7DF9FF'}
                onMouseLeave={e => e.currentTarget.style.color = '#c9d1d9'}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ cursor: 'pointer', background: 'none', border: 'none', color: '#7DF9FF', padding: '10px', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          style={{ borderTop: '1px solid rgba(125,249,255,0.08)' }}
          className="md:hidden px-4 pb-4 pt-2"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{ fontFamily: "'JetBrains Mono', monospace", cursor: 'none', fontSize: '13px', display: 'block', width: '100%', textAlign: 'left', padding: '10px 12px', borderRadius: '8px', background: 'none', border: 'none', color: '#c9d1d9', transition: 'color 0.2s, background 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#7DF9FF'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#c9d1d9'; e.currentTarget.style.background = 'none'; }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
