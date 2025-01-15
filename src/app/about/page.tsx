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
              creatividad y estilo a través de prendas únicas. Desde nuestro humilde inicio en 
              Perú, hemos trabajado arduamente para convertirnos en un referente en diseño y 
              personalización de polos.
            </p>
            <p className="mt-4 leading-relaxed">
              Creemos que cada cliente tiene una historia que contar, y nuestras prendas son 
              el lienzo perfecto para hacerlo. Nuestro equipo se dedica a ofrecer calidad, 
              diseño y atención al detalle en cada pieza que entregamos.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/about-hero.jpg"
              alt="Equipo de Yorusito"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Valores */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Nuestros Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Creatividad</h3>
              <p>
                Valoramos la originalidad y nos esforzamos por transformar tus ideas en diseños 
                que destaquen y te representen.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Calidad</h3>
              <p>
                Nos aseguramos de que cada prenda esté hecha con los mejores materiales y 
                estándares de producción.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Compromiso</h3>
              <p>
                Nuestro objetivo es superar las expectativas de nuestros clientes y construir 
                relaciones basadas en confianza y satisfacción.
              </p>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
            <p className="leading-relaxed">
              Inspirar y empoderar a las personas a expresar su individualidad a través de 
              prendas personalizadas que combinan calidad, creatividad y estilo único.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
            <p className="leading-relaxed">
              Convertirnos en el principal referente de prendas personalizadas en el mercado 
              peruano, expandiendo nuestra marca y dejando una huella positiva en nuestra 
              comunidad y clientes.
            </p>
          </div>
        </section>

        {/* Equipo */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Nuestro Equipo</h2>
          <p className="text-lg font-medium max-w-xl mx-auto mb-12">
            Detrás de cada polo personalizado hay un equipo talentoso y dedicado que trabaja 
            arduamente para garantizar que cada cliente reciba un producto excepcional.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img
                src="/images/team-member1.jpg"
                alt="Miembro del Equipo"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">Juan Pérez</h3>
              <p className="text-sm text-gray-500">Diseñador Principal</p>
            </div>
            <div className="text-center">
              <img
                src="/images/team-member2.jpg"
                alt="Miembro del Equipo"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">Ana López</h3>
              <p className="text-sm text-gray-500">Gerente de Producción</p>
            </div>
            <div className="text-center">
              <img
                src="/images/team-member3.jpg"
                alt="Miembro del Equipo"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">Carlos Ramos</h3>
              <p className="text-sm text-gray-500">Atención al Cliente</p>
            </div>
            <div className="text-center">
              <img
                src="/images/team-member4.jpg"
                alt="Miembro del Equipo"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">Lucía Fernández</h3>
              <p className="text-sm text-gray-500">Marketing y Redes</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default AboutPage;
