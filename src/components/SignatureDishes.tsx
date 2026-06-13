import { motion } from 'framer-motion';
import { Flame, Trees, Sparkles } from 'lucide-react';

export default function SignatureDishes() {
  const dishes = [
    {
      name: 'Ember-Grilled Wagyu Ribeye',
      price: '$95',
      desc: 'A9 Japanese Wagyu seared over glowing oak embers, served with smoked garlic confit, wild rosemary reduction, and basalt salt flakes.',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000',
      badge: 'Chef Signature',
      icon: <Flame size={14} className="text-gold" />,
    },
    {
      name: 'Basil-Crusted Atlantic Cod',
      price: '$62',
      desc: 'Pan-seared cod coated in a fresh pistachio & sweet basil crust, served over charred leek emulsion, tomato-water foam, and cold-pressed herb oil.',
      img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000',
      badge: 'Garden Fresh',
      icon: <Trees size={14} className="text-gold" />,
    },
    {
      name: 'Wood-Roasted Heritage Beetroot',
      price: '$45',
      desc: 'Salt-baked beetroots caramelized in the ember oven, served with whipped goat cheese, wild honeycomb, roasted hazelnuts, and basil dust.',
      img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000',
      badge: 'Elemental',
      icon: <Sparkles size={14} className="text-gold" />,
    },
    {
      name: 'Smoked Herb-Infused Soufflé',
      price: '$38',
      desc: 'Fluffy dark chocolate soufflé smoked under a glass cloche with hickory, accompanied by sweet basil-lime gelato and a 24k gold leaf finish.',
      img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000',
      badge: 'Exquisite',
      icon: <Flame size={14} className="text-gold" />,
    },
  ];

  return (
    <section className="relative bg-charcoal-light py-24 overflow-hidden border-b border-gold/10">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-emerald/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-serif text-xs tracking-[0.3em] text-gold uppercase font-semibold">
            The Signatures
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-bold tracking-tight text-cream">
            Interactive Culinary Masterpieces
          </h2>
          <p className="mt-4 text-cream/60 text-sm max-w-md mx-auto">
            Hover over our creations to reveal the sensory elements of smoke and garden freshness.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {dishes.map((dish, idx) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group relative rounded-2xl bg-charcoal border border-gold/10 p-5 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(199,167,108,0.15)] hover:-translate-y-1 transition-all duration-500 flex flex-col md:flex-row gap-6 overflow-hidden"
            >
              {/* Green/Gold border glow effect */}
              <div className="absolute inset-0 border border-emerald/0 group-hover:border-emerald/10 rounded-2xl transition-colors duration-500 pointer-events-none" />

              {/* Image side */}
              <div className="relative overflow-hidden rounded-xl border border-gold/5 aspect-square md:w-48 w-full flex-shrink-0">
                {/* Shine Animation */}
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine" />

                <img
                  src={dish.img}
                  alt={dish.name}
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-108"
                />
              </div>

              {/* Detail side */}
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-1.5 rounded-full bg-gold/5 border border-gold/15 px-3 py-1 font-serif text-[10px] tracking-wider text-gold uppercase font-medium">
                      {dish.icon} {dish.badge}
                    </span>
                    <span className="font-serif text-xl font-bold text-gold">{dish.price}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-cream group-hover:text-gold transition-colors duration-300 mt-2">
                    {dish.name}
                  </h3>

                  <p className="mt-3 text-sm text-cream/60 leading-relaxed font-light">
                    {dish.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gold/5 mt-4 flex items-center justify-between">
                  <span className="text-[10px] text-cream/40 tracking-wider uppercase font-semibold">
                    Contains organic basil
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse-slow" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
