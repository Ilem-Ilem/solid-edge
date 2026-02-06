
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import logo from '../assets/logo.png';
import WhatsAppPopup from './WhatsAppPopup';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-5'}`}>
      <div className={`container mx-auto px-6`}>
        <div className={`glass-light rounded-2xl flex justify-between items-center px-6 py-3 transition-all duration-500 ${scrolled ? 'shadow-lg bg-white/70' : ''}`}>
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={logo} alt="Solid Edge Logo" className="w-10 h-10 object-contain" />
            <div>
              <span className="text-slate-900 font-display text-xl tracking-tight block">SOLID EDGE</span>
              <span className="block text-blue-600 text-[9px] tracking-[0.3em] font-black uppercase -mt-1">Canada</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-[11px] font-black tracking-[0.2em] uppercase transition-colors relative group ${location.pathname === link.path ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <Link to="/quote" className="accent-gradient hover:shadow-xl hover:shadow-blue-500/30 text-white px-7 py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all">
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-slate-900 text-2xl w-10 h-10 flex items-center justify-center rounded-lg glass-light">
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden fixed inset-0 glass-solid transform transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'} pt-28 px-6 z-[-1]`}>
        <div className="flex flex-col space-y-2">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="text-slate-900 text-4xl font-display tracking-tight py-5 border-b border-slate-100 flex justify-between items-center group"
            >
              {link.name}
              <i className="fa-solid fa-chevron-right text-xs text-blue-600"></i>
            </Link>
          ))}
          <Link 
            to="/quote" 
            onClick={() => setIsOpen(false)}
            className="accent-gradient text-white text-center py-5 rounded-2xl font-bold text-lg uppercase tracking-widest shadow-xl mt-10"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Solid Edge Logo" className="w-8 h-8 object-contain" />
              <span className="text-slate-900 font-display text-xl tracking-tight">Solid Edge</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Canada's engineering firm for high-end residential and commercial developments. Precision defined, legacies built.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/172pjDFoi5/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass-light flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all border border-slate-200">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-display text-sm tracking-[0.2em] mb-8">Links</h4>
            <ul className="space-y-4 text-sm font-semibold">
              {NAV_LINKS.map(link => (
                <li key={link.path}><Link to={link.path} className="text-slate-500 hover:text-blue-600 transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-display text-sm tracking-[0.2em] mb-8">Expertise</h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li><Link to="/services/residential" className="text-slate-500 hover:text-blue-600 transition-colors">Residential Estates</Link></li>
              <li><Link to="/services/commercial" className="text-slate-500 hover:text-blue-600 transition-colors">Commercial Hubs</Link></li>
              <li><Link to="/services/contracting" className="text-slate-500 hover:text-blue-600 transition-colors">General Contracting</Link></li>
              <li><Link to="/services/design-build" className="text-slate-500 hover:text-blue-600 transition-colors">Design & Build</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-display text-sm tracking-[0.2em] mb-8">Contact</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start space-x-4">
                <i className="fa-solid fa-location-dot mt-1 text-blue-600"></i>
                <span className="text-slate-500 font-medium leading-snug">161 Powell Road, Brantford, ON N3T OE5<br />Ontario, Canada</span>
              </li>
              <li className="flex items-center space-x-4">
                <i className="fa-solid fa-phone text-blue-600"></i>
                <span className="text-slate-500 font-medium">+1 450-425-8709</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">
          <p>© {new Date().getFullYear()} Solid Edge Canada / Infrastructure Group</p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="hover:text-slate-900 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-900 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const LayoutComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppPopup />
    </div>
  );
};

export { LayoutComponent as Layout };
