"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { mockProducts } from "@/data/mockProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
const [product, setProduct] = useState<any | null>(null);
const [selectedColor, setSelectedColor] = useState<string | null>(null);
const [selectedSize, setSelectedSize] = useState<string | null>(null);
const [currentImage, setCurrentImage] = useState<string | null>(null);
const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
const [modalImage, setModalImage] = useState<string | null>(null);

const [currentIndex, setCurrentIndex] = useState(0);
const [isDragging, setIsDragging] = useState(false);
const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null);
const [startPosition, setStartPosition] = useState(0);
const [currentTranslate, setCurrentTranslate] = useState(0);
const [prevTranslate, setPrevTranslate] = useState(0);
const carouselRef = useRef<HTMLDivElement>(null);

const filteredProducts = product
  ? mockProducts.filter(
      (relatedProduct) =>
        relatedProduct.collection === product.collection &&
        relatedProduct.id !== product.id
    )
  : [];

const handlePrev = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex === 0 ? Math.max(0, Math.ceil(filteredProducts.length / 5) - 1) : prevIndex - 1
  );
};

const handleNext = () => {
  setCurrentIndex((prevIndex) =>
    prevIndex === Math.max(0, Math.ceil(filteredProducts.length / 5) - 1) ? 0 : prevIndex + 1
  );
};

// Iniciar el arrastre
const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
  if (clickTimeout) clearTimeout(clickTimeout);
  
  setIsDragging(false);
  const timeout = setTimeout(() => setIsDragging(true), 3000);
  setClickTimeout(timeout);

  carouselRef.current!.style.cursor = "grabbing";
  const startPos =
    e.type === "touchstart"
      ? (e as React.TouchEvent).touches[0].clientX
      : (e as React.MouseEvent).clientX;
  
  setStartPosition(startPos);
  setPrevTranslate(currentTranslate);
};

// Arrastrando el carrusel
const dragging = (e: React.MouseEvent | React.TouchEvent) => {
  if (!clickTimeout) return;
  clearTimeout(clickTimeout);
  
  setIsDragging(false);
  
  const currentPos =
    e.type === "touchmove"
      ? (e as React.TouchEvent).touches[0].clientX
      : (e as React.MouseEvent).clientX;
  const diff = currentPos - startPosition;

  const maxTranslate = Math.max(0, (filteredProducts.length - 5) * 20);
  const translate = Math.min(
    Math.max(prevTranslate - (diff / carouselRef.current!.clientWidth) * 100, 0),
    maxTranslate
  );

  setCurrentTranslate(translate);
};

// Soltar el carrusel
const endDrag = (e: React.MouseEvent | React.TouchEvent) => {
  if (!clickTimeout) return;
  clearTimeout(clickTimeout);
  
  setIsDragging(false);
  carouselRef.current!.style.cursor = "grab";

  const nearestIndex = Math.round(currentTranslate / 20);
  setCurrentIndex(nearestIndex);
  setCurrentTranslate(nearestIndex * 20);
};

useEffect(() => {
  const productId = Number(params.id);
  const foundProduct = mockProducts.find((p) => p.id === productId);

  setProduct(foundProduct);

  if (foundProduct) {
    setSelectedColor(foundProduct.colors?.[0] || null);
    setSelectedSize(foundProduct.sizes?.[0] || null);
    setCurrentImage(foundProduct.images?.[0] || null);
  }
}, [params]);

const handleOpenModal = (image: string) => {
  setModalImage(image);
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
  setModalImage(null);
};

