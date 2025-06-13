"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faSearch, 
  faQuestionCircle, 
  faChevronDown, 
  faChevronUp, 
  faShirt, 
  faTruck, 
  faPalette, 
  faShieldAlt,
  faClock,
  faMapMarkerAlt,
  faSprayCan
} from "@fortawesome/free-solid-svg-icons";

const FAQ: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const questionsAndAnswers = [
    {
      id: 1,
      category: "Materiales",
      icon: faShirt,
      question: "¿Qué materiales utilizan para la ropa personalizada?",
      answer: "Utilizamos algodón jersey 24/1 de alta calidad y estampado DTF (Direct to Film) que garantiza durabilidad excepcional, colores vivos y resistencia al lavado. Nuestros materiales son certificados y libres de químicos nocivos.",
    },
    {
      id: 2,
      category: "Envíos",
      icon: faTruck,
      question: "¿Cuánto tiempo demora la entrega de los pedidos?",
      answer: "En Lima: 2-3 días hábiles. En provincias: 5-7 días hábiles. Para pedidos urgentes ofrecemos servicio express con entrega en 24 horas (solo Lima) con costo adicional.",
    },
    {
      id: 3,
      category: "Envíos",
      icon: faMapMarkerAlt,
      question: "¿Ofrecen envíos a provincias?",
      answer: "¡Sí! Realizamos envíos a todas las provincias del Perú a través de Olva Courier, Shalom y otros servicios confiables. El costo de envío se calcula automáticamente según el destino.",
    },
    {
      id: 4,
      category: "Personalización",
      icon: faPalette,
      question: "¿Puedo personalizar completamente un diseño?",
      answer: "¡Absolutamente! Puedes enviar tu propio diseño, logo, frase o imagen. También ofrecemos servicio de diseño personalizado sin costo adicional. Aceptamos archivos en PNG, JPG, PDF o vectoriales.",
    },
    {
      id: 5,
      category: "Ventas",
      icon: faShirt,
      question: "¿Aceptan pedidos al por mayor?",
      answer: "Sí, ofrecemos precios especiales para pedidos desde 10 prendas. Contamos con descuentos escalonados: 10+ prendas (10% dto), 25+ prendas (15% dto), 50+ prendas (20% dto).",
    },
    {
      id: 6,
      category: "Tallas",
      icon: faShirt,
      question: "¿Cómo puedo saber mi talla?",
      answer: "Tenemos una guía de tallas detallada con medidas específicas. También puedes enviarnos tus medidas por WhatsApp y te ayudamos a elegir la talla perfecta. Trabajamos desde XS hasta 3XL.",
    },
    {
      id: 7,
      category: "Personalización",
      icon: faPalette,
      question: "¿Qué tipo de diseños puedo estampar?",
      answer: "Puedes estampar logos empresariales, frases motivacionales, ilustraciones, fotografías, diseños de anime, deportes, y cualquier arte que refleje tu personalidad. Sin límites de creatividad.",
    },    {
      id: 8,
      category: "Cuidado",
      icon: faSprayCan,
      question: "¿El estampado se puede lavar sin problemas?",
      answer: "Nuestro estampado DTF está diseñado para durar más de 50 lavados manteniendo calidad. Recomendaciones: lavar con agua fría, al revés, no usar lejía, planchar por el reverso.",
    },
    {
      id: 9,
      category: "Garantía",
      icon: faShieldAlt,
      question: "¿Qué pasa si recibo un producto defectuoso?",
      answer: "Ofrecemos garantía total. Si hay algún defecto, contáctanos en las primeras 48 horas y gestionamos cambio o reembolso completo. Tu satisfacción es nuestra prioridad.",
    },
    {
      id: 10,
      category: "Tienda",
      icon: faMapMarkerAlt,
      question: "¿Tienen tienda física?",
      answer: "Actualmente somos 100% online para ofrecerte mejores precios. Brindamos atención personalizada por WhatsApp, Instagram y correo. ¡La experiencia digital de Yorusito es única!",
    },
  ];

  const filteredQuestions = questionsAndAnswers.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleQuestion = (id: number) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  const categories = [...new Set(questionsAndAnswers.map(item => item.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yorusito-light via-white to-brand-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-yorusito-primary via-brand-600 to-yorusito-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <FontAwesomeIcon icon={faQuestionCircle} className="text-5xl text-white animate-pulse" />
            <div className="w-px h-12 bg-white/30"></div>
            <FontAwesomeIcon icon={faShirt} className="text-4xl text-white" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Preguntas Frecuentes
          </h1>
          
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Resuelve todas tus dudas sobre nuestros productos y servicios. 
            ¡Estamos aquí para ayudarte en tu experiencia Yorusito!
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Busca tu pregunta..."
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/90 backdrop-blur-sm text-yorusito-neutral placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSearchQuery("")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                searchQuery === "" 
                  ? "bg-yorusito-primary text-white shadow-lg" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Todas
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSearchQuery(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  searchQuery === category 
                    ? "bg-yorusito-primary text-white shadow-lg" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {filteredQuestions.length > 0 ? (
            <div className="space-y-4">
              {filteredQuestions.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(item.id)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          activeQuestion === item.id 
                            ? "bg-yorusito-primary text-white" 
                            : "bg-brand-100 text-yorusito-primary"
                        } transition-all`}>
                          <FontAwesomeIcon icon={item.icon} className="text-lg" />
                        </div>
                        <div>
                          <span className="inline-block px-3 py-1 bg-yorusito-secondary/10 text-yorusito-secondary text-xs font-semibold rounded-full mb-2">
                            {item.category}
                          </span>
                          <h3 className="text-lg md:text-xl font-bold text-yorusito-neutral">
                            {item.question}
                          </h3>
                        </div>
                      </div>
                      <FontAwesomeIcon 
                        icon={activeQuestion === item.id ? faChevronUp : faChevronDown} 
                        className={`text-yorusito-primary transition-transform duration-300 ${
                          activeQuestion === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-300 ${
                    activeQuestion === item.id 
                      ? "max-h-96 opacity-100" 
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}>
                    <div className="px-6 pb-6">
                      <div className="pl-16 border-l-4 border-yorusito-primary/20">
                        <p className="text-gray-600 leading-relaxed text-base">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FontAwesomeIcon icon={faQuestionCircle} className="text-6xl text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-500 mb-2">
                No se encontraron resultados
              </h3>
              <p className="text-gray-400 mb-6">
                Intenta con otros términos de búsqueda o revisa todas las categorías
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-6 py-3 bg-yorusito-primary text-white rounded-lg hover:bg-brand-600 transition-colors font-medium"
              >
                Ver todas las preguntas
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-yorusito-neutral to-yorusito-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FontAwesomeIcon icon={faQuestionCircle} className="text-4xl mb-6 text-yorusito-secondary" />
          <h3 className="text-3xl font-bold mb-4">
            ¿No encontraste lo que buscabas?
          </h3>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Nuestro equipo está listo para resolver cualquier duda específica que tengas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              Chatear por WhatsApp
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20 hover:border-white/30"
            >
              Ir a Contacto
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
