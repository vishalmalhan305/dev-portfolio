import React, { useState } from 'react';

const PROJECTS = [
  {
    emoji: '🌌',
    name: 'Space Data Visualiser',
    tags: ['Spring Boot', 'Three.js', 'AWS ECS', 'Gemini AI'],
    desc: '3D asteroid orbit visualization with NASA API, D3.js charts, Redis caching pipeline.',
    highlight: '↗ Gemini AI explainer integration',
    github: 'https://github.com/vishalmalhan305/space-visualiser',
  },
  
  {
    emoji: '☁️',
    name: 'AWS Bookstore',
    tags: ['Lambda', 'DynamoDB', 'S3', 'GitHub Actions'],
    desc: 'Serverless RESTful APIs with IAM least-privilege, SOC 2/GDPR compliant architecture.',
    highlight: '↗ 99.99% uptime serverless',
    github: 'https://github.com/vishalmalhan305/OnlineBookstoreManagementAPI',
  },
  {
    emoji: '💼',
    name: 'JobTrakr (Pending Deployment)',
    tags: ['Spring Boot', 'React', 'PostgreSQL'],
    desc: 'Full job application tracking app, monorepo architecture, branch-protected GitHub workflow.',
    highlight: '↗ Full CRUD + React frontend',
    github: 'https://github.com/vishalmalhan305/jobtrakr',
  },
  {
    emoji: '🛒',
    name: 'E-Commerce Marketplace',
    tags: ['MERN', 'Redux', 'JWT'],
    desc: 'Real-time order tracking, RBAC for 50+ users, 30% faster load times achieved.',
    highlight: '↗ Full MERN stack',
    github: 'https://github.com/vishalmalhan305/Student_Ecommerce',
  },
];

const FlipCard = ({ p }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="flip-card" onClick={() => setFlipped(f => !f)}>
      <div className={`flip-card-inner${flipped ? ' flipped' : ''}`}>
            {/* Front */}
            <div className="flip-card-front">
              <div>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{p.emoji}</div>
                <div style={{ fontSize: '17px', fontWeight: 700, color: '#fff' }}>{p.name}</div>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '8px' }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "'JetBrains Mono',monospace", fontSize: '10px',
                      padding: '3px 8px', borderRadius: '4px',
                      background: 'rgba(125,249,255,0.08)', color: '#7DF9FF',
                      border: '1px solid rgba(125,249,255,0.15)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {/* Back */}
            <div className="flip-card-back">
              <p style={{ fontSize: '13px', color: '#c9d1d9', lineHeight: 1.6 }}>{p.desc}</p>
              <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '12px', color: '#7DF9FF' }}>{p.highlight}</p>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontFamily: "'JetBrains Mono',monospace", fontSize: '12px',
                  color: '#fff', textDecoration: 'none',
                  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(125,249,255,0.2)',
                  padding: '6px 12px', borderRadius: '6px', marginTop: '4px',
                  transition: 'background 0.2s', cursor: 'pointer',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(125,249,255,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                onClick={e => e.stopPropagation()}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                View on GitHub
              </a>
            </div>
      </div>
    </div>
  );
};

const Projects = () => (
  <section id="projects" className="reveal" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
    <div className="section-label">03 — Shipped</div>
    <div style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: '#fff', marginBottom: '48px' }}>
      Featured Projects{' '}
      <span style={{ fontSize: '16px', color: '#8b949e', fontWeight: 400 }}>— tap to flip</span>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
      {PROJECTS.map((p) => <FlipCard key={p.name} p={p} />)}
    </div>
  </section>
);

export default Projects;
