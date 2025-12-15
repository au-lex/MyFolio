import React, { useState } from 'react';
import { Sms, Calendar, ArrowRight, Share, Send, Copy, Microphone2 } from 'iconsax-react';
import { SiX, SiInstagram, SiLinkedin, SiDribbble } from 'react-icons/si';
import Layout from '../../layout/Layout';
import FaqSection from '../../Components/FaqSection';

export const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'email' | 'call'>('email');

  const socialLinks = [
    { name: 'X_Protocol', icon: SiX, url: '#', id: 'NET_01' },
    { name: 'Instagram', icon: SiInstagram, url: '#', id: 'NET_02' },
    { name: 'LinkedIn', icon: SiLinkedin, url: '#', id: 'NET_03' },
    { name: 'Dribbble', icon: SiDribbble, url: '#', id: 'NET_04' },
  ];

  return (
    <Layout>
      <section className="bg-black min-h-screen text-white selection:bg-purple-500/30">
        <div className="max-w-7xl mx-auto px-1 md:px-12 lg:px-24 py-12 lg:py-20">
          
          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-24">
            
            {/* LEFT COLUMN: Communication Interface */}
            <div className="lg:col-span-7 flex flex-col gap-12">
              
              {/* SHARP HEADER */}
              <div className="border-l-2 border-purple-500 pl-6 py-2">
                <div className="flex items-center gap-3 mb-2">
                  <Share size={24} variant="Bold" color='currentColor' className="text-white" />
                  <h2 className="text-3xl font-black uppercase tracking-tighter">Contact us</h2>
                </div>
                <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                   Initialize Transmission Protocol
                </p>
              </div>

              {/* SYSTEM MODE TOGGLE */}
              <div className="flex p-1 bg-zinc-900/50 border border-zinc-800 rounded-sm">
                <button 
                  onClick={() => setActiveTab('email')}
                  className={`flex-1 flex items-center justify-center gap-3 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeTab === 'email' 
                      ? 'bg-zinc-800 text-white shadow-lg' 
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <Sms size={16} variant={activeTab === 'email' ? "Bold" : "Linear"} />
                  <span>Write_Message</span>
                </button>
                
                <div className="w-[1px] bg-zinc-800 my-2" />
                
                <button 
                   onClick={() => setActiveTab('call')}
                   className={`flex-1 flex items-center justify-center gap-3 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeTab === 'call' 
                      ? 'bg-zinc-800 text-white shadow-lg' 
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <Calendar size={16} variant={activeTab === 'call' ? "Bold" : "Linear"} />
                  <span>Book_Session</span>
                </button>
              </div>

              {/* DATA ENTRY FORM */}
              <div className="relative group p-6 border border-zinc-800 bg-zinc-900/20 rounded-sm">
                 {/* Decorative Corner */}
                 <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-600" />
                 <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-600" />

                 <div className="flex flex-col gap-8">
                    {/* Identity Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group/input">
                            <label className="block text-zinc-500 text-[10px] font-mono uppercase tracking-widest mb-2 group-focus-within/input:text-purple-400 transition-colors">
                                // User_Identity
                            </label>
                            <input 
                                type="text" 
                                placeholder="ENTER NAME" 
                                className="w-full bg-zinc-950 border-b border-zinc-800 py-3 text-sm font-bold text-white placeholder-zinc-700 focus:outline-none focus:border-purple-500 transition-colors uppercase tracking-wider" 
                            />
                        </div>
                        <div className="group/input">
                            <label className="block text-zinc-500 text-[10px] font-mono uppercase tracking-widest mb-2 group-focus-within/input:text-purple-400 transition-colors">
                                // Return_Address
                            </label>
                            <input 
                                type="email" 
                                placeholder="ENTER EMAIL" 
                                className="w-full bg-zinc-950 border-b border-zinc-800 py-3 text-sm font-bold text-white placeholder-zinc-700 focus:outline-none focus:border-purple-500 transition-colors uppercase tracking-wider" 
                            />
                        </div>
                    </div>

                    {/* Message Field */}
                    <div className="group/input h-48">
                        <label className="block text-zinc-500 text-[10px] font-mono uppercase tracking-widest mb-2 group-focus-within/input:text-purple-400 transition-colors">
                             // Transmission_Data
                        </label>
                        <textarea 
                            className="w-full h-full bg-zinc-950 border border-zinc-800 p-4 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-purple-500 resize-none font-mono leading-relaxed" 
                            placeholder="> TYPE MESSAGE HERE..." 
                        />
                    </div>

                    {/* Submit Button */}
                    <button className="group relative w-full py-5 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden">
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 mix-blend-difference" />
                        <Send size={18} variant="Bold" className="relative z-10" />
                        <span className="relative z-10">Transmit_Data</span>
                    </button>
                 </div>
              </div>

              {/* NETWORK GRID (Socials) */}
              <div className="pt-8 border-t border-zinc-800/50">
                 <div className="flex items-center gap-2 mb-6">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest">Open_Channels</p>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {socialLinks.map((social, idx) => (
                     <a key={idx} href={social.url} className="group flex items-center justify-between p-4 bg-zinc-900/20 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900/40 transition-all cursor-pointer">
                       <div className="flex items-center gap-4">
                          <div className="w-8 h-8 flex items-center justify-center bg-zinc-950 border border-zinc-800 group-hover:text-white text-zinc-500 transition-colors">
                              <social.icon size={16} />
                          </div>
                          <div>
                              <div className="text-[9px] text-zinc-600 font-mono mb-0.5">{social.id}</div>
                              <h3 className="text-zinc-300 text-sm font-bold uppercase tracking-wide group-hover:text-white transition-colors">
                                {social.name}
                              </h3>
                          </div>
                       </div>
                       <ArrowRight size={16} className="text-zinc-600 -rotate-45 group-hover:text-white group-hover:rotate-0 transition-all duration-300" />
                     </a>
                   ))}
                 </div>
              </div>

            </div>

            {/* RIGHT COLUMN: FAQ / System Help */}
            <div className="lg:col-span-5 relative">
                {/* Vertical Divider for Desktop */}
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-zinc-800 via-zinc-800/50 to-transparent -ml-12" />
                
                <div className="sticky top-12">
                   <div className="mb-8 flex items-center gap-2">
                       <Microphone2 size={20} className="text-zinc-600" variant="Bold" />
                       <span className="text-zinc-400 font-bold uppercase text-sm tracking-wider">Frequently Asked</span>
                   </div>
                   
                   {/* FAQ Component Integration */}
                   <div className="bg-zinc-900/10 border border-zinc-800/50 p-1">
                       <FaqSection />
                   </div>
                   
                   {/* Quick Copy Contact */}
                   <div className="mt-8 p-6 border border-dashed border-zinc-700 bg-zinc-900/20 text-center">
                        <p className="text-zinc-500 text-xs mb-3 font-mono">DIRECT_LINE</p>
                        <h3 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tight">hello@devcraft.com</h3>
                        <button className="mx-auto flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm transition-colors">
                            <Copy size={14} />
                            Copy_Address
                        </button>
                   </div>
                </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};