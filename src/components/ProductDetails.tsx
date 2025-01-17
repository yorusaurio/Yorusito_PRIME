"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { mockProducts } from "@/data/mockProducts";

export default function ProductDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [product, setProduct] = useState<any | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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

  const relatedProducts = mockProducts.slice(0, 3);

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
      {/* Botón Volver */}
      <button
        className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
        onClick={() => router.back()}
      >
        Volver
      </button>

      {/* Contenedor principal */}
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-6xl w-full flex flex-col md:flex-row gap-12">
        {/* Galería de imágenes */}
        <div className="flex-1 flex flex-col gap-4 items-center">
          <img
            src={currentImage || product.images[0]}
            alt={product.name}
            className="w-full max-h-96 object-contain rounded-lg border-2 shadow-md"
          />
          <div className="flex gap-4 mt-4">
            {product.images.map((img: string, idx: number) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className={`w-20 h-20 object-cover rounded-lg border-2 ${
                  currentImage === img ? "border-blue-600" : "border-gray-300"
                } cursor-pointer hover:border-blue-500 transition`}
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
            {/* Botón para abrir la tabla de medidas */}
            <button
              className="mt-4 px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition"
              onClick={handleOpenModal}
            >
              Ver Tabla de Medidas
            </button>
          </div>
        </div>
      </div>

      {/* Ventana Modal de la Tabla de Medidas */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Tabla de Medidas</h3>
            <img
              src="/images/tabla-medidas.jpg"
              alt="Tabla de Medidas"
              className="w-full object-contain"
            />
            <button
              className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              onClick={handleCloseModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Descripción del Producto */}
      <div className="mt-16 w-full max-w-4xl">
        <h3 className="text-2xl font-bold mb-4">Descripción del Producto</h3>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <pre className="whitespace-pre-wrap text-gray-800 text-lg">
            {product.detailedDescription}
          </pre>
        </div>
      </div>

      {/* Reseñas */}
      <div className="mt-16 w-full max-w-4xl">
        <h3 className="text-2xl font-bold mb-4">Reseñas de Clientes</h3>
        <div className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-800">
              "Excelente calidad, me encantó el diseño y los colores."
            </p>
            <p className="text-sm text-gray-500 mt-2">- Usuario 1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-800">
              "La talla fue perfecta y llegó rápido."
            </p>
            <p className="text-sm text-gray-500 mt-2">- Usuario 2</p>
          </div>
        </div>
      </div>

      {/* Productos relacionados */}
      <div className="mt-16 w-full max-w-6xl">
        <h3 className="text-2xl font-bold mb-4">Productos Relacionados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => router.push(`/products/${relatedProduct.id}`)}
            >
              <img
                src={relatedProduct.images[0]}
                alt={relatedProduct.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold">{relatedProduct.name}</h4>
                <p className="text-green-600 font-semibold">
                  S/ {relatedProduct.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
