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

      {/* 🔥 PRODUCTOS DESTACADOS - GRID INTERACTIVO MEJORADO */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yorusito-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-yorusito-secondary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-100">
              <FontAwesomeIcon icon={faFire} className="text-2xl text-yorusito-secondary animate-pulse" />
              <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Tendencias</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-bold text-yorusito-neutral mb-6 leading-tight">
              Productos
              <span className="bg-gradient-to-r from-yorusito-primary to-yorusito-secondary bg-clip-text text-transparent"> Destacados</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explora nuestra selección cuidadosamente curada de prendas premium que definen las últimas tendencias
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-700 bg-white border border-gray-100/50">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-yorusito-secondary to-yorusito-primary text-white text-xs font-bold rounded-full shadow-lg">
                        ✨ Nuevo
                      </span>
                      {index < 2 && (
                        <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                          🔥 Trending
                        </span>
                      )}
                    </div>
                    
                    {/* Rating */}
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-white/20">
                        <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-sm" />
                        <span className="text-sm font-bold text-gray-800">4.9</span>
                        <span className="text-xs text-gray-500">(127)</span>
                      </div>
                    </div>

                    {/* Quick action button */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <button className="p-3 bg-white/90 backdrop-blur-sm text-yorusito-primary rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300">
                        <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-yorusito-primary uppercase tracking-wider">
                        {product.collection}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-yorusito-neutral mb-3 group-hover:text-yorusito-primary transition-colors duration-300 line-clamp-1">
                      {product.name}
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      Diseño exclusivo crafted con materiales premium y atención al detalle
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-yorusito-neutral">
                          S/ {product.price}
                        </span>
                        <span className="text-sm text-gray-500">Envío gratis</span>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                        <span className="text-sm font-medium text-yorusito-primary">Ver más</span>
                        <FontAwesomeIcon icon={faArrowRight} className="text-yorusito-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <Link href="/products">
              <button className="group px-8 py-4 bg-gradient-to-r from-yorusito-primary to-yorusito-secondary text-white font-bold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-yorusito-primary/25 transition-all duration-300 flex items-center gap-3 mx-auto">
                Ver Todo el Catálogo
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 🎯 SECCIONES POR COLECCIÓN MEJORADAS */}
      {Object.entries(collections).map(([key, products], collectionIndex) => {
        const gradients = [
          "bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50",
          "bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50", 
          "bg-gradient-to-br from-rose-50 via-pink-50 to-red-50"
        ];
        
        const iconMap = {
          SuperStars: faCrown,
          GYM: faFire,
          Romantic: faStar
        };

        const descriptions = {
          SuperStars: "Diseños exclusivos para destacar con estilo único y sofisticación",
          GYM: "Prendas técnicas de alto rendimiento para tu estilo de vida activo",
          Romantic: "Colección romántica con detalles delicados y elegantes"
        };

        return (
          <section key={key} className={`py-24 ${gradients[collectionIndex % gradients.length]} relative overflow-hidden`}>
            {/* Background decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-1/4 w-24 h-24 bg-white/30 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-4 mb-6 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30">
                  <div className="p-3 bg-gradient-to-br from-yorusito-primary to-yorusito-secondary rounded-xl">
                    <FontAwesomeIcon 
                      icon={iconMap[key as keyof typeof iconMap]} 
                      className="text-2xl text-white" 
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-yorusito-neutral">
                      Colección {key}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {descriptions[key as keyof typeof descriptions]}
                    </p>
                  </div>
                </div>
              </div>
              
              {Array.isArray(products) && products.length > 0 ? (
                <div className="relative">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                      nextEl: `.swiper-button-next-${key}`,
                      prevEl: `.swiper-button-prev-${key}`,
                    }}
                    pagination={{ 
                      clickable: true,
                      bulletClass: 'swiper-pagination-bullet !bg-yorusito-primary',
                      bulletActiveClass: 'swiper-pagination-bullet-active !bg-yorusito-secondary'
                    }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop
                    spaceBetween={24}
                    slidesPerView={1}
                    centeredSlides={false}
                    breakpoints={{
                      640: { slidesPerView: 1.5 },
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                      1280: { slidesPerView: 3.5 },
                    }}
                    className="!pb-16"
                  >
                    {products.map((product) => (
                      <SwiperSlide key={product.id}>
                        <Link href={`/products/${product.id}`}>
                          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 border border-white/50 backdrop-blur-sm">
                            <div className="relative overflow-hidden aspect-[4/5]">
                              <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                            </div>
                            <div className="p-6">
                              <div className="mb-2">
                                <span className="text-xs font-semibold text-yorusito-primary uppercase tracking-wider">
                                  {key}
                                </span>
                              </div>
                              <h3 className="text-lg font-bold text-yorusito-neutral mb-3 line-clamp-1">
                                {product.name}
                              </h3>
                              <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-yorusito-primary">
                                  S/ {product.price}
                                </span>
                                <button className="px-4 py-2 bg-gradient-to-r from-yorusito-primary to-yorusito-secondary text-white text-sm rounded-lg hover:scale-105 transition-all duration-300 shadow-md">
                                  Ver Más
                                </button>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Custom navigation buttons */}
                  <button className={`swiper-button-prev-${key} absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/30 text-yorusito-primary hover:bg-white hover:scale-110 transition-all duration-300`}>
                    <FontAwesomeIcon icon={faArrowRight} className="rotate-180" />
                  </button>
                  <button className={`swiper-button-next-${key} absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/30 text-yorusito-primary hover:bg-white hover:scale-110 transition-all duration-300`}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30 max-w-md mx-auto">
                    <FontAwesomeIcon icon={iconMap[key as keyof typeof iconMap]} className="text-4xl text-gray-400 mb-4" />
                    <p className="text-gray-600 text-lg font-medium">
                      Próximamente nuevos productos increíbles
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Estamos trabajando en diseños exclusivos para ti
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* 📢 SECCIÓN FINAL - NEWSLETTER MEJORADA */}
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
