import React, { useState } from 'react';
import { Add, Minus, MessageQuestion } from 'iconsax-react';

// --- Types ---
interface FaqItemType {
  question: string;
  answer: string;
}

// --- Data ---
const faqData: FaqItemType[] = [
  { 
    question: "Can you work with clients remotely?", 
    answer: "Absolutely! I work with clients all over the world using tools like Zoom, Slack, and Figma to ensure seamless communication." 
  },
  { 
    question: "Will my website be mobile-friendly?", 
    answer: "Yes, every website I build is fully responsive, ensuring it looks perfect on mobile phones, tablets, and desktops." 
  },
  { 
    question: "How long does it typically take to complete a project?", 
    answer: "Timeline depends on complexity. A standard landing page takes 3-5 days, while a full website may take 2-4 weeks." 
  },
  { 
    question: "Can you integrate third-party tools into my website?", 
    answer: "Yes, I can integrate tools like Mailchimp, Google Analytics, Stripe, Zapier, and more." 
  },
  { 
    question: "Do you offer website maintenance?", 
    answer: "I offer monthly maintenance packages to keep your site secure, updated, and running smoothly." 
  },
];

// --- Single FAQ Item Component ---
const FaqItem: React.FC<{ item: FaqItemType }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      className={`border border-zinc-800 rounded-xl bg-zinc-900/20 overflow-hidden transition-all cursor-pointer ${isOpen ? 'bg-zinc-900/40 border-zinc-700' : 'hover:border-zinc-700'}`}
    >
      <div className="flex items-center justify-between p-5">
        <span className={`font-medium text-sm md:text-base pr-4 transition-colors ${isOpen ? 'text-white' : 'text-zinc-300'}`}>
          {item.question}
        </span>
        <div className={`w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-white text-black' : 'bg-zinc-900 border border-zinc-800 text-zinc-500'}`}>
          {isOpen ? <Minus size={16} /> : <Add size={16} />}
        </div>
      </div>
      
      {/* Animated Answer Area */}
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="p-5 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/50 mt-2">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Main Exported Component ---
const FaqSection: React.FC = () => {
  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <MessageQuestion size={28} variant="Bold" color='currentColor' className="text-white" />
          <h2 className="text-2xl font-bold text-white">Common Queries</h2>
        </div>
        <p className="text-zinc-400">
          Answers to your questions, simply put.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {faqData.map((item, index) => (
          <FaqItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;