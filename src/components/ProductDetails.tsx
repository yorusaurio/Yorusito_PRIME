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
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

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

  const toggleZoom = () => setIsZoomed(!isZoomed);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-700">Producto no encontrado</h1>
        <button
          className="mt-6 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => router.back()}
        >
          Volver
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <button
        className="mb-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={() => router.back()}
      >
        Volver
      </button>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-5xl w-full flex flex-col md:flex-row gap-8">
        {/* Galería de imágenes */}
        <div className="flex-1 flex flex-col items-center">
          <div
            className={`w-full max-h-96 overflow-hidden rounded-lg border ${
              isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
            }`}
            onClick={toggleZoom}
          >
            <img
              src={currentImage || product.images[0]}
              alt={product.name}
              className={`w-full h-full object-contain ${
                isZoomed ? "scale-150" : "scale-100"
              } transition-transform duration-300`}
            />
          </div>
          <div className="flex gap-3 mt-4">
            {product.images.map((img: string, idx: number) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className={`w-16 h-16 object-cover rounded-lg border ${
                  currentImage === img ? "border-blue-500" : "border-gray-300"
                } cursor-pointer`}
                onClick={() => setCurrentImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Detalles del producto */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600">
            Precio: S/ {product.price.toFixed(2)}
          </p>

          {/* Selección de colores */}
          {product.colors?.length > 0 ? (
            <div>
              <h3 className="font-semibold text-lg mb-2">Colores:</h3>
              <div className="grid grid-cols-3 gap-3">
                {product.colors.map((color: string) => (
                  <button
                    key={color}
                    className={`flex items-center justify-center h-10 rounded-lg border transition ${
                      selectedColor === color
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-gray-100 text-gray-800 border-gray-300"
                    } hover:bg-blue-400 hover:text-white`}
                    style={{
                      backgroundColor:
                        color.toLowerCase() === "blanco" ||
                        color.toLowerCase() === "plomo"
                          ? undefined
                          : color.toLowerCase(),
                      color:
                        color.toLowerCase() === "blanco" ||
                        color.toLowerCase() === "plomo"
                          ? "black"
                          : undefined,
                    }}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-600">No hay colores disponibles</p>
          )}

          {/* Selección de tallas */}
          {product.sizes?.length > 0 ? (
            <div>
              <h3 className="font-semibold text-lg mb-2">Tallas:</h3>
              <div className="flex gap-3">
                {product.sizes.map((size: string) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedSize === size
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-800"
                    } hover:bg-blue-400 hover:text-white transition`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-600">No hay tallas disponibles</p>
          )}

          {/* Botón de WhatsApp */}
          <a
            href={`https://wa.me/51975885868?text=${encodeURIComponent(
              `Hola, estoy interesado en el producto: ${product.name}. \nColor: ${selectedColor || "No seleccionado"}. \nTalla: ${selectedSize || "No seleccionada"}.`
            )}`}
            className={`mt-6 px-5 py-2 rounded-lg text-center ${
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
            Preguntar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
