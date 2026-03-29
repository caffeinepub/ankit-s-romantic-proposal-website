import { useState, useRef, useCallback, useEffect } from 'react';

export default function FinalProposalSection() {
  const [thinkAgainPos, setThinkAgainPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const dodgeButton = useCallback(() => {
    const maxX = 60;
    const maxY = 40;
    const newX = (Math.random() - 0.5) * maxX * 2;
    const newY = (Math.random() - 0.5) * maxY * 2;
    setThinkAgainPos({ x: newX, y: newY });
  }, []);

  const handleYes = useCallback(() => {
    const message = encodeURIComponent('I said YES ❤️');
    window.open(`https://wa.me/918810471387?text=${message}`, '_blank');
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-fade-in relative py-28 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, oklch(0.92 0.06 300) 0%, oklch(0.88 0.10 350) 50%, oklch(0.90 0.08 30) 100%)',
        zIndex: 2,
      }}
    >
      <div ref={containerRef} className="max-w-2xl mx-auto text-center relative">
        {/* Heading */}
        <div className="flex justify-center mb-6">
          <img
            src="/assets/generated/heart-icon.dim_64x64.png"
            alt=""
            width={52}
            height={52}
            style={{
              animation: 'heartPulse 1.2s ease-in-out infinite',
              filter: 'drop-shadow(0 0 16px oklch(0.72 0.20 350))',
            }}
          />
        </div>

        <h2
          className="font-playfair font-bold mb-4 leading-tight"
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
            color: 'oklch(0.38 0.14 340)',
            animation: 'textGlow 2.5s ease-in-out infinite',
          }}
        >
          Meo, Will You Stay With Me Forever?
        </h2>

        <p
          className="font-poppins mb-12"
          style={{ color: 'oklch(0.52 0.08 340)', fontSize: '1.05rem' }}
        >
          My heart is waiting for your answer… 💕
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative" style={{ minHeight: '120px' }}>
          {/* YES button */}
          <button
            onClick={handleYes}
            className="glow-button font-poppins font-bold text-white px-12 py-4 rounded-full text-xl cursor-pointer border-0 outline-none"
            style={{
              animation: 'glowPulse 2s ease-in-out infinite',
              letterSpacing: '0.03em',
              minWidth: '160px',
            }}
          >
            YES 💍
          </button>

          {/* THINK AGAIN button — dodges on hover/click */}
          <button
            onMouseEnter={dodgeButton}
            onClick={dodgeButton}
            className="font-poppins font-semibold py-4 px-8 rounded-full text-lg cursor-pointer border-2 transition-all duration-300"
            style={{
              color: 'oklch(0.55 0.10 340)',
              borderColor: 'oklch(0.78 0.10 340 / 0.5)',
              background: 'oklch(0.97 0.015 350)',
              transform: `translate(${thinkAgainPos.x}px, ${thinkAgainPos.y}px)`,
              transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              minWidth: '180px',
              position: 'relative',
            }}
          >
            THINK AGAIN 😅
          </button>
        </div>
      </div>
    </section>
  );
}
