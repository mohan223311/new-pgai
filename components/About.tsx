import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-heading mb-6 flex items-center justify-center gap-3">
          Hey Everyone! <span className="animate-bounce">👋</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-body font-body leading-relaxed">
          <strong className="text-pgai-green">PGAI</strong> is an AI automation agency website designed to highlight how artificial intelligence can help businesses streamline workflows, reduce costs, and scale efficiently. The landing page was created with a modern, <span className="text-gray-200 font-medium decoration-pgai-green decoration-2 underline underline-offset-4">conversion-focused layout</span> that emphasizes clarity, trust, and usability. From the hero section to pricing plans, every element is structured to guide users smoothly toward booking a demo or starting their AI journey.
        </p>
      </div>
    </section>
  );
};

export default About;