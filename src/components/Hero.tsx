"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { mockProducts } from "../data/mockProducts";

interface HeroProps {
  language: "es" | "en";
  theme: "light" | "dark";
}

const Hero: React.FC<HeroProps> = ({ language, theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      className={`relative flex flex-col items-center justify-center min-h-screen text-center px-6 py-12 transition-colors ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-br from-white via-gray-200 to-gray-400 text-gray-900"
      }`}
    >
      {/* Contenido del Hero */}
      <div className="z-10 max-w-4xl mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-wide mb-6">
          {language === "es" ? "Explora Nuestra Colección" : "Explore Our Collection"}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
          {language === "es"
            ? "Descubre productos exclusivos diseñados para tu estilo."
            : "Discover exclusive products tailored to your style."}
        </p>
        <Link href="/products">
          <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800">
            {language === "es" ? "Explorar Ahora" : "Shop Now"}
          </button>
        </Link>
      </div>

      {/* Carrusel de Productos */}
      <div className="w-full max-w-6xl">
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
          {mockProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                {/* Imagen del Producto */}
                <div>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Detalles del Producto */}
                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 text-center">
                    {product.description}
                  </p>
                  <div className="flex justify-center items-center mt-4">
                    <span className="text-gray-900 font-bold text-xl">
                      S/ {product.price}
                    </span>
                  </div>
                  <Link href={`/products/${product.id}`}>
                    <button
                      className={`mt-4 px-4 py-2 rounded-lg font-medium text-white shadow-md transition-colors ${
                        isDark
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-black hover:bg-gray-800"
                      }`}
                    >
                      {language === "es" ? "Ver Producto" : "View Product"}
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
