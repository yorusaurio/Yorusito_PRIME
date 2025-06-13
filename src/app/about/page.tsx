'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShirt, 
  faHeart, 
  faBullseye, 
  faEye, 
  faStar, 
  faAward, 
  faUsers, 
  faLightbulb,
  faRocket,
  faHandshake,
  faShieldAlt
} from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
  const valores = [
    {
      icon: faLightbulb,
      title: "Creatividad",
      description: "Transformamos ideas en diseños únicos que destacan y representan la personalidad de cada cliente.",
      color: "text-yorusito-secondary"
    },
    {
      icon: faAward,
      title: "Calidad Premium",
      description: "Cada prenda se produce con los mejores materiales y la máxima atención al detalle.",
      color: "text-yorusito-primary"
    },
    {
      icon: faHandshake,
      title: "Compromiso",
      description: "Trabajamos incansablemente para superar expectativas y construir relaciones de confianza duraderas.",
      color: "text-yorusito-accent"
    },
    {
      icon: faHeart,
      title: "Pasión",
      description: "Cada diseño está hecho con amor y dedicación, reflejando nuestra pasión por la moda personalizada.",
      color: "text-red-500"
    },
    {
      icon: faRocket,
      title: "Innovación",
      description: "Constantemente exploramos nuevas técnicas y tendencias para ofrecer productos únicos.",
      color: "text-purple-500"
    },
    {
      icon: faShieldAlt,
      title: "Confianza",
      description: "Construimos relaciones sólidas basadas en transparencia, honestidad y cumplimiento de promesas.",
      color: "text-green-500"
    }
  ];

  const estadisticas = [
    { numero: "500+", texto: "Clientes Satisfechos", icon: faUsers },
    { numero: "1000+", texto: "Prendas Personalizadas", icon: faShirt },
    { numero: "50+", texto: "Diseños Únicos", icon: faStar },
    { numero: "100%", texto: "Satisfacción Garantizada", icon: faAward }
  ];

  return (
    <main className="bg-yorusito-light min-h-screen">
      {/* Hero Section con gradiente */}
      <section className="relative bg-gradient-to-br from-yorusito-primary via-brand-600 to-yorusito-secondary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <FontAwesomeIcon icon={faShirt} className="text-6xl animate-pulse" />
            <div className="w-px h-16 bg-white/30"></div>
            <FontAwesomeIcon icon={faHeart} className="text-5xl text-yorusito-secondary animate-bounce" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-brand-100 bg-clip-text text-transparent">
            Sobre Yorusito
          </h1>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-brand-100">
            Somos un emprendimiento peruano apasionado por crear 
            <span className="text-yorusito-secondary font-bold"> prendas personalizadas únicas </span>
            que reflejan el estilo y personalidad de nuestros clientes.
          </p>

          {/* Estadísticas */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {estadisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <FontAwesomeIcon icon={stat.icon} className="text-3xl mb-3 text-yorusito-secondary" />
                <div className="text-3xl md:text-4xl font-bold">{stat.numero}</div>
                <div className="text-sm md:text-base text-brand-200">{stat.texto}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <FontAwesomeIcon icon={faRocket} className="text-3xl text-yorusito-primary" />
                <h2 className="text-4xl font-bold text-yorusito-neutral">Nuestra Historia</h2>
              </div>
              
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p className="text-lg leading-relaxed">
                  Yorusito nació del sueño de democratizar la moda personalizada en el Perú. 
                  Todo comenzó con una simple idea: <span className="text-yorusito-primary font-semibold">
                  ¿por qué no podemos todos tener prendas que realmente nos representen?</span>
                </p>
                
                <p className="text-lg leading-relaxed">
                  Desde nuestros humildes inicios, nos hemos dedicado a construir una marca 
                  que priorice la calidad, la originalidad y, sobre todo, la satisfacción 
                  de nuestros clientes. Cada diseño cuenta una historia única.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Hoy, Yorusito es más que una marca de ropa; es una comunidad de personas 
                  que valoran la expresión personal y la calidad artesanal en cada prenda.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-yorusito-primary/10 px-4 py-2 rounded-full">
                  <span className="text-yorusito-primary font-semibold">Fundado en 2023</span>
                </div>
                <div className="bg-yorusito-secondary/10 px-4 py-2 rounded-full">
                  <span className="text-yorusito-secondary font-semibold">100% Peruano</span>
                </div>
                <div className="bg-yorusito-accent/10 px-4 py-2 rounded-full">
                  <span className="text-yorusito-accent font-semibold">Calidad Premium</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-yorusito-primary to-yorusito-secondary rounded-2xl blur opacity-20"></div>
                <img
                  src="/images/about-hero.jpg"
                  alt="Historia de Yorusito"
                  className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-brand-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FontAwesomeIcon icon={faStar} className="text-3xl text-yorusito-secondary" />
              <h2 className="text-4xl font-bold text-yorusito-neutral">Nuestros Valores</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y cada diseño que creamos en Yorusito
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-6 group-hover:scale-110 transition-transform ${valor.color}`}>
                    <FontAwesomeIcon icon={valor.icon} className="text-2xl" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-yorusito-neutral mb-4">{valor.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{valor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gradient-to-br from-yorusito-primary to-brand-600 p-10 rounded-3xl text-white">
              <div className="flex items-center gap-4 mb-6">
                <FontAwesomeIcon icon={faBullseye} className="text-4xl text-yorusito-secondary" />
                <h2 className="text-3xl font-bold">Nuestra Misión</h2>
              </div>
              <p className="text-lg leading-relaxed text-brand-100">
                Inspirar y empoderar a las personas a expresar su individualidad única 
                a través de prendas personalizadas que combinan calidad excepcional, 
                creatividad sin límites y un estilo auténtico que los represente.
              </p>
              <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <p className="text-sm text-brand-200">
                  "Cada prenda que creamos es una extensión de la personalidad de quien la porta"
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yorusito-secondary to-pink-600 p-10 rounded-3xl text-white">
              <div className="flex items-center gap-4 mb-6">
                <FontAwesomeIcon icon={faEye} className="text-4xl text-yellow-300" />
                <h2 className="text-3xl font-bold">Nuestra Visión</h2>
              </div>
              <p className="text-lg leading-relaxed text-pink-100">
                Convertirnos en el referente líder de prendas personalizadas en el mercado 
                peruano y latinoamericano, expandiendo la marca Yorusito y dejando una 
                huella positiva en cada cliente y comunidad que tocamos.
              </p>
              <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <p className="text-sm text-pink-200">
                  "Soñamos con un mundo donde cada persona pueda expresar su autenticidad"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo (Fundador) */}
      <section className="py-20 bg-gradient-to-br from-yorusito-neutral to-yorusito-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FontAwesomeIcon icon={faUsers} className="text-3xl text-yorusito-secondary" />
              <h2 className="text-4xl font-bold">Conoce al Fundador</h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              La mente creativa y el corazón apasionado detrás de cada diseño de Yorusito
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20">
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-yorusito-primary to-yorusito-secondary rounded-full blur opacity-50"></div>
              <img
                src="/images/team-member1.jpg"
                alt="Sebastián Ramírez - Fundador de Yorusito"
                className="relative w-32 h-32 rounded-full object-cover mx-auto border-4 border-white/20"
              />
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Sebastián Ramírez</h3>
            <p className="text-yorusito-secondary font-semibold mb-6">Fundador y CEO de Yorusito</p>
            
            <p className="text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto">
              Como emprendedor apasionado y visionario, me encargo de cada aspecto del negocio, 
              desde el diseño conceptual y la producción artesanal hasta la atención personalizada 
              al cliente y las estrategias de crecimiento. Mi objetivo es crear una experiencia 
              única que conecte profundamente con las historias y sueños de cada cliente.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-yorusito-primary/20 text-yorusito-secondary rounded-full text-sm font-semibold">
                Diseñador Creativo
              </span>
              <span className="px-4 py-2 bg-yorusito-secondary/20 text-pink-300 rounded-full text-sm font-semibold">
                Emprendedor Visionario
              </span>
              <span className="px-4 py-2 bg-yorusito-accent/20 text-green-300 rounded-full text-sm font-semibold">
                Especialista en Personalización
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yorusito-primary via-brand-600 to-yorusito-secondary">
        <div className="max-w-4xl mx-auto text-center px-6">
          <FontAwesomeIcon icon={faShirt} className="text-5xl text-white mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para crear tu prenda única?
          </h2>
          <p className="text-xl text-brand-100 mb-8">
            Únete a nuestra comunidad y descubre el poder de la moda personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/products" 
              className="px-8 py-4 bg-white text-yorusito-primary font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Ver Catálogo
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
