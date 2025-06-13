"use client";

import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faShirt, faUser, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
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
    }, 300);
  };

  const closeAllDropdowns = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-brand-600 via-brand-500 to-yorusito-secondary shadow-xl backdrop-blur-sm border-b border-brand-400/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faShirt} className="text-3xl text-white" />
          <div className="text-2xl md:text-4xl font-bold tracking-wide cursor-pointer">
            <a href="/" className="text-white hover:text-brand-100 transition-all duration-300 uppercase font-black">
              Yorusito
            </a>
          </div>
        </div>

        {/* Menú móvil (hamburguesa) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl text-white focus:outline-none hover:text-brand-100 transition-colors"
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>

        {/* Navegación */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none transition-all duration-300 md:flex-row flex-col md:gap-8 text-lg font-medium border-t md:border-t-0 border-brand-200`}
        >
          <a 
            href="/" 
            className="block py-4 px-6 md:py-2 md:px-4 text-yorusito-neutral md:text-white hover:text-brand-600 md:hover:text-brand-100 transition-colors border-b md:border-b-0 border-gray-100 md:rounded-lg md:hover:bg-white/10"
          >
            Inicio
          </a>
          <a 
            href="/about" 
            className="block py-4 px-6 md:py-2 md:px-4 text-yorusito-neutral md:text-white hover:text-brand-600 md:hover:text-brand-100 transition-colors border-b md:border-b-0 border-gray-100 md:rounded-lg md:hover:bg-white/10"
          >
            Nosotros
          </a>

          {/* Dropdown de Productos */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="/products"
              className="flex items-center gap-2 py-4 px-6 md:py-2 md:px-4 text-yorusito-neutral md:text-white hover:text-brand-600 md:hover:text-brand-100 transition-colors border-b md:border-b-0 border-gray-100 md:rounded-lg md:hover:bg-white/10"
            >
              <FontAwesomeIcon icon={faShoppingBag} className="text-sm" />
              Productos
            </a>
            <div
              className={`${
                activeDropdown === "products" ? "block" : "hidden"
              } absolute left-0 top-full mt-2 bg-white text-yorusito-neutral py-4 px-2 rounded-xl shadow-2xl border border-gray-200 min-w-[200px]`}
            >
              <a
                href="/products/polos"
                className="block py-3 px-4 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors font-medium"
              >
                Polos
              </a>
              <a
                href="/products/hoodies"
                className="block py-3 px-4 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors font-medium"
              >
                Hoodies
              </a>
              <a
                href="/products/pants"
                className="block py-3 px-4 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors font-medium"
              >
                Pantalones
              </a>
            </div>
          </div>

          <a 
            href="/faq" 
            className="block py-4 px-6 md:py-2 md:px-4 text-yorusito-neutral md:text-white hover:text-brand-600 md:hover:text-brand-100 transition-colors border-b md:border-b-0 border-gray-100 md:rounded-lg md:hover:bg-white/10"
          >
            FAQ
          </a>
          <a 
            href="/contact" 
            className="block py-4 px-6 md:py-2 md:px-4 text-yorusito-neutral md:text-white hover:text-brand-600 md:hover:text-brand-100 transition-colors md:rounded-lg md:hover:bg-white/10"
          >
            Contacto
          </a>
        </nav>

        {/* Botón de cuenta */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30">
            <FontAwesomeIcon icon={faUser} />
            <span className="font-medium">Mi Cuenta</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
