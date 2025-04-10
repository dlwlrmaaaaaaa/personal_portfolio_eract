import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-gray-300 pt-8">
      <div className="container mx-auto px-4">
        {/* First row: Navigation and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 mb-6 md:mb-0">
            <a 
              href="#home"
              className="text-lg font-poppins text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a 
              href="#projects"
              className="text-lg font-poppins text-gray-700 hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a 
              href="#about"
              className="text-lg font-poppins text-gray-700 hover:text-primary transition-colors"
            >
              About
            </a>
          </nav>
          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl text-gray-700 hover:text-primary transition-colors"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl text-gray-700 hover:text-primary transition-colors"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://instagram.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl text-gray-700 hover:text-primary transition-colors"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://facebook.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl text-gray-700 hover:text-primary transition-colors"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
        {/* Second row: Copyright & Tagline */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>© 2025, Justin Marucut. All rights reserved.</p>
          <p className="mt-1">Built with passion and creativity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
