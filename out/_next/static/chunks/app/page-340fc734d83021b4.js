(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[974],{

/***/ 1574:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5346));


/***/ }),

/***/ 5346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5155);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.mjs
var fa = __webpack_require__(9911);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2115);
// EXTERNAL MODULE: ./node_modules/next/dist/api/image.js
var api_image = __webpack_require__(6766);
;// ./src/components/ui/Carrusel.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Carrusel_images = [
    {
        src: '/images/hero1.png',
        alt: 'Instituto Piaget - Instalaciones principales'
    },
    {
        src: '/images/hero2.png',
        alt: 'Estudiantes en el aula'
    },
    {
        src: '/images/hero3.png',
        alt: 'Actividades escolares'
    }
];
function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = (0,react.useState)(0);
    // Auto avance de slides
    (0,react.useEffect)(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prevIndex)=>(prevIndex + 1) % Carrusel_images.length);
        }, 5000);
        return ()=>clearInterval(interval);
    }, []);
    // Cambiar al slide anterior
    const prevSlide = ()=>{
        setCurrentIndex((prevIndex)=>(prevIndex - 1 + Carrusel_images.length) % Carrusel_images.length);
    };
    // Cambiar al siguiente slide
    const nextSlide = ()=>{
        setCurrentIndex((prevIndex)=>(prevIndex + 1) % Carrusel_images.length);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "relative h-[500px] md:h-[600px] overflow-hidden",
        children: [
            Carrusel_images.map((image, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "absolute inset-0 transition-opacity duration-1000 ".concat(index === currentIndex ? 'opacity-100' : 'opacity-0'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(api_image["default"], {
                        src: image.src,
                        alt: image.alt,
                        fill: true,
                        className: "object-cover",
                        priority: index === 0,
                        sizes: "100vw"
                    })
                }, index)),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "absolute inset-0 flex items-center justify-between p-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        onClick: prevSlide,
                        className: "bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full text-white transition-colors duration-300",
                        "aria-label": "Slide anterior",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-6 w-6",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M15 19l-7-7 7-7"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        onClick: nextSlide,
                        className: "bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full text-white transition-colors duration-300",
                        "aria-label": "Siguiente slide",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-6 w-6",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 5l7 7-7 7"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "absolute bottom-5 left-0 right-0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex justify-center space-x-2",
                    children: Carrusel_images.map((_, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            onClick: ()=>setCurrentIndex(index),
                            className: "w-3 h-3 rounded-full transition-colors duration-300 ".concat(index === currentIndex ? 'bg-white' : 'bg-white/50'),
                            "aria-label": "Ir al slide ".concat(index + 1)
                        }, index))
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/dist/client/app-dir/link.js
var app_dir_link = __webpack_require__(6874);
var link_default = /*#__PURE__*/__webpack_require__.n(app_dir_link);
;// ./src/components/ui/EducationCard.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function EducationCard(param) {
    let { title, image, href, description } = param;
    const [imageError, setImageError] = (0,react.useState)(false);
    const [imageLoaded, setImageLoaded] = (0,react.useState)(false);
    const handleImageError = ()=>{
        setImageError(true);
    };
    const handleImageLoad = ()=>{
        setImageLoaded(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition duration-300",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative h-48 overflow-hidden bg-gray-100",
                children: [
                    image && !imageError && /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: image,
                        alt: title,
                        className: "w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ".concat(imageLoaded ? 'opacity-100' : 'opacity-0'),
                        onError: handleImageError,
                        onLoad: handleImageLoad
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute inset-0 w-full h-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center transition-opacity duration-300 ".concat(!image || imageError || !imageLoaded ? 'opacity-100' : 'opacity-0'),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                        className: "w-8 h-8 text-blue-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-sm text-gray-600 font-medium",
                                    children: title
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                            className: "text-white text-xl font-bold",
                            children: title
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                        className: "text-xl font-bold text-gray-800 mb-2",
                        children: title
                    }),
                    description && /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-gray-600 mb-4 text-sm leading-relaxed",
                        children: description
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                        href: href,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            className: "inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors cursor-pointer",
                            children: [
                                "Conocer m\xe1s",
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5 ml-1",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                        fillRule: "evenodd",
                                        d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
                                        clipRule: "evenodd"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

;// ./src/app/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Home() {
    const pageData = {
        title: "Quiénes somos",
        description: "Somos una institución comprometida con la sociedad para formar a nuestros alumnos de manera integral, ya que sabemos son la esencia del mañana.",
        content: "\n      <p>Nuestro objetivo es lograr que el estudiante adquiera el conocimiento en un ambiente preparado que le \n      permita adquirir habilidades, conocimientos as\xed como actitudes de una manera din\xe1mica y de forma permanente.</p>\n      \n      <p>En el Instituto Piaget creemos en el desarrollo integral de cada estudiante, fomentando valores como la \n      responsabilidad, el respeto, la honestidad y la solidaridad. Nuestro equipo docente altamente capacitado \n      trabaja d\xeda a d\xeda para brindar una educaci\xf3n de calidad que prepare a nuestros alumnos para los retos del futuro.</p>\n      \n      <p>Contamos con instalaciones modernas y seguras, dise\xf1adas especialmente para cada nivel educativo, \n      desde maternal hasta preparatoria, proporcionando un ambiente propicio para el aprendizaje y el desarrollo personal.</p>\n    ",
        facebook_url: "https://facebook.com/InstitutoPiaget",
        instagram_url: "https://instagram.com/instituto_piaget",
        instagram_embed_url: "",
        years_experience: "35",
        students_graduated: "750",
        certified_teachers: "100%"
    };
    const educationLevels = [
        {
            title: "Maternal",
            image: "",
            href: "/maternal",
            description: "Para niños de 1 a 3 años. Estimulación temprana centrada en el desarrollo motor y sensorial a través de actividades lúdicas y creativas."
        },
        {
            title: "Preescolar",
            image: "",
            href: "/preescolar",
            description: "De 3 a 6 años. Formación integral con énfasis en creatividad, socialización y valores fundamentales para la vida."
        },
        {
            title: "Primaria",
            image: "",
            href: "/primaria",
            description: "De 6 a 12 años. Educación de excelencia académica con programas de desarrollo integral y pensamiento crítico."
        },
        {
            title: "Secundaria",
            image: "",
            href: "/secundaria",
            description: "De 12 a 15 años. Preparación académica sólida con atención al desarrollo personal y habilidades para el futuro."
        },
        {
            title: "Preparatoria",
            image: "",
            href: "/preparatoria",
            description: "De 15 a 18 años. Formación preuniversitaria con enfoque en competencias para el futuro y liderazgo."
        }
    ];
    const testimonials = [
        {
            name: "María González",
            role: "Madre de familia",
            initials: "MG",
            testimonial: "La educación en el Instituto Piaget ha transformado la vida de mi hijo. Los profesores muestran un verdadero compromiso y el ambiente escolar es excepcional.",
            color: "blue"
        },
        {
            name: "Juan Rodríguez",
            role: "Padre de familia",
            initials: "JR",
            testimonial: "Elegimos el Instituto Piaget por su programa académico y nos quedamos por el cuidado y atención personalizada. Es un lugar donde nuestros hijos crecen felices y seguros.",
            color: "green"
        }
    ];
    const upcomingEvents = [
        {
            date: "15 de Junio, 2025",
            title: "Día de puertas abiertas",
            description: "Visita nuestras instalaciones y conoce a nuestros docentes en este evento especial para familias interesadas.",
            bgColor: "blue"
        },
        {
            date: "20 de Junio, 2025",
            title: "Feria de ciencias",
            description: "Nuestros estudiantes presentarán sus proyectos científicos. Una oportunidad para ver la creatividad e innovación en acción.",
            bgColor: "green"
        },
        {
            date: "1 de Julio, 2025",
            title: "Taller para padres",
            description: "Taller sobre educación emocional y acompañamiento en el desarrollo infantil con especialistas en psicopedagogía.",
            bgColor: "purple"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(HeroCarousel, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent flex items-center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "container mx-auto px-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "max-w-lg",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                        className: "text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg",
                                        children: "Instituto Piaget"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-lg md:text-xl text-white mb-6 drop-shadow-md",
                                        children: "Formando el futuro con una educaci\xf3n integral y de excelencia"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                        href: "/contacto",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 inline-flex items-center cursor-pointer",
                                            children: [
                                                "Agenda una visita",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-5 w-5 ml-2",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                        fillRule: "evenodd",
                                                        d: "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",
                                                        clipRule: "evenodd"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container mx-auto px-4 py-12",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "mb-20 max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "w-24 h-1 bg-red-500 mb-6"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                        className: "text-4xl font-bold mb-6 text-center text-gray-800",
                                        children: pageData.title
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-xl text-gray-600 mb-8 text-center leading-relaxed",
                                        children: pageData.description
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "prose prose-lg mx-auto prose-headings:text-blue-800 prose-a:text-blue-600",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: pageData.content
                                        }
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "mb-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-xl overflow-hidden",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-8 p-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text-5xl font-bold text-white mb-2",
                                            children: [
                                                "+",
                                                pageData.years_experience
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-lg text-blue-100",
                                            children: "A\xf1os de experiencia"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text-5xl font-bold text-white mb-2",
                                            children: [
                                                "+",
                                                pageData.students_graduated
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-lg text-blue-100",
                                            children: "Alumnos graduados"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-5xl font-bold text-white mb-2",
                                            children: pageData.certified_teachers
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "text-lg text-blue-100",
                                            children: "Docentes certificados"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "mb-20",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col items-center mb-10",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "w-24 h-1 bg-green-500 mb-6"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                        className: "text-4xl font-bold mb-4 text-center text-gray-800",
                                        children: "Oferta educativa"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-xl text-gray-600 text-center max-w-2xl",
                                        children: "Conoce nuestros niveles educativos y descubre c\xf3mo acompa\xf1amos a cada estudiante en su desarrollo integral"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
                                children: [
                                    educationLevels.map((level, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(EducationCard, {
                                            title: level.title,
                                            image: level.image,
                                            href: level.href,
                                            description: level.description
                                        }, index)),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-gradient-to-br from-gray-100 to-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center border border-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                className: "text-2xl font-bold text-blue-600 mb-4",
                                                children: "\xbfBuscas m\xe1s informaci\xf3n?"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-gray-600 mb-6",
                                                children: "Agenda una cita para conocer nuestras instalaciones y recibir asesor\xeda personalizada"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                href: "/contacto",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: "bg-yellow-400 hover:bg-yellow-500 text-blue-600 font-medium py-2 px-6 rounded-lg transition duration-300 shadow-md cursor-pointer",
                                                    children: "Contactar ahora"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "mb-20",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col items-center mb-10",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "w-24 h-1 bg-yellow-400 mb-6"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                        className: "text-4xl font-bold mb-4 text-center text-gray-800",
                                        children: "Testimonios"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-xl text-gray-600 text-center max-w-2xl",
                                        children: "Lo que dicen nuestras familias sobre el Instituto Piaget"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                                children: testimonials.map((testimonial, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white p-8 rounded-xl shadow-md border-l-4 ".concat(testimonial.color === 'blue' ? 'border-blue-600' : 'border-green-600'),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: "w-12 h-12 ".concat(testimonial.color === 'blue' ? 'bg-blue-100' : 'bg-green-100', " rounded-full flex items-center justify-center mr-4"),
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: "".concat(testimonial.color === 'blue' ? 'text-blue-600' : 'text-green-600', " font-bold text-xl"),
                                                            children: testimonial.initials
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                                className: "font-bold text-gray-800",
                                                                children: testimonial.name
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                className: "text-gray-500 text-sm",
                                                                children: testimonial.role
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-gray-600 italic",
                                                children: testimonial.testimonial
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "flex mt-4 text-yellow-400",
                                                children: [
                                                    ...Array(5)
                                                ].map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "h-5 w-5",
                                                        viewBox: "0 0 20 20",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                            d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                        })
                                                    }, i))
                                            })
                                        ]
                                    }, index))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                        className: "bg-gradient-to-r from-blue-600 to-blue-700 py-16 rounded-xl shadow-xl mb-20",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "container mx-auto px-4 text-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                    className: "text-3xl md:text-4xl font-bold text-white mb-6",
                                    children: "\xbfListo para formar parte de nuestra comunidad?"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-xl text-blue-100 mb-8 max-w-3xl mx-auto",
                                    children: "En el Instituto Piaget nos dedicamos a brindar una educaci\xf3n de excelencia. Agenda una visita y descubre por qu\xe9 somos la mejor opci\xf3n para la educaci\xf3n de tus hijos."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                            href: "/contacto",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md cursor-pointer",
                                                children: "Agenda una visita"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                            href: "/admisiones",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "bg-transparent hover:bg-blue-700 text-white border border-white font-medium py-3 px-8 rounded-lg transition duration-300 cursor-pointer",
                                                children: "Proceso de admisi\xf3n"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: "mb-20",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col items-center mb-10",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "w-24 h-1 bg-red-500 mb-6"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                        className: "text-4xl font-bold mb-4 text-center text-gray-800",
                                        children: "Pr\xf3ximos eventos"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-xl text-gray-600 text-center max-w-2xl",
                                        children: "Mantente al d\xeda con nuestras actividades y eventos escolares"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                children: upcomingEvents.map((event, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition duration-300",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "h-48 ".concat(event.bgColor === 'blue' ? 'bg-blue-100' : event.bgColor === 'green' ? 'bg-green-100' : 'bg-purple-100', " relative overflow-hidden"),
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t ".concat(event.bgColor === 'blue' ? 'from-blue-900/80' : event.bgColor === 'green' ? 'from-green-900/80' : 'from-purple-900/80', " to-transparent flex items-end p-6"),
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "text-white",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                className: "font-medium",
                                                                children: event.date
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                className: "text-xl font-bold",
                                                                children: event.title
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "p-6",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        className: "text-gray-600 mb-4",
                                                        children: event.description
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        href: "#",
                                                        className: "text-blue-600 font-medium inline-flex items-center group-hover:text-blue-800",
                                                        children: [
                                                            "M\xe1s informaci\xf3n",
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                className: "h-5 w-5 ml-1",
                                                                viewBox: "0 0 20 20",
                                                                fill: "currentColor",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
                                                                    clipRule: "evenodd"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, index))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: "bg-gray-50 py-16",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col items-center mb-10",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "w-24 h-1 bg-green-500 mb-6"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                    className: "text-4xl font-bold mb-4 text-center text-gray-800",
                                    children: "Encu\xe9ntranos y s\xedguenos"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-xl text-gray-600 text-center max-w-2xl",
                                    children: "Vis\xedtanos en nuestras instalaciones o con\xe9ctate con nosotros a trav\xe9s de nuestras redes sociales"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-12",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "bg-white rounded-xl shadow-lg overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "p-6 bg-gray-100 border-b",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                    className: "text-2xl font-bold text-gray-800 mb-2",
                                                    children: "Nuestra ubicaci\xf3n"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-gray-600",
                                                    children: "Cte. 1 715, Las Cumbres, 88740 Reynosa, Tamps."
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                    href: "https://maps.google.com/maps/dir//Instituto+Piaget/@26.061303,-98.326491,15z/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-blue-600 hover:text-blue-800 font-medium inline-flex items-center mt-4",
                                                    children: [
                                                        "C\xf3mo llegar",
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-5 w-5 ml-1",
                                                            viewBox: "0 0 20 20",
                                                            fill: "currentColor",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                                                fillRule: "evenodd",
                                                                d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
                                                                clipRule: "evenodd"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "h-[400px] overflow-hidden",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
                                                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.1515542486213!2d-98.32869028986102!3d26.06130297706965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866505ef29e281b5%3A0x5f310a56b992889f!2sInstituto%20Piaget!5e0!3m2!1ses!2smx!4v1744588696731!5m2!1ses!2smx",
                                                width: "100%",
                                                height: "100%",
                                                style: {
                                                    border: 0
                                                },
                                                allowFullScreen: true,
                                                loading: "lazy",
                                                referrerPolicy: "no-referrer-when-downgrade"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-white rounded-xl shadow-lg overflow-hidden mb-8",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "p-6 bg-gray-100 border-b",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                            className: "text-2xl font-bold text-gray-800 mb-2",
                                                            children: "S\xedguenos en redes"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                            className: "text-gray-600",
                                                            children: "Mantente al d\xeda con nuestras actividades y eventos"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "p-8 flex flex-wrap justify-center gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                            href: pageData.facebook_url,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "flex flex-col items-center hover:scale-110 transition duration-300",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(fa/* FaFacebook */.iYk, {
                                                                        size: 28
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    className: "text-gray-700 font-medium",
                                                                    children: "Facebook"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                            href: pageData.instagram_url,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "flex flex-col items-center hover:scale-110 transition duration-300",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center mb-2",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(fa/* FaInstagram */.ao$, {
                                                                        size: 28
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    className: "text-gray-700 font-medium",
                                                                    children: "Instagram"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                            href: "https://wa.me/528991234567",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "flex flex-col items-center hover:scale-110 transition duration-300",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: "w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-2",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(fa/* FaWhatsapp */.EcP, {
                                                                        size: 28
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    className: "text-gray-700 font-medium",
                                                                    children: "WhatsApp"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "bg-white rounded-xl shadow-lg overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "p-6 bg-gray-100 border-b",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                            className: "text-2xl font-bold text-gray-800 mb-2",
                                                            children: "Lo \xfaltimo en Instagram"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                            className: "text-gray-600",
                                                            children: "Conoce nuestras actividades m\xe1s recientes"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "p-8 text-center",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "bg-gray-50 rounded-lg p-8",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                                                                className: "w-16 h-16 text-gray-400 mx-auto mb-4",
                                                                fill: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(fa/* FaInstagram */.ao$, {
                                                                    size: 25
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                className: "text-gray-500 mb-4",
                                                                children: "S\xedguenos en Instagram para ver nuestras publicaciones"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                                href: pageData.instagram_url,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300",
                                                                children: "Visitar Instagram"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
} /* create by Jannvan*/ 


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [711,874,751,441,684,358], () => (__webpack_exec__(1574)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);