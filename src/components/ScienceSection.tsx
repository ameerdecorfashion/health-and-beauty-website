import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Microscope, Beaker, Leaf, ShieldCheck, Droplets, FlaskConical } from "lucide-react";

const ingredients = [
  { 
    name: "Hyaluronic Acid", 
    desc: "Triple-molecular weight for deep cellular hydration.",
    icon: Droplets,
    color: "bg-blue-50 text-blue-600"
  },
  { 
    name: "Centella Asiatica", 
    desc: "Ethically sourced from Madagascar to soothe and repair.",
    icon: Leaf,
    color: "bg-emerald-50 text-emerald-600"
  },
  { 
    name: "Niacinamide (B3)", 
    desc: "Purest grade to refine pores and strengthen the skin barrier.",
    icon: FlaskConical,
    color: "bg-purple-50 text-purple-600"
  },
  { 
    name: "Vegan Collagen", 
    desc: "Fermented peptides for bio-identical elasticity boosting.",
    icon: Beaker,
    color: "bg-rose-50 text-rose-600"
  }
];

export default function ScienceSection() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="aspect-square relative z-10 rounded-[60px] overflow-hidden luxury-shadow"
             >
                <img src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-accent-emerald/20 mix-blend-overlay" />
             </motion.div>

             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute -top-12 -right-12 w-48 h-48 border border-dashed border-accent-emerald/20 rounded-full"
             />
             
             <div className="absolute -bottom-16 -left-16 bg-white p-8 rounded-3xl luxury-shadow z-20 max-w-[280px] border border-black/5">
                <div className="flex items-center gap-3 mb-4 text-accent-emerald">
                   <Microscope className="w-6 h-6" />
                   <span className="text-xs font-bold uppercase tracking-widest">Lab-Verified</span>
                </div>
                <p className="text-sm italic text-gray-600 leading-relaxed">
                   "We've combined centuries of botanical wisdom with breakthrough molecular science."
                </p>
                <p className="text-[10px] font-bold mt-4 uppercase tracking-tighter">Dr. J. Park — Head of Science</p>
             </div>
          </div>

          <div className="space-y-12">
             <div className="space-y-6">
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-accent-emerald/60">Scientific Integrity</p>
                <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tighter leading-[0.9]">
                  Where <span className="italic">Bio-Science</span> <br />
                  Meets Nature.
                </h2>
                <p className="text-[15px] text-primary-charcoal/60 leading-relaxed max-w-lg">
                  Our formulations are developed in our Seoul laboratory using exclusively EWG-Green grade ingredients. No fillers, no synthetic fragrances, only high-potency bio-actives.
                </p>
             </div>

             <div className="grid sm:grid-cols-2 gap-10">
                {ingredients.map((ing) => (
                  <motion.div 
                    key={ing.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group flex gap-4"
                  >
                    <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center border border-primary-charcoal/5 group-hover:bg-primary-charcoal group-hover:text-white transition-all duration-500 shrink-0`}>
                       <ing.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest mb-2">{ing.name}</h4>
                      <p className="text-[12px] text-primary-charcoal/50 leading-relaxed">{ing.desc}</p>
                    </div>
                  </motion.div>
                ))}
             </div>

             <button className="btn-artistic">
               Explore Our Ingredients
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
