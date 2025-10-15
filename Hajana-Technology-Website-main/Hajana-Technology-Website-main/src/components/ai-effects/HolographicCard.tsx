+'use client'

import { ReactNode, useRef, useEffect, useState } from 'react'
import { Card, CardContent } from '../ui/card'

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
}

export function HolographicCard({ children, className = '' }: HolographicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return;
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    };

    const handleMouseLeave = () => {
      setTransform('');
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isHovered]);

  return (
    <div 
      ref={cardRef}
      className={`relative group cursor-pointer ${className}`}
      style={{
        transform: transform || undefined,
        transformStyle: 'preserve-3d' as const,
        transition: isHovered ? 'none' : 'transform 0.5s ease-out'
      }}
    >
      <Card className={`relative bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 ${isHovered ? 'shadow-xl' : ''}`}>
        <CardContent className="relative z-10">
          {children}
        </CardContent>
      </Card>
    </div>
  );
}
