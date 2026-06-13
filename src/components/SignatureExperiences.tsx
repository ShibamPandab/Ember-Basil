import { motion } from 'framer-motion';
import { GlassWater, Users, Landmark, Trees } from 'lucide-react';

interface SignatureExperiencesProps {
  onOpenReservation: () => void;
}

export default function SignatureExperiences({ onOpenReservation }: SignatureExperiencesProps) {
  const experiences = [
    {
      title: "The Chef's Table",
      subtitle: 'Front Row Gastronomy',
      desc: "An immersive 9-course journey served directly from the hearth by Chef Vance himself. Watch the master align open flames, coal height, and herbal reductions.",
      img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000',
      icon: <Users size={16} className="text-gold" />,
      capacity: 'Up to 6 guests',
      price: '$180 per person',
    },
    {
      title: 'Private Dining Sanctuary',
      subtitle: 'Exclusive Celebrations',
      desc: 'Our secluded wine-lined chamber is perfect for executive boards, wedding events, or family milestones. Features custom lighting and dedicated service.',
      img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000',
      icon: <Landmark size={16} className="text-gold" />,
      capacity: '8 to 16 guests',
      price: 'Custom menu pricing',
    },
    {
      title: 'Wine & Herb Pairing Cellar',
      subtitle: 'Subterranean Curations',
      desc: 'Delve into our underground cellar. Sample rare vintages curated by our head sommelier, paired perfectly with dry-aged charcuterie and fresh herb-extract reductions.',
      img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000',
      icon: <GlassWater size={16} className="text-gold" />,
      capacity: 'Up to 10 guests',
      price: '$120 pairing add-on',
    },
    {
      title: 'The Basil Rooftop Terrace',
      subtitle: 'Dining Under the Stars',
      desc: 'Dine adjacent to our vertical basil green walls. Surrounded by fireplaces, city skylines, and cooling herb breezes, this is our most romantic space.',
      img: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1000',
      icon: <Trees size={16} className="text-gold" />,
      capacity: 'Up to 30 guests',
      price: '$90 minimum spend',
    },
  ];

  return (
    <section id="experiences" className="relative bg-charcoal-light py-24 overflow-hidden border-b border-gold/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-serif text-xs tracking-[0.3em] text-gold uppercase font-semibold">
            Signature Curation
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-bold tracking-tight text-cream">
            Bespoke Dining Experiences
          </h2>
          <p className="mt-4 text-cream/50 text-sm max-w-md mx-auto">
            Elevate your evening with curated concepts that expand the boundary of standard fine dining.
          </p>
        </div>

        {/* Experience Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group relative flex flex-col rounded-2xl border border-gold/10 bg-charcoal overflow-hidden hover:border-gold/30 hover:shadow-[0_4px_30px_rgba(199,167,108,0.1)] transition-all duration-500"
            >
              {/* Image Container with zoom */}
              <div className="relative overflow-hidden aspect-[16/9] w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent z-10" />
                <img
                  src={exp.img}
                  alt={exp.title}
                  className="object-cover w-full h-full transform transition-transform duration-1000 scale-100 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20 glassmorphism px-3.5 py-1.5 rounded-full border border-gold/20 flex items-center gap-2">
                  {exp.icon}
                  <span className="text-[10px] font-bold text-gold tracking-wider uppercase">
                    {exp.capacity}
                  </span>
                </div>
              </div>

              {/* Text / Details Container */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <span className="font-serif text-xs font-semibold text-gold tracking-widest uppercase">
                    {exp.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-cream mt-2 group-hover:text-gold transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="mt-3 text-sm text-cream/65 leading-relaxed font-light">
                    {exp.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-gold/5 mt-6 flex items-center justify-between">
                  <span className="font-serif text-sm font-semibold text-gold">
                    {exp.price}
                  </span>
                  <button
                    onClick={onOpenReservation}
                    className="rounded-full border border-gold/30 px-5 py-2 font-serif text-xs tracking-wider text-gold uppercase hover:bg-gold hover:text-charcoal transition-all duration-300 cursor-pointer"
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
