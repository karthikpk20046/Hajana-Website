'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface NeuralNetworkBackgroundProps {
  className?: string;
}

export function NeuralNetworkBackground({ className = '' }: NeuralNetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createNodes = () => {
      const nodeCount = Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 15000);
      nodesRef.current = [];
      
      for (let i = 0; i < nodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      // Update nodes
      nodesRef.current.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.offsetWidth) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.offsetHeight) node.vy *= -1;
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
      ctx.lineWidth = 1;

      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const dx = nodesRef.current[i].x - nodesRef.current[j].x;
          const dy = nodesRef.current[i].y - nodesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.2;
            ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(nodesRef.current[i].x, nodesRef.current[i].y);
            ctx.lineTo(nodesRef.current[j].x, nodesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      ctx.fillStyle = 'rgba(6, 182, 212, 0.6)';
      nodesRef.current.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    createNodes();
    animate();

    window.addEventListener('resize', () => {
      resize();
      createNodes();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
}