import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div>
                    <h2 className="text-4xl font-bold text-slate-heading mb-4 font-sans">From Strategy to AI Success</h2>
                    <p className="text-slate-body max-w-xl font-body">We streamline the AI adoption journey with a clear, proven process designed to ensure alignment, speed, and results.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Card 1: Sharifin Mohammed */}
                <div className="bg-white p-5 rounded-[2rem] border border-black/5 flex flex-col hover:border-brand-primary/20 transition-all shadow-lg group">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-5 bg-slate-100 shadow-inner border border-black/5">
                        <iframe 
                            className="w-full h-full" 
                            src="https://www.youtube.com/embed/JHt5pk2D9g8?si=fyes_LTvzs4RqkyK" 
                            title="Sharifin Mohammed Testimonial" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                    <div className="mt-auto px-2 pb-2">
                        <div className="flex items-center gap-2 mb-3">
                            <Quote className="text-brand-primary fill-brand-primary/10" size={20} />
                            <div className="h-px w-full bg-slate-100/10"></div>
                        </div>
                        <h4 className="text-slate-heading font-bold font-sans text-lg">Sharifin Mohammed</h4>
                        <p className="text-slate-body text-sm font-body">Founder and ceo of Lykos solutions</p>
                    </div>
                </div>

                 {/* Card 2: Will Smith */}
                 <div className="bg-white p-8 rounded-[2rem] border border-black/5 flex flex-col hover:border-brand-primary/20 transition-all shadow-lg relative overflow-hidden group h-full">
                     {/* Decorative background element */}
                     <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl group-hover:bg-brand-primary/10 transition-colors pointer-events-none"></div>
                     
                    <Quote className="text-brand-primary mb-6 fill-brand-primary/20" size={40} />
                    <p className="text-slate-heading text-lg mb-8 leading-relaxed font-body italic flex-1">
                        "The AI sales system we implemented was a game-changer. It saved us a massive amount of time on manual outreach and directly generated significant revenue growth. Efficient, scalable, and powerful."
                    </p>
                    <div className="mt-auto flex items-center gap-4">
                         <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white font-bold border border-black/10 shadow-inner">
                             WS
                         </div>
                        <div>
                            <h4 className="text-slate-heading font-bold font-sans">Will Smith</h4>
                            <p className="text-slate-body text-sm font-body">Founder, WS Marketing (USA)</p>
                        </div>
                    </div>
                </div>

                 {/* Card 3: AI Consultation Client */}
                <div className="bg-white p-5 rounded-[2rem] border border-black/5 flex flex-col hover:border-brand-primary/20 transition-all shadow-lg group">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-5 bg-slate-100 shadow-inner border border-black/5">
                         <iframe 
                            className="w-full h-full" 
                            src="https://www.youtube.com/embed/iuy-gOCZJ_4" 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                    <div className="mt-auto px-2 pb-2">
                        <div className="flex items-center gap-2 mb-3">
                             <Quote className="text-brand-primary fill-brand-primary/10" size={20} />
                             <div className="h-px w-full bg-slate-100/10"></div>
                        </div>
                        <p className="text-slate-body text-base font-body leading-relaxed font-medium">
                            AI consultation client from Newzealand to Learn and explore AI Sales Agents.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Testimonials;