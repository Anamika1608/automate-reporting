import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div
        className="flex items-center justify-between px-6 py-2 bg-white"
        style={{
          borderRadius: '16px',
          border: '1px solid #FFF',
          background: '#FFF',
          boxShadow: '0px 0px 14.5px 0px rgba(0, 0, 0, 0.20)'
        }}
      >
        {/* Logo */}
        <div className="text-xl font-semibold text-gray-800">
          icon
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
          >
            How it works
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
          >
            Features
          </a>
        </div>

        {/* Start for free button */}
        <button
          className="hidden md:block px-6 py-2 text-gray-800 font-medium rounded-[8px] transition-all duration-200 hover:scale-105"
          style={{
            background: '#B2A1FF',
          }}
        >
          Start for free
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className="md:hidden mt-2 py-4 px-6 bg-white"
          style={{
            borderRadius: '16px',
            border: '1px solid #FFF',
            background: '#FFF',
            boxShadow: '0px 0px 14.5px 0px rgba(0, 0, 0, 0.20)'
          }}
        >
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How it works
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <button
              className="mt-4 px-6 py-3 text-purple-800 font-medium rounded-full transition-all duration-200 hover:scale-105 self-start"
              style={{
                background: '#EADFFF',
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Start for free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;