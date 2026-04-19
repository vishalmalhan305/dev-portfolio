import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, MapPin, Lightbulb } from 'lucide-react';

const profileLines = [
  { k: 'name',     v: '"Vishal Malhan"' },
  { k: 'role',     v: '"Software Developer"' },
  { k: 'school',   v: '"Centennial College"',         c: '# Advanced Diploma, Class of 2025' },
  { k: 'gpa',      v: '4.0 / 4.5' },
  { k: 'location', v: '"Unionville, ON (GTA)"' },
  { k: 'status',   v: '"Open to opportunities 🟢"' },
  { k: 'email',    v: '"vishal.malhan305@gmail.com"' },
];

const Terminal = () => {
  const [lines,   setLines]   = useState([]);
  const [running, setRunning] = useState(false);
  const timers = useRef([]);

  const replay = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setLines([]);
    setRunning(true);
    let delay = 400;
    profileLines.forEach((line) => {
      const t = setTimeout(() => {
        setLines((prev) => [...prev, line]);
      }, delay);
      timers.current.push(t);
      delay += 220 + Math.random() * 80;
    });
    const done = setTimeout(() => setRunning(false), delay + 200);
    timers.current.push(done);
  };

  useEffect(() => {
    replay();
    return () => timers.current.forEach(clearTimeout);
  }, []);

  return (
    <div style={{ background: '#0d1117', border: '1px solid rgba(125,249,255,0.12)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 0 60px rgba(125,249,255,0.04)', marginBottom: '40px' }}>
      {/* Terminal bar */}
      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid rgba(125,249,255,0.08)' }}>
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#8b949e', margin: '0 auto' }}>bash — vishal@macbook</span>
        <button
          onClick={replay}
          style={{ background: 'transparent', border: '1px solid rgba(125,249,255,0.12)', color: '#7DF9FF', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', padding: '5px 12px', borderRadius: '6px', cursor: 'none', letterSpacing: '1px', transition: 'all 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(125,249,255,0.08)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          ↺ re-run
        </button>
      </div>
      {/* Terminal body */}
      <div className="terminal-body" style={{ padding: 'clamp(16px,4vw,28px) clamp(16px,4vw,32px)' }}>
        <div>
          <span className="t-prompt">vishal@dev:~$</span>{' '}
          <span className="t-cmd">cat profile.yaml</span>
        </div>
        <div style={{ marginTop: '14px' }}>
          {lines.map((line, i) => (
            <div key={i}>
              <span className="t-key">{line.k}</span>
              <span style={{ color: '#8b949e' }}>: </span>
              <span className="t-str">{line.v}</span>
              {line.c && <span className="t-comment"> {line.c}</span>}
            </div>
          ))}
          {running && (
            <span
              className="cursor-blink-anim"
              style={{ display: 'inline-block', width: '9px', height: '17px', background: '#7DF9FF', verticalAlign: 'middle' }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const About = () => (
  <section id="about" className="reveal" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
    <div className="section-label">01 — Identity</div>
    <div style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: '#fff', marginBottom: '40px' }}>
      whoami
    </div>

    <Terminal />

    {/* Info cards */}
    <div className="flex flex-col md:flex-row items-start gap-8">
      <div className="flex-1">
        <p style={{ fontSize: '15px', color: '#c9d1d9', lineHeight: 1.7, marginBottom: '24px' }}>
          Recent Software Engineering graduate with strong hands-on experience in full-stack development and cloud-native application design. Passionate about building reliable, secure, and user-friendly software. Skilled in Java, React, Spring Boot, AWS, and CI/CD pipelines.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: <GraduationCap size={18} style={{ color: '#7DF9FF', flexShrink: 0 }} />,
              title: 'Education',
              lines: ['Advanced Diploma in Software Engineering Technology', 'Centennial College, Toronto, ON', 'GPA: 4.0/4.5 · Graduated April 2025'],
              boldLast: true,
            },
            {
              icon: <MapPin size={18} style={{ color: '#7DF9FF', flexShrink: 0 }} />,
              title: 'Location',
              lines: ['Unionville, Ontario', 'Greater Toronto Area · Available immediately'],
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{ background: '#0d1117', padding: '20px', borderRadius: '12px', border: '1px solid rgba(125,249,255,0.1)', transition: 'border-color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(125,249,255,0.35)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(125,249,255,0.1)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                {card.icon}
                <span style={{ fontWeight: 600, color: '#7DF9FF', fontSize: '15px' }}>{card.title}</span>
              </div>
              {card.lines.map((l, i) => (
                <p key={i} style={{ fontSize: i === card.lines.length - 1 && card.boldLast ? '12px' : '13px', color: i === card.lines.length - 1 && card.boldLast ? '#7DF9FF' : i === card.lines.length - 1 ? '#8b949e' : '#c9d1d9', marginBottom: '4px', fontWeight: i === card.lines.length - 1 && card.boldLast ? 600 : 400 }}>
                  {l}
                </p>
              ))}
            </div>
          ))}

          <div
            className="col-span-1 md:col-span-2"
            style={{ background: '#0d1117', padding: '20px', borderRadius: '12px', border: '1px solid rgba(125,249,255,0.1)', transition: 'border-color 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(125,249,255,0.35)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(125,249,255,0.1)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Lightbulb size={18} style={{ color: '#7DF9FF', flexShrink: 0 }} />
              <span style={{ fontWeight: 600, color: '#7DF9FF', fontSize: '15px' }}>Key Strengths</span>
            </div>
            <p style={{ fontSize: '13px', color: '#c9d1d9', lineHeight: 1.7 }}>
              Strong analytical and problem-solving abilities · Excellent communication and teamwork · Adapts quickly in dynamic environments · Multilingual: English, Hindi, Punjabi · Passionate about continuous learning
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
