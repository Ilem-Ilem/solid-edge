import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare message for SMS
    const smsBody = `New message from ${formData.name} (${formData.email}): Subject: ${formData.subject}, Message: ${formData.message}`;
    
    // Open the default messaging app with the prepared message
    const phoneNumber = '+14504258709';
    const smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(smsBody)}`;
    
    // Open the SMS app
    window.open(smsUrl, '_blank');
    
    // Show success message
    setSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
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
              <h1 className="text-5xl font-display tracking-tight text-white uppercase">Message <span className="text-red-600">Sent</span></h1>
              <p className="text-gray-300 text-lg font-medium leading-relaxed max-w-md mx-auto">
                Thank you for contacting us. Our team will get back to you within 24 hours.
              </p>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="text-red-600 font-black uppercase tracking-[0.4em] text-[11px] hover:text-white transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-48 pb-32 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-32">
          <h1 className="text-7xl md:text-9xl font-display tracking-tighter text-white mb-10 leading-[0.85] uppercase">
            GET IN <span className="text-red-600">TOUCH</span>
          </h1>
          <div className="flex items-center space-x-6">
            <div className="h-px w-20 bg-red-600"></div>
            <p className="text-gray-400 uppercase tracking-[0.5em] text-[11px] font-black">WE'D LOVE TO HEAR FROM YOU</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div className="glass-light p-10 rounded-[40px] space-y-8 border-white/50 shadow-sm">
              <h2 className="text-4xl font-display tracking-tighter text-white">CONTACT <span className="text-red-600">INFORMATION</span></h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-xl flex-shrink-0">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-[11px] uppercase tracking-[0.2em] text-white mb-2">ADDRESS</h3>
                    <p className="text-gray-300 font-medium leading-relaxed">
                      161 Powell Road<br />
                      Brantford, ON N3T OE5<br />
                      Ontario, Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-xl flex-shrink-0">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-[11px] uppercase tracking-[0.2em] text-white mb-2">PHONE</h3>
                    <p className="text-gray-300 font-medium leading-relaxed">
                      <a href="tel:+14504258709">+1 450-425-8709</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-xl flex-shrink-0">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-[11px] uppercase tracking-[0.2em] text-white mb-2">WHATSAPP</h3>
                    <p className="text-gray-300 font-medium leading-relaxed">
                      <a href="https://wa.me/14504258709">Chat with us directly</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-xl flex-shrink-0">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="font-black text-[11px] uppercase tracking-[0.2em] text-white mb-2">EMAIL</h3>
                    <p className="text-gray-300 font-medium leading-relaxed">
                      <a href="mailto:support@solidedgeconstruction.com">support@solidedgeconstruction.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-light p-10 md:p-16 rounded-[64px] relative z-10 border-white shadow-2xl">
            <h2 className="text-4xl font-display tracking-tighter text-white mb-8">SEND US A <span className="text-red-600">MESSAGE</span></h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-red-600 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 bg-black border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all text-white font-medium placeholder:text-gray-500"
                    placeholder="FULL NAME"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-red-600 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 bg-black border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all text-white font-medium placeholder:text-gray-500"
                    placeholder="EMAIL ADDRESS"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-red-600 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-5 bg-black border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all text-white font-medium placeholder:text-gray-500"
                  placeholder="SUBJECT"
                />
              </div>
              <div className="space-y-3">
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-red-600 ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-6 py-5 bg-black border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all text-white font-medium placeholder:text-gray-500 resize-none"
                  placeholder="HOW CAN WE HELP YOU?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full accent-gradient hover:shadow-2xl hover:shadow-red-500/30 text-white py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-xs transition-all hover:-translate-y-1 active:scale-95 shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;