import React from "react";
import BG from "../../assets/bg.png";
import BG2 from "../../assets/bg2.png";
import { useRef } from "react";

const Hero: React.FC = () => {
  const videoSrc = "https://player.vimeo.com/video/1059493429?h=d627d7e6b2";
  const videoRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}


      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="text-center max-w-5xl z-10 mx-auto">

          {/* Main Content */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Don't Stay Silent<br />
              Save, Report, Reclaim Control
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Every harassing message deserves to be taken seriously. We help you store evidence,
              understand your rights, and take the next step legally, securely, and on your terms.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-16 mb-8">
            <button
              className="w-full sm:w-auto"
              style={{
                display: 'flex',
                height: '50px',
                padding: '0px 22px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '16px',
                border: '1px solid #FFF',
                background: 'linear-gradient(180deg, #FFF 0%, #E6D5FF 56.5%, #B2A1FF 113%)',
                boxShadow: '1px 3px 6.1px 0px rgba(0, 0, 0, 0.20)',
                color: '#374151',
                fontWeight: '500',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '1px 4px 8px 0px rgba(0, 0, 0, 0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '1px 3px 6.1px 0px rgba(0, 0, 0, 0.20)';
              }}
            >
              Upload screenshot
            </button>

            <button
              className="w-full sm:w-auto"
              style={{
                display: 'flex',
                height: '50px',
                padding: '0px 22px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '16px',
                border: '1px solid #FFF',
                background: 'linear-gradient(180deg, #FFF 0%, #E6D5FF 56.5%, #B2A1FF 113%)',
                boxShadow: '1px 3px 6.1px 0px rgba(0, 0, 0, 0.20)',
                color: '#374151',
                fontWeight: '500',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '1px 4px 8px 0px rgba(0, 0, 0, 0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '1px 3px 6.1px 0px rgba(0, 0, 0, 0.20)';
              }}
            >
              Get our extension
            </button>
          </div>

          {/* Down Arrow */}
          <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
              <g filter="url(#filter0_f_2004_12158)">
                <circle cx="37.5" cy="37.5" r="36.5" fill="url(#paint0_radial_2004_12158)" />
              </g>
              <path d="M38 29V46.5Z" fill="#B2A1FF" />
              <path d="M38 29V46.5" stroke="#7D7D7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M38 47L45 40ZM38 47L31 40Z" fill="#B2A1FF" />
              <path d="M45 40L38 47L31 40" stroke="#7D7D7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <filter id="filter0_f_2004_12158" x="0" y="0" width="75" height="75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_2004_12158" />
                </filter>
                <radialGradient id="paint0_radial_2004_12158" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(37.5 37.5) rotate(90) scale(36.5)">
                  <stop stopColor="#B2A1FF" />
                  <stop offset="0.3125" stopColor="#E6D5FF" />
                  <stop offset="0.826923" stopColor="#FFF5F6" />
                  <stop offset="0.971154" stopColor="#FFFAFB" />
                  <stop offset="1" stopColor="#BEBEBE" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

      </div>

      
      <div className="flex justify-center w-full" style={{
        backgroundImage: `url(${BG2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="w-full max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px] bg-white rounded-lg p-3 shadow-lg">
          <div className="relative w-full pt-[56.25%] bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full"
              title="Safire-Demo"
              src={videoSrc}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;