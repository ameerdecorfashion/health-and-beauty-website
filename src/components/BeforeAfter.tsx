import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="py-32 bg-primary-beige">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
           <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent-emerald">Proven Transformations</p>
           <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">Real Results, Real Stories</h2>
           <p className="text-lg text-gray-600 leading-relaxed">
             Join 100,000+ customers who have transformed their skin with our clinically-backed formulations. Seen here: 4-week ritual using our Ceramide Glow Serum.
           </p>
        </div>

        <div className="relative max-w-5xl mx-auto h-[600px] rounded-[40px] overflow-hidden luxury-shadow group">
           {/* Before Image */}
           <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale" />
              <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/20">
                 Before Ritual
              </div>
           </div>

           {/* After Image */}
           <div 
             className="absolute inset-0 z-10" 
             style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
           >
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
              <div className="absolute top-8 right-8 bg-accent-emerald/80 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/20">
                 After 4 Weeks
              </div>
           </div>

           {/* Slider Handle */}
           <div 
             className="absolute inset-y-0 z-20 w-1 bg-white cursor-ew-resize"
             style={{ left: `${sliderPos}%` }}
           >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full luxury-shadow flex items-center justify-center border-4 border-accent-emerald">
                 <div className="flex gap-1">
                    <div className="w-1 h-3 bg-accent-emerald rounded-full" />
                    <div className="w-1 h-3 bg-accent-emerald rounded-full" />
                 </div>
              </div>
           </div>

           {/* Hidden range input for interaction */}
           <input 
             type="range" 
             min="0" 
             max="100" 
             value={sliderPos}
             onChange={(e) => setSliderPos(parseInt(e.target.value))}
             className="absolute inset-0 z-30 opacity-0 cursor-ew-resize w-full h-full"
           />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
           {[
             { label: "Hydration", val: "+84%", sub: "Measured by Clinicians" },
             { label: "Elasticity", val: "+42%", sub: "After 28 Days" },
             { label: "Luminosity", val: "+95%", sub: "Patient Reported" },
           ].map((stat) => (
             <motion.div 
               key={stat.label}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="bg-white p-8 rounded-3xl border border-black/5 luxury-shadow text-center"
             >
                <p className="text-4xl font-display font-bold text-accent-emerald">{stat.val}</p>
                <p className="text-xs font-bold uppercase tracking-widest mt-2">{stat.label}</p>
                <p className="text-[10px] text-gray-400 mt-1">{stat.sub}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
