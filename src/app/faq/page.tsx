"use client";

import React, { useState } from "react";

const FAQ: React.FC = () => {
  const questionsAndAnswers = [
    {
      question: "¿Qué materiales utilizan para la ropa personalizada?",
      answer: "Utilizamos algodón jersey 24/1 de alta calidad y estampado DTF que garantiza durabilidad y colores vivos.",
    },
    {
      question: "¿Cuánto tiempo demora la entrega de los pedidos?",
      answer: "La entrega demora de 2 a 5 días hábiles en Lima. En provincias puede demorar hasta 7 días.",
    },
    {
      question: "¿Ofrecen envíos a provincias?",
      answer: "Sí, realizamos envíos a todas las provincias del Perú a través de servicios de mensajería confiables.",
    },
    {
      question: "¿Puedo personalizar completamente un diseño?",
      answer: "Sí, puedes personalizar completamente un diseño. Aceptamos logos, frases o imágenes que reflejen tu estilo.",
    },
    {
      question: "¿Aceptan pedidos al por mayor?",
      answer: "Sí, ofrecemos precios especiales para pedidos al por mayor. Contáctanos para más información.",
    },
    {
      question: "¿Cómo puedo saber mi talla?",
      answer: "Disponemos de una guía de tallas en nuestra página. Si tienes dudas, puedes contactarnos para asistencia.",
    },
    {
      question: "¿Qué tipo de diseños puedo estampar?",
      answer: "Puedes estampar logos, frases, ilustraciones o cualquier diseño que refleje tu estilo.",
    },
    {
      question: "¿El estampado se puede lavar sin problemas?",
      answer: "Sí, el estampado DTF está diseñado para resistir lavados frecuentes. Recomendamos lavar con agua fría y al revés.",
    },
    {
      question: "¿Qué pasa si recibo un producto defectuoso?",
      answer: "En caso de recibir un producto defectuoso, contáctanos dentro de las primeras 48 horas para gestionar un cambio o reembolso.",
    },
    {
      question: "¿Tienen tienda física?",
      answer: "Por ahora, solo operamos a través de nuestra tienda online. Ofrecemos soporte completo por WhatsApp y correo electrónico.",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuestions = questionsAndAnswers.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Preguntas Frecuentes</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Encuentra respuestas claras a las dudas más comunes sobre nuestros servicios.
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Busca una pregunta..."
              className="w-full px-5 py-3 rounded-lg shadow-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Preguntas y Respuestas */}
        <div className="space-y-6">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((item, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold mb-2 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500">
                  {item.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400">
              No se encontraron resultados para tu búsqueda.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
