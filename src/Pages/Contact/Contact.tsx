import React, { useState } from 'react';
import { Sms, Calendar, ArrowRight, Share, Send, Copy, Microphone2, TickCircle } from 'iconsax-react'; // Added TickCircle
import { SiX,  SiLinkedin,  } from 'react-icons/si';
import Layout from '../../layout/Layout';
import FaqSection from '../../Components/FaqSection';
import { FaGithub } from 'react-icons/fa6';

export const Contact: React.FC = () => {
  const [activeTab, ] = useState<'email' | 'call'>('email');
  const [isCopied, setIsCopied] = useState(false);


  const copyToClipboard = () => {
    navigator.clipboard.writeText('+2348158772715');
    setIsCopied(true);
    

    setTimeout(() => {
        setIsCopied(false);
    }, 2000);
  };

  const socialLinks = [
    { name: 'Github', icon: FaGithub, url: 'https://github.com/au-lex?tab=repositories', id: 'NET_04' },
    { name: 'LinkedIn', icon: SiLinkedin, url: 'https://www.linkedin.com/in/boniface-ifebuche-aulex-467a74247/', id: 'NET_03' },
    { name: 'X', icon: SiX, url: 'https://x.com/Aulex_0', id: 'NET_01' },
  ];

  return (
    <Layout>

      <section className="bg-pri min-h-screen text-text selection:bg-purple-500/30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-1 md:px-12 lg:px-24 py-12 lg:py-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-24">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-7 flex flex-col gap-12">
              
              {/* Header */}
              <div 
                className="border-l-2 border-purple-500 pl-6 py-2"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Share size={24} variant="Bold" color='currentColor' className="text-text" />
                  <h2 className="text-3xl font-black uppercase tracking-tighter">Contact us</h2>
                </div>
                <p className="text-sec font-mono text-xs uppercase tracking-widest">
                  Get in touch with us
                </p>
              </div>

              {/* Toggle Buttons */}
              <div 
                className="flex p-1 bg-sec/10 border border-border rounded-sm"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <button 
                  onClick={() => window.open('https://wa.me/+2348158772715?text=Hi, I would like to schedule a call', '_blank')}
                  className={`flex-1 flex items-center justify-center gap-3 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeTab === 'email' 
                      ? 'bg-card text-text shadow-md' 
                      : 'text-sec hover:text-text'
                  }`}
                >
                  <Sms size={16}color='currentColor'  variant={activeTab === 'email' ? "Bold" : "Linear"} />
                  <span>Write_Message</span>
                </button>
                
                <div className="w-[1px] bg-border my-2" />
                
                <button 
                   onClick={() => window.open('https://calendly.com/bonifacepaul500/30min', '_blank')}
                   className={`flex-1 flex items-center justify-center gap-3 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeTab === 'call' 
                      ? 'bg-card text-text shadow-md' 
                      : 'text-sec hover:text-text'
                  }`}
                >
                  <Calendar size={16} color='currentColor' variant={activeTab === 'call' ? "Bold" : "Linear"} />
                  <span>Book_Session</span>
                </button>
              </div>

              {/* DATA ENTRY FORM */}
              <div 
                className="relative group p-6 border border-border bg-card transition-colors duration-300 rounded-sm"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                 <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-sec/40" />
                 <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-sec/40" />

                 <div className="flex flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group/input">
                            <label className="block text-sec text-[10px] font-mono uppercase tracking-widest mb-2 group-focus-within/input:text-purple-500 transition-colors">
                          Fullname
                            </label>
                          
                            <input 
                                type="text" 
                                placeholder="ENTER NAME" 
                                className="w-full bg-pri border-b border-border py-3 text-sm font-bold text-text placeholder-sec/30 focus:outline-none focus:border-purple-500 transition-colors uppercase tracking-wider" 
                            />
                        </div>
                        <div className="group/input">
                            <label className="block text-sec text-[10px] font-mono uppercase tracking-widest mb-2 group-focus-within/input:text-purple-500 transition-colors">
                              Email
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
                          Message
                        </label>
                        <textarea 
                            className="w-full h-full bg-pri border border-border p-4 text-sm text-text placeholder-sec/30 focus:outline-none focus:border-purple-500 resize-none font-mono leading-relaxed" 
                            placeholder="> TYPE MESSAGE HERE..." 
                        />
                    </div>

                    {/* Submit Button */}
                    <button className="group relative w-full py-5 bg-text text-pri font-black uppercase tracking-widest text-xs hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden">
                        <Send size={18} variant="Bold" className="relative z-10" />
                        <span className="relative z-10">Send_Message</span>
                    </button>
                 </div>
              </div>

              {/* NETWORK GRID (Socials) */}
              <div className="pt-8 border-t border-border/50">
                 <div 
                    className="flex items-center gap-2 mb-6"
                    data-aos="fade-in"
                    data-aos-delay="300"
                 >
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-sec text-[10px] font-mono uppercase tracking-widest">Open_Channels</p>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {socialLinks.map((social, idx) => (
                     <a 
                        key={idx} 
                        href={social.url} 
                        className="group flex items-center justify-between p-4 bg-card border border-border hover:border-purple-500 hover:bg-sec/5 transition-all cursor-pointer"
                        data-aos="fade-up"            // Animation
                        data-aos-delay={300 + (idx * 100)} // Staggered Animation
                     >
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
            <div 
                className="lg:col-span-5 relative"
                data-aos="fade-left" 
                data-aos-delay="200"
            >
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-border via-border/50 to-transparent -ml-12" />
                
                <div className="sticky top-12">
                   <div className="mb-8 flex items-center gap-2">
                       <Microphone2 size={20} className="text-sec" variant="Bold" />
                       <span className="text-text font-bold uppercase text-sm tracking-wider">Frequently Asked</span>
                   </div>
                   
                   <div className="bg-card border border-border p-1">
                       <FaqSection />
                   </div>
                   
                   <div className="mt-8 p-6 border border-dashed border-border bg-card text-center">
                        <p className="text-sec text-xs mb-3 font-mono">DIRECT LINE</p>
                        <h3 className="text-xl md:text-2xl font-black text-text mb-4 tracking-tight">+2348158772715</h3>
                  
                        {/* Copy Button */}
                        <button 
                            onClick={copyToClipboard}
                            className={`
                                mx-auto flex items-center gap-2 px-4 py-2 border text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all duration-300
                                ${isCopied 
                                    ? 'bg-green-500/10 border-green-500 text-green-500' 
                                    : 'bg-pri border-border text-text hover:bg-text hover:text-pri'}
                            `}
                        >
                            {isCopied ? (
                                <TickCircle color='currentColor' size={14} variant="Bold" />
                            ) : (
                                <Copy color='currentColor' size={14} variant="Bold" />
                            )}
                            {isCopied ? "Copied!" : "Copy Address"}
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