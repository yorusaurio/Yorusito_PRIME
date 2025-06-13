"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt, faStar, faArrowRight, faShoppingBag, faFire, faCrown } from "@fortawesome/free-solid-svg-icons";
import { mockProducts } from "../data/mockProducts";

const Hero: React.FC = () => {
  const collections = {
    SuperStars: mockProducts.filter((p) => p.collection === "SuperStars"),
    GYM: mockProducts.filter((p) => p.collection === "GYM"),
    Romantic: mockProducts.filter((p) => p.collection === "Romantic"),
  };

  const featuredProducts = mockProducts.slice(0, 6);

  return (
    <main className="w-full min-h-screen flex flex-col bg-yorusito-light">
      {/* 🎬 HERO PRINCIPAL con VIDEO y GRADIENTES MODERNOS */}
      <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Video de fondo optimizado */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay con gradiente de marca */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/80 via-yorusito-primary/70 to-yorusito-secondary/60"></div>

        {/* Contenido del Hero */}
        <div className="relative z-10 max-w-4xl px-6 md:px-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <FontAwesomeIcon icon={faShirt} className="text-5xl text-white animate-pulse" />
            <div className="w-px h-12 bg-white/30"></div>
            <FontAwesomeIcon icon={faCrown} className="text-4xl text-yorusito-secondary" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-brand-100 to-yorusito-secondary bg-clip-text text-transparent">
            YORUSITO
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Prendas Personalizadas de Alta Calidad
          </h2>
          
          <p className="text-lg md:text-xl text-brand-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Expresa tu personalidad única con nuestros diseños exclusivos. 
            Desde polos personalizados hasta hoodies premium.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products">
              <button className="group px-8 py-4 bg-gradient-to-r from-yorusito-primary to-yorusito-secondary text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yorusito-primary/50 flex items-center gap-3">
                <FontAwesomeIcon icon={faShoppingBag} />
                Ver Catálogo
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <Link href="/contact">
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50">
                Personalizar Diseño
              </button>
            </Link>
          </div>

          {/* Estadísticas */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-brand-200">Clientes Felices</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-brand-200">Diseños Únicos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-brand-200">Calidad Premium</div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* 🔥 PRODUCTOS DESTACADOS - GRID INTERACTIVO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FontAwesomeIcon icon={faFire} className="text-3xl text-yorusito-secondary" />
              <h3 className="text-4xl md:text-5xl font-bold text-yorusito-neutral">
                Productos Destacados
              </h3>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre nuestras prendas más populares, diseñadas con pasión y calidad excepcional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 bg-white">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-yorusito-secondary text-white text-sm font-bold rounded-full">
                        Nuevo
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-sm" />
                        <span className="text-sm font-bold">4.9</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-yorusito-neutral mb-2 group-hover:text-yorusito-primary transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      Diseño exclusivo de alta calidad
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-yorusito-primary">
                        S/ {product.price}
                      </span>
                      <button className="px-4 py-2 bg-gradient-to-r from-yorusito-primary to-yorusito-secondary text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105">
                        Ver Más
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 SECCIONES POR COLECCIÓN */}
      {Object.entries(collections).map(([key, products], collectionIndex) => {
        const bgColors = [
          "bg-gradient-to-br from-brand-50 to-brand-100",
          "bg-gradient-to-br from-gray-50 to-gray-100", 
          "bg-gradient-to-br from-yorusito-secondary/10 to-yorusito-secondary/5"
        ];
        
        const iconMap = {
          SuperStars: faCrown,
          GYM: faFire,
          Romantic: faStar
        };

        return (
          <section key={key} className={`py-20 ${bgColors[collectionIndex % bgColors.length]}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <FontAwesomeIcon 
                    icon={iconMap[key as keyof typeof iconMap]} 
                    className="text-3xl text-yorusito-primary" 
                  />
                  <h3 className="text-4xl font-bold text-yorusito-neutral">
                    Colección {key}
                  </h3>
                </div>
              </div>
              
              {Array.isArray(products) && products.length > 0 ? (
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop
                  spaceBetween={30}
                  slidesPerView={1}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="!pb-12"
                >
                  {products.map((product) => (
                    <SwiperSlide key={product.id}>
                      <Link href={`/products/${product.id}`}>
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-64 object-cover"
                          />
                          <div className="p-6 text-center">
                            <h3 className="text-lg font-bold text-yorusito-neutral mb-2">
                              {product.name}
                            </h3>
                            <p className="text-2xl font-bold text-yorusito-primary">
                              S/ {product.price}
                            </p>
                            <button className="mt-4 px-6 py-2 bg-gradient-to-r from-yorusito-primary to-yorusito-secondary text-white rounded-lg hover:scale-105 transition-transform">
                              Ver Producto
                            </button>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <p className="text-gray-500 text-center text-lg">
                  Próximamente nuevos productos en esta colección
                </p>
              )}
            </div>
          </section>
        );
      })}

      {/* 📢 SECCIÓN FINAL - NEWSLETTER */}
      <section className="py-20 bg-gradient-to-r from-yorusito-primary via-brand-600 to-yorusito-secondary text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="mb-8">
            <FontAwesomeIcon icon={faShirt} className="text-5xl mb-4 animate-pulse" />
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Únete a la Comunidad Yorusito
            </h3>
            <p className="text-xl text-brand-100 leading-relaxed">
              Recibe ofertas exclusivas, nuevos diseños y contenido especial directamente en tu email
            </p>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-4 rounded-lg text-yorusito-neutral font-medium focus:outline-none focus:ring-4 focus:ring-white/30 transition-all"
            />
            <button className="px-8 py-4 bg-white text-yorusito-primary font-bold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
              Suscribirse
            </button>
          </form>
          
          <p className="mt-4 text-sm text-brand-200">
            No spam, solo contenido de calidad. Cancela cuando quieras.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Hero;
