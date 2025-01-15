"use client";

import React from "react";

const ContactPage = () => {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen px-8 py-12">
      <section className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4">Contáctanos</h1>
          <p className="text-lg font-medium max-w-2xl mx-auto">
            En <span className="text-indigo-600 dark:text-indigo-400">Yorusito</span>, estamos aquí para ayudarte. 
            Si tienes alguna consulta sobre nuestros productos, pedidos personalizados, o simplemente quieres saludarnos, 
            ¡escríbenos! Nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>

        {/* Formulario de Contacto */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Envíanos un Mensaje</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                placeholder="Tu Nombre"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                placeholder="tuemail@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-500 transition-all"
            >
              Enviar Mensaje
            </button>
          </form>
        </section>

        {/* Información de Contacto */}
        <section className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Otras formas de contactarnos</h2>
          <p className="text-lg mb-6">
            También puedes escribirnos directamente a nuestro correo:
          </p>
          <a
            href="mailto:yorusito.pe@gmail.com"
            className="text-indigo-600 dark:text-indigo-400 font-semibold underline hover:text-indigo-500"
          >
            yorusito.pe@gmail.com
          </a>
        </section>
      </section>
    </main>
  );
};

export default ContactPage;
