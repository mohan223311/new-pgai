import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$239",
    period: "/month",
    description: "For small teams starting their AI journey",
    features: [
      "Unlimited AI usage",
      "Essential collaboration tools",
      "Regular feature updates",
      "Community learning access",
      "Basic analytics dashboard",
      "Email support included",
      "Secure data encryption"
    ],
    buttonText: "Get Started Now"
  },
  {
    name: "Pro",
    price: "$439",
    period: "/month",
    description: "For scaling teams that need deeper insights",
    features: [
      "Everything in Starter",
      "3rd-party app integrations",
      "Advanced analytics reporting",
      "Team performance dashboards",
      "Priority customer support",
      "Role-based access control",
      "Automated workflow templates"
    ],
    highlight: true,
    buttonText: "Get Started Now"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For enterprise-grade scale and security",
    features: [
      "Everything in Pro",
      "Dedicated success manager",
      "Custom dashboards & reports",
      "Onboarding & training services",
      "Enterprise-grade compliance",
      "24/7 premium support",
      "SLA-backed uptime guarantee"
    ],
    buttonText: "Contact Sales"
  }
];

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-brand-primary/5 via-blue-500/5 to-purple-500/5 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>
      
      {/* Rotating glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-primary/5 blur-[100px] rounded-full animate-float"></div>
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full animate-float [animation-delay:2s]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                 <h2 className="text-4xl md:text-5xl font-bold text-slate-heading mb-6 font-sans">Simple, Transparent Pricing</h2>
                 <p className="text-slate-body max-w-lg text-lg font-body">Choose the plan that fits your growth stage. No hidden fees, just pure value.</p>
            </div>
            
            {/* Toggle */}
            <div className="bg-white p-1.5 rounded-full border border-black/10 flex mt-8 md:mt-0 shadow-lg shadow-black/20">
                <button 
                    onClick={() => setBillingCycle('yearly')}
                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all font-sans ${billingCycle === 'yearly' ? 'bg-brand-primary text-white shadow-lg' : 'text-slate-body hover:text-white'}`}
                >
                    Yearly <span className="text-[10px] ml-1 bg-slate-100/10 px-1.5 py-0.5 rounded-full">-20%</span>
                </button>
                 <button 
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all font-sans ${billingCycle === 'monthly' ? 'bg-brand-primary text-white shadow-lg' : 'text-slate-body hover:text-white'}`}
                >
                    Monthly
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
                <div 
                    key={index} 
                    className={`rounded-[2rem] p-8 md:p-10 border transition-all duration-300 relative flex flex-col group ${plan.highlight ? 'bg-white border-brand-primary/50 shadow-[0_0_40px_rgba(232,96,10,0.1)] scale-105 z-10' : 'bg-white hover:border-black/20 border-black/5'}`}
                >
                    {plan.highlight && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                             <span className="bg-brand-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-black/10 uppercase tracking-wide font-sans animate-pulse-slow">Most Popular</span>
                        </div>
                    )}

                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-slate-heading mb-3 font-sans">{plan.name}</h3>
                        <p className="text-slate-body text-sm mb-6 min-h-[40px] font-body">{plan.description}</p>
                        <div className="flex items-baseline">
                            <span className={`text-5xl font-bold font-sans ${plan.highlight ? 'text-brand-primary' : 'text-slate-heading'}`}>{plan.price}</span>
                            <span className="text-slate-body ml-2 font-medium font-body">{plan.period}</span>
                        </div>
                    </div>

                    <div className="border-t border-dashed border-black/10 pt-8 mb-8 flex-1">
                        <p className="text-slate-heading font-semibold text-sm mb-6 uppercase tracking-wider opacity-60 font-sans">What's included</p>
                        <ul className="space-y-4">
                            {plan.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-start gap-3">
                                    <div className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${plan.highlight ? 'bg-brand-primary text-white' : 'bg-slate-100/10 text-slate-heading'}`}>
                                        <Check size={12} strokeWidth={4} />
                                    </div>
                                    <span className="text-slate-body text-sm leading-tight font-body">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className={`w-full py-4 rounded-xl font-bold transition-all text-sm uppercase tracking-wide font-sans ${plan.highlight ? 'bg-brand-primary hover:bg-[#c2e650] text-white shadow-lg shadow-brand-primary/20' : 'bg-slate-heading text-white hover:bg-gray-200'}`}>
                        {plan.buttonText}
                    </button>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;