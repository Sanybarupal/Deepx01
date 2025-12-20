
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowUpRight, MapPin, Phone, CheckCircle2, MessageSquare, Briefcase, User, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate API call for "Send Proposal"
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50/30 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Left Side: Contact Info & Brand Content */}
            <div className="lg:w-2/5 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.4em] mb-4">Connect With Us</h2>
                <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
                  Let’s build <br />
                  <span className="text-gradient">the future.</span>
                </h3>
                <p className="text-xl text-slate-500 font-medium leading-relaxed">
                  Join the elite brands that have transformed their digital presence with DeepX Design. We’re ready for your mission.
                </p>
              </motion.div>

              <div className="grid gap-6">
                <ContactInfoCard 
                  icon={<Mail className="text-blue-600" size={24} />} 
                  title="Email Us" 
                  detail="business.deepx@gmail.com" 
                  delay={0.1}
                />
                <ContactInfoCard 
                  icon={<Phone className="text-indigo-600" size={24} />} 
                  title="Call Directly" 
                  detail="+91 7852052323" 
                  delay={0.2}
                />
                <ContactInfoCard 
                  icon={<MapPin className="text-sky-600" size={24} />} 
                  title="Our Studio" 
                  detail="Sri Ganganagar, India" 
                  delay={0.3}
                />
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-12 p-8 glass-card rounded-[32px] border-white/60 bg-blue-50/20"
              >
                <p className="text-slate-500 italic font-medium leading-relaxed">
                  "The fastest way to predict the future is to design it with us."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-white overflow-hidden">
                    <img src="https://i.pravatar.cc/100?u=deepx" alt="founder" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">Founding Team, DeepX</span>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Proposal Form */}
            <div className="lg:w-3/5 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative p-1 md:p-1.5 rounded-[56px] glass-card shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-white/80 overflow-hidden"
              >
                <div className="bg-white/90 backdrop-blur-xl rounded-[48px] p-8 md:p-14 relative z-10">
                  <AnimatePresence mode="wait">
                    {formStatus === 'success' ? (
                      <motion.div 
                        key="success"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex flex-col items-center justify-center py-20 text-center"
                      >
                        <div className="w-28 h-28 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-8 shadow-inner relative">
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", damping: 10 }}
                          >
                            <CheckCircle2 size={56} strokeWidth={2.5} />
                          </motion.div>
                          <div className="absolute inset-0 bg-blue-400/10 rounded-full animate-ping" />
                        </div>
                        <h4 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Proposal Received!</h4>
                        <p className="text-slate-500 font-medium text-lg max-w-sm mx-auto">
                          Our strategy experts are already diving into your brief. Expect a response within 12 hours.
                        </p>
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setFormStatus('idle')}
                          className="mt-12 text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
                        >
                          Refresh form <ArrowUpRight size={20} />
                        </motion.button>
                      </motion.div>
                    ) : (
                      <motion.form 
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-8" 
                        onSubmit={handleSubmit}
                      >
                        <div className="space-y-2">
                          <h4 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                            <Send size={24} className="text-blue-600" /> Let's get started
                          </h4>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
                              <User size={14} /> Full Name
                            </label>
                            <input 
                              required 
                              type="text" 
                              placeholder="John Doe" 
                              className="w-full px-8 py-5 rounded-3xl bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all font-medium text-slate-700" 
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
                              <Mail size={14} /> Email Address
                            </label>
                            <input 
                              required 
                              type="email" 
                              placeholder="john@studio.com" 
                              className="w-full px-8 py-5 rounded-3xl bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all font-medium text-slate-700" 
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
                            <Briefcase size={14} /> Project Scope
                          </label>
                          <select className="w-full px-8 py-5 rounded-3xl bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all font-medium text-slate-500 appearance-none">
                            <option>SaaS Platform Design</option>
                            <option>Web3 / dApp Development</option>
                            <option>Premium Brand Identity</option>
                            <option>Custom 3D & Interaction</option>
                          </select>
                        </div>

                        <div className="space-y-3">
                          <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1 flex items-center gap-2">
                            <MessageSquare size={14} /> Project Vision
                          </label>
                          <textarea 
                            required 
                            rows={5} 
                            placeholder="Briefly describe your goals..." 
                            className="w-full px-8 py-5 rounded-3xl bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all resize-none font-medium text-slate-700"
                          ></textarea>
                        </div>

                        <motion.button 
                          disabled={formStatus === 'sending'}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full group flex items-center justify-between pl-4 pr-12 py-3.5 bg-slate-900 text-white font-black rounded-full shadow-2xl transition-all duration-500 overflow-hidden relative ${formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                        >
                          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-sm relative z-10 group-hover:rotate-12 transition-transform duration-500">
                            {formStatus === 'sending' ? (
                               <div className="w-6 h-6 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <ArrowUpRight size={28} strokeWidth={3} />
                            )}
                          </div>
                          <span className="text-xl relative z-10">
                            {formStatus === 'sending' ? 'Transmitting Brief...' : 'Send My Proposal'}
                          </span>
                          <div className="absolute inset-0 bg-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                        </motion.button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoCard = ({ icon, title, detail, delay }: { icon: any, title: string, detail: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
    className="flex items-center gap-6 p-6 glass-card rounded-[32px] border border-white/60 transition-all group cursor-default"
  >
    <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
      {icon}
    </div>
    <div>
      <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">{title}</h5>
      <p className="text-xl font-black text-slate-800 tracking-tight">{detail}</p>
    </div>
  </motion.div>
);

export default Contact;
