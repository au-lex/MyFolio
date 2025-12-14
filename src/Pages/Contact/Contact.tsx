import React, { useState } from 'react';
import { Sms, Calendar, ArrowRight } from 'iconsax-react';
import { SiX, SiInstagram, SiLinkedin, SiDribbble } from 'react-icons/si';
import Layout from '../../layout/Layout';
import FaqSection from '../../Components/FaqSection';


export const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'email' | 'call'>('email');

  const socialLinks = [
    { name: 'X (Twitter)', icon: SiX, url: '#' },
    { name: 'Instagram', icon: SiInstagram, url: '#' },
    { name: 'LinkedIn', icon: SiLinkedin, url: '#' },
    { name: 'Dribbble', icon: SiDribbble, url: '#' },
  ];

  return (
    <Layout>
      <section className="bg-black py-16 px-6 md:px-12 lg:px-24">
        <section className="max-w-7xl mx-auto">
          
          {/* Main Layout Grid: Left (Form) - Right (FAQ) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
         
            <section className="lg:col-span-7 flex flex-col gap-10">
              
              {/* Header */}
              <section>
                <section className="flex items-center gap-3 mb-2">
                  <Sms size={28} variant="Bold" color='currentColor' className="text-white" />
                  <h2 className="text-3xl font-bold text-white">I Love to hear from you.</h2>
                </section>
                <p className="text-zinc-400 text-lg">
                  Connect with Me Today. Let’s Create Something Amazing Together!
                </p>
              </section>

              {/* Toggle Buttons */}
              <section className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setActiveTab('email')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                    activeTab === 'email' 
                      ? 'bg-zinc-800 text-white border border-zinc-700' 
                      : 'bg-transparent text-zinc-500 border border-zinc-800 hover:border-zinc-600'
                  }`}
                >
                  <Sms size={20} variant={activeTab === 'email' ? "Bold" : "Linear"} />
                  EMAIL ME
                </button>
                
                <button 
                   onClick={() => setActiveTab('call')}
                   className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                    activeTab === 'call' 
                      ? 'bg-zinc-800 text-white border border-zinc-700' 
                      : 'bg-transparent text-zinc-500 border border-zinc-800 hover:border-zinc-600'
                  }`}
                >
                  <Calendar size={20} variant={activeTab === 'call' ? "Bold" : "Linear"} />
                  SCHEDULE CALL
                </button>
              </section>

              {/* Contact Form */}
              <section className="flex flex-col gap-6">
                 <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <section className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 focus-within:border-zinc-600 transition-colors">
                        <label className="block text-zinc-500 text-xs font-bold uppercase mb-1">Name</label>
                        <input type="text" placeholder="Your Name" className="w-full bg-transparent text-white placeholder-zinc-700 focus:outline-none font-medium" />
                    </section>
                    <section className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 focus-within:border-zinc-600 transition-colors">
                        <label className="block text-zinc-500 text-xs font-bold uppercase mb-1">Email</label>
                        <input type="email" placeholder="your@email.com" className="w-full bg-transparent text-white placeholder-zinc-700 focus:outline-none font-medium" />
                    </section>
                 </section>
                 <section className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 h-48 focus-within:border-zinc-600 transition-colors">
                    <label className="block text-zinc-500 text-xs font-bold uppercase mb-2">Message</label>
                    <textarea className="w-full h-[85%] bg-transparent text-white placeholder-zinc-700 focus:outline-none resize-none font-medium leading-relaxed" placeholder="Tell me about your project..." />
                 </section>
                 <button className="w-full py-4 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all">
                    Send Your Message
                 </button>
              </section>

              {/* Social Links (Now at the bottom of the left column) */}
              <section className="pt-6 border-t border-zinc-900">
                 <p className="text-zinc-500 text-sm font-bold uppercase mb-4">Or Connect via Socials</p>
                 <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {socialLinks.map((social, idx) => (
                     <a key={idx} href={social.url} className="group flex items-center justify-between p-4 rounded-xl bg-zinc-900/30 border border-zinc-800 hover:bg-zinc-800 transition-all cursor-pointer">
                       <section className="flex items-center gap-3">
                          <section className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                              <social.icon size={18} />
                          </section>
                          <h3 className="text-zinc-300 font-bold group-hover:text-white transition-colors">{social.name}</h3>
                       </section>
                       <ArrowRight size={18} className="text-zinc-600 group-hover:text-white transition-colors" />
                     </a>
                   ))}
                 </section>
              </section>

            </section>

            {/* =========================================
                RIGHT COLUMN: FAQ Component
               ========================================= */}
            <section className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-zinc-900 pt-10 lg:pt-0 lg:pl-12">
               {/* This is the imported component */}
               <FaqSection />
            </section>

          </section>
        </section>
      </section>
    </Layout>
  );
};