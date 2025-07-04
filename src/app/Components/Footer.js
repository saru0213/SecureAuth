import React from "react";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-300 mt-10">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Brand & Contact */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
              SecureAuth
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-md leading-relaxed">
              Enterprise-grade authentication and security solutions to protect
              your digital assets.
            </p>
          </div>

          <div>
            <h3 className="text-md sm:text-lg md:text-xl text-gray-900 font-medium mb-2">
              Contact Us
            </h3>
            <div className="flex items-center space-x-2 mb-3 break-all">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600 flex-shrink-0" />
              <a
                href="mailto:adkinesara@gmail.com"
                className="text-sm sm:text-base md:text-lg hover:text-blue-600"
              >
                adkinesara@gmail.com
              </a>
            </div>
            <div className="flex space-x-4 text-lg sm:text-xl md:text-2xl">
              <a
                href="https://www.linkedin.com/in/saraswatiadkine/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-blue-600 transition"
              >
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </a>
              <a
                href="https://github.com/saru0213"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-500 hover:text-black transition"
              >
                <Github className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </a>
              <a
                href="https://instagram.com/sara.swatipatil"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-500 hover:text-pink-600 transition"
              >
                <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div
          className="
    mt-8
    text-center
    text-xs sm:text-sm md:text-base
    text-gray-500
    leading-relaxed
    select-none
    cursor-default
    transition-colors
    duration-300
    hover:text-black
    dark:hover:text-white
  "
        >
          © {new Date().getFullYear()} SecureAuth 🔒. All rights reserved by
          Saraswati Adkine 🙏.
          <br />
          Built with security in mind 🛡️✨
        </div>
      </div>
    </footer>
  );
}
