import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Product } from "../types";
import { Star, ShieldCheck, ShoppingBag, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useCart } from "../context/CartContext";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { addToCart } = useCart();
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.image);

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <Dialog open={!!product} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white border-0 shadow-2xl artistic-border">
        <div className="flex flex-col lg:flex-row h-full max-h-[90vh] overflow-y-auto lg:overflow-hidden">
          {/* Gallery Sidebar */}
          <div className="lg:w-1/2 flex flex-col bg-hero-soft">
            <div className="flex-1 relative aspect-square lg:aspect-auto">
              <motion.img
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={activeImage}
                className="w-full h-full object-cover"
                alt={product.name}
              />
              <div className="absolute top-6 left-6 grid gap-2">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImage === img ? "border-primary-charcoal scale-110" : "border-transparent opacity-50"
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Details Content */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-charcoal/40">
                    {product.category}
                  </p>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-accent-rose text-accent-rose" />
                    <span className="text-xs font-bold tracking-widest">{product.rating}</span>
                    <span className="text-[10px] text-primary-charcoal/30">({product.reviews} reviews)</span>
                  </div>
                </div>
                <DialogTitle className="text-4xl md:text-5xl font-serif italic text-primary-charcoal leading-tight">
                  {product.name}
                </DialogTitle>
                <div className="flex items-center gap-4">
                  <p className="text-2xl font-bold tracking-tight text-primary-charcoal">{product.price}</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[13px] leading-relaxed text-primary-charcoal/70">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-charcoal/60">Ingredients</h4>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <Badge key={ing} variant="outline" className="rounded-none border-primary-charcoal/10 text-[10px] uppercase font-bold tracking-widest px-3 py-1">
                      {ing}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-6 pt-4">
                <button 
                  onClick={handleAddToCart}
                  className="btn-artistic w-full flex items-center justify-center gap-3 h-16"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Ritual Bag
                </button>
                
                <div className="flex items-center gap-6 justify-center">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-accent-emerald" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-primary-charcoal/40">EWG Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-rose" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-primary-charcoal/40">Cruelty Free</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-primary-charcoal/5">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-charcoal/60 mb-6">Recent Review</h4>
                <div className="space-y-2">
                   <div className="flex gap-1">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-2.5 h-2.5 fill-accent-rose text-accent-rose" />)}
                   </div>
                   <p className="text-[11px] font-serif italic text-primary-charcoal/80 leading-relaxed">
                     "Transformative doesn't even begin to describe it. My skin looks ethereal and the texture is like velvet. A permanent addition to my evening ritual."
                   </p>
                   <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-charcoal/40">— Elena V., Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

