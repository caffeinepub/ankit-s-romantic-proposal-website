import { useEffect, useRef } from 'react';

const memories = [
  {
    title: 'The First Day at Office',
    description: "The day we met in the office, I didn't know you would become so important to me.",
    emoji: '🌸',
  },
  {
    title: 'The Conversations That Never Ended',
    description: 'From professional talks to endless random chats… you became my favorite person.',
    emoji: '💬',
  },
  {
    title: 'Inside Jokes',
    description: 'Only we understand those small silly moments… and that\'s what makes them special.',
    emoji: '😄',
  },
  {
    title: 'Support Moments',
    description: 'In stress, in confusion, in silence… you were always there.',
    emoji: '🤝',
  },
  {
    title: 'The Day I Realized',
    description: 'Somewhere between smiles and memories, I fell for you.',
    emoji: '💕',
  },
];

export default function OurJourneySection() {
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
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="our-journey"
      className="relative py-24 px-6"
      style={{
        background: 'linear-gradient(180deg, oklch(0.97 0.012 350) 0%, oklch(0.94 0.04 320) 50%, oklch(0.96 0.025 30) 100%)',
        zIndex: 2,
      }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Section heading */}
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
              color: 'oklch(0.40 0.12 340)',
              textShadow: '0 0 20px oklch(0.72 0.20 350 / 0.3)',
            }}
          >
            Our Journey
          </h2>
          <p className="font-poppins mt-2" style={{ color: 'oklch(0.55 0.08 340)', fontSize: '1rem' }}>
            Every moment with you is a treasure
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 timeline-line"
            style={{ transform: 'translateX(-50%)' }}
          />

          <div className="space-y-12">
            {memories.map((memory, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className={`section-fade-in relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {/* Card */}
                  <div
                    className={`w-5/12 ${isLeft ? 'mr-auto pr-6' : 'ml-auto pl-6'}`}
                  >
                    <div
                      className="rounded-2xl p-5 shadow-md transition-all duration-300 hover:shadow-glow-sm hover:-translate-y-1"
                      style={{
                        background: 'linear-gradient(135deg, oklch(0.98 0.02 350), oklch(0.96 0.04 320))',
                        border: '1.5px solid oklch(0.85 0.08 350 / 0.5)',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{memory.emoji}</span>
                        <img
                          src="/assets/generated/heart-icon.dim_64x64.png"
                          alt=""
                          width={18}
                          height={18}
                          style={{ opacity: 0.7 }}
                        />
                      </div>
                      <h3
                        className="font-playfair font-semibold mb-2"
                        style={{ color: 'oklch(0.42 0.14 340)', fontSize: '1.05rem' }}
                      >
                        {memory.title}
                      </h3>
                      <p
                        className="font-poppins text-sm leading-relaxed"
                        style={{ color: 'oklch(0.50 0.07 340)' }}
                      >
                        {memory.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div
                    className="absolute left-1/2 w-4 h-4 rounded-full border-2 z-10"
                    style={{
                      transform: 'translateX(-50%)',
                      background: 'oklch(0.72 0.20 350)',
                      borderColor: 'oklch(0.97 0.012 350)',
                      boxShadow: '0 0 10px oklch(0.72 0.20 350 / 0.6)',
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
