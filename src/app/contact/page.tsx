"use client";

import React, { useState, useEffect } from "react";

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
    setStartTime(Date.now()); // Registrar el tiempo al cargar el formulario
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const elapsedTime = (Date.now() - startTime) / 1000; // Tiempo transcurrido en segundos

    // Verificar si el honeypot tiene valor
    if (honeypot) {
      setFeedback({ type: "error", message: "Formulario detectado como spam." });
      return;
    }

    // Verificar si el formulario fue enviado demasiado rápido
    if (elapsedTime < 5) {
      setFeedback({ type: "error", message: "Formulario enviado demasiado rápido. Por favor, completa los campos correctamente." });
      return;
    }

    // Validar los campos
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

    // Simulación de envío del formulario
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFeedback({ type: "success", message: "Mensaje enviado con éxito. Nos pondremos en contacto pronto." });
      setFormState({ name: "", email: "", reason: "general", message: "" }); // Reiniciar el formulario
    }, 2000);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [id]: value }));
  };

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
          {feedback && (
            <div
              className={`mb-6 px-4 py-3 rounded-md ${
                feedback.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {feedback.message}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-black">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={handleInputChange}
                placeholder="Tu Nombre"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-black">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={handleInputChange}
                placeholder="tuemail@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="reason" className="block text-sm font-medium mb-2 text-black">
                Motivo de Contacto
              </label>
              <select
                id="reason"
                value={formState.reason}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                required
              >
                <option value="general">Consulta General</option>
                <option value="product">Información sobre un Producto</option>
                <option value="custom">Pedido Personalizado</option>
                <option value="bulk">Pedidos al por Mayor</option>
                <option value="other">Otro</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-black">
                Mensaje
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
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
              className={`w-full font-semibold py-3 rounded-md transition-all ${
                isSubmitting
                  ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-500"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        </section>
      </section>
    </main>
  );
};

export default ContactPage;
