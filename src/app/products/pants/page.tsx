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
  faLeaf,
  faTshirt,
  faCut
} from "@fortawesome/free-solid-svg-icons";

export default function PantsPage() {
  const [filtersVisible, setFiltersVisible] = useState(false);

  const toggleFilters = () => setFiltersVisible((prev) => !prev);

  const comingSoonFeatures = [
    {
      icon: faGem,
      title: "Diseños Versátiles",
      description: "Pantalones que se adaptan a cualquier ocasión y estilo personal"
    },
    {
      icon: faLeaf,
      title: "Materiales Sostenibles",
      description: "Comprometidos con el medio ambiente usando materiales eco-friendly"
    },
    {
      icon: faCheck,
      title: "Ajuste Perfecto",
      description: "Múltiples tallas y cortes para que encuentres tu ajuste ideal"
    },
    {
      icon: faCut,
      title: "Cortes Modernos",
      description: "Desde joggers relajados hasta pantalones elegantes de vestir"
    }
  ];

  const upcomingStyles = [
    {
      name: "Urban Joggers",
      description: "Comodidad máxima para el día a día con diseños urbanos únicos",
      image: "/images/categoria-pantalones.jpg",
      color: "from-gray-600 to-gray-800",
      badge: "Próximo Lanzamiento",
      features: ["Algodón orgánico", "Bolsillos funcionales", "Cordón ajustable"]
    },
    {
      name: "Street Cargo",
      description: "Estilo streetwear con funcionalidad premium y múltiples bolsillos",
      image: "/images/coming-soon.jpg",
      color: "from-green-600 to-emerald-700",
      badge: "En Desarrollo",
      features: ["6 bolsillos", "Tela resistente", "Corte relajado"]
    },
    {
      name: "Smart Casual",
      description: "Elegancia casual para ocasiones especiales con toque moderno",
      image: "/images/coming-soon.jpg",
      color: "from-blue-600 to-indigo-700",
      badge: "Próximamente",
      features: ["Tela premium", "Corte slim", "Fácil cuidado"]
    }
  ];

  const sizeGuide = [
    { size: "S", waist: "28-30", length: "32" },
    { size: "M", waist: "32-34", length: "32" },
    { size: "L", waist: "36-38", length: "34" },
    { size: "XL", waist: "40-42", length: "34" },
  ];

  return (
    <div className="bg-yorusito-light min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yorusito-neutral via-gray-700 to-yorusito-dark text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <FontAwesomeIcon icon={faTshirt} className="text-6xl animate-pulse" />
              <div className="w-px h-16 bg-white/30"></div>
              <FontAwesomeIcon icon={faGem} className="text-5xl text-yorusito-secondary animate-bounce" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              Pantalones Yorusito
            </h1>
            
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-100">
              <span className="text-yorusito-secondary font-bold">¡Próximamente!</span> Estamos diseñando una línea completa de 
              pantalones que combinará estilo urbano, comodidad premium y versatilidad total.
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 bg-yorusito-secondary/20 backdrop-blur-sm rounded-full px-6 py-3 border border-yorusito-secondary/30">
              <FontAwesomeIcon icon={faClock} className="text-yorusito-secondary" />
              <span className="text-gray-100 font-medium">Lanzamiento estimado: Próximamente</span>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yorusito-neutral mb-4">
              Calidad y Estilo en Cada Detalle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada pantalón será diseñado pensando en tu comodidad, durabilidad y estilo personal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {comingSoonFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-yorusito-neutral to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FontAwesomeIcon icon={feature.icon} className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-yorusito-neutral mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estilos por venir */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-brand-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yorusito-neutral mb-4">
              Estilos en Desarrollo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde casual hasta elegante, tendremos el pantalón perfecto para cada ocasión
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingStyles.map((style, index) => (
              <div key={index} className="group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${style.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="flex items-center gap-2 px-3 py-1 bg-yorusito-secondary text-white text-sm font-bold rounded-full">
                      <FontAwesomeIcon icon={faClock} />
                      {style.badge}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-yorusito-neutral mb-4">
                    {style.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {style.description}
                  </p>
                  
                  {/* Características */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-yorusito-neutral mb-3">Características:</h4>
                    <ul className="space-y-2">
                      {style.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <FontAwesomeIcon icon={faCheck} className="text-yorusito-accent text-xs" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className={`w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r ${style.color} text-white font-bold rounded-xl opacity-60 cursor-not-allowed`}>
                    <FontAwesomeIcon icon={faClock} />
                    En Desarrollo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guía de tallas */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yorusito-neutral mb-4">
              Guía de Tallas (Próximamente)
            </h2>
            <p className="text-gray-600">
              Así serán las tallas disponibles cuando lancemos la colección
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-yorusito-primary/5 to-yorusito-secondary/5 rounded-2xl p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-bold text-yorusito-neutral">Talla</th>
                    <th className="text-left py-3 px-4 font-bold text-yorusito-neutral">Cintura (cm)</th>
                    <th className="text-left py-3 px-4 font-bold text-yorusito-neutral">Largo (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeGuide.map((size, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-yorusito-primary">{size.size}</td>
                      <td className="py-3 px-4 text-gray-600">{size.waist}</td>
                      <td className="py-3 px-4 text-gray-600">{size.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-yorusito-neutral via-gray-700 to-yorusito-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <FontAwesomeIcon icon={faBell} className="text-5xl mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¡No te pierdas el lanzamiento!
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Sé el primero en conocer cuando lancemos nuestra colección de pantalones y obtén acceso exclusivo 
            a descuentos de pre-lanzamiento.
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
          
          <div className="flex items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} />
              <span>Descuento exclusivo</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faHeart} />
              <span>Acceso prioritario</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faStar} />
              <span>Sin spam</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-yorusito-neutral mb-4">
            ¿Tienes sugerencias para nuestros pantalones?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Tu opinión es importante. Cuéntanos qué características o estilos te gustaría ver
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-yorusito-neutral to-gray-600 text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-3">
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
