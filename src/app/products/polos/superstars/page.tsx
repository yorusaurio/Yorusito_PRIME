"use client";

import React, { useState, useEffect } from "react";
import { FiFilter } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { mockProducts } from "@/data/mockProducts"; // Importa los productos desde el archivo centralizado

export default function SuperStarsPage() {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [sortOption, setSortOption] = useState<string>("");
  const [availabilityFilter, setAvailabilityFilter] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [filteredProducts, setFilteredProducts] = useState(
    mockProducts.filter((product) => product.collection === "SuperStars")
  );
  const router = useRouter();

  const toggleFilters = () => setFiltersVisible((prev) => !prev);

  const applyFiltersAndSort = () => {
    let result = mockProducts.filter((product) => product.collection === "SuperStars");

    // Filtrar por disponibilidad
    if (availabilityFilter) {
      result = result.filter((product) => product.available);
    }

    // Filtrar por rango de precio
    result = result.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Ordenar según la opción seleccionada
    switch (sortOption) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "alpha-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "alpha-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  };

  useEffect(() => {
    applyFiltersAndSort();
  }, [sortOption, availabilityFilter, priceRange]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">SuperStars</h1>
          <button
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            onClick={toggleFilters}
          >
            <FiFilter /> {filtersVisible ? "Ocultar filtros" : "Mostrar filtros"}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filtros */}
          {filtersVisible && (
            <aside className="w-full md:w-1/4 bg-white p-6 rounded-md shadow-md">
              <h2 className="font-bold mb-4 text-xl">Filtros</h2>

              {/* Filtro de disponibilidad */}
              <div className="mb-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={availabilityFilter}
                    onChange={(e) => setAvailabilityFilter(e.target.checked)}
                  />
                  Solo mostrar disponibles
                </label>
              </div>

              {/* Filtro por rango de precio */}
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Rango de precios:</label>
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    value={priceRange[0]}
                    min={0}
                    max={200}
                    onChange={(e) =>
                      setPriceRange([Number(e.target.value), priceRange[1]])
                    }
                    className="border p-2 rounded w-20"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    min={0}
                    max={200}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Number(e.target.value)])
                    }
                    className="border p-2 rounded w-20"
                  />
                </div>
              </div>

              {/* Ordenar por */}
              <div>
                <label className="block mb-2 font-semibold">Ordenar por:</label>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border p-2 rounded w-full"
                >
                  <option value="">Ninguno</option>
                  <option value="price-asc">Precio: menor a mayor</option>
                  <option value="price-desc">Precio: mayor a menor</option>
                  <option value="alpha-asc">Nombre: A-Z</option>
                  <option value="alpha-desc">Nombre: Z-A</option>
                </select>
              </div>
            </aside>
          )}

          {/* Productos */}
          <section className="grid gap-4 md:gap-6 w-full md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-md shadow-md overflow-hidden relative cursor-pointer group"
                  onClick={() => router.push(`/products/${product.id}`)}
                >
                  <div className="w-full h-72 md:h-80 bg-gray-100 flex justify-center items-center">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="font-bold text-lg mb-2">{product.name}</h2>
                    <p className="text-gray-600">S/ {product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h2 className="text-2xl font-bold text-gray-700">
                  No se encontraron productos
                </h2>
                <p className="text-gray-500">
                  Intenta ajustar los filtros o buscar en otro rango de precios.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
