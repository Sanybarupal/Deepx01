
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Depending on the scope, an MVP usually takes 2-4 weeks, while a full-scale product evolution can range from 2-4 months."
  },
  {
    q: "Do you offer development services?",
    a: "Yes, we specialize in high-end React, Webflow, and Three.js front-end development to bring our designs to life with pixel-perfect accuracy."
  },
  {
    q: "How many design iterations do we get?",
    a: "Our Scale and Elite plans offer unlimited iterations during the design phase. We work until you are 100% obsessed with the result."
  },
  {
    q: "What industries do you specialize in?",
    a: "We are deep experts in Web3, Fintech, and high-performance SaaS. We thrive on projects that require complex data visualization and elite aesthetics."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.4em] mb-4">Questions</h2>
          <h3 className="text-4xl font-black text-slate-900">Expertise on <span className="text-blue-600">Demand.</span></h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-3xl transition-all duration-300 ${isOpen ? 'glass-card border-blue-100 shadow-xl' : 'glass-card'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex items-center justify-between text-left"
      >
        <span className="text-lg font-bold text-slate-900">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-8 pt-0 text-slate-500 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;
