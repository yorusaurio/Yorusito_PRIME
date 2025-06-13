"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faClock, 
  faShirt,
  faPaperPlane,
  faUser,
  faComment,
  faCheckCircle,
  faExclamationTriangle,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const ContactPage = () => {
  const [startTime, setStartTime] = useState<number>(0);
  const [honeypot, setHoneypot] = useState<string>("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    reason: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const elapsedTime = (Date.now() - startTime) / 1000;

    if (honeypot) {
      setFeedback({ type: "error", message: "Formulario detectado como spam." });
      return;
    }

    if (elapsedTime < 5) {
      setFeedback({ type: "error", message: "Formulario enviado demasiado rápido. Por favor, completa los campos correctamente." });
      return;
    }

    const { name, email, message } = formState;
    if (!name || !email || !message) {
      setFeedback({ type: "error", message: "Por favor, completa todos los campos." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFeedback({ type: "error", message: "Por favor, introduce un correo electrónico válido." });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFeedback({ type: "success", message: "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto." });
      setFormState({ name: "", email: "", reason: "general", message: "" });
    }, 2000);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [id]: value }));
  };

  const contactInfo = [
    {
      icon: faWhatsapp,
      title: "WhatsApp",
      content: "+51 975 885 868",
      description: "Respuesta inmediata",
      color: "text-green-500",
      bgColor: "bg-green-50",
      link: "https://wa.me/51975885868"
    },
    {
      icon: faEnvelope,
      title: "Email",
      content: "yorusito.pe@gmail.com",
      description: "Respuesta en 24h",
      color: "text-yorusito-primary",
      bgColor: "bg-blue-50",
      link: "mailto:hola@yorusito.pe"
    },
    {
      icon: faInstagram,
      title: "Instagram",
      content: "@yorusito_pe",
      description: "Síguenos para novedades",
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      link: "https://instagram.com/yorusito_pe"
    },
    {
      icon: faMapMarkerAlt,
      title: "Ubicación",
      content: "Lima, Perú",
      description: "Entrega a domicilio",
      color: "text-yorusito-accent",
      bgColor: "bg-green-50"
    }
  ];

  const reasons = [
    { value: "general", label: "Consulta General", icon: faComment },
    { value: "product", label: "Información sobre Producto", icon: faShirt },
    { value: "custom", label: "Pedido Personalizado", icon: faUser },
    { value: "bulk", label: "Pedidos al por Mayor", icon: faCheckCircle },
    { value: "other", label: "Otro", icon: faExclamationTriangle }
  ];

  return (
    <main className="bg-yorusito-light min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yorusito-primary via-brand-600 to-yorusito-secondary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <FontAwesomeIcon icon={faEnvelope} className="text-6xl animate-pulse" />
            <div className="w-px h-16 bg-white/30"></div>
            <FontAwesomeIcon icon={faShirt} className="text-5xl text-yorusito-secondary" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-brand-100 bg-clip-text text-transparent">
            Contáctanos
          </h1>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-brand-100">
            En <span className="text-yorusito-secondary font-bold">Yorusito</span>, estamos aquí para hacer realidad tus ideas.
            ¿Tienes una consulta, quieres un diseño personalizado o simplemente quieres saludarnos?
            <span className="block mt-2 text-lg">¡Escríbenos y hagamos algo increíble juntos!</span>
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Información de Contacto */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-8">
              <div className="text-center mb-8">
                <FontAwesomeIcon icon={faShirt} className="text-4xl text-yorusito-primary mb-4" />
                <h2 className="text-2xl font-bold text-yorusito-neutral mb-2">
                  Hablemos
                </h2>
                <p className="text-gray-600">
                  Elige la forma que prefieras para contactarnos
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center p-4 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-gray-200"
                      >
                        <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                          <FontAwesomeIcon icon={info.icon} className={`text-xl ${info.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-yorusito-neutral">{info.title}</h3>
                          <p className="text-yorusito-primary font-medium">{info.content}</p>
                          <p className="text-xs text-gray-500">{info.description}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center p-4 rounded-2xl border border-gray-100">
                        <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                          <FontAwesomeIcon icon={info.icon} className={`text-xl ${info.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-yorusito-neutral">{info.title}</h3>
                          <p className="text-yorusito-primary font-medium">{info.content}</p>
                          <p className="text-xs text-gray-500">{info.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Horarios */}
              <div className="mt-8 p-6 bg-gradient-to-r from-yorusito-primary/10 to-yorusito-secondary/10 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <FontAwesomeIcon icon={faClock} className="text-xl text-yorusito-primary" />
                  <h3 className="font-bold text-yorusito-neutral">Horarios de Atención</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span className="font-medium text-red-500">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="text-center mb-8">
                <FontAwesomeIcon icon={faPaperPlane} className="text-4xl text-yorusito-secondary mb-4" />
                <h2 className="text-3xl font-bold text-yorusito-neutral mb-2">
                  Envíanos un Mensaje
                </h2>
                <p className="text-gray-600">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible
                </p>
              </div>

              {feedback && (
                <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                  feedback.type === "success" 
                    ? "bg-green-50 text-green-800 border border-green-200" 
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}>
                  <FontAwesomeIcon 
                    icon={feedback.type === "success" ? faCheckCircle : faExclamationTriangle} 
                    className="text-xl"
                  />
                  <span className="font-medium">{feedback.message}</span>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-yorusito-neutral mb-3">
                      <FontAwesomeIcon icon={faUser} className="mr-2 text-yorusito-primary" />
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yorusito-primary focus:ring-4 focus:ring-yorusito-primary/20 transition-all duration-300 text-yorusito-neutral"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-yorusito-neutral mb-3">
                      <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-yorusito-primary" />
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yorusito-primary focus:ring-4 focus:ring-yorusito-primary/20 transition-all duration-300 text-yorusito-neutral"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-bold text-yorusito-neutral mb-3">
                    <FontAwesomeIcon icon={faComment} className="mr-2 text-yorusito-primary" />
                    Motivo de Contacto
                  </label>
                  <select
                    id="reason"
                    value={formState.reason}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yorusito-primary focus:ring-4 focus:ring-yorusito-primary/20 transition-all duration-300 text-yorusito-neutral"
                    required
                  >
                    {reasons.map((reason) => (
                      <option key={reason.value} value={reason.value}>
                        {reason.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-yorusito-neutral mb-3">
                    <FontAwesomeIcon icon={faComment} className="mr-2 text-yorusito-primary" />
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Cuéntanos sobre tu proyecto, consulta o idea. Mientras más detalles nos proporciones, mejor podremos ayudarte..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yorusito-primary focus:ring-4 focus:ring-yorusito-primary/20 transition-all duration-300 text-yorusito-neutral resize-none"
                    required
                  ></textarea>
                </div>

                {/* Honeypot Field */}
                <div className="hidden">
                  <label htmlFor="honeypot">No llenar este campo</label>
                  <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg ${
                    isSubmitting
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-yorusito-primary to-yorusito-secondary text-white hover:scale-105 hover:shadow-xl shadow-lg"
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                      Enviando mensaje...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} />
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </form>

              {/* Información adicional */}
              <div className="mt-8 p-6 bg-gradient-to-r from-yorusito-primary/5 to-yorusito-secondary/5 rounded-2xl">
                <h3 className="font-bold text-yorusito-neutral mb-2 flex items-center gap-2">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-yorusito-accent" />
                  ¿Qué puedes esperar?
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Respuesta garantizada en menos de 24 horas</li>
                  <li>• Asesoramiento personalizado para tu proyecto</li>
                  <li>• Cotización detallada sin compromiso</li>
                  <li>• Atención friendly y profesional</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-yorusito-primary via-brand-600 to-yorusito-secondary p-12 rounded-3xl text-white">
            <FontAwesomeIcon icon={faShirt} className="text-5xl mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Tienes una idea? ¡Hagámosla realidad!
            </h2>
            <p className="text-xl text-brand-100 mb-8 max-w-3xl mx-auto">
              En Yorusito transformamos tus ideas en prendas únicas. 
              Desde un diseño conceptual hasta la prenda terminada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/51999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-yorusito-primary font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                WhatsApp Directo
              </a>
              <a 
                href="/products" 
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                Ver Catálogo
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
