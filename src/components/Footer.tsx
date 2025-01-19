"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

interface FooterProps {
  language: "es" | "en";
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="py-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-6">
        {/* Redes Sociales */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://facebook.com/yorusito"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://instagram.com/yorusito_pe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-all"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://tiktok.com/@yorusito_pe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all"
            aria-label="TikTok"
          >
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
        </div>

        {/* Links de navegación */}
        <div className="flex justify-center gap-8 mb-6 text-sm md:text-base font-medium">
          <a href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all">
            {language === "es" ? "Nosotros" : "About Us"}
          </a>
          <a href="/products" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all">
            {language === "es" ? "Productos" : "Products"}
          </a>
          <a href="/faq" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all">
            {language === "es" ? "FAQ" : "FAQ"}
          </a>
          <a href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-all">
            {language === "es" ? "Contacto" : "Contact"}
          </a>
        </div>

        {/* Derechos reservados */}
        <p className="text-center text-sm md:text-base">
          {language === "es"
            ? "© 2024 Yorusito. Todos los derechos reservados."
            : "© 2024 Yorusito. All rights reserved."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
