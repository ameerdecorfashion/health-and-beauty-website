import { motion } from "motion/react";
import { ArrowRight, BookOpen } from "lucide-react";

const articles = [
  {
    title: "The Science of Glass Skin",
    category: "Rituals",
    image: "https://images.unsplash.com/photo-1556228448-6192854a060d?auto=format&fit=crop&q=80&w=800",
    readTime: "5 min read"
  },
  {
    title: "Double Cleansing: A Korean Legacy",
    category: "Science",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a969fc06?auto=format&fit=crop&q=80&w=800",
    readTime: "4 min read"
  },
  {
    title: "Nutrition for Biological Radiance",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1552046427-b97016247ab6?auto=format&fit=crop&q=80&w=800",
    readTime: "7 min read"
  }
];

export default function EducationHub() {
  return (
    <section className="py-32 bg-primary-beige border-y border-primary-charcoal/5">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <BookOpen className="w-4 h-4 text-accent-emerald" />
               <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-charcoal/40">Knowledge Base</p>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tighter leading-tight">
              Philosophy & <br />
              <span className="italic">Rituals</span>
            </h2>
          </div>
          <button className="text-[11px] font-bold uppercase tracking-widest border-b border-primary-charcoal pb-1 hover:text-accent-rose transition-colors">
            Visit Journal
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {articles.map((article, i) => (
            <motion.article 
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden artistic-border mb-8 grayscale group-hover:grayscale-0 transition-all duration-1000">
                <img src={article.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-primary-charcoal/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-6 left-6">
                   <span className="bg-white/80 backdrop-blur-md px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest text-primary-charcoal artistic-border">
                     {article.category}
                   </span>
                </div>
              </div>
              
              <div className="space-y-4">
                 <p className="text-[9px] font-bold uppercase tracking-widest opacity-40">{article.readTime}</p>
                 <h3 className="text-2xl font-serif italic text-primary-charcoal group-hover:translate-x-2 transition-transform duration-500">
                    {article.title}
                 </h3>
                 <div className="pt-4 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                 </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
