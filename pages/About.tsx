
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-4xl mb-32">
          <ScrollReveal animation="fade-right">
            <h1 className="text-7xl md:text-9xl font-display tracking-tighter text-slate-900 mb-10 leading-[0.85]">
              THE <span className="text-blue-600">LEGACY</span> <br /> OF EDGE
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-right" delay={300}>
            <div className="flex items-center space-x-6">
              <div className="h-px w-20 bg-blue-600"></div>
              <p className="text-slate-400 uppercase tracking-[0.5em] text-[11px] font-black">Precision Built Since 1999</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Narrative Grid */}
        <div className="grid lg:grid-cols-2 gap-24 mb-40 items-center">
          <div className="space-y-12">
            <ScrollReveal animation="fade-up">
              <div className="glass-light p-12 rounded-[40px] space-y-8 border-white/50 shadow-sm">
                <h2 className="text-5xl font-display tracking-tighter text-slate-900">ENGINEERING <br /> <span className="text-blue-600">WITH PURPOSE.</span></h2>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">
                  Solid Edge Construction Canada was founded on a simple principle: build it once, and build it for life. Our origins in high-tension civil engineering taught us that there is no substitute for precision.
                </p>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">
                  Today, we operate a multi-billion dollar portfolio that ranges from luxury residential retreats to massive industrial hubs. Our team is a synergy of master tradespeople and digital engineering experts.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-2 gap-8">
              <ScrollReveal animation="zoom-in" delay={200}>
                <div className="glass-light p-10 rounded-3xl shadow-sm border-white h-full">
                  <h4 className="font-display text-blue-600 text-2xl mb-4">MISSION</h4>
                  <p className="text-[13px] text-slate-400 leading-relaxed font-bold uppercase tracking-widest">Excellence In Foundation</p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="zoom-in" delay={400}>
                <div className="glass-light p-10 rounded-3xl shadow-sm border-white h-full">
                  <h4 className="font-display text-blue-600 text-2xl mb-4">VISION</h4>
                  <p className="text-[13px] text-slate-400 leading-relaxed font-bold uppercase tracking-widest">Building Canada's Future</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
          
          <div className="relative group">
            <ScrollReveal animation="zoom-in" duration={1500}>
              <div className="absolute -inset-4 bg-blue-100/50 rounded-[64px] blur-3xl opacity-60"></div>
              <div className="relative glass-light p-4 rounded-[64px] border-white shadow-2xl overflow-hidden">
                <img src="/161 Powell Road, Brantford, ON N3T OE5/Attachments/hero.jpeg" alt="Steel detail" className="rounded-[56px]" />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Core Values */}
        <ScrollReveal animation="fade-up" threshold={0.2}>
          <div className="bg-white rounded-[64px] p-20 md:p-32 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-80 h-80 bg-blue-50/50 rounded-full blur-[100px]"></div>
            <div className="text-center mb-24 space-y-4 relative z-10">
              <h2 className="text-6xl font-display text-slate-900 tracking-tighter">CORE <span className="text-blue-600">ETHOS</span></h2>
              <p className="text-slate-400 uppercase tracking-[0.4em] text-[10px] font-black">The pillars of our operation</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
              {[
                { title: 'INTEGRITY', desc: 'Radical transparency in every procurement and build phase.', icon: 'fa-shield-halved' },
                { title: 'PRECISION', desc: 'Millimeter-perfect structural engineering at every scale.', icon: 'fa-ruler-combined' },
                { title: 'DURABILITY', desc: 'Materials and methods designed to endure the Canadian climate.', icon: 'fa-mountain-sun' },
                { title: 'INNOVATION', desc: 'Integrating smart technology into the fabric of the building.', icon: 'fa-microchip' },
              ].map((v, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 150}>
                  <div className="text-center group">
                    <div className="w-20 h-20 rounded-2xl bg-slate-50 text-blue-600 flex items-center justify-center text-3xl mx-auto mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                      <i className={`fa-solid ${v.icon}`}></i>
                    </div>
                    <h3 className="font-display text-2xl mb-4 text-slate-900">{v.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default About;
