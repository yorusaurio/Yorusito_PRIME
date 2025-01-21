"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiFilter } from "react-icons/fi";

export default function ProductsPage() {
  const [filtersVisible, setFiltersVisible] = useState(false);

  const toggleFilters = () => setFiltersVisible((prev) => !prev);

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Polos</h1>
          <button
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            onClick={toggleFilters}
          >
            <FiFilter /> {filtersVisible ? "Ocultar filtros" : "Mostrar filtros"}
          </button>
        </div>

        {/* Cards de Colecciones */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card de SuperStars */}
          <Link href="/products/polos/superstars">
            <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md bg-white">
              <img
                src="/images/superstars/cristiano1.png"
                alt="SuperStars"
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-3xl font-bold">SuperStars</h2>
                <p className="text-sm text-gray-200">
                  Descubre los polos de tus estrellas favoritas.
                </p>
              </div>
            </div>
          </Link>

          {/* Card de Romantic */}
          <Link href="/products/polos/romantic">
            <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md bg-white">
              <img
                src="/images/girlfriend/girlfriend6.png"
                alt="Romantic"
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-3xl font-bold">Romantic</h2>
                <p className="text-sm text-gray-200">
                  Estilo romántico y sofisticado para ti.
                </p>
              </div>
            </div>
          </Link>

          {/* Card de GYM */}
          <Link href="/products/polos/gym">
            <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md bg-white">
              <img
                src="/images/gym/gym17.png"
                alt="GYM"
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-3xl font-bold">GYM</h2>
                <p className="text-sm text-gray-200">
                  Ropa deportiva para tus entrenamientos.
                </p>
              </div>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}
