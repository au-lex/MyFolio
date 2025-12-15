import React, { useState } from 'react';
import { Add, Minus, Computing } from 'iconsax-react';

// --- Types ---
interface FaqItemType {
  question: string;
  answer: string;
}

// --- Data ---
const faqData: FaqItemType[] = [
  { 
    question: "Can you work with clients remotely?", 
    answer: "Absolutely. I operate effectively across all time zones using asynchronous communication protocols (Slack, Jira) and live syncs via Zoom to ensure seamless project integration." 
  },
  { 
    question: "Will my website be mobile-friendly?", 
    answer: "Affirmative. Mobile responsiveness is a core requirement. Every interface is engineered to adapt fluidly across mobile, tablet, and desktop viewports." 
  },
  { 
    question: "How long does it typically take to complete a project?", 
    answer: "Timeline varies by complexity. Standard deployment for landing pages is 3-5 days. Full-stack architectural overhauls typically require 2-4 weeks for production readiness." 
  },
  { 
    question: "Can you integrate third-party tools?", 
    answer: "Yes. I implement robust API integrations for payment gateways (Stripe), analytics (Google), CRM systems, and headless CMS solutions." 
  },
  { 
    question: "Do you offer system maintenance?", 
    answer: "I provide ongoing maintenance packages including security patches, dependency updates, and server monitoring to ensure 99.9% uptime." 
  },
];

// --- Single FAQ Item Component ---
const FaqItem: React.FC<{ item: FaqItemType; index: number }> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      className={`group relative border rounded-sm overflow-hidden transition-all duration-300 cursor-pointer ${
        isOpen 
          ? 'bg-zinc-900/40 border-purple-500/50' 
          : 'bg-zinc-900/10 border-zinc-800 hover:border-zinc-600'
      }`}
    >
      {/* Active State Indicator Strip */}
      {isOpen && <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-purple-500" />}

      <div className="flex items-start justify-between p-5 gap-4">
        <div className="flex flex-col gap-1">
            {/* Index Number */}
            <span className={`text-[10px] font-mono font-bold transition-colors ${isOpen ? 'text-purple-400' : 'text-zinc-600'}`}>
                {(index + 1).toString().padStart(2, '0')} // QUERY
            </span>
            
            {/* Question */}
            <h3 className={`font-bold text-sm md:text-base transition-colors ${isOpen ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                {item.question}
            </h3>
        </div>

        {/* Toggle Button */}
        <div className={`w-6 h-6 flex-shrink-0 rounded-sm flex items-center justify-center border transition-all mt-1 ${
            isOpen 
             ? 'bg-purple-500 border-purple-500 text-white' 
             : 'bg-zinc-950 border-zinc-800 text-zinc-500 group-hover:border-zinc-500 group-hover:text-white'
        }`}>
          {isOpen ? <Minus size={14} /> : <Add size={14} />}
        </div>
      </div>
      
      {/* Animated Answer Area */}
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="p-5 pt-0">
             <div className="border-t border-zinc-800/50 pt-4">
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                    <span className="text-purple-500 font-mono text-xs mr-2">{'>'}</span>
                    {item.answer}
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Exported Component ---
const FaqSection: React.FC = () => {
  return (
    <div className="w-full">
      {/* HEADER */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <Computing size={24} variant="Bold" className="text-zinc-600" />
          <h2 className="text-2xl font-black text-white uppercase tracking-tighter">System_FAQ</h2>
        </div>
        <div className="h-[1px] w-12 bg-purple-500 mb-4" />
        <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
          // Common Protocols & Inquiries
        </p>
      </div>

      {/* LIST */}
      <div className="flex flex-col gap-3">
        {faqData.map((item, index) => (
          <FaqItem key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;