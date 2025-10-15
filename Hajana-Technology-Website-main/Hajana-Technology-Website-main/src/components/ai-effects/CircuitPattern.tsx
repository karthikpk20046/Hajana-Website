'use client'

interface CircuitPatternProps {
  className?: string;
  opacity?: number;
}

export function CircuitPattern({ className = '', opacity = 0.1 }: CircuitPatternProps) {
  const circuitSvg = `
    <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <g stroke="currentColor" strokeWidth="1" fill="none" opacity="${opacity}">
            <!-- Horizontal lines -->
            <path d="M0,20 L30,20 L35,15 L45,15 L50,20 L100,20"/>
            <path d="M0,50 L25,50 L30,45 L40,45 L45,50 L100,50"/>
            <path d="M0,80 L20,80 L25,75 L35,75 L40,80 L100,80"/>
            
            <!-- Vertical lines -->
            <path d="M20,0 L20,30 L15,35 L15,45 L20,50 L20,100"/>
            <path d="M50,0 L50,25 L45,30 L45,40 L50,45 L50,100"/>
            <path d="M80,0 L80,20 L75,25 L75,35 L80,40 L80,100"/>
            
            <!-- Circuit nodes -->
            <circle cx="20" cy="20" r="2" fill="currentColor" opacity="${opacity * 2}"/>
            <circle cx="50" cy="50" r="2" fill="currentColor" opacity="${opacity * 2}"/>
            <circle cx="80" cy="80" r="2" fill="currentColor" opacity="${opacity * 2}"/>
            <circle cx="30" cy="70" r="1.5" fill="currentColor" opacity="${opacity * 1.5}"/>
            <circle cx="70" cy="30" r="1.5" fill="currentColor" opacity="${opacity * 1.5}"/>
            
            <!-- Microchip representations -->
            <rect x="15" y="15" width="10" height="10" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="${opacity * 1.5}"/>
            <rect x="45" y="45" width="10" height="10" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="${opacity * 1.5}"/>
            <rect x="75" y="75" width="10" height="10" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="${opacity * 1.5}"/>
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)"/>
    </svg>
  `;

  const encodedSvg = btoa(circuitSvg);
  const dataUri = `data:image/svg+xml;base64,${encodedSvg}`;

  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `url("${dataUri}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px'
      }}
    />
  );
}