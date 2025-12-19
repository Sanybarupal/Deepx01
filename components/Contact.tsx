
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowUpRight, MapPin, Phone, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.4em] mb-4">Contact</h2>
            <h3 className="text-6xl font-black text-slate-900 mb-8 leading-tight">Start the <span className="text-gradient">Magic.</span></h3>
            <p className="text-xl text-slate-500 mb-12">
              Have a high-impact project in mind? Let's discuss how we can elevate your brand to the top 1%.
            </p>
            
            <div className="space-y-8">
              <ContactInfo icon={<Mail size={24} />} title="Email us" detail="business.deepx@gmail.com" />
              <ContactInfo icon={<MapPin size={24} />} title="Headquarters" detail="Sri Ganganagar, India" />
              <ContactInfo icon={<Phone size={24} />} title="Direct Line" detail="+91 7852052323" />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 glass-card rounded-[48px] border-white/80 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-8 shadow-inner">
                      <CheckCircle2 size={48} />
                    </div>
                    <h4 className="text-3xl font-black text-slate-900 mb-4">Proposal Sent!</h4>
                    <p className="text-slate-500 font-medium">Thank you for reaching out. Our strategy team will review your project and get back to you within 24 hours.</p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="mt-8 text-blue-600 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6" 
                    onSubmit={handleSubmit}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input required type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                        <input required type="email" placeholder="email@company.com" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Project Details</label>
                      <textarea required rows={4} placeholder="Tell us about your mission..." className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all resize-none"></textarea>
                    </div>
                    <motion.button 
                      disabled={formStatus === 'sending'}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center justify-center gap-4 pl-2.5 pr-10 py-2.5 bg-blue-600 text-white font-black rounded-full shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all ${formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-sm">
                        {formStatus === 'sending' ? (
                           <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <ArrowUpRight size={24} strokeWidth={3} />
                        )}
                      </div>
                      <span>{formStatus === 'sending' ? 'Transmitting...' : 'Send Proposal'}</span>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, detail }: { icon: any, title: string, detail: string }) => (
  <div className="flex gap-6 items-center">
    <div className="w-14 h-14 bg-white shadow-xl rounded-2xl flex items-center justify-center text-blue-600 border border-slate-50">
      {icon}
    </div>
    <div>
      <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{title}</h5>
      <p className="text-xl font-bold text-slate-800">{detail}</p>
    </div>
  </div>
);

export default Contact;
