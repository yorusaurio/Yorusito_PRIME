"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { mockProducts } from "@/data/mockProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faHeart,
  faShare,
  faTimes,
  faExpand,
  faStar,
  faShieldAlt,
  faTruck,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);

  const filteredProducts = product
    ? mockProducts.filter(
        (relatedProduct) =>
          relatedProduct.collection === product.collection &&
          relatedProduct.id !== product.id
      )
    : [];

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
    rojo: "#EF4444",
    blanco: "#FFFFFF",
    negro: "#1F2937",
    azul: "#3B82F6",
    amarillo: "#EAB308",
    verde: "#10B981",
    naranja: "#F97316",
    morado: "#A855F7",
    rosa: "#EC4899",
    marrón: "#A3782A",
    gris: "#6B7280",
    celeste: "#0EA5E9",
    dorado: "#F59E0B",
    plateado: "#9CA3AF",
    violeta: "#8B5CF6",
    aqua: "#06B6D4",
  };

  const shareProduct = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("¡Enlace copiado al portapapeles!");
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yorusito-light to-white">
        <div className="text-center p-8">
          <div className="text-6xl mb-4">😔</div>
          <h1 className="text-4xl font-bold text-yorusito-neutral mb-4">
            Producto no encontrado
          </h1>
          <p className="text-gray-500 mb-8">
            El producto que buscas no existe o ha sido movido.
          </p>
          <button
            className="bg-gradient-to-r from-brand-500 to-yorusito-secondary text-white px-8 py-4 rounded-xl font-semibold hover:from-brand-600 hover:to-yorusito-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={() => router.back()}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Volver
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yorusito-light via-white to-brand-50">
      {/* Header con botón de volver */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            className="flex items-center gap-2 text-yorusito-neutral hover:text-brand-600 transition-colors font-medium"
            onClick={() => router.back()}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Volver
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-2 rounded-full transition-all duration-300 ${
                isFavorite
                  ? "text-red-500 bg-red-50 hover:bg-red-100"
                  : "text-gray-400 hover:text-red-500 hover:bg-red-50"
              }`}
            >
              <FontAwesomeIcon icon={faHeart} className="text-xl" />
            </button>
            <button
              onClick={shareProduct}
              className="p-2 rounded-full text-gray-400 hover:text-brand-600 hover:bg-brand-50 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faShare} className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Galería de imágenes */}
          <div className="space-y-6">
            <div className="relative group">
              <div
                className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer bg-white"
                style={{ aspectRatio: "1/1" }}
                onClick={() => handleOpenModal(currentImage || product.images[0])}
              >
                <img
                  src={currentImage || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <button className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <FontAwesomeIcon
                    icon={faExpand}
                    className="text-yorusito-neutral"
                  />
                </button>
              </div>

              {/* Indicador de descuento */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-yorusito-secondary to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                ¡Nuevo!
              </div>
            </div>

            {/* Miniaturas */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img: string, index: number) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden cursor-pointer border-3 transition-all duration-300 ${
                    currentImage === img
                      ? "border-brand-500 shadow-lg scale-105"
                      : "border-gray-200 hover:border-brand-300"
                  }`}
                  onClick={() => setCurrentImage(img)}
                >
                  <img
                    src={img}
                    alt={`Vista ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Detalles del producto */}
          <div className="space-y-8">
            {/* Info básica */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-sm" />
                ))}
                <span className="text-gray-500 text-sm ml-2">(125 reseñas)</span>
              </div>

              <h1 className="text-4xl font-black text-yorusito-neutral leading-tight">
                {product.name}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-yorusito-accent">
                  S/ {product.price.toFixed(2)}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  S/ {(product.price * 1.3).toFixed(2)}
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-semibold">
                  -23%
                </span>
              </div>
            </div>

            {/* Selección de colores */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yorusito-neutral">
                Color:{" "}
                <span className="font-normal text-gray-600">{selectedColor}</span>
              </h3>
              <div className="flex gap-3 flex-wrap">
                {product.colors.map((color: string) => {
                  const cssColor = colorMap[color.toLowerCase()] || color.toLowerCase();
                  const isSelected = selectedColor === color;
                  return (
                    <button
                      key={color}
                      className={`relative w-12 h-12 rounded-xl border-3 transition-all duration-300 hover:scale-110 ${
                        isSelected
                          ? "border-brand-500 shadow-lg scale-105"
                          : "border-gray-300 hover:border-brand-400"
                      }`}
                      style={{ backgroundColor: cssColor }}
                      onClick={() => setSelectedColor(color)}
                    >
                      {cssColor === "#FFFFFF" && (
                        <div className="absolute inset-1 border border-gray-200 rounded-lg" />
                      )}
                      {isSelected && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className={`text-lg ${
                              cssColor === "#FFFFFF" ? "text-gray-600" : "text-white"
                            }`}
                          />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selección de tallas */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yorusito-neutral">
                Talla:{" "}
                <span className="font-normal text-gray-600">{selectedSize}</span>
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map((size: string) => (
                  <button
                    key={size}
                    className={`py-3 px-4 rounded-xl border-2 font-semibold transition-all duration-300 ${
                      selectedSize === size
                        ? "bg-brand-500 text-white border-brand-500 shadow-lg"
                        : "bg-white text-yorusito-neutral border-gray-300 hover:border-brand-400 hover:bg-brand-50"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Cantidad */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-yorusito-neutral">Cantidad</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-300 rounded-xl overflow-hidden">
                  <button
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 min-w-[50px] text-center font-semibold">
                    {quantity}
                  </span>
                  <button
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <span className="text-gray-500">unidades disponibles</span>
              </div>
            </div>

            {/* Beneficios */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                <FontAwesomeIcon icon={faShieldAlt} className="text-green-600 text-xl" />
                <div>
                  <p className="font-semibold text-green-700">Garantía</p>
                  <p className="text-sm text-green-600">30 días</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                <FontAwesomeIcon icon={faTruck} className="text-blue-600 text-xl" />
                <div>
                  <p className="font-semibold text-blue-700">Envío</p>
                  <p className="text-sm text-blue-600">Gratis Lima</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
                <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 text-xl" />
                <div>
                  <p className="font-semibold text-purple-700">Calidad</p>
                  <p className="text-sm text-purple-600">Premium</p>
                </div>
              </div>
            </div>

            {/* Botón de WhatsApp */}
            <div className="space-y-4">
              <a
                href={`https://wa.me/51975885868?text=${encodeURIComponent(
                  `¡Hola! Estoy interesado en el producto: ${product.name}\nColor: ${selectedColor || "No seleccionado"}\nTalla: ${selectedSize || "No seleccionada"}\nCantidad: ${quantity} unidad${
                    quantity > 1 ? "es" : ""
                  }`
                )}`}
                className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-lg font-bold transition-all duration-300 ${
                  selectedColor && selectedSize
                    ? "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transform hover:scale-105"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  pointerEvents: selectedColor && selectedSize ? "auto" : "none",
                }}
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                Contactar por WhatsApp
              </a>

              {(!selectedColor || !selectedSize) && (
                <p className="text-center text-sm text-gray-500">
                  Por favor selecciona color y talla para continuar
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Modal de imagen */}
        {isModalOpen && modalImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={handleBackdropClick}
          >
            <div className="relative w-11/12 max-w-4xl">
              <button
                className="absolute -top-12 right-0 text-white text-2xl font-bold bg-white/20 hover:bg-white/30 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
                onClick={handleCloseModal}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <img
                src={modalImage}
                alt="Imagen ampliada"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        )}

        {/* Descripción detallada */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-yorusito-neutral mb-6">
            Descripción del Producto
          </h3>
          <div className="prose prose-lg max-w-none">
            <pre className="whitespace-pre-wrap text-gray-700 font-sans leading-relaxed">
              {product.detailedDescription}
            </pre>
          </div>
        </div>

        {/* Productos relacionados */}
        {filteredProducts.length > 0 && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-yorusito-neutral text-center">
              También te puede interesar
            </h3>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
              }}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              className="!pb-12"
            >
              {filteredProducts.map((relatedProduct) => (
                <SwiperSlide key={relatedProduct.id}>
                  <div
                    className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                    onClick={() => router.push(`/products/${relatedProduct.id}`)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-4 space-y-2">
                      <h4 className="font-bold text-yorusito-neutral line-clamp-2">
                        {relatedProduct.name}
                      </h4>
                      <p className="text-yorusito-accent font-bold text-lg">
                        S/ {relatedProduct.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
}
