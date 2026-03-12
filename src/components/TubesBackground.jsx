import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../utils/cn';

// Helper for random colors - generates colors from a curated palette
const randomNeonColors = (count = 3) => {
  // Gold/cream neon palette that matches the design system
  const palette = [
    '#FFD700', // Gold
    '#FFA500', // Orange
    '#FF6347', // Tomato/Red
    '#FFE4B5', // Moccasin/Cream
    '#F0E68C', // Khaki
    '#EE82EE', // Violet
    '#FF1493', // Deep Pink
  ];
  
  const colors = [];
  for (let i = 0; i < count; i++) {
    colors.push(palette[Math.floor(Math.random() * palette.length)]);
  }
  return colors;
};

export function TubesBackground({ 
  children, 
  className,
  enableClickInteraction = true 
}) {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const tubesRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    let cleanup;

    const initTubes = async () => {
      if (!canvasRef.current) return;

      try {
        // Load the Three.js Tubes component from CDN
        const module = await import(
          'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js'
        );
        const TubesCursor = module.default;

        if (!mounted) return;

        // Initialize with gold/cream color scheme
        const app = TubesCursor(canvasRef.current, {
          tubes: {
            // Initial tube colors - warm gold/cream palette
            colors: ['#FFD700', '#FFA500', '#FF6347'],
            lights: {
              intensity: 200,
              colors: ['#FFE4B5', '#FFA500', '#FF1493', '#FFD700']
            }
          }
        });

        tubesRef.current = app;
        setIsLoaded(true);

        // Handle window resize
        const handleResize = () => {
          // Library handles resize automatically, but we can add custom logic if needed
        };

        window.addEventListener('resize', handleResize);
        
        cleanup = () => {
          window.removeEventListener('resize', handleResize);
        };

      } catch (error) {
        console.error('Failed to load TubesCursor:', error);
        setError('Failed to load 3D background');
      }
    };

    initTubes();

    return () => {
      mounted = false;
      if (cleanup) cleanup();
    };
  }, []);

  const handleClick = (e) => {
    // Don't interfere with form inputs
    if (e.target.closest('input, textarea, button, a')) {
      return;
    }
    
    if (!enableClickInteraction || !tubesRef.current) return;
    
    const colors = randomNeonColors(3);
    const lightsColors = randomNeonColors(4);
    
    if (tubesRef.current.tubes?.setColors) {
      tubesRef.current.tubes.setColors(colors);
    }
    if (tubesRef.current.tubes?.setLightsColors) {
      tubesRef.current.tubes.setLightsColors(lightsColors);
    }
  };

  return (
    <div 
      className={cn(
        'relative w-full h-full overflow-hidden bg-yotei-black',
        className
      )}
      onClick={handleClick}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block"
        style={{ touchAction: 'none' }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        {/* Enable pointer events for interactive elements */}
        <div className="pointer-events-auto" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>

      {error && (
        <div className="absolute top-4 left-4 text-yotei-red text-sm z-20">
          {error}
        </div>
      )}
    </div>
  );
}

export default TubesBackground;
