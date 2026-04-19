import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const CONTACT_ITEMS = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'vishal.malhan305@gmail.com',
    href: 'mailto:vishal.malhan305@gmail.com',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '647-897-2953',
    href: 'tel:6478972953',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vishal-malhan',
    href: 'https://www.linkedin.com/in/vishal-malhan-21b174213/',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'github.com/vishalmalhan305',
    href: 'https://github.com/vishalmalhan305',
  },
];

const Contact = () => (
  <section id="contact" className="reveal" style={{ padding: '80px 24px', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
    <div className="section-label" style={{ textAlign: 'center' }}>06 — Connect</div>

    <p style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, color: '#fff', marginBottom: '12px', lineHeight: 1.1 }}>
      Let's build something.
    </p>
    <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '14px', color: '#8b949e', marginBottom: '48px', letterSpacing: '0.5px' }}>
      Actively looking for my first{' '}
      <span style={{ color: '#7DF9FF' }}>Software Developer</span>
      {' '}role in GTA &amp; remote.
    </p>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
      {CONTACT_ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: '14px',
            padding: '18px 20px', borderRadius: '12px',
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(125,249,255,0.1)',
            textDecoration: 'none', cursor: 'none',
            transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
            textAlign: 'left',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(125,249,255,0.35)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(125,249,255,0.08)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(125,249,255,0.1)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
        >
          <div style={{
            color: '#7DF9FF', background: 'rgba(125,249,255,0.08)',
            padding: '10px', borderRadius: '8px', flexShrink: 0,
            transition: 'background 0.2s',
          }}>
            {item.icon}
          </div>
          <div style={{ minWidth: 0 }}>
            <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: '#8b949e', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '4px' }}>
              {item.label}
            </p>
            <p style={{ fontSize: '13px', color: '#c9d1d9', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {item.value}
            </p>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Contact;
