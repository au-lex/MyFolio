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

const FaqItem: React.FC<{ item: FaqItemType; index: number }> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}

      className={`group relative border rounded-sm overflow-hidden transition-all duration-300 cursor-pointer ${
        isOpen 
          ? 'bg-card border-purple-500/50' 
          : 'bg-card border-border hover:border-purple-500/50'
      }`}
    >
      {isOpen && <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-purple-500" />}

      <div className="flex items-start justify-between p-5 gap-4">
        <div className="flex flex-col gap-1">
            {/* Index Number: text-zinc-600 -> text-sec */}
            <span className={`text-[10px] font-mono font-bold transition-colors ${isOpen ? 'text-purple-500' : 'text-sec'}`}>
                {(index + 1).toString().padStart(2, '0')} 
            </span>
            
            {/* Question: text-white -> text-text, text-zinc-300 -> text-sec */}
            <h3 className={`font-bold text-sm md:text-base transition-colors ${isOpen ? 'text-text' : 'text-sec group-hover:text-text'}`}>
                {item.question}
            </h3>
        </div>

        {/* Toggle Button: bg-zinc-950 -> bg-pri, border-zinc-800 -> border-border */}
        <div className={`w-6 h-6 flex-shrink-0 rounded-sm flex items-center justify-center border transition-all mt-1 ${
            isOpen 
             ? 'bg-purple-500 border-purple-500 text-white' 
             : 'bg-pri border-border text-sec group-hover:border-purple-500 group-hover:text-purple-500'
        }`}>
          {isOpen ? <Minus size={14} color='currentColor' /> : <Add size={14} color='currentColor' />}
        </div>
      </div>
      
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="p-5 pt-0">
      
             <div className="border-t border-border/50 pt-4">
          
                <p className="text-sec text-sm leading-relaxed font-light">
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

const FaqSection: React.FC = () => {
  return (
    <div className="w-full">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          {/* Icon: text-zinc-600 -> text-sec */}
          <Computing size={24} variant="Bold" color='currentColor' className="text-text" />
       
          <h2 className="text-2xl font-black text-text uppercase tracking-tighter">FAQ</h2>
        </div>
        <div className="h-[1px] w-12 bg-purple-500 mb-4" />
   
        <p className="text-sec text-xs font-mono uppercase tracking-widest">
           Common Protocols & Inquiries
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {faqData.map((item, index) => (
          <FaqItem key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;