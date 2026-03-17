import React from 'react';
import { ArrowRight, MessageSquare, LineChart, Mic, Workflow, Mail, Database, Phone, Sparkles, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const handleCtaClick = () => {
    window.location.href = 'https://api.leadconnectorhq.com/widget/bookings/profitgrowthai';
  };

  return (
    <section id="features" className="py-24 relative bg-white overflow-hidden">
      {/* Dynamic Background Blobs */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full -z-10 animate-float"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10 animate-float [animation-delay:2s]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 blur-[150px] rounded-full -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-3xl">
             <div className="flex items-center gap-2 mb-4">
                 <Sparkles className="text-brand-primary" size={20} />
                 <span className="text-brand-primary font-bold uppercase tracking-widest text-sm font-sans">Our Capabilities</span>
             </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-heading mb-6 font-sans">Built for the Future of Work.</h2>
            <p className="text-slate-body text-lg font-body">We don't just build bots. We architect intelligent ecosystems that drive tangible business value.</p>
          </div>
          <button 
            onClick={handleCtaClick}
            className="mt-8 md:mt-0 px-8 py-3 border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(232,96,10,0.1)] hover:shadow-[0_0_30px_rgba(232,96,10,0.3)] font-sans"
          >
            Explore All Services
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 1. Custom AI Workflow Automations */}
            <div className="bg-white rounded-[2.5rem] p-6 md:p-10 border border-black/5 hover:border-brand-primary/30 transition-all group flex flex-col">
                <div className="flex items-start justify-between mb-8">
                    <div className="bg-slate-100/5 p-4 rounded-2xl border border-black/5 group-hover:bg-brand-primary/10 group-hover:border-brand-primary/20 transition-colors">
                        <Workflow className="text-brand-primary" size={28} />
                    </div>
                    <div className="bg-slate-100/5 rounded-full p-2 group-hover:bg-brand-primary group-hover:text-white transition-all">
                        <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"/>
                    </div>
                </div>
                <h3 className="text-3xl font-bold text-slate-heading mb-3 font-sans">Custom Workflow Automation</h3>
                <p className="text-slate-body mb-10 font-body leading-relaxed">Eliminate repetitive tasks by connecting your favorite apps. We build intelligent bridges that move data instantly and accurately.</p>
                
                {/* Visual: Workflow Animation */}
                <div className="bg-slate-50 rounded-2xl p-4 md:p-6 border border-black/5 relative shadow-inner mt-auto overflow-hidden">
                    {/* Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>

                    <div className="flex items-center justify-between px-2 md:px-4 py-8 relative z-10">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-8 right-8 md:left-10 md:right-10 h-0.5 bg-gray-800 -z-0"></div>
                        
                        {/* Moving Data Packet */}
                        <div className="absolute top-1/2 left-8 md:left-10 h-2 w-2 bg-brand-primary rounded-full shadow-[0_0_10px_#E8600A] z-10 animate-[moveRight_3s_linear_infinite]" style={{transform: 'translateY(-50%)'}}></div>

                        {/* Node 1: Input */}
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-slate-50 border border-black/10 flex items-center justify-center z-10 relative">
                             <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                             <div className="absolute -bottom-6 text-[10px] text-slate-body uppercase tracking-wider">Inbound</div>
                        </div>

                        {/* Node 2: Processing (AI) */}
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-50 border border-brand-primary/30 flex items-center justify-center z-10 relative shadow-[0_0_30px_rgba(232,96,10,0.1)]">
                             <Zap className="w-6 h-6 md:w-8 md:h-8 text-brand-primary" />
                             <div className="absolute -top-2 -right-2 w-3 h-3 md:w-4 md:h-4 bg-brand-primary rounded-full animate-ping"></div>
                        </div>

                        {/* Node 3: Output */}
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-slate-50 border border-black/10 flex items-center justify-center z-10 relative">
                             <Database className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                             <div className="absolute -bottom-6 text-[10px] text-slate-body uppercase tracking-wider">Synced</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. AI Voice Systems */}
            <div className="bg-white rounded-[2.5rem] p-6 md:p-10 border border-black/5 hover:border-brand-primary/30 transition-all group flex flex-col">
                <div className="flex items-start justify-between mb-8">
                    <div className="bg-slate-100/5 p-4 rounded-2xl border border-black/5 group-hover:bg-brand-primary/10 group-hover:border-brand-primary/20 transition-colors">
                        <Mic className="text-brand-primary" size={28} />
                    </div>
                    <div className="bg-slate-100/5 rounded-full p-2 group-hover:bg-brand-primary group-hover:text-white transition-all">
                        <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"/>
                    </div>
                </div>
                <h3 className="text-3xl font-bold text-slate-heading mb-3 font-sans">AI Voice Systems</h3>
                <p className="text-slate-body mb-10 font-body leading-relaxed">Deploy human-like voice agents that handle inbound support, qualification calls, and appointment setting 24/7.</p>
                
                {/* Visual: Voice Animation */}
                <div className="bg-slate-50 rounded-2xl p-4 md:p-6 border border-black/5 relative shadow-inner mt-auto flex flex-col items-center justify-center h-48 overflow-hidden">
                     {/* Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>

                     <div className="relative mb-6 z-10">
                         {/* Pulsing Circles */}
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-brand-primary/10 rounded-full animate-ping [animation-duration:2s]"></div>
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand-primary/20 rounded-full animate-pulse"></div>
                         
                         {/* Mic Icon */}
                         <div className="relative w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(232,96,10,0.4)]">
                            <Phone size={20} className="text-white fill-white" />
                         </div>
                     </div>

                     {/* Waveform Visualization */}
                     <div className="flex items-center gap-1 h-8 z-10">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                            <div 
                                key={i} 
                                className="w-1.5 bg-slate-body rounded-full animate-[wave_1s_ease-in-out_infinite]"
                                style={{
                                    height: '20%',
                                    animationDelay: `${i * 0.1}s`,
                                }}
                            ></div>
                        ))}
                     </div>
                     <div className="mt-4 flex items-center gap-2 text-xs font-mono text-brand-primary z-10">
                        <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></span>
                        LIVE CALL ACTIVE
                     </div>
                </div>
            </div>

            {/* 3. AI Chat Support - Updated with Looping Animation */}
            <div className="bg-white rounded-[2.5rem] p-6 md:p-10 border border-black/5 hover:border-brand-primary/30 transition-all group flex flex-col">
                <div className="flex items-start justify-between mb-8">
                    <div className="bg-slate-100/5 p-4 rounded-2xl border border-black/5 group-hover:bg-brand-primary/10 group-hover:border-brand-primary/20 transition-colors">
                        <MessageSquare className="text-brand-primary" size={28} />
                    </div>
                    <div className="bg-slate-100/5 rounded-full p-2 group-hover:bg-brand-primary group-hover:text-white transition-all">
                        <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"/>
                    </div>
                </div>
                <h3 className="text-3xl font-bold text-slate-heading mb-3 font-sans">AI Chat Support</h3>
                <p className="text-slate-body mb-10 font-body leading-relaxed">Delight customers 24/7 with natural, human-like responses, personalized interactions, and instant assistance.</p>
                
                {/* Visual Representation */}
                <div className="bg-slate-50 rounded-2xl p-4 md:p-6 border border-black/5 relative shadow-inner mt-auto h-52 flex flex-col relative overflow-hidden">
                    {/* Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>

                    {/* Chat Container */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end space-y-4 z-10">
                        
                        {/* User Message */}
                        <div className="flex justify-end opacity-0 animate-[userMsgLoop_6s_ease-in-out_infinite]">
                            <div className="bg-slate-100/10 text-slate-heading rounded-2xl rounded-tr-none px-4 py-2.5 text-xs md:text-sm max-w-[80%] border border-black/5">
                                Analyze retention rates 📉
                            </div>
                        </div>

                        {/* Typing Dots */}
                        <div className="flex items-center gap-1 opacity-0 animate-[typingLoop_6s_ease-in-out_infinite] absolute bottom-20 left-6">
                             <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce"></div>
                             <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce [animation-delay:0.1s]"></div>
                             <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        </div>

                        {/* AI Message */}
                        <div className="flex items-start gap-3 opacity-0 animate-[aiMsgLoop_6s_ease-in-out_infinite]">
                             <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(232,96,10,0.3)]">
                                <Sparkles size={14} className="text-white" />
                             </div>
                             <div className="bg-slate-50 border border-brand-primary/20 text-slate-body rounded-2xl rounded-tl-none px-4 py-3 text-xs md:text-sm shadow-lg w-full">
                                <p className="mb-2">Retention is up <span className="text-brand-primary font-bold">18%</span> this month! 🚀</p>
                                <div className="h-1.5 w-full bg-slate-100/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-primary w-0 animate-[widthGrowLoop_6s_ease-out_infinite]"></div>
                                </div>
                             </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 4. AI Business Insights - Updated with Scanner Animation */}
            <div className="bg-white rounded-[2.5rem] p-6 md:p-10 border border-black/5 hover:border-brand-primary/30 transition-all group flex flex-col">
                <div className="flex items-start justify-between mb-8">
                    <div className="bg-slate-100/5 p-4 rounded-2xl border border-black/5 group-hover:bg-brand-primary/10 group-hover:border-brand-primary/20 transition-colors">
                        <LineChart className="text-brand-primary" size={28} />
                    </div>
                    <div className="bg-slate-100/5 rounded-full p-2 group-hover:bg-brand-primary group-hover:text-white transition-all">
                        <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"/>
                    </div>
                </div>
                <h3 className="text-3xl font-bold text-slate-heading mb-3 font-sans">AI Business Insights</h3>
                <p className="text-slate-body mb-8 font-body leading-relaxed">Transform raw data into predictive dashboards, actionable trends, and clear next steps.</p>
                
                {/* Chart Visual */}
                <div className="h-52 w-full bg-slate-50 rounded-2xl border border-black/5 p-0 overflow-hidden relative shadow-inner mt-auto group">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                    
                    {/* Chart Line SVG */}
                    <div className="absolute inset-0 flex items-end px-4 pb-8">
                        <svg className="w-full h-32 overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                            {/* Gradient Fill */}
                            <defs>
                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#E8600A" stopOpacity="0.2"/>
                                    <stop offset="100%" stopColor="#E8600A" stopOpacity="0"/>
                                </linearGradient>
                            </defs>
                            <path d="M0,50 L0,30 Q10,25 20,35 T40,20 T60,30 T80,10 T100,25 L100,50 Z" fill="url(#chartGradient)" />
                            {/* The Line */}
                            <path d="M0,30 Q10,25 20,35 T40,20 T60,30 T80,10 T100,25" fill="none" stroke="#E8600A" strokeWidth="0.5" className="drop-shadow-[0_0_5px_rgba(232,96,10,0.5)]" />
                            
                            {/* Animated Dot traveling the line */}
                             <circle r="1.5" fill="#fff" className="animate-[followPath_4s_linear_infinite]">
                                 <animateMotion dur="4s" repeatCount="indefinite" path="M0,30 Q10,25 20,35 T40,20 T60,30 T80,10 T100,25" />
                             </circle>
                        </svg>
                    </div>

                    {/* Scanner Line */}
                    <div className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-brand-primary to-transparent opacity-50 animate-[scan_4s_linear_infinite] shadow-[0_0_10px_#E8600A]"></div>

                    {/* Floating Tag */}
                    <div className="absolute top-4 right-4 bg-white border border-black/10 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-xl z-10">
                        <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></div>
                        <span className="text-xs text-slate-body font-mono">Analyzing Q3 Data...</span>
                    </div>
                </div>
            </div>

        </div>
      </div>
       <style>{`
        @keyframes moveRight {
            0% { left: 20%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { left: 80%; opacity: 0; }
        }
        @keyframes wave {
            0%, 100% { height: 20%; opacity: 0.5; }
            50% { height: 80%; opacity: 1; background-color: #E8600A; }
        }
        
        /* New Looping Animations for Chat */
        @keyframes userMsgLoop {
            0% { opacity: 0; transform: translateY(10px); }
            10% { opacity: 1; transform: translateY(0); }
            85% { opacity: 1; transform: translateY(0); }
            95% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 0; transform: translateY(10px); }
        }
        
        @keyframes typingLoop {
            0% { opacity: 0; }
            15% { opacity: 1; }
            35% { opacity: 1; }
            40% { opacity: 0; }
            100% { opacity: 0; }
        }
        
        @keyframes aiMsgLoop {
            0% { opacity: 0; transform: translateY(10px); }
            40% { opacity: 0; transform: translateY(10px); }
            50% { opacity: 1; transform: translateY(0); }
            85% { opacity: 1; transform: translateY(0); }
            95% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 0; transform: translateY(10px); }
        }
        
        @keyframes widthGrowLoop {
            0% { width: 0%; }
            50% { width: 0%; }
            60% { width: 78%; }
            100% { width: 78%; }
        }

        @keyframes scan {
            0% { left: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { left: 100%; opacity: 0; }
        }
        @keyframes followPath {
            0% { opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
        }
       `}</style>
    </section>
  );
};

export default Services;