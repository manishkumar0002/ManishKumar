import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseX: number;
  baseY: number;
  depth: number; // For parallax effect
}

interface MousePosition {
  x: number;
  y: number;
}

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<MousePosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 12000);
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          depth: Math.random() * 3 + 1, // Parallax depth layer
        });
      }
    };

    const getParticleColor = () => {
      const isDark = document.documentElement.classList.contains('dark') || 
                     !document.documentElement.classList.contains('light');
      return isDark 
        ? { h: 187, s: 100, l: 50 } // Cyan for dark mode
        : { h: 280, s: 85, l: 55 }; // Purple for light mode
    };

    const getSecondaryColor = () => {
      const isDark = document.documentElement.classList.contains('dark') || 
                     !document.documentElement.classList.contains('light');
      return isDark 
        ? { h: 260, s: 100, l: 60 } // Purple accent for dark
        : { h: 200, s: 90, l: 50 }; // Blue accent for light
    };

    const drawParticle = (p: Particle, mouse: MousePosition) => {
      const color = getParticleColor();
      const secondaryColor = getSecondaryColor();
      
      // Calculate distance from mouse for interactive effect
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 200;
      
      // Interactive glow effect near mouse
      let glowSize = p.size;
      let glowOpacity = p.opacity;
      
      if (dist < maxDist) {
        const influence = 1 - dist / maxDist;
        glowSize = p.size + influence * 4;
        glowOpacity = Math.min(1, p.opacity + influence * 0.5);
        
        // Draw outer glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize * 3);
        gradient.addColorStop(0, `hsla(${secondaryColor.h}, ${secondaryColor.s}%, ${secondaryColor.l}%, ${influence * 0.3})`);
        gradient.addColorStop(1, `hsla(${secondaryColor.h}, ${secondaryColor.s}%, ${secondaryColor.l}%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
      
      // Main particle with gradient
      const particleGradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize);
      particleGradient.addColorStop(0, `hsla(${color.h}, ${color.s}%, ${color.l + 20}%, ${glowOpacity})`);
      particleGradient.addColorStop(1, `hsla(${color.h}, ${color.s}%, ${color.l}%, ${glowOpacity * 0.5})`);
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
      ctx.fillStyle = particleGradient;
      ctx.fill();
    };

    const drawConnections = (mouse: MousePosition) => {
      const color = getParticleColor();
      const secondaryColor = getSecondaryColor();
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            // Check if connection is near mouse for highlighting
            const midX = (particles[i].x + particles[j].x) / 2;
            const midY = (particles[i].y + particles[j].y) / 2;
            const mouseDist = Math.sqrt((mouse.x - midX) ** 2 + (mouse.y - midY) ** 2);
            
            const baseOpacity = 0.15 * (1 - dist / 150);
            const mouseInfluence = mouseDist < 150 ? (1 - mouseDist / 150) * 0.3 : 0;
            const opacity = baseOpacity + mouseInfluence;
            
            const useSecondary = mouseDist < 150;
            const lineColor = useSecondary ? secondaryColor : color;
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[j].x);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(${lineColor.h}, ${lineColor.s}%, ${lineColor.l}%, ${opacity})`;
            ctx.lineWidth = useSecondary ? 1 : 0.5;
            ctx.stroke();
          }
        }
      }
      
      // Draw connections to mouse cursor
      if (mouse.x > 0 && mouse.y > 0) {
        particles.forEach(p => {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 180) {
            const opacity = 0.2 * (1 - dist / 180);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `hsla(${secondaryColor.h}, ${secondaryColor.s}%, ${secondaryColor.l}%, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      }
    };

    const drawWaveEffect = () => {
      const color = getParticleColor();
      const waveCount = 3;
      
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        
        for (let x = 0; x <= canvas.width; x += 10) {
          const y = canvas.height / 2 + 
            Math.sin((x * 0.005) + time * 0.5 + w * 0.5) * 30 +
            Math.sin((x * 0.01) + time * 0.3 + w * 0.3) * 20;
          ctx.lineTo(x, y);
        }
        
        ctx.strokeStyle = `hsla(${color.h}, ${color.s}%, ${color.l}%, ${0.03 - w * 0.01})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.02;
      
      const mouse = mouseRef.current;
      
      // Draw subtle wave effect in background
      drawWaveEffect();

      particles.forEach((p) => {
        // Basic movement
        p.x += p.vx;
        p.y += p.vy;
        
        // Parallax effect based on mouse position
        const parallaxX = (mouse.x - canvas.width / 2) * 0.02 / p.depth;
        const parallaxY = (mouse.y - canvas.height / 2) * 0.02 / p.depth;
        p.x += parallaxX * 0.1;
        p.y += parallaxY * 0.1;
        
        // Floating wave motion
        p.y += Math.sin(time + p.baseX * 0.01) * 0.2;
        p.x += Math.cos(time * 0.5 + p.baseY * 0.01) * 0.1;
        
        // Interactive repulsion from mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x -= (dx / dist) * force * 2;
          p.y -= (dy / dist) * force * 2;
        }

        // Boundary wrapping with smooth transition
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        drawParticle(p, mouse);
      });

      drawConnections(mouse);
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      mouseRef.current = { x: 0, y: 0 };
    };

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });
    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseenter", handleMouseEnter);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseenter", handleMouseEnter);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-auto z-0"
      style={{ opacity: 0.7 }}
    />
  );
};
