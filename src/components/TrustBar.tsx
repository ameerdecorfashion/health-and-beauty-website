import { motion } from "motion/react";
import { Truck, ShieldCheck, RefreshCcw, Leaf, Heart, Zap, Award } from "lucide-react";

const trusts = [
  { icon: Truck, label: "Free Worldwide Shipping" },
  { icon: ShieldCheck, label: "Cruelty Free" },
  { icon: RefreshCcw, label: "Money Back Guarantee" },
  { icon: Leaf, label: "Organic Ingredients" },
  { icon: Zap, label: "Fast Absorption" },
  { icon: Award, label: "FDA Compliant" },
];

export default function TrustBar() {
  return (
    <div className="bg-primary-charcoal py-10 relative overflow-hidden">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-white">
          <div className="flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-accent-emerald hover-glow-emerald" style={{ boxShadow: '0 0 8px #064E3B' }}></div>
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-80">Free Global Shipping</span>
          </div>
          <div className="w-[1px] h-6 bg-white/10 hidden md:block" />
          
          <div className="flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-accent-rose"></div>
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-80">Cruelty Free Certified</span>
          </div>
          <div className="w-[1px] h-6 bg-white/10 hidden md:block" />

          <div className="flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-white/40"></div>
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-80">Dermatologist Tested</span>
          </div>
          <div className="w-[1px] h-6 bg-white/10 hidden md:block" />

          <div className="flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-accent-emerald"></div>
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-80">Proven Results</span>
          </div>
        </div>
      </div>
      
      {/* Background Text Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5">
         <span className="text-[120px] font-serif italic text-white whitespace-nowrap">Clinical Excellence Beyond Boundaries</span>
      </div>
    </div>
  );
}
