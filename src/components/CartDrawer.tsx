import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ShoppingBag, X, Plus, Minus, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-md p-0 flex flex-col bg-white border-0">
        <SheetHeader className="p-8 border-b border-primary-charcoal/5 flex flex-row items-center justify-between">
           <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5" />
              <SheetTitle className="text-xl font-serif italic m-0">Your Ritual Bag</SheetTitle>
           </div>
           <Badge className="bg-primary-charcoal text-white rounded-full h-6 w-6 flex items-center justify-center p-0 border-none text-[10px]">
              {cartCount}
           </Badge>
        </SheetHeader>

        <ScrollArea className="flex-1 p-8">
           <AnimatePresence mode="popLayout">
              {cart.length > 0 ? (
                <div className="space-y-10">
                   {cart.map((item) => (
                     <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex gap-6 group"
                     >
                        <div className="w-24 h-24 bg-hero-soft/50 artistic-border overflow-hidden shrink-0 group-hover:scale-[1.02] transition-transform">
                           <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between py-1">
                           <div className="space-y-1">
                              <div className="flex justify-between items-start">
                                 <h4 className="text-sm font-bold uppercase tracking-widest text-primary-charcoal">{item.name}</h4>
                                 <button 
                                   onClick={() => removeFromCart(item.id)}
                                   className="text-primary-charcoal/30 hover:text-accent-rose transition-colors"
                                 >
                                    <X className="w-4 h-4" />
                                 </button>
                              </div>
                              <p className="text-[10px] font-bold tracking-widest opacity-40">Ritual Item</p>
                           </div>
                           
                           <div className="flex justify-between items-center">
                              <div className="flex items-center gap-4 bg-hero-soft artistic-border px-3 py-1.5">
                                 <button 
                                   onClick={() => updateQuantity(item.id, -1)}
                                   className="text-primary-charcoal/40 hover:text-primary-charcoal transition-colors"
                                 >
                                   <Minus className="w-3 h-3" />
                                 </button>
                                 <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                                 <button 
                                   onClick={() => updateQuantity(item.id, 1)}
                                   className="text-primary-charcoal/40 hover:text-primary-charcoal transition-colors"
                                 >
                                   <Plus className="w-3 h-3" />
                                 </button>
                              </div>
                              <p className="text-sm font-bold">${(parseFloat(item.price.replace('$','')) * item.quantity).toFixed(2)}</p>
                           </div>
                        </div>
                     </motion.div>
                   ))}

                   {/* Complementary Offer */}
                   <div className="bg-hero-soft artistic-border p-6 space-y-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-40">Suggested Ritual</p>
                      <div className="flex items-center justify-between gap-4">
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white artistic-border overflow-hidden">
                               <img src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" />
                            </div>
                            <div>
                               <p className="text-[10px] font-bold uppercase tracking-widest">Rose Quartz Roller</p>
                               <p className="text-[10px] text-accent-rose font-bold">+ $20.00 (Save $8)</p>
                            </div>
                         </div>
                         <button className="text-[10px] font-bold uppercase tracking-widest border-b border-primary-charcoal pb-1">Add</button>
                      </div>
                   </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full space-y-4 text-center opacity-40 py-20">
                   <ShoppingBag className="w-12 h-12 mb-4" />
                   <p className="text-base font-serif italic">Your ritual bag is empty.</p>
                   <p className="text-xs font-bold uppercase tracking-widest">Discover our bestsellers</p>
                </div>
              )}
           </AnimatePresence>
        </ScrollArea>

        <div className="p-8 bg-hero-soft border-t border-primary-charcoal/5 space-y-8">
           <div className="space-y-4">
              <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-[0.2em] opacity-40">
                 <span>Subtotal</span>
                 <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-[0.2em] opacity-40">
                 <span>Shipping</span>
                 <span className="text-accent-emerald">Complimentary</span>
              </div>
              <div className="flex justify-between items-center text-lg font-serif italic pt-4 border-t border-primary-charcoal/5">
                 <span>Total Ritual Value</span>
                 <span className="font-sans font-bold not-italic tracking-tight">${cartTotal.toFixed(2)}</span>
              </div>
           </div>

           <div className="space-y-4">
              <Link 
                to="/checkout" 
                onClick={onClose}
                className="btn-artistic w-full h-16 flex items-center justify-center gap-4 group no-underline"
              >
                 <span>Begin Secure Checkout</span>
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center justify-center gap-6 opacity-40">
                 <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3 h-3" />
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em]">Secure SSL</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em]">In Stock</span>
                 </div>
              </div>
           </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

