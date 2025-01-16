"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/51975885868?text=¡Hola!%20Quiero%20más%20información%20sobre%20sus%20productos."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white flex items-center gap-2 px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="lg" />
      <span className="font-semibold">¡Escríbenos!</span>
    </a>
  );
};

export default WhatsAppButton;
