import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Zap, Trophy, Users } from 'lucide-react';

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative bg-white overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10 animate-float [animation-duration:8s]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full -z-10 animate-float [animation-delay:4s]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Section Title */}
            <div className="text-center mb-16 animate-fade-in-up [animation-delay:200ms]">
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-heading mb-4 font-sans tracking-tight">
                    Driving Tangible <span className="text-brand-primary">Business Outcomes</span>
                </h2>
                <p className="text-slate-body max-w-2xl mx-auto text-lg font-body">
                    We don't just promise results; we engineer them. Our AI solutions are built to deliver immediate impact and long-term value.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Stat 1 */}
                <div className="bg-white border border-black/5 rounded-3xl p-8 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-300 group relative overflow-hidden animate-fade-in-up [animation-delay:400ms] flex flex-col shadow-sm">
                    {/* Top Shine */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-50"></div>
                    
                    <div className="flex justify-between items-start mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                            <Users size={28} />
                        </div>
                        <div className="bg-slate-50 border border-black/5 rounded-full px-3 py-1 text-xs font-bold text-slate-heading flex items-center gap-1 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                            <ArrowUpRight size={14} /> KPI
                        </div>
                    </div>
                    
                    <div className="mt-auto">
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-6xl font-extrabold text-slate-heading tracking-tight font-sans">98%</span>
                        </div>
                        <p className="text-slate-body font-semibold text-lg font-body mb-6">Client Satisfaction</p>
                        
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-black/5">
                            <div 
                                className={`bg-brand-primary h-full rounded-full shadow-sm ${isVisible ? 'animate-width' : 'w-0'}`} 
                                style={{width: isVisible ? '98%' : '0%'}}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Stat 2 */}
                 <div className="bg-white border border-black/5 rounded-3xl p-8 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-300 group relative overflow-hidden animate-fade-in-up [animation-delay:500ms] flex flex-col shadow-sm">
                     {/* Top Shine */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-50"></div>
                    
                    <div className="flex justify-between items-start mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-primary/10 to-transparent border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300 shadow-inner">
                            <Zap size={28} />
                        </div>
                        <div className="bg-slate-50 border border-black/5 rounded-full px-3 py-1 text-xs font-bold text-slate-heading flex items-center gap-1 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                            <ArrowUpRight size={14} /> Efficiency
                        </div>
                    </div>

                    <div className="mt-auto">
                         <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-6xl font-extrabold text-slate-heading tracking-tight font-sans">3x</span>
                        </div>
                        <p className="text-slate-body font-semibold text-lg font-body mb-6">Faster Workflows</p>
                        <div className="flex gap-2">
                             {[1,2,3].map(i => (
                                 <div key={i} className="h-2 flex-1 bg-slate-100 border border-black/5 rounded-full overflow-hidden">
                                     <div 
                                        className={`h-full bg-brand-primary shadow-sm ${isVisible ? 'animate-width' : 'w-0'}`}
                                        style={{width: '100%', animationDelay: `${i * 0.2}s`}}
                                     ></div>
                                 </div>
                             ))}
                             <div className="h-2 flex-1 bg-slate-100 border border-black/5 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Stat 3 */}
                 <div className="bg-white border border-black/5 rounded-3xl p-8 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-300 group relative overflow-hidden animate-fade-in-up [animation-delay:600ms] flex flex-col shadow-sm">
                     {/* Top Shine */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-50"></div>
                    
                     <div className="flex justify-between items-start mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                            <Trophy size={28} />
                        </div>
                        <div className="bg-slate-50 border border-black/5 rounded-full px-3 py-1 text-xs font-bold text-slate-heading flex items-center gap-1 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                            <ArrowUpRight size={14} /> Scale
                        </div>
                    </div>

                    <div className="mt-auto">
                         <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-6xl font-extrabold text-slate-heading tracking-tight font-sans">30+</span>
                        </div>
                        <p className="text-slate-body font-semibold text-lg font-body mb-6">Projects Delivered</p>
                        <div className="flex -space-x-3 pl-3">
                            {[1,2,3,4].map(i => (
                                <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-slate-100 shadow-sm flex items-center justify-center text-[9px] text-slate-body font-bold uppercase">
                                    P{i}
                                </div>
                            ))}
                            <div className="w-9 h-9 rounded-full border-2 border-white bg-purple-500 flex items-center justify-center text-xs font-bold text-white shadow-sm">
                                +
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        <style>{`
            .animate-width {
                animation: expand-width 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }
            @keyframes expand-width {
                0% { width: 0; }
            }
        `}</style>
    </section>
  );
};

export default Stats;