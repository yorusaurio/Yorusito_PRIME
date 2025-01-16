'use client';

import React from 'react';

const AboutPage = () => {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen px-8 py-12">
      <section className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">Sobre Nosotros</h1>
          <p className="text-lg font-medium max-w-2xl mx-auto">
            Bienvenidos a <span className="text-indigo-600 dark:text-indigo-400">Yorusito</span>, un 
            emprendimiento peruano apasionado por ofrecer <strong>polos personalizados</strong> que 
            reflejan el estilo único de nuestros clientes.
          </p>
        </div>

        {/* Historia */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
            <p className="leading-relaxed">
              Yorusito nació del deseo de proporcionar a las personas una forma de expresar su 
              creatividad y estilo a través de prendas únicas. Desde nuestro inicio en Perú, 
              me he dedicado a construir una marca que priorice la calidad y la originalidad.
            </p>
            <p className="mt-4 leading-relaxed">
              Como fundador y único miembro del equipo, me esfuerzo por garantizar que cada diseño 
              y cada polo reflejen los más altos estándares de excelencia y creatividad.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/about-hero.jpg"
              alt="Sebastián Ramírez trabajando"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Valores */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Mis Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Creatividad</h3>
              <p>
                Transformo ideas en diseños únicos que destacan y representan a cada cliente.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Calidad</h3>
              <p>
                Cada prenda se produce con los mejores materiales y atención al detalle.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Compromiso</h3>
              <p>
                Trabajo arduamente para superar las expectativas y construir relaciones de confianza.
              </p>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Misión</h2>
            <p className="leading-relaxed">
              Inspirar y empoderar a las personas a expresar su individualidad a través de 
              prendas personalizadas que combinan calidad, creatividad y estilo único.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Visión</h2>
            <p className="leading-relaxed">
              Convertirme en un referente de prendas personalizadas en el mercado peruano, 
              expandiendo la marca Yorusito y dejando una huella positiva en cada cliente.
            </p>
          </div>
        </section>

        {/* Equipo */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Acerca de mí</h2>
          <p className="text-lg font-medium max-w-xl mx-auto mb-12">
          Soy Sebastián Ramírez, fundador y CEO de Yorusito. Como emprendedor apasionado, me encargo de cada aspecto del negocio, desde el diseño y la producción hasta la atención al cliente y el marketing. Mi objetivo es ofrecer una experiencia única y productos que realmente conecten con las historias de cada cliente.
          </p>
          <div className="text-center">
            <img
              src="/images/team-member1.jpg"
              alt="Sebastián Ramírez"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">Sebastián Ramírez</h3>
            <p className="text-sm text-gray-500">Fundador y CEO de Yorusito</p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default AboutPage;
