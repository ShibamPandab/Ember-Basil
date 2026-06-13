import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Heart, Flame } from 'lucide-react';

interface CountUpProps {
  to: number;
  duration?: number;
}

function CountUp({ to, duration = 2 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * to));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasAnimated, to, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
}

export default function Stats() {
  const stats = [
    {
      icon: <Flame className="text-gold" size={24} />,
      value: 12000,
      suffix: '+',
      label: 'Guests Served',
      description: 'Discerning gourmands welcomed',
    },
    {
      icon: <Compass className="text-gold" size={24} />,
      value: 18,
      suffix: '',
      label: 'Signature Dishes',
      description: 'Masterfully curated innovations',
    },
    {
      icon: <Heart className="text-gold" size={24} />,
      value: 12,
      suffix: '+',
      label: 'Years of Excellence',
      description: 'From local secret to culinary star',
    },
    {
      icon: <Award className="text-gold" size={24} />,
      value: 6,
      suffix: '',
      label: 'Prestigious Awards',
      description: 'Michelin honors & global rankings',
    },
  ];

  return (
    <section className="relative z-10 bg-charcoal py-16 md:py-24 border-y border-gold/10">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl glassmorphism-light hover:border-gold/20 transition-all duration-500 group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/5 border border-gold/10 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500 mb-5">
                {stat.icon}
              </div>
              <div className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-cream flex items-baseline justify-center">
                <CountUp to={stat.value} />
                <span className="text-gold text-2xl md:text-3xl ml-0.5">{stat.suffix}</span>
              </div>
              <h4 className="mt-4 font-serif text-lg font-semibold tracking-wider text-gold/90 uppercase">
                {stat.label}
              </h4>
              <p className="mt-2 text-sm text-cream/50 max-w-[200px] leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
