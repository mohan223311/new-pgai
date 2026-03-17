import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Smaller scroll amount for mobile smoothness
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 blur-[150px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
                 <h2 className="text-5xl font-bold text-slate-heading mb-6 font-sans">The AI Adoption Process</h2>
                 <p className="text-slate-body text-lg font-body leading-relaxed">
                   From idea to measurable impact — we make your AI journey seamless and future-proof.
                 </p>
            </div>
            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8 md:mt-0">
                <button 
                  onClick={() => scroll('left')}
                  className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center text-slate-heading hover:bg-slate-100/5 hover:border-brand-primary/50 transition-all group"
                  aria-label="Scroll left"
                >
                  <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="w-14 h-14 rounded-full bg-brand-primary flex items-center justify-center text-white hover:bg-[#c2e650] shadow-[0_0_20px_rgba(232,96,10,0.3)] transition-all group"
                  aria-label="Scroll right"
                >
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>

        {/* Scrollable Container */}
        <div 
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-8 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {/* Card 1: Discover & Assess */}
            <div className="min-w-[85vw] sm:min-w-[400px] md:min-w-[480px] bg-white border border-black/10 rounded-[2rem] p-2 flex flex-col snap-center group hover:border-brand-primary/30 transition-all duration-500 relative overflow-hidden">
                <div className="p-6 md:p-8 pb-4">
                    <div className="text-slate-body font-bold text-xl mb-3 font-sans">1. Discover & Assess</div>
                    <p className="text-slate-body text-base leading-relaxed font-body h-20">
                        Identify automation opportunities that truly matter and uncover hidden areas for long-term optimization.
                    </p>
                </div>
                {/* Visual Area */}
                <div className="relative h-56 bg-gradient-to-b from-slate-50 to-slate-100 rounded-b-[1.5rem] rounded-t-xl overflow-hidden mt-4 mx-2 border border-black/5 group-hover:border-brand-primary/10 transition-colors">
                    {/* Animated Network Mesh */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-40 h-40 animate-[spin_20s_linear_infinite]">
                            {/* Central Text */}
                             <div className="absolute inset-0 flex items-center justify-center z-10">
                                <span className="text-5xl font-black text-brand-primary/20 drop-shadow-[0_0_10px_rgba(232,96,10,0.2)]" style={{animation: 'counter-spin 20s linear infinite'}}>AI</span>
                            </div>
                            {/* Nodes */}
                            {[...Array(6)].map((_, i) => (
                                <div 
                                    key={i} 
                                    className="absolute w-3 h-3 bg-brand-secondary rounded-full shadow-[0_0_10px_#FF7A2F]"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        transform: `rotate(${i * 60}deg) translate(80px) rotate(-${i * 60}deg)`
                                    }}
                                >
                                    <div className="absolute top-1/2 left-1/2 w-20 h-[1px] bg-brand-secondary/30 origin-left -translate-y-1/2 -z-10 rotate-[180deg]"></div>
                                    <div className="absolute top-1/2 left-1/2 w-20 h-[1px] bg-brand-secondary/30 origin-left -translate-y-1/2 -z-10 rotate-[120deg]"></div>
                                </div>
                            ))}
                            <div className="absolute inset-0 border border-brand-secondary/10 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 2: Design AI Strategy */}
            <div className="min-w-[85vw] sm:min-w-[400px] md:min-w-[480px] bg-white border border-black/10 rounded-[2rem] p-2 flex flex-col snap-center group hover:border-brand-primary/30 transition-all duration-500 relative overflow-hidden">
                <div className="p-6 md:p-8 pb-4">
                    <div className="text-slate-body font-bold text-xl mb-3 font-sans">2. Design AI Strategy</div>
                    <p className="text-slate-body text-base leading-relaxed font-body h-20">
                        Build a detailed roadmap aligned with your unique business goals, budgets, and success metrics.
                    </p>
                </div>
                {/* Visual Area */}
                <div className="relative h-56 bg-gradient-to-b from-slate-50 to-slate-100 rounded-b-[1.5rem] rounded-t-xl overflow-hidden mt-4 mx-2 border border-black/5 group-hover:border-brand-primary/10 transition-colors">
                     {/* Animated Chart & Hand */}
                     <div className="absolute inset-0 flex items-end justify-center pb-8 px-10">
                        <div className="flex items-end gap-3 w-full h-32">
                             {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
                                 <div 
                                    key={i} 
                                    className="flex-1 bg-gradient-to-t from-blue-500/10 to-blue-500 rounded-t-md relative group-hover:to-brand-primary transition-colors duration-500"
                                    style={{
                                        height: `${h}%`,
                                        opacity: 0,
                                        animation: `rise 1s ease-out forwards ${i * 0.1}s`
                                    }}
                                 >
                                    {i === 6 && (
                                        <div className="absolute -top-12 -right-4 animate-bounce">
                                            <div className="bg-slate-50 border border-black/10 px-3 py-1 rounded-lg text-xs text-slate-heading font-bold shadow-xl">
                                                +124%
                                            </div>
                                            <div className="w-0.5 h-6 bg-slate-100/20 mx-auto"></div>
                                        </div>
                                    )}
                                 </div>
                             ))}
                        </div>
                        {/* Abstract Hand Cursor */}
                        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-slate-100/5 rounded-full border border-black/10 backdrop-blur-md flex items-center justify-center animate-[float_4s_ease-in-out_infinite]">
                            <div className="w-4 h-4 bg-brand-primary rotate-45 rounded-sm"></div>
                        </div>
                     </div>
                </div>
            </div>

            {/* Card 3: Implementation */}
            <div className="min-w-[85vw] sm:min-w-[400px] md:min-w-[480px] bg-white border border-black/10 rounded-[2rem] p-2 flex flex-col snap-center group hover:border-brand-primary/30 transition-all duration-500 relative overflow-hidden">
                <div className="p-6 md:p-8 pb-4">
                    <div className="text-slate-body font-bold text-xl mb-3 font-sans">3. Implementation</div>
                    <p className="text-slate-body text-base leading-relaxed font-body h-20">
                        Plug AI seamlessly into your workflows, disrupting daily tasks without disrupting business.
                    </p>
                </div>
                {/* Visual Area */}
                <div className="relative h-56 bg-gradient-to-b from-slate-50 to-slate-100 rounded-b-[1.5rem] rounded-t-xl overflow-hidden mt-4 mx-2 border border-black/5 group-hover:border-brand-primary/10 transition-colors">
                    {/* Integration Grid */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-center">
                        <div className="grid grid-cols-4 gap-4 opacity-50">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="aspect-square bg-slate-100/5 rounded-md border border-black/5"></div>
                            ))}
                        </div>
                        {/* Active Connection Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100/5 overflow-hidden">
                            <div className="w-1/2 h-full bg-brand-primary animate-[moveRight_2s_linear_infinite] shadow-[0_0_15px_#E8600A]"></div>
                        </div>
                        
                        {/* Center Hub */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white border border-brand-primary/50 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(232,96,10,0.15)] z-10">
                            <div className="w-10 h-10 bg-brand-primary rounded-lg rotate-12 animate-[spin_10s_linear_infinite]"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 4: Optimization (Extra card to show scroll) */}
             <div className="min-w-[85vw] sm:min-w-[400px] md:min-w-[480px] bg-white border border-black/10 rounded-[2rem] p-2 flex flex-col snap-center group hover:border-brand-primary/30 transition-all duration-500 relative overflow-hidden">
                <div className="p-6 md:p-8 pb-4">
                    <div className="text-slate-body font-bold text-xl mb-3 font-sans">4. Continuous Optimization</div>
                    <p className="text-slate-body text-base leading-relaxed font-body h-20">
                        We monitor, refine, and scale your AI systems to ensure peak performance as you grow.
                    </p>
                </div>
                {/* Visual Area */}
                <div className="relative h-56 bg-gradient-to-b from-slate-50 to-slate-100 rounded-b-[1.5rem] rounded-t-xl overflow-hidden mt-4 mx-2 border border-black/5 group-hover:border-brand-primary/10 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-32 h-32 rounded-full border-4 border-black/5 border-t-brand-primary animate-spin"></div>
                         <div className="absolute text-2xl font-bold text-slate-heading">24/7</div>
                    </div>
                </div>
            </div>

        </div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        @keyframes rise {
            from { height: 0; opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
         @keyframes counter-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
        }
      `}</style>
    </section>
  );
};

export default Process;