import React, { useEffect, useRef } from 'react';

const SKILLS = [
  { name: 'Java',        color: '#f89820' },
  { name: 'TypeScript',  color: '#3178c6' },
  { name: 'JavaScript',  color: '#f7df1e' },
  { name: 'Python',      color: '#3776ab' },
  { name: 'C#',          color: '#9b4993' },
  { name: 'Spring Boot', color: '#6db33f' },
  { name: 'React',       color: '#61dafb' },
  { name: 'Node.js',     color: '#339933' },
  { name: 'Express',     color: '#999999' },
  { name: '.NET',        color: '#512bd4' },
  { name: 'AWS',         color: '#ff9900' },
  { name: 'Azure',       color: '#0078d4' },
  { name: 'Docker',      color: '#2496ed' },
  { name: 'PostgreSQL',  color: '#336791' },
  { name: 'MongoDB',     color: '#47a248' },
  { name: 'Redis',       color: '#dc382d' },
  { name: 'Three.js',    color: '#049ef4' },
  { name: 'D3.js',       color: '#f9a03c' },
  { name: 'Git',         color: '#f05032' },
  { name: 'GH Actions',  color: '#2088ff' },
];

/* ── Desktop: physics canvas ── */
const SkillsCanvas = () => {
  const canvasRef = useRef(null);
  const wrapRef   = useRef(null);
  const stateRef  = useRef({ orbs: [], W: 0, H: 0, dragIdx: -1, dragOffX: 0, dragOffY: 0, mouseVX: 0, mouseVY: 0, prevMX: 0, prevMY: 0, localMX: 0, localMY: 0 });
  const rafRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap   = wrapRef.current;
    const ctx    = canvas.getContext('2d');
    const s      = stateRef.current;

    const initOrbs = () => {
      s.orbs = SKILLS.map((sk) => {
        const r = 36 + Math.random() * 14;
        return {
          x: r + Math.random() * (s.W - 2 * r),
          y: r + Math.random() * (s.H - 2 * r),
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          r, name: sk.name, color: sk.color,
          scale: 1, targetScale: 1, grabbed: false,
        };
      });
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      s.W = canvas.width  = rect.width;
      s.H = canvas.height = rect.height;
      initOrbs();
    };

    const onMouseDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left, y = e.clientY - rect.top;
      for (let i = s.orbs.length - 1; i >= 0; i--) {
        const o = s.orbs[i];
        if (Math.hypot(x - o.x, y - o.y) < o.r + 4) {
          s.dragIdx = i; s.dragOffX = x - o.x; s.dragOffY = y - o.y;
          o.grabbed = true; o.vx = 0; o.vy = 0;
          break;
        }
      }
    };
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left, y = e.clientY - rect.top;
      s.mouseVX = x - s.prevMX; s.mouseVY = y - s.prevMY;
      s.prevMX = x; s.prevMY = y; s.localMX = x; s.localMY = y;
      if (s.dragIdx >= 0) { s.orbs[s.dragIdx].x = x - s.dragOffX; s.orbs[s.dragIdx].y = y - s.dragOffY; }
      s.orbs.forEach(o => { o.targetScale = Math.hypot(x - o.x, y - o.y) < o.r * 1.4 ? 1.15 : 1; });
    };
    const onMouseUp = () => {
      if (s.dragIdx >= 0) {
        s.orbs[s.dragIdx].vx = s.mouseVX * 0.7;
        s.orbs[s.dragIdx].vy = s.mouseVY * 0.7;
        s.orbs[s.dragIdx].grabbed = false;
        s.dragIdx = -1;
      }
    };

    const getTouch = (e) => {
      const rect = canvas.getBoundingClientRect();
      return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
    };
    const onTouchStart = (e) => {
      e.preventDefault();
      const { x, y } = getTouch(e);
      for (let i = s.orbs.length - 1; i >= 0; i--) {
        const o = s.orbs[i];
        if (Math.hypot(x - o.x, y - o.y) < o.r + 12) {
          s.dragIdx = i; s.dragOffX = x - o.x; s.dragOffY = y - o.y;
          o.grabbed = true; o.vx = 0; o.vy = 0;
          break;
        }
      }
    };
    const onTouchMove = (e) => {
      e.preventDefault();
      const { x, y } = getTouch(e);
      s.mouseVX = x - s.prevMX; s.mouseVY = y - s.prevMY;
      s.prevMX = x; s.prevMY = y; s.localMX = x; s.localMY = y;
      if (s.dragIdx >= 0) { s.orbs[s.dragIdx].x = x - s.dragOffX; s.orbs[s.dragIdx].y = y - s.dragOffY; }
    };
    const onTouchEnd = () => {
      if (s.dragIdx >= 0) {
        s.orbs[s.dragIdx].vx = s.mouseVX * 0.7;
        s.orbs[s.dragIdx].vy = s.mouseVY * 0.7;
        s.orbs[s.dragIdx].grabbed = false;
        s.dragIdx = -1;
      }
    };

    canvas.addEventListener('mousedown',  onMouseDown);
    canvas.addEventListener('mousemove',  onMouseMove);
    canvas.addEventListener('mouseup',    onMouseUp);
    canvas.addEventListener('touchstart', onTouchStart, { passive: false });
    canvas.addEventListener('touchmove',  onTouchMove,  { passive: false });
    canvas.addEventListener('touchend',   onTouchEnd);
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, s.W, s.H);
      ctx.strokeStyle = 'rgba(125,249,255,0.03)'; ctx.lineWidth = 1;
      for (let x = 0; x < s.W; x += 60) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,s.H); ctx.stroke(); }
      for (let y = 0; y < s.H; y += 60) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(s.W,y); ctx.stroke(); }

      s.orbs.forEach((o, i) => {
        if (!o.grabbed) {
          o.vx *= 0.985; o.vy *= 0.985;
          o.x += o.vx;   o.y += o.vy;
          if (o.x - o.r < 0)   { o.x = o.r;       o.vx =  Math.abs(o.vx) * 0.8; }
          if (o.x + o.r > s.W) { o.x = s.W - o.r;  o.vx = -Math.abs(o.vx) * 0.8; }
          if (o.y - o.r < 0)   { o.y = o.r;       o.vy =  Math.abs(o.vy) * 0.8; }
          if (o.y + o.r > s.H) { o.y = s.H - o.r;  o.vy = -Math.abs(o.vy) * 0.8; }
          for (let j = i + 1; j < s.orbs.length; j++) {
            const b = s.orbs[j];
            const dx = b.x - o.x, dy = b.y - o.y, dist = Math.hypot(dx, dy);
            const minD = o.r + b.r + 4;
            if (dist < minD && dist > 0.1) {
              const nx = dx/dist, ny = dy/dist, push = (minD-dist)*0.5;
              o.x -= nx*push; o.y -= ny*push; b.x += nx*push; b.y += ny*push;
              const relV = (o.vx-b.vx)*nx + (o.vy-b.vy)*ny;
              if (relV > 0) { o.vx -= relV*nx; o.vy -= relV*ny; b.vx += relV*nx; b.vy += relV*ny; }
            }
          }
        }
        o.scale += (o.targetScale - o.scale) * 0.15;
        ctx.save();
        ctx.translate(o.x, o.y);
        ctx.scale(o.scale, o.scale);
        const grad = ctx.createRadialGradient(0,0,o.r*0.2, 0,0,o.r*1.5);
        grad.addColorStop(0, o.color+'30'); grad.addColorStop(1, 'transparent');
        ctx.beginPath(); ctx.arc(0,0,o.r*1.5,0,Math.PI*2); ctx.fillStyle=grad; ctx.fill();
        ctx.beginPath(); ctx.arc(0,0,o.r,0,Math.PI*2);
        ctx.fillStyle='rgba(13,17,23,0.85)'; ctx.fill();
        ctx.strokeStyle=o.color+'aa'; ctx.lineWidth=1.5; ctx.stroke();
        ctx.fillStyle='#fff';
        ctx.font=`600 ${Math.max(9,o.r*0.32)}px 'JetBrains Mono',monospace`;
        ctx.textAlign='center'; ctx.textBaseline='middle';
        ctx.fillText(o.name,0,0);
        ctx.restore();
      });
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('mousedown',  onMouseDown);
      canvas.removeEventListener('mousemove',  onMouseMove);
      canvas.removeEventListener('mouseup',    onMouseUp);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove',  onTouchMove);
      canvas.removeEventListener('touchend',   onTouchEnd);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div ref={wrapRef} style={{ position: 'relative', border: '1px solid rgba(125,249,255,0.12)', borderRadius: '16px', background: 'rgba(0,0,0,0.3)', overflow: 'hidden', height: '380px' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%', touchAction: 'none' }} />
      <div style={{ position: 'absolute', bottom: '16px', right: '20px', fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: '#8b949e', letterSpacing: '1px', pointerEvents: 'none' }}>
        DRAG · FLING
      </div>
    </div>
  );
};

