import { useEffect, useRef } from 'react';

const traits = [
  { label: 'Your Kindness', emoji: '🌸', delay: '0s' },
  { label: 'Your Smile', emoji: '😊', delay: '0.4s' },
  { label: 'Your Eyes', emoji: '✨', delay: '0.8s' },
  { label: 'Your Laughter', emoji: '🌟', delay: '1.2s' },
  { label: 'Your Heart', emoji: '💖', delay: '1.6s' },
];

export default function WhyYouAreSpecialSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    cardRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-fade-in relative py-24 px-6"
      style={{
        background: 'linear-gradient(160deg, oklch(0.94 0.04 320) 0%, oklch(0.92 0.06 300) 50%, oklch(0.94 0.04 350) 100%)',
        zIndex: 2,
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-3">
            <img
              src="/assets/generated/heart-icon.dim_64x64.png"
              alt=""
              width={36}
              height={36}
              style={{ animation: 'heartPulse 1.5s ease-in-out infinite' }}
            />
          </div>
          <h2
            className="font-playfair font-bold"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: 'oklch(0.38 0.12 310)',
              textShadow: '0 0 20px oklch(0.76 0.12 300 / 0.4)',
            }}
          >
            Why You Are Special
          </h2>
          <p className="font-poppins mt-2" style={{ color: 'oklch(0.52 0.08 310)', fontSize: '1rem' }}>
            The reasons are endless, but here are a few…
          </p>
        </div>

        {/* Heart cards grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {traits.map((trait, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="section-fade-in group cursor-default"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div
                className="relative flex flex-col items-center justify-center text-center transition-all duration-400 group-hover:scale-110"
                style={{
                  width: '160px',
                  height: '160px',
                  animation: `floatBob ${3 + index * 0.5}s ease-in-out ${trait.delay} infinite`,
                  background: 'linear-gradient(135deg, oklch(0.92 0.08 350), oklch(0.88 0.10 320))',
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                  boxShadow: '0 8px 24px oklch(0.72 0.20 350 / 0.2)',
                  border: '2px solid oklch(0.82 0.10 350 / 0.4)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    '0 0 30px oklch(0.72 0.20 350 / 0.7), 0 0 60px oklch(0.72 0.20 350 / 0.4), 0 8px 24px oklch(0.72 0.20 350 / 0.3)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    '0 8px 24px oklch(0.72 0.20 350 / 0.2)';
                }}
              >
                <span className="text-3xl mb-2">{trait.emoji}</span>
                <span
                  className="font-playfair font-semibold px-3"
                  style={{ color: 'oklch(0.40 0.14 340)', fontSize: '0.9rem', lineHeight: '1.3' }}
                >
                  {trait.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
