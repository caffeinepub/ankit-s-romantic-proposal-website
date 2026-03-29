import { useRef, useEffect } from 'react';

const sparklePositions = [
  { top: '10%', left: '8%', delay: '0s', size: 20 },
  { top: '20%', left: '85%', delay: '0.8s', size: 16 },
  { top: '35%', left: '15%', delay: '1.5s', size: 24 },
  { top: '60%', left: '90%', delay: '0.3s', size: 18 },
  { top: '75%', left: '5%', delay: '2s', size: 14 },
  { top: '15%', left: '50%', delay: '1.2s', size: 22 },
  { top: '80%', left: '70%', delay: '0.6s', size: 16 },
  { top: '45%', left: '92%', delay: '1.8s', size: 20 },
];

export default function HeroSection() {
  const journeyRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    journeyRef.current = document.getElementById('our-journey');
  }, []);

  const scrollToJourney = () => {
    const el = document.getElementById('our-journey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Sunset background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/assets/generated/hero-sunset-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 animate-sunset-shift"
        style={{
          background: 'linear-gradient(135deg, oklch(0.85 0.14 30 / 0.7) 0%, oklch(0.78 0.18 350 / 0.65) 30%, oklch(0.72 0.14 310 / 0.6) 60%, oklch(0.68 0.10 280 / 0.55) 100%)',
          backgroundSize: '300% 300%',
        }}
      />

      {/* Sparkles */}
      {sparklePositions.map((s, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{ top: s.top, left: s.left }}
        >
          <img
            src="/assets/generated/sparkle.dim_32x32.png"
            alt=""
            width={s.size}
            height={s.size}
            style={{
              animation: `twinkle ${2 + i * 0.4}s ease-in-out ${s.delay} infinite`,
              filter: 'drop-shadow(0 0 6px oklch(0.95 0.10 60))',
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        style={{ animation: 'fadeInUp 1.2s ease-out forwards' }}
      >
        {/* Small heart above heading */}
        <div className="flex justify-center mb-4">
          <img
            src="/assets/generated/heart-icon.dim_64x64.png"
            alt="heart"
            width={48}
            height={48}
            style={{ animation: 'heartPulse 1.5s ease-in-out infinite', filter: 'drop-shadow(0 0 12px oklch(0.72 0.20 350))' }}
          />
        </div>

        <h1
          className="font-playfair font-bold text-white mb-4 leading-tight"
          style={{
            fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
            textShadow: '0 2px 20px oklch(0.30 0.10 350 / 0.6), 0 0 40px oklch(0.72 0.20 350 / 0.4)',
            animation: 'textGlow 2.5s ease-in-out infinite',
          }}
        >
          YOUR ANKIT?
        </h1>

        <p
          className="font-poppins text-white/90 mb-10 leading-relaxed"
          style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            textShadow: '0 1px 10px oklch(0.30 0.10 350 / 0.5)',
            animation: 'fadeInUp 1.4s ease-out 0.3s both',
          }}
        >
          Meo, you are the most beautiful chapter of my life.
        </p>

        <button
          onClick={scrollToJourney}
          className="glow-button font-poppins font-semibold text-white px-10 py-4 rounded-full text-lg cursor-pointer border-0 outline-none"
          style={{
            animation: 'glowPulse 2s ease-in-out infinite, fadeInUp 1.4s ease-out 0.6s both',
            letterSpacing: '0.02em',
          }}
        >
          Click if you believe in destiny ❤️
        </button>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, oklch(0.97 0.012 350))',
        }}
      />
    </section>
  );
}