/* ── Mobile: clean pill grid ── */
const SkillsPills = () => (
  <div style={{
    display: 'flex', flexWrap: 'wrap', gap: '10px',
    padding: '24px', borderRadius: '16px',
    border: '1px solid rgba(125,249,255,0.12)',
    background: 'rgba(0,0,0,0.3)',
  }}>
    {SKILLS.map((sk) => (
      <span
        key={sk.name}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '12px', fontWeight: 600,
          padding: '7px 14px', borderRadius: '999px',
          border: `1px solid ${sk.color}55`,
          background: `${sk.color}12`,
          color: '#e6edf3',
          letterSpacing: '0.3px',
          whiteSpace: 'nowrap',
        }}
      >
        {sk.name}
      </span>
    ))}
  </div>
);

const Skills = () => (
  <section id="skills" className="reveal" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
    <div className="section-label">02 — Arsenal</div>
    <div style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
      Tech Stack{' '}
      <span className="hidden md:inline" style={{ fontSize: '16px', color: '#8b949e', fontWeight: 400 }}>— drag to fling 'em</span>
    </div>
    <p className="hidden md:block" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '13px', color: '#8b949e', marginBottom: '24px' }}>
      Interact with the playground below
    </p>
    <p className="md:hidden" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '13px', color: '#8b949e', marginBottom: '24px' }}>
      Technologies I work with
    </p>

    {/* Physics canvas — desktop only */}
    <div className="hidden md:block">
      <SkillsCanvas />
    </div>

    {/* Pill grid — mobile only */}
    <div className="md:hidden">
      <SkillsPills />
    </div>
  </section>
);

export default Skills;
