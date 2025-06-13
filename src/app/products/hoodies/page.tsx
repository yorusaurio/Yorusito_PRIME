"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faShirt, 
  faFire, 
  faStar, 
  faArrowRight,
  faFilter,
  faEye,
  faShoppingBag,
  faCheck,
  faClock,
  faBell,
  faHeart,
  faGem,
  faRocket,
  faSnowflake
} from "@fortawesome/free-solid-svg-icons";
import { mockProducts } from "@/data/mockProducts";

export default function HoodiesPage() {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const toggleFilters = () => setFiltersVisible((prev) => !prev);

  // Filtrar hoodies de los mockProducts
  const hoodieProducts = mockProducts.filter(product => 
    product.name.toLowerCase().includes("hoodie") || 
    product.name.toLowerCase().includes("sudadera")
  );

  const comingSoonFeatures = [
    {
      icon: faGem,
      title: "Diseños Exclusivos",
      description: "Estampados únicos que no encontrarás en ningún otro lugar"
    },
    {
      icon: faSnowflake,
      title: "Máximo Confort",
      description: "Materiales premium para el máximo confort en cualquier clima"
    },
    {
      icon: faCheck,
      title: "Calidad Premium",
      description: "Algodón 100% peruano de primera calidad y acabados perfectos"
    },
    {
      icon: faRocket,
      title: "Estilo Urbano",
      description: "Diseños modernos perfectos para el estilo de vida urbano"
    }
  ];

  const upcomingCollections = [
    {
      name: "Urban Legends",
      description: "Hoodies con diseños inspirados en las leyendas urbanas más icónicas",
      image: "/images/hoodie.webp",
      color: "from-purple-500 to-indigo-600",
      badge: "Próximo Lanzamiento"
    },
    {
      name: "Comfort Zone",
      description: "La máxima comodidad en hoodies oversized para el día a día",
      image: "/images/hoodie.png",
      color: "from-blue-500 to-cyan-600",
      badge: "En Desarrollo"
    },
    {
      name: "Street Art",
      description: "Colaboraciones con artistas locales para diseños únicos",
      image: "/images/coming-soon.jpg",
      color: "from-green-500 to-teal-600",
      badge: "Próximamente"
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
              <FontAwesomeIcon icon={faGem} className="text-5xl text-yorusito-secondary animate-bounce" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-brand-100 bg-clip-text text-transparent">
              Hoodies Yorusito
            </h1>
            
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-brand-100">
              <span className="text-yorusito-secondary font-bold">¡Próximamente!</span> Estamos preparando una colección increíble de 
              hoodies que combinará estilo, confort y diseños únicos.
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 bg-yorusito-secondary/20 backdrop-blur-sm rounded-full px-6 py-3 border border-yorusito-secondary/30">
              <FontAwesomeIcon icon={faClock} className="text-yorusito-secondary" />
              <span className="text-brand-100 font-medium">Lanzamiento estimado: Próximamente</span>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yorusito-neutral mb-4">
              Lo que puedes esperar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos trabajando en cada detalle para ofrecerte hoodies que superen todas tus expectativas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {comingSoonFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-yorusito-primary to-yorusito-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FontAwesomeIcon icon={feature.icon} className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-yorusito-neutral mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colecciones por venir */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-brand-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yorusito-neutral mb-4">
              Colecciones en Desarrollo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un adelanto de lo que estamos preparando para ti
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingCollections.map((collection, index) => (
              <div key={index} className="group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="flex items-center gap-2 px-3 py-1 bg-yorusito-secondary text-white text-sm font-bold rounded-full">
                      <FontAwesomeIcon icon={faClock} />
                      {collection.badge}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-yorusito-neutral mb-4">
                    {collection.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {collection.description}
                  </p>
                  
                  <button className={`w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r ${collection.color} text-white font-bold rounded-xl opacity-60 cursor-not-allowed`}>
                    <FontAwesomeIcon icon={faClock} />
                    En Desarrollo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter y notificaciones */}
      <section className="py-20 bg-gradient-to-r from-yorusito-primary via-brand-600 to-yorusito-secondary text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <FontAwesomeIcon icon={faBell} className="text-5xl mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¡Sé el primero en conocer el lanzamiento!
          </h2>
          <p className="text-xl text-brand-100 mb-8">
            Regístrate y recibe una notificación exclusiva cuando lancemos nuestra colección de hoodies.
            Además, obtén un descuento especial de lanzamiento.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-4 rounded-lg text-yorusito-neutral font-medium focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
            />
            <button className="px-8 py-4 bg-yorusito-secondary hover:bg-yorusito-secondary/90 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faBell} />
              Notificarme
            </button>
          </form>
          
          <div className="flex items-center justify-center gap-6 text-sm text-brand-200">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} />
              <span>Sin spam</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faHeart} />
              <span>Descuento exclusivo</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faStar} />
              <span>Acceso prioritario</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-yorusito-neutral mb-4">
            ¿Tienes alguna idea para un diseño?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Mientras esperamos el lanzamiento, cuéntanos qué tipo de diseños te gustaría ver en nuestros hoodies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-yorusito-primary to-yorusito-secondary text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-3">
                <FontAwesomeIcon icon={faShoppingBag} />
                Contáctanos
              </button>
            </Link>
            <Link href="/products/polos">
              <button className="px-8 py-4 bg-gray-100 text-yorusito-neutral font-bold rounded-full hover:bg-gray-200 transition-all duration-300 border border-gray-200">
                Ver Polos Disponibles
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
