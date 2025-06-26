'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import "./styles/page.css"

export default function PrimariaPage() {
  const [activeTab, setActiveTab] = useState('programa');
  const [isVisible, setIsVisible] = useState(false);
  const [floatingElements, setFloatingElements] = useState<Array<{
    id: number;
    emoji: string;
    left: number;
    top: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Crear elementos flotantes aleatorios
    const elements = Array.from({length: 15}, (_, i) => ({
      id: i,
      emoji: ['⭐', '🌟', '✨', '🎈', '🎨', '📚', '🚀', '🌈'][Math.floor(Math.random() * 8)],
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2
    }));
    setFloatingElements(elements);
  }, []);

  const materias = [
    {
      icon: "📚",
      title: "Español",
      description: "¡Aprende a leer, escribir y comunicarte como un profesional!",
      nivel: "Súper Avanzado",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-500",
      textColor: "text-blue-600",
      fun: "¡Crea tus propias historias!"
    },
    {
      icon: "🔢",
      title: "Matemáticas",
      description: "Números, figuras y problemas súper divertidos de resolver",
      nivel: "Genio Matemático",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-500",
      textColor: "text-green-600",
      fun: "¡Como un detective de números!"
    },
    {
      icon: "🌍",
      title: "Ciencias Naturales",
      description: "Experimenta, descubre y aprende cómo funciona el mundo",
      nivel: "Científico Junior",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-500",
      textColor: "text-purple-600",
      fun: "¡Experimentos increíbles!"
    },
    {
      icon: "🗺️",
      title: "Geografía e Historia",
      description: "Viaja por el mundo y el tiempo sin salir del salón",
      nivel: "Explorador",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-500",
      textColor: "text-orange-600",
      fun: "¡Aventuras en el tiempo!"
    },
    {
      icon: "🇺🇸",
      title: "Inglés",
      description: "Habla como un nativo y conquista el mundo",
      nivel: "Bilingüe",
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-500",
      textColor: "text-red-600",
      fun: "¡Hello World!"
    },
    {
      icon: "💻",
      title: "Computación",
      description: "Programa robots y crea videojuegos geniales",
      nivel: "Programador Jr",
      color: "from-indigo-400 to-indigo-600",
      bgColor: "bg-indigo-500",
      textColor: "text-indigo-600",
      fun: "¡Crea tu propio videojuego!"
    },
    {
      icon: "🎨",
      title: "Arte",
      description: "Pinta, dibuja y crea obras maestras increíbles",
      nivel: "Artista",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-500",
      textColor: "text-pink-600",
      fun: "¡Tu imaginación sin límites!"
    },
    {
      icon: "⚽",
      title: "Deportes",
      description: "Corre, salta y juega mientras te diviertes",
      nivel: "Atleta",
      color: "from-teal-400 to-teal-600",
      bgColor: "bg-teal-500",
      textColor: "text-teal-600",
      fun: "¡Muévete y diviértete!"
    }
  ];

  const grados = [
    {
      grado: "1° Primaria",
      edad: "6-7 años",
      emoji: "🌱",
      enfoque: "¡Primeros pasos en el mundo del aprendizaje!",
      logros: ["Leo mis primeras palabras", "Sumo y resto como un campeón", "Sigo instrucciones súper bien"],
      color: "from-yellow-400 to-yellow-600",
      bgPattern: "bg-gradient-to-br from-yellow-100 to-yellow-200"
    },
    {
      grado: "2° Primaria", 
      edad: "7-8 años",
      emoji: "🌿",
      enfoque: "¡Consolidando mis súper poderes de aprendizaje!",
      logros: ["Entiendo todo lo que leo", "Multiplico como un ninja", "Trabajo genial en equipo"],
      color: "from-green-400 to-green-600",
      bgPattern: "bg-gradient-to-br from-green-100 to-green-200"
    },
    {
      grado: "3° Primaria",
      edad: "8-9 años",
      emoji: "🌳",
      enfoque: "¡Desarrollo mi pensamiento de detective!",
      logros: ["Escribo textos increíbles", "Divido números sin problemas", "Investigo como un científico"],
      color: "from-blue-400 to-blue-600",
      bgPattern: "bg-gradient-to-br from-blue-100 to-blue-200"
    },
    {
      grado: "4° Primaria",
      edad: "9-10 años",
      emoji: "🏔️",
      enfoque: "¡Aprendo solo como un explorador independiente!",
      logros: ["Escribo ensayos geniales", "Domino las fracciones", "Hago proyectos científicos"],
      color: "from-purple-400 to-purple-600",
      bgPattern: "bg-gradient-to-br from-purple-100 to-purple-200"
    },
    {
      grado: "5° Primaria",
      edad: "10-11 años",
      emoji: "🦅",
      enfoque: "¡Me preparo para volar hacia la secundaria!",
      logros: ["Analizo libros como un crítico", "Manejo decimales perfectamente", "Presento como un profesional"],
      color: "from-indigo-400 to-indigo-600",
      bgPattern: "bg-gradient-to-br from-indigo-100 to-indigo-200"
    },
    {
      grado: "6° Primaria",
      edad: "11-12 años",
      emoji: "👑",
      enfoque: "¡Lidero y me responsabilizo como un verdadero líder!",
      logros: ["Escribo textos súper convincentes", "Domino geometría avanzada", "Dirijo investigaciones importantes"],
      color: "from-red-400 to-red-600",
      bgPattern: "bg-gradient-to-br from-red-100 to-red-200"
    }
  ];

  const horarioSemanal = [
    { materia: "Español", horas: "6 hrs", color: "bg-blue-100 text-blue-800", emoji: "📚" },
    { materia: "Matemáticas", horas: "6 hrs", color: "bg-green-100 text-green-800", emoji: "🔢" },
    { materia: "Ciencias Naturales", horas: "3 hrs", color: "bg-purple-100 text-purple-800", emoji: "🔬" },
    { materia: "Historia y Geografía", horas: "3 hrs", color: "bg-orange-100 text-orange-800", emoji: "🗺️" },
    { materia: "Inglés", horas: "5 hrs", color: "bg-red-100 text-red-800", emoji: "🇺🇸" },
    { materia: "Computación", horas: "2 hrs", color: "bg-indigo-100 text-indigo-800", emoji: "💻" },
    { materia: "Arte", horas: "2 hrs", color: "bg-pink-100 text-pink-800", emoji: "🎨" },
    { materia: "Deportes", horas: "3 hrs", color: "bg-teal-100 text-teal-800", emoji: "⚽" }
  ];

  const activitadesExtracurriculares = [
    { 
      nombre: "Club de Científicos Locos", 
      descripcion: "¡Experimentos súper divertidos y descubrimientos increíbles!", 
      icono: "🔬", 
      color: "from-purple-400 to-purple-600",
      fun: "¡Como un laboratorio de diversión!" 
    },
    { 
      nombre: "Academia de Robots", 
      descripcion: "¡Construye y programa robots que obedecen tus órdenes!", 
      icono: "🤖", 
      color: "from-blue-400 to-blue-600",
      fun: "¡Tus robots harán lo que tú quieras!" 
    },
    { 
      nombre: "Escuela de Súper Oradores", 
      descripcion: "¡Habla como un profesional y convence a todos!", 
      icono: "🎤", 
      color: "from-green-400 to-green-600",
      fun: "¡Serás la voz que todos escuchen!" 
    },
    { 
      nombre: "Club de Genios del Ajedrez", 
      descripcion: "¡Piensa 10 pasos adelante como un maestro!", 
      icono: "♟️", 
      color: "from-gray-400 to-gray-600",
      fun: "¡Estrategia nivel grandmaster!" 
    },
    { 
      nombre: "Coro de Estrellas", 
      descripcion: "¡Canta como una estrella de rock y brilla en el escenario!", 
      icono: "🎵", 
      color: "from-yellow-400 to-yellow-600",
      fun: "¡Tu voz brillará como una estrella!" 
    },
    { 
      nombre: "Liga de Súper Deportistas", 
      descripcion: "¡Conviértete en el campeón de todos los deportes!", 
      icono: "⚽", 
      color: "from-orange-400 to-orange-600",
      fun: "¡Gana todas las competencias!" 
    }
  ];

  const instalacionesData = [
    {
      title: "🏫 Salones Mágicos",
      items: ["Pizarras que cobran vida", "Proyectores de aventuras", "Internet súper rápido", "Sillas cómodas para aprender"],
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "🔬 Laboratorios de Ciencia",
      items: ["Lab de experimentos locos", "Computadoras súper rápidas", "Lab de idiomas espacial", "Taller de robots geniales"],
      color: "from-green-400 to-green-600"
    },
    {
      title: "📚 Biblioteca del Tesoro",
      items: ["Más de 5,000 libros geniales", "Rincón de lectura súper cómodo", "Recursos digitales increíbles", "Sala de estudio silenciosa"],
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "🏃 Reino de los Deportes",
      items: ["Cancha de fútbol gigante", "Cancha de básquet profesional", "Gimnasio cubierto genial", "Pista de atletismo olímpica"],
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "🎭 Palacio del Arte",
      items: ["Salón musical profesional", "Taller de arte creativo", "Auditorio como cinema", "Estudio de baile divertido"],
      color: "from-red-400 to-red-600"
    },
    {
      title: "🍽️ Centro de Servicios",
      items: ["Comedor súper rico", "Cafetería con snacks", "Enfermería cuidadosa", "Jardines hermosos"],
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Elementos flotantes animados */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className="fixed pointer-events-none text-2xl animate-bounce opacity-20"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            animationDuration: `${element.duration}s`,
            animationDelay: `${element.delay}s`
          }}
        >
          {element.emoji}
        </div>
      ))}

      {/* Hero Section - Súper colorido y dinámico */}
      <section className="relative bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-pink-400/20 to-purple-400/20 animate-pulse"></div>
          {/* Formas decorativas */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-bounce delay-75"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-400 rounded-full opacity-20 animate-bounce delay-150"></div>
          <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-green-400 rounded-full opacity-20 animate-bounce delay-300"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight animate-pulse">
                <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                  ¡PRIMARIA
                </span>
                <br />
                <span className="text-white font-extrabold text-5xl md:text-7xl">PIAGET!</span>
              </h1>
              <div className="flex justify-center space-x-4 mb-8">
                {['🌟', '🚀', '🎈', '🌈', '✨', '🎨', '📚', '⚽'].map((emoji, i) => (
                  <span 
                    key={i}
                    className="text-5xl animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
              <p className="text-2xl md:text-3xl mb-8 leading-relaxed font-medium">
                ¡Donde aprender es la aventura más divertida del mundo! 
                <span className="text-yellow-300 font-bold"> ¡Únete a nuestra súper escuela!</span>
              </p>
            </div>
            
            {/* Estadísticas súper divertidas */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { num: "6", desc: "Grados súper divertidos", emoji: "🎯", color: "from-yellow-400 to-orange-400" },
                { num: "30", desc: "Horas de diversión semanal", emoji: "⏰", color: "from-green-400 to-blue-400" },
                { num: "8", desc: "Materias increíbles", emoji: "📚", color: "from-pink-400 to-purple-400" }
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border-4 border-white/30 hover:scale-110 transition-all duration-500 group cursor-pointer"
                >
                  <div className="text-6xl mb-4 group-hover:animate-spin">{stat.emoji}</div>
                  <div className="text-5xl font-black mb-3 group-hover:animate-pulse">{stat.num}</div>
                  <div className="text-white/90 text-lg font-semibold">{stat.desc}</div>
                </div>
              ))}
            </div>

            {/* Botones súper llamativos */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contacto">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-black py-6 px-12 rounded-2xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 cursor-pointer text-xl transform hover:scale-110 hover:rotate-2 shadow-2xl hover:shadow-yellow-500/50 animate-pulse border-4 border-yellow-300">
                  <span className="mr-3">🌟</span>
                  ¡Quiero Conocer Más!
                  <span className="ml-3">🌟</span>
                </span>
              </Link>
              <Link href="/admisiones">
                <span className="bg-transparent border-4 border-white text-white font-black py-6 px-12 rounded-2xl hover:bg-white hover:text-purple-600 transition-all duration-300 cursor-pointer text-xl transform hover:scale-110 hover:-rotate-2 shadow-2xl">
                  <span className="mr-3">🚀</span>
                  ¡Quiero Inscribirme!
                  <span className="ml-3">🚀</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Navegación súper divertida */}
        <div className="flex flex-wrap justify-center mb-16 bg-white/80 backdrop-blur-xl rounded-3xl p-4 shadow-2xl border-4 border-rainbow">
          {[
            { id: 'programa', label: '📚 Nuestras Materias', emoji: '📚' },
            { id: 'grados', label: '🎯 Por Grados', emoji: '🎯' },
            { id: 'horarios', label: '⏰ Horarios', emoji: '⏰' },
            { id: 'instalaciones', label: '🏫 Nuestro Campus', emoji: '🏫' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 m-2 transform hover:scale-105 ${
                activeTab === tab.id 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl scale-105 animate-pulse' 
                  : 'text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:shadow-lg'
              }`}
            >
              <span className="text-2xl mr-2">{tab.emoji}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenido por pestañas */}
        <div className="transition-all duration-700">
          {activeTab === 'programa' && (
            <div className="space-y-16">
              <section className="text-center mb-16">
                <h2 className="text-6xl font-black text-gray-800 mb-8 flex items-center justify-center">
                  <span className="mr-4 animate-spin">🎯</span>
                  ¡Nuestras Materias Súper Geniales!
                  <span className="ml-4 animate-spin">🎯</span>
                </h2>
                <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                  ¡Cada materia es una aventura increíble llena de diversión y aprendizaje! 
                  <span className="text-purple-600 font-bold">¡Descubre todo lo que puedes lograr!</span>
                </p>
              </section>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {materias.map((materia, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:rotate-2 border-4 border-transparent hover:border-purple-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`bg-gradient-to-r ${materia.color} text-white p-6 text-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
                      <div className="relative z-10">
                        <div className="text-6xl mb-4 group-hover:animate-bounce">{materia.icon}</div>
                        <div className="font-black text-xl mb-2">{materia.title}</div>
                        <div className="text-sm bg-white/20 rounded-full px-3 py-1 font-bold">{materia.nivel}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 text-sm mb-4 leading-relaxed">{materia.description}</p>
                      <div className={`${materia.textColor} font-bold text-sm bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-3 text-center`}>
                        {materia.fun}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Metodología súper divertida */}
              <section className="bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 rounded-3xl shadow-2xl p-12 border-4 border-purple-200">
                <h3 className="text-5xl font-black text-center mb-12 text-gray-800 flex items-center justify-center">
                  <span className="mr-4 animate-bounce">🎓</span>
                  ¿Cómo Aprendemos?
                  <span className="ml-4 animate-bounce">🎓</span>
                </h3>
                <div className="grid md:grid-cols-3 gap-12">
                  {[
                    { icon: "🧠", title: "Aprendemos Haciendo", desc: "¡No solo escuchamos, experimentamos y creamos cosas increíbles!", color: "from-blue-400 to-cyan-400" },
                    { icon: "🤝", title: "Trabajamos en Equipo", desc: "¡Juntos somos más fuertes y logramos cosas súper geniales!", color: "from-green-400 to-teal-400" },
                    { icon: "💡", title: "Pensamos como Detectives", desc: "¡Investigamos, analizamos y resolvemos misterios del conocimiento!", color: "from-purple-400 to-pink-400" }
                  ].map((item, index) => (
                    <div key={index} className="text-center group">
                      <div className={`bg-gradient-to-r ${item.color} rounded-full w-28 h-28 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl border-4 border-white`}>
                        <span className="text-5xl group-hover:animate-bounce">{item.icon}</span>
                      </div>
                      <h4 className="text-2xl font-black mb-4 text-purple-600 group-hover:text-purple-800 transition-colors">{item.title}</h4>
                      <p className="text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Actividades extracurriculares súper cool */}
              <section>
                <h3 className="text-5xl font-black text-center mb-12 text-gray-800 flex items-center justify-center">
                  <span className="mr-4 animate-pulse">🎪</span>
                  ¡Actividades Súper Divertidas!
                  <span className="ml-4 animate-pulse">🎪</span>
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {activitadesExtracurriculares.map((actividad, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-4 border-transparent hover:border-rainbow group"
                    >
                      <div className={`w-20 h-20 bg-gradient-to-r ${actividad.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl`}>
                        <span className="text-4xl group-hover:animate-bounce">{actividad.icono}</span>
                      </div>
                      <h4 className="text-xl font-black mb-4 text-center text-gray-800 group-hover:text-purple-600 transition-colors">{actividad.nombre}</h4>
                      <p className="text-gray-600 text-center text-sm mb-4 leading-relaxed">{actividad.descripcion}</p>
                      <div className="bg-gradient-to-r from-yellow-100 to-pink-100 rounded-xl p-3 text-center">
                        <span className="text-purple-600 font-bold text-sm">{actividad.fun}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === 'grados' && (
            <div className="space-y-12">
              <h2 className="text-6xl font-black text-center text-gray-800 mb-16 flex items-center justify-center">
                <span className="mr-4 animate-bounce">🎯</span>
                ¡Tu Aventura por Grados!
                <span className="ml-4 animate-bounce">🎯</span>
              </h2>
              
              <div className="grid gap-8">
                {grados.map((grado, index) => (
                  <div 
                    key={index} 
                    className={`${grado.bgPattern} rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-4 border-white group`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div className="flex items-center mb-6 md:mb-0">
                        <div className={`bg-gradient-to-r ${grado.color} text-white rounded-full w-24 h-24 flex items-center justify-center mr-6 font-black text-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border-4 border-white`}>
                          {grado.emoji}
                        </div>
                        <div>
                          <h3 className="text-3xl font-black text-gray-800 group-hover:text-purple-600 transition-colors">{grado.grado}</h3>
                          <p className="text-gray-600 font-bold text-lg">{grado.edad}</p>
                        </div>
                      </div>
                      <div className="text-center md:text-right">
                        <div className="bg-white/80 backdrop-blur text-purple-800 px-6 py-3 rounded-2xl font-black border-2 border-purple-200 shadow-lg">
                          {grado.enfoque}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-black text-gray-700 mb-6 text-xl flex items-center">
                        <span className="mr-3 text-2xl">🏆</span>
                        ¡Mis súper logros!
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        {grado.logros.map((logro, logroIndex) => (
                          <div 
                            key={logroIndex} 
                            className="flex items-center bg-white/60 backdrop-blur rounded-xl p-4 border-2 border-white shadow-lg hover:scale-105 transition-all duration-300"
                          >
                            <span className="w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-4 animate-pulse"></span>
                            <span className="text-gray-700 font-bold">{logro}</span>
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
            <div className="space-y-12">
              <h2 className="text-6xl font-black text-center text-gray-800 mb-16 flex items-center justify-center">
                <span className="mr-4 animate-spin">⏰</span>
                ¡Nuestros Horarios Súper Organizados!
                <span className="ml-4 animate-spin">⏰</span>
              </h2>
              
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-6xl mb-4">🕐</div>
                    <h3 className="text-4xl font-black mb-2">7:30 AM - 2:30 PM</h3>
                    <p className="text-xl font-bold">¡7 horas de diversión y aprendizaje cada día!</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {horarioSemanal.map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between p-6 rounded-2xl border-2 border-white bg-white/20 backdrop-blur hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                      >
                        <div className="flex items-center">
                          <span className="text-3xl mr-4">{item.emoji}</span>
                          <span className="font-black text-white text-lg">{item.materia}</span>
                        </div>
                        <span className={`px-4 py-2 rounded-full text-sm font-black ${item.color} shadow-lg`}>
                          {item.horas}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl shadow-2xl p-8 border-4 border-green-200">
                  <h3 className="text-3xl font-black mb-6 text-green-600 flex items-center">
                    <span className="mr-3 text-4xl">📅</span>
                    ¡Mi Día Súper Divertido!
                  </h3>
                  <div className="space-y-4">
                    {[
                      { time: "7:30 - 8:00", activity: "¡Buenos días y actividades geniales!", emoji: "🌅" },
                      { time: "8:00 - 10:00", activity: "¡Primeras clases súper divertidas!", emoji: "📚" },
                      { time: "10:00 - 10:20", activity: "¡Recreo para jugar y hacer amigos!", emoji: "⚽" },
                      { time: "10:20 - 12:20", activity: "¡Más aventuras de aprendizaje!", emoji: "🔬" },
                      { time: "12:20 - 13:00", activity: "¡Hora de comer rico y platicar!", emoji: "🍽️" },
                      { time: "13:00 - 14:30", activity: "¡Últimas clases antes de ir a casa!", emoji: "🎨" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between bg-white/60 rounded-xl p-4 border-2 border-white shadow-lg">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{item.emoji}</span>
                          <span className="font-bold text-gray-700 text-sm">{item.time}</span>
                        </div>
                        <span className="text-gray-700 font-medium text-sm">{item.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl shadow-2xl p-8 border-4 border-purple-200">
                  <h3 className="text-3xl font-black mb-6 text-purple-600 flex items-center">
                    <span className="mr-3 text-4xl">✨</span>
                    ¡Servicios Geniales!
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { service: "Comedor súper rico", emoji: "🍽️" },
                      { service: "Transporte seguro y divertido", emoji: "🚌" },
                      { service: "Ayuda extra con tareas", emoji: "📝" },
                      { service: "Actividades después de clases", emoji: "🎪" }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center bg-white/60 rounded-xl p-4 border-2 border-white shadow-lg hover:scale-105 transition-all duration-300">
                        <span className="text-2xl mr-4">{item.emoji}</span>
                        <span className="text-gray-700 font-bold">{item.service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'instalaciones' && (
            <div className="space-y-12">
              <h2 className="text-6xl font-black text-center text-gray-800 mb-16 flex items-center justify-center">
                <span className="mr-4 animate-bounce">🏫</span>
                ¡Nuestro Campus Súper Genial!
                <span className="ml-4 animate-bounce">🏫</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {instalacionesData.map((instalacion, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-transparent hover:border-rainbow transition-all duration-500 group transform hover:scale-105 hover:rotate-1"
                  >
                    <h3 className="text-2xl font-black mb-6 text-gray-800 group-hover:text-purple-600 transition-colors">
                      {instalacion.title}
                    </h3>
                    <ul className="space-y-4">
                      {instalacion.items.map((item, itemIndex) => (
                        <li 
                          key={itemIndex}
                          className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300 group-hover:translate-x-2"
                        >
                          <div className={`w-3 h-3 bg-gradient-to-r ${instalacion.color} rounded-full mr-4 animate-pulse`}></div>
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Tour virtual súper cool */}
              <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-16 text-center text-white border-4 border-white shadow-2xl">
                <h3 className="text-5xl font-black mb-8 flex items-center justify-center">
                  <span className="mr-4 animate-spin">🎮</span>
                  ¡Explora Nuestro Campus!
                  <span className="ml-4 animate-spin">🎮</span>
                </h3>
                <p className="text-2xl mb-12 max-w-4xl mx-auto font-medium">
                  ¡Haz un recorrido súper divertido por toda nuestra escuela desde tu casa!
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/20 backdrop-blur rounded-3xl p-8 border-4 border-white/30 hover:scale-105 transition-all duration-300">
                    <div className="text-6xl mb-4">🕶️</div>
                    <h4 className="text-2xl font-black text-yellow-300 mb-4">Tour Virtual 360°</h4>
                    <p className="text-white/90 mb-6 font-medium">¡Camina por nuestra escuela como si estuvieras aquí!</p>
                    <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-2xl hover:scale-110 transition-transform duration-300 font-black shadow-2xl border-2 border-yellow-300">
                      <span className="mr-2">🚀</span>
                      ¡Empezar Tour!
                    </button>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-3xl p-8 border-4 border-white/30 hover:scale-105 transition-all duration-300">
                    <div className="text-6xl mb-4">👥</div>
                    <h4 className="text-2xl font-black text-green-300 mb-4">¡Ven a Visitarnos!</h4>
                    <p className="text-white/90 mb-6 font-medium">¡Conoce nuestra escuela en persona con tu familia!</p>
                    <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-2xl hover:scale-110 transition-transform duration-300 font-black shadow-2xl border-2 border-green-300">
                      <span className="mr-2">📅</span>
                      ¡Agendar Visita!
                    </button>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>

        {/* CTA final súper atractivo */}
        <section className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-3xl text-white p-16 text-center mt-20 shadow-2xl border-4 border-white relative overflow-hidden">
          {/* Elementos decorativos súper divertidos */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              >
                <div className="w-6 h-6 bg-yellow-300 rounded-full"></div>
              </div>
            ))}
          </div>
          
          <div className="relative z-10">
            <h2 className="text-6xl font-black mb-8 flex items-center justify-center">
              <span className="mr-4 animate-bounce">🌟</span>
              ¡Únete a Nuestra Familia Piaget!
              <span className="ml-4 animate-bounce">🌟</span>
            </h2>
            <p className="text-2xl mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
              ¡En Primaria Piaget cada día es una nueva aventura de aprendizaje! 
              <span className="text-yellow-300 font-black"> ¡Ven y descubre todo lo increíble que puedes lograr!</span>
            </p>
            
            {/* Emojis súper divertidos */}
            <div className="flex justify-center space-x-6 mb-12">
              {["🎉", "🚀", "🌈", "⭐", "🎯", "🏆", "💫", "🎪"].map((emoji, i) => (
                <span 
                  key={i}
                  className="text-5xl animate-bounce cursor-pointer hover:scale-150 transition-transform duration-300"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link href="/contacto">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-black py-6 px-16 rounded-3xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-500 cursor-pointer text-xl transform hover:scale-110 hover:rotate-2 shadow-2xl border-4 border-yellow-300 animate-pulse">
                  <span className="mr-3">📞</span>
                  ¡Quiero Más Info!
                  <span className="ml-3">📞</span>
                </span>
              </Link>
              <Link href="/admisiones">
                <span className="bg-transparent border-4 border-white text-white font-black py-6 px-16 rounded-3xl hover:bg-white hover:text-purple-600 transition-all duration-500 cursor-pointer text-xl transform hover:scale-110 hover:-rotate-2 shadow-2xl">
                  <span className="mr-3">🎒</span>
                  ¡Inscríbeme Ya!
                  <span className="ml-3">🎒</span>
                </span>
              </Link>
            </div>
            
            {/* Mensaje para padres */}
            <div className="mt-12 bg-white/20 backdrop-blur rounded-2xl p-6 border-2 border-white/30">
              <p className="text-lg font-medium text-white/90">
                <span className="text-yellow-300 font-bold">Para papás y mamás:</span> 
                Formamos estudiantes felices, seguros y preparados para el futuro 📚✨
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}