'use client';

import { useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function KinderClient({
  areasDesarrollo,
  actividadesDiarias,
  habilidades,
  body,
}: {
  areasDesarrollo: {
    icon: string;
    title: string;
    description: string;
    color: string;
  }[];
  actividadesDiarias: {
    hora: string;
    actividad: string;
    emoji: string;
  }[];
  habilidades: string[];
  body: string;
}) {
  const [activeTab, setActiveTab] = useState('programa');

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl animate-bounce">🌈</div>
          <div className="absolute top-20 right-20 text-4xl animate-pulse">⭐</div>
          <div className="absolute bottom-20 left-20 text-5xl animate-bounce delay-75">🎈</div>
          <div className="absolute bottom-10 right-10 text-4xl animate-pulse delay-150">🦋</div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 text-shadow-lg">
              🌟 Kinder Piaget 🌟
            </h1>
            <p className="text-2xl mb-8 leading-relaxed">
              ¡Un mundo mágico de aprendizaje para niños de 3 a 6 años!
              Donde cada día es una nueva aventura llena de descubrimientos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <span className="bg-yellow-400 text-purple-800 font-bold py-4 px-8 rounded-full text-lg hover:bg-yellow-300 transition duration-300 cursor-pointer shadow-lg transform hover:scale-105">
                  🎯 ¡Visítanos!
                </span>
              </Link>
              <Link href="/admisiones">
                <span className="bg-white bg-opacity-20 backdrop-blur border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-purple-800 transition duration-300 cursor-pointer">
                  📝 Inscripciones
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-2xl shadow-xl p-4">
          {[
            { id: 'programa', label: '🎪 Nuestro Programa' },
            { id: 'actividades', label: '🎮 Actividades' },
            { id: 'habilidades', label: '🌟 Lo que aprenderán' },
            { id: 'instalaciones', label: '🏰 Nuestro Castillo' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-bold transition duration-300 m-1 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white transform scale-105'
                  : 'text-purple-600 hover:text-purple-800 hover:bg-purple-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenido por pestaña */}
        {activeTab === 'programa' && (
          <div className="space-y-12">
            <section className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">🌈 Áreas de Desarrollo</h2>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Nuestro programa integral desarrolla todas las áreas importantes para el crecimiento de tu pequeño
              </p>
            </section>

            <div className="grid md:grid-cols-3 gap-6">
              {areasDesarrollo.map((area, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
                  <div className={`h-32 bg-gradient-to-r ${area.color} flex items-center justify-center`}>
                    <span className="text-6xl">{area.icon}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{area.title}</h3>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'actividades' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center text-white mb-12">🎮 Un Día Lleno de Diversión</h2>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
                <h3 className="text-2xl font-bold flex items-center">
                  <span className="mr-3">⏰</span> Horario Diario
                </h3>
                <p className="text-purple-100">Cada momento es una oportunidad de aprender jugando</p>
              </div>
              <div className="p-6">
                {actividadesDiarias.map((item, index) => (
                  <div key={index} className={`flex items-center py-4 ${index !== actividadesDiarias.length - 1 ? 'border-b border-gray-200' : ''}`}>
                    <div className="w-20 text-lg mr-4">{item.emoji}</div>
                    <div className="w-32 text-sm font-medium text-purple-600 mr-6">
                      {item.hora}
                    </div>
                    <div className="flex-1 text-gray-800">{item.actividad}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'habilidades' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center text-white mb-12">🌟 Habilidades que Desarrollarán</h2>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-purple-600">Al finalizar Kinder, tu hijo podrá:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {habilidades.map((habilidad, index) => (
                  <div key={index} className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <span className="text-2xl mr-4">✅</span>
                    <span className="text-gray-700 font-medium">{habilidad}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'instalaciones' && (
          <div className="text-white text-center py-12">
            <h2 className="text-4xl font-bold">🏰 Nuestro Castillo Mágico</h2>
            <p className="text-xl text-purple-100 mt-4">(Aquí puedes agregar otra sección si decides controlarla por CMS más adelante)</p>
          </div>
        )}

        {/* Markdown del CMS */}
        {body && (
          <div className="prose prose-purple max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-xl mt-12">
            <ReactMarkdown>{body}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
