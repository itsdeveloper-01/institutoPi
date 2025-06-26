"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import "./styles/page.css";

export default function PreparatoriaPage() {
  const [activeTab, setActiveTab] = useState("bachilleratos");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Efecto de parallax y mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Animación de entrada
    setTimeout(() => setIsVisible(true), 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bachilleratos = [
    {
      nombre: "Ciencias Físico-Matemáticas",
      descripcion:
        "Preparación intensiva en ciencias exactas y tecnología avanzada",
      carreras: [
        "Ingeniería",
        "Medicina",
        "Arquitectura",
        "Matemáticas Aplicadas",
      ],
      materias: [
        "Cálculo Diferencial",
        "Física III",
        "Química Orgánica",
        "Estadística",
      ],
      color: "from-blue-600 via-blue-500 to-cyan-500",
      accentColor: "blue-400",
      bgPattern:
        "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)",
    },
    {
      nombre: "Químico-Biológicas",
      descripcion:
        "Formación especializada en ciencias de la salud y biológicas",
      carreras: ["Medicina", "Enfermería", "Biología", "Farmacia"],
      materias: [
        "Biología Molecular",
        "Bioquímica",
        "Anatomía",
        "Microbiología",
      ],
      color: "from-emerald-600 via-green-500 to-teal-500",
      accentColor: "emerald-400",
      bgPattern:
        "linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(20, 184, 166, 0.05) 100%)",
    },
    {
      nombre: "Económico-Administrativas",
      descripcion: "Liderazgo empresarial y formación en ciencias económicas",
      carreras: ["Administración", "Economía", "Contaduría", "Mercadotecnia"],
      materias: ["Macroeconomía", "Contabilidad", "Administración", "Derecho"],
      color: "from-purple-600 via-violet-500 to-indigo-500",
      accentColor: "purple-400",
      bgPattern:
        "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)",
    },
    {
      nombre: "Humanidades y Ciencias Sociales",
      descripcion:
        "Pensamiento crítico y análisis de la sociedad contemporánea",
      carreras: ["Derecho", "Psicología", "Comunicación", "Educación"],
      materias: ["Filosofía", "Sociología", "Literatura", "Historia del Arte"],
      color: "from-orange-600 via-amber-500 to-yellow-500",
      accentColor: "amber-400",
      bgPattern:
        "linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)",
    },
  ];

  const programasEspeciales = [
    {
      nombre: "Programa de Bachillerato Internacional",
      descripcion:
        "Certificación mundial reconocida por universidades de élite",
      beneficios: [
        "Acceso garantizado a universidades internacionales",
        "Desarrollo de pensamiento crítico avanzado",
        "Perspectiva global y multicultural",
      ],
      requisitos: "Promedio mínimo 9.0",
      gradient: "from-slate-800 to-blue-900",
      accentColor: "blue-400",
    },
    {
      nombre: "Programa Dual México-Estados Unidos",
      descripcion: "Doble certificación que abre fronteras académicas",
      beneficios: [
        "Certificación binacional válida",
        "Inglés académico avanzado",
        "Preparación SAT incluida",
      ],
      requisitos: "Nivel B2 de inglés certificado",
      gradient: "from-slate-800 to-indigo-900",
      accentColor: "indigo-400",
    },
    {
      nombre: "Programa STEM Avanzado",
      descripcion: "Innovación tecnológica y investigación científica",
      beneficios: [
        "Proyectos de investigación publicables",
        "Certificaciones tecnológicas internacionales",
        "Incubadora de startups estudiantiles",
      ],
      requisitos: "Aptitud matemática demostrada",
      gradient: "from-slate-800 to-emerald-900",
      accentColor: "emerald-400",
    },
  ];

  const universidadesDestino = [
    { nombre: "UNAM", aceptados: "95%", tipo: "Nacional", rank: "#1 México" },
    {
      nombre: "Tecnológico de Monterrey",
      aceptados: "92%",
      tipo: "Privada",
      rank: "Top 5 Latam",
    },
    {
      nombre: "IPN",
      aceptados: "88%",
      tipo: "Nacional",
      rank: "#2 Ingeniería",
    },
    { nombre: "ITAM", aceptados: "85%", tipo: "Privada", rank: "#1 Economía" },
    {
      nombre: "Harvard University",
      aceptados: "12%",
      tipo: "Internacional",
      rank: "#2 Mundial",
    },
    {
      nombre: "MIT",
      aceptados: "8%",
      tipo: "Internacional",
      rank: "#1 Tecnología",
    },
    {
      nombre: "University of Toronto",
      aceptados: "45%",
      tipo: "Internacional",
      rank: "Top 20 Mundial",
    },
    {
      nombre: "Universidad de Barcelona",
      aceptados: "78%",
      tipo: "Internacional",
      rank: "Top 10 Europa",
    },
  ];

  const serviciosUniversitarios = [
    {
      servicio: "Asesoría Universitaria Personalizada",
      descripcion:
        "Mentoría individual con consultores especializados en admisiones internacionales",
      incluye: [
        "Análisis de perfil vocacional",
        "Estrategia de aplicación universitaria",
        "Preparación de ensayos personales",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      servicio: "Preparación de Exámenes de Admisión",
      descripcion:
        "Entrenamiento intensivo con simuladores y metodología probada",
      incluye: ["CENEVAL-EXANI", "Examen UNAM", "SAT/ACT", "TOEFL/IELTS"],
      color: "from-purple-500 to-pink-500",
    },
    {
      servicio: "Gestión de Becas y Financiamiento",
      descripcion:
        "Acceso a fondos de becas exclusivos y programas de financiamiento",
      incluye: [
        "Becas académicas de excelencia",
        "Becas deportivas",
        "Becas internacionales",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      servicio: "Desarrollo de Liderazgo",
      descripcion:
        "Formación integral en habilidades directivas y emprendimiento",
      incluye: [
        "Gobierno estudiantil",
        "Proyectos de impacto social",
        "Incubadora de empresas",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const laboratoriosEspecializados = [
    {
      nombre: "Centro de Investigación Avanzada",
      especialidad: "Nanotecnología y Biotecnología",
    },
    {
      nombre: "Laboratorio de Simulación Médica",
      especialidad: "Entrenamiento Clínico",
    },
    {
      nombre: "Hub de Innovación Digital",
      especialidad: "IA y Realidad Virtual",
    },
    {
      nombre: "Centro de Análisis Financiero",
      especialidad: "Trading y Fintech",
    },
    {
      nombre: "Observatorio de Ciencias Sociales",
      especialidad: "Investigación Social",
    },
    {
      nombre: "Estudio de Producción Multimedia",
      especialidad: "Comunicación Digital",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Efecto de cursor sutil */}
      <div
        className="fixed inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.03) 0%, transparent 70%)`,
        }}
      />

      {/* Grid pattern sutil */}
      <div
        className="fixed inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Hero Section */}
      <section
        className="relative text-white py-32"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1s ease-out",
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-16">
              <h1 className="text-7xl md:text-8xl font-black mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  PREPARATORIA
                </span>
                <br />
                <span className="text-white font-light">PIAGET</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                Donde la excelencia académica se encuentra con la innovación.
                <span className="text-blue-400 font-medium">
                  {" "}
                  Tu futuro universitario comienza aquí.
                </span>
              </p>
            </div>

            {/* Estadísticas elegantes */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {[
                { num: "4", desc: "Especialidades académicas", prefix: "" },
                { num: "96", desc: "Ingreso universitario", prefix: "%" },
                { num: "50", desc: "Universidades aliadas", prefix: "+" },
                { num: "85", desc: "Con beca de excelencia", prefix: "%" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 group"
                >
                  <div className="text-5xl font-bold text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                    {stat.num}
                    <span className="text-3xl">{stat.prefix}</span>
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Botones sofisticados */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contacto">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-12 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer text-lg transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
                  Solicitar Información
                </span>
              </Link>
              <Link href="/admisiones">
                <span className="bg-transparent border-2 border-blue-400 text-blue-400 font-semibold py-4 px-12 rounded-xl hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 cursor-pointer text-lg transform hover:scale-105">
                  Proceso de Admisión
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        {/* Navegación minimalista */}
        <div className="flex flex-wrap justify-center mb-20 bg-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/10">
          {[
            { id: "bachilleratos", label: "Especialidades" },
            { id: "programas", label: "Programas Avanzados" },
            { id: "universitario", label: "Acceso Universitario" },
            { id: "instalaciones", label: "Campus" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 m-1 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenido por pestañas */}
        <div className="transition-all duration-700">
          {activeTab === "bachilleratos" && (
            <div className="space-y-20">
              <section className="text-center mb-20">
                <h2 className="text-5xl font-bold text-white mb-8">
                  Especialidades Académicas
                </h2>
                <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                  Programas diseñados para maximizar tu potencial académico y
                  prepararte para el éxito universitario.
                </p>
              </section>

              <div className="grid lg:grid-cols-2 gap-8">
                {bachilleratos.map((bachillerato, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 group"
                    style={{
                      background: bachillerato.bgPattern,
                    }}
                  >
                    <div
                      className={`bg-gradient-to-r ${bachillerato.color} p-8 relative`}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {bachillerato.nombre}
                        </h3>
                        <p className="text-white/90 text-lg">
                          {bachillerato.descripcion}
                        </p>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="mb-8">
                        <h4
                          className={`text-lg font-semibold text-${bachillerato.accentColor} mb-4`}
                        >
                          Carreras Universitarias
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {bachillerato.carreras.map(
                            (carrera, carreraIndex) => (
                              <span
                                key={carreraIndex}
                                className={`bg-${bachillerato.accentColor}/10 text-${bachillerato.accentColor} px-4 py-2 rounded-lg text-sm font-medium border border-${bachillerato.accentColor}/20`}
                              >
                                {carrera}
                              </span>
                            )
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-300 mb-4">
                          Materias Avanzadas
                        </h4>
                        <ul className="space-y-3">
                          {bachillerato.materias.map(
                            (materia, materiaIndex) => (
                              <li
                                key={materiaIndex}
                                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                              >
                                <div
                                  className={`w-2 h-2 bg-${bachillerato.accentColor} rounded-full mr-4`}
                                ></div>
                                {materia}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Metodología */}
              <section className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-16 border border-white/10">
                <h3 className="text-4xl font-bold text-center mb-16 text-white">
                  Metodología de Excelencia
                </h3>
                <div className="grid md:grid-cols-3 gap-12">
                  {[
                    {
                      title: "Investigación Aplicada",
                      desc: "Proyectos de investigación con impacto real en la comunidad científica y académica.",
                    },
                    {
                      title: "Mentoría Especializada",
                      desc: "Acompañamiento personalizado con académicos y profesionales de alto nivel.",
                    },
                    {
                      title: "Networking Global",
                      desc: "Conexiones directas con universidades e instituciones de prestigio internacional.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                        <div className="w-8 h-8 bg-white rounded-lg"></div>
                      </div>
                      <h4 className="text-xl font-bold mb-4 text-blue-400">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === "programas" && (
            <div className="space-y-20">
              <section className="text-center mb-20">
                <h2 className="text-5xl font-bold text-white mb-8">
                  Programas de Élite
                </h2>
                <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                  Certificaciones internacionales que abren las puertas a las
                  mejores universidades del mundo.
                </p>
              </section>

              <div className="space-y-12">
                {programasEspeciales.map((programa, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 hover:border-white/20 transition-all duration-500 group"
                  >
                    <div className="flex flex-col lg:flex-row gap-12">
                      <div className="lg:w-1/3">
                        <div
                          className={`bg-gradient-to-r ${programa.gradient} rounded-2xl p-8 text-center border border-white/20`}
                        >
                          <h3 className="text-2xl font-bold text-white mb-4">
                            {programa.nombre}
                          </h3>
                          <div
                            className={`text-${programa.accentColor} font-semibold mb-2`}
                          >
                            Requisito de Ingreso
                          </div>
                          <div className="text-gray-300">
                            {programa.requisitos}
                          </div>
                        </div>
                      </div>

                      <div className="lg:w-2/3">
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                          {programa.descripcion}
                        </p>

                        <div>
                          <h4
                            className={`text-lg font-semibold text-${programa.accentColor} mb-6`}
                          >
                            Beneficios del Programa
                          </h4>
                          <div className="grid gap-4">
                            {programa.beneficios.map(
                              (beneficio, beneficioIndex) => (
                                <div
                                  key={beneficioIndex}
                                  className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                                >
                                  <span className="text-gray-300">
                                    {beneficio}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Estadísticas de impacto */}
              <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-xl rounded-3xl p-16 border border-blue-500/20">
                <h3 className="text-4xl font-bold text-center mb-16 text-white">
                  Resultados Comprobados
                </h3>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  {[
                    {
                      num: "100%",
                      desc: "Egresados IB aceptados en universidades top",
                    },
                    {
                      num: "25",
                      desc: "Países donde estudian nuestros graduados",
                    },
                    { num: "$2.5M", desc: "En becas obtenidas anualmente" },
                    {
                      num: "98%",
                      desc: "Satisfacción de estudiantes y familias",
                    },
                  ].map((stat, index) => (
                    <div key={index}>
                      <div className="text-5xl font-bold text-blue-400 mb-3">
                        {stat.num}
                      </div>
                      <div className="text-gray-400">{stat.desc}</div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === "universitario" && (
            <div className="space-y-20">
              <section className="text-center mb-20">
                <h2 className="text-5xl font-bold text-white mb-8">
                  Acceso Universitario Garantizado
                </h2>
                <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                  Programa integral de orientación que te guía hacia la
                  universidad ideal para tu perfil académico.
                </p>
              </section>

              {/* Servicios universitarios */}
              <div className="grid lg:grid-cols-2 gap-8 mb-20">
                {serviciosUniversitarios.map((servicio, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group"
                  >
                    <div className="mb-8">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${servicio.color} rounded-2xl mb-6`}
                      ></div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {servicio.servicio}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {servicio.descripcion}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-4">
                        Incluye
                      </h4>
                      <ul className="space-y-3">
                        {servicio.incluye.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-center text-gray-400"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Universidades destino */}
              <section className="bg-white/5 backdrop-blur-xl rounded-3xl p-16 border border-white/10">
                <h3 className="text-4xl font-bold text-center mb-16 text-white">
                  Universidades de Destino
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {universidadesDestino.map((universidad, index) => (
                    <div
                      key={index}
                      className="bg-white/10 rounded-2xl p-6 text-center border border-white/10 hover:border-white/20 transition-all duration-300 group"
                    >
                      <h4 className="font-bold text-white mb-2 text-lg">
                        {universidad.nombre}
                      </h4>
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        {universidad.aceptados}
                      </div>
                      <div className="text-gray-400 text-sm mb-1">
                        {universidad.tipo}
                      </div>
                      <div className="text-blue-300 text-xs">
                        {universidad.rank}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Timeline del proceso */}
              <section>
                <h3 className="text-4xl font-bold text-center mb-16 text-white">
                  Ruta hacia la Universidad
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      semestre: "Primer Año",
                      actividad:
                        "Evaluación vocacional y exploración de carreras",
                      fase: "Exploración",
                    },
                    {
                      semestre: "Segundo Año",
                      actividad:
                        "Selección de universidades y preparación académica",
                      fase: "Preparación",
                    },
                    {
                      semestre: "Tercer Año",
                      actividad:
                        "Entrenamiento intensivo para exámenes de admisión",
                      fase: "Entrenamiento",
                    },
                    {
                      semestre: "Año Final",
                      actividad:
                        "Aplicaciones, becas y transición universitaria",
                      fase: "Aplicación",
                    },
                  ].map((etapa, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                    >
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center mr-8 font-bold text-white text-2xl">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h4 className="text-xl font-bold text-blue-400">
                            {etapa.semestre}
                          </h4>
                          <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                            {etapa.fase}
                          </span>
                        </div>
                        <p className="text-gray-300">{etapa.actividad}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === "instalaciones" && (
            <div className="space-y-20">
              <section className="text-center mb-20">
                <h2 className="text-5xl font-bold text-white mb-8">
                  Campus de Vanguardia
                </h2>
                <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                  Instalaciones que rivalizan con las mejores universidades,
                  diseñadas para la excelencia académica.
                </p>
              </section>

              {/* Laboratorios especializados */}
              <section className="mb-20">
                <h3 className="text-4xl font-bold text-center mb-16 text-white">
                  Centros de Investigación
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {laboratoriosEspecializados.map((laboratorio, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6"></div>
                      <h4 className="text-xl font-bold text-white mb-3">
                        {laboratorio.nombre}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {laboratorio.especialidad}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Instalaciones por categoría */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Espacios Académicos",
                    color: "from-blue-600 to-cyan-600",
                    items: [
                      "Aulas inteligentes con tecnología 4.0",
                      "Auditorios con capacidad para 300 personas",
                      "Salas de seminarios especializadas",
                      "Biblioteca digital de última generación",
                      "Centro de recursos multimedia",
                    ],
                  },
                  {
                    title: "Laboratorios de Investigación",
                    color: "from-purple-600 to-indigo-600",
                    items: [
                      "Centro de biotecnología avanzada",
                      "Laboratorio de física cuántica",
                      "Simuladores médicos de alta fidelidad",
                      "Observatorio astronómico automatizado",
                      "Centro de supercomputación",
                    ],
                  },
                  {
                    title: "Tecnología e Innovación",
                    color: "from-emerald-600 to-teal-600",
                    items: [
                      "Laboratorios de inteligencia artificial",
                      "Centro de realidad virtual y aumentada",
                      "Fab Lab con impresión 3D industrial",
                      "Estudio de producción audiovisual",
                      "Centro de ciberseguridad",
                    ],
                  },
                  {
                    title: "Arte y Humanidades",
                    color: "from-orange-600 to-red-600",
                    items: [
                      "Teatro profesional con 400 butacas",
                      "Galería de arte contemporáneo",
                      "Estudios de grabación musical",
                      "Talleres de artes visuales",
                      "Centro de debates y oratoria",
                    ],
                  },
                  {
                    title: "Deportes y Bienestar",
                    color: "from-teal-600 to-blue-600",
                    items: [
                      "Complejo deportivo olímpico",
                      "Piscina semiolímpica climatizada",
                      "Centro de acondicionamiento físico",
                      "Canchas profesionales multideporte",
                      "Centro de wellness y nutrición",
                    ],
                  },
                  {
                    title: "Sustentabilidad",
                    color: "from-green-600 to-emerald-600",
                    items: [
                      "Campus 100% sustentable",
                      "Sistema de energía solar",
                      "Captación y tratamiento de agua",
                      "Jardines verticales automatizados",
                      "Centro de economía circular",
                    ],
                  },
                ].map((categoria, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${categoria.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                    ></div>
                    <h3 className="text-2xl font-bold mb-6 text-white">
                      {categoria.title}
                    </h3>
                    <ul className="space-y-4">
                      {categoria.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start text-gray-400 hover:text-white transition-colors duration-300 group-hover:translate-x-2"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Campus virtual tour */}
              <section className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-16 border border-white/10 text-center">
                <h3 className="text-4xl font-bold mb-8 text-white">
                  Experiencia Inmersiva
                </h3>
                <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                  Descubre nuestro campus a través de recorridos virtuales en
                  360° y experimenta nuestras instalaciones desde cualquier
                  lugar.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/10 rounded-2xl p-8 border border-white/10">
                    <h4 className="text-xl font-bold text-blue-400 mb-4">
                      Tour Virtual 360°
                    </h4>
                    <p className="text-gray-400 mb-6">
                      Explora cada rincón de nuestro campus con tecnología de
                      realidad virtual.
                    </p>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300">
                      Iniciar Tour
                    </button>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-8 border border-white/10">
                    <h4 className="text-xl font-bold text-emerald-400 mb-4">
                      Visita Presencial
                    </h4>
                    <p className="text-gray-400 mb-6">
                      Agenda una visita personalizada con nuestros asesores
                      académicos.
                    </p>
                    <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300">
                      Agendar Visita
                    </button>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>

        {/* CTA final minimalista y elegante */}
        <section className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-3xl p-20 text-center mt-32 border border-white/10 relative overflow-hidden">
          {/* Efecto de líneas sutiles */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.1) 41%, rgba(59, 130, 246, 0.1) 59%, transparent 60%)`,
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-6xl font-bold mb-8 text-white">
              Define Tu Futuro
            </h2>
            <p className="text-2xl mb-16 max-w-4xl mx-auto text-gray-300 leading-relaxed font-light">
              En Preparatoria Piaget transformamos el potencial en excelencia.
              <span className="text-blue-400 font-medium">
                {" "}
                Únete a la próxima generación de líderes.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link href="/contacto">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-6 px-16 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-500 cursor-pointer text-xl transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
                  Solicitar Información
                </span>
              </Link>
              <Link href="tel:+528991234567">
                <span className="bg-transparent border-2 border-blue-400 text-blue-400 font-semibold py-6 px-16 rounded-2xl hover:bg-blue-400 hover:text-slate-900 transition-all duration-500 cursor-pointer text-xl transform hover:scale-105">
                  Contactar Asesor
                </span>
              </Link>
            </div>

            {/* Indicadores de confianza */}
            <div className="flex justify-center items-center gap-12 mt-16 opacity-60">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">SEP</div>
                <div className="text-xs text-gray-400">Reconocido</div>
              </div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">UNAM</div>
                <div className="text-xs text-gray-400">Incorporado</div>
              </div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">IB</div>
                <div className="text-xs text-gray-400">Autorizado</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
