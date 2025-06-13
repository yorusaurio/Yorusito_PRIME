"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faShirt, faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gradient-to-r from-yorusito-neutral to-yorusito-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo y descripción */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FontAwesomeIcon icon={faShirt} className="text-3xl text-yorusito-secondary" />
            <h3 className="text-3xl font-bold uppercase tracking-wide">Yorusito</h3>
          </div>
          <p className="text-gray-300 max-w-md mx-auto">
            Prendas personalizadas que reflejan tu estilo único. Calidad premium, diseños exclusivos.
          </p>
        </div>

        {/* Redes Sociales */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://facebook.com/yorusito"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://instagram.com/yorusito_pe"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://tiktok.com/@yorusito_pe"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="TikTok"
          >
            <FontAwesomeIcon icon={faTiktok} size="lg" />
          </a>
        </div>

        {/* Links de navegación */}
        <div className="flex justify-center gap-8 mb-8 text-sm md:text-base font-medium">
          <a href="/about" className="hover:text-yorusito-secondary transition-colors">
            Nosotros
          </a>
          <a href="/products" className="hover:text-yorusito-secondary transition-colors">
            Productos
          </a>
          <a href="/faq" className="hover:text-yorusito-secondary transition-colors">
            FAQ
          </a>
          <a href="/contact" className="hover:text-yorusito-secondary transition-colors">
            Contacto
          </a>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/20 pt-6">
          {/* Derechos reservados */}
          <p className="text-center text-sm md:text-base text-gray-300 flex items-center justify-center gap-2">
            © 2025 Yorusito. Todos los derechos reservados. 
            <span className="text-yorusito-secondary">Hecho con</span>
            <FontAwesomeIcon icon={faHeart} className="text-yorusito-secondary animate-pulse" />
            <span className="text-yorusito-secondary">en Perú</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
