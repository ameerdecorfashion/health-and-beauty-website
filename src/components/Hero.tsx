import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MousePointer2, Star, ShieldCheck, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-hero-soft">
      {/* Split Layout Background */}
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        <div className="w-full lg:w-[55%] h-full bg-hero-soft relative p-12 lg:p-24 flex flex-col justify-end">
          <div className="absolute top-0 right-0 p-8 lg:p-12 text-right hidden lg:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-charcoal/40 mb-2">Featured Collection</p>
            <h3 className="text-xl font-serif italic">Ceramide Flux Ritual</h3>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-artistic-header mb-10">
                Pure<br />
                <span className="italic font-normal">Radiance</span><br />
                Defined.
              </h1>
              
              <p className="max-w-xs text-[13px] leading-relaxed mb-10 text-primary-charcoal/70">
                Experience the collision of Korean skincare innovation and clinical science. Dermatologist-approved formulas for the modern elite.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="btn-artistic w-full sm:w-auto">
                  Shop The Collection
                </button>
                <button className="btn-artistic-outline w-full sm:w-auto">
                  Take Skin Quiz
                </button>
              </div>
            </motion.div>
          </div>

          {/* Artistic Accents */}
          <div className="absolute top-1/2 left-6 -translate-y-1/2 flex flex-col gap-4">
             <div className="w-[1px] h-12 bg-primary-charcoal"></div>
             <div className="w-[1px] h-4 bg-primary-charcoal/20"></div>
             <div className="w-[1px] h-4 bg-primary-charcoal/20"></div>
          </div>
        </div>

        <div className="hidden lg:block w-[45%] h-full relative overflow-hidden">
           <img 
             src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&q=80&w=2600" 
             className="w-full h-full object-cover"
             alt="Luxury Aesthetics"
           />
           <div className="absolute inset-0 bg-accent-emerald/5 mix-blend-multiply" />
           
           {/* Floating Trust Card */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.5 }}
             className="absolute bottom-12 right-12 bg-white/40 backdrop-blur-xl p-6 border border-white/20 luxury-shadow max-w-[240px]"
           >
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] mb-2">Verified Performance</p>
              <p className="text-sm font-serif italic mb-4 leading-snug">"The holy grail of clinical hydration. My ritual refined."</p>
              <div className="flex items-center justify-between">
                 <div className="flex gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-2.5 h-2.5 fill-accent-rose text-accent-rose" />)}
                 </div>
                 <span className="text-[9px] font-bold uppercase tracking-widest opacity-40">Sarah J.</span>
              </div>
           </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator for theme consistency */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
         <span className="text-[9px] uppercase font-bold tracking-[0.4em] text-primary-charcoal/30">Explore</span>
         <div className="w-[1px] h-8 bg-primary-charcoal/10" />
      </div>
    </section>
  );
}
