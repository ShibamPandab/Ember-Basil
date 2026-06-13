import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export default function Hero({ onOpenReservation }: HeroProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalise relative coordinate to between -1 and 1
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      // Amplify offset to 15px max movement
      setCoords({ x: x * 15, y: y * 15 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-charcoal flex items-center justify-center">
      {/* Parallax Background Image */}
      <motion.div
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000')`,
          transform: `translate3d(${coords.x}px, ${coords.y}px, 0) scale(1.1)`,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform"
      />

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/40 to-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-charcoal/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(15,15,16,0.8)_85%)]" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center flex flex-col items-center">
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-gold/30 bg-charcoal/60 px-4 py-1.5 backdrop-blur-md"
        >
          <Flame size={12} className="text-gold animate-pulse" />
          <span className="font-serif text-xs tracking-[0.25em] text-gold uppercase font-medium">
            Michelin-Inspired Hearth
          </span>
        </motion.div>

        {/* Large Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-cream leading-none"
        >
          An Experience <br />
          <span className="gold-text-gradient font-normal italic font-serif">Beyond Dining</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-2xl font-sans text-base md:text-lg text-cream/70 font-light leading-relaxed tracking-wide"
        >
          A Michelin-inspired culinary journey crafted with fire, flavor and unforgettable moments.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md"
        >
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto rounded-full bg-gold px-8 py-4 font-serif text-sm font-semibold tracking-wider text-charcoal hover:bg-gold-hover hover:scale-105 transition-all duration-300 shadow-[0_4px_25px_rgba(199,167,108,0.3)] active:scale-95 cursor-pointer"
          >
            Reserve Table
          </button>
          <a
            href="#menu"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-cream/20 bg-charcoal/20 px-8 py-4 font-serif text-sm font-semibold tracking-wider text-cream backdrop-blur-sm hover:border-gold hover:text-gold transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Explore Menu <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* Floating Reservation Toggle Indicator for visual flair */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-serif text-[10px] tracking-[0.3em] text-cream/40 uppercase">
          Scroll to discover
        </span>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-[18px] h-[32px] rounded-full border border-gold/40 flex justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        </motion.div>
      </div>
    </section>
  );
}
