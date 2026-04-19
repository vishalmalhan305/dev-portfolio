import React from 'react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="reveal"
      style={{
        textAlign: 'center', padding: '60px 24px',
        borderTop: '1px solid rgba(125,249,255,0.12)',
        background: 'rgba(8,11,20,0.97)',
        fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: '#c9d1d9',
      }}
    >
      <p style={{ fontSize: '22px', fontWeight: 700, color: '#fff', fontFamily: "'Space Grotesk',sans-serif", marginBottom: '8px' }}>
        Let's build something great.
      </p>
      <p style={{ marginBottom: '24px', color: '#c9d1d9' }}>
        I'm actively looking for my first{' '}
        <span style={{ color: '#7DF9FF' }}>Software Developer</span>
        {' '}role in Canada &amp; remote.
      </p>

      <p style={{ marginBottom: '32px' }}>
        <a
          href="mailto:vishal.malhan305@gmail.com"
          style={{ color: '#7DF9FF', textDecoration: 'none', cursor: 'none' }}
          onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
          onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
        >
          vishal.malhan305@gmail.com
        </a>
        {' '}&nbsp;·&nbsp;{' '}
        <a
          href="https://www.linkedin.com/in/vishal-malhan-21b174213/"
          target="_blank" rel="noopener noreferrer"
          style={{ color: '#7DF9FF', textDecoration: 'none', cursor: 'none' }}
          onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
          onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
        >
          LinkedIn
        </a>
        {' '}&nbsp;·&nbsp;{' '}
        <a
          href="https://github.com/vishalmalhan305"
          target="_blank" rel="noopener noreferrer"
          style={{ color: '#7DF9FF', textDecoration: 'none', cursor: 'none' }}
          onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
          onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
        >
          GitHub
        </a>
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '11px', color: '#8b949e' }}>
          Unionville, ON · Canada · Class of 2025 · GPA 4.0/4.5
        </span>
        <button
          onClick={scrollToTop}
          style={{
            background: 'rgba(125,249,255,0.08)', border: '1px solid rgba(125,249,255,0.2)',
            color: '#7DF9FF', padding: '6px 16px', borderRadius: '6px',
            fontFamily: "'JetBrains Mono',monospace", fontSize: '11px',
            cursor: 'none', transition: 'background 0.2s', letterSpacing: '1px',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(125,249,255,0.15)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(125,249,255,0.08)'}
        >
          ↑ TOP
        </button>
      </div>

      <p style={{ marginTop: '24px', fontSize: '11px', color: '#8b949e' }}>
        © 2026 Vishal Malhan
      </p>
    </footer>
  );
};

export default Footer;
