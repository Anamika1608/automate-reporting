import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const Faqs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqData: FAQ[] = [
    {
      id: 1,
      question: "What is SafeReport?",
      answer: "SafeReport is a comprehensive platform that helps you document, store, and report harassment safely. Simply upload screenshots or use our browser extension to automatically capture evidence. We securely store your data and provide legal guidance on next steps."
    },
    {
      id: 2,
      question: "How does SafeReport work?",
      answer: "Our platform works by providing you with tools to safely collect and organize evidence of harassment. You can upload screenshots, record incidents, and build a comprehensive case file that's legally admissible."
    },
    {
      id: 3,
      question: "Is SafeReport secure?",
      answer: "Absolutely. We use end-to-end encryption to protect all your data. Your information is stored securely and is never shared without your explicit consent. You maintain full control over your evidence and can delete it at any time."
    },
    {
      id: 4,
      question: "Can SafeReport integrate with other reporting systems?",
      answer: "Yes, SafeReport can integrate with HR systems, legal platforms, and other reporting tools. We provide APIs and export features to ensure your evidence can be used across different platforms and legal proceedings."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* FAQ Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Side - Content */}
          <div className="order-1 lg:order-1">
            {/* Small badge */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-[#492CC3] rounded"></div>
              </div>
              <span className="text-[#492CC3] font-medium text-sm">Frequently asked questions</span>
            </div>
            
            {/* Title */}
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Frequently asked</span><br />
              <span
                style={{
                  background: "linear-gradient(90deg, #8061FF 42.49%, #5634E6 58.4%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block"
                }}
              >
                questions
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Choose a plan that fits your business needs and budget. No hidden fees, 
              no surprises—just straightforward pricing for powerful harassment 
              management.
            </p>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="order-2 lg:order-2 space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={faq.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none group"
                >
                  <span className="text-gray-700 font-medium text-lg pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-[#492CC3]' 
                        : 'bg-gray-100 group-hover:bg-gray-200'
                    }`}>
                      <ChevronDown
                        className={`w-4 h-4 transition-all duration-300 ${
                          activeIndex === index 
                            ? 'transform rotate-180 text-white' 
                            : 'text-gray-500'
                        }`}
                      />
                    </div>
                  </div>
                </button>
                
                {/* Answer Content */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>{/* Bottom CTA Section */}
        <div className="text-center mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Reach out anytime for personalized assistance.
          </p>
          <button
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-medium text-gray-700 transition-all duration-200 hover:transform hover:translateY(-1px)"
            style={{
              background: 'linear-gradient(180deg, #FFF 0%, #E6D5FF 56.5%, #B2A1FF 113%)',
              boxShadow: '1px 3px 6.1px 0px rgba(0, 0, 0, 0.20)',
              border: '1px solid #FFF',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = '1px 4px 8px 0px rgba(0, 0, 0, 0.25)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = '1px 3px 6.1px 0px rgba(0, 0, 0, 0.20)';
            }}
          >
            Contact Support
          </button>
        </div>
      </div>
   

        
  );
};

export default Faqs;