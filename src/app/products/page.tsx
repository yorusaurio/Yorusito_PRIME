"use client";

import React from "react";
import Link from "next/link";

const ProductsPage: React.FC = () => {
  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Título */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-black tracking-wide mb-4">
          Explora Nuestras Categorías
        </h1>
        <p className="text-lg text-gray-700">
          Encuentra el estilo que más se adapta a ti.
        </p>
      </div>

      {/* Categorías */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <Link href="/products/polos">
          <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md bg-white">
            <img
              src="/images/categoria-polos.jpg"
              alt="Polos"
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-3xl font-bold">Polos</h2>
              <p className="text-sm text-gray-200">Estilo y comodidad para tu día.</p>
            </div>
          </div>
        </Link>
        <Link href="/products/hoodies">
          <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md bg-white">
            <img
              src="/images/categoria-poleras.jpg"
              alt="Poleras"
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-3xl font-bold">Hoodies</h2>
              <p className="text-sm text-gray-200">Calidez y estilo para el frío.</p>
            </div>
          </div>
        </Link>
        <Link href="/products/pants">
          <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md bg-white">
            <img
              src="/images/categoria-pantalones.jpg"
              alt="Pantalones"
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-3xl font-bold">Pantalones</h2>
              <p className="text-sm text-gray-200">Comodidad en cada paso.</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductsPage;
