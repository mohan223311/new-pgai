import React from 'react';
import { Linkedin, Instagram, Youtube, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-50 pt-16 pb-12 z-20 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-6 group cursor-pointer w-fit">
                        <img src="/logo.png" alt="Profitgrowth AI Logo" className="w-10 h-10 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-2xl font-extrabold tracking-tight text-slate-heading font-sans">
                            Profitgrowth<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary ml-1.5">AI</span>
                        </span>
                    </div>
                    <p className="text-slate-body font-body leading-relaxed max-w-md">
                        Empowering your business with intelligent automation, data-driven insights, and seamless integrations. We build the future of exponential growth through cutting-edge AI solutions.
                    </p>
                </div>
                
                <div>
                    <h4 className="text-slate-heading font-bold font-sans mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-slate-body font-body text-sm">
                        <li><a href="#" className="hover:text-brand-primary transition-colors">Home</a></li>
                        <li><a href="#features" className="hover:text-brand-primary transition-colors">Features</a></li>
                        <li><a href="#resources" className="hover:text-brand-primary transition-colors">Resources</a></li>
                        <li><a href="#contact" className="hover:text-brand-primary transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-slate-heading font-bold font-sans mb-6">Connect</h4>
                    <div className="flex flex-wrap gap-3">
                        <a href="https://www.linkedin.com/company/profitgrowth-ai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-[#E8600A]/10 border border-[#E8600A]/20 flex items-center justify-center text-[#E8600A] hover:bg-[#E8600A] hover:text-white transition-all hover:scale-110">
                            <Linkedin size={16} />
                        </a>
                        <a href="https://www.youtube.com/@mofiAI123-f" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-[#E8600A]/10 border border-[#E8600A]/20 flex items-center justify-center text-[#E8600A] hover:bg-[#E8600A] hover:text-white transition-all hover:scale-110">
                            <Youtube size={16} />
                        </a>
                         <a href="https://www.instagram.com/mofi_ai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-[#E8600A]/10 border border-[#E8600A]/20 flex items-center justify-center text-[#E8600A] hover:bg-[#E8600A] hover:text-white transition-all hover:scale-110">
                            <Instagram size={16} />
                        </a>
                         <a href="https://superprofile.bio/course/4a033b25-1ece-4c43-9720-eab66882a784" target="_blank" rel="noopener noreferrer" aria-label="Course" className="w-10 h-10 rounded-full bg-[#E8600A]/10 border border-[#E8600A]/20 flex items-center justify-center text-[#E8600A] hover:bg-[#E8600A] hover:text-white transition-all hover:scale-110">
                            <GraduationCap size={16} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="h-px w-full bg-black/10 mb-8"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-slate-body text-sm font-body">
                    © 2025 Profitgrowth AI. All rights reserved.
                </div>
                
                <div className="flex gap-8 text-sm text-slate-body font-sans font-medium">
                    <a href="#" className="hover:text-brand-primary transition-colors">General Info</a>
                    <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-brand-primary transition-colors">Terms of Use</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;