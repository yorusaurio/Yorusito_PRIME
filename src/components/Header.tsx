"use client";

import React, { useState, useRef } from "react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleMouseEnter = (menu: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // Mantén el menú visible por 300ms después de que el mouse salga
  };

  const closeAllDropdowns = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white shadow-lg transition-colors">
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

          {/* Dropdown de Productos */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="/products"
              className="block py-2 px-4 md:py-0 md:px-0 hover:text-gray-400"
            >
              {language === "es" ? "Productos" : "Products"}
            </a>
            <div
              className={`${
                activeDropdown === "products" ? "block" : "hidden"
              } absolute left-0 top-full mt-3 bg-gray-800 text-white py-3 px-4 rounded-lg shadow-xl border border-gray-700`}
            >
              <a
                href="/products/polos"
                className="block py-2 px-4 hover:bg-gray-700 rounded-md"
              >
                {language === "es" ? "Polos" : "T-Shirts"}
              </a>
              <a
                href="/products/hoodies"
                className="block py-2 px-4 hover:bg-gray-700 rounded-md"
              >
                Hoodies
              </a>
              <a
                href="/products/pants"
                className="block py-2 px-4 hover:bg-gray-700 rounded-md"
              >
                {language === "es" ? "Pantalones" : "Pants"}
              </a>
            </div>
          </div>

          {/* Subcategorías de Polos */}
          {activeDropdown === "polos" && (
            <div
              className="absolute left-full top-0 mt-3 bg-gray-800 text-white py-3 px-4 rounded-lg shadow-xl border border-gray-700"
              onMouseEnter={() => handleMouseEnter("polos")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="/products/polos/superstars"
                className="block py-2 px-4 hover:bg-gray-700 rounded-md"
              >
                SuperStars
              </a>
              <a
                href="/products/polos/romantic"
                className="block py-2 px-4 hover:bg-gray-700 rounded-md"
              >
                Romantic
              </a>
              <a
                href="/products/polos/gym"
                className="block py-2 px-4 hover:bg-gray-700 rounded-md"
              >
                Gym
              </a>
            </div>
          )}

          <a href="/faq" className="block py-2 px-4 md:py-0 md:px-0 hover:text-gray-400">
            FAQ
          </a>
          <a href="/contact" className="block py-2 px-4 md:py-0 md:px-0 hover:text-gray-400">
            {language === "es" ? "Contacto" : "Contact"}
          </a>
        </nav>

        {/* Controles */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-md"
            title={language === "es" ? "Cambiar Tema" : "Toggle Theme"}
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} size="lg" />
          </button>
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
