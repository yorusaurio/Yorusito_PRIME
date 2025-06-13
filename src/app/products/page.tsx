"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faShirt, 
  faFire, 
  faStar, 
  faArrowRight, 
  faSearch, 
  faFilter,
  faShoppingBag,
  faCrown,
  faHeart,
  faTags,
  faThLarge,
  faList
} from "@fortawesome/free-solid-svg-icons";
import { mockProducts } from "../../data/mockProducts";

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const categories = [
    {
      id: "polos",
      name: "Polos",
      description: "Estilo y comodidad para tu día a día",
      image: "/images/polo.avif",
      icon: faShirt,
      color: "from-yorusito-primary to-brand-600",
      link: "/products/polos",
      count: mockProducts.length, // Mostrar todos los productos por ahora
      featured: true
    },
    {
      id: "hoodies",
      name: "Hoodies",
      description: "Calidez y estilo urbano para el frío",
      image: "/images/hoodie.png",
      icon: faFire,
      color: "from-yorusito-secondary to-pink-600",
      link: "/products/hoodies",
      count: 0, // Por implementar
      featured: true
    },
    {
      id: "pants",
      name: "Pantalones",
      description: "Comodidad y versatilidad en cada paso",
      image: "/images/categoria-pantalones.jpg",
      icon: faTags,
      color: "from-yorusito-accent to-green-600",
      link: "/products/pants",
      count: 0, // Por implementar
      featured: false
    }
  ];

  const collections = [
    {
      name: "SuperStars",
      description: "Diseños inspirados en los íconos del deporte",
      icon: faCrown,
      image: "/images/superstars/messifront.png",
      color: "from-yellow-400 to-orange-500",
      link: "/products/polos/superstars",
      products: mockProducts.filter(p => p.collection === "SuperStars").length
    },
    {
      name: "Romantic",
      description: "Prendas perfectas para momentos especiales",
      icon: faHeart,
      image: "/images/girlfriend/girlfriendfrontM.png",
      color: "from-pink-400 to-rose-500",
      link: "/products/polos/romantic",
      products: mockProducts.filter(p => p.collection === "Romantic").length
    },
    {
      name: "GYM",
      description: "Rendimiento y estilo para tu entrenamiento",
      icon: faFire,
      image: "/images/gym/gym1.png",
      color: "from-blue-400 to-cyan-500",
      link: "/products/polos/gym",
      products: mockProducts.filter(p => p.collection === "GYM").length
    }
  ];
  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    // Por ahora solo filtramos por búsqueda, la categoría se implementará más adelante
    return matchesSearch;
  });

  const stats = [
    { number: `${mockProducts.length}+`, text: "Productos Únicos", icon: faShirt },
    { number: "3", text: "Categorías", icon: faTags },
    { number: "500+", text: "Clientes Felices", icon: faStar },
    { number: "100%", text: "Personalizable", icon: faHeart }
  ];

  return (
    <main className="bg-yorusito-light min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yorusito-primary via-brand-600 to-yorusito-secondary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <FontAwesomeIcon icon={faShoppingBag} className="text-6xl animate-bounce" />
            <div className="w-px h-16 bg-white/30"></div>
            <FontAwesomeIcon icon={faShirt} className="text-5xl text-yorusito-secondary" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-brand-100 bg-clip-text text-transparent">
            Nuestros Productos
          </h1>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-brand-100 mb-8">
            Descubre nuestra colección completa de 
            <span className="text-yorusito-secondary font-bold"> prendas personalizadas únicas</span>. 
            Desde polos casuales hasta hoodies premium, tenemos el estilo perfecto para ti.
          </p>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <FontAwesomeIcon icon={stat.icon} className="text-2xl mb-2 text-yorusito-secondary" />
                <div className="text-2xl md:text-3xl font-bold">{stat.number}</div>
                <div className="text-sm text-brand-200">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Barra de búsqueda y filtros */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yorusito-primary focus:ring-4 focus:ring-yorusito-primary/20 transition-all"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-yorusito-primary transition-all"
              >
                <option value="all">Todas las categorías</option>
                <option value="polo">Polos</option>
                <option value="hoodie">Hoodies</option>
                <option value="pants">Pantalones</option>
              </select>
              
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-yorusito-primary text-white" : "text-gray-600 hover:text-yorusito-primary"}`}
                >
                  <FontAwesomeIcon icon={faThLarge} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-yorusito-primary text-white" : "text-gray-600 hover:text-yorusito-primary"}`}
                >
                  <FontAwesomeIcon icon={faList} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías Principales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FontAwesomeIcon icon={faTags} className="text-3xl text-yorusito-primary" />
              <h2 className="text-4xl font-bold text-yorusito-neutral">Categorías Principales</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explora nuestras categorías y encuentra el estilo que más se adapta a tu personalidad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link key={category.id} href={category.link}>
                <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="relative h-80">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                    
                    {category.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-bold rounded-full border border-white/30">
                          Popular
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <FontAwesomeIcon icon={category.icon} className="text-2xl" />
                      <h3 className="text-3xl font-bold">{category.name}</h3>
                    </div>
                    <p className="text-white/90 mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        {category.count} productos disponibles
                      </span>
                      <FontAwesomeIcon icon={faArrowRight} className="text-xl group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Colecciones Especiales */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-brand-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FontAwesomeIcon icon={faCrown} className="text-3xl text-yorusito-secondary" />
              <h2 className="text-4xl font-bold text-yorusito-neutral">Colecciones Especiales</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diseños únicos y temáticos que cuentan una historia especial
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Link key={index} href={collection.link}>
                <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-80`}></div>
                    <div className="absolute top-4 left-4">
                      <FontAwesomeIcon icon={collection.icon} className="text-3xl text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-yorusito-neutral mb-2">{collection.name}</h3>
                    <p className="text-gray-600 mb-4">{collection.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-yorusito-primary font-bold">
                        {collection.products} productos
                      </span>
                      <FontAwesomeIcon icon={faArrowRight} className="text-yorusito-primary group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      {filteredProducts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <FontAwesomeIcon icon={faFire} className="text-3xl text-yorusito-secondary" />
                <h2 className="text-4xl font-bold text-yorusito-neutral">Productos Destacados</h2>
              </div>
              <p className="text-xl text-gray-600">
                {filteredProducts.length} productos encontrados
              </p>
            </div>
            
            <div className={`grid gap-8 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "grid-cols-1"
            }`}>
              {filteredProducts.slice(0, 8).map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden ${
                    viewMode === "list" ? "flex" : ""
                  }`}>
                    <div className={`relative overflow-hidden ${viewMode === "list" ? "w-48 h-48" : "h-64"}`}>
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-yorusito-secondary text-white text-sm font-bold rounded-full">
                          Nuevo
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                          <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-sm" />
                          <span className="text-sm font-bold">4.9</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-bold text-yorusito-neutral mb-2 group-hover:text-yorusito-primary transition-colors">
                        {product.name}
                      </h3>                      <p className="text-gray-600 mb-4">
                        Colección {product.collection}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-yorusito-primary">
                          S/ {product.price}
                        </span>
                        <button className="px-4 py-2 bg-gradient-to-r from-yorusito-primary to-yorusito-secondary text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105">
                          Ver Más
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length > 8 && (
              <div className="text-center mt-12">
                <button className="px-8 py-4 bg-gradient-to-r from-yorusito-primary to-yorusito-secondary text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
                  Ver Más Productos
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yorusito-primary via-brand-600 to-yorusito-secondary">
        <div className="max-w-4xl mx-auto text-center px-6">
          <FontAwesomeIcon icon={faShirt} className="text-5xl text-white mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-xl text-brand-100 mb-8">
            Creamos diseños personalizados únicos para ti. ¡Cuéntanos tu idea!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-yorusito-primary font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Solicitar Diseño Personalizado
            </Link>
            <Link 
              href="/faq" 
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Ver FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
