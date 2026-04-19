import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations, OrbitControls, Environment, Html, useProgress } from '@react-three/drei';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ textAlign: 'center', fontFamily: "'JetBrains Mono', monospace" }}>
        <div style={{
          width: '110px', height: '2px',
          background: 'rgba(125,249,255,0.15)', borderRadius: '2px',
          marginBottom: '8px', overflow: 'hidden',
        }}>
          <div style={{
            height: '100%', width: `${progress}%`,
            background: '#7DF9FF', transition: 'width 0.2s ease',
            boxShadow: '0 0 6px #7DF9FF',
          }} />
        </div>
        <span style={{ fontSize: '11px', color: 'rgba(125,249,255,0.6)', letterSpacing: '2px' }}>
          {progress.toFixed(0)}%
        </span>
      </div>
    </Html>
  );
}

function Avatar() {
  const { scene, animations } = useGLTF('/AvaterModel.glb');
  const group = useRef();

  const { actions, names } = useAnimations(animations, group);
  useEffect(() => {
    if (!names.length) return;
    const clip = actions[names[0]];
    if (clip) clip.reset().fadeIn(0.4).play();
    return () => { if (clip) clip.fadeOut(0.4); };
  }, [actions, names]);

  return (
    <group ref={group}>
      <primitive object={scene} position={[0, -1.1, 0]} />
    </group>
  );
}

useGLTF.preload('/AvaterModel.glb');

const AvatarScene = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const dpr = typeof window !== 'undefined'
    ? Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5)
    : 1;

  /* Pause renders when tab is hidden */
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const onVis = () => setVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  /* Context loss recovery: unmount → wait → remount with a new key.
     This frees the GPU context slot so the next mount gets a fresh one.
     Auto-retries without user interaction. */
  const [canvasKey, setCanvasKey]   = useState(0);
  const [recovering, setRecovering] = useState(false);

  const handleCreated = ({ gl }) => {
    gl.domElement.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
      setRecovering(true);
      setTimeout(() => {
        setRecovering(false);
        setCanvasKey((k) => k + 1);   // remount Canvas with fresh context
      }, 600);
    });
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {recovering && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'JetBrains Mono', monospace", fontSize: '11px',
          color: 'rgba(125,249,255,0.35)', letterSpacing: '2px',
        }}>
          [ RECOVERING… ]
        </div>
      )}

      {!recovering && (
      <Canvas
        key={canvasKey}
        frameloop={visible ? 'always' : 'never'}
        camera={{ position: [0, 0.6, 2.8], fov: 42 }}
        gl={{ alpha: true, antialias: !isMobile, powerPreference: 'high-performance' }}
        dpr={dpr}
        style={{ background: 'transparent' }}
        performance={{ min: 0.5 }}
        onCreated={handleCreated}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 4, 3]} intensity={1.2} />
        <directionalLight position={[-2, 1, -1]} intensity={0.3} color="#7DF9FF" />
        <Environment preset="city" />

        <Suspense fallback={<Loader />}>
          <Avatar />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.55}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
          target={[0, 0.3, 0]}
        />
      </Canvas>
      )}
    </div>
  );
};

export default AvatarScene;
