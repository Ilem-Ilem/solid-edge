
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Quote from './pages/Quote';
import Services from './pages/Services';
import WhyChooseUs from './pages/WhyChooseUs';
import FAQ from './pages/FAQ';
import ResidentialConstruction from './pages/ResidentialConstruction';
import CommercialConstruction from './pages/CommercialConstruction';
import GeneralContracting from './pages/GeneralContracting';
import DesignBuild from './pages/DesignBuild';
import Contact from './pages/Contact';

// Placeholder components for other pages
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="pt-32 pb-20 text-center container mx-auto px-6">
    <h1 className="text-4xl font-display mb-8 uppercase tracking-widest text-white">{title}</h1>
    <div className="bg-black p-20 rounded-2xl shadow-xl border border-dashed border-gray-700">
      <p className="text-gray-400 font-display text-xl mb-4 italic">Experience Excellence Coming Soon</p>
      <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
        We are currently updating our {title.toLowerCase()} data with the latest project details and Canadian compliance standards.
        Please contact our office for immediate inquiries.
      </p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/services/residential" element={<ResidentialConstruction />} />
          <Route path="/services/commercial" element={<CommercialConstruction />} />
          <Route path="/services/contracting" element={<GeneralContracting />} />
          <Route path="/services/design-build" element={<DesignBuild />} />
          <Route path="/projects" element={<PlaceholderPage title="Project Portfolio" />} />
          <Route path="/process" element={<PlaceholderPage title="Our Build Process" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/careers" element={<PlaceholderPage title="Careers" />} />
          <Route path="/safety" element={<PlaceholderPage title="Safety & Compliance" />} />
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms & Conditions" />} />
          <Route path="/cookies" element={<PlaceholderPage title="Cookie Policy" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
