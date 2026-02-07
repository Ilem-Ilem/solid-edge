
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, PROJECTS } from '../constants';
import heroImage from '../assets/hero.jpeg';
import ScrollReveal from '../components/ScrollReveal';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Home: React.FC = () => {
  const { scrollToSection } = useScrollToSection();

  return (
    <div className="bg-slate-50">
      {/* Hero Section - Using Exact Pre-Construction Theme */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Pre-Construction and Management Blueprint"
            className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          {/* Refined gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

          {/* Ambient Blueprint Glow */}
          <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-red-100/30 rounded-full blur-[120px] -z-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-16 lg:pt-0">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-3xl space-y-6">
              <ScrollReveal animation="fade-right" delay={200}>
                <div className="inline-flex items-center space-x-3 glass-light px-4 py-2 rounded-full border border-gray-700/50 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                  <span className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-300">CANADIAN CONSTRUCTION EXCELLENCE</span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" delay={400}>
                <div className="space-y-2">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.9] tracking-tighter text-white uppercase">
                    SOLID EDGE <br />
                    <span className="text-red-600">CONSTRUCTION</span>
                  </h1>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" delay={600}>
                <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-xl">
                  Building with precision. Delivering with integrity. Your trusted partner for residential and commercial construction projects across Canada.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" delay={800}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                  <Link to="/quote" className="accent-gradient hover:shadow-2xl hover:shadow-red-500/40 text-white px-8 py-4 rounded-xl font-black uppercase tracking-[0.3em] text-[10px] transition-all hover:-translate-y-1 w-full sm:w-auto shadow-xl">
                    Get Started
                  </Link>
                  <Link to="/services" className="glass-light hover:bg-black text-white border border-gray-700 px-8 py-4 rounded-xl font-black uppercase tracking-[0.3em] text-[10px] transition-all w-full sm:w-auto">
                    Our Services
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Floating Card - Hidden on small screens */}
            <ScrollReveal animation="zoom-in" delay={1000}>
              <div className="floating-card glass-light p-8 rounded-[40px] border-white shadow-2xl w-full max-w-md animate-float hidden sm:block">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-300">OPERATIONAL</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-red-600">LIVE</span>
                </div>

                <h3 className="text-2xl font-display text-white mb-6 uppercase">Project Status</h3>

                <div className="space-y-5">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300 text-base">Active Projects</span>
                    <span className="text-white font-bold text-lg">24</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300 text-base">Team Members</span>
                    <span className="text-white font-bold text-lg">86</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300 text-base">Years Experience</span>
                    <span className="text-white font-bold text-lg">12+</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300 text-base">Satisfied Clients</span>
                    <span className="text-white font-bold text-lg">320+</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse mr-3"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">REAL-TIME DATA SYNC</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Scroll Indicator for Small Screens */}
          <div className="flex justify-center mt-12 sm:hidden">
            <button
              onClick={() => scrollToSection('next-section')}
              className="scroll-indicator bounce flex items-center justify-center w-14 h-14 rounded-full glass-light border border-gray-700 shadow-lg"
              aria-label="Scroll to next section"
            >
              <i className="fas fa-chevron-down text-red-600 text-lg"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="next-section" className="py-24 relative bg-black border-y border-gray-800 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Market Cap Served', value: '$2.4B+' },
              { label: 'Strategic Partners', value: '450+' },
              { label: 'Safety Metric', value: '100%' },
              { label: 'Nationwide Projects', value: '1.2K+' },
            ].map((stat, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 150}>
                <div className="text-center group">
                  <div className="text-4xl md:text-5xl font-display text-white mb-2 group-hover:text-red-600 transition-colors duration-500">{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Suite */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="fade-right">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <h2 className="text-5xl font-display text-white mb-6 uppercase">CORE <span className="text-red-600">DISCIPLINES</span></h2>
                <p className="text-gray-300 font-medium text-lg">Harnessing advanced engineering to deliver structural perfection.</p>
              </div>
              <Link to="/services" className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 hover:text-red-800 transition-colors group flex items-center">
                Our Capabilities <i className="fa-solid fa-arrow-right-long ml-3 group-hover:translate-x-2 transition-transform"></i>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.slug} animation="fade-up" delay={i * 100}>
                <Link to={s.path} className="group glass-light p-10 rounded-[32px] hover:bg-black border-gray-700 transition-all duration-500 flex flex-col h-full shadow-sm hover:shadow-xl">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-3xl mb-10 group-hover:bg-red-600 group-hover:text-white transition-all shadow-inner">
                    <i className={`fa-solid ${s.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-display mb-4 text-white group-hover:text-red-600 transition-colors uppercase">{s.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-10 flex-grow font-medium">{s.description}</p>
                  <div className="flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-red-600 group-hover:translate-x-1 transition-transform">
                    Details <i className="fa-solid fa-plus ml-2"></i>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 relative group">
              <ScrollReveal animation="zoom-in" duration={1500}>
                <div className="relative z-10 glass-light p-3 rounded-[48px] border-gray-700 shadow-2xl">
                  <img src={heroImage} alt="Job site" className="rounded-[40px] w-full" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-red-100 rounded-full blur-[80px] -z-10 opacity-60"></div>
              </ScrollReveal>
            </div>

            <div className="lg:w-1/2 space-y-12">
              <ScrollReveal animation="fade-left">
                <div className="space-y-6">
                  <h2 className="text-6xl font-display text-white tracking-tighter leading-none uppercase">THE FOUNDATION OF <br /> <span className="text-red-600 underline underline-offset-[16px] decoration-4 decoration-red-100">TRUST.</span></h2>
                  <p className="text-gray-300 text-xl font-light leading-relaxed">
                    Solid Edge is defined by our commitment to uncompromising quality. We lead with integrity, ensuring every development meets the highest architectural and logistical standards.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 gap-10">
                <ScrollReveal animation="fade-up" delay={200}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-red-600">
                      <i className="fa-solid fa-layer-group text-xl"></i>
                      <h4 className="font-black uppercase tracking-widest text-[10px] text-white">Advanced BIM</h4>
                    </div>
                    <p className="text-gray-300 text-xs font-medium leading-relaxed">Precision modeling that eliminates site errors and optimizes project timelines.</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={400}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-red-600">
                      <i className="fa-solid fa-earth-americas text-xl"></i>
                      <h4 className="font-black uppercase tracking-widest text-[10px] text-white">Net Zero Goals</h4>
                    </div>
                    <p className="text-gray-300 text-xs font-medium leading-relaxed">Integrating sustainable infrastructure solutions into the core of every build.</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="fade-down">
            <div className="text-center mb-24 space-y-4">
              <h2 className="text-6xl font-display text-white tracking-tighter uppercase">PROJECT <span className="text-red-600">MANIFESTO</span></h2>
              <p className="text-gray-400 uppercase tracking-[0.5em] text-[10px] font-black">Curated Developments Nationwide</p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-12">
            {PROJECTS.map((p, i) => (
              <ScrollReveal key={p.id} animation="fade-up" delay={i * 200}>
                <div className="group relative h-[550px] overflow-hidden rounded-[48px] shadow-sm hover:shadow-2xl transition-all duration-700 bg-black p-4">
                  <div className="relative h-full w-full overflow-hidden rounded-[40px]">
                    <img
                      src={
                        i === 0 ? "/WhatsApp Image 2026-02-06 at 7.50.09 AM.jpeg" :
                        i === PROJECTS.length - 1 ? "/WhatsApp Image 2026-02-06 at 7.50.57 AM.jpeg" :
                        p.image
                      }
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                      <div className="space-y-3">
                        <span className="inline-block glass-light px-3 py-1 text-[9px] font-black uppercase tracking-[0.3em] rounded border-white/20">{p.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative overflow-hidden bg-black">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="zoom-in" threshold={0.3}>
            <div className="glass-light rounded-[64px] p-16 md:p-24 text-center relative border border-gray-700 shadow-2xl">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-50 rounded-full blur-[100px] -z-10"></div>
              <div className="relative z-10 space-y-12">
                <h2 className="text-6xl md:text-8xl font-display text-white leading-[0.9] tracking-tighter uppercase">LET'S BUILD <br /> <span className="text-red-600">TOGETHER.</span></h2>
                <p className="text-gray-300 text-xl font-light max-w-2xl mx-auto">Connecting visionaries with the structural expertise to make them real.</p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Link to="/quote" className="accent-gradient text-white px-14 py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] shadow-xl hover:scale-105 transition-all">
                    Request Consultation
                  </Link>
                  <Link to="/contact" className="glass-light hover:bg-black text-white border border-gray-700 px-14 py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] transition-all">
                    Connect With HQ
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
