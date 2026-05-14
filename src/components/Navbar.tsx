import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ShoppingBag, Heart, User, Menu, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import CartDrawer from "./CartDrawer";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Shop", href: "#" },
  { name: "Rituals", href: "#" },
  { name: "Science", href: "#" },
  { name: "Membership", href: "#membership" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg border-b border-primary-charcoal/10 py-3" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-10 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger 
              render={<Button variant="ghost" size="icon" className="text-primary-charcoal" />}
            >
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-primary-beige p-10">
              <div className="flex flex-col gap-8 pt-12">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-3xl font-display font-medium hover:text-accent-rose transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo Section */}
        <div className="flex items-center gap-16">
          <Link to="/" className="text-2xl font-bold tracking-tighter uppercase font-display group no-underline text-primary-charcoal">
            HBP<span className="text-accent-rose transition-transform group-hover:rotate-12 inline-block">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <div key={item.name} className="group relative">
                <a
                  href={item.href}
                  className="text-[11px] font-bold uppercase tracking-[0.25em] hover:text-accent-rose transition-colors flex items-center gap-1"
                >
                  {item.name}
                  {item.name === "Shop" && <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 lg:gap-8 justify-end">
          <div className="hidden sm:flex items-center gap-4">
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <div className="w-[1px] h-4 bg-primary-charcoal/10" />
          </div>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 group"
          >
            <span className="text-[11px] font-bold uppercase tracking-widest hidden sm:inline-block">Cart</span>
            <div className="relative">
              <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <Badge className="absolute -top-1.5 -right-1.5 h-4 w-4 bg-primary-charcoal text-white text-[8px] flex items-center justify-center p-0 border-none rounded-full">
                {cartCount}
              </Badge>
            </div>
          </button>
          
          <div className="w-9 h-9 bg-primary-charcoal rounded-full flex items-center justify-center text-white text-[10px] font-bold cursor-pointer hover:bg-accent-emerald transition-colors">
            JP
          </div>
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </motion.nav>
  );
}
