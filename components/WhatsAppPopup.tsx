
import React, { useState, useEffect } from 'react';

const WhatsAppPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      if (!hasClosed) {
        setIsVisible(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [hasClosed]);

  const closePopup = () => {
    setIsVisible(false);
    setHasClosed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] animate-in slide-in-from-bottom-10 fade-in duration-700">
      <div className="glass-solid p-8 rounded-[40px] shadow-2xl border-white w-[300px] relative group overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-50"></div>
        
        <button 
          onClick={closePopup}
          className="absolute top-5 right-5 text-slate-300 hover:text-slate-900 transition-colors z-10"
          aria-label="Close popup"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        <div className="flex flex-col items-center text-center space-y-6 relative z-10">
          <div className="w-16 h-16 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center text-4xl shadow-inner border border-green-100/50">
            <i className="fa-brands fa-whatsapp"></i>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-display text-2xl text-slate-900 tracking-tight uppercase">Join Us</h4>
            <p className="text-[11px] text-slate-400 font-black uppercase tracking-[0.2em] leading-relaxed">
              Real-Time Project Consulting
            </p>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Connect with our senior engineering leads via direct secure channel.
            </p>
          </div>

          <a 
            href="https://wa.me/14504258709" // Updated company WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="accent-gradient text-white w-full py-4 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] text-center shadow-xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1 active:scale-95"
          >
            Open Secure Chat
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPopup;
