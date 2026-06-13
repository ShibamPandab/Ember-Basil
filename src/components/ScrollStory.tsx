import { motion } from 'framer-motion';
import { Flame, Trees, Sparkles } from 'lucide-react';

export default function ScrollStory() {
  const stories = [
    {
      icon: <Flame size={20} className="text-gold" />,
      tag: '01 / The Ember',
      title: 'Forged in Fire & Flame',
      description:
        'At Ember & Basil, cooking is an elemental dance. We source premium hardwood lump charcoal and cured applewood to create coals that burn at over 800 degrees. This intense heat caramelizes the natural sugars in our dry-aged meats, locking in juices and infusing every bite with a delicate, clean wood smoke.',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200',
      align: 'left',
    },
    {
      icon: <Trees size={20} className="text-gold" />,
      tag: '02 / The Basil',
      title: 'The Breath of Earth',
      description:
        'To balance the deep, primal warmth of the flame, we bring the fresh, aromatic contrast of garden herbs. Our rooftop greenhouse yields fresh, sweet basil, lemon verbena, and micro-herbs, picked hours before they hit your plate. They are infused into oils, crafted into pestos, and draped fresh over grilled masterpieces.',
      img: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200',
      align: 'right',
    },
    {
      icon: <Sparkles size={20} className="text-gold" />,
      tag: '03 / The Harmony',
      title: 'A Michelin-Star Convergence',
      description:
        'Our culinary team harmonizes these opposing forces—smoke and herb, fire and soil, raw intensity and refined elegance. The result is a multi-sensory menu where charred Wagyu meets sweet basil gelée, and wood-roasted oysters are paired with fresh herb emulsion. It is gastronomy in its purest form.',
      img: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200',
      align: 'left',
    },
  ];

  return (
    <section id="philosophy" className="relative bg-charcoal py-24 overflow-hidden">
      {/* Abstract Glowing Accent background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 -translate-x-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-serif text-xs tracking-[0.3em] text-gold uppercase font-semibold"
          >
            Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-4 font-serif text-4xl sm:text-5xl font-bold tracking-tight text-cream"
          >
            The Union of Fire & Earth
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[1px] w-20 bg-gold mx-auto mt-6 origin-center"
          />
        </div>

        {/* Narrative Flow */}
        <div className="space-y-32">
          {stories.map((story) => {
            const isLeft = story.align === 'left';
            return (
              <div
                key={story.tag}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  isLeft ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Text Block */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, type: 'spring', damping: 20 }}
                  className="flex-1 space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/5 border border-gold/15">
                      {story.icon}
                    </div>
                    <span className="font-serif text-xs tracking-[0.25em] text-gold uppercase font-medium">
                      {story.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-cream leading-tight">
                    {story.title}
                  </h3>

                  <p className="font-sans text-cream/70 text-base font-light leading-relaxed tracking-wide">
                    {story.description}
                  </p>

                  <div className="pt-2">
                    <div className="inline-flex items-center gap-2 font-serif text-xs tracking-widest text-gold/80 uppercase group cursor-default">
                      <span>Artisan Gastronomy</span>
                      <div className="h-[1px] w-6 bg-gold/40 group-hover:w-10 transition-all duration-300" />
                    </div>
                  </div>
                </motion.div>

                {/* Image Block */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.9 }}
                  className="flex-1 relative group w-full"
                >
                  {/* Decorative Frame */}
                  <div className="absolute -inset-3 rounded-2xl border border-gold/5 group-hover:border-gold/15 transition-colors duration-500 pointer-events-none" />

                  {/* Image container */}
                  <div className="relative overflow-hidden rounded-xl border border-gold/10 aspect-[4/3] w-full">
                    {/* Hover Shine Overlay */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine" />

                    <img
                      src={story.img}
                      alt={story.title}
                      className="object-cover w-full h-full transform transition-transform duration-1000 group-hover:scale-105"
                    />

                    {/* Dark gradient corners */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                  </div>

                  {/* Tiny floating specs */}
                  <div className="absolute -bottom-4 -right-4 h-16 w-16 bg-gold/10 rounded-full blur-xl pointer-events-none" />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
