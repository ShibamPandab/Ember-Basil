import React, { useState } from 'react';
import { Mail, Phone, MapPin, Compass, Flame } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-charcoal border-t border-gold/15 pt-20 pb-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-emerald/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-gold/10">
          
          {/* Brand Info (lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-charcoal-light">
                <Flame size={18} className="text-gold" />
              </div>
              <span className="font-serif text-xl font-bold tracking-[0.2em] text-cream">
                EMBER & BASIL
              </span>
            </a>
            <p className="text-sm text-cream/50 leading-relaxed font-light max-w-sm">
              An experience beyond dining. A Michelin-inspired culinary journey crafted with wood fire, delicate garden herbs, and unforgettable atmospheres.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full border border-gold/10 flex items-center justify-center text-cream/70 hover:border-gold hover:text-gold transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full border border-gold/10 flex items-center justify-center text-cream/70 hover:border-gold hover:text-gold transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full border border-gold/10 flex items-center justify-center text-cream/70 hover:border-gold hover:text-gold transition-colors duration-300"
              >
                <Compass size={16} />
              </a>
            </div>
          </div>

          {/* Quick Contact Links (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-serif text-sm font-bold text-gold tracking-widest uppercase">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3.5">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-cream/70 leading-relaxed font-light">
                  452 Park Avenue, <br />New York, NY 10022
                </span>
              </li>
              <li className="flex items-center gap-3.5">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+12125550199"
                  className="text-sm text-cream/70 hover:text-gold transition-colors font-light"
                >
                  (212) 555-0199
                </a>
              </li>
              <li className="flex items-center gap-3.5">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:reservations@emberandbasil.com"
                  className="text-sm text-cream/70 hover:text-gold transition-colors font-light"
                >
                  concierge@emberandbasil.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours (lg: 2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-serif text-sm font-bold text-gold tracking-widest uppercase">
              Dining Hours
            </h4>
            <ul className="space-y-3 text-sm text-cream/70 font-light">
              <li>
                <span className="block font-medium text-cream/90">Mon - Thu</span>
                <span className="block text-xs text-cream/40 mt-0.5">5:00 PM - 10:00 PM</span>
              </li>
              <li>
                <span className="block font-medium text-cream/90">Fri - Sat</span>
                <span className="block text-xs text-cream/40 mt-0.5">5:00 PM - 11:00 PM</span>
              </li>
              <li>
                <span className="block font-medium text-cream/90">Sunday</span>
                <span className="block text-xs text-gold/60 mt-0.5">Closed (Private Events)</span>
              </li>
            </ul>
          </div>

          {/* Newsletter subscription (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-serif text-sm font-bold text-gold tracking-widest uppercase">
              The Guild List
            </h4>
            <p className="text-sm text-cream/50 leading-relaxed font-light">
              Subscribe to receive updates about seasonal tasting menus, wine tastings, and chef secrets.
            </p>

            {subscribed ? (
              <div className="rounded-lg bg-emerald/10 border border-emerald/20 p-4 text-center">
                <p className="text-sm text-emerald font-serif font-bold">Thank You For Subscribing</p>
                <p className="text-[10px] text-cream/40 mt-1 uppercase">Welcome to Ember & Basil guild list</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gold/15 bg-charcoal-light px-4 py-3 text-sm text-cream outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gold py-3 text-sm font-serif font-bold text-charcoal hover:bg-gold-hover transition-colors cursor-pointer"
                >
                  Join the List
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copy / Lower bar */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/30 gap-4">
          <span>&copy; {new Date().getFullYear()} Ember & Basil. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#accessibility" className="hover:text-gold transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
