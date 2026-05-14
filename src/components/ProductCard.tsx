import { motion } from "motion/react";
import { ShoppingBag, Star, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "../types";

export default function ProductCard({ product, onClick }: { product: Product; onClick?: () => void }) {
  return (
    <motion.div 
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true }}
      className="group artistic-border hover:bg-white transition-all duration-500 cursor-pointer p-8 relative overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
    >
      <div className="relative aspect-square overflow-hidden bg-hero-soft/50 mb-8 rounded-lg transition-all duration-700">
        <motion.img 
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
        
        {product.badge && (
          <div className="absolute top-0 right-0 p-4">
             <Badge className="bg-primary-charcoal text-white rounded-none uppercase text-[9px] font-bold tracking-[0.2em] px-4 py-1.5 border-none">
               {product.badge}
             </Badge>
          </div>
        )}

        <div className="absolute inset-0 bg-primary-charcoal/0 group-hover:bg-primary-charcoal/5 transition-colors" />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between opacity-40">
          <p className="text-[9px] font-bold uppercase tracking-[0.3em]">{product.category}</p>
          <div className="flex items-center gap-1">
             <Star className="w-2.5 h-2.5 fill-accent-rose text-accent-rose" />
             <span className="text-[9px] font-bold tracking-widest">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-serif leading-tight group-hover:italic transition-all">{product.name}</h3>
        
        <div className="flex items-baseline justify-between pt-4">
           <p className="text-sm font-bold tracking-widest">{product.price}</p>
           <button className="text-[10px] font-bold uppercase tracking-widest border-b border-primary-charcoal/20 pb-1 hover:border-primary-charcoal transition-all">
              Add to Bag
           </button>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
         <span className="text-[40px] font-bold leading-none select-none">HBP</span>
      </div>
    </motion.div>
  );
}
