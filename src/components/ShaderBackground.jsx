import { useEffect, useRef } from 'react';

/**
 * Pure-CSS animated background — replaces the WebGL shader canvas.
 * Eliminates the dual-WebGL-context conflict that causes Context Lost.
 * Approximates the same dark-teal noise aesthetic using CSS radial gradients
 * + keyframe animation.
 */
const ShaderBackground = ({ children, className = '' }) => {
  const blobA = useRef(null);
  const blobB = useRef(null);
  const blobC = useRef(null);

  // Subtle mouse-parallax for the blobs (lightweight, no WebGL)
  useEffect(() => {
    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth  - 0.5) * 30;
      const ny = (e.clientY / window.innerHeight - 0.5) * 30;
      if (blobA.current) blobA.current.style.transform = `translate(${nx * 0.6}px, ${ny * 0.6}px)`;
      if (blobB.current) blobB.current.style.transform = `translate(${-nx * 0.4}px, ${-ny * 0.4}px)`;
      if (blobC.current) blobC.current.style.transform = `translate(${nx * 0.2}px, ${ny * 0.9}px)`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className={`relative ${className}`} style={{ background: '#080b14' }}>

      {/* Fixed background layer — CSS gradient blobs */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0,
        overflow: 'hidden', pointerEvents: 'none',
      }}>
        {/* Primary cyan blob */}
        <div ref={blobA} style={{
          position: 'absolute',
          top: '-10%', left: '-5%',
          width: '65vw', height: '65vw',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,80,100,0.35) 0%, transparent 70%)',
          animation: 'blobDrift1 18s ease-in-out infinite',
          willChange: 'transform',
        }} />

        {/* Secondary deep-blue blob */}
        <div ref={blobB} style={{
          position: 'absolute',
          bottom: '-15%', right: '-10%',
          width: '70vw', height: '70vw',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(10,40,90,0.4) 0%, transparent 65%)',
          animation: 'blobDrift2 22s ease-in-out infinite',
          willChange: 'transform',
        }} />

        {/* Accent cyan highlight */}
        <div ref={blobC} style={{
          position: 'absolute',
          top: '30%', left: '40%',
          width: '40vw', height: '40vw',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,120,140,0.18) 0%, transparent 60%)',
          animation: 'blobDrift3 14s ease-in-out infinite',
          willChange: 'transform',
        }} />

        {/* Fine dot-grid overlay for texture depth */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(125,249,255,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }} />
      </div>

      <style>{`
        @keyframes blobDrift1 {
          0%,100% { transform: translate(0,0)    scale(1);    }
          33%      { transform: translate(4%,6%)  scale(1.05); }
          66%      { transform: translate(-3%,2%) scale(0.97); }
        }
        @keyframes blobDrift2 {
          0%,100% { transform: translate(0,0)     scale(1);    }
          40%      { transform: translate(-5%,-3%) scale(1.08); }
          70%      { transform: translate(3%,4%)   scale(0.95); }
        }
        @keyframes blobDrift3 {
          0%,100% { transform: translate(0,0)    scale(1);    }
          50%      { transform: translate(-4%,5%) scale(1.1);  }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="blobDrift"] { animation: none !important; }
        }
      `}</style>

      {/* Page content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default ShaderBackground;
