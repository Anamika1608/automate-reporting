import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F6E8FF] text-black px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left Side */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold">HarassReport</h2>
          <p className="text-sm text-gray-400 mt-1">
            Empowering victims to take action – report harassment easily & securely.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:contact@harassreport.org"
            className="hover:text-green-400 transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} HarassReport. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
