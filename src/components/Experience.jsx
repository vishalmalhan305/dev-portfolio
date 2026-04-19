import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const MISSIONS = [
  { status: 'active',    label: 'ACTIVE',    text: '🌌 Space Data Visualiser',  sub: 'NASA API · AWS ECS Fargate · Claude AI integration' },
  { status: 'active',    label: 'ACTIVE',    text: '💼 JobTrakr',               sub: 'Spring Boot monorepo · Full CRUD · React frontend' },
  { status: 'learning',  label: 'LEARNING',  text: '📘 TypeScript',             sub: 'Deep diving backend Node.js with strict typing' },
  { status: 'exploring', label: 'EXPLORING', text: '🤖 Local ML Models',        sub: 'Ollama + Continue.dev on MacBook Air M4' },
  { status: 'goal',      label: 'GOAL',      text: '🎯 First Dev Role',         sub: 'Canada / Remote · Available immediately' },
];

const EXPERIENCES = [
  {
    title: 'Software Developer Intern',
    company: 'Seeking Opportunities (Canada / Remote)',
    duration: 'Available immediately',
    description: 'Actively seeking my first internship or junior role in software development. Eager to bring my hands-on project experience in full-stack development and cloud computing to a professional team.',
  },
  {
    title: 'Full-Stack Developer (Academic Project)',
    company: 'E-Commerce Marketplace',
    duration: 'Jan 2024 – Apr 2024',
    description: 'Developed a scalable e-commerce platform with seller dashboards using the MERN stack. Implemented JWT authentication, Role-Based Access Control (RBAC) for 50+ users, Redux state management, and real-time order tracking.',
  },
  {
    title: 'Cloud & DevOps Engineer (Academic Project)',
    company: 'AWS Bookstore System',
    duration: 'Sep 2024 – Dec 2024',
    description: 'Designed and deployed a cloud-native bookstore using AWS Lambda, DynamoDB, and S3. Built serverless APIs, automated deployments with GitHub Actions, and ensured SOC 2/GDPR compliance.',
  },
  {
    title: 'Backend Developer (Academic Project)',
    company: 'Library Management System',
    duration: 'Sep 2024 – Dec 2024',
    description: 'Built a microservices-based system using Spring Boot WebFlux with reactive programming. Developed high-performance async REST APIs consumed by a React frontend.',
  },
];

const Experience = () => (
  <>
    {/* Missions */}
    <section id="experience" className="reveal" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <div className="section-label">04 — Status</div>
      <div style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: '#fff', marginBottom: '40px' }}>
        Current Missions
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {MISSIONS.map((m, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '110px 1fr',
              gap: '20px',
              padding: '18px 0',
              borderBottom: i < MISSIONS.length - 1 ? '1px solid rgba(125,249,255,0.08)' : 'none',
              alignItems: 'center',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(125,249,255,0.02)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <span className={`m-status ${m.status}`}>{m.label}</span>
            <div>
              <div style={{ fontSize: '15px', color: '#c9d1d9' }}>{m.text}</div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: '#8b949e', marginTop: '3px' }}>{m.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Timeline */}
    <section className="reveal" style={{ padding: '0 24px 80px', maxWidth: '1100px', margin: '0 auto' }}>
      <div className="section-label">05 — Journey</div>
      <div style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: '#fff', marginBottom: '40px' }}>
        Experience
      </div>

      <div className="timeline-container">
        <div className="timeline-line" />
        <div>
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div
                className="timeline-card"
                style={{
                  background: 'linear-gradient(135deg, rgba(13,17,23,0.9), rgba(22,27,34,0.9))',
                  padding: '24px 28px',
                  borderRadius: '12px',
                  border: '1px solid rgba(125,249,255,0.08)',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(125,249,255,0.3)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(125,249,255,0.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(125,249,255,0.08)'; e.currentTarget.style.boxShadow = ''; }}
              >
                {/* Timeline dot */}
                <div className="timeline-dot" />

                <div className="timeline-header-row">
                  <Briefcase size={18} style={{ color: '#7DF9FF', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#7DF9FF', marginBottom: '2px' }}>{exp.title}</h3>
                    <p style={{ fontSize: '14px', color: '#c9d1d9' }}>{exp.company}</p>
                  </div>
                </div>

                <div className="timeline-date-row">
                  <Calendar size={14} style={{ color: '#7DF9FF' }} />
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '12px', color: '#8b949e' }}>{exp.duration}</span>
                </div>

                <p style={{ fontSize: '14px', color: '#c9d1d9', lineHeight: 1.7 }}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Experience;
