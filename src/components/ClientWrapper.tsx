"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-yorusito-light text-yorusito-neutral">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default ClientWrapper;
