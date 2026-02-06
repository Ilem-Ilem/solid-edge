import React from 'react';
import heroImage from '../assets/hero.jpeg';
import ScrollReveal from '../components/ScrollReveal';

const WhyChooseUs: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-4xl mb-32">
          <ScrollReveal animation="fade-right">
            <h1 className="text-7xl md:text-9xl font-display tracking-tighter text-slate-900 mb-10 leading-[0.85] uppercase">
              WHY CHOOSE <span className="text-blue-600">US</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-right" delay={300}>
            <div className="flex items-center space-x-6">
              <div className="h-px w-20 bg-blue-600"></div>
              <p className="text-slate-400 uppercase tracking-[0.5em] text-[11px] font-black">Trusted Canadian Excellence</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Our Promise Section */}
        <div className="mb-40">
          <ScrollReveal animation="fade-up">
            <div className="glass-light p-12 rounded-[40px] space-y-8 border-white/50 shadow-sm">
              <h2 className="text-5xl font-display tracking-tighter text-slate-900">OUR <span className="text-blue-600">PROMISE</span></h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1 flex-shrink-0">
                    <i className="fa-solid fa-check text-white text-xs"></i>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-slate-900 mb-2">Quality Materials</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      We use only the highest-grade materials to ensure durability and longevity for every project.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1 flex-shrink-0">
                    <i className="fa-solid fa-check text-white text-xs"></i>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-slate-900 mb-2">Skilled Professionals</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      Our team consists of certified architects, engineers, and craftsmen with years of experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1 flex-shrink-0">
                    <i className="fa-solid fa-check text-white text-xs"></i>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-slate-900 mb-2">On-Time Delivery</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      We respect your timeline and work efficiently to complete projects within agreed deadlines.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1 flex-shrink-0">
                    <i className="fa-solid fa-check text-white text-xs"></i>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-slate-900 mb-2">Transparent Communication</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      Regular updates and clear communication throughout the entire construction process.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 md:col-span-2">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1 flex-shrink-0">
                    <i className="fa-solid fa-check text-white text-xs"></i>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-slate-900 mb-2">Customer Satisfaction</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      Your satisfaction is our priority, and we go above and beyond to exceed expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Who We Are Section */}
        <div className="grid lg:grid-cols-2 gap-24 mb-40 items-center">
          <div className="space-y-12">
            <ScrollReveal animation="fade-up">
              <div className="glass-light p-12 rounded-[40px] space-y-8 border-white/50 shadow-sm">
                <h2 className="text-5xl font-display tracking-tighter text-slate-900">WHO <span className="text-blue-600">WE ARE</span></h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold flex-shrink-0">01</div>
                    <div>
                      <h3 className="font-display text-2xl text-slate-900 mb-2">Trusted Canadian Expertise</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">
                        Solid Edge Construction Canada started with a small group of dedicated professionals committed to reshaping the construction experience through transparency, superior craftsmanship, and honest business practices. Today, we serve clients across Canada with pride and integrity.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold flex-shrink-0">02</div>
                    <div>
                      <h3 className="font-display text-2xl text-slate-900 mb-2">Strong Core Values</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">
                        Our foundation is built on integrity, quality, reliability, and client satisfaction — the principles that guide every project we undertake.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold flex-shrink-0">03</div>
                    <div>
                      <h3 className="font-display text-2xl text-slate-900 mb-2">Comprehensive Experience</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">
                        From residential projects to large commercial builds, we have grown into a full-service construction company that delivers innovative, efficient, and cost-effective solutions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold flex-shrink-0">04</div>
                    <div>
                      <h3 className="font-display text-2xl text-slate-900 mb-2">Passionate Professionals</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">
                        Our team of skilled architects, engineers, project managers, and builders is dedicated to executing projects to the highest standards while ensuring safety, quality, and communication every step of the way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative group">
            <ScrollReveal animation="zoom-in" duration={1500}>
              <div className="absolute -inset-4 bg-blue-100/50 rounded-[64px] blur-3xl opacity-60"></div>
              <div className="relative glass-light p-4 rounded-[64px] border-white shadow-2xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Pre-Construction & Management"
                  className="rounded-[56px] w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;