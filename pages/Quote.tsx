
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Quote: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-40 text-center animate-in zoom-in-95 duration-700 bg-slate-50 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto space-y-12 glass-light p-20 rounded-[64px] border-white shadow-2xl">
            <div className="w-24 h-24 accent-gradient text-white rounded-full flex items-center justify-center mx-auto text-5xl shadow-xl shadow-blue-500/20">
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl font-display tracking-tight text-slate-900 uppercase">Proposal <span className="text-blue-600">Queued</span></h1>
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md mx-auto">
                Our estimation department has received your parameters. A project lead will contact you within 24 business hours to finalize the diagnostic.
              </p>
            </div>
            <button 
              onClick={() => setSubmitted(false)} 
              className="text-blue-600 font-black uppercase tracking-[0.4em] text-[11px] hover:text-slate-900 transition-colors"
            >
              Initiate New Inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-48 pb-32 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div>
              <h1 className="text-7xl md:text-9xl font-display tracking-tighter text-slate-900 mb-8 leading-[0.85] uppercase">
                SYSTEM <br /> <span className="text-blue-600">ANALYSIS.</span>
              </h1>
              <div className="flex items-center space-x-6">
                <div className="h-px w-20 bg-blue-600"></div>
                <p className="text-slate-400 uppercase tracking-[0.5em] text-[11px] font-black">Professional Evaluation Request</p>
              </div>
            </div>
            
            <p className="text-slate-500 text-xl font-light leading-relaxed max-w-lg">
              Unlock precise project metrics and strategic consulting. Our team provides high-fidelity cost estimations for large-scale Canadian developments.
            </p>
            
            <div className="grid gap-6">
              <div className="glass-light p-8 rounded-3xl flex items-center space-x-6 border-white shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-inner">
                  <i className="fa-solid fa-bolt-lightning"></i>
                </div>
                <div>
                  <p className="font-black text-[11px] tracking-[0.2em] uppercase text-slate-900 mb-1">Response Protocol</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Standard 24-Hour Review</p>
                </div>
              </div>
              <div className="glass-light p-8 rounded-3xl flex items-center space-x-6 border-white shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-inner">
                  <i className="fa-solid fa-fingerprint"></i>
                </div>
                <div>
                  <p className="font-black text-[11px] tracking-[0.2em] uppercase text-slate-900 mb-1">Encrypted Transfer</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Confidential Data Handling</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-100 rounded-[64px] blur-3xl opacity-40"></div>
            <div className="glass-solid p-10 md:p-16 rounded-[64px] relative z-10 border-white shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 ml-1">Principal Identity</label>
                    <input 
                      required 
                      type="text" 
                      className="w-full px-6 py-5 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-900 font-medium placeholder:text-slate-300" 
                      placeholder="FULL NAME" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 ml-1">Digital Channel</label>
                    <input 
                      required 
                      type="email" 
                      className="w-full px-6 py-5 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-900 font-medium placeholder:text-slate-300" 
                      placeholder="EMAIL ADDRESS" 
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 ml-1">Infrastructure Sector</label>
                  <select className="w-full px-6 py-5 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-900 font-medium cursor-pointer appearance-none">
                    <option>Residential Estate Development</option>
                    <option>Commercial Infrastructure</option>
                    <option>Design-Build Strategic Planning</option>
                    <option>Industrial Renovation</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 ml-1">Project Scope</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-6 py-5 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-slate-900 font-medium placeholder:text-slate-300 resize-none" 
                    placeholder="DESCRIBE PARAMETERS AND TIMELINES..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full accent-gradient hover:shadow-2xl hover:shadow-blue-500/30 text-white py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-xs transition-all hover:-translate-y-1 active:scale-95 shadow-xl"
                >
                  Execute Submission
                </button>
                <div className="text-center">
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest font-black">Verified Secure Portal Connection</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
