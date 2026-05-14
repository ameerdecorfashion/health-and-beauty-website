import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Skincare", img: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=800", color: "bg-emerald-50" },
  { name: "Supplements", img: "https://images.unsplash.com/photo-1471864190281-ad5f9f8162c6?auto=format&fit=crop&q=80&w=800", color: "bg-peach-50" },
  { name: "Wellness", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800", color: "bg-lavender-50" },
];

export default function CategoryShowcase() {
  return (
    <section className="py-24 bg-primary-beige border-b border-primary-charcoal/5">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex flex-col min-w-[150px]">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-charcoal/40 mb-1">Shop By</span>
            <span className="text-2xl font-serif italic">Concerns</span>
          </div>
          
          <div className="flex-1 flex gap-6 overflow-hidden overflow-x-auto pb-4 scrollbar-hide">
            {["Aging", "Hydration", "Brightening", "Sensitive", "Blemishes", "Detox"].map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05, backgroundColor: "#1A1A1A", color: "#F5F2ED" }}
                className="px-8 py-3 bg-white artistic-border rounded-full text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-all"
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <motion.a 
            href="#" 
            className="text-[11px] font-bold uppercase tracking-widest border-b border-primary-charcoal pb-1"
          >
            All Categories
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
           {categories.map((cat, i) => (
             <motion.div
               key={cat.name}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="group relative h-[600px] overflow-hidden cursor-pointer"
             >
                <img src={cat.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary-charcoal/20 group-hover:bg-primary-charcoal/0 transition-colors" />
                
                <div className="absolute inset-x-8 bottom-8 flex justify-between items-end">
                   <div className="bg-white/80 backdrop-blur-md p-8 w-full border border-white/20 flex justify-between items-center group-hover:bg-white transition-all">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.3em] mb-2 text-primary-charcoal/60">Collection</p>
                        <h3 className="text-2xl font-serif italic text-primary-charcoal">{cat.name}</h3>
                      </div>
                      <div className="w-10 h-10 border border-primary-charcoal/20 rounded-full flex items-center justify-center group-hover:bg-primary-charcoal group-hover:text-white transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
