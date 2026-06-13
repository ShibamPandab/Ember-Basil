import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote:
        "The Ribeye was kissed by the wood fire in a way I have never experienced. The cold-pressed basil dressing added a stunning freshness. A Michelin-level masterpiece.",
      author: 'Marcus Vance-Sterling',
      role: 'Culinary Critic, Gault & Millau',
      stars: 5,
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
    },
    {
      quote:
        "The Chef's Table is a sensory revelation. Eating directly off custom basalt plates while watching the embers glow creates a cinematic, unforgettable dining rhythm.",
      author: 'Julianne Croft',
      role: 'Luxury Travel & Food Journalist',
      stars: 5,
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150',
    },
    {
      quote:
        "Dining on the rooftop terrace adjacent to the vertical basil gardens was enchanting. The cocktails are smoky, fresh, and exceptionally balanced. Easily a 10/10.",
      author: 'Alessandro Moretti',
      role: 'Gastronomy Blogger',
      stars: 5,
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150',
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 6000); // 6s autoplay
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-charcoal py-24 overflow-hidden border-b border-gold/10">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6">
        {/* Quote Icon */}
        <div className="flex justify-center mb-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/5 border border-gold/15 text-gold">
            <Quote size={28} className="rotate-180" />
          </div>
        </div>

        {/* Sliding review container */}
        <div className="relative min-h-[260px] text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Star Rating */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: reviews[index].stars }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-serif text-2xl sm:text-3xl italic text-cream font-light leading-relaxed max-w-3xl mx-auto">
                "{reviews[index].quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-center gap-4 pt-4">
                <img
                  src={reviews[index].img}
                  alt={reviews[index].author}
                  className="h-12 w-12 rounded-full border border-gold/25 object-cover"
                />
                <div className="text-left">
                  <span className="block font-serif text-base font-bold text-cream">
                    {reviews[index].author}
                  </span>
                  <span className="block text-xs text-cream/40 uppercase tracking-wider">
                    {reviews[index].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        <div className="mt-12 flex justify-center items-center gap-6">
          <button
            onClick={handlePrev}
            className="rounded-full border border-gold/15 p-3 text-gold/70 hover:bg-gold/10 hover:text-gold transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === index ? 'w-6 bg-gold' : 'w-1.5 bg-cream/20'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="rounded-full border border-gold/15 p-3 text-gold/70 hover:bg-gold/10 hover:text-gold transition-colors"
            aria-label="Next review"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
