import React from 'react';
import F1 from "../../assets/f1.png";
import F2 from "../../assets/f2.png";
import F3 from "../../assets/f3.png";
import F4 from "../../assets/f4.png";
import F5 from "../../assets/f5.png";
import F6 from "../../assets/f6.png";

interface FeatureCard {
  title: string;
  description: string;
}

const FeatureCardsGrid: React.FC = () => {
  const features: FeatureCard[] = [
    {
      title: "Upload Evidence",
      description: "Upload screenshots of harassing messages from any platform - WhatsApp, Instagram, LinkedIn, and more."
    },
    {
      title: "AI-Powered Severity Analysis",
      description: "We analyze the message content to identify if it's mild, moderate, or legally severe."
    },
    {
      title: "Auto-Generated Legal Report",
      description: "Instantly generates a document formatted for cybercrime authorities or internal HR use."
    },
    {
      title: "HR Integration",
      description: "If it's a workplace issue, we help escalate to your company's HR with the necessary report."
    },
    {
      title: "Browser Extension",
      description: "Auto-detects harassment on supported platforms and lets you take quick action without switching tabs."
    },
    {
      title: "Private Dashboard",
      description: "Keep track of all stored evidence, actions taken, and updates in one place."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-[905px] mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-17">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              {/* Image placeholder with exact Figma dimensions */}
              <div 
                className="flex justify-center pt-1 items-center"
                style={{ minHeight: '198px' }}
              >
                <div
                  className="bg-white rounded-[8px]"
                  style={{
                    width: '247px',
                    height: '198px',
                    aspectRatio: '247/198'
                  }}
                ><img src={index === 0 ? F1 : index === 1 ? F2 : index === 2 ? F3 : index === 3 ? F4 : index === 4 ? F5 : F6} alt="" /></div>
              </div>
              
              {/* Content with exact padding from Figma */}
              <div className="p-3 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-[12px] ">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCardsGrid;