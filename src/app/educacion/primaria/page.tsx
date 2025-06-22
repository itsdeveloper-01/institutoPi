'use client'

import Link from "next/link";
import { useState } from "react";

export default function PrimariaPage() {
  const [activeTab, setActiveTab] = useState('programa');

  const materias = [
    {
      icon: "📚",
      title: "Español",
      description: "Desarrollo de habilidades de lectura, escritura y comunicación oral",
      nivel: "Avanzado",
      color: "bg-blue-500"
    },
    {
      icon: "🔢",
      title: "Matemáticas",
      description: "Aritmética, geometría, fracciones y resolución de problemas",
      nivel: "Avanzado",
      color: "bg-green-500"
    },
    {
      icon: "🌍",
      title: "Ciencias Naturales",
      description: "Biología, física, química básica y método científico",
      nivel: "Intermedio",
      color: "bg-purple-500"
    },
    {
      icon: "🗺️",
      title: "Geografía e Historia",
      description: "México, el mundo, culturas y líneas del tiempo",
      nivel: "Intermedio",
      color: "bg-orange-500"
    },
    {
      icon: "🇺🇸",
      title: "Inglés",
      description: "Conversación, gramática y preparación para certificaciones",
      nivel: "Bilingüe",
      color: "bg-red-500"
    },
    {
      icon: "💻",
      title: "Computación",
      description: "Herramientas digitales, programación básica y robótica",
      nivel: "Tecnológico",
      color: "bg-indigo-500"
    },
    {
      icon: "🎨",
      title: "Educación Artística",
      description: "Artes visuales, música y expresión corporal",
      nivel: "Creativo",
      color: "bg-pink-500"
    },
    {
      icon: "⚽",
      title: "Educación Física",
      description: "Deportes, coordinación motriz y trabajo en equipo",
      nivel: "Físico",
      color: "bg-teal-500"
    }
  ];

  const grados = [
    {
      grado: "1° Primaria",
      edad: "6-7 años",
      enfoque: "Bases sólidas en lectoescritura y matemáticas básicas",
      logros: ["Lee textos simples", "Suma y resta", "Sigue instrucciones complejas"]
    },
    {
      grado: "2° Primaria", 
      edad: "7-8 años",
      enfoque: "Consolidación de habilidades fundamentales",
      logros: ["Comprensión lectora", "Multiplicación", "Trabajo colaborativo"]
    },
    {
      grado: "3° Primaria",
      edad: "8-9 años", 
      enfoque: "Desarrollo del pensamiento crítico",
      logros: ["Redacción básica", "División", "Investigación simple"]
    },
    {
      grado: "4° Primaria",
      edad: "9-10 años",
      enfoque: "Autonomía en el aprendizaje",
      logros: ["Ensayos cortos", "Fracciones", "Proyectos científicos"]
    },
    {
      grado: "5° Primaria",
      edad: "10-11 años",
      enfoque: "Preparación para secundaria",
      logros: ["Análisis literario", "Decimales", "Presentaciones orales"]
    },
    {
      grado: "6° Primaria",
      edad: "11-12 años",
      enfoque: "Liderazgo y responsabilidad",
      logros: ["Textos argumentativos", "Geometría avanzada", "Trabajo de investigación"]
    }
  ];

  const horarioSemanal = [
    { materia: "Español", horas: "6 hrs/semana", color: "bg-blue-100 text-blue-800" },
    { materia: "Matemáticas", horas: "6 hrs/semana", color: "bg-green-100 text-green-800" },
    { materia: "Ciencias Naturales", horas: "3 hrs/semana", color: "bg-purple-100 text-purple-800" },
    { materia: "Historia y Geografía", horas: "3 hrs/semana", color: "bg-orange-100 text-orange-800" },
    { materia: "Inglés", horas: "5 hrs/semana", color: "bg-red-100 text-red-800" },
    { materia: "Computación", horas: "2 hrs/semana", color: "bg-indigo-100 text-indigo-800" },
    { materia: "Educación Artística", horas: "2 hrs/semana", color: "bg-pink-100 text-pink-800" },
    { materia: "Educación Física", horas: "3 hrs/semana", color: "bg-teal-100 text-teal-800" }
  ];

  const activitadesExtracurriculares = [
    { nombre: "Club de Ciencias", descripcion: "Experimentos y proyectos científicos", icono: "🔬" },
    { nombre: "Robótica", descripcion: "Programación y construcción de robots", icono: "🤖" },
    { nombre: "Debate y Oratoria", descripcion: "Desarrollo de habilidades de comunicación", icono: "🎤" },
    { nombre: "Ajedrez", descripcion: "Estrategia y pensamiento lógico", icono: "♟️" },
    { nombre: "Coro Escolar", descripcion: "Expresión musical y trabajo en equipo", icono: "🎵" },
    { nombre: "Deportes", descripcion: "Fútbol, básquetbol y atletismo", icono: "⚽" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section - Profesional pero dinámico */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Primaria Piaget</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Formamos estudiantes preparados para los desafíos del siglo XXI 
              con excelencia académica y valores sólidos
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
                <div className="text-3xl font-bold">6</div>
                <div className="text-sm">Grados académicos</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
                <div className="text-3xl font-bold">30</div>
                <div className="text-sm">Horas semanales</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur rounded-lg p-4">
                <div className="text-3xl font-bold">8</div>
                <div className="text-sm">Materias principales</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <span className="bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 transition duration-300 cursor-pointer">
                  Conocer más
                </span>
              </Link>
              <Link href="/admisiones">
                <span className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 cursor-pointer">
                  Proceso de inscripción
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Navegación elegante */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-xl shadow-lg p-2">
          {[
            { id: 'programa', label: 'Plan de Estudios' },
            { id: 'grados', label: 'Por Grados' },
            { id: 'horarios', label: 'Horarios' },
            { id: 'instalaciones', label: 'Instalaciones' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition duration-300 m-1 ${
                activeTab === tab.id 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-blue-600 hover:text-blue-800 hover:bg-blue-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenido por pestañas */}
        {activeTab === 'programa' && (
          <div className="space-y-12">
            <section className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Plan de Estudios Integral</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Nuestro programa académico combina excelencia educativa con formación en valores, 
                preparando estudiantes competentes y comprometidos con su sociedad.
              </p>
            </section>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {materias.map((materia, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                  <div className={`${materia.color} text-white p-4 text-center`}>
                    <div className="text-4xl mb-2">{materia.icon}</div>
                    <div className="font-bold">{materia.title}</div>
                    <div className="text-sm opacity-90">{materia.nivel}</div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">{materia.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Metodología */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Nuestra Metodología</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🧠</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-blue-600">Aprendizaje Activo</h4>
                  <p className="text-gray-600">Los estudiantes son protagonistas de su aprendizaje a través de proyectos, investigación y experimentación.</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-green-600">Trabajo Colaborativo</h4>
                  <p className="text-gray-600">Fomentamos el trabajo en equipo y la comunicación efectiva para formar futuros líderes.</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💡</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-purple-600">Pensamiento Crítico</h4>
                  <p className="text-gray-600">Desarrollamos habilidades de análisis, síntesis y evaluación para tomar decisiones informadas.</p>
                </div>
              </div>
            </section>

            {/* Actividades extracurriculares */}
            <section>
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Actividades Extracurriculares</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {activitadesExtracurriculares.map((actividad, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                    <div className="text-4xl mb-3 text-center">{actividad.icono}</div>
                    <h4 className="text-lg font-bold mb-2 text-center text-gray-800">{actividad.nombre}</h4>
                    <p className="text-gray-600 text-center text-sm">{actividad.descripcion}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'grados' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Desarrollo por Grados</h2>
            
            <div className="grid gap-6">
              {grados.map((grado, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mr-4 font-bold text-xl">
                        {index + 1}°
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{grado.grado}</h3>
                        <p className="text-gray-500">{grado.edad}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
                        Enfoque: {grado.enfoque}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-700 mb-3">Logros principales:</h4>
                    <div className="grid md:grid-cols-3 gap-3">
                      {grado.logros.map((logro, logroIndex) => (
                        <div key={logroIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                          <span className="text-gray-600">{logro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'horarios' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Distribución Horaria</h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-6">
                <h3 className="text-2xl font-bold">Horario: 7:30 AM - 2:30 PM</h3>
                <p className="text-blue-100">Jornada completa con 30 horas académicas semanales</p>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {horarioSemanal.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                      <span className="font-medium text-gray-800">{item.materia}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.color}`}>
                        {item.horas}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-green-600">Horario Diario Típico</h3>
                <div className="space-y-3">
                  <div className="flex justify-between"><span>7:30 - 8:00</span><span>Entrada y actividades de bienvenida</span></div>
                  <div className="flex justify-between"><span>8:00 - 10:00</span><span>Primera jornada académica</span></div>
                  <div className="flex justify-between"><span>10:00 - 10:20</span><span>Recreo</span></div>
                  <div className="flex justify-between"><span>10:20 - 12:20</span><span>Segunda jornada académica</span></div>
                  <div className="flex justify-between"><span>12:20 - 13:00</span><span>Almuerzo</span></div>
                  <div className="flex justify-between"><span>13:00 - 14:30</span><span>Tercera jornada académica</span></div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-600">Servicios Adicionales</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Servicio de comedor
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Transporte escolar
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Tutorías académicas
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Actividades vespertinas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'instalaciones' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Instalaciones de Vanguardia</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600 flex items-center">
                  <span className="mr-2">🏫</span> Aulas Inteligentes
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pizarras interactivas</li>
                  <li>• Proyectores multimedia</li>
                  <li>• Conexión a internet</li>
                  <li>• Mobiliario ergonómico</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-green-600 flex items-center">
                  <span className="mr-2">🔬</span> Laboratorios
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Lab. de Ciencias</li>
                  <li>• Lab. de Computación</li>
                  <li>• Lab. de Idiomas</li>
                  <li>• Taller de Robótica</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-600 flex items-center">
                  <span className="mr-2">📚</span> Biblioteca
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• +5,000 libros</li>
                  <li>• Área de lectura</li>
                  <li>• Recursos digitales</li>
                  <li>• Sala de estudio</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-orange-600 flex items-center">
                  <span className="mr-2">🏃</span> Deportes
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cancha de fútbol</li>
                  <li>• Cancha de básquetbol</li>
                  <li>• Gimnasio cubierto</li>
                  <li>• Pista de atletismo</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-red-600 flex items-center">
                  <span className="mr-2">🎭</span> Arte y Cultura
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Salón de música</li>
                  <li>• Taller de arte</li>
                  <li>• Auditorio</li>
                  <li>• Estudio de danza</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-indigo-600 flex items-center">
                  <span className="mr-2">🍽️</span> Servicios
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Comedor escolar</li>
                  <li>• Cafetería</li>
                  <li>• Enfermería</li>
                  <li>• Áreas verdes</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* CTA profesional */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white p-12 text-center mt-16">
          <h2 className="text-3xl font-bold mb-6">Forma parte de la excelencia educativa</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            En Primaria Piaget preparamos a los líderes del mañana con una educación integral 
            que combina conocimientos sólidos con valores humanos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <span className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer">
                Solicitar información
              </span>
            </Link>
            <Link href="/admisiones">
              <span className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 cursor-pointer">
                Proceso de admisión
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}