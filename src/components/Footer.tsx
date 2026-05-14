import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Youtube, ArrowRight, CreditCard, Ship, RefreshCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-primary-charcoal text-white overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="space-y-10">
            <a href="/" className="text-3xl font-bold tracking-tighter uppercase font-display">
              HBP<span className="text-accent-rose">.</span>
            </a>
            <p className="text-white/40 leading-relaxed text-[13px] max-w-xs">
              Refined Korean skincare and wellness solutions crafted in Seoul. Clinically proven, ethically sourced, and designed for the modern ritual.
            </p>
            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="opacity-40 hover:opacity-100 transition-opacity">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-10 text-white/30">Expertise</h4>
             <ul className="space-y-4 text-[13px] font-medium text-white/50">
                <li><a href="#" className="hover:text-accent-rose transition-colors">Our Science</a></li>
                <li><a href="#" className="hover:text-accent-rose transition-colors">Ingredient Glossary</a></li>
                <li><a href="#" className="hover:text-accent-rose transition-colors">Beauty Blog</a></li>
                <li><a href="#" className="hover:text-accent-rose transition-colors">Skin Assessment</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-10 text-white/30">Support</h4>
             <ul className="space-y-4 text-[13px] font-medium text-white/50">
                <li><a href="#" className="hover:text-accent-rose transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-accent-rose transition-colors">Return Ritual</a></li>
                <li><a href="#" className="hover:text-accent-rose transition-colors">Contact Expert</a></li>
                <li><a href="#" className="hover:text-accent-rose transition-colors">FAQ Hub</a></li>
             </ul>
          </div>

          <div className="space-y-10">
             <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 mb-2">Newsletter</h4>
                <p className="text-[11px] font-bold tracking-[0.2em]">JOIN THE ELITE LIST</p>
             </div>
             
             <div className="flex items-center gap-4 group">
                <div className="flex-1 relative">
                  <Input 
                    placeholder="Enter email address" 
                    className="bg-transparent border-white/20 rounded-full h-14 pl-6 text-[12px] focus:ring-accent-rose focus:border-accent-rose transition-all" 
                  />
                </div>
                <button className="h-14 w-14 rounded-full bg-white text-primary-charcoal flex items-center justify-center hover:bg-accent-rose hover:text-white transition-all">
                   <ArrowRight className="w-5 h-5" />
                </button>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10 text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
          <p>© 2026 Health Beauty Products Inc. Defined by Science.</p>
          <div className="flex items-center gap-10">
             <div className="flex items-center gap-2"><CreditCard className="w-3 h-3" /> Secure Payment</div>
             <div className="flex items-center gap-2 relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-emerald shadow-[0_0_8px_#064E3B]" />
                Express Shipping
             </div>
          </div>
          <div className="flex gap-8">
             <a href="#" className="hover:text-white transition-all">Privacy</a>
             <a href="#" className="hover:text-white transition-all">Terms</a>
             <a href="#" className="hover:text-white transition-all">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
