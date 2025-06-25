'use client';

/* --------------------------------------------------------------------
   MaternalClient – Renderiza TODO el contenido del nivel Maternal
   --------------------------------------------------------------------
   👉  Todos los datos llegan como props desde maternal.md:
       - heroTitle, heroSubtitle
       - tabs
       - metodo (intro1, intro2, principios)
       - beneficios
       - actividades (+ galeria)
       - horarios, alimentacion, descanso
       - instalaciones (aulas, seguridad, especiales, higiene…)
       - testimonios
       - cta
       - body (markdown libre, opcional)
   ------------------------------------------------------------------ */

import { useState } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export type MaternalProps = {
  heroTitle: string;
  heroSubtitle?: string;
  tabs: { metodo: string; actividades: string; horarios: string; instalaciones: string };
  metodo: { intro1: string; intro2?: string; principios: string[] };
  beneficios: { icon: string; title: string; description: string }[];
  actividades: { categoria: string; items: string[] }[];
  galeria?: { emoji: string; caption: string }[];
  horarios: { hora: string; actividad: string }[];
  alimentacion?: string[];
  descanso?: string[];
  instalaciones: Record<
    string,
    { title: string; color: string; items: string[] }
  >;
  testimonios?: {
    nombre: string;
    edad_hijo: string;
    testimonio: string;
    foto: string;
  }[];
  cta: {
    titulo: string;
    texto: string;
    botones: { texto: string; link: string; estilo?: string }[];
  };
  body?: string;
};

export default function MaternalClient(props: MaternalProps) {
  /* Tab activo; arranco con el primero definido en tabs */
  const [activeTab, setActiveTab] = useState<keyof MaternalProps['tabs']>('metodo');

  /* -------------------------------------------------- */
  /* Utilidades para colores dinámicos en instalaciones */
  /* -------------------------------------------------- */
  const colorMap: Record<string, { text: string; bullet: string }> = {
    blue: { text: 'text-blue-600', bullet: 'bg-blue-500' },
    green: { text: 'text-green-600', bullet: 'bg-green-500' },
    purple: { text: 'text-purple-600', bullet: 'bg-purple-500' },
    orange: { text: 'text-orange-600', bullet: 'bg-orange-500' },
  };
  /* Si usas más colores añade sus mapeos arriba y _safelistea_
     `text-*-600` y `bg-*-500` en tailwind.config.js */

  /* --------------- UI --------------- */
  return (
    <div className="min-h-screen bg-gray-50">
      {/* --- Hero --- */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{props.heroTitle}</h1>
            {props.heroSubtitle && (
              <p className="text-xl mb-8 leading-relaxed">{props.heroSubtitle}</p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {props.cta.botones.map((b, i) => (
                <Link key={i} href={b.link}>
                  <span
                    className={
                      b.estilo === 'secondary'
                        ? 'bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 cursor-pointer'
                        : 'bg-white text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer'
                    }
                  >
                    {b.texto}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* --- Tabs Navegación --- */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-lg shadow-md p-2">
          {(Object.keys(props.tabs) as (keyof MaternalProps['tabs'])[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
                activeTab === key
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {props.tabs[key]}
            </button>
          ))}
        </div>

        {/* --- Contenido por tab --- */}
        {activeTab === 'metodo' && (
          <div className="space-y-12">
            {/* ¿Qué es Montessori? */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                ¿Qué es el Método Montessori?
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {props.metodo.intro1}
                  </p>
                  {props.metodo.intro2 && (
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {props.metodo.intro2}
                    </p>
                  )}
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">
                    Principios fundamentales:
                  </h3>
                  <ul className="space-y-3">
                    {props.metodo.principios.map((p) => (
                      <li key={p} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Beneficios */}
            <section>
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                Beneficios del Método Montessori
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {props.beneficios.map((b) => (
                  <div
                    key={b.title}
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
                  >
                    <div className="text-4xl mb-4 text-center">{b.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-center text-gray-800">
                      {b.title}
                    </h3>
                    <p className="text-gray-600 text-center">{b.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'actividades' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Actividades Montessori por Área
            </h2>

            {/* Áreas + lista de items */}
            <div className="grid md:grid-cols-2 gap-8">
              {props.actividades.map((area) => (
                <div key={area.categoria} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">{area.categoria}</h3>
                  <ul className="space-y-3">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Galería de actividades (si existe) */}
            {props.galeria && props.galeria.length > 0 && (
              <section className="bg-white rounded-xl shadow-lg p-8 mt-12">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Nuestros pequeños en acción
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {props.galeria.map((g, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-8 text-center"
                    >
                      <div className="text-6xl mb-4">{g.emoji}</div>
                      <p className="text-gray-700">{g.caption}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Desarrollo integral en cada momento
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {activeTab === 'horarios' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Rutina Diaria
            </h2>

            {/* Tabla de horario */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-6">
                <h3 className="text-xl font-bold">Horario típico - Lunes a Viernes</h3>
                <p className="text-blue-100">
                  Cada día está cuidadosamente estructurado para el desarrollo integral
                </p>
              </div>
              <div className="p-6">
                {props.horarios.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center py-4 ${
                      idx !== props.horarios.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <div className="w-24 text-sm font-medium text-blue-600 mr-6">
                      {item.hora}
                    </div>
                    <div className="flex-1">
                      <span className="text-gray-800">{item.actividad}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alimentación y Descanso */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {props.alimentacion && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-green-600">Alimentación</h3>
                  <ul className="space-y-2 text-gray-700">
                    {props.alimentacion.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                </div>
              )}
              {props.descanso && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-purple-600">Descanso</h3>
                  <ul className="space-y-2 text-gray-700">
                    {props.descanso.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'instalaciones' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Nuestras Instalaciones
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.values(props.instalaciones).map((block) => (
                <div key={block.title} className="bg-white rounded-xl shadow-lg p-6">
                  <h3
                    className={`text-2xl font-bold mb-4 ${
                      colorMap[block.color]?.text || 'text-blue-600'
                    }`}
                  >
                    {block.title}
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {block.items.map((it) => (
                      <li key={it} className="flex items-center">
                        <span
                          className={`w-2 h-2 ${
                            colorMap[block.color]?.bullet || 'bg-blue-500'
                          } rounded-full mr-3`}
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- Testimonios --- */}
        {props.testimonios && props.testimonios.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Lo que dicen nuestros padres
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {props.testimonios.map((t, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-2xl">
                      {t.foto}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{t.nombre}</h4>
                      <p className="text-gray-500 text-sm">Hijo de {t.edad_hijo}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{t.testimonio}"</p>
                  <div className="flex mt-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* --- CTA final --- */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white p-12 text-center mt-16">
          <h2 className="text-3xl font-bold mb-6">{props.cta.titulo}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{props.cta.texto}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {props.cta.botones.map((b, i) => (
              <Link key={i} href={b.link}>
                <span
                  className={
                    b.estilo === 'secondary'
                      ? 'bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 cursor-pointer'
                      : 'bg-white text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer'
                  }
                >
                  {b.texto}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* --- Markdown libre (opcional) --- */}
        {props.body && (
          <section className="prose lg:prose-xl max-w-4xl mx-auto my-12">
            <ReactMarkdown>{props.body}</ReactMarkdown>
          </section>
        )}
      </div>
    </div>
  );
}
