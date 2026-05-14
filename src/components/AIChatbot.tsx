import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, User, Bot, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "model";
  content: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", content: "Hello! I'm your HBP Beauty Assistant. How can I help you achieve your skin goals today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          history: messages.map(m => ({
             role: m.role,
             parts: [{ text: m.content }]
          }))
        })
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setMessages(prev => [...prev, { role: "model", content: data.text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "model", content: "I'm sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-[100]">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`h-16 w-16 rounded-full shadow-2xl transition-all duration-500 ease-[0.16, 1, 0.3, 1] ${
            isOpen ? "rotate-90 bg-primary-charcoal scale-90" : "bg-accent-rosegold hover:scale-110"
          }`}
        >
          {isOpen ? <X className="w-8 h-8 text-white" /> : <MessageCircle className="w-8 h-8 text-white" />}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 100, scale: 0.8, filter: "blur(20px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-28 right-8 z-[100] w-[400px] h-[600px] flex flex-col rounded-[32px] overflow-hidden luxury-shadow border border-white/20 bg-white/80 backdrop-blur-3xl"
          >
            <div className="p-6 bg-primary-charcoal text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-rosegold flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-medium">Beauty AI</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest text-white/50">Online Assistant</span>
                  </div>
                </div>
              </div>
            </div>

            <ScrollArea className="flex-1 p-6">
              <div className="space-y-6">
                {messages.map((m, i) => (
                  <div key={i} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      m.role === "user" ? "bg-accent-emerald text-white" : "bg-accent-rosegold/10 text-accent-rosegold"
                    }`}>
                      {m.role === "user" ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                    </div>
                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user" 
                        ? "bg-accent-emerald text-white" 
                        : "bg-white luxury-shadow text-gray-700"
                    }`}>
                      <div className="markdown-body">
                        <ReactMarkdown>
                          {m.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent-rosegold/10 text-accent-rosegold flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="bg-white luxury-shadow p-4 rounded-2xl">
                      <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="p-6 bg-white border-t border-gray-100 flex gap-2">
              <Input
                placeholder="Ask about skin concerns..."
                value={input}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                onChange={(e) => setInput(e.target.value)}
                className="h-12 rounded-xl border-gray-200 focus:ring-accent-rosegold h-14"
              />
              <Button 
                 onClick={handleSend}
                 disabled={isLoading}
                 className="h-14 w-14 rounded-xl bg-primary-charcoal text-white hover:scale-105 transition-transform"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
