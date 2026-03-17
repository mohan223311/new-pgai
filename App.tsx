import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import Integrations from './components/Integrations';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CTASection from './components/CTASection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-brand-primary/20 selection:text-brand-dark text-slate-body">
      <Navbar />
      <main className="relative z-0">
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Integrations />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;