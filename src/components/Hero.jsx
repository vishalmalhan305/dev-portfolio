import React, { useState, useEffect, lazy, Suspense } from 'react';
import ShaderBackground from './ShaderBackground';

// Lazy-load the heavy 3D scene so it doesn't block initial paint
const AvatarScene = lazy(() => import('./AvatarModel'));

const Hero = () => {
  const titles = [
    'Software Developer',
    'Full-Stack Developer',
    'Cloud Developer',
    'Frontend Developer',
  ];
  const [displayText, setDisplayText] = useState('');
  const [titleIndex,  setTitleIndex]  = useState(0);
  const [isDeleting,  setIsDeleting]  = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout;
    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 100);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 50);
    } else if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" style={{ minHeight: '100vh' }}>
      <ShaderBackground>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: 'clamp(80px,10vh,100px) clamp(16px,5vw,40px) 60px',
          maxWidth: '1200px',
          margin: '0 auto',
          gap: '40px',
        }}>

          {/* ── LEFT: text content ── */}
          <div style={{ flex: '1 1 480px', minWidth: 0 }}>
            {/* Status pill */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(0,255,100,0.08)', border: '1px solid rgba(0,255,100,0.25)',
              padding: '6px 16px', borderRadius: '999px',
              fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#4ade80',
              marginBottom: '28px', letterSpacing: '1px',
            }}>
              <span
                className="status-dot-pulse"
                style={{ width: '7px', height: '7px', background: '#4ade80', borderRadius: '50%', display: 'inline-block' }}
              />
              OPEN TO OPPORTUNITIES
            </div>

            {/* Name */}
            <h1 style={{
              fontSize: 'clamp(44px, 7vw, 96px)',
              fontWeight: 700,
              letterSpacing: '-2px',
              lineHeight: 1,
              color: '#fff',
              marginBottom: '16px',
            }}>
              Vishal<br />
              <span style={{ color: '#7DF9FF' }}>Malhan</span>
            </h1>

            {/* Typing subtitle */}
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 'clamp(13px, 2vw, 17px)',
              color: '#8b949e',
              marginBottom: '8px',
              letterSpacing: '1px',
              minHeight: '1.6em',
            }}>
              {displayText}
              <span
                className="cursor-blink-anim"
                style={{ display: 'inline-block', width: '9px', height: '17px', background: '#7DF9FF', verticalAlign: 'middle', marginLeft: '2px' }}
              />
            </p>

            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 'clamp(11px, 1.3vw, 14px)',
              color: '#8b949e',
              marginBottom: '40px',
              letterSpacing: '0.5px',
            }}>
              Full-Stack · Cloud-Native · Systems Thinker
            </p>

            {/* Hero links */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://www.linkedin.com/in/vishal-malhan-21b174213/"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '10px 20px', borderRadius: '10px',
                  background: '#0A66C2', color: '#fff',
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', fontWeight: 600,
                  textDecoration: 'none', cursor: 'none', letterSpacing: '0.5px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(10,102,194,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>

              <a
                href="https://github.com/vishalmalhan305"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '10px 20px', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(125,249,255,0.12)',
                  color: '#fff',
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', fontWeight: 600,
                  textDecoration: 'none', cursor: 'none', letterSpacing: '0.5px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(255,255,255,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                GitHub
              </a>

              <a
                href="mailto:vishal.malhan305@gmail.com"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '10px 20px', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(125,249,255,0.12)',
                  color: '#7DF9FF',
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', fontWeight: 600,
                  textDecoration: 'none', cursor: 'none', letterSpacing: '0.5px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(125,249,255,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
                Email Me
              </a>

              <button
                onClick={() => scrollTo('projects')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '10px 20px', borderRadius: '10px',
                  background: 'rgba(125,249,255,0.08)', border: '1px solid rgba(125,249,255,0.3)',
                  color: '#7DF9FF',
                  fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', fontWeight: 600,
                  cursor: 'none', letterSpacing: '0.5px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(125,249,255,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                View Projects ↓
              </button>
            </div>
          </div>

          {/* ── RIGHT: 3D avatar ── */}
          <div style={{
            flex: '0 0 420px',
            height: '580px',
            position: 'relative',
          }}
            className="hidden lg:block"
          >
            {/* Outer glow ring */}
            <div style={{
              position: 'absolute', inset: 0,
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              background: 'radial-gradient(ellipse at 50% 80%, rgba(125,249,255,0.06) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 0,
            }} />

            {/* R3F Canvas */}
            <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
              <Suspense fallback={
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'rgba(125,249,255,0.4)', letterSpacing: '2px' }}>
                  LOADING...
                </div>
              }>
                <AvatarScene />
              </Suspense>
            </div>
          </div>

        </div>

        {/* Scroll hint */}
        <div
          className="scroll-hint-bounce"
          style={{
            position: 'absolute', bottom: '28px', left: '50%',
            fontFamily: "'JetBrains Mono', monospace", fontSize: '11px',
            color: '#8b949e', letterSpacing: '2px', pointerEvents: 'none',
          }}
        >
          ▼ scroll to explore ▼
        </div>
      </ShaderBackground>
    </section>
  );
};

export default Hero;
