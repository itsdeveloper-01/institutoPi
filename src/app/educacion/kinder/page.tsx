'use client'

import Link from "next/link";
import { useState } from "react";

export default function KinderPage() {
  const [activeTab, setActiveTab] = useState('programa');

  const areasDesarrollo = [
    {
      icon: "🎨",
      title: "Arte y Creatividad",
      description: "Expresión artística, pintura, manualidades y desarrollo de la creatividad",
      color: "from-pink-400 to-red-400"
    },
    {
      icon: "🔤",
      title: "Lectoescritura",
      description: "Iniciación a la lectura y escritura de manera lúdica y natural",
      color: "from-blue-400 to-purple-400"
    },
    {
      icon: "🔢",
      title: "Matemáticas Divertidas",
      description: "Conceptos numéricos básicos, formas, patrones y lógica",
      color: "from-green-400 to-teal-400"
    },
    {
      icon: "🌱",
      title: "Ciencias Naturales",
      description: "Exploración del mundo natural, experimentos simples y curiosidad científica",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: "🎵",
      title: "Música y Movimiento",
      description: "Desarrollo rítmico, coordinación y expresión corporal",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: "👥",
      title: "Habilidades Sociales",
      description: "Trabajo en equipo, empatía, respeto y comunicación",
      color: "from-indigo-400 to-blue-400"
    }
  ];

  const actividadesDiarias = [
    { hora: "8:00 - 8:30", actividad: "¡Buenos días! Círculo de bienvenida", emoji: "🌅" },
    { hora: "8:30 - 9:30", actividad: "Desayuno saludable", emoji: "🥞" },
    { hora: "9:30 - 10:30", actividad: "Tiempo de exploración y juego dirigido", emoji: "🔍" },
    { hora: "10:30 - 11:00", actividad: "Refrigerio y recreo", emoji: "🍎" },
    { hora: "11:00 - 12:00", actividad: "Actividades de lectoescritura", emoji: "📚" },
    { hora: "12:00 - 13:00", actividad: "Almuerzo", emoji: "🍽️" },
    { hora: "13:00 - 14:00", actividad: "Matemáticas divertidas", emoji: "🔢" },
    { hora: "14:00 - 15:00", actividad: "Arte y creatividad", emoji: "🎨" },
    { hora: "15:00 - 15:30", actividad: "Merienda", emoji: "🧁" },
    { hora: "15:30 - 16:30", actividad: "Música y movimiento", emoji: "🎵" },
    { hora: "16:30 - 17:00", actividad: "Despedida y juego libre", emoji: "👋" }
  ];

  const habilidades = [
    "Reconocimiento de letras y sonidos",
    "Conteo hasta 50",
    "Escritura de su nombre",
    "Seguimiento de instrucciones",
    "Trabajo en equipo",
    "Expresión de emociones",
    "Cuidado personal",
    "Resolución de conflictos"
  ];

  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
      {/* Hero Section - Diseño lúdico */}
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
        {/* Navegación divertida */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-2xl shadow-xl p-4">
          {[
            { id: 'programa', label: '🎪 Nuestro Programa', emoji: '🎪' },
            { id: 'actividades', label: '🎮 Actividades', emoji: '🎮' },
            { id: 'habilidades', label: '🌟 Lo que aprenderán', emoji: '🌟' },
            { id: 'instalaciones', label: '🏰 Nuestro Castillo', emoji: '🏰' }
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

        {/* Contenido por pestañas */}
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

            {/* Filosofía educativa */}
            <section className="bg-white rounded-2xl shadow-xl p-8 mt-12">
              <h3 className="text-3xl font-bold text-center mb-6 text-purple-600">🎯 Nuestra Filosofía</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    En Kinder Piaget creemos que cada niño es único y especial. Nuestro enfoque combina 
                    el juego con el aprendizaje significativo, creando experiencias memorables que 
                    despiertan la curiosidad natural de los pequeños.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Preparamos a nuestros estudiantes para la primaria desarrollando habilidades 
                    académicas, sociales y emocionales en un ambiente cálido y estimulante.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-8 rounded-xl">
                  <h4 className="text-xl font-bold mb-4 text-purple-700">✨ Nuestros valores:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="mr-2">🌟</span> Respeto y diversidad</li>
                    <li className="flex items-center"><span className="mr-2">💝</span> Amor por aprender</li>
                    <li className="flex items-center"><span className="mr-2">🤝</span> Trabajo en equipo</li>
                    <li className="flex items-center"><span className="mr-2">🎨</span> Creatividad sin límites</li>
                  </ul>
                </div>
              </div>
            </section>
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
                    <div className="flex-1">
                      <span className="text-gray-800">{item.actividad}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actividades especiales */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-green-600 flex items-center">
                  <span className="mr-2">🌳</span> Actividades al aire libre
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>🌸 Jardín de los sentidos</li>
                  <li>🏃 Juegos de coordinación</li>
                  <li>🦋 Observación de la naturaleza</li>
                  <li>🌞 Actividades con agua</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600 flex items-center">
                  <span className="mr-2">🧪</span> Experimentos divertidos
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>🌋 Volcanes de bicarbonato</li>
                  <li>🌈 Mezcla de colores</li>
                  <li>💧 Flotación y hundimiento</li>
                  <li>🔍 Lupas y microscopios</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-pink-600 flex items-center">
                  <span className="mr-2">🎭</span> Arte y expresión
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>🎨 Pintura con diferentes técnicas</li>
                  <li>🧸 Modelado con plastilina</li>
                  <li>🎪 Teatro y dramatización</li>
                  <li>📚 Cuentacuentos interactivos</li>
                </ul>
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

            {/* Preparación para primaria */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-green-600">Preparación Académica</h3>
                <p className="text-gray-600">Bases sólidas en lectura, escritura y matemáticas para una transición exitosa a primaria</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-xl font-bold mb-3 text-blue-600">Independencia</h3>
                <p className="text-gray-600">Desarrollo de autonomía personal y hábitos de estudio que les servirán toda la vida</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
                <div className="text-4xl mb-4">🤗</div>
                <h3 className="text-xl font-bold mb-3 text-pink-600">Habilidades Sociales</h3>
                <p className="text-gray-600">Capacidad de relacionarse positivamente con compañeros y maestros</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'instalaciones' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center text-white mb-12">🏰 Nuestro Castillo Mágico</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-600 flex items-center">
                  <span className="mr-2">🏫</span> Aulas Temáticas
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Rincón de lectura acogedor
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Área de construcción y bloques
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Espacio de arte y manualidades
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Centro de ciencias y experimentos
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-green-600 flex items-center">
                  <span className="mr-2">🌳</span> Espacios Exteriores
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Patio de juegos seguro
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Jardín sensorial
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Huerto escolar
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Área de juegos con agua
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-600 flex items-center">
                  <span className="mr-2">🛡️</span> Seguridad Total
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Cámaras de seguridad 24/7
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Acceso controlado
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Materiales no tóxicos
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Personal capacitado en emergencias
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-pink-600 flex items-center">
                  <span className="mr-2">🍎</span> Alimentación Saludable
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    Menús nutritivos balanceados
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    Cocina equipada y limpia
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    Opciones para alergias
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    Educación nutricional
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* CTA colorido y divertido */}
        <section className="bg-white rounded-2xl shadow-xl p-12 text-center mt-16">
          <h2 className="text-4xl font-bold mb-6 text-purple-600">🎉 ¡Ven a conocer nuestro mundo mágico!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            Tu pequeño merece la mejor educación en un ambiente lleno de amor, diversión y aprendizaje. 
            ¡Agenda una visita y déjate sorprender!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full text-lg hover:from-purple-600 hover:to-pink-600 transition duration-300 cursor-pointer transform hover:scale-105 shadow-lg">
                🌟 ¡Agenda tu visita!
              </span>
            </Link>
            <Link href="tel:+528991234567">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-800 font-bold py-4 px-8 rounded-full text-lg hover:from-yellow-500 hover:to-orange-500 transition duration-300 cursor-pointer transform hover:scale-105 shadow-lg">
                📞 ¡Llama ahora!
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}