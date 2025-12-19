
import React from 'react';
import { Twitter, Instagram, Linkedin, Github, ArrowUp, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 relative z-10 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-lg">D</div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">DeepX<span className="text-blue-600">Design</span></span>
            </div>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Premium UI/UX agency for high-end startups and enterprise SaaS. We shape the future of digital interaction.
            </p>
            <div className="space-y-3 mb-8">
               <div className="flex items-center gap-3 text-slate-500 text-sm">
                 <MapPin size={16} className="text-blue-600" />
                 <span>Sri Ganganagar, India</span>
               </div>
               <div className="flex items-center gap-3 text-slate-500 text-sm">
                 <Mail size={16} className="text-blue-600" />
                 <span>business.deepx@gmail.com</span>
               </div>
            </div>
            <div className="flex items-center gap-4">
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Github size={18} />} />
            </div>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Navigation</h5>
            <ul className="space-y-4">
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#process">Process</FooterLink>
              <FooterLink href="#portfolio">Work</FooterLink>
              <FooterLink href="#team">Team</FooterLink>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Specialties</h5>
            <ul className="space-y-4">
              <FooterLink href="#">Web3 Ecosystems</FooterLink>
              <FooterLink href="#">SaaS Platforms</FooterLink>
              <FooterLink href="#">Fintech Apps</FooterLink>
              <FooterLink href="#">3D Design</FooterLink>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Stay Connected</h5>
            <p className="text-sm text-slate-500 mb-6">Stay updated with the latest in design innovation.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-5 py-4 glass-card rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 text-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-slate-900 text-white rounded-xl text-xs font-bold">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} DeepX Design. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-slate-900 hover:text-blue-600 transition-all border border-slate-200 shadow-sm"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm border border-white/50">
    {icon}
  </a>
);

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <a href={href} className="text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium">
      {children}
    </a>
  </li>
);

export default Footer;
