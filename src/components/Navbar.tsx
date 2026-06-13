import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Flame } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export default function Navbar({ onOpenReservation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Journey', href: '#journey' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glassmorphism py-4 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-transparent py-6 border-b border-white/5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-charcoal-light transition-all duration-500 group-hover:border-gold">
              <Flame size={18} className="text-gold group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 rounded-full border border-gold/0 group-hover:border-gold/30 animate-pulse-slow" />
            </div>
            <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.2em] text-cream group-hover:text-gold transition-colors duration-300">
              EMBER & BASIL
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative font-serif text-sm tracking-widest text-cream/70 hover:text-gold uppercase transition-colors duration-300 py-1.5 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
            <button
              onClick={onOpenReservation}
              className="relative overflow-hidden rounded-full border border-gold/30 bg-transparent px-6 py-2.5 font-serif text-xs tracking-widest text-gold uppercase transition-all duration-500 hover:border-gold hover:text-charcoal hover:bg-gold shadow-[0_0_15px_rgba(199,167,108,0)] hover:shadow-[0_0_20px_rgba(199,167,108,0.3)] active:scale-95 cursor-pointer"
            >
              Reserve A Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={onOpenReservation}
              className="rounded-full border border-gold/30 bg-transparent px-4 py-2 font-serif text-[10px] tracking-wider text-gold uppercase hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              Reserve
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-1 text-cream/80 hover:text-gold transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-charcoal/95 backdrop-blur-lg"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm border-l border-gold/10 bg-charcoal-light p-8 shadow-2xl flex flex-col justify-between"
            >
              {/* Close and Title */}
              <div>
                <div className="flex items-center justify-between border-b border-gold/10 pb-6 mb-8">
                  <span className="font-serif text-lg font-bold tracking-widest text-gold">NAVIGATION</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-full border border-gold/10 p-2 text-cream/70 hover:bg-gold/10 hover:text-gold transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Staggered Links */}
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-serif text-2xl tracking-widest text-cream/80 hover:text-gold uppercase transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer Reservation */}
              <div className="border-t border-gold/10 pt-6">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full rounded-full bg-gold py-4 text-center font-serif text-sm font-semibold tracking-widest text-charcoal uppercase hover:bg-gold-hover transition-colors shadow-[0_4px_15px_rgba(199,167,108,0.2)] active:scale-95"
                >
                  Reserve A Table
                </button>
                <div className="mt-4 text-center text-xs text-cream/40">
                  Curation of Fire, Flavor & Elegance
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
