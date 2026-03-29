import { useState, useRef, useEffect } from 'react';
import { Lock, Heart } from 'lucide-react';

const CORRECT_PASSWORD = 'Meolove';

const loveLetter = `You are a moment in my life that I can never forget.

Even today, when I remember that day, it feels like it happened just yesterday.

I couldn't propose to you because I felt I wasn't worthy of you. Even today, I don't understand why, but I'm proposing anyway.

Whether you say yes or no, I love you Meo.`;

export default function SecretMessageSection() {
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'wrong' | 'revealed'>('idle');
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setStatus('revealed');
    } else {
      setStatus('wrong');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="section-fade-in relative py-24 px-6"
      style={{
        background: 'linear-gradient(160deg, oklch(0.96 0.025 30) 0%, oklch(0.94 0.04 350) 50%, oklch(0.92 0.06 300) 100%)',
        zIndex: 2,
      }}
    >
      <div className="max-w-xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-3">
            <Lock size={32} style={{ color: 'oklch(0.62 0.18 350)' }} />
          </div>
          <h2
            className="font-playfair font-bold"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: 'oklch(0.40 0.12 340)',
              textShadow: '0 0 20px oklch(0.72 0.20 350 / 0.3)',
            }}
          >
            Secret Message
          </h2>
          <p className="font-poppins mt-2" style={{ color: 'oklch(0.55 0.08 340)', fontSize: '1rem' }}>
            Only you know the key to this heart 🔐
          </p>
        </div>

        {/* Password box */}
        {status !== 'revealed' && (
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl p-8 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, oklch(0.99 0.008 355), oklch(0.96 0.04 320))',
              border: '2px solid oklch(0.85 0.08 350 / 0.4)',
              boxShadow: '0 8px 32px oklch(0.72 0.20 350 / 0.15)',
            }}
          >
            <div className="flex justify-center mb-6">
              <img
                src="/assets/generated/heart-icon.dim_64x64.png"
                alt=""
                width={48}
                height={48}
                style={{ animation: 'heartPulse 1.5s ease-in-out infinite', filter: 'drop-shadow(0 0 8px oklch(0.72 0.20 350 / 0.5))' }}
              />
            </div>

            <label
              className="block font-poppins font-medium mb-3 text-center"
              style={{ color: 'oklch(0.45 0.10 340)', fontSize: '0.95rem' }}
            >
              Enter the secret password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="✨ Your secret word..."
              className="w-full rounded-2xl px-5 py-3 font-poppins text-center outline-none transition-all duration-300 mb-4"
              style={{
                background: 'oklch(0.97 0.015 350)',
                border: status === 'wrong'
                  ? '2px solid oklch(0.65 0.20 30)'
                  : '2px solid oklch(0.82 0.10 350 / 0.5)',
                color: 'oklch(0.35 0.10 340)',
                fontSize: '1rem',
                boxShadow: 'inset 0 2px 8px oklch(0.72 0.20 350 / 0.08)',
              }}
              onFocus={(e) => {
                e.currentTarget.style.border = '2px solid oklch(0.72 0.20 350)';
                e.currentTarget.style.boxShadow = '0 0 15px oklch(0.72 0.20 350 / 0.3)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.border = '2px solid oklch(0.82 0.10 350 / 0.5)';
                e.currentTarget.style.boxShadow = 'inset 0 2px 8px oklch(0.72 0.20 350 / 0.08)';
              }}
            />

            {status === 'wrong' && (
              <p
                className="font-poppins text-center mb-4 animate-fade-in-up"
                style={{ color: 'oklch(0.55 0.18 30)', fontSize: '0.9rem' }}
              >
                Wrong password 😅 Try something special.
              </p>
            )}

            <button
              type="submit"
              className="glow-button w-full font-poppins font-semibold text-white py-3 rounded-2xl text-base cursor-pointer border-0 outline-none"
            >
              Unlock the Message 💌
            </button>
          </form>
        )}

        {/* Revealed love letter */}
        {status === 'revealed' && (
          <div
            className="rounded-3xl p-8 shadow-xl animate-fade-in"
            style={{
              background: 'linear-gradient(135deg, oklch(0.99 0.008 355), oklch(0.96 0.04 320), oklch(0.98 0.02 350))',
              border: '2px solid oklch(0.82 0.12 350 / 0.5)',
              boxShadow: '0 8px 40px oklch(0.72 0.20 350 / 0.25), 0 0 60px oklch(0.72 0.20 350 / 0.1)',
            }}
          >
            <div className="flex justify-center mb-6">
              <Heart
                size={40}
                fill="oklch(0.72 0.20 350)"
                style={{ color: 'oklch(0.72 0.20 350)', animation: 'heartPulse 1.2s ease-in-out infinite' }}
              />
            </div>

            <div
              className="font-playfair italic text-center leading-relaxed whitespace-pre-line"
              style={{
                color: 'oklch(0.38 0.12 340)',
                fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                lineHeight: '1.9',
              }}
            >
              {loveLetter}
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src="/assets/generated/heart-icon.dim_64x64.png"
                  alt=""
                  width={20}
                  height={20}
                  style={{
                    animation: `heartPulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                    opacity: 0.7,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
