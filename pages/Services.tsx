
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import heroImage from '../assets/hero.jpeg';
import ScrollReveal from '../components/ScrollReveal';

const Services: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mb-32">
          <ScrollReveal animation="fade-right">
            <h1 className="text-7xl md:text-9xl font-display tracking-tighter text-slate-900 mb-10 leading-[0.85] uppercase">
              CORE <span className="text-blue-600">DISCIPLINES.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-right" delay={300}>
            <div className="flex items-center space-x-6">
              <div className="h-px w-20 bg-blue-600"></div>
              <p className="text-slate-400 uppercase tracking-[0.5em] text-[11px] font-black">Comprehensive Infrastructure Solutions</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Detailed Service Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-40">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.slug} animation="fade-up" delay={i * 100}>
              <div className="group glass-light p-12 rounded-[48px] border-white shadow-sm hover:shadow-2xl transition-all duration-700 bg-white/40 h-full flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-20 h-20 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center text-4xl shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <i className={`fa-solid ${service.icon}`}></i>
                  </div>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Sector 0{i + 1}</span>
                </div>
                
                <h2 className="text-4xl font-display text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">{service.title}</h2>
                <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10 flex-grow">
                  {service.description} We leverage high-fidelity BIM modeling and sustainable procurement strategies to ensure every {service.slug} project exceeds Canadian safety and quality benchmarks.
                </p>

                <ul className="space-y-4 mb-12">
                  {['Compliance Management', 'Structural Integrity Analysis', 'Site Logistics'].map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-slate-400">
                      <i className="fa-solid fa-circle-check text-blue-500/50 text-[10px]"></i>
                      <span className="text-xs font-bold uppercase tracking-widest">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to={service.path} 
                  className="inline-flex items-center text-[11px] font-black uppercase tracking-[0.3em] text-blue-600 group-hover:translate-x-2 transition-transform"
                >
                  Technical Specifications <i className="fa-solid fa-arrow-right-long ml-3"></i>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Technical Standards Section */}
        <ScrollReveal animation="zoom-in" threshold={0.2}>
          <div className="bg-white rounded-[64px] p-16 md:p-24 shadow-xl border border-slate-100 relative overflow-hidden">
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-50 rounded-full blur-[120px] -z-0 opacity-50"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <h2 className="text-5xl font-display text-slate-900 tracking-tighter uppercase">THE <span className="text-blue-600">EDGE</span> STANDARD.</h2>
                <p className="text-slate-500 text-xl font-light leading-relaxed">
                  Our services are underpinned by a rigorous technical framework that integrates modern engineering with artisanal craftsmanship.
                </p>
                <div className="space-y-8">
                  {[
                    { title: 'Zero-Defect Policy', desc: 'Rigorous internal auditing at every phase of construction.' },
                    { title: 'Smart-Site Integration', desc: 'Real-time telemetry and project tracking for stakeholders.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex space-x-6">
                      <div className="w-1.5 h-12 bg-blue-600 rounded-full"></div>
                      <div>
                        <h4 className="font-black text-[11px] tracking-widest uppercase text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-400 font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="glass-light p-3 rounded-[40px] shadow-2xl border-white overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-700">
                  <img src={heroImage} alt="Construction detail" className="rounded-[32px]" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <div className="mt-40 text-center space-y-12">
          <ScrollReveal animation="fade-up">
            <h3 className="text-4xl md:text-6xl font-display text-slate-900 uppercase tracking-tighter">Ready to <span className="text-blue-600">initialize?</span></h3>
            <p className="text-slate-500 text-lg max-w-xl mx-auto font-light">
              Connect with our diagnostic team to discuss your project requirements and receive a comprehensive structural proposal.
            </p>
            <div className="flex justify-center pt-8">
              <Link to="/quote" className="accent-gradient text-white px-16 py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] shadow-2xl hover:scale-105 transition-all">
                Request Technical Proposal
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Services;
