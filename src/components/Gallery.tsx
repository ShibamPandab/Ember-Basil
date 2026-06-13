

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  url: string;
  category: string;
  title: string;
}

export default function Gallery() {
  const images: GalleryItem[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000',
      category: 'Ambiance',
      title: 'Our Dining Room',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000',
      category: 'Mixology',
      title: 'Basil-Gin Smash',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000',
      category: 'Hearth',
      title: 'Open Oak Flame Grilling',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000',
      category: 'Desserts',
      title: 'Smoked Chocolate Fondant',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1000',
      category: 'Garden',
      title: 'Rooftop Harvest Herbs',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000',
      category: 'Artistry',
      title: 'Plating the Wagyu',
    },
  ];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev! - 1));
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="gallery" className="relative bg-charcoal-light py-24 overflow-hidden border-b border-gold/10">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-serif text-xs tracking-[0.3em] text-gold uppercase font-semibold">
            Visual Gallery
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-bold tracking-tight text-cream">
            Moments Captured In Fire & Soil
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-cream/40 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            <span className="tracking-widest uppercase">Follow @EmberAndBasil</span>
          </div>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-xl border border-gold/10 overflow-hidden aspect-[4/3] cursor-pointer"
            >
              {/* Shine highlight */}
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine" />

              <img
                src={img.url}
                alt={img.title}
                className="object-cover w-full h-full transform transition-transform duration-[1200ms] group-hover:scale-105"
              />

              {/* Hover Dark overlay */}
              <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-20" />

              {/* Hover content (Staggered-like entrance) */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-25 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0">
                <div className="flex justify-between items-start">
                  <span className="font-serif text-xs font-semibold text-gold tracking-widest uppercase">
                    {img.category}
                  </span>
                  <div className="rounded-full border border-gold/30 bg-gold/10 p-2.5 text-gold">
                    <Maximize2 size={14} />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-cream">
                    {img.title}
                  </h3>
                  <span className="text-[10px] text-cream/40 uppercase tracking-wider block mt-1.5">
                    Click to enlarge
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Portal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/95 backdrop-blur-md">
            {/* Backdrop Closer */}
            <div className="absolute inset-0 cursor-default" onClick={closeLightbox} />

            {/* Header / Controls */}
            <div className="absolute top-4 left-6 right-6 flex justify-between items-center z-55">
              <div>
                <span className="font-serif text-xs font-bold text-gold uppercase tracking-widest">
                  Gallery Showcase
                </span>
                <h4 className="font-serif text-lg text-cream mt-0.5">
                  {images[lightboxIndex].title}
                </h4>
              </div>
              <button
                onClick={closeLightbox}
                className="rounded-full border border-gold/10 p-3.5 text-cream/70 hover:bg-gold/10 hover:text-gold transition-colors"
                aria-label="Close viewer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Image Slider Wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-5xl w-full aspect-[16/10] overflow-hidden rounded-xl border border-gold/10 bg-charcoal-light flex items-center justify-center"
            >
              <img
                src={images[lightboxIndex].url}
                alt={images[lightboxIndex].title}
                className="object-contain max-h-[80vh] max-w-[90vw] select-none"
              />

              {/* Side Navigation Buttons */}
              <button
                onClick={showPrev}
                className="absolute left-4 rounded-full border border-gold/10 bg-charcoal-light/75 p-3.5 text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 z-55"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={showNext}
                className="absolute right-4 rounded-full border border-gold/10 bg-charcoal-light/75 p-3.5 text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 z-55"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/40 text-xs uppercase tracking-widest font-mono">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
