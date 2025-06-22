'use client'

import Link from "next/link";
import { useState } from "react";

export default function PreparatoriaPage() {
  const [activeTab, setActiveTab] = useState('bachilleratos');

  const bachilleratos = [
    {
      nombre: "Ciencias Físico-Matemáticas",
      descripcion: "Enfoque en ciencias exactas, matemáticas avanzadas y tecnología",
      carreras: ["Ingeniería", "Medicina", "Arquitectura", "Matemáticas Aplicadas"],
      materias: ["Cálculo Diferencial", "Física III", "Química Orgánica", "Estadística"],
      color: "from-blue-600 to-cyan-600",
      icon: "🔬"
    },
    {
      nombre: "Químico-Biológicas",
      descripcion: "Preparación para ciencias de la salud y biológicas",
      carreras: ["Medicina", "Enfermería", "Biología", "Farmacia"],
      materias: ["Biología Molecular", "Bioquímica", "Anatomía", "Microbiología"],
      color: "from-green-600 to-emerald-600",
      icon: "🧬"
    },
    {
      nombre: "Económico-Administrativas",
      descripcion: "Formación en administración, economía y negocios",
      carreras: ["Administración", "Economía", "Contaduría", "Mercadotecnia"],
      materias: ["Macroeconomía", "Contabilidad", "Administración", "Derecho"],
      color: "from-purple-600 to-violet-600",
      icon: "💼"
    },
    {
      nombre: "Humanidades y Ciencias Sociales",
      descripcion: "Enfoque en ciencias sociales, literatura y humanidades",
      carreras: ["Derecho", "Psicología", "Comunicación", "Educación"],
      materias: ["Filosofía", "Sociología", "Literatura", "Historia del Arte"],
      color: "from-orange-600 to-red-600",
      icon: "📚"
    }
  ];

  const programasEspeciales = [
    {
      nombre: "Programa de Bachillerato Internacional (IB)",
      descripcion: "Reconocimiento mundial para acceso a universidades internacionales",
      beneficios: ["Acceso a universidades top mundial", "Desarrollo de pensamiento crítico", "Perspectiva internacional"],
      requisitos: "Promedio mínimo 9.0",
      icon: "🌍"
    },
    {
      nombre: "Programa Dual",
      descripcion: "Certificación estadounidense y mexicana simultánea",
      beneficios: ["Doble certificación", "Inglés avanzado", "Preparación SAT"],
      requisitos: "Nivel B2 de inglés",
      icon: "🇺🇸"
    },
    {
      nombre: "Programa STEM Avanzado",
      descripcion: "Ciencia, tecnología, ingeniería y matemáticas intensivo",
      beneficios: ["Investigación científica", "Certificaciones tecnológicas", "Proyectos innovadores"],
      requisitos: "Aptitud en matemáticas",
      icon: "🚀"
    }
  ];

  const universidadesDestino = [
    { nombre: "UNAM", aceptados: "95%", tipo: "Nacional" },
    { nombre: "Tecnológico de Monterrey", aceptados: "92%", tipo: "Privada" },
    { nombre: "IPN", aceptados: "88%", tipo: "Nacional" },
    { nombre: "ITAM", aceptados: "85%", tipo: "Privada" },
    { nombre: "Universidad de Harvard", aceptados: "12%", tipo: "Internacional" },
    { nombre: "MIT", aceptados: "8%", tipo: "Internacional" },
    { nombre: "Universidad de Toronto", aceptados: "45%", tipo: "Internacional" },
    { nombre: "Universidad de Barcelona", aceptados: "78%", tipo: "Internacional" }
  ];

  const serviciosUniversitarios = [
    {
      servicio: "Asesoría Universitaria",
      descripcion: "Orientación personalizada para elección de carrera y universidad",
      incluye: ["Perfil vocacional", "Selección de universidades", "Preparación de aplicaciones"],
      icon: "🎯"
    },
    {
      servicio: "Preparación de Exámenes",
      descripcion: "Cursos intensivos para exámenes de admisión",
      incluye: ["CENEVAL", "Examen UNAM", "SAT", "TOEFL"],
      icon: "📝"
    },
    {
      servicio: "Becas y Financiamiento",
      descripcion: "Gestión de becas académicas y deportivas",
      incluye: ["Becas académicas", "Becas deportivas", "Becas internacionales"],
      icon: "💰"
    },
    {
      servicio: "Desarrollo de Liderazgo",
      descripcion: "Programa integral de formación de líderes",
      incluye: ["Gobierno estudiantil", "Servicio comunitario", "Emprendimiento"],
      icon: "👑"
    }
  ];

  const laboratoriosEspecializados = [
    "Centro de Investigación Científica",
    "Laboratorio de Biotecnología",
    "Estudio de Medios Digitales",
    "Laboratorio de Simulación Médica",
    "Centro de Innovación Tecnológica",
    "Observatorio Astronómico"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
      {/* Hero Section - Elegante y profesional */}
      <section className="relative text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Preparatoria Piaget
              </h1>
              <p className="text-2xl md:text-3xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
                El último escalón hacia la excelencia universitaria. 
                Donde los sueños profesionales toman forma.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">4</div>
                <div className="text-gray-300 text-sm">Bachilleratos especializados</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">96%</div>
                <div className="text-gray-300 text-sm">Ingreso universitario</div>
              </div>
              <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Universidades destino</div>
              </div>
              <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">85%</div>
                <div className="text-gray-300 text-sm">Con beca universitaria</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contacto">
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-4 px-10 rounded-lg hover:from-amber-600 hover:to-orange-600 transition duration-300 cursor-pointer text-lg">
                  Conoce tu futuro
                </span>
              </Link>
              <Link href="/admisiones">
                <span className="bg-transparent border-2 border-amber-400 text-amber-400 font-bold py-4 px-10 rounded-lg hover:bg-amber-400 hover:text-gray-900 transition duration-300 cursor-pointer text-lg">
                  Proceso de admisión
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Navegación sofisticada */}
        <div className="flex flex-wrap justify-center mb-16 bg-white/5 backdrop-blur rounded-2xl p-3">
          {[
            { id: 'bachilleratos', label: 'Bachilleratos' },
            { id: 'programas', label: 'Programas Especiales' },
            { id: 'universitario', label: 'Acceso Universitario' },
            { id: 'instalaciones', label: 'Campus' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-xl font-semibold transition duration-300 m-2 ${
                activeTab === tab.id 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenido por pestañas */}
        {activeTab === 'bachilleratos' && (
          <div className="space-y-16">
            <section className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-8">Bachilleratos Especializados</h2>
              <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
                Elige la especialización que mejor se adapte a tus intereses y metas profesionales. 
                Cada bachillerato está diseñado para maximizar tu potencial en el área de tu elección.
              </p>
            </section>

            <div className="grid lg:grid-cols-2 gap-8">
              {bachilleratos.map((bachillerato, index) => (
                <div key={index} className="bg-white/5 backdrop-blur rounded-2xl overflow-hidden hover:bg-white/10 transition duration-500">
                  <div className={`bg-gradient-to-r ${bachillerato.color} p-8`}>
                    <div className="flex items-center mb-4">
                      <span className="text-5xl mr-4">{bachillerato.icon}</span>
                      <h3 className="text-2xl font-bold text-white">{bachillerato.nombre}</h3>
                    </div>
                    <p className="text-white/90 text-lg">{bachillerato.descripcion}</p>
                  </div>
                  
                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-amber-400 mb-3">Carreras Universitarias Afines:</h4>
                      <div className="flex flex-wrap gap-2">
                        {bachillerato.carreras.map((carrera, carreraIndex) => (
                          <span key={carreraIndex} className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-lg text-sm">
                            {carrera}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-300 mb-3">Materias Destacadas:</h4>
                      <ul className="space-y-2">
                        {bachillerato.materias.map((materia, materiaIndex) => (
                          <li key={materiaIndex} className="flex items-center text-gray-400">
                            <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                            {materia}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Metodología de alto nivel */}
            <section className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur rounded-2xl p-12">
              <h3 className="text-4xl font-bold text-center mb-12 text-white">Metodología de Élite</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">🎓</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-amber-400">Investigación Avanzada</h4>
                  <p className="text-gray-300 leading-relaxed">Proyectos de investigación a nivel universitario con publicaciones en revistas académicas.</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">🌐</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-orange-400">Networking Internacional</h4>
                  <p className="text-gray-300 leading-relaxed">Conexiones con universidades de prestigio mundial y programas de intercambio.</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">💡</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-red-400">Mentoría Personalizada</h4>
                  <p className="text-gray-300 leading-relaxed">Acompañamiento individual con profesores especializados y profesionales de la industria.</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'programas' && (
          <div className="space-y-16">
            <section className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-8">Programas de Excelencia</h2>
              <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
                Programas exclusivos que abren puertas a las mejores universidades del mundo 
                y proporcionan ventajas competitivas únicas.
              </p>
            </section>

            <div className="space-y-8">
              {programasEspeciales.map((programa, index) => (
                <div key={index} className="bg-white/5 backdrop-blur rounded-2xl p-8 hover:bg-white/10 transition duration-500">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="lg:w-1/4 text-center">
                      <div className="text-8xl mb-4">{programa.icon}</div>
                      <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg p-3">
                        <div className="text-amber-400 font-semibold">Requisito:</div>
                        <div className="text-gray-300">{programa.requisitos}</div>
                      </div>
                    </div>
                    
                    <div className="lg:w-3/4">
                      <h3 className="text-3xl font-bold text-white mb-4">{programa.nombre}</h3>
                      <p className="text-xl text-gray-300 mb-6 leading-relaxed">{programa.descripcion}</p>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-amber-400 mb-3">Beneficios Exclusivos:</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          {programa.beneficios.map((beneficio, beneficioIndex) => (
                            <div key={beneficioIndex} className="bg-amber-500/10 rounded-lg p-3">
                              <span className="text-gray-300">{beneficio}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Estadísticas de impacto */}
            <section className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur rounded-2xl p-12">
              <h3 className="text-4xl font-bold text-center mb-12 text-white">Impacto de Nuestros Programas</h3>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold text-amber-400 mb-2">100%</div>
                  <div className="text-gray-300">Egresados IB aceptados en universidades top</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-orange-400 mb-2">25</div>
                  <div className="text-gray-300">Países donde estudian nuestros egresados</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-red-400 mb-2">$2M+</div>
                  <div className="text-gray-300">En becas obtenidas anualmente</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-pink-400 mb-2">95%</div>
                  <div className="text-gray-300">Satisfacción de padres y estudiantes</div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'universitario' && (
          <div className="space-y-16">
            <section className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-8">Tu Puerta a las Mejores Universidades</h2>
              <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
                Nuestro programa integral de orientación universitaria te guía paso a paso 
                hacia la universidad de tus sueños.
              </p>
            </section>

            {/* Servicios universitarios */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {serviciosUniversitarios.map((servicio, index) => (
                <div key={index} className="bg-white/5 backdrop-blur rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <span className="text-5xl mr-4">{servicio.icon}</span>
                    <h3 className="text-2xl font-bold text-white">{servicio.servicio}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{servicio.descripcion}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-amber-400 mb-3">Incluye:</h4>
                    <ul className="space-y-2">
                      {servicio.incluye.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-400">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Universidades destino */}
            <section className="bg-white/5 backdrop-blur rounded-2xl p-12">
              <h3 className="text-4xl font-bold text-center mb-12 text-white">Universidades de Destino</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {universidadesDestino.map((universidad, index) => (
                  <div key={index} className="bg-white/10 rounded-xl p-6 text-center hover:bg-white/20 transition duration-300">
                    <h4 className="font-bold text-white mb-2">{universidad.nombre}</h4>
                    <div className="text-3xl font-bold text-amber-400 mb-1">{universidad.aceptados}</div>
                    <div className="text-gray-400 text-sm">{universidad.tipo}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Timeline del proceso */}
            <section>
              <h3 className="text-4xl font-bold text-center mb-12 text-white">Proceso de Orientación Universitaria</h3>
              <div className="space-y-6">
                {[
                  { semestre: "1er Semestre", actividad: "Evaluación vocacional y exploración de carreras" },
                  { semestre: "2do Semestre", actividad: "Selección preliminar de universidades" },
                  { semestre: "3er Semestre", actividad: "Preparación intensiva para exámenes" },
                  { semestre: "4to Semestre", actividad: "Aplicaciones universitarias y obtención de becas" },
                  { semestre: "5to Semestre", actividad: "Entrevistas y seguimiento de aplicaciones" },
                  { semestre: "6to Semestre", actividad: "Decisión final y preparación para la transición" }
                ].map((etapa, index) => (
                  <div key={index} className="flex items-center bg-white/5 rounded-xl p-6">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center mr-6 font-bold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-amber-400">{etapa.semestre}</h4>
                      <p className="text-gray-300">{etapa.actividad}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'instalaciones' && (
          <div className="space-y-16">
            <section className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-8">Campus de Nivel Universitario</h2>
              <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
                Instalaciones de última generación que rivalizan con las mejores universidades, 
                preparándote para el nivel académico que encontrarás en tu carrera profesional.
              </p>
            </section>

            {/* Laboratorios especializados */}
            <section className="mb-16">
              <h3 className="text-4xl font-bold text-center mb-12 text-white">Laboratorios de Investigación</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {laboratoriosEspecializados.map((laboratorio, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur rounded-xl p-6 text-center hover:bg-white/10 transition duration-300">
                    <div className="text-4xl mb-4">🔬</div>
                    <h4 className="text-lg font-bold text-white mb-2">{laboratorio}</h4>
                    <p className="text-gray-400 text-sm">Equipamiento de nivel profesional</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Instalaciones por categoría */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-amber-400 flex items-center">
                  <span className="mr-3">🏛️</span> Espacios Académicos
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Aulas magistrales con 60 estudiantes</li>
                  <li>• Seminarios para 15 estudiantes</li>
                  <li>• Salas de conferencias</li>
                  <li>• Centro de recursos digitales</li>
                  <li>• Biblioteca universitaria</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-orange-400 flex items-center">
                  <span className="mr-3">🔬</span> Investigación
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Centro de nanotecnología</li>
                  <li>• Laboratorio de genética</li>
                  <li>• Simuladores médicos</li>
                  <li>• Observatorio astronómico</li>
                  <li>• Centro de supercomputo</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-red-400 flex items-center">
                  <span className="mr-3">🎭</span> Arte y Cultura
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Teatro con 500 butacas</li>
                  <li>• Galería de arte</li>
                  <li>• Estudios de grabación</li>
                  <li>• Salas de ensayo musical</li>
                  <li>• Centro de medios audiovisuales</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center">
                  <span className="mr-3">💻</span> Tecnología
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Laboratorios con IA</li>
                  <li>• Centro de realidad virtual</li>
                  <li>• Fab Lab con impresoras 3D</li>
                  <li>• Estudio de podcasting</li>
                  <li>• Centro de ciberseguridad</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center">
                  <span className="mr-3">🏃</span> Bienestar
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Gimnasio olímpico</li>
                  <li>• Piscina semiolímpica</li>
                  <li>• Centro de wellness</li>
                  <li>• Cafetería gourmet</li>
                  <li>• Espacios de meditación</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-pink-400 flex items-center">
                  <span className="mr-3">🌱</span> Sustentabilidad
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Campus carbono neutral</li>
                  <li>• Paneles solares</li>
                  <li>• Sistema de captación pluvial</li>
                  <li>• Huerto vertical automatizado</li>
                  <li>• Centro de reciclaje</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* CTA final elegante */}
        <section className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur rounded-2xl p-16 text-center mt-20">
          <h2 className="text-5xl font-bold mb-8 text-white">Tu Futuro Profesional Comienza Aquí</h2>
          <p className="text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Únete a la élite educativa mexicana. En Preparatoria Piaget no solo preparamos estudiantes 
            para la universidad, formamos los líderes y profesionales que transformarán el mundo.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contacto">
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-5 px-12 rounded-xl hover:from-amber-600 hover:to-orange-600 transition duration-300 cursor-pointer text-xl">
                Solicita información
              </span>
            </Link>
            <Link href="tel:+528991234567">
              <span className="bg-transparent border-2 border-amber-400 text-amber-400 font-bold py-5 px-12 rounded-xl hover:bg-amber-400 hover:text-gray-900 transition duration-300 cursor-pointer text-xl">
                Agenda una cita
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
