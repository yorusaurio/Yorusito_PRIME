"use client";

import React from "react";

const PantalonesPage: React.FC = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8">Pantalones</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Productos de Pantalones */}
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <img src="/images/pantalon1.png" alt="Pantalón 1" className="w-full h-60 object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-lg">Pantalón 1</h2>
            <p className="text-gray-600">S/ 109.90</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PantalonesPage;
