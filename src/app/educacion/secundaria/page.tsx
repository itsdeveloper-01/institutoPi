'use client'

import Link from "next/link";
import { useState } from "react";

export default function SecundariaPage() {
  const [activeTab, setActiveTab] = useState('programa');

  const materias = [
    {
      categoria: "Ciencias",
      materias: [
        { nombre: "Biología", descripcion: "Estudio de la vida y los ecosistemas", nivel: "Avanzado" },
        { nombre: "Física", descripcion: "Mecánica, energía y fenómenos naturales", nivel: "Intermedio" },
        { nombre: "Química", descripcion: "Elementos, compuestos y reacciones", nivel: "Avanzado" }
      ],
      color: "from-green-500 to-teal-600",
      icon: "🧬"
    },
    {
      categoria: "Humanidades",
      materias: [
        { nombre: "Español", descripcion: "Literatura, redacción y comunicación", nivel: "Avanzado" },
        { nombre: "Historia", descripcion: "México y el mundo contemporáneo", nivel: "Intermedio" },
        { nombre: "Geografía", descripcion: "Mundo globalizado y sustentabilidad", nivel: "Intermedio" }
      ],
      color: "from-blue-500 to-purple-600",
      icon: "📚"
    },
    {
      categoria: "Matemáticas",
      materias: [
        { nombre: "Álgebra", descripcion: "Ecuaciones y funciones lineales", nivel: "Avanzado" },
        { nombre: "Geometría", descripcion: "Figuras, volúmenes y trigonometría", nivel: "Avanzado" },
        { nombre: "Estadística", descripcion: "Análisis de datos y probabilidad", nivel: "Intermedio" }
      ],
      color: "from-orange-500 to-red-600",
      icon: "📊"
    },
    {
      categoria: "Idiomas y Tecnología",
      materias: [
        { nombre: "Inglés", descripcion: "Preparación para certificaciones internacionales", nivel: "Bilingüe" },
        { nombre: "Francés", descripcion: "Segundo idioma extranjero opcional", nivel: "Básico" },
        { nombre: "Informática", descripcion: "Programación, diseño y herramientas digitales", nivel: "Avanzado" }
      ],
      color: "from-indigo-500 to-blue-600",
      icon: "💻"
    }
  ];

  const perfilEgreso = [
    {
      area: "Académico",
      habilidades: [
        "Pensamiento crítico y analítico",
        "Resolución de problemas complejos",
        "Comunicación efectiva oral y escrita",
        "Competencia en idiomas extranjeros"
      ],
      icon: "🎓",
      color: "bg-blue-500"
    },
    {
      area: "Personal",
      habilidades: [
        "Autoestima y confianza",
        "Inteligencia emocional",
        "Autonomía y responsabilidad",
        "Resiliencia ante desafíos"
      ],
      icon: "💪",
      color: "bg-green-500"
    },
    {
      area: "Social",
      habilidades: [
        "Liderazgo y trabajo en equipo",
        "Empatía y respeto a la diversidad",
        "Compromiso social y cívico",
        "Habilidades de negociación"
      ],
      icon: "🤝",
      color: "bg-purple-500"
    },
    {
      area: "Tecnológico",
      habilidades: [
        "Alfabetización digital",
        "Programación básica",
        "Uso ético de la tecnología",
        "Innovación y creatividad"
      ],
      icon: "🚀",
      color: "bg-orange-500"
    }
  ];

  const proyectosEspeciales = [
    {
      nombre: "Feria de Ciencias",
      descripcion: "Investigación científica aplicada a problemas reales",
      participantes: "Todos los grados",
      duracion: "Semestre completo",
      icon: "🔬"
    },
    {
      nombre: "Modelo de Naciones Unidas",
      descripcion: "Simulacro diplomático internacional",
      participantes: "2° y 3° grado",
      duracion: "Todo el año",
      icon: "🌍"
    },
    {
      nombre: "Empresa Estudiantil",
      descripcion: "Creación y gestión de negocios reales",
      participantes: "3° grado",
      duracion: "Año escolar",
      icon: "💼"
    },
    {
      nombre: "Servicio Social",
      descripcion: "Proyectos de impacto comunitario",
      participantes: "Todos los grados",
      duracion: "40 horas anuales",
      icon: "❤️"
    }
  ];

  const talleres = [
    { nombre: "Robótica Avanzada", tipo: "STEM", cupos: "20 estudiantes" },
    { nombre: "Debate y Oratoria", tipo: "Comunicación", cupos: "15 estudiantes" },
    { nombre: "Fotografía Digital", tipo: "Arte", cupos: "12 estudiantes" },
    { nombre: "Programación Web", tipo: "Tecnología", cupos: "18 estudiantes" },
    { nombre: "Teatro Musical", tipo: "Arte", cupos: "25 estudiantes" },
    { nombre: "Emprendimiento", tipo: "Negocios", cupos: "20 estudiantes" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Hero Section */}
      <section className="relative text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Secundaria Piaget
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-200">
                  Donde los adolescentes descubren su potencial, desarrollan su identidad 
                  y se preparan para liderar el futuro
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contacto">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition duration-300 cursor-pointer">
                      Descubre más
                    </span>
                  </Link>
                  <Link href="/admisiones">
                    <span className="bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold py-4 px-8 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition duration-300 cursor-pointer">
                      Proceso de admisión
                    </span>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400">3</div>
                  <div className="text-sm text-gray-300">Años de formación</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400">15</div>
                  <div className="text-sm text-gray-300">Materias especializadas</div>
                </div>
                <div className="bg-gradient-to-r from-pink-500/20 to-red-500/20 backdrop-blur rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-pink-400">6</div>
                  <div className="text-sm text-gray-300">Talleres especializados</div>
                </div>
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-red-400">100%</div>
                  <div className="text-sm text-gray-300">Preparación para bachillerato</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Navegación */}
        <div className="flex flex-wrap justify-center mb-12 bg-white/10 backdrop-blur rounded-xl p-2">
          {[
            { id: 'programa', label: 'Plan Académico' },
            { id: 'perfil', label: 'Perfil de Egreso' },
            { id: 'proyectos', label: 'Proyectos Especiales' },
            { id: 'instalaciones', label: 'Campus Moderno' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition duration-300 m-1 ${
                activeTab === tab.id 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenido */}
        {activeTab === 'programa' && (
          <div className="space-y-12">
            <section className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Programa Académico de Vanguardia</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Un currículo diseñado para desarrollar pensadores críticos, innovadores 
                y ciudadanos globales preparados para los desafíos del siglo XXI.
              </p>
            </section>

            <div className="grid lg:grid-cols-2 gap-8">
              {materias.map((categoria, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-xl overflow-hidden">
                  <div className={`bg-gradient-to-r ${categoria.color} p-6`}>
                    <div className="flex items-center">
                      <span className="text-4xl mr-4">{categoria.icon}</span>
                      <h3 className="text-2xl font-bold text-white">{categoria.categoria}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    {categoria.materias.map((materia, materiaIndex) => (
                      <div key={materiaIndex} className="mb-4 last:mb-0">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-white">{materia.nombre}</h4>
                          <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">
                            {materia.nivel}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{materia.descripcion}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <section className="bg-white/5 backdrop-blur rounded-xl p-8">
              <h3 className="text-3xl font-bold text-center mb-8 text-white">Metodología Innovadora</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🧩</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-cyan-400">Aprendizaje Basado en Proyectos</h4>
                  <p className="text-gray-300">Los estudiantes resuelven problemas reales aplicando conocimientos interdisciplinarios.</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-purple-400">Personalización</h4>
                  <p className="text-gray-300">Rutas de aprendizaje adaptadas a los intereses y fortalezas de cada estudiante.</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🌐</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-pink-400">Perspectiva Global</h4>
                  <p className="text-gray-300">Conexión con instituciones internacionales y proyectos colaborativos globales.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-3xl font-bold text-center mb-8 text-white">Talleres Especializados</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {talleres.map((taller, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/20 transition duration-300">
                    <h4 className="text-lg font-bold mb-2 text-white">{taller.nombre}</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-cyan-400 text-sm">{taller.tipo}</span>
                      <span className="text-gray-300 text-xs">{taller.cupos}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'perfil' && (
          <div className="space-y-12">
            <section className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Perfil del Egresado</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Nuestros graduados están preparados para enfrentar los retos del bachillerato 
                y convertirse en líderes transformadores de su comunidad.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
              {perfilEgreso.map((area, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className={`${area.color} rounded-full w-16 h-16 flex items-center justify-center mr-4`}>
                      <span className="text-3xl">{area.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Desarrollo {area.area}</h3>
                  </div>
                  <ul className="space-y-3">
                    {area.habilidades.map((habilidad, habilidadIndex) => (
                      <li key={habilidadIndex} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                        {habilidad}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <section className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur rounded-xl p-8">
              <h3 className="text-3xl font-bold text-center mb-8 text-white">Preparación para Bachillerato</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-3">📈</div>
                  <h4 className="font-bold text-cyan-400 mb-2">Excelencia Académica</h4>
                  <p className="text-gray-300 text-sm">Promedio superior a 9.0 en exámenes de ingreso</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🌟</div>
                  <h4 className="font-bold text-purple-400 mb-2">Habilidades Blandas</h4>
                  <p className="text-gray-300 text-sm">Liderazgo, comunicación y trabajo en equipo</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🎯</div>
                  <h4 className="font-bold text-pink-400 mb-2">Orientación Vocacional</h4>
                  <p className="text-gray-300 text-sm">Claridad en la elección de carrera profesional</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🏆</div>
                  <h4 className="font-bold text-red-400 mb-2">Competitividad</h4>
                  <p className="text-gray-300 text-sm">Preparación para becas y programas especiales</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'proyectos' && (
          <div className="space-y-12">
            <section className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Proyectos que Transforman</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Experiencias de aprendizaje significativas que conectan el conocimiento 
                con la realidad y forman ciudadanos comprometidos.
              </p>
            </section>

            <div className="grid lg:grid-cols-2 gap-8">
              {proyectosEspeciales.map((proyecto, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-8 hover:bg-white/20 transition duration-300">
                  <div className="flex items-center mb-6">
                    <span className="text-5xl mr-4">{proyecto.icon}</span>
                    <h3 className="text-2xl font-bold text-white">{proyecto.nombre}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{proyecto.descripcion}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-cyan-400 text-sm font-medium">Participantes</div>
                      <div className="text-white">{proyecto.participantes}</div>
                    </div>
                    <div>
                      <div className="text-purple-400 text-sm font-medium">Duración</div>
                      <div className="text-white">{proyecto.duracion}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <section className="bg-white/5 backdrop-blur rounded-xl p-8">
              <h3 className="text-3xl font-bold text-center mb-8 text-white">Impacto y Reconocimientos</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl mb-4">🏅</div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                  <div className="text-gray-300">Premios nacionales en ciencias</div>
                </div>
                <div>
                  <div className="text-5xl mb-4">🌍</div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">8</div>
                  <div className="text-gray-300">Países en intercambios</div>
                </div>
                <div>
                  <div className="text-5xl mb-4">💰</div>
                  <div className="text-3xl font-bold text-pink-400 mb-2">$500K+</div>
                  <div className="text-gray-300">Recaudado en empresas estudiantiles</div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'instalaciones' && (
          <div className="space-y-12">
            <section className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Campus de Última Generación</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Espacios diseñados para inspirar creatividad, colaboración e innovación 
                en cada rincón de nuestro campus.
              </p>
            </section>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center">
                  <span className="mr-2">🔬</span> Laboratorios Especializados
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Lab. de Biotecnología</li>
                  <li>• Lab. de Física Avanzada</li>
                  <li>• Lab. de Química Orgánica</li>
                  <li>• Planetario Digital</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center">
                  <span className="mr-2">💻</span> Tecnología Integrada
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Aulas con realidad virtual</li>
                  <li>• Lab. de robótica avanzada</li>
                  <li>• Estudio de podcasting</li>
                  <li>• Maker Space equipado</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-pink-400 flex items-center">
                  <span className="mr-2">🎭</span> Espacios Creativos
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Teatro con 300 butacas</li>
                  <li>• Estudios de música</li>
                  <li>• Talleres de arte</li>
                  <li>• Sala de debate</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-red-400 flex items-center">
                  <span className="mr-2">📚</span> Centro de Recursos
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Biblioteca digital</li>
                  <li>• Salas de estudio colaborativo</li>
                  <li>• Centro de tutorías</li>
                  <li>• Recursos multimedia</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-orange-400 flex items-center">
                  <span className="mr-2">🏃</span> Instalaciones Deportivas
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Gimnasio multicanchas</li>
                  <li>• Piscina semi-olímpica</li>
                  <li>• Pista de atletismo</li>
                  <li>• Área de crossfit</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center">
                  <span className="mr-2">🌱</span> Espacios Sustentables
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Jardín vertical inteligente</li>
                  <li>• Huerto hidropónico</li>
                  <li>• Paneles solares</li>
                  <li>• Sistema de reciclaje</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* CTA final */}
        <section className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur rounded-xl p-12 text-center mt-16">
          <h2 className="text-4xl font-bold mb-6 text-white">Tu futuro comienza aquí</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Únete a una generación de jóvenes innovadores que están cambiando el mundo. 
            En Secundaria Piaget, no solo preparamos estudiantes, formamos líderes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition duration-300 cursor-pointer">
                Agenda tu visita
              </span>
            </Link>
            <Link href="/admisiones">
              <span className="bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold py-4 px-8 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition duration-300 cursor-pointer">
                Proceso de admisión
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
