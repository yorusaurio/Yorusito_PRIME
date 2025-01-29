"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"es" | "en">("es");



  const changeLanguage = (lang: "es" | "en") => {
    setLanguage(lang);
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "dark bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <Hero language={language}/>
    </div>
  );
};

export default App;
