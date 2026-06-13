import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

export default function IngredientsJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: '01',
      title: 'Fresh Ingredients',
      subtitle: 'Purely Organic & Biodynamic',
      description:
        'Our culinary path starts with local farms and our own rooftop greenhouse. We pick organic sweet basil, micro-greens, and wild heirloom tomatoes at dawn. Every herb is selected for its essential oil concentration, ensuring an aromatic punch that matches the depth of our smoke.',
      image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1000',
      bullets: ['Picked at dawn', 'Rooftop green garden', 'Zero mile sourcing', 'Bio-dynamic wild herbs'],
    },
    {
      id: '02',
      title: 'Artisan Techniques',
      subtitle: 'Time-Honored Preservation',
      description:
        'Curing, fermenting, and dry aging happen entirely in-house. Our Himalayan salt brick aging room cures Wagyu beef for 45 to 60 days, concentrating deep umami flavors. We bake our own wild sourdough using a decade-old starter cultures to create the perfect crusty vehicle for herbal infusions.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000',
      bullets: ['Himalayan salt room', '45+ Day dry-aging', 'Slow fermentation', 'In-house herb curing'],
    },
    {
      id: '03',
      title: 'Open Flame Cooking',
      subtitle: 'The Hearth of Fire',
      description:
        'The heart of Ember & Basil is our custom wood-fired iron hearth. Lacking gas or electrical heat source, our chefs masterfully position racks over burning hickory, oak, and applewood embers. This high-altitude flame creates caramelized bark on meats and blisters skin on vegetables.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000',
      bullets: ['Hardwood oak & applewood', '800°F intense searing', 'Zero gas or electric heat', 'Precision ember height control'],
    },
    {
      id: '04',
      title: 'Final Presentation',
      subtitle: 'Gastronomy Plated',
      description:
        'Plating is a canvas of edible art. Every plate is constructed with precision: a base of charred proteins, bright herb emulsions, delicate reduction curls, and finishing drops of aged balsamic. Every dish is served on custom-crafted basalt plates to maintain the ideal serving temperature.',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000',
      bullets: ['Basalt custom plating', 'Vibrant herb reductions', 'Symphony of textures', 'Perfect temperature serving'],
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  return (
    <section id="journey" className="relative bg-charcoal-light py-24 overflow-hidden border-y border-gold/10">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-serif text-xs tracking-[0.3em] text-gold uppercase font-semibold">
              The Journey
            </span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-bold tracking-tight text-cream">
              From Soil & Embers To Plate
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="rounded-full border border-gold/20 p-4 text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
              aria-label="Previous step"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="rounded-full border border-gold/20 p-4 text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
              aria-label="Next step"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="relative" ref={containerRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              {/* Image side (lg: 7 cols) */}
              <div className="lg:col-span-7 relative group">
                <div className="absolute -inset-3 rounded-2xl border border-gold/5 pointer-events-none" />
                <div className="relative overflow-hidden rounded-xl border border-gold/10 aspect-[16/10] w-full">
                  <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine" />
                  <img
                    src={steps[activeIndex].image}
                    alt={steps[activeIndex].title}
                    className="object-cover w-full h-full transform transition-transform duration-1000 scale-100 group-hover:scale-103"
                  />
                  <div className="absolute top-4 left-4 z-15 flex h-14 w-14 items-center justify-center rounded-full glassmorphism text-gold font-serif text-2xl font-bold border border-gold/20">
                    {steps[activeIndex].id}
                  </div>
                </div>
              </div>

              {/* Text side (lg: 5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="font-serif text-sm tracking-widest text-gold font-medium">
                    {steps[activeIndex].subtitle}
                  </span>
                  <h3 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-cream">
                    {steps[activeIndex].title}
                  </h3>
                </div>

                <p className="font-sans text-cream/70 text-base font-light leading-relaxed tracking-wide">
                  {steps[activeIndex].description}
                </p>

                {/* Bullets grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {steps[activeIndex].bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald/10 border border-emerald/20 text-emerald">
                        <Check size={12} />
                      </div>
                      <span className="text-sm text-cream/80 font-medium">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Timeline Navigator Indicators */}
        <div className="mt-16 border-t border-gold/10 pt-8 flex items-center justify-between">
          <div className="flex gap-4 w-full justify-between items-center overflow-x-auto no-scrollbar py-2">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveIndex(idx)}
                className="flex items-center gap-3 min-w-[150px] text-left group cursor-pointer"
              >
                <div
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'bg-gold ring-4 ring-gold/25'
                      : 'bg-cream/20 group-hover:bg-gold/50'
                  }`}
                />
                <div>
                  <span className="block text-[10px] font-bold text-gold tracking-widest uppercase">
                    Stage {step.id}
                  </span>
                  <span
                    className={`block font-serif text-sm font-semibold transition-colors duration-300 ${
                      idx === activeIndex ? 'text-cream' : 'text-cream/40 group-hover:text-cream/75'
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
