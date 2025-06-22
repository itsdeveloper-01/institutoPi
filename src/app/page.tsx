'use client'

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Carrusel from "../components/ui/Carrusel";
import Card from "../components/ui/EducationCard";
import Link from "next/link";

export default function Home() {
  const pageData = {
    title: "Quiénes somos",
    description:
      "Somos una institución comprometida con la sociedad para formar a nuestros alumnos de manera integral, ya que sabemos son la esencia del mañana.",
    content: `
      <p>Nuestro objetivo es lograr que el estudiante adquiera el conocimiento en un ambiente preparado que le 
      permita adquirir habilidades, conocimientos así como actitudes de una manera dinámica y de forma permanente.</p>
      
      <p>En el Instituto Piaget creemos en el desarrollo integral de cada estudiante, fomentando valores como la 
      responsabilidad, el respeto, la honestidad y la solidaridad. Nuestro equipo docente altamente capacitado 
      trabaja día a día para brindar una educación de calidad que prepare a nuestros alumnos para los retos del futuro.</p>
      
      <p>Contamos con instalaciones modernas y seguras, diseñadas especialmente para cada nivel educativo, 
      desde maternal hasta preparatoria, proporcionando un ambiente propicio para el aprendizaje y el desarrollo personal.</p>
    `,
    facebook_url: "https://facebook.com/InstitutoPiaget",
    instagram_url: "https://instagram.com/instituto_piaget",
    instagram_embed_url: "",
    years_experience: "35",
    students_graduated: "750",
    certified_teachers: "100%",
  };

  const educationLevels = [
    {
      title: "Maternal",
      image: "",
      href: "/maternal",
      description:
        "Para niños de 1 a 3 años. Estimulación temprana centrada en el desarrollo motor y sensorial a través de actividades lúdicas y creativas.",
    },
    {
      title: "Preescolar",
      image: "",
      href: "/preescolar",
      description:
        "De 3 a 6 años. Formación integral con énfasis en creatividad, socialización y valores fundamentales para la vida.",
    },
    {
      title: "Primaria",
      image: "",
      href: "/primaria",
      description:
        "De 6 a 12 años. Educación de excelencia académica con programas de desarrollo integral y pensamiento crítico.",
    },
    {
      title: "Secundaria",
      image: "",
      href: "/secundaria",
      description:
        "De 12 a 15 años. Preparación académica sólida con atención al desarrollo personal y habilidades para el futuro.",
    },
    {
      title: "Preparatoria",
      image: "",
      href: "/preparatoria",
      description:
        "De 15 a 18 años. Formación preuniversitaria con enfoque en competencias para el futuro y liderazgo.",
    },
  ];

  const testimonials = [
    {
      name: "María González",
      role: "Madre de familia",
      initials: "MG",
      testimonial:
        "La educación en el Instituto Piaget ha transformado la vida de mi hijo. Los profesores muestran un verdadero compromiso y el ambiente escolar es excepcional.",
      color: "blue",
    },
    {
      name: "Juan Rodríguez",
      role: "Padre de familia",
      initials: "JR",
      testimonial:
        "Elegimos el Instituto Piaget por su programa académico y nos quedamos por el cuidado y atención personalizada. Es un lugar donde nuestros hijos crecen felices y seguros.",
      color: "green",
    },
  ];

  const upcomingEvents = [
    {
      date: "15 de Junio, 2025",
      title: "Día de puertas abiertas",
      description:
        "Visita nuestras instalaciones y conoce a nuestros docentes en este evento especial para familias interesadas.",
      bgColor: "blue",
    },
    {
      date: "20 de Junio, 2025",
      title: "Feria de ciencias",
      description:
        "Nuestros estudiantes presentarán sus proyectos científicos. Una oportunidad para ver la creatividad e innovación en acción.",
      bgColor: "green",
    },
    {
      date: "1 de Julio, 2025",
      title: "Taller para padres",
      description:
        "Taller sobre educación emocional y acompañamiento en el desarrollo infantil con especialistas en psicopedagogía.",
      bgColor: "purple",
    },
  ];

  return (
    <main className="min-h-screen">
      {/*Carrusel con overlay en el texto*/}
      <div className="relative">
        <Carrusel />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                Instituto Piaget
              </h1>
              <p className="text-lg md:text-xl text-white mb-6 drop-shadow-md">
                Formando el futuro con una educación integral y de excelencia
              </p>
              <Link href="/contacto">
                <span className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 inline-flex items-center cursor-pointer">
                  Agenda una visita
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Sección Quienes somos */}
        <section className="mb-20 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-24 h-1 bg-red-500 mb-6"></div>
            <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
              {pageData.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8 text-center leading-relaxed">
              {pageData.description}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600">
            <div className="prose prose-lg mx-auto prose-headings:text-blue-800 prose-a:text-blue-600">
              <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
            </div>
          </div>
        </section>

        {/* Estadísticas destacadas */}
        <section className="mb-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">
                +{pageData.years_experience}
              </div>
              <div className="text-lg text-blue-100">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">
                +{pageData.students_graduated}
              </div>
              <div className="text-lg text-blue-100">Alumnos graduados</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">
                {pageData.certified_teachers}
              </div>
              <div className="text-lg text-blue-100">Docentes certificados</div>
            </div>
          </div>
        </section>

        {/* Oferta educativa */}
        <section className="mb-20">
          <div className="flex flex-col items-center mb-10">
            <div className="w-24 h-1 bg-green-500 mb-6"></div>
            <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
              Oferta educativa
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-2xl">
              Conoce nuestros niveles educativos y descubre cómo acompañamos a
              cada estudiante en su desarrollo integral
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationLevels.map((level, index) => (
              <Card
                key={index}
                title={level.title}
                image={level.image}
                href={level.href}
                description={level.description}
              />
            ))}

            <div className="bg-gradient-to-br from-gray-100 to-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                ¿Buscas más información?
              </h3>
              <p className="text-gray-600 mb-6">
                Agenda una cita para conocer nuestras instalaciones y recibir
                asesoría personalizada
              </p>
              <Link href="/contacto">
                <span className="bg-yellow-400 hover:bg-yellow-500 text-blue-600 font-medium py-2 px-6 rounded-lg transition duration-300 shadow-md cursor-pointer">
                  Contactar ahora
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="mb-20">
          <div className="flex flex-col items-center mb-10">
            <div className="w-24 h-1 bg-yellow-400 mb-6"></div>
            <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">Testimonios</h2>
            <p className="text-xl text-gray-600 text-center max-w-2xl">
              Lo que dicen nuestras familias sobre el Instituto Piaget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-md border-l-4 ${testimonial.color === 'blue' ? 'border-blue-600' : 'border-green-600'}`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${testimonial.color === 'blue' ? 'bg-blue-100' : 'bg-green-100'} rounded-full flex items-center justify-center mr-4`}>
                    <span className={`${testimonial.color === 'blue' ? 'text-blue-600' : 'text-green-600'} font-bold text-xl`}>{testimonial.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.testimonial}</p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 rounded-xl shadow-xl mb-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para formar parte de nuestra comunidad?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              En el Instituto Piaget nos dedicamos a brindar una educación de
              excelencia. Agenda una visita y descubre por qué somos la mejor
              opción para la educación de tus hijos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <span className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md cursor-pointer">
                  Agenda una visita
                </span>
              </Link>
              <Link href="/admisiones">
                <span className="bg-transparent hover:bg-blue-700 text-white border border-white font-medium py-3 px-8 rounded-lg transition duration-300 cursor-pointer">
                  Proceso de admisión
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Eventos próximos */}
        <section className="mb-20">
          <div className="flex flex-col items-center mb-10">
            <div className="w-24 h-1 bg-red-500 mb-6"></div>
            <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
              Próximos eventos
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-2xl">
              Mantente al día con nuestras actividades y eventos escolares
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition duration-300"
              >
                <div className={`h-48 ${event.bgColor === 'blue' ? 'bg-blue-100' : event.bgColor === 'green' ? 'bg-green-100' : 'bg-purple-100'} relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-t ${event.bgColor === 'blue' ? 'from-blue-900/80' : event.bgColor === 'green' ? 'from-green-900/80' : 'from-purple-900/80'} to-transparent flex items-end p-6`}>
                    <div className="text-white">
                      <p className="font-medium">{event.date}</p>
                      <h3 className="text-xl font-bold">{event.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <a
                    href="#"
                    className="text-blue-600 font-medium inline-flex items-center group-hover:text-blue-800"
                  >
                    Más información
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Ubicación + Redes Sociales */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-10">
            <div className="w-24 h-1 bg-green-500 mb-6"></div>
            <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">
              Encuéntranos y síguenos
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-2xl">
              Visítanos en nuestras instalaciones o conéctate con nosotros a
              través de nuestras redes sociales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Google Maps */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 bg-gray-100 border-b">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Nuestra ubicación
                </h3>
                <p className="text-gray-600">
                  Cte. 1 715, Las Cumbres, 88740 Reynosa, Tamps.
                </p>
                <a
                  href="https://maps.google.com/maps/dir//Instituto+Piaget/@26.061303,-98.326491,15z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center mt-4"
                >
                  Cómo llegar
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div className="h-[400px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.1515542486213!2d-98.32869028986102!3d26.06130297706965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866505ef29e281b5%3A0x5f310a56b992889f!2sInstituto%20Piaget!5e0!3m2!1ses!2smx!4v1744588696731!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            {/* Redes Sociales */}
            <div className="flex flex-col">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="p-6 bg-gray-100 border-b">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Síguenos en redes
                  </h3>
                  <p className="text-gray-600">
                    Mantente al día con nuestras actividades y eventos
                  </p>
                </div>
                <div className="p-8 flex flex-wrap justify-center gap-6">
                  <a
                    href={pageData.facebook_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center hover:scale-110 transition duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <FaFacebook size={28} /> 
                    </div>
                    <span className="text-gray-700 font-medium">Facebook</span>
                  </a>
                  <a
                    href={pageData.instagram_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center hover:scale-110 transition duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center mb-2">
                      <FaInstagram size={28} />
                    </div>
                    <span className="text-gray-700 font-medium">Instagram</span>
                  </a>
                  <a
                    href="https://wa.me/528991234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center hover:scale-110 transition duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-2">
                      <FaWhatsapp size={28}/>
                    </div>
                    <span className="text-gray-700 font-medium">WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Placeholder para Instagram Feed */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 bg-gray-100 border-b">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Lo último en Instagram
                  </h3>
                  <p className="text-gray-600">
                    Conoce nuestras actividades más recientes
                  </p>
                </div>
                <div className="p-8 text-center">
                  <div className="bg-gray-50 rounded-lg p-8">
                    <svg
                      className="w-16 h-16 text-gray-400 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <FaInstagram size={25}/>
                    </svg>
                    <p className="text-gray-500 mb-4">
                      Síguenos en Instagram para ver nuestras publicaciones
                    </p>
                    <a
                      href={pageData.instagram_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                    >
                      Visitar Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* create by Jannvan*/