const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
  if (event.target === event.currentTarget) {
    handleCloseModal();
  }
};

  const colorMap: { [key: string]: string } = {
    rojo: "red",
    blanco: "white",
    negro: "black",
    azul: "blue",
    amarillo: "yellow",
    verde: "green",
    naranja: "orange",
    morado: "purple",
    rosa: "pink",
    marrón: "brown",
    gris: "gray",
    celeste: "skyblue",
    dorado: "gold",
    plateado: "silver",
    violeta: "violet",
    aqua: "aqua",
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-700">Producto no encontrado</h1>
        <button
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
          onClick={() => router.back()}
        >
          Volver
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <button
        className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
        onClick={() => router.back()}
      >
        Volver
      </button>

      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-6xl w-full flex flex-col md:flex-row gap-12">
        {/* Galería de imágenes */}
        <div className="flex-1 flex flex-col gap-4 items-center relative">
          <div
            className="relative overflow-hidden border-2 shadow-md rounded-lg cursor-pointer"
            style={{ width: "100%", height: "400px" }}
            onClick={() => handleOpenModal(currentImage || product.images[0])}
          >
            <img
              src={currentImage || product.images[0]}
              alt={product.name}
              className="object-contain rounded-lg w-full h-full"
            />
          </div>
          {/* Previsualización de imágenes */}
          <div className="flex gap-2 mt-4">
            {product.images.map((img: string, index: number) => (
              <img
                key={index}
                src={img}
                alt={`Vista previa ${index + 1}`}
                className={`w-16 h-16 object-cover rounded-lg border-2 cursor-pointer ${
                  currentImage === img ? "border-blue-600" : "border-gray-300"
                } hover:border-blue-400 transition`}
                onClick={() => setCurrentImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Detalles del producto */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold text-gray-900">{product.name}</h1>
            <p className="text-lg text-gray-600">{product.description}</p>
            <p className="text-3xl font-bold text-green-600">
              S/ {product.price.toFixed(2)}
            </p>
          </div>

          {/* Selección de colores */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-xl">Colores:</h3>
            <div className="flex gap-4">
              {product.colors.map((color: string) => {
                const cssColor = colorMap[color.toLowerCase()] || color.toLowerCase();
                const isLightColor = ["white", "yellow", "silver", "aqua", "skyblue"].includes(
                  cssColor
                );
                return (
                  <div
                    key={color}
                    className={`w-12 h-12 rounded-full border-4 ${
                      selectedColor === color
                        ? "border-blue-600 ring-2 ring-blue-300"
                        : "border-gray-300"
                    } cursor-pointer hover:scale-110 transition-transform`}
                    style={{
                      backgroundColor: cssColor,
                      borderColor: isLightColor ? "black" : undefined,
                    }}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                );
              })}
            </div>
          </div>

          {/* Selección de tallas */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-xl">Tallas:</h3>
            <div className="flex gap-4">
              {product.sizes.map((size: string) => (
                <button
                  key={size}
                  className={`px-6 py-3 rounded-lg border-2 text-lg font-semibold ${
                    selectedSize === size
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-gray-100 text-gray-800 border-gray-300"
                  } hover:bg-blue-500 hover:text-white transition`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Botón de WhatsApp */}
          <a
            href={`https://wa.me/51975885868?text=${encodeURIComponent(
              `Hola, estoy interesado en el producto: ${product.name}. \nColor: ${selectedColor || "No seleccionado"}. \nTalla: ${selectedSize || "No seleccionada"}.`
            )}`}
            className={`px-6 py-3 rounded-lg text-lg font-semibold text-center ${
              selectedColor && selectedSize
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            } transition`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              pointerEvents: selectedColor && selectedSize ? "auto" : "none",
            }}
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>

      {/* Modal de imagen */}
      {isModalOpen && modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleBackdropClick}
        >
          <div className="relative w-11/12 max-w-4xl">
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-red-600 rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-700"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Zoomed Product"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Descripción del producto */}
      <div className="mt-16 w-full max-w-4xl">
        <h3 className="text-2xl font-bold mb-4">Descripción del Producto</h3>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <pre className="whitespace-pre-wrap text-gray-800 text-lg">
            {product.detailedDescription}
          </pre>
        </div>
      </div>

      {/* Productos relacionados con carrusel */}
      <div className="mt-16 w-full max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">Productos Relacionados</h3>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16} // Espaciado entre productos
        slidesPerView={1} // Para móviles
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        navigation // Botones de navegación
        pagination={{ clickable: true }} // Paginación inferior
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide
        loop // Ciclo infinito
        className="relative w-full"
      >
        {filteredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
              onClick={() => router.push(`/products/${product.id}`)}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h4 className="text-sm font-bold">{product.name}</h4>
                <p className="text-green-600 font-semibold text-sm">
                  S/ {product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  





</div>






    </div>
  );
}
