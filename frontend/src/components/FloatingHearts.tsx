import { useMemo } from 'react';

interface HeartConfig {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function FloatingHearts() {
  const hearts = useMemo<HeartConfig[]>(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${(i * 5.5 + Math.sin(i * 1.3) * 8 + 5)}%`,
      size: 12 + (i % 5) * 8,
      duration: 8 + (i % 7) * 2.5,
      delay: (i * 1.1) % 12,
      opacity: 0.3 + (i % 4) * 0.15,
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0"
          style={{
            left: heart.left,
            animation: `floatUp ${heart.duration}s linear ${heart.delay}s infinite`,
            opacity: heart.opacity,
          }}
        >
          <svg
            width={heart.size}
            height={heart.size}
            viewBox="0 0 24 24"
            fill="oklch(0.72 0.20 350)"
          >
            <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
          </svg>
        </div>
      ))}
    </div>
  );
}
