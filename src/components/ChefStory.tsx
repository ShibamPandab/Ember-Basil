import { motion } from 'framer-motion';
import { Award, Star, Flame, Trophy } from 'lucide-react';

export default function ChefStory() {
  const milestones = [
    {
      year: '2012',
      title: 'Apprenticeship in Paris',
      desc: 'Mastered classic culinary arts under three-star Michelin legends, specializing in meat aging.',
      icon: <Star size={14} className="text-gold" />,
    },
    {
      year: '2016',
      title: 'London Culinary Summit Winner',
      desc: 'Awarded "Best Innovator of the Year" for smoke infusion and charcoal baking techniques.',
      icon: <Trophy size={14} className="text-gold" />,
    },
    {
      year: '2019',
      title: 'Hearth Concept Conception',
      desc: 'Designed the custom multi-tiered iron spit and open wood-fire dining grill system.',
      icon: <Flame size={14} className="text-gold" />,
    },
    {
      year: '2022',
      title: 'Launch of Ember & Basil',
      desc: 'Brought the fire-and-green luxury experience to life, instantly earning critical acclaim.',
      icon: <Award size={14} className="text-gold" />,
    },
  ];

  return (
    <section className="relative bg-charcoal py-24 overflow-hidden border-b border-gold/10">
      {/* Decorative backdrop elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Chef Image Column (lg: 5 cols) */}
          <div className="lg:col-span-5 relative group w-full max-w-md mx-auto lg:max-w-none">
            {/* Elegant double border */}
            <div className="absolute -inset-4 rounded-2xl border border-gold/15 pointer-events-none" />
            <div className="absolute -inset-2 rounded-2xl border border-gold/5 pointer-events-none" />

            <div className="relative overflow-hidden rounded-xl border border-gold/15 aspect-[3/4] w-full bg-charcoal-light">
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1000"
                alt="Chef Sebastian Vance"
                className="object-cover w-full h-full transform transition-transform duration-[1200ms] group-hover:scale-103"
              />

              {/* Float info tag inside image */}
              <div className="absolute bottom-6 left-6 right-6 z-20 glassmorphism p-5 rounded-lg border border-gold/20">
                <span className="block font-serif text-xs font-semibold text-gold tracking-widest uppercase">
                  Executive Chef
                </span>
                <span className="block font-serif text-2xl font-bold text-cream mt-1">
                  Sebastian Vance
                </span>
                <span className="block text-[10px] text-cream/40 mt-1 uppercase tracking-wider">
                  Co-Founder, Ember & Basil
                </span>
              </div>
            </div>

            {/* Glowing gold dot */}
            <div className="absolute -top-3 -right-3 h-6 w-6 bg-gold/30 rounded-full blur-md animate-pulse" />
          </div>

          {/* Chef Philosophy & Timeline Column (lg: 7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-serif text-xs tracking-[0.3em] text-gold uppercase font-semibold">
                Philosophy & Story
              </span>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-bold tracking-tight text-cream leading-tight">
                Crafting Culinary Legacies <br />
                <span className="gold-text-gradient font-normal italic font-serif">With Fire & Soul</span>
              </h2>
            </div>

            {/* Philosophy blockquote */}
            <blockquote className="border-l-2 border-gold pl-6 py-1 italic font-serif text-xl text-cream/90 leading-relaxed max-w-2xl">
              "Fire is not a mere heating tool; it is a primal ingredient that breathes character and aroma. Basil is the green breeze that tempers the embers. Together, they create pure harmony."
            </blockquote>

            {/* Timeline Milestones */}
            <div className="space-y-6 pt-4">
              <h3 className="font-serif text-xl font-bold text-cream tracking-wide">
                Path of Excellence
              </h3>

              <div className="relative border-l border-gold/10 pl-6 space-y-6 ml-3">
                {milestones.map((m, idx) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="relative group"
                  >
                    {/* Timeline Node Icon */}
                    <div className="absolute -left-[37px] top-1.5 flex h-6.5 w-6.5 items-center justify-center rounded-full bg-charcoal border border-gold/30 group-hover:border-gold transition-colors duration-300">
                      {m.icon}
                    </div>

                    <div>
                      <span className="font-serif text-sm font-bold text-gold tracking-widest">
                        {m.year}
                      </span>
                      <h4 className="font-serif text-lg font-semibold text-cream mt-0.5">
                        {m.title}
                      </h4>
                      <p className="text-sm text-cream/50 mt-1 leading-relaxed max-w-xl">
                        {m.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
