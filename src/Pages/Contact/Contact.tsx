import React, { useState } from 'react';
import { Sms, Calendar, ArrowRight, Share, Send, Copy, Microphone2 } from 'iconsax-react';
import { SiX, SiInstagram, SiLinkedin,  } from 'react-icons/si';
import Layout from '../../layout/Layout';
import FaqSection from '../../Components/FaqSection';
import { FaGithub } from 'react-icons/fa6';

export const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'email' | 'call'>('email');

  const socialLinks = [
    { name: 'Github', icon: FaGithub, url: '#', id: 'NET_04' },
    { name: 'LinkedIn', icon: SiLinkedin, url: '#', id: 'NET_03' },
    { name: 'X', icon: SiX, url: '#', id: 'NET_01' },
    { name: 'Instagram', icon: SiInstagram, url: '#', id: 'NET_02' },
  ];

  return (
    <Layout>
      {/* Updated: bg-black -> bg-pri, text-white -> text-text */}
      <section className="bg-pri min-h-screen text-text selection:bg-purple-500/30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-1 md:px-12 lg:px-24 py-12 lg:py-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-24">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-7 flex flex-col gap-12">
              
              <div className="border-l-2 border-purple-500 pl-6 py-2">
                <div className="flex items-center gap-3 mb-2">
                  <Share size={24} variant="Bold" className="text-text" />
                  <h2 className="text-3xl font-black uppercase tracking-tighter">Contact us</h2>
                </div>
                <p className="text-sec font-mono text-xs uppercase tracking-widest">
                   Initialize Transmission Protocol
                </p>
              </div>

              {/* SYSTEM MODE TOGGLE - bg-zinc-900 -> bg-sec/10 */}
              <div className="flex p-1 bg-sec/10 border border-border rounded-sm">
                <button 
                  onClick={() => setActiveTab('email')}
                  className={`flex-1 flex items-center justify-center gap-3 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeTab === 'email' 
                      ? 'bg-card text-text shadow-md' 
                      : 'text-sec hover:text-text'
                  }`}
                >
                  <Sms size={16} variant={activeTab === 'email' ? "Bold" : "Linear"} />
                  <span>Write_Message</span>
                </button>
                
                <div className="w-[1px] bg-border my-2" />
                
                <button 
                   onClick={() => setActiveTab('call')}
                   className={`flex-1 flex items-center justify-center gap-3 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeTab === 'call' 
                      ? 'bg-card text-text shadow-md' 
                      : 'text-sec hover:text-text'
                  }`}
                >
                  <Calendar size={16} variant={activeTab === 'call' ? "Bold" : "Linear"} />
                  <span>Book_Session</span>
                </button>
              </div>

              {/* DATA ENTRY FORM */}
              <div className="relative group p-6 border border-border bg-card transition-colors duration-300 rounded-sm">
                 <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-sec/40" />
                 <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-sec/40" />

                 <div className="flex flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group/input">
                            <label className="block text-sec text-[10px] font-mono uppercase tracking-widest mb-2 group-focus-within/input:text-purple-500 transition-colors">
                                // User_Identity
                            </label>
                            {/* Input: bg-pri, text-text, placeholder-sec/50 */}
                            <input 
                                type="text" 
                                placeholder="ENTER NAME" 
                                className="w-full bg-pri border-b border-border py-3 text-sm font-bold text-text placeholder-sec/30 focus:outline-none focus:border-purple-500 transition-colors uppercase tracking-wider" 
                            />
                        </div>
                        <div className="group/input">
                            <label className="block text-sec text-[10px] font-mono uppercase tracking-widest mb-2 group-focus-within/input:text-purple-500 transition-colors">
                                // Return_Address
                            </label>
                            <input 
                                type="email" 
                                placeholder="ENTER EMAIL" 
                                className="w-full bg-pri border-b border-border py-3 text-sm font-bold text-text placeholder-sec/30 focus:outline-none focus:border-purple-500 transition-colors uppercase tracking-wider" 
                            />
                        </div>
                    </div>

                    <div className="group/input h-48">
                        <label className="block text-sec text-[10px] font-mono uppercase tracking-widest mb-2 group-focus-within/input:text-purple-500 transition-colors">
                             // Transmission_Data
                        </label>
                        <textarea 
                            className="w-full h-full bg-pri border border-border p-4 text-sm text-text placeholder-sec/30 focus:outline-none focus:border-purple-500 resize-none font-mono leading-relaxed" 
                            placeholder="> TYPE MESSAGE HERE..." 
                        />
                    </div>

                    {/* Submit Button: Inversion bg-text text-pri */}
                    <button className="group relative w-full py-5 bg-text text-pri font-black uppercase tracking-widest text-xs hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden">
                        <Send size={18} variant="Bold" className="relative z-10" />
                        <span className="relative z-10">Transmit_Data</span>
                    </button>
                 </div>
              </div>

              {/* NETWORK GRID (Socials) */}
              <div className="pt-8 border-t border-border/50">
                 <div className="flex items-center gap-2 mb-6">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-sec text-[10px] font-mono uppercase tracking-widest">Open_Channels</p>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {socialLinks.map((social, idx) => (
                     <a key={idx} href={social.url} className="group flex items-center justify-between p-4 bg-card border border-border hover:border-purple-500 hover:bg-sec/5 transition-all cursor-pointer">
                       <div className="flex items-center gap-4">
                          <div className="w-8 h-8 flex items-center justify-center bg-pri border border-border group-hover:text-purple-500 text-sec transition-colors">
                              <social.icon size={16} />
                          </div>
                          <div>
                              <div className="text-[9px] text-sec/60 font-mono mb-0.5">{social.id}</div>
                              <h3 className="text-text text-sm font-bold uppercase tracking-wide group-hover:text-purple-500 transition-colors">
                                {social.name}
                              </h3>
                          </div>
                       </div>
                       <ArrowRight size={16} className="text-sec -rotate-45 group-hover:text-purple-500 group-hover:rotate-0 transition-all duration-300" />
                     </a>
                   ))}
                 </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-5 relative">
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-border via-border/50 to-transparent -ml-12" />
                
                <div className="sticky top-12">
                   <div className="mb-8 flex items-center gap-2">
                       <Microphone2 size={20} className="text-sec" variant="Bold" />
                       <span className="text-text font-bold uppercase text-sm tracking-wider">Frequently Asked</span>
                   </div>
                   
                   <div className="bg-card border border-border p-1">
                       <FaqSection />
                   </div>
                   
                   <div className="mt-8 p-6 border border-dashed border-border bg-sec/5 text-center">
                        <p className="text-sec text-xs mb-3 font-mono">DIRECT_LINE</p>
                        <h3 className="text-xl md:text-2xl font-black text-text mb-4 tracking-tight">hello@devcraft.com</h3>
                  
                        <button className="mx-auto flex items-center gap-2 px-4 py-2 bg-sec hover:bg-text text-pri text-[10px] font-bold uppercase tracking-widest rounded-sm transition-colors">
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