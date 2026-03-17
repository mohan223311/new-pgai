import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  { question: "What can AI Chat Support handle?", answer: "From FAQs to scheduling and product queries, our AI handles it all — instantly and naturally." },
  { question: "How secure is my data?", answer: "We use enterprise-grade encryption and comply with all major data protection regulations to ensure your business data remains secure." },
  { question: "How fast can I get started?", answer: "Our onboarding process is designed for speed. Most clients are up and running with their first automation within 72 hours." },
  { question: "What kind of content can your AI create?", answer: "From blog posts and social media captions to detailed reports and email drafts, our AI is versatile across formats." },
  { question: "How long does it take to implement and deploy the AI solutions?", answer: "Implementation varies by complexity, but our standard timeline ranges from 1 to 4 weeks for full deployment." }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                
                {/* Left Side */}
                <div className="lg:col-span-5 flex flex-col">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-heading mb-6 font-sans leading-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-body mb-12 font-body text-lg leading-relaxed">
                        We've gathered the most frequently asked questions to help you better understand our AI services, pricing, and integration process.
                    </p>
                    
                    {/* "Need more help?" Card matching the image */}
                    <div className="bg-white rounded-[2rem] p-8 border border-black/5 relative overflow-hidden group mt-auto">
                        {/* Green glow effect inside card */}
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-primary/10 blur-[50px] rounded-full pointer-events-none"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-6">
                                <div className="relative">
                                    {/* Illustration placeholder since we don't have the exact image asset */}
                                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center border border-black/10 relative">
                                         <HelpCircle className="text-brand-primary" size={32} />
                                         <div className="absolute -top-1 -right-1 w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-bold animate-bounce">?</div>
                                    </div>
                                    <div className="absolute top-10 -right-4 w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center border-4 border-white">
                                        <MessageCircle size={16} className="text-white" />
                                    </div>
                                </div>
                                <div className="text-right">
                                     <h4 className="text-slate-heading font-bold font-sans text-lg">Need more help?</h4>
                                </div>
                            </div>
                            
                            <p className="text-slate-body text-sm font-body mb-8 max-w-[80%]">
                                What types of customer queries can AI Chat Support handle?
                            </p>

                            <button className="w-full py-4 border border-brand-primary/30 rounded-full text-brand-primary hover:bg-brand-primary hover:text-white transition-all font-bold text-sm uppercase tracking-wide font-sans shadow-[0_0_15px_rgba(232,96,10,0.05)] hover:shadow-[0_0_20px_rgba(232,96,10,0.3)]">
                                Ask a Question
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side - Accordion */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                    {faqData.map((item, index) => (
                        <div 
                            key={index} 
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'bg-white border-brand-primary/50 shadow-[0_0_20px_rgba(232,96,10,0.05)]' : 'bg-transparent border-black/10 hover:border-black/20'}`}
                        >
                            <button 
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left group"
                            >
                                <span className={`font-medium font-body text-lg pr-4 ${openIndex === index ? 'text-slate-heading' : 'text-slate-body group-hover:text-brand-primary'}`}>
                                    {item.question}
                                </span>
                                <div className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    {openIndex === index ? 
                                        <Minus size={20} className="text-brand-primary" /> : 
                                        <Plus size={20} className="text-slate-body" />
                                    }
                                </div>
                            </button>
                            
                            <div 
                                className={`px-6 text-slate-body text-base leading-relaxed transition-all duration-300 ease-in-out font-body overflow-hidden ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </section>
  );
};

export default FAQ;