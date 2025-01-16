"use client";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  toggleTheme: () => void;
  changeLanguage: (lang: "es" | "en") => void;
  language: "es" | "en";
  theme: "light" | "dark";
}

const Header: React.FC<HeaderProps> = ({
  toggleTheme,
  changeLanguage,
  language,
  theme,
}) => {
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white shadow-lg transition-colors">
      {/* Barra Superior */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl md:text-4xl font-extrabold tracking-wide cursor-pointer">
          <a href="/" className="hover:text-gray-400 transition-all duration-300 uppercase">
            Yorusito
          </a>
        </div>

        {/* Menú móvil (hamburguesa) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>

        {/* Navegación */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 md:flex-row flex-col md:gap-10 text-lg font-medium`}
        >
          <a href="/" className="block py-2 px-4 md:py-0 md:px-0 hover:text-gray-400">
            {language === "es" ? "Inicio" : "Home"}
          </a>
          <a href="/about" className="block py-2 px-4 md:py-0 md:px-0 hover:text-gray-400">
            {language === "es" ? "Nosotros" : "About Us"}
          </a>
          <div className="relative group">
            <a href="/products" className="block py-2 px-4 md:py-0 md:px-0 hover:text-gray-400">
              {language === "es" ? "Productos" : "Products"}
            </a>
            <div
              className={`${
                isProductsHovered ? "block" : "hidden"
              } absolute left-0 top-full mt-3 bg-gray-800 text-white py-3 px-4 rounded-lg shadow-xl border border-gray-700`}
            >
              <a href="/products/polos" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
                {language === "es" ? "Polos" : "T-Shirts"}
              </a>
              <a href="/products/hoodies" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
                {language === "es" ? "Hoodies" : "Hoodies"}
              </a>
              <a href="/products/pants" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
                {language === "es" ? "Pantalones" : "Pants"}
              </a>
            </div>
          </div>
          <a href="/faq" className="block py-2 px-4 md:py-0 md:px-0 hover:text-gray-400">
            {language === "es" ? "FAQ" : "FAQ"}
          </a>
          <a href="/contact" className="block py-2 px-4 md:py-0 md:px-0 hover:text-gray-400">
            {language === "es" ? "Contacto" : "Contact"}
          </a>
        </nav>

        {/* Controles */}
        <div className="hidden md:flex items-center gap-4">
          {/* Botón de Tema */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-md"
            title={language === "es" ? "Cambiar Tema" : "Toggle Theme"}
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} size="lg" />
          </button>

          {/* Selector de Idioma */}
          <select
            onChange={(e) => changeLanguage(e.target.value as "es" | "en")}
            value={language}
            className="px-3 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white hover:border-gray-500 focus:outline-none"
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
