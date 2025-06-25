'use client';

import { useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

// Componente reutilizable para mostrar los niveles educativos
// Este componente se usa para kinder, maternal, primaria, secundaria y preparatoria
export default function NivelClient({
  title,
  areasDesarrollo,
  actividadesDiarias,
  habilidades,
  body,
}: {
  title: string;
  areasDesarrollo: { icon: string; title: string; description: string; color: string }[];
  actividadesDiarias: { hora: string; actividad: string; emoji: string }[];
  habilidades: string[];
  body: string;
}) {
  const [activeTab, setActiveTab] = useState("programa");

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
      {/* Sección principal con el título */}
      <section className="text-white py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">🌟 {title} 🌟</h1>
        <p className="text-xl">Una experiencia educativa única para nuestros estudiantes</p>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Navegación entre secciones */}
        <div className="flex flex-wrap justify-center mb-8">
          {["programa", "actividades", "habilidades", "contenido"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`m-2 px-4 py-2 rounded-lg font-bold text-sm transition duration-200 ${
                activeTab === tab
                  ? "bg-purple-600 text-white shadow"
                  : "bg-white text-purple-600 border border-purple-300 hover:bg-purple-100"
              }`}
            >
              {tab === "programa"
                ? "Áreas de Desarrollo"
                : tab === "actividades"
                ? "Actividades"
                : tab === "habilidades"
                ? "Habilidades"
                : "Contenido"}
            </button>
          ))}
        </div>

        {/* Sección: Áreas de Desarrollo */}
        {activeTab === "programa" && areasDesarrollo?.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6">
            {areasDesarrollo.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className={`text-4xl mb-2`}>{area.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-purple-700">{area.title}</h3>
                <p className="text-sm text-gray-700">{area.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Sección: Actividades Diarias */}
        {activeTab === "actividades" && actividadesDiarias?.length > 0 && (
          <div className="space-y-4">
            {actividadesDiarias.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 flex items-center shadow">
                <div className="text-2xl mr-4">{item.emoji}</div>
                <div className="font-semibold text-purple-700 w-32">{item.hora}</div>
                <div className="text-gray-700">{item.actividad}</div>
              </div>
            ))}
          </div>
        )}

        {/* Sección: Habilidades */}
        {activeTab === "habilidades" && habilidades?.length > 0 && (
          <ul className="list-disc pl-6 bg-white p-6 rounded-xl shadow">
            {habilidades.map((h, i) => (
              <li key={i} className="text-gray-700 mb-1">
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Sección: Markdown (contenido libre desde Decap CMS) */}
        {activeTab === "contenido" && (
          <div className="prose prose-purple max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
            <ReactMarkdown>{body}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
