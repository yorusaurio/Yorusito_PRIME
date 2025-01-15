"use client";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsProductsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProductsHovered(false);
    }, 300); // Retraso de 300 ms antes de ocultar el menú
  };

  // Ajuste para sincronizar clases dinámicas
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null; // Evita el desajuste inicial

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white shadow-lg transition-colors">
      {/* Barra Superior */}
      <div className="flex justify-between items-center px-6 py-6">
        {/* Logo */}
        <div className="text-4xl font-extrabold tracking-wide cursor-pointer">
          <a
            href="/"
            className="hover:text-gray-400 transition-all duration-300 uppercase font-urban"
          >
            Yorusito
          </a>
        </div>

        {/* Navegación */}
        <nav className="hidden md:flex gap-10 text-lg font-medium">
          <a href="/" className="hover:text-gray-400 transition-colors">
            {language === "es" ? "Inicio" : "Home"}
          </a>
          <a href="/about" className="hover:text-gray-400 transition-colors">
            {language === "es" ? "Nosotros" : "About Us"}
          </a>
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="/products"
              className="hover:text-gray-400 transition-colors"
            >
              {language === "es" ? "Productos" : "Products"}
            </a>
            {/* Subcategorías */}
            {isProductsHovered && (
              <div
                className="absolute left-0 top-full mt-3 bg-gray-800 text-white py-3 px-4 rounded-lg shadow-xl border border-gray-700"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="/products/polos"
                  className="block py-2 px-4 hover:bg-gray-700 rounded-md transition-all duration-200"
                >
                  {language === "es" ? "Polos" : "T-Shirts"}
                </a>
                <a
                  href="/products/hoodies"
                  className="block py-2 px-4 hover:bg-gray-700 rounded-md transition-all duration-200"
                >
                  {language === "es" ? "Hoodies" : "Hoodies"}
                </a>
                <a
                  href="/products/pants"
                  className="block py-2 px-4 hover:bg-gray-700 rounded-md transition-all duration-200"
                >
                  {language === "es" ? "Pantalones" : "Pants"}
                </a>
              </div>
            )}
          </div>
          <a href="/faq" className="hover:text-gray-400 transition-colors">
            {language === "es" ? "FAQ" : "FAQ"}
          </a>
          <a href="/contact" className="hover:text-gray-400 transition-colors">
            {language === "es" ? "Contacto" : "Contact"}
          </a>
        </nav>

        {/* Controles */}
        <div className="flex items-center gap-4">
          {/* Botón de Tema */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-md"
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
