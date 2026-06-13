import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type MenuCategory = 'Starters' | 'Main Course' | 'Signature Specials' | 'Desserts' | 'Drinks';

interface MenuItem {
  name: string;
  price: string;
  desc: string;
  category: MenuCategory;
  spicy?: boolean;
  vegan?: boolean;
}

export default function TastingMenu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Signature Specials');

  const categories: MenuCategory[] = [
    'Starters',
    'Main Course',
    'Signature Specials',
    'Desserts',
    'Drinks',
  ];

  const menuItems: MenuItem[] = [
    // Starters
    {
      name: 'Wood-Seared Sea Scallops',
      price: '$28',
      desc: 'Atlantic scallops seared on hot cedar, served with pea-mint purée, sweet basil emulsion, and crisp pancetta crumbs.',
      category: 'Starters',
    },
    {
      name: 'Smoked Heirloom Burrata',
      price: '$24',
      desc: 'Creamy burrata lightly smoked in applewood, with roasted heirloom tomatoes, micro-basil oil, and crunchy sourdough crisps.',
      category: 'Starters',
      vegan: true,
    },
    {
      name: 'Charcoal Artichoke Hearts',
      price: '$22',
      desc: 'Hearts grilled over coals, stuffed with cashew herb-crust, finished with fresh lemon herb reduction.',
      category: 'Starters',
      vegan: true,
    },
    // Mains
    {
      name: 'Dry-Aged Tomahawk Slice',
      price: '$58',
      desc: 'Single portion 45-day aged Tomahawk steak grilled over ash embers, served with potato truffle mash and a rich red-wine glaze.',
      category: 'Main Course',
    },
    {
      name: 'Wood-Roasted Wild Halibut',
      price: '$48',
      desc: 'Wild halibut fillet wrapped in vine leaves, roasted in our brick oven, served with grilled baby asparagus and herb butter.',
      category: 'Main Course',
    },
    {
      name: 'Ember-Smoked Duck Breast',
      price: '$44',
      desc: 'Heritage duck breast smoked over cherry wood, served with parsnip purée, sweet basil plum reduction, and crispy skin crumbles.',
      category: 'Main Course',
    },
    // Signatures
    {
      name: 'Ember-Grilled Wagyu Ribeye',
      price: '$95',
      desc: 'A9 Japanese Wagyu seared over glowing oak embers, served with smoked garlic confit, wild rosemary reduction, and basalt salt.',
      category: 'Signature Specials',
    },
    {
      name: 'Basil-Crusted Atlantic Cod',
      price: '$62',
      desc: 'Pan-seared cod coated in a fresh pistachio & sweet basil crust, served over charred leek emulsion and cold-pressed oil.',
      category: 'Signature Specials',
    },
    {
      name: 'Wood-Roasted Heritage Beetroot',
      price: '$45',
      desc: 'Salt-baked beetroots caramelized in the ember oven, served with whipped goat cheese, wild honeycomb, and basil dust.',
      category: 'Signature Specials',
      vegan: true,
    },
    // Desserts
    {
      name: 'Smoked Chocolate Fondant',
      price: '$24',
      desc: 'Rich dark chocolate cake with a molten core, smoked under cloche, served with sweet basil-lime gelato.',
      category: 'Desserts',
    },
    {
      name: 'Sweet Basil Panna Cotta',
      price: '$20',
      desc: 'Silky cream infused with fresh garden basil, served with wild berry compote and gold leaf sugar crunch.',
      category: 'Desserts',
    },
    {
      name: 'Charred Citrus Tart',
      price: '$18',
      desc: 'Caramelized blood-orange custard in a buttery sable shell, topped with torched honey meringue.',
      category: 'Desserts',
    },
    // Drinks
    {
      name: 'The Basil Smash Highball',
      price: '$22',
      desc: 'Muddled fresh sweet basil, artisanal botanical gin, freshly squeezed lemon juice, and a splash of organic tonic.',
      category: 'Drinks',
    },
    {
      name: 'Smoked Rosemary Old Fashioned',
      price: '$24',
      desc: 'Premium bourbon stirred with house bitters, brown sugar, served over clear block ice and smoked with a fresh rosemary sprig.',
      category: 'Drinks',
    },
    {
      name: 'Hearth-Baked Herb Mocktail',
      price: '$16',
      desc: 'Pressed grape, ginger infusion, charred mint oil, cold-extracted basil extract, and carbonated mountain spring water.',
      category: 'Drinks',
      vegan: true,
    },
  ];

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="relative bg-charcoal py-24 overflow-hidden border-b border-gold/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-serif text-xs tracking-[0.3em] text-gold uppercase font-semibold">
            Tasting Menu
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-bold tracking-tight text-cream">
            The Culinary Selections
          </h2>
          <p className="mt-4 text-cream/50 text-sm max-w-md mx-auto">
            A meticulous balance of flame-baked warmth and refreshing herbaceous notes.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center border-b border-gold/10 pb-4 overflow-x-auto no-scrollbar mb-12">
          <div className="flex gap-4 sm:gap-8 min-w-[500px] justify-center px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative py-2 font-serif text-sm md:text-base tracking-wider text-cream/60 hover:text-cream transition-colors duration-300 uppercase cursor-pointer"
              >
                <span className={activeCategory === category ? 'text-gold font-medium' : ''}>
                  {category}
                </span>
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-gold"
                    transition={{ type: 'spring', damping: 20, stiffness: 250 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="min-h-[400px]">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  key={item.name}
                  className="flex flex-col justify-between group"
                >
                  <div>
                    {/* Title and Price line */}
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-serif text-xl font-bold text-cream group-hover:text-gold transition-colors duration-300">
                        {item.name}
                      </h3>
                      {/* Dotted connector */}
                      <div className="flex-grow border-b border-dashed border-gold/15 mx-2 group-hover:border-gold/30 transition-colors" />
                      <span className="font-serif text-lg font-bold text-gold">{item.price}</span>
                    </div>

                    {/* Description */}
                    <p className="mt-2 text-sm text-cream/50 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="mt-3 flex gap-2">
                    {item.vegan && (
                      <span className="rounded bg-emerald/10 border border-emerald/20 px-2 py-0.5 text-[9px] font-medium text-emerald uppercase tracking-wider">
                        Vegetarian
                      </span>
                    )}
                    {item.category === 'Signature Specials' && (
                      <span className="rounded bg-gold/10 border border-gold/20 px-2 py-0.5 text-[9px] font-medium text-gold uppercase tracking-wider">
                        Award-Winning
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Dietary info legend */}
        <div className="mt-16 text-center border-t border-gold/10 pt-8 text-xs text-cream/40 space-x-6">
          <span>* Pricing is exclusive of local dining tax and service charges.</span>
          <span>* Notify your server of any severe allergies before ordering.</span>
        </div>
      </div>
    </section>
  );
}
