import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-6 left-6 right-6 z-40 lg:hidden"
        >
          <button className="w-full bg-primary-charcoal text-white h-16 rounded-full luxury-shadow flex items-center justify-center gap-4 artistic-border font-bold uppercase tracking-[0.2em] text-[11px]">
             <ShoppingBag className="w-5 h-5" />
             Shop Bestsellers
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
