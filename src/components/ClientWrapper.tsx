"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"es" | "en">("es");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

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
      <Header
        toggleTheme={toggleTheme}
        changeLanguage={changeLanguage}
        language={language}
        theme={theme}
      />
      <main>{children}</main>
      <Footer language={language} />
    </div>
  );
};

export default ClientWrapper;
