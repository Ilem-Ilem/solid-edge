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
      <div className="pt-40 pb-40 text-center animate-in zoom-in-95 duration-700 bg-black min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto space-y-12 glass-light p-20 rounded-[64px] border-white shadow-2xl">
            <div className="w-24 h-24 accent-gradient text-white rounded-full flex items-center justify-center mx-auto text-5xl shadow-xl shadow-red-500/20">
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl font-display tracking-tight text-white uppercase">Proposal <span className="text-red-600">Queued</span></h1>
              <p className="text-gray-300 text-lg font-medium leading-relaxed max-w-md mx-auto">
                Our estimation department has received your parameters. A project lead will contact you within 24 business hours to finalize the diagnostic.
              </p>
            </div>
            <button 
              onClick={() => setSubmitted(false)} 
              className="text-red-600 font-black uppercase tracking-[0.4em] text-[11px] hover:text-white transition-colors"
            >
              Initiate New Inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-48 pb-32 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div>
              <h1 className="text-7xl md:text-9xl font-display tracking-tighter text-white mb-8 leading-[0.85] uppercase">
                SYSTEM <br /> <span className="text-red-600">ANALYSIS.</span>
              </h1>
              <div className="flex items-center space-x-6">
                <div className="h-px w-20 bg-red-600"></div>
                <p className="text-gray-400 uppercase tracking-[0.5em] text-[11px] font-black">Professional Evaluation Request</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-xl font-light leading-relaxed max-w-lg">
              Unlock precise project metrics and strategic consulting. Our team provides high-fidelity cost estimations for large-scale Canadian developments.
            </p>
            
            <div className="grid gap-6">
              <div className="glass-light p-8 rounded-3xl flex items-center space-x-6 border-gray-700 shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-inner">
                  <i className="fa-solid fa-bolt-lightning"></i>
                </div>
                <div>
                  <p className="font-black text-[11px] tracking-[0.2em] uppercase text-white mb-1">Response Protocol</p>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Standard 24-Hour Review</p>
                </div>
              </div>
              <div className="glass-light p-8 rounded-3xl flex items-center space-x-6 border-gray-700 shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-gray-800 text-gray-400 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-inner">
                  <i className="fa-solid fa-fingerprint"></i>
                </div>
                <div>
                  <p className="font-black text-[11px] tracking-[0.2em] uppercase text-white mb-1">Encrypted Transfer</p>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Confidential Data Handling</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-red-100 rounded-[64px] blur-3xl opacity-20"></div>
            <div className="glass-solid p-10 md:p-16 rounded-[64px] relative z-10 border-gray-700 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-red-600 ml-1">Principal Identity</label>
                    <input 
                      required 
                      type="text" 
                      className="w-full px-6 py-5 bg-black border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all text-white font-medium placeholder:text-gray-500" 
                      placeholder="FULL NAME" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-red-600 ml-1">Digital Channel</label>
                    <input 
                      required 
                      type="email" 
                      className="w-full px-6 py-5 bg-black border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all text-white font-medium placeholder:text-gray-500" 
                      placeholder="EMAIL ADDRESS" 
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-red-600 ml-1">Infrastructure Sector</label>
                  <select className="w-full px-6 py-5 bg-black border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all text-white font-medium cursor-pointer appearance-none">
                    <option className="bg-black">Residential Estate Development</option>
                    <option className="bg-black">Commercial Infrastructure</option>
                    <option className="bg-black">Design-Build Strategic Planning</option>
                    <option className="bg-black">Industrial Renovation</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-red-600 ml-1">Project Scope</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-6 py-5 bg-black border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all text-white font-medium placeholder:text-gray-500 resize-none" 
                    placeholder="DESCRIBE PARAMETERS AND TIMELINES..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full accent-gradient hover:shadow-2xl hover:shadow-red-500/30 text-white py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-xs transition-all hover:-translate-y-1 active:scale-95 shadow-xl"
                >
                  Execute Submission
                </button>
                <div className="text-center">
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest font-black">Verified Secure Portal Connection</p>
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