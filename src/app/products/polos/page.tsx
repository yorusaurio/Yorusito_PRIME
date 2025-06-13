"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faShirt, 
  faCrown, 
  faHeart, 
  faDumbbell, 
  faStar, 
  faFire, 
  faArrowRight,
  faFilter,
  faEye,
  faShoppingBag,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

export default function PolosPage() {
  const [filtersVisible, setFiltersVisible] = useState(false);

  const toggleFilters = () => setFiltersVisible((prev) => !prev);

  const collections = [
    {
      name: "SuperStars",
      slug: "superstars",
      description: "Diseños exclusivos de tus estrellas deportivas favoritas",
      longDescription: "Lleva contigo la pasión y el talento de los mejores deportistas del mundo. Desde Messi hasta Cristiano, cada diseño captura la esencia de las leyendas.",
      image: "/images/superstars/cristiano1.png",
      icon: faCrown,
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
      count: "12+ diseños",
      featured: true,
      tags: ["Fútbol", "Leyendas", "Premium"]
    },
    {
      name: "Romantic",
      slug: "romantic",
      description: "Diseños tiernos y románticos para expresar tu amor",
      longDescription: "Expresa tus sentimientos con diseños únicos y románticos. Perfectos para regalar o para mostrar tu lado más sensible con estilo.",
      image: "/images/girlfriend/girlfriend5.png",
      icon: faHeart,
      color: "from-pink-400 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      count: "8+ diseños",
      featured: false,
      tags: ["Amor", "Regalos", "Parejas"]
    },
    {
      name: "GYM",
      slug: "gym",
      description: "Motivación y fuerza para tus entrenamientos",
      longDescription: "Entrena con estilo y motivación. Diseños inspiradores que te acompañarán en cada repetición y te recordarán por qué empezaste.",
      image: "/images/gym/gym17.png",
      icon: faDumbbell,
      color: "from-emerald-400 to-teal-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      count: "15+ diseños",
      featured: true,
      tags: ["Fitness", "Motivación", "Deporte"]
    }
  ];

  const benefits = [
    {
      icon: faCheck,
      title: "Calidad Premium",
      description: "Algodón 100% peruano de primera calidad"
    },
    {
      icon: faShirt,
      title: "Diseños Únicos",
      description: "Estampados exclusivos que no encontrarás en otro lugar"
    },
    {
      icon: faStar,
      title: "Personalización",
      description: "Adaptamos el diseño a tu talla y preferencias"
    },
    {
      icon: faFire,
      title: "Tendencia",
      description: "Siempre a la vanguardia de las últimas modas"
    }
  ];

  return (
    <div className="bg-yorusito-light min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yorusito-primary via-brand-600 to-yorusito-secondary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <FontAwesomeIcon icon={faShirt} className="text-6xl animate-pulse" />
              <div className="w-px h-16 bg-white/30"></div>
              <FontAwesomeIcon icon={faStar} className="text-5xl text-yorusito-secondary animate-bounce" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-brand-100 bg-clip-text text-transparent">
              Polos Exclusivos
            </h1>
            
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-brand-100">
              Descubre nuestra colección de 
              <span className="text-yorusito-secondary font-bold"> polos personalizados </span>
              diseñados para reflejar tu personalidad única y estilo inconfundible.
            </p>
          </div>

          {/* Beneficios */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <FontAwesomeIcon icon={benefit.icon} className="text-3xl mb-3 text-yorusito-secondary" />
                <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-brand-200">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="bg-white shadow-lg sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-yorusito-neutral">
                Nuestras Colecciones
              </h2>
              <span className="px-3 py-1 bg-yorusito-secondary/10 text-yorusito-secondary rounded-full text-sm font-medium">
                3 Categorías
              </span>
            </div>
            
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-yorusito-primary to-yorusito-secondary text-white px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={toggleFilters}
            >
              <FontAwesomeIcon icon={faFilter} />
              {filtersVisible ? "Ocultar filtros" : "Mostrar filtros"}
            </button>
          </div>

          {filtersVisible && (
            <div className="mt-6 p-6 bg-gradient-to-r from-yorusito-primary/5 to-yorusito-secondary/5 rounded-2xl">
              <h3 className="font-bold text-yorusito-neutral mb-4">Filtrar por:</h3>
              <div className="flex flex-wrap gap-3">
                {["Todos", "Premium", "Nuevos", "Más Populares", "Ofertas"].map((filter, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg hover:border-yorusito-primary hover:text-yorusito-primary transition-colors"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Colecciones */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div 
                key={collection.slug} 
                className={`relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ${collection.bgColor}`}
              >
                {collection.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="flex items-center gap-2 px-3 py-1 bg-yorusito-secondary text-white text-sm font-bold rounded-full">
                      <FontAwesomeIcon icon={faStar} />
                      Destacado
                    </span>
                  </div>
                )}

                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-yorusito-neutral text-sm font-bold rounded-full">
                    {collection.count}
                  </span>
                </div>

                <div className="relative overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${collection.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      <FontAwesomeIcon icon={collection.icon} className="text-xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-yorusito-neutral">
                      {collection.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {collection.description}
                  </p>

                  <p className="text-sm text-gray-500 mb-6">
                    {collection.longDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {collection.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-yorusito-primary/10 text-yorusito-primary text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Botones */}
                  <div className="flex gap-3">
                    <Link 
                      href={`/products/polos/${collection.slug}`}
                      className="flex-1"
                    >
                      <button className={`w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r ${collection.color} text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                        <FontAwesomeIcon icon={faEye} />
                        Ver Colección
                        <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de información adicional */}
      <section className="py-16 bg-gradient-to-r from-yorusito-neutral to-yorusito-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <FontAwesomeIcon icon={faShirt} className="text-5xl mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Creamos diseños personalizados únicos para ti. 
            ¡Cuéntanos tu idea y la haremos realidad!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-yorusito-secondary hover:bg-yorusito-secondary/90 text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-3">
                <FontAwesomeIcon icon={faShoppingBag} />
                Diseño Personalizado
              </button>
            </Link>
            <Link href="/products">
              <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30">
                Ver Todos los Productos
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
