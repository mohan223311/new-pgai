import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const CTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('https://hook.us2.make.com/r9ny8388nl2ccw8bz7lnea6egqhlfmf2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
        // Optional: Reset status after a delay if you want the form to reappear
        // setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-visible">
      {/* Massive Green Glow at bottom */}
      <div className="absolute bottom-[-200px] left-0 right-0 h-[800px] bg-gradient-to-t from-brand-primary/20 via-brand-primary/5 to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-6xl font-bold text-slate-heading mb-6 font-sans drop-shadow-lg">
          Start the Conversation
        </h2>
        <p className="text-slate-body text-lg mb-12 font-body max-w-2xl mx-auto">
          We believe every business deserves the power of AI—whether you're just starting or scaling fast. My team and I are here to support your vision.
        </p>

        {/* Simplified Professional Form */}
        <div className="bg-slate-100/60 backdrop-blur-xl border border-black/10 rounded-[2rem] p-6 md:p-12 shadow-2xl relative overflow-hidden text-left">
             {/* Subtle internal glow */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[80px] rounded-full pointer-events-none"></div>

             {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 animate-fade-in-up">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-500">
                        <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-heading mb-2">Message Received!</h3>
                    <p className="text-slate-body text-center max-w-md">
                        Thank you for reaching out. We've received your details and will get back to you shortly.
                    </p>
                    <button 
                        onClick={() => setStatus('idle')}
                        className="mt-8 px-6 py-2 bg-brand-primary text-white hover:bg-brand-dark rounded-full text-sm font-bold transition-colors"
                    >
                        Send another message
                    </button>
                </div>
             ) : (
                 <form onSubmit={handleSubmit} className="relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-brand-primary uppercase tracking-wider ml-1">Name</label>
                            <input 
                                required
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text" 
                                placeholder="Amit Sharma" 
                                className="w-full bg-slate-50 border border-black/10 rounded-xl px-5 py-4 text-slate-heading placeholder-gray-600 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all font-body"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-brand-primary uppercase tracking-wider ml-1">Phone</label>
                            <input 
                                required
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                type="tel" 
                                placeholder="+91 98765 43210" 
                                className="w-full bg-slate-50 border border-black/10 rounded-xl px-5 py-4 text-slate-heading placeholder-gray-600 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all font-body"
                            />
                        </div>
                    </div>

                    <div className="space-y-2 mb-6">
                        <label className="text-xs font-bold text-brand-primary uppercase tracking-wider ml-1">Email Address</label>
                        <input 
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email" 
                            placeholder="amit.sharma@business.in" 
                            className="w-full bg-slate-50 border border-black/10 rounded-xl px-5 py-4 text-slate-heading placeholder-gray-600 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all font-body"
                        />
                    </div>

                    <div className="space-y-2 mb-8">
                        <label className="text-xs font-bold text-brand-primary uppercase tracking-wider ml-1">Message</label>
                        <textarea 
                            required
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Tell us how we can help you scale..." 
                            className="w-full bg-slate-50 border border-black/10 rounded-xl px-5 py-4 text-slate-heading placeholder-gray-600 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all font-body resize-none"
                        ></textarea>
                    </div>

                    {status === 'error' && (
                        <div className="mb-6 flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-200">
                            <AlertCircle size={20} />
                            <span className="text-sm">Something went wrong. Please try again.</span>
                        </div>
                    )}

                    <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="w-full bg-brand-primary hover:bg-brand-dark text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(232,96,10,0.2)] transition-all transform hover:-translate-y-1 font-sans flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {status === 'submitting' ? (
                            <>Sending... <Loader2 size={20} className="animate-spin" /></>
                        ) : (
                            <>Get Started Now <Send size={20} /></>
                        )}
                    </button>
                 </form>
             )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;