'use client'

import Link from "next/link";
import { useState } from "react";

export default function MaternalPage() {
  const [activeTab, setActiveTab] = useState('metodo');

  const beneficiosMontessori = [
    {
      icon: "🧠",
      title: "Desarrollo cognitivo",
      description: "Estimulamos el pensamiento lógico y la resolución de problemas desde temprana edad"
    },
    {
      icon: "🤝",
      title: "Independencia",
      description: "Fomentamos la autonomía y confianza en sí mismos a través de actividades dirigidas"
    },
    {
      icon: "👥",
      title: "Habilidades sociales",
      description: "Desarrollamos la capacidad de interactuar positivamente con otros niños y adultos"
    },
    {
      icon: "🎨",
      title: "Creatividad",
      description: "Estimulamos la expresión artística y la imaginación mediante actividades lúdicas"
    },
    {
      icon: "🏃",
      title: "Motricidad",
      description: "Fortalecemos tanto la motricidad fina como la gruesa con ejercicios especializados"
    },
    {
      icon: "📚",
      title: "Pre-lectura",
      description: "Iniciamos el proceso de lectoescritura de manera natural y divertida"
    }
  ];

  const actividades = [
    {
      categoria: "Vida práctica",
      items: ["Trasvasar agua", "Clasificar objetos", "Cuidado personal", "Preparación de alimentos simples"]
    },
    {
      categoria: "Sensorial",
      items: ["Torre rosa", "Escalera marrón", "Cilindros con botón", "Telas y texturas"]
    },
    {
      categoria: "Lenguaje",
      items: ["Nomenclaturas", "Canciones", "Cuentos interactivos", "Ejercicios de pronunciación"]
    },
    {
      categoria: "Matemáticas",
      items: ["Barras numéricas", "Números de lija", "Conteo con objetos", "Formas geométricas"]
    }
  ];

  const horarios = [
    { hora: "7:30 - 8:00", actividad: "Recepción y bienvenida" },
    { hora: "8:00 - 9:00", actividad: "Desayuno y rutina de higiene" },
    { hora: "9:00 - 10:30", actividad: "Trabajo Montessori individual" },
    { hora: "10:30 - 11:00", actividad: "Refrigerio y descanso" },
    { hora: "11:00 - 12:00", actividad: "Actividades grupales y música" },
    { hora: "12:00 - 13:00", actividad: "Almuerzo" },
    { hora: "13:00 - 14:30", actividad: "Siesta" },
    { hora: "14:30 - 15:30", actividad: "Actividades sensoriales" },
    { hora: "15:30 - 16:00", actividad: "Merienda" },
    { hora: "16:00 - 17:00", actividad: "Juego libre y despedida" }
  ];

  const testimonios = [
    {
      nombre: "Ana María López",
      edad_hijo: "2 años",
      testimonio: "Mi hija Sofía ha florecido en el ambiente Montessori. Su independencia y confianza han crecido enormemente.",
      foto: "👩"
    },
    {
      nombre: "Carlos Mendoza",
      edad_hijo: "18 meses",
      testimonio: "El método Montessori ha ayudado a nuestro hijo a desarrollar habilidades que no esperábamos ver tan temprano.",
      foto: "👨"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Maternal Montessori</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Un ambiente preparado donde tus pequeños de 1 a 3 años desarrollan su potencial 
              a través del reconocido método Montessori
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <span className="bg-white text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer">
                  Agenda una visita
                </span>
              </Link>
              <Link href="/admisiones">
                <span className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 cursor-pointer">
                  Proceso de inscripción
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Navegación por pestañas */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-lg shadow-md p-2">
          <button
            onClick={() => setActiveTab('metodo')}
            className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
              activeTab === 'metodo' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Método Montessori
          </button>
          <button
            onClick={() => setActiveTab('actividades')}
            className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
              activeTab === 'actividades' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Actividades
          </button>
          <button
            onClick={() => setActiveTab('horarios')}
            className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
              activeTab === 'horarios' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Horarios
          </button>
          <button
            onClick={() => setActiveTab('instalaciones')}
            className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
              activeTab === 'instalaciones' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Instalaciones
          </button>
        </div>

        {/* Contenido de las pestañas */}
        {activeTab === 'metodo' && (
          <div className="space-y-12">
            {/* ¿Qué es Montessori? */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">¿Qué es el Método Montessori?</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    El método Montessori es una filosofía educativa basada en la observación científica 
                    del desarrollo natural de los niños. Desarrollado por la Dra. María Montessori, 
                    este enfoque respeta el ritmo individual de cada niño y crea un ambiente preparado 
                    que fomenta la independencia, la curiosidad y el amor por el aprendizaje.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    En nuestro programa maternal, aplicamos estos principios creando experiencias 
                    de aprendizaje significativas que desarrollan la confianza y las habilidades 
                    fundamentales para la vida.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">Principios fundamentales:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Respeto por el niño
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Ambiente preparado
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Educación como ayuda para la vida
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Maestro como guía
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Beneficios */}
            <section>
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Beneficios del Método Montessori</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {beneficiosMontessori.map((beneficio, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
                    <div className="text-4xl mb-4 text-center">{beneficio.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{beneficio.title}</h3>
                    <p className="text-gray-600 text-center">{beneficio.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'actividades' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Actividades Montessori por Área</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {actividades.map((area, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">{area.categoria}</h3>
                  <ul className="space-y-3">
                    {area.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Galería de actividades */}
            <section className="bg-white rounded-xl shadow-lg p-8 mt-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Nuestros pequeños en acción</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-8 text-center">
                    <div className="text-6xl mb-4">👶</div>
                    <p className="text-gray-700">Actividad Montessori {index + 1}</p>
                    <p className="text-sm text-gray-500 mt-2">Desarrollo integral en cada momento</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'horarios' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Rutina Diaria</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-6">
                <h3 className="text-xl font-bold">Horario típico - Lunes a Viernes</h3>
                <p className="text-blue-100">Cada día está cuidadosamente estructurado para el desarrollo integral</p>
              </div>
              <div className="p-6">
                {horarios.map((item, index) => (
                  <div key={index} className={`flex items-center py-4 ${index !== horarios.length - 1 ? 'border-b border-gray-200' : ''}`}>
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

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-green-600">Alimentación</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Menú nutritivo balanceado</li>
                  <li>• Acompañamiento en comidas</li>
                  <li>• Enseñanza de hábitos alimenticios</li>
                  <li>• Dietas especiales disponibles</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-600">Descanso</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ambiente tranquilo para la siesta</li>
                  <li>• Respeto por ritmos individuales</li>
                  <li>• Música relajante</li>
                  <li>• Supervisión constante</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'instalaciones' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nuestras Instalaciones</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Aulas Preparadas</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Mobiliario a escala de los niños
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Materiales Montessori certificados
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Áreas temáticas organizadas
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Luz natural abundante
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-green-600">Seguridad</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Protecciones en esquinas y bordes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Pisos antideslizantes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Cámaras de seguridad
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Personal capacitado en primeros auxilios
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Áreas Especiales</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Jardín sensorial
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Sala de psicomotricidad
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Comedor infantil
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Área de descanso
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Higiene</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Cambiadores con seguridad
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Lavabos a altura infantil
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Sanitización constante
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Productos hipoalergénicos
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Testimonios */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Lo que dicen nuestros padres</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonios.map((testimonio, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-2xl">
                    {testimonio.foto}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonio.nombre}</h4>
                    <p className="text-gray-500 text-sm">Hijo de {testimonio.edad_hijo}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonio.testimonio}"</p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white p-12 text-center mt-16">
          <h2 className="text-3xl font-bold mb-6">¿Listo para que tu pequeño comience su aventura Montessori?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Agenda una visita para conocer nuestras instalaciones y ver cómo el método Montessori 
            puede beneficiar el desarrollo de tu hijo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <span className="bg-white text-blue-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer">
                Agenda tu visita
              </span>
            </Link>
            <Link href="tel:+528991234567">
              <span className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300 cursor-pointer">
                Llamar ahora
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
