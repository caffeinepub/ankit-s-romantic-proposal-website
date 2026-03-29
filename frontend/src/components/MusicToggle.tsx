import { useState, useRef, useEffect } from 'react';
import { Music, VolumeX } from 'lucide-react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;
    audio.volume = 0.4;
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {
        // Autoplay blocked by browser — user must interact first
      });
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* 
        To add background music, replace the src below with a royalty-free romantic instrumental URL.
        Example: src="https://www.example.com/romantic-music.mp3"
        Recommended sources: Pixabay (pixabay.com/music), Free Music Archive (freemusicarchive.org)
      */}
      <audio ref={audioRef} src="" preload="none" />

      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: isPlaying
            ? 'linear-gradient(135deg, oklch(0.72 0.20 350), oklch(0.68 0.18 320))'
            : 'oklch(0.95 0.04 350 / 0.85)',
          boxShadow: isPlaying
            ? '0 0 20px oklch(0.72 0.20 350 / 0.7), 0 0 40px oklch(0.72 0.20 350 / 0.4)'
            : '0 0 10px oklch(0.72 0.20 350 / 0.3)',
          border: '2px solid oklch(0.72 0.20 350 / 0.5)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {isPlaying ? (
          <Music
            size={20}
            style={{ color: 'oklch(0.99 0.005 355)', animation: 'heartPulse 1.2s ease-in-out infinite' }}
          />
        ) : (
          <VolumeX size={20} style={{ color: 'oklch(0.62 0.18 350)' }} />
        )}
      </button>
    </>
  );
}
