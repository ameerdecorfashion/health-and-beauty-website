import { motion } from "motion/react";
import { useCart } from "../context/CartContext";
import { ArrowLeft, ShieldCheck, CreditCard, Truck, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Checkout() {
  const { cart, cartTotal } = useCart();

  return (
    <div className="min-h-screen bg-primary-beige font-sans">
      <Navbar />
      
      <main className="pt-32 pb-24 container mx-auto px-6 md:px-10">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary-charcoal/40 hover:text-primary-charcoal transition-colors mb-12">
          <ArrowLeft className="w-3 h-3" />
          Continue Shopping
        </Link>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Form Side */}
          <div className="flex-1 space-y-12">
            <header className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-serif font-light tracking-tighter text-primary-charcoal">
                Complete Your <br /> <span className="italic">Ritual Order</span>
              </h1>
              <p className="text-[14px] text-primary-charcoal/60 leading-relaxed max-w-sm">
                Enter your details below. All transactions are encrypted and secured.
              </p>
            </header>

            <div className="space-y-16">
              {/* Contact Information */}
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                   <div className="w-8 h-8 rounded-full bg-primary-charcoal text-white flex items-center justify-center text-[10px] font-bold">1</div>
                   <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary-charcoal">Contact Details</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-primary-charcoal/40">Email Address</label>
                      <input type="email" placeholder="email@example.com" className="w-full h-14 bg-white border-0 artistic-border px-6 text-sm focus:ring-1 focus:ring-accent-rose outline-none" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-primary-charcoal/40">Phone Number</label>
                      <input type="tel" placeholder="+1 (555) 000-0000" className="w-full h-14 bg-white border-0 artistic-border px-6 text-sm focus:ring-1 focus:ring-accent-rose outline-none" />
                   </div>
                </div>
              </section>

              {/* Shipping Information */}
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                   <div className="w-8 h-8 rounded-full bg-primary-charcoal text-white flex items-center justify-center text-[10px] font-bold">2</div>
                   <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary-charcoal">Shipping Ritual</h3>
                </div>
                <div className="space-y-6">
                   <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-primary-charcoal/40">First Name</label>
                        <input type="text" className="w-full h-14 bg-white border-0 artistic-border px-6 text-sm outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-primary-charcoal/40">Last Name</label>
                        <input type="text" className="w-full h-14 bg-white border-0 artistic-border px-6 text-sm outline-none" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-primary-charcoal/40">Address</label>
                      <input type="text" className="w-full h-14 bg-white border-0 artistic-border px-6 text-sm outline-none" />
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <input type="text" placeholder="City" className="w-full h-14 bg-white border-0 artistic-border px-6 text-sm outline-none" />
                      <input type="text" placeholder="State" className="w-full h-14 bg-white border-0 artistic-border px-6 text-sm outline-none" />
                      <input type="text" placeholder="ZIP Code" className="w-full h-14 bg-white border-0 artistic-border px-6 text-sm outline-none" />
                   </div>
                </div>
              </section>

              {/* Payment Method */}
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                   <div className="w-8 h-8 rounded-full bg-primary-charcoal text-white flex items-center justify-center text-[10px] font-bold">3</div>
                   <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary-charcoal">Secure Payment</h3>
                </div>
                <div className="p-8 bg-white artistic-border space-y-6">
                   <div className="flex items-center justify-between border-b border-primary-charcoal/5 pb-6">
                      <div className="flex items-center gap-4">
                         <CreditCard className="w-5 h-5 text-primary-charcoal/40" />
                         <span className="text-xs font-bold uppercase tracking-widest">Credit or Debit Card</span>
                      </div>
                      <div className="flex gap-2">
                         <div className="w-8 h-5 bg-gray-100 rounded" />
                         <div className="w-8 h-5 bg-gray-100 rounded" />
                      </div>
                   </div>
                   <div className="space-y-6 pt-4">
                      <div className="space-y-2">
                         <label className="text-[10px] font-bold uppercase tracking-widest text-primary-charcoal/40">Card Number</label>
                         <input type="text" placeholder="0000 0000 0000 0000" className="w-full h-12 border-b border-primary-charcoal/10 outline-none text-sm font-mono" />
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                         <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-primary-charcoal/40">Expiry Date</label>
                            <input type="text" placeholder="MM/YY" className="w-full h-12 border-b border-primary-charcoal/10 outline-none text-sm" />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-primary-charcoal/40">CVC</label>
                            <input type="text" placeholder="123" className="w-full h-12 border-b border-primary-charcoal/10 outline-none text-sm" />
                         </div>
                      </div>
                   </div>
                </div>
              </section>
            </div>
          </div>

          {/* Summary Side */}
          <div className="lg:w-[400px]">
            <div className="sticky top-32 space-y-8">
              <div className="bg-white artistic-border p-8 luxury-shadow space-y-8">
                <h3 className="text-xl font-serif italic border-b border-primary-charcoal/5 pb-8">Order Summary</h3>
                
                <div className="space-y-6 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                   {cart.length > 0 ? cart.map((item) => (
                     <div key={item.id} className="flex gap-4">
                        <div className="w-16 h-16 bg-hero-soft/50 artistic-border overflow-hidden shrink-0">
                           <img src={item.image} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                           <h4 className="text-[10px] font-bold uppercase tracking-widest truncate">{item.name}</h4>
                           <p className="text-[10px] opacity-40">Qty: {item.quantity}</p>
                           <p className="text-[11px] font-bold mt-1">${(parseFloat(item.price.replace('$','')) * item.quantity).toFixed(2)}</p>
                        </div>
                     </div>
                   )) : (
                     <p className="text-xs italic text-primary-charcoal/40">Your ritual bag is empty.</p>
                   )}
                </div>

                <div className="space-y-4 pt-8 border-t border-primary-charcoal/5">
                   <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-primary-charcoal/40">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                   </div>
                   <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-primary-charcoal/40">
                      <span>Shipping</span>
                      <span className="text-accent-emerald">Complimentary</span>
                   </div>
                   <div className="flex justify-between items-center text-xl font-serif italic pt-4">
                      <span>Total</span>
                      <span className="font-sans font-bold not-italic tracking-tighter">${cartTotal.toFixed(2)}</span>
                   </div>
                </div>

                <button className="btn-artistic w-full h-16 flex items-center justify-center gap-3">
                   Complete Purchase
                   <ExternalLink className="w-4 h-4" />
                </button>

                <div className="flex flex-col items-center gap-4 pt-4 border-t border-primary-charcoal/5">
                   <div className="flex items-center gap-2 opacity-40">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-[9px] font-bold uppercase tracking-widest">30-Day Ritual Guarantee</span>
                   </div>
                   <div className="flex items-center gap-2 opacity-40">
                      <Truck className="w-4 h-4" />
                      <span className="text-[9px] font-bold uppercase tracking-widest">Global Express Shipping</span>
                   </div>
                </div>
              </div>

              {/* Promo Section */}
              <div className="bg-accent-rose/10 artistic-border p-6 flex items-center justify-between group cursor-pointer hover:bg-accent-rose/20 transition-colors">
                 <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-accent-rose">Special Promotion</p>
                    <p className="text-xs font-serif italic">Add a membership for -15%</p>
                 </div>
                 <div className="w-8 h-8 rounded-full border border-accent-rose flex items-center justify-center text-accent-rose group-hover:bg-accent-rose group-hover:text-white transition-all">
                    <Link to="/#membership">
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
