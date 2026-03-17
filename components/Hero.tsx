import React from 'react';
import { Play, Activity, CheckCircle2, TrendingUp, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const handleCtaClick = () => {
    window.location.href = 'https://api.leadconnectorhq.com/widget/bookings/profitgrowthai';
  };

  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-offwhite">
      {/* PROFESSIONAL LIGHTING EFFECT */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          {/* 1. Main Top Spotlight Beam */}
          <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[80%] md:w-[60%] h-[600px] bg-gradient-to-b from-brand-primary/10 via-brand-primary/5 to-transparent blur-[100px] rounded-[100%] animate-pulse-slow"></div>
          
          {/* 2. Secondary Ambient Glows (Moving) */}
          <div className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-brand-secondary/5 blur-[120px] rounded-full mix-blend-multiply animate-float"></div>
          <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-orange-300/10 blur-[120px] rounded-full mix-blend-multiply animate-float [animation-delay:2s]"></div>
          
          {/* 3. Grid Texture Overlay (Subtle) */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50 mask-image-gradient"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
        
        {/* Badge */}
        <div className="animate-fade-in-up [animation-delay:0ms] opacity-0 mb-8 relative">
            <div className="absolute inset-0 bg-brand-primary/10 blur-xl rounded-full"></div>
            <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-primary/20 shadow-sm">
                <SparklesIcon className="w-3 h-3 text-brand-primary" />
                <span className="text-xs font-bold text-brand-primary tracking-wide uppercase font-sans">Unlock Powerful Automation</span>
            </div>
        </div>

        {/* Main Heading */}
        <h1 className="animate-fade-in-up [animation-delay:200ms] opacity-0 text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-heading tracking-tight leading-[1.1] mb-8 max-w-5xl font-sans drop-shadow-sm relative">
          Unlock <span className="relative inline-block text-brand-primary">
              AI-Powered
              {/* Subtle underline glow */}
              <div className="absolute bottom-2 left-0 right-0 h-4 bg-brand-primary/10 blur-lg -z-10"></div>
          </span> <br />
          Growth for Your Business
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up [animation-delay:400ms] opacity-0 text-lg md:text-xl text-slate-body mb-10 max-w-2xl font-body leading-relaxed mx-auto">
          Cut costs, speed up workflows, and scale smarter with AI solutions tailored to your unique needs.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up [animation-delay:600ms] opacity-0 flex flex-col sm:flex-row items-center gap-4 mb-20">
          <button 
            onClick={handleCtaClick}
            className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-brand-dark text-white rounded-full font-bold text-base transition-all shadow-brand transform hover:-translate-y-1 font-sans relative overflow-hidden group"
          >
            <span className="relative z-10">Book a Free Demo</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          <button 
            onClick={handleCtaClick}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-black/10 text-slate-heading rounded-full font-bold text-base transition-all flex items-center justify-center gap-2 font-sans shadow-sm group"
          >
            <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                 <Play size={10} className="fill-current ml-0.5 text-brand-primary group-hover:text-white" />
            </div>
            Watch It in Action
          </button>
        </div>

        {/* Mockup Element - Enhanced with animations */}
        <div className="animate-fade-in-up [animation-delay:800ms] opacity-0 relative w-full max-w-5xl mx-auto mb-10 perspective-1000">
             <div className="relative rounded-2xl bg-white border border-black/10 shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] animate-float flex flex-col">
                
                {/* Fake UI Header */}
                <div className="h-12 border-b border-black/5 bg-slate-50 flex items-center px-4 justify-between shrink-0">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                            <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
                            <span className="text-[10px] font-mono font-bold text-brand-primary tracking-wider">SYSTEM ACTIVE</span>
                        </div>
                    </div>
                </div>

                {/* Fake UI Body */}
                <div className="flex flex-1 bg-white overflow-hidden">
                     
                     {/* Sidebar */}
                     <div className="w-16 md:w-64 border-r border-black/5 bg-slate-50 p-4 flex flex-col gap-2 hidden md:flex shrink-0">
                         {['Overview', 'Campaigns', 'AI Agents', 'Analytics', 'Settings'].map((item, i) => (
                             <div key={i} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-bold transition-colors ${i === 0 ? 'bg-brand-primary/10 text-brand-primary' : 'text-slate-body hover:text-slate-heading hover:bg-black/5'}`}>
                                 <div className={`w-4 h-4 rounded-sm ${i === 0 ? 'bg-brand-primary' : 'bg-slate-300'}`}></div>
                                 <span>{item}</span>
                             </div>
                         ))}
                         
                         <div className="mt-auto p-4 bg-white rounded-xl border border-black/5 shadow-sm">
                             <div className="text-xs font-semibold text-slate-body mb-2">Processing Power</div>
                             <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                 <div className="h-full bg-brand-primary w-[85%]"></div>
                             </div>
                         </div>
                     </div>

                     {/* Main Dashboard Area */}
                     <div className="flex-1 p-6 overflow-hidden relative flex flex-col bg-slate-50/50">
                          {/* Stats Grid */}
                          <div className="grid grid-cols-3 gap-4 mb-6 shrink-0">
                              {/* Stat Card 1 */}
                              <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm">
                                  <div className="text-slate-body font-semibold text-xs mb-1">Total Revenue</div>
                                  <div className="text-xl md:text-2xl font-bold text-slate-heading mb-2">$124,592</div>
                                  <div className="flex items-center font-semibold text-xs text-green-600 gap-1">
                                      <TrendingUp size={12} /> +14.5%
                                  </div>
                              </div>
                              {/* Stat Card 2 */}
                              <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm">
                                  <div className="text-slate-body font-semibold text-xs mb-1">Active Agents</div>
                                  <div className="text-xl md:text-2xl font-bold text-slate-heading mb-2">12</div>
                                  <div className="flex items-center font-semibold text-xs text-blue-600 gap-1">
                                      <Activity size={12} /> 98% Uptime
                                  </div>
                              </div>
                              {/* Stat Card 3 */}
                              <div className="bg-white p-4 rounded-xl border border-black/5 shadow-sm">
                                  <div className="text-slate-body font-semibold text-xs mb-1">Tasks Saved</div>
                                  <div className="text-xl md:text-2xl font-bold text-slate-heading mb-2">4,281</div>
                                  <div className="flex items-center font-semibold text-xs text-brand-primary gap-1">
                                      <Zap size={12} /> 320h Saved
                                  </div>
                              </div>
                          </div>

                          {/* Charts Row */}
                          <div className="grid grid-cols-3 gap-6 flex-1 min-h-0">
                                {/* Performance Graph Area */}
                                <div className="col-span-3 md:col-span-2 bg-white rounded-xl border border-black/5 shadow-sm p-4 relative overflow-hidden flex flex-col">
                                    <div className="flex justify-between items-center mb-4 z-10">
                                        <div className="text-sm font-bold text-slate-heading flex items-center gap-2">
                                            Performance Overview
                                            <span className="text-[10px] bg-brand-primary/10 text-brand-primary px-1.5 py-0.5 rounded">Live</span>
                                        </div>
                                        <div className="text-xs text-green-600 font-bold font-mono">+24.5%</div>
                                    </div>
                                    
                                    {/* SVG Chart Container */}
                                    <div className="flex-1 w-full relative min-h-[120px]">
                                        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                                            <defs>
                                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#E8600A" stopOpacity="0.15"/>
                                                    <stop offset="100%" stopColor="#E8600A" stopOpacity="0"/>
                                                </linearGradient>
                                                <mask id="chartMask">
                                                    <rect x="0" y="0" width="300" height="100" fill="white" className="animate-[revealChart_2s_ease-out_forwards]" />
                                                </mask>
                                            </defs>
                                            
                                            {/* Horizontal Grid Lines */}
                                            <line x1="0" y1="25" x2="300" y2="25" stroke="rgba(0,0,0,0.05)" strokeDasharray="4 4" />
                                            <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(0,0,0,0.05)" strokeDasharray="4 4" />
                                            <line x1="0" y1="75" x2="300" y2="75" stroke="rgba(0,0,0,0.05)" strokeDasharray="4 4" />

                                            {/* Area Fill */}
                                            <path 
                                                d="M0,100 L0,65 C40,65 50,80 80,50 S130,60 160,40 S220,10 260,25 S280,5 300,15 V100 Z" 
                                                fill="url(#chartGradient)" 
                                                className="opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]"
                                            />
                                            
                                            {/* The Chart Line */}
                                            <path 
                                                d="M0,65 C40,65 50,80 80,50 S130,60 160,40 S220,10 260,25 S280,5 300,15" 
                                                fill="none" 
                                                stroke="#E8600A" 
                                                strokeWidth="2" 
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                mask="url(#chartMask)"
                                            />

                                            {/* Pulsing Dot at End */}
                                            <g className="animate-[fadeIn_0.5s_ease-out_1.5s_forwards] opacity-0">
                                                <circle cx="300" cy="15" r="4" fill="#E8600A" className="animate-ping opacity-75" />
                                                <circle cx="300" cy="15" r="2.5" fill="white" stroke="#E8600A" strokeWidth="1" />
                                            </g>
                                        </svg>
                                    </div>
                                    <style>{`
                                        @keyframes revealChart {
                                            from { width: 0; }
                                            to { width: 300px; }
                                        }
                                        @keyframes fadeIn {
                                            from { opacity: 0; }
                                            to { opacity: 1; }
                                        }
                                    `}</style>
                                </div>

                                {/* Live Feed - Hidden on small screens if needed, or displayed below */}
                                <div className="hidden md:flex col-span-1 bg-white rounded-xl border border-black/5 shadow-sm p-4 flex-col gap-3">
                                    <div className="text-xs font-bold text-slate-body uppercase tracking-wider mb-2">Live Activity</div>
                                    {[
                                        { text: 'Lead Qualified', time: 'Just now', color: 'text-brand-primary' },
                                        { text: 'Meeting Booked', time: '2m ago', color: 'text-blue-500' },
                                        { text: 'Email Sequence', time: '5m ago', color: 'text-purple-500' },
                                        { text: 'Database Sync', time: '12m ago', color: 'text-slate-body' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 border border-black/5 animate-fade-in-up" style={{animationDelay: `${i * 150}ms`}}>
                                            <div className={`w-2 h-2 rounded-full bg-current ${item.color} animate-pulse`}></div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-xs font-bold text-slate-heading truncate">{item.text}</div>
                                                <div className="text-[10px] font-medium text-slate-body">{item.time}</div>
                                            </div>
                                            <CheckCircle2 size={12} className={item.color} />
                                        </div>
                                    ))}
                                </div>
                          </div>
                     </div>
                </div>
                
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 to-transparent pointer-events-none"></div>
             </div>
             {/* Reflection/Shadow under mockup */}
             <div className="absolute -bottom-10 left-[10%] right-[10%] h-10 bg-brand-primary/10 blur-[40px] rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

// Small helper component for the spark icon
const SparklesIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor"/>
    </svg>
);

export default Hero;