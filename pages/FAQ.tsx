import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does Solid Edge Construction offer?",
      answer: "We provide residential, commercial, and industrial construction services, including project management and pre-construction planning."
    },
    {
      question: "Do you handle permits and approvals?",
      answer: "Yes. We assist with permit applications and regulatory compliance."
    },
    {
      question: "How do I request a project quote?",
      answer: "You can contact us through our website to request a consultation and estimate."
    },
    {
      question: "Do you work nationwide?",
      answer: "Yes. We serve clients across Canada."
    },
    {
      question: "How do you ensure project quality?",
      answer: "We use certified professionals, high-quality materials, and strict quality control processes."
    }
  ];

  return (
    <div className="pt-48 pb-32 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-4xl mb-32">
          <ScrollReveal animation="fade-right">
            <h1 className="text-7xl md:text-9xl font-display tracking-tighter text-slate-900 mb-10 leading-[0.85] uppercase">
              FREQUENTLY <span className="text-blue-600">ASKED</span> QUESTIONS
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-right" delay={300}>
            <div className="flex items-center space-x-6">
              <div className="h-px w-20 bg-blue-600"></div>
              <p className="text-slate-400 uppercase tracking-[0.5em] text-[11px] font-black">ANSWERS TO COMMON INQUIRIES</p>
            </div>
          </ScrollReveal>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
              <div className="glass-light rounded-2xl border-white shadow-sm overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-8 text-left"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-xl font-display text-slate-900">{faq.question}</h3>
                  <i 
                    className={`fa-solid fa-chevron-down text-blue-600 text-lg transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  ></i>
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-8 border-t border-slate-100 pt-4">
                    <p className="text-slate-500 font-medium leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-40 text-center">
          <ScrollReveal animation="zoom-in" threshold={0.3}>
            <div className="glass-light rounded-[48px] p-16 md:p-24 text-center relative border border-slate-100 shadow-2xl">
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-50 rounded-full blur-[80px] -z-10"></div>
              <div className="relative z-10 space-y-12">
                <h2 className="text-5xl md:text-7xl font-display text-slate-900 leading-[0.9] tracking-tighter uppercase">STILL HAVE <span className="text-blue-600">QUESTIONS?</span></h2>
                <p className="text-slate-500 text-xl font-light max-w-2xl mx-auto">
                  Our team is ready to provide detailed information about our services and answer any specific questions you may have.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a href="tel:+14504258709" className="accent-gradient text-white px-14 py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] shadow-xl hover:scale-105 transition-all">
                    Call Us Now
                  </a>
                  <a href="https://wa.me/14504258709" className="glass-light hover:bg-slate-50 text-slate-900 border border-slate-200 px-14 py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] transition-all">
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default FAQ;