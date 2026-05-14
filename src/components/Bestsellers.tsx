import ProductCard from "./ProductCard";
import { motion } from "motion/react";
import ProductModal from "./ProductModal";
import { useState } from "react";
import { Product } from "../types";

const products: Product[] = [
  {
    id: "1",
    name: "Ceramide Glow Serum",
    price: "$48.00",
    rating: 4.9,
    reviews: 1240,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1570172619380-0ea0414b8964?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&q=80&w=800"
    ],
    description: "A high-potency serum designed to restore the skin barrier. Formulated with triple-ceramide complex and fermented yeast extract for an ethereal, lit-from-within glow.",
    ingredients: ["Ceramide NP", "Niacinamide", "Glycerin", "Hyaluronic Acid", "Yeast Ferment"],
    badge: "Bestseller",
    category: "Serums"
  },
  {
    id: "2",
    name: "Pure Oxygen Cleanser",
    price: "$32.00",
    rating: 4.8,
    reviews: 850,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1611080626919-7cf5a969fc06?auto=format&fit=crop&q=80&w=800"
    ],
    description: "A transformative gel-to-foam cleanser that infuses the skin with pure oxygen molecules. Sweeps away impurities while maintaining physiological pH balance.",
    ingredients: ["Oxygen Molecules", "Green Tea Extract", "Aloe Vera", "Panthenol"],
    badge: "Trending",
    category: "Cleansers"
  },
  {
    id: "3",
    name: "Velvet Night Cream",
    price: "$64.00",
    rating: 5.0,
    reviews: 2100,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1611080626919-7cf5a969fc06?auto=format&fit=crop&q=80&w=800"
    ],
    description: "An intensive overnight recovery treatment. Rich, cushiony texture that melts into the skin to repair environmental damage while you dream.",
    ingredients: ["Retinol", "Peptides", "Shea Butter", "Vitamin E"],
    badge: "Limited Edition",
    category: "Moisturizers"
  },
  {
    id: "4",
    name: "Rose Quartz Roller",
    price: "$28.00",
    rating: 4.7,
    reviews: 430,
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Hand-carved professional grade rose quartz. Enhances lymphatic drainage and improves the absorption of our serums and oils.",
    ingredients: ["100% Authentic Rose Quartz"],
    category: "Beauty Tools"
  }
];

export default function Bestsellers() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-primary-charcoal/10 pb-12">
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-charcoal/40"
            >
              Curated For You
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-light tracking-tighter"
            >
              The <span className="italic">Bestsellers</span>
            </motion.h2>
          </div>
          <motion.a 
             whileHover={{ x: 10 }}
             href="#" 
             className="text-[11px] font-bold uppercase tracking-[0.3em] flex items-center gap-4 transition-all"
          >
            <span>View All Products</span>
            <div className="w-12 h-[1px] bg-primary-charcoal" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
}
