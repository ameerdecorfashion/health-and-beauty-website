import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Bestsellers from "../components/Bestsellers";
import CategoryShowcase from "../components/CategoryShowcase";
import SkinQuiz from "../components/SkinQuiz";
import BeforeAfter from "../components/BeforeAfter";
import LimitedOffer from "../components/LimitedOffer";
import EducationHub from "../components/EducationHub";
import ScienceSection from "../components/ScienceSection";
import AIChatbot from "../components/AIChatbot";
import StickyMobileCTA from "../components/StickyMobileCTA";
import Footer from "../components/Footer";
import { motion, useScroll, useSpring } from "motion/react";
import { Sparkles } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent-rose z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <TrustBar />
        <CategoryShowcase />
        <Bestsellers />
        <LimitedOffer />
        <SkinQuiz />
        <BeforeAfter />
        <EducationHub />
        <ScienceSection />

        {/* The Membership */}
        <section id="membership" className="py-32 bg-white">
          <div className="container mx-auto px-10">
             <div className="bg-hero-soft artistic-border p-12 md:p-24 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-rose/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="flex-1 space-y-8 relative z-10 text-primary-charcoal">
                   <div className="w-12 h-12 bg-primary-charcoal rounded-full flex items-center justify-center text-white">
                      <Sparkles className="w-6 h-6" />
                   </div>
                   <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tighter">
                     The <span className="italic">Privileged</span> <br /> Ritual.
                   </h2>
                   <p className="text-[15px] text-primary-charcoal/60 leading-relaxed max-w-sm">
                     Join HBP+ for exclusive early access to drops, private consultations with our Seoul-based experts, and a curated monthly box.
                   </p>
                   <ul className="space-y-4">
                      {["Early Access", "Member-Only Pricing", "Complimentary Consultations"].map((perk) => (
                        <li key={perk} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest italic">
                           <div className="w-1.5 h-1.5 rounded-full bg-accent-rose" />
                           {perk}
                        </li>
                      ))}
                   </ul>
                   <button className="btn-artistic">
                      Join The Elite
                   </button>
                </div>
                <div className="flex-1 w-full aspect-square md:aspect-auto h-[500px] overflow-hidden rounded-2xl relative">
                  <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale" />
                  <div className="absolute inset-0 bg-primary-charcoal/5 mix-blend-multiply" />
                </div>
             </div>
          </div>
        </section>

        {/* Community / UGC */}
        <section className="py-32 bg-primary-beige overflow-hidden">
           <div className="container mx-auto px-10 mb-16">
              <div className="flex justify-between items-end border-b border-primary-charcoal/10 pb-12">
                 <div className="text-primary-charcoal">
                   <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-charcoal/40 mb-4 italic">Social Evidence</p>
                   <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tighter">The <span className="italic">Community</span></h2>
                 </div>
                 <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-charcoal/60 hidden md:block">Tag #HBPRITUAL</p>
              </div>
           </div>
           
           <div className="flex gap-4 px-4 overflow-hidden">
             {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="w-72 h-96 flex-shrink-0 bg-white artistic-border relative group overflow-hidden"
                >
                   <img src={`https://images.unsplash.com/photo-1552046427-b97016247ab6?auto=format&fit=crop&q=80&w=400&u=${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                   <div className="absolute inset-0 bg-primary-charcoal/0 group-hover:bg-primary-charcoal/20 transition-colors" />
                   <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                      <p className="text-[10px] font-bold tracking-widest font-serif italic text-primary-charcoal">@user_ritual_{i}</p>
                   </div>
                </motion.div>
             ))}
           </div>
        </section>
      </main>

      <Footer />
      <AIChatbot />
      <StickyMobileCTA />
    </div>
  );
}
