"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { mockProducts } from "../data/mockProducts";

interface HeroProps {
  language: "es" | "en";
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const collections = {
    SuperStars: mockProducts.filter((p) => p.collection === "SuperStars"),
    GYM: mockProducts.filter((p) => p.collection === "GYM"),
    Romantic: mockProducts.filter((p) => p.collection === "Romantic"),
  };

  return (
    <main className="w-full min-h-screen flex flex-col bg-gray-900 text-white">
      {/* 🎬 HERO con VIDEO MP4 Responsivo */}
      <section className="relative w-full h-screen md:min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Video de fondo con ajustes para móviles */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover md:aspect-video"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Capa oscura para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Contenido del Hero */}
        <div className="relative z-10 max-w-3xl px-6 md:px-0">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {language === "es" ? "La Mejor Ropa Urbana" : "The Best Urban Wear"}
          </h1>
          <p className="mt-4 text-lg">
            {language === "es"
              ? "Encuentra tu estilo con nuestra colección exclusiva."
              : "Find your style with our exclusive collection."}
          </p>
          <Link href="/products">
            <button className="mt-6 px-8 md:px-10 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 hover:scale-105 transition transform duration-300 shadow-lg">
              {language === "es" ? "Explorar Ahora" : "Shop Now"}
            </button>
          </Link>
        </div>
      </section>

      {/* 🔥 PRODUCTOS DESTACADOS - GRID INTERACTIVO */}
      <section className="py-24">
        <h3 className="text-4xl font-bold text-center mb-12">
          {language === "es" ? "Productos Destacados" : "Featured Products"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mockProducts.slice(0, 6).map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="group relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:brightness-75 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center text-white p-6 transition duration-300">
                  <h4 className="text-xl font-semibold">{product.name}</h4>
                  <p className="text-lg font-bold">S/ {product.price}</p>
                  <button className="mt-4 px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition">
                    {language === "es" ? "Ver Producto" : "View Product"}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 🎯 SECCIONES POR COLECCIÓN */}
      {Object.entries(collections).map(([key, products]) => (
        <section key={key} className="py-24 bg-gray-800 text-white">
          <h3 className="text-4xl font-bold text-center mb-12">{key}</h3>
          {Array.isArray(products) && products.length > 0 ? (
            <div className="max-w-7xl mx-auto">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <Link href={`/products/${product.id}`}>
                      <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform duration-300">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-6 text-center">
                          <h3 className="text-lg font-semibold">{product.name}</h3>
                          <p className="text-gray-400 font-bold text-xl mt-2">S/ {product.price}</p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <p className="text-gray-400 text-center">
              {language === "es"
                ? "No hay productos disponibles en esta colección."
                : "No products available in this collection."}
            </p>
          )}
        </section>
      ))}

      {/* 📢 SECCIÓN FINAL - SUSCRIPCIÓN */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white text-center">
        <h3 className="text-3xl font-bold">
          {language === "es" ? "Únete a Nuestra Comunidad" : "Join Our Community"}
        </h3>
        <p className="mt-4 text-lg">
          {language === "es"
            ? "Suscríbete a nuestro boletín para recibir ofertas exclusivas y las últimas novedades."
            : "Subscribe to our newsletter for exclusive deals and the latest updates."}
        </p>
        <form className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder={language === "es" ? "Tu correo electrónico" : "Your email address"}
            className="px-4 py-3 rounded-l-lg w-64 text-black"
          />
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-r-lg text-white font-bold">
            {language === "es" ? "Suscribirse" : "Subscribe"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Hero;
