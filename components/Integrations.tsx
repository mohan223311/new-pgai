
import React from 'react';

// TooltipIcon defined at the top level with React.FC typing
const TooltipIcon: React.FC<{ tool: { slug: string; name: string } }> = ({ tool }) => (
    <div className="group relative">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-50/80 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-black/5 hover:border-brand-primary/50 hover:shadow-[0_0_20px_rgba(232,96,10,0.2)] hover:scale-105 transition-all duration-300">
            <img 
                src={`https://cdn.simpleicons.org/${tool.slug}`} 
                alt={tool.name} 
                className="w-10 h-10 md:w-12 md:h-12 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 grayscale group-hover:grayscale-0" 
            />
        </div>
        
        {/* Custom Tooltip */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-50 border border-black/10 rounded-lg text-xs font-bold text-brand-primary whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-bottom-10 transition-all pointer-events-none z-50 shadow-2xl">
            {tool.name}
            {/* Tooltip Arrow */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-50 border-t border-l border-black/10 rotate-45"></div>
        </div>
    </div>
);

const Integrations: React.FC = () => {
    const row1 = [
        { slug: "gmail", name: "Gmail" },
        { slug: "openai", name: "OpenAI" },
        { slug: "googlegemini", name: "Gemini" },
        { slug: "googlecalendar", name: "Google Calendar" },
        { slug: "slack", name: "Slack" },
        { slug: "notion", name: "Notion" },
        { slug: "x", name: "X / Twitter" },
        { slug: "googledrive", name: "Google Drive" },
    ];

    const row2 = [
        { slug: "amazon", name: "Amazon" },
        { slug: "linkedin", name: "LinkedIn" },
        { slug: "instagram", name: "Instagram" },
        { slug: "dropbox", name: "Dropbox" },
        { slug: "reddit", name: "Reddit" },
        { slug: "trello", name: "Trello" },
        { slug: "github", name: "GitHub" },
        { slug: "paypal", name: "PayPal" },
    ];

    const handleCtaClick = () => {
      window.location.href = 'https://api.leadconnectorhq.com/widget/bookings/profitgrowthai';
    };

  return (
    <section className="py-24 bg-white overflow-hidden relative">
       {/* Ambient Glows */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-brand-primary/5 blur-[100px] -z-0"></div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="max-w-2xl">
                 <div className="flex items-center gap-2 mb-4">
                     <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></div>
                     <span className="text-brand-primary font-bold uppercase tracking-widest text-xs font-sans">Ecosystem</span>
                 </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-heading mb-6 font-sans">Seamless Integrations</h2>
                <p className="text-slate-body text-lg font-body">Connect your digital landscape. We bridge the gap between <span className="text-slate-heading">50+ industry-leading tools</span> for unified automation.</p>
              </div>
              <button 
                onClick={handleCtaClick}
                className="px-8 py-3 bg-brand-primary text-white rounded-full font-bold hover:bg-brand-dark transition-colors font-sans shadow-[0_0_20px_rgba(232,96,10,0.3)]"
              >
                  Explore All Services
              </button>
          </div>
       </div>
       
       <div className="relative w-full flex flex-col gap-8 md:gap-10">
            {/* Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Row 1 - Scrolling Left */}
            <div className="flex gap-4 md:gap-6 animate-scroll-left w-max hover:[animation-play-state:paused] pb-12">
                {[...row1, ...row1, ...row1, ...row1].map((tool, index) => (
                    <TooltipIcon key={`r1-${index}`} tool={tool} />
                ))}
            </div>

            {/* Row 2 - Scrolling Right */}
            <div className="flex gap-4 md:gap-6 animate-scroll-right w-max hover:[animation-play-state:paused] pb-12">
                {[...row2, ...row2, ...row2, ...row2].map((tool, index) => (
                    <TooltipIcon key={`r2-${index}`} tool={tool} />
                ))}
            </div>
       </div>
       
       <style>{`
        @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
        }
        .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
            animation: scroll-right 40s linear infinite;
        }
       `}</style>
    </section>
  );
};

export default Integrations;
