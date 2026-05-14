import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const steps = [
  {
    question: "What is your primary skin concern?",
    options: ["Anti-Aging", "Acne & Blemishes", "Dryness", "Dullness", "Sensitivity"]
  },
  {
    question: "What is your skin type?",
    options: ["Dry", "Oily", "Combination", "Sensitive", "Normal"]
  },
  {
    question: "How often do you follow a skincare routine?",
    options: ["Daily", "Most days", "Occasionally", "Rarely", "Never"]
  }
];

export default function SkinQuiz() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const startQuiz = () => setCurrentStep(0);
  
  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <section className="py-24 bg-accent-rose text-primary-charcoal overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none mix-blend-multiply">
         <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-10 relative z-10">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            {currentStep === -1 ? (
              <motion.div 
                key="start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-10"
              >
                <div className="inline-flex items-center gap-3 bg-white/20 px-6 py-2 rounded-full border border-white/30 backdrop-blur-md">
                   <Sparkles className="w-4 h-4 text-primary-charcoal" />
                   <span className="text-[10px] font-bold uppercase tracking-[0.3em]">AI-Powered Assessment</span>
                </div>
                <h2 className="text-6xl md:text-[84px] leading-[0.85] font-serif font-light tracking-tighter">
                  Discover Your <br />
                  <span className="italic font-normal">Precise</span> Ritual
                </h2>
                <p className="text-[15px] text-primary-charcoal/70 leading-relaxed max-w-sm">
                  Take our 30-second multi-dimensional assessment to find the exact formulation for your unique biological profile.
                </p>
                <button 
                  onClick={startQuiz}
                  className="btn-artistic"
                >
                  Start The Quiz
                </button>
              </motion.div>
            ) : isFinished ? (
              <motion.div 
                key="results"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-10"
              >
                <div className="w-20 h-20 bg-accent-emerald rounded-full flex items-center justify-center luxury-shadow">
                   <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-5xl md:text-7xl font-serif italic font-light tracking-tighter leading-tight">Your Skin Profile <br/> Is Defined.</h2>
                <p className="text-lg text-primary-charcoal/70 font-medium">Based on your unique concerns: <strong>{answers[0]}</strong> and your <strong>{answers[1]}</strong> environment.</p>
                <button className="btn-artistic">
                  View My Recommendation
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-16"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Ritual Mapping {currentStep + 1}/{steps.length}</p>
                    <span className="text-[10px] font-bold tracking-widest">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
                  </div>
                  <div className="w-full h-[1px] bg-primary-charcoal/10 relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                      className="absolute inset-y-0 left-0 bg-primary-charcoal"
                    />
                  </div>
                </div>

                <h3 className="text-4xl md:text-6xl font-serif italic text-primary-charcoal tracking-tighter">{steps[currentStep].question}</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {steps[currentStep].options.map((option) => (
                    <motion.button
                      key={option}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(option)}
                      className="h-20 bg-white/40 backdrop-blur-md rounded-xl border border-white/20 text-primary-charcoal hover:bg-primary-charcoal hover:text-white text-lg font-serif italic transition-all px-8 text-left flex justify-between items-center group"
                    >
                      {option}
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
