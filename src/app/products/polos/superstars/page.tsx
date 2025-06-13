"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faCrown,
  faTrophy,
  faStar,
  faFutbol,
  faCheck,
  faArrowLeft,
  faShoppingCart,
  faHeart,  faMedal,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { mockProducts } from "@/data/mockProducts";

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

    if (availabilityFilter) {
      result = result.filter((product) => product.available);
    }

    result = result.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

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

  const superStarsFeatures = [
    {
      icon: faCrown,
      title: "Leyendas del Fútbol",
      description: "Messi, Cristiano, Neymar y más",
    },
    {
      icon: faTrophy,
      title: "Campeones Mundiales",
      description: "Los mejores jugadores de la historia",
    },
    {
      icon: faMedal,
      title: "Diseños Exclusivos",
      description: "Estampados únicos y oficiales",
    },    {
      icon: faBolt,
      title: "Calidad Premium",
      description: "Materiales de primera calidad",
    },
  ];

  const superStars = [
    { name: "Messi", color: "from-blue-400 to-purple-600", icon: faCrown },
    { name: "Cristiano", color: "from-green-400 to-blue-600", icon: faTrophy },
    { name: "Neymar", color: "from-yellow-400 to-green-500", icon: faStar },
    { name: "Ronaldinho", color: "from-red-400 to-orange-500", icon: faMedal },
  ];

  return (
    <div className="bg-yorusito-light min-h-screen">
      {/* Hero Section con tema SuperStars */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Patrón de estrellas y trofeos flotantes */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              <FontAwesomeIcon
                icon={i % 3 === 0 ? faStar : i % 3 === 1 ? faTrophy : faCrown}
                className="text-xl md:text-3xl text-yellow-300"
              />
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/products"
              className="text-blue-200 hover:text-white transition-colors flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              Volver a Productos
            </Link>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <FontAwesomeIcon icon={faCrown} className="text-6xl animate-bounce text-yellow-300" />
              <div className="w-px h-16 bg-white/30"></div>
              <FontAwesomeIcon icon={faTrophy} className="text-5xl text-blue-300 animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-yellow-200 to-blue-200 bg-clip-text text-transparent">
              COLECCIÓN SUPERSTARS
            </h1>

            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-blue-100 mb-8">
              Los mejores jugadores del mundo en tu armario.
              <span className="block mt-2 text-lg">¡Lleva contigo la grandeza del fútbol!</span>
            </p>

            {/* SuperStars destacados */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {superStars.map((star, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-r ${star.color} p-4 rounded-xl text-white font-bold text-center transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                >
                  <FontAwesomeIcon icon={star.icon} className="text-3xl mb-2" />
                  <div className="text-sm md:text-base">{star.name}</div>
                </div>
              ))}
            </div>

            {/* Features destacadas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {superStarsFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
                >
                  <FontAwesomeIcon icon={feature.icon} className="text-3xl mb-3 text-yellow-300" />
                  <h3 className="font-bold text-sm md:text-base">{feature.title}</h3>
                  <p className="text-xs text-blue-200 mt-1">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header con filtros */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-yorusito-neutral flex items-center gap-3">
              <FontAwesomeIcon icon={faTrophy} className="text-yellow-500" />
              Productos SuperStars ({filteredProducts.length})
            </h2>
            <p className="text-gray-600 mt-1">Los mejores diseños de las leyendas del fútbol</p>
          </div>

          <button
            className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg font-medium"
            onClick={toggleFilters}
          >
            <FontAwesomeIcon icon={faFilter} />
            {filtersVisible ? "Ocultar Filtros" : "Mostrar Filtros"}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Panel de Filtros */}
          {filtersVisible && (
            <aside className="lg:w-80 bg-white rounded-2xl shadow-xl p-6 h-fit sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <FontAwesomeIcon icon={faFilter} className="text-2xl text-blue-600" />
                <h3 className="text-xl font-bold text-yorusito-neutral">Filtros</h3>
              </div>

              {/* Filtro de disponibilidad */}
              <div className="mb-6 p-4 bg-blue-50 rounded-xl">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={availabilityFilter}
                      onChange={(e) => setAvailabilityFilter(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      className={`w-6 h-6 rounded-lg border-2 transition-all ${
                        availabilityFilter
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-300 group-hover:border-blue-300"
                      }`}
                    >
                      {availabilityFilter && (
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-white text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                      )}
                    </div>
                  </div>
                  <span className="font-medium text-yorusito-neutral">Solo productos disponibles</span>
                </label>
              </div>

              {/* Filtro por rango de precio */}
              <div className="mb-6">
                <label className="block mb-4 font-bold text-yorusito-neutral">Rango de Precios</label>
                <div className="space-y-4">
                  <div className="flex gap-3 items-center">
                    <div className="flex-1">
                      <label className="text-sm text-gray-600 mb-1 block">Mínimo</label>
                      <input
                        type="number"
                        value={priceRange[0]}
                        min={0}
                        max={200}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20 transition-all"
                      />
                    </div>
                    <div className="text-gray-400 mt-6">-</div>
                    <div className="flex-1">
                      <label className="text-sm text-gray-600 mb-1 block">Máximo</label>
                      <input
                        type="number"
                        value={priceRange[1]}
                        min={0}
                        max={200}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20 transition-all"
                      />
                    </div>
                  </div>
                  <div className="text-center text-sm text-gray-600">
                    S/ {priceRange[0]} - S/ {priceRange[1]}
                  </div>
                </div>
              </div>

              {/* Ordenar por */}
              <div>
                <label className="block mb-4 font-bold text-yorusito-neutral">Ordenar Por</label>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20 transition-all bg-white"
                >
                  <option value="">Relevancia</option>
                  <option value="price-asc">Precio: Menor a Mayor</option>
                  <option value="price-desc">Precio: Mayor a Menor</option>
                  <option value="alpha-asc">Nombre: A-Z</option>
                  <option value="alpha-desc">Nombre: Z-A</option>
                </select>
              </div>
            </aside>
          )}

          {/* Grid de Productos */}
          <section className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border border-blue-100"
                    onClick={() => router.push(`/products/${product.id}`)}
                  >
                    {/* Imagen del producto */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-100">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Badge de disponibilidad */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-bold ${
                            product.available ? "bg-green-500 text-white" : "bg-red-500 text-white"
                          }`}
                        >
                          {product.available ? "Disponible" : "Agotado"}
                        </span>
                      </div>

                      {/* Badge de SuperStar */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-sm font-bold rounded-full flex items-center gap-1">
                          <FontAwesomeIcon icon={faCrown} className="text-xs" />
                          SUPERSTAR
                        </span>
                      </div>

                      {/* Iconos de acción */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-2">
                          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                            <FontAwesomeIcon icon={faShoppingCart} />
                          </button>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                          <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-sm" />
                          <span className="text-sm font-bold">5.0</span>
                        </div>
                      </div>
                    </div>

                    {/* Información del producto */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-yorusito-neutral mb-2 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        Diseño oficial de una leyenda del fútbol mundial
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-blue-600">
                          S/ {product.price.toFixed(2)}
                        </div>

                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faTrophy} className="text-yellow-500" />
                          <span className="text-sm text-gray-500 font-medium">SUPERSTAR</span>
                        </div>
                      </div>

                      {/* Características rápidas */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium">
                          Oficial
                        </span>
                        <span className="px-2 py-1 bg-yellow-50 text-yellow-600 text-xs rounded-full font-medium">
                          Leyenda
                        </span>
                        <span className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-full font-medium">
                          Premium
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <FontAwesomeIcon icon={faTrophy} className="text-6xl text-gray-300 mb-6" />
                <h3 className="text-2xl font-bold text-gray-700 mb-4">No se encontraron productos</h3>
                <p className="text-gray-500 mb-8">
                  Intenta ajustar los filtros o explorar otras categorías
                </p>
                <button
                  onClick={() => {
                    setSortOption("");
                    setAvailabilityFilter(false);
                    setPriceRange([0, 200]);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:scale-105 transition-transform"
                >
                  Limpiar Filtros
                </button>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
