"use client";

import React from "react";

const FAQ: React.FC = () => {
  const questions = [
    "¿Qué materiales utilizan para la ropa personalizada?",
    "¿Cuánto tiempo demora la entrega de los pedidos?",
    "¿Ofrecen envíos a provincias?",
    "¿Puedo personalizar completamente un diseño?",
    "¿Aceptan pedidos al por mayor?",
    "¿Cómo puedo saber mi talla?",
    "¿Qué tipo de diseños puedo estampar?",
    "¿El estampado se puede lavar sin problemas?",
    "¿Qué pasa si recibo un producto defectuoso?",
    "¿Tienen tienda física?",
    "¿Tienen promociones por compras frecuentes?",
  ];

  const answers = [
    "Utilizamos algodón jersey 24/1 de alta calidad y estampado DTF que garantiza durabilidad y colores vivos.",
    "La entrega demora de 2 a 5 días hábiles en Lima. En provincias puede demorar hasta 7 días.",
    "Sí, realizamos envíos a todas las provincias del Perú a través de servicios de mensajería confiables.",
    "Sí, puedes personalizar completamente un diseño. Aceptamos logos, frases o imágenes que reflejen tu estilo.",
    "Sí, ofrecemos precios especiales para pedidos al por mayor. Contáctanos para más información.",
    "Disponemos de una guía de tallas en nuestra página. Si tienes dudas, puedes contactarnos para asistencia.",
    "Puedes estampar logos, frases, ilustraciones o cualquier diseño que refleje tu estilo. Solo asegúrate de que cumpla con nuestros requisitos de calidad para impresión.",
    "Sí, el estampado DTF está diseñado para resistir lavados frecuentes. Recomendamos lavar con agua fría y al revés para prolongar su durabilidad.",
    "En caso de recibir un producto defectuoso, contáctanos dentro de las primeras 48 horas para gestionar un cambio o reembolso.",
    "Por ahora, solo operamos a través de nuestra tienda online. Sin embargo, ofrecemos soporte completo por WhatsApp y correo electrónico.",
    "Sí, contamos con un programa de fidelización. Puedes acumular puntos con cada compra y recibir descuentos exclusivos.",
  ];

  return (
    <section id="faq" className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      <div className="text-center mb-8">
        {/* Título */}
        <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
      </div>

      {/* Preguntas y Respuestas */}
      <div className="max-w-4xl mx-auto space-y-8">
        {questions.map((question, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold">{question}</h3>
            <p className="mt-2">{answers[index]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
