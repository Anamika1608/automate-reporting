import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-purple-100 via-blue-50 to-purple-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Simple. Guided. Empowering.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pl-30">
          {/* Left Side - Steps */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{
                  background: 'linear-gradient(180deg, #AB99FB 0%, #492CC3 100%)'
                }}
              >
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Upload or Auto-Detect
                </h3>
                <p className="text-gray-600 leading-relaxed ">
                  Upload screenshots or let our extension detect harassing texts in real time.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{
                  background: 'linear-gradient(180deg, #AB99FB 0%, #492CC3 100%)'
                }}>
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Answer a Few Questions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We ask about the platform, your relation to the sender, and their ID or handle.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{
                  background: 'linear-gradient(180deg, #AB99FB 0%, #492CC3 100%)'
                }}>
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Severity + Action Options
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Our system categorizes the threat level and lets you choose:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#AB99FB] rounded-full mr-3"></span>
                    <em>Just store the evidence</em>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#AB99FB] rounded-full mr-3"></span>
                    <em>Report to cyber cell</em>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#AB99FB] rounded-full mr-3"></span>
                    <em>Escalate to company HR</em>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{
                  background: 'linear-gradient(180deg, #AB99FB 0%, #492CC3 100%)'
                }}>
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Track Everything From Dashboard
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  View case history, download reports, and get updates.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Dashboard Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-150 max-w-md lg:max-w-lg">
              <div 
                className="bg-gray-300 rounded-xl shadow-lg w-full"
                style={{
                  height: '500px',
                  aspectRatio: '3/4'
                }}
              >
                {/* Placeholder for dashboard image */}
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                  Dashboard Image Placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;