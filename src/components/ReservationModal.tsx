import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, Gift, CheckCircle, ChevronRight, ArrowLeft } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [step, setStep] = useState(1);
  const [guestCount, setGuestCount] = useState(2);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [occasion, setOccasion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dietary, setDietary] = useState('');

  const timeSlots = [
    { label: '5:30 PM', available: true },
    { label: '6:00 PM', available: true },
    { label: '6:30 PM', available: false },
    { label: '7:00 PM', available: true },
    { label: '7:30 PM', available: true },
    { label: '8:00 PM', available: true },
    { label: '8:30 PM', available: false },
    { label: '9:00 PM', available: true },
    { label: '9:30 PM', available: true },
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handleClose = () => {
    setStep(1);
    setSelectedDate('');
    setSelectedTime('');
    setOccasion('');
    setName('');
    setEmail('');
    setPhone('');
    setDietary('');
    onClose();
  };

  const isStep1Valid = guestCount > 0 && selectedDate && selectedTime;
  const isStep2Valid = name && email && phone;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-charcoal/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-gold/20 bg-charcoal-light shadow-2xl"
          >
            {/* Header border stripe */}
            <div className="h-1.5 w-full bg-gradient-to-r from-gold via-cream to-emerald" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 rounded-full border border-gold/10 p-2 text-cream/70 hover:bg-gold/10 hover:text-gold transition-colors"
            >
              <X size={20} />
            </button>

            {/* Content Area */}
            <div className="p-6 md:p-10">
              {step < 3 && (
                <div className="mb-8 flex items-center justify-between border-b border-gold/10 pb-6">
                  <div>
                    <h3 className="font-serif text-3xl font-bold gold-text-gradient">Reserve a Table</h3>
                    <p className="mt-1 text-sm text-cream/50">Experience the culinary fire of Ember & Basil</p>
                  </div>
                  {step > 1 && (
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-2 text-sm text-gold hover:text-cream transition-colors"
                    >
                      <ArrowLeft size={16} /> Back
                    </button>
                  )}
                </div>
              )}

              {/* Step 1: Details Selector */}
              {step === 1 && (
                <div className="space-y-6">
                  {/* Guest Count Selector */}
                  <div>
                    <label className="mb-3 flex items-center gap-2 font-serif text-lg text-cream/90">
                      <Users size={18} className="text-gold" /> Number of Guests
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setGuestCount(num)}
                          className={`flex-1 min-w-[50px] py-3 rounded-lg border font-medium text-sm transition-all duration-300 ${
                            guestCount === num
                              ? 'border-gold bg-gold/15 text-gold shadow-[0_0_15px_rgba(199,167,108,0.2)]'
                              : 'border-gold/10 bg-charcoal hover:border-gold/40 text-cream/70'
                          }`}
                        >
                          {num} {num === 8 ? '+' : ''}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date and Occasion grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="mb-3 flex items-center gap-2 font-serif text-lg text-cream/90">
                        <Calendar size={18} className="text-gold" /> Select Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full rounded-lg border border-gold/10 bg-charcoal px-4 py-3 text-cream outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                      />
                    </div>

                    <div>
                      <label className="mb-3 flex items-center gap-2 font-serif text-lg text-cream/90">
                        <Gift size={18} className="text-gold" /> Special Occasion
                      </label>
                      <select
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="w-full rounded-lg border border-gold/10 bg-charcoal px-4 py-3 text-cream/80 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23C7A76C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 1rem center',
                          backgroundSize: '1.25em'
                        }}
                      >
                        <option value="">No Occasion</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Date Night">Date Night</option>
                        <option value="Business Dinner">Business Dinner</option>
                        <option value="Celebration">Celebration</option>
                      </select>
                    </div>
                  </div>

                  {/* Time Selector */}
                  <div>
                    <label className="mb-3 flex items-center gap-2 font-serif text-lg text-cream/90">
                      <Clock size={18} className="text-gold" /> Dining Time
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.label}
                          type="button"
                          disabled={!slot.available}
                          onClick={() => setSelectedTime(slot.label)}
                          className={`py-3.5 rounded-lg border font-medium text-xs transition-all duration-300 ${
                            !slot.available
                              ? 'border-transparent bg-charcoal/30 text-cream/20 cursor-not-allowed'
                              : selectedTime === slot.label
                              ? 'border-gold bg-gold/15 text-gold shadow-[0_0_15px_rgba(199,167,108,0.2)]'
                              : 'border-gold/10 bg-charcoal hover:border-gold/40 text-cream/70'
                          }`}
                        >
                          {slot.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 1 Actions */}
                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      disabled={!isStep1Valid}
                      onClick={handleNext}
                      className={`flex items-center gap-2 rounded-full px-8 py-3.5 font-serif text-sm font-semibold transition-all duration-300 ${
                        isStep1Valid
                          ? 'bg-gold text-charcoal hover:bg-gold-hover cursor-pointer active:scale-95 shadow-[0_4px_20px_rgba(199,167,108,0.2)]'
                          : 'bg-gold/20 text-cream/35 cursor-not-allowed'
                      }`}
                    >
                      Guest Info <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Contact Form */}
              {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-cream/70">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-gold/10 bg-charcoal px-4 py-3 text-cream outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-cream/70">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-gold/10 bg-charcoal px-4 py-3 text-cream outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-cream/70">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(555) 000-0000"
                        className="w-full rounded-lg border border-gold/10 bg-charcoal px-4 py-3 text-cream outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-cream/70">Dietary & Special Notes (Optional)</label>
                      <input
                        type="text"
                        value={dietary}
                        onChange={(e) => setDietary(e.target.value)}
                        placeholder="e.g. Vegetarian, nut allergy, seating preference"
                        className="w-full rounded-lg border border-gold/10 bg-charcoal px-4 py-3 text-cream outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                      />
                    </div>
                  </div>

                  <p className="text-center text-xs text-cream/40 pt-2">
                    * By submitting, you agree to receive SMS & email updates about your dining reservation.
                  </p>

                  {/* Step 2 Actions */}
                  <div className="pt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="rounded-full border border-gold/20 px-6 py-3 font-serif text-sm text-gold hover:bg-gold/10 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!isStep2Valid}
                      className={`flex items-center gap-2 rounded-full px-8 py-3.5 font-serif text-sm font-semibold transition-all duration-300 ${
                        isStep2Valid
                          ? 'bg-gold text-charcoal hover:bg-gold-hover cursor-pointer active:scale-95 shadow-[0_4px_20px_rgba(199,167,108,0.2)]'
                          : 'bg-gold/20 text-cream/35 cursor-not-allowed'
                      }`}
                    >
                      Confirm Reservation
                    </button>
                  </div>
                </form>
              )}

              {/* Step 3: Success Confirmation */}
              {step === 3 && (
                <div className="text-center py-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 12, stiffness: 150, delay: 0.1 }}
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald/15 text-emerald border border-emerald/30"
                  >
                    <CheckCircle size={44} />
                  </motion.div>

                  <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 font-serif text-3xl font-bold text-cream"
                  >
                    Reservation Confirmed
                  </motion.h4>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-2 text-gold font-medium font-serif tracking-wider"
                  >
                    CONFIRMATION ID: EB-{Math.floor(1000 + Math.random() * 9000)}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mx-auto mt-8 max-w-sm rounded-xl border border-gold/10 bg-charcoal p-6 text-left space-y-3"
                  >
                    <div className="flex justify-between border-b border-gold/5 pb-2 text-sm">
                      <span className="text-cream/50">Guest Name:</span>
                      <span className="font-semibold text-cream">{name}</span>
                    </div>
                    <div className="flex justify-between border-b border-gold/5 pb-2 text-sm">
                      <span className="text-cream/50">Date & Time:</span>
                      <span className="font-semibold text-cream">{selectedDate} at {selectedTime}</span>
                    </div>
                    <div className="flex justify-between border-b border-gold/5 pb-2 text-sm">
                      <span className="text-cream/50">Table For:</span>
                      <span className="font-semibold text-cream">{guestCount} Guests</span>
                    </div>
                    {occasion && (
                      <div className="flex justify-between border-b border-gold/5 pb-2 text-sm">
                        <span className="text-cream/50">Occasion:</span>
                        <span className="font-semibold text-gold">{occasion}</span>
                      </div>
                    )}
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    onClick={handleClose}
                    className="mt-8 rounded-full bg-gold px-10 py-3 font-serif text-sm font-semibold text-charcoal hover:bg-gold-hover transition-colors"
                  >
                    Done
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
