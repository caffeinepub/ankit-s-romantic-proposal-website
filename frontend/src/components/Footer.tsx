export default function Footer() {
  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'unknown-app'
  );

  return (
    <footer
      className="relative py-10 px-6 text-center"
      style={{
        background: 'linear-gradient(135deg, oklch(0.90 0.08 350), oklch(0.88 0.10 320))',
        borderTop: '1px solid oklch(0.82 0.10 350 / 0.3)',
        zIndex: 2,
      }}
    >
      {/* Made with Love by Ankit */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span
          className="font-playfair font-semibold"
          style={{ color: 'oklch(0.38 0.12 340)', fontSize: '1.1rem' }}
        >
          Made with Love by Ankit
        </span>
        <span
          style={{
            fontSize: '1.3rem',
            animation: 'heartPulse 1.2s ease-in-out infinite',
            filter: 'drop-shadow(0 0 6px oklch(0.72 0.20 350))',
            display: 'inline-block',
          }}
        >
          ❤️
        </span>
      </div>

      {/* Decorative hearts */}
      <div className="flex justify-center gap-3 mb-5">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src="/assets/generated/heart-icon.dim_64x64.png"
            alt=""
            width={16}
            height={16}
            style={{
              animation: `heartPulse 1.2s ease-in-out ${i * 0.2}s infinite`,
              opacity: 0.5,
            }}
          />
        ))}
      </div>

      {/* Attribution */}
      <p
        className="font-poppins text-sm"
        style={{ color: 'oklch(0.55 0.08 340)' }}
      >
        Built with{' '}
        <span style={{ color: 'oklch(0.72 0.20 350)', animation: 'heartPulse 1.2s ease-in-out infinite', display: 'inline-block' }}>
          ❤️
        </span>{' '}
        using{' '}
        <a
          href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold transition-opacity hover:opacity-80"
          style={{ color: 'oklch(0.62 0.18 350)' }}
        >
          caffeine.ai
        </a>
      </p>

      <p
        className="font-poppins text-xs mt-2"
        style={{ color: 'oklch(0.62 0.08 340)' }}
      >
        © {new Date().getFullYear()} — A love story written in code 💕
      </p>
    </footer>
  );
}
