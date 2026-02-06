import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const DesignBuild: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-4xl mb-32">
          <ScrollReveal animation="fade-right">
            <h1 className="text-7xl md:text-9xl font-display tracking-tighter text-slate-900 mb-10 leading-[0.85] uppercase">
              DESIGN & <span className="text-blue-600">BUILD</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-right" delay={300}>
            <div className="flex items-center space-x-6">
              <div className="h-px w-20 bg-blue-600"></div>
              <p className="text-slate-400 uppercase tracking-[0.5em] text-[11px] font-black">INTEGRATED SOLUTIONS</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
          <div className="relative group">
            <ScrollReveal animation="zoom-in" duration={1500}>
              <div className="absolute -inset-4 bg-blue-100/50 rounded-[64px] blur-3xl opacity-60"></div>
              <div className="relative glass-light p-4 rounded-[64px] border-white shadow-2xl overflow-hidden">
                <img
                  src="/161 Powell Road, Brantford, ON N3T OE5/Attachments/AB52E95E-3D4B-49BA-BB2E-ADBE65D89CCA.png"
                  alt="Design & Build"
                  className="rounded-[56px] w-full"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-12">
            <ScrollReveal animation="fade-up">
              <div className="glass-light p-12 rounded-[40px] space-y-8 border-white/50 shadow-sm">
                <h2 className="text-4xl font-display tracking-tighter text-slate-900">FROM <span className="text-blue-600">CONCEPT TO COMPLETION</span></h2>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">
                  Our Design & Build service offers integrated architectural planning and construction from concept to completion. This streamlined approach ensures seamless coordination between design and construction phases, resulting in efficient project delivery and cost savings.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1 flex-shrink-0">
                      <i className="fa-solid fa-check text-white text-xs"></i>
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-slate-900 mb-2">Architectural Planning</h3>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1 flex-shrink-0">
                      <i className="fa-solid fa-check text-white text-xs"></i>
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-slate-900 mb-2">Engineering Support</h3>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1 flex-shrink-0">
                      <i className="fa-solid fa-check text-white text-xs"></i>
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-slate-900 mb-2">Construction Execution</h3>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 md:col-span-2">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1 flex-shrink-0">
                      <i className="fa-solid fa-check text-white text-xs"></i>
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-slate-900 mb-2">Final Finishing</h3>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-40">
          {[
            { 
              title: "Streamlined Process", 
              desc: "Single contract and unified team for design and construction, reducing complexity and timelines.",
              icon: "fa-sync-alt"
            },
            { 
              title: "Cost Efficiency", 
              desc: "Early contractor involvement in design leads to value engineering and cost optimization.",
              icon: "fa-dollar-sign"
            },
            { 
              title: "Quality Assurance", 
              desc: "Seamless integration between design intent and construction execution ensures quality outcomes.",
              icon: "fa-star"
            }
          ].map((feature, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 150}>
              <div className="glass-light p-10 rounded-3xl border-white shadow-sm h-full">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-8">
                  <i className={`fa-solid ${feature.icon}`}></i>
                </div>
                <h3 className="font-display text-2xl mb-4 text-slate-900">{feature.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-40 text-center space-y-12">
          <ScrollReveal animation="fade-up">
            <h3 className="text-4xl md:text-6xl font-display text-slate-900 uppercase tracking-tighter">READY TO <span className="text-blue-600">INTEGRATE</span> YOUR PROJECT?</h3>
            <p className="text-slate-500 text-lg max-w-xl mx-auto font-light">
              Experience the efficiency of our Design & Build approach for your next construction project.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/quote" className="accent-gradient text-white px-14 py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] shadow-xl hover:scale-105 transition-all">
                Request Quote
              </Link>
              <a href="tel:+14504258709" className="glass-light hover:bg-white text-slate-900 border border-slate-200 px-14 py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] transition-all">
                Call Us Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default DesignBuild;