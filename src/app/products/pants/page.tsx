"use client";

import React from "react";

const PantalonesPage: React.FC = () => {
  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-black-50 to-black-200">
      {/* Título */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-black-800 dark:text-black-100 mb-4">Próximamente: Pantalones</h1>
        <p className="text-lg text-black-600 dark:text-black-300">
          ¡Estamos preparando la colección perfecta para ti!
        </p>
      </div>

      {/* Mensaje visual de próximo lanzamiento */}
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="relative w-full max-w-4xl overflow-hidden rounded-lg shadow-lg">
          <img
            src="/images/coming-soon.jpg"
            alt="Pantalones próximamente"
            className="w-full h-80 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold text-white mb-2">¡Próximamente!</h2>
            <p className="text-lg text-gray-300">Prepárate para lo mejor en estilo y confort.</p>
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div className="mt-12 text-center">
        <p className="text-lg text-black-600 dark:text-black-300">
          Suscríbete a nuestras redes sociales para enterarte del lanzamiento.
        </p>
      </div>
    </div>
  );
};

export default PantalonesPage;
