import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ScrollStory from './components/ScrollStory';
import SignatureDishes from './components/SignatureDishes';
import TastingMenu from './components/TastingMenu';
import IngredientsJourney from './components/IngredientsJourney';
import ChefStory from './components/ChefStory';
import SignatureExperiences from './components/SignatureExperiences';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling 400px (past the hero main fold)
      if (window.scrollY > 400) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-charcoal text-cream font-sans antialiased overflow-x-hidden">
      {/* Structural Glass Gradients */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold/3 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-emerald/3 blur-[120px]" />
      </div>

      {/* Main UI Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <Navbar onOpenReservation={() => setIsReservationOpen(true)} />

        {/* Hero Section */}
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />

        {/* Statistics Section */}
        <Stats />

        {/* Scroll Story Section */}
        <ScrollStory />

        {/* Signature Dishes Showcase */}
        <SignatureDishes />

        {/* Interactive Tasting Menu */}
        <TastingMenu />

        {/* Ingredients Journey (Horizontal Scroll) */}
        <IngredientsJourney />

        {/* Chef Biography & Achievements */}
        <ChefStory />

        {/* Private Dining / Chef Table Experiences */}
        <SignatureExperiences onOpenReservation={() => setIsReservationOpen(true)} />

        {/* Customer Reviews & Testimonials Carousel */}
        <Testimonials />

        {/* Visual Masonry Gallery & Lightbox */}
        <Gallery />

        {/* Multi-column Footer */}
        <Footer />
      </div>

      {/* Floating Reservation Action Button */}
      <AnimatePresence>
        {showFloatingButton && (
          <motion.button
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: 'spring', damping: 20 }}
            onClick={() => setIsReservationOpen(true)}
            className="fixed bottom-6 right-6 z-30 flex items-center gap-3.5 rounded-full bg-gold px-6 py-4 font-serif text-sm font-bold tracking-wider text-charcoal hover:bg-gold-hover shadow-[0_4px_25px_rgba(199,167,108,0.4)] hover:shadow-[0_4px_30px_rgba(199,167,108,0.6)] border border-gold/15 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Calendar size={18} />
            <span className="uppercase tracking-[0.15em] text-xs">Reserve Table</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Reservation Modal Container */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}
