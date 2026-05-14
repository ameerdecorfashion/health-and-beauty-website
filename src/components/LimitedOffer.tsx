import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Timer, Zap, ShoppingBag } from "lucide-react";

export default function LimitedOffer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-10">
        <div className="artistic-border bg-hero-soft p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
          {/* Animated Background Text */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
             <span className="text-[200px] font-serif italic whitespace-nowrap">FLASH SALE • LIMITED QUANTITY</span>
          </div>

          <div className="relative z-10 space-y-8 max-w-xl">
             <div className="inline-flex items-center gap-3 bg-accent-rose/20 px-6 py-2 rounded-full border border-accent-rose/30">
                <Zap className="w-4 h-4 text-accent-rose fill-accent-rose" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-emerald">Limited Time Event</span>
             </div>
             
             <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tighter leading-tight text-primary-charcoal">
                The <span className="italic">Solstice</span> <br /> Bundle.
             </h2>
             
             <p className="text-[15px] text-primary-charcoal/60 leading-relaxed">
                Our ultra-premium summer ritual set. Includes full-size Ceramide Glow Serum, Oxygen Cleanser, and a limited edition Rose Quartz Roller.
             </p>

             <div className="flex items-center gap-8">
                <div className="space-y-1">
                   <p className="text-[9px] font-bold uppercase tracking-widest opacity-40">Ritual Value</p>
                   <p className="text-2xl font-light line-through text-primary-charcoal/30">$108.00</p>
                </div>
                <div className="space-y-1">
                   <p className="text-[9px] font-bold uppercase tracking-widest text-accent-rose">Special Offer</p>
                   <p className="text-4xl font-bold text-primary-charcoal">$79.00</p>
                </div>
             </div>

             <button className="btn-artistic group flex items-center gap-4">
                Claim Offer
                <ShoppingBag className="w-4 h-4 group-hover:rotate-12 transition-transform" />
             </button>
          </div>

          <div className="relative z-10 bg-white luxury-shadow p-12 artistic-border flex flex-col items-center gap-8">
             <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-charcoal/40">Expires In</p>
             <div className="flex gap-6">
                {[
                  { label: "Hours", val: formatNum(timeLeft.hours) },
                  { label: "Mins", val: formatNum(timeLeft.minutes) },
                  { label: "Secs", val: formatNum(timeLeft.seconds) },
                ].map((t) => (
                  <div key={t.label} className="text-center group">
                     <div className="text-5xl md:text-6xl font-serif italic text-primary-charcoal mb-2 tabular-nums">
                        {t.val}
                     </div>
                     <p className="text-[9px] font-bold uppercase tracking-widest text-primary-charcoal/30 group-hover:text-accent-rose transition-colors">{t.label}</p>
                  </div>
                ))}
             </div>
             <div className="w-full bg-primary-charcoal/5 h-1 relative rounded-full overflow-hidden">
                <motion.div 
                   animate={{ width: ["100%", "0%"] }}
                   transition={{ duration: 86400, ease: "linear" }}
                   className="absolute inset-y-0 left-0 bg-accent-rose"
                />
             </div>
             <p className="text-[10px] font-bold uppercase tracking-widest text-accent-emerald">92% Claimed • Almost sold out</p>
          </div>
        </div>
      </div>
    </section>
  );
}
