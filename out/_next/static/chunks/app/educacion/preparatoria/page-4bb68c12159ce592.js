(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[151],{

/***/ 4871:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7109));


/***/ }),

/***/ 5216:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 7109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PreparatoriaPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5155);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6874);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2115);
/* harmony import */ var _styles_page_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5216);
/* harmony import */ var _styles_page_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_page_css__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function PreparatoriaPage() {
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("bachilleratos");
    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        x: 0,
        y: 0
    });
    const [scrollY, setScrollY] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    // Efecto de parallax y mouse tracking
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleMouseMove = (e)=>{
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };
        const handleScroll = ()=>{
            setScrollY(window.scrollY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);
        // Animación de entrada
        setTimeout(()=>setIsVisible(true), 100);
        return ()=>{
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const bachilleratos = [
        {
            nombre: "Ciencias Físico-Matemáticas",
            descripcion: "Preparación intensiva en ciencias exactas y tecnología avanzada",
            carreras: [
                "Ingeniería",
                "Medicina",
                "Arquitectura",
                "Matemáticas Aplicadas"
            ],
            materias: [
                "Cálculo Diferencial",
                "Física III",
                "Química Orgánica",
                "Estadística"
            ],
            color: "from-blue-600 via-blue-500 to-cyan-500",
            accentColor: "blue-400",
            bgPattern: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)"
        },
        {
            nombre: "Químico-Biológicas",
            descripcion: "Formación especializada en ciencias de la salud y biológicas",
            carreras: [
                "Medicina",
                "Enfermería",
                "Biología",
                "Farmacia"
            ],
            materias: [
                "Biología Molecular",
                "Bioquímica",
                "Anatomía",
                "Microbiología"
            ],
            color: "from-emerald-600 via-green-500 to-teal-500",
            accentColor: "emerald-400",
            bgPattern: "linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(20, 184, 166, 0.05) 100%)"
        },
        {
            nombre: "Económico-Administrativas",
            descripcion: "Liderazgo empresarial y formación en ciencias económicas",
            carreras: [
                "Administración",
                "Economía",
                "Contaduría",
                "Mercadotecnia"
            ],
            materias: [
                "Macroeconomía",
                "Contabilidad",
                "Administración",
                "Derecho"
            ],
            color: "from-purple-600 via-violet-500 to-indigo-500",
            accentColor: "purple-400",
            bgPattern: "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)"
        },
        {
            nombre: "Humanidades y Ciencias Sociales",
            descripcion: "Pensamiento crítico y análisis de la sociedad contemporánea",
            carreras: [
                "Derecho",
                "Psicología",
                "Comunicación",
                "Educación"
            ],
            materias: [
                "Filosofía",
                "Sociología",
                "Literatura",
                "Historia del Arte"
            ],
            color: "from-orange-600 via-amber-500 to-yellow-500",
            accentColor: "amber-400",
            bgPattern: "linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)"
        }
    ];
    const programasEspeciales = [
        {
            nombre: "Programa de Bachillerato Internacional",
            descripcion: "Certificación mundial reconocida por universidades de élite",
            beneficios: [
                "Acceso garantizado a universidades internacionales",
                "Desarrollo de pensamiento crítico avanzado",
                "Perspectiva global y multicultural"
            ],
            requisitos: "Promedio mínimo 9.0",
            gradient: "from-slate-800 to-blue-900",
            accentColor: "blue-400"
        },
        {
            nombre: "Programa Dual México-Estados Unidos",
            descripcion: "Doble certificación que abre fronteras académicas",
            beneficios: [
                "Certificación binacional válida",
                "Inglés académico avanzado",
                "Preparación SAT incluida"
            ],
            requisitos: "Nivel B2 de inglés certificado",
            gradient: "from-slate-800 to-indigo-900",
            accentColor: "indigo-400"
        },
        {
            nombre: "Programa STEM Avanzado",
            descripcion: "Innovación tecnológica y investigación científica",
            beneficios: [
                "Proyectos de investigación publicables",
                "Certificaciones tecnológicas internacionales",
                "Incubadora de startups estudiantiles"
            ],
            requisitos: "Aptitud matemática demostrada",
            gradient: "from-slate-800 to-emerald-900",
            accentColor: "emerald-400"
        }
    ];
    const universidadesDestino = [
        {
            nombre: "UNAM",
            aceptados: "95%",
            tipo: "Nacional",
            rank: "#1 México"
        },
        {
            nombre: "Tecnológico de Monterrey",
            aceptados: "92%",
            tipo: "Privada",
            rank: "Top 5 Latam"
        },
        {
            nombre: "IPN",
            aceptados: "88%",
            tipo: "Nacional",
            rank: "#2 Ingeniería"
        },
        {
            nombre: "ITAM",
            aceptados: "85%",
            tipo: "Privada",
            rank: "#1 Economía"
        },
        {
            nombre: "Harvard University",
            aceptados: "12%",
            tipo: "Internacional",
            rank: "#2 Mundial"
        },
        {
            nombre: "MIT",
            aceptados: "8%",
            tipo: "Internacional",
            rank: "#1 Tecnología"
        },
        {
            nombre: "University of Toronto",
            aceptados: "45%",
            tipo: "Internacional",
            rank: "Top 20 Mundial"
        },
        {
            nombre: "Universidad de Barcelona",
            aceptados: "78%",
            tipo: "Internacional",
            rank: "Top 10 Europa"
        }
    ];
    const serviciosUniversitarios = [
        {
            servicio: "Asesoría Universitaria Personalizada",
            descripcion: "Mentoría individual con consultores especializados en admisiones internacionales",
            incluye: [
                "Análisis de perfil vocacional",
                "Estrategia de aplicación universitaria",
                "Preparación de ensayos personales"
            ],
            color: "from-blue-500 to-cyan-500"
        },
        {
            servicio: "Preparación de Exámenes de Admisión",
            descripcion: "Entrenamiento intensivo con simuladores y metodología probada",
            incluye: [
                "CENEVAL-EXANI",
                "Examen UNAM",
                "SAT/ACT",
                "TOEFL/IELTS"
            ],
            color: "from-purple-500 to-pink-500"
        },
        {
            servicio: "Gestión de Becas y Financiamiento",
            descripcion: "Acceso a fondos de becas exclusivos y programas de financiamiento",
            incluye: [
                "Becas académicas de excelencia",
                "Becas deportivas",
                "Becas internacionales"
            ],
            color: "from-emerald-500 to-teal-500"
        },
        {
            servicio: "Desarrollo de Liderazgo",
            descripcion: "Formación integral en habilidades directivas y emprendimiento",
            incluye: [
                "Gobierno estudiantil",
                "Proyectos de impacto social",
                "Incubadora de empresas"
            ],
            color: "from-orange-500 to-red-500"
        }
    ];
    const laboratoriosEspecializados = [
        {
            nombre: "Centro de Investigación Avanzada",
            especialidad: "Nanotecnología y Biotecnología"
        },
        {
            nombre: "Laboratorio de Simulación Médica",
            especialidad: "Entrenamiento Clínico"
        },
        {
            nombre: "Hub de Innovación Digital",
            especialidad: "IA y Realidad Virtual"
        },
        {
            nombre: "Centro de Análisis Financiero",
            especialidad: "Trading y Fintech"
        },
        {
            nombre: "Observatorio de Ciencias Sociales",
            especialidad: "Investigación Social"
        },
        {
            nombre: "Estudio de Producción Multimedia",
            especialidad: "Comunicación Digital"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "fixed inset-0 pointer-events-none transition-opacity duration-700",
                style: {
                    background: "radial-gradient(circle 400px at ".concat(mousePosition.x, "px ").concat(mousePosition.y, "px, rgba(59, 130, 246, 0.03) 0%, transparent 70%)")
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "fixed inset-0 opacity-[0.02]",
                style: {
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "50px 50px"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                className: "relative text-white py-32",
                style: {
                    transform: "translateY(".concat(scrollY * 0.3, "px)"),
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 1s ease-out"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "container mx-auto px-6 relative z-10",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "max-w-6xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-16",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "text-7xl md:text-8xl font-black mb-8 tracking-tight",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent",
                                                children: "PREPARATORIA"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "text-white font-light",
                                                children: "PIAGET"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light",
                                        children: [
                                            "Donde la excelencia acad\xe9mica se encuentra con la innovaci\xf3n.",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-blue-400 font-medium",
                                                children: [
                                                    " ",
                                                    "Tu futuro universitario comienza aqu\xed."
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "grid md:grid-cols-4 gap-8 mb-16",
                                children: [
                                    {
                                        num: "4",
                                        desc: "Especialidades académicas",
                                        prefix: ""
                                    },
                                    {
                                        num: "96",
                                        desc: "Ingreso universitario",
                                        prefix: "%"
                                    },
                                    {
                                        num: "50",
                                        desc: "Universidades aliadas",
                                        prefix: "+"
                                    },
                                    {
                                        num: "85",
                                        desc: "Con beca de excelencia",
                                        prefix: "%"
                                    }
                                ].map((stat, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 group",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-5xl font-bold text-blue-400 mb-3 group-hover:scale-110 transition-transform",
                                                children: [
                                                    stat.num,
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "text-3xl",
                                                        children: stat.prefix
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "text-gray-400 text-sm uppercase tracking-wider",
                                                children: stat.desc
                                            })
                                        ]
                                    }, i))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col sm:flex-row gap-6 justify-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/contacto",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                            className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-12 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer text-lg transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25",
                                            children: "Solicitar Informaci\xf3n"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/admisiones",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                            className: "bg-transparent border-2 border-blue-400 text-blue-400 font-semibold py-4 px-12 rounded-xl hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 cursor-pointer text-lg transform hover:scale-105",
                                            children: "Proceso de Admisi\xf3n"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mx-auto px-6 py-20",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "flex flex-wrap justify-center mb-20 bg-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/10",
                        children: [
                            {
                                id: "bachilleratos",
                                label: "Especialidades"
                            },
                            {
                                id: "programas",
                                label: "Programas Avanzados"
                            },
                            {
                                id: "universitario",
                                label: "Acceso Universitario"
                            },
                            {
                                id: "instalaciones",
                                label: "Campus"
                            }
                        ].map((tab)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                onClick: ()=>setActiveTab(tab.id),
                                className: "px-8 py-4 rounded-xl font-medium transition-all duration-300 m-1 ".concat(activeTab === tab.id ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/10"),
                                children: tab.label
                            }, tab.id))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "transition-all duration-700",
                        children: [
                            activeTab === "bachilleratos" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-20",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        className: "text-center mb-20",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                                className: "text-5xl font-bold text-white mb-8",
                                                children: "Especialidades Acad\xe9micas"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed",
                                                children: "Programas dise\xf1ados para maximizar tu potencial acad\xe9mico y prepararte para el \xe9xito universitario."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "grid lg:grid-cols-2 gap-8",
                                        children: bachilleratos.map((bachillerato, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 group",
                                                style: {
                                                    background: bachillerato.bgPattern
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "bg-gradient-to-r ".concat(bachillerato.color, " p-8 relative"),
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "relative z-10",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                                        className: "text-2xl font-bold text-white mb-3",
                                                                        children: bachillerato.nombre
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                        className: "text-white/90 text-lg",
                                                                        children: bachillerato.descripcion
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "p-8",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "mb-8",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                                        className: "text-lg font-semibold text-".concat(bachillerato.accentColor, " mb-4"),
                                                                        children: "Carreras Universitarias"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                        className: "grid grid-cols-2 gap-3",
                                                                        children: bachillerato.carreras.map((carrera, carreraIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                className: "bg-".concat(bachillerato.accentColor, "/10 text-").concat(bachillerato.accentColor, " px-4 py-2 rounded-lg text-sm font-medium border border-").concat(bachillerato.accentColor, "/20"),
                                                                                children: carrera
                                                                            }, carreraIndex))
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                                        className: "text-lg font-semibold text-gray-300 mb-4",
                                                                        children: "Materias Avanzadas"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
                                                                        className: "space-y-3",
                                                                        children: bachillerato.materias.map((materia, materiaIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                                className: "flex items-center text-gray-400 hover:text-white transition-colors duration-300",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                                        className: "w-2 h-2 bg-".concat(bachillerato.accentColor, " rounded-full mr-4")
                                                                                    }),
                                                                                    materia
                                                                                ]
                                                                            }, materiaIndex))
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, index))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        className: "bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-16 border border-white/10",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                className: "text-4xl font-bold text-center mb-16 text-white",
                                                children: "Metodolog\xeda de Excelencia"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "grid md:grid-cols-3 gap-12",
                                                children: [
                                                    {
                                                        title: "Investigación Aplicada",
                                                        desc: "Proyectos de investigación con impacto real en la comunidad científica y académica."
                                                    },
                                                    {
                                                        title: "Mentoría Especializada",
                                                        desc: "Acompañamiento personalizado con académicos y profesionales de alto nivel."
                                                    },
                                                    {
                                                        title: "Networking Global",
                                                        desc: "Conexiones directas con universidades e instituciones de prestigio internacional."
                                                    }
                                                ].map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "text-center group",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                    className: "w-8 h-8 bg-white rounded-lg"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                                className: "text-xl font-bold mb-4 text-blue-400",
                                                                children: item.title
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                className: "text-gray-400 leading-relaxed",
                                                                children: item.desc
                                                            })
                                                        ]
                                                    }, index))
                                            })
                                        ]
                                    })
                                ]
                            }),
                            activeTab === "programas" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-20",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        className: "text-center mb-20",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                                className: "text-5xl font-bold text-white mb-8",
                                                children: "Programas de \xc9lite"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed",
                                                children: "Certificaciones internacionales que abren las puertas a las mejores universidades del mundo."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "space-y-12",
                                        children: programasEspeciales.map((programa, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 hover:border-white/20 transition-all duration-500 group",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col lg:flex-row gap-12",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                            className: "lg:w-1/3",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "bg-gradient-to-r ".concat(programa.gradient, " rounded-2xl p-8 text-center border border-white/20"),
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                                        className: "text-2xl font-bold text-white mb-4",
                                                                        children: programa.nombre
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                        className: "text-".concat(programa.accentColor, " font-semibold mb-2"),
                                                                        children: "Requisito de Ingreso"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                        className: "text-gray-300",
                                                                        children: programa.requisitos
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "lg:w-2/3",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                    className: "text-xl text-gray-300 mb-8 leading-relaxed",
                                                                    children: programa.descripcion
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                                            className: "text-lg font-semibold text-".concat(programa.accentColor, " mb-6"),
                                                                            children: "Beneficios del Programa"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                            className: "grid gap-4",
                                                                            children: programa.beneficios.map((beneficio, beneficioIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                                    className: "bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300",
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                        className: "text-gray-300",
                                                                                        children: beneficio
                                                                                    })
                                                                                }, beneficioIndex))
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, index))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        className: "bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-xl rounded-3xl p-16 border border-blue-500/20",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                className: "text-4xl font-bold text-center mb-16 text-white",
                                                children: "Resultados Comprobados"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "grid md:grid-cols-4 gap-8 text-center",
                                                children: [
                                                    {
                                                        num: "100%",
                                                        desc: "Egresados IB aceptados en universidades top"
                                                    },
                                                    {
                                                        num: "25",
                                                        desc: "Países donde estudian nuestros graduados"
                                                    },
                                                    {
                                                        num: "$2.5M",
                                                        desc: "En becas obtenidas anualmente"
                                                    },
                                                    {
                                                        num: "98%",
                                                        desc: "Satisfacción de estudiantes y familias"
                                                    }
                                                ].map((stat, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "text-5xl font-bold text-blue-400 mb-3",
                                                                children: stat.num
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "text-gray-400",
                                                                children: stat.desc
                                                            })
                                                        ]
                                                    }, index))
                                            })
                                        ]
                                    })
                                ]
                            }),
                            activeTab === "universitario" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-20",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        className: "text-center mb-20",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                                className: "text-5xl font-bold text-white mb-8",
                                                children: "Acceso Universitario Garantizado"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed",
                                                children: "Programa integral de orientaci\xf3n que te gu\xeda hacia la universidad ideal para tu perfil acad\xe9mico."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "grid lg:grid-cols-2 gap-8 mb-20",
                                        children: serviciosUniversitarios.map((servicio, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mb-8",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "w-16 h-16 bg-gradient-to-r ".concat(servicio.color, " rounded-2xl mb-6")
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                                className: "text-2xl font-bold text-white mb-4",
                                                                children: servicio.servicio
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                className: "text-gray-400 leading-relaxed",
                                                                children: servicio.descripcion
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                                className: "text-lg font-semibold text-blue-400 mb-4",
                                                                children: "Incluye"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
                                                                className: "space-y-3",
                                                                children: servicio.incluye.map((item, itemIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "flex items-center text-gray-400",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                                className: "w-2 h-2 bg-blue-400 rounded-full mr-4"
                                                                            }),
                                                                            item
                                                                        ]
                                                                    }, itemIndex))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, index))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        className: "bg-white/5 backdrop-blur-xl rounded-3xl p-16 border border-white/10",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                className: "text-4xl font-bold text-center mb-16 text-white",
                                                children: "Universidades de Destino"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                                                children: universidadesDestino.map((universidad, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "bg-white/10 rounded-2xl p-6 text-center border border-white/10 hover:border-white/20 transition-all duration-300 group",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                                className: "font-bold text-white mb-2 text-lg",
                                                                children: universidad.nombre
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "text-3xl font-bold text-blue-400 mb-2",
                                                                children: universidad.aceptados
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "text-gray-400 text-sm mb-1",
                                                                children: universidad.tipo
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "text-blue-300 text-xs",
                                                                children: universidad.rank
                                                            })
                                                        ]
                                                    }, index))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                className: "text-4xl font-bold text-center mb-16 text-white",
                                                children: "Ruta hacia la Universidad"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "space-y-6",
                                                children: [
                                                    {
                                                        semestre: "Primer Año",
                                                        actividad: "Evaluación vocacional y exploración de carreras",
                                                        fase: "Exploración"
                                                    },
                                                    {
                                                        semestre: "Segundo Año",
                                                        actividad: "Selección de universidades y preparación académica",
                                                        fase: "Preparación"
                                                    },
                                                    {
                                                        semestre: "Tercer Año",
                                                        actividad: "Entrenamiento intensivo para exámenes de admisión",
                                                        fase: "Entrenamiento"
                                                    },
                                                    {
                                                        semestre: "Año Final",
                                                        actividad: "Aplicaciones, becas y transición universitaria",
                                                        fase: "Aplicación"
                                                    }
                                                ].map((etapa, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center mr-8 font-bold text-white text-2xl",
                                                                children: index + 1
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "flex items-center gap-4 mb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                                                className: "text-xl font-bold text-blue-400",
                                                                                children: etapa.semestre
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                className: "bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm",
                                                                                children: etapa.fase
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                        className: "text-gray-300",
                                                                        children: etapa.actividad
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
                            activeTab === "instalaciones" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-20",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        className: "text-center mb-20",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                                className: "text-5xl font-bold text-white mb-8",
                                                children: "Campus de Vanguardia"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed",
                                                children: "Instalaciones que rivalizan con las mejores universidades, dise\xf1adas para la excelencia acad\xe9mica."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        className: "mb-20",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                className: "text-4xl font-bold text-center mb-16 text-white",
                                                children: "Centros de Investigaci\xf3n"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                                                children: laboratoriosEspecializados.map((laboratorio, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                                className: "text-xl font-bold text-white mb-3",
                                                                children: laboratorio.nombre
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                className: "text-gray-400 text-sm",
                                                                children: laboratorio.especialidad
                                                            })
                                                        ]
                                                    }, index))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                                        children: [
                                            {
                                                title: "Espacios Académicos",
                                                color: "from-blue-600 to-cyan-600",
                                                items: [
                                                    "Aulas inteligentes con tecnología 4.0",
                                                    "Auditorios con capacidad para 300 personas",
                                                    "Salas de seminarios especializadas",
                                                    "Biblioteca digital de última generación",
                                                    "Centro de recursos multimedia"
                                                ]
                                            },
                                            {
                                                title: "Laboratorios de Investigación",
                                                color: "from-purple-600 to-indigo-600",
                                                items: [
                                                    "Centro de biotecnología avanzada",
                                                    "Laboratorio de física cuántica",
                                                    "Simuladores médicos de alta fidelidad",
                                                    "Observatorio astronómico automatizado",
                                                    "Centro de supercomputación"
                                                ]
                                            },
                                            {
                                                title: "Tecnología e Innovación",
                                                color: "from-emerald-600 to-teal-600",
                                                items: [
                                                    "Laboratorios de inteligencia artificial",
                                                    "Centro de realidad virtual y aumentada",
                                                    "Fab Lab con impresión 3D industrial",
                                                    "Estudio de producción audiovisual",
                                                    "Centro de ciberseguridad"
                                                ]
                                            },
                                            {
                                                title: "Arte y Humanidades",
                                                color: "from-orange-600 to-red-600",
                                                items: [
                                                    "Teatro profesional con 400 butacas",
                                                    "Galería de arte contemporáneo",
                                                    "Estudios de grabación musical",
                                                    "Talleres de artes visuales",
                                                    "Centro de debates y oratoria"
                                                ]
                                            },
                                            {
                                                title: "Deportes y Bienestar",
                                                color: "from-teal-600 to-blue-600",
                                                items: [
                                                    "Complejo deportivo olímpico",
                                                    "Piscina semiolímpica climatizada",
                                                    "Centro de acondicionamiento físico",
                                                    "Canchas profesionales multideporte",
                                                    "Centro de wellness y nutrición"
                                                ]
                                            },
                                            {
                                                title: "Sustentabilidad",
                                                color: "from-green-600 to-emerald-600",
                                                items: [
                                                    "Campus 100% sustentable",
                                                    "Sistema de energía solar",
                                                    "Captación y tratamiento de agua",
                                                    "Jardines verticales automatizados",
                                                    "Centro de economía circular"
                                                ]
                                            }
                                        ].map((categoria, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "w-16 h-16 bg-gradient-to-r ".concat(categoria.color, " rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300")
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                        className: "text-2xl font-bold mb-6 text-white",
                                                        children: categoria.title
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
                                                        className: "space-y-4",
                                                        children: categoria.items.map((item, itemIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                className: "flex items-start text-gray-400 hover:text-white transition-colors duration-300 group-hover:translate-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                        className: "w-2 h-2 bg-blue-400 rounded-full mr-4 mt-2 flex-shrink-0"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                        className: "text-sm leading-relaxed",
                                                                        children: item
                                                                    })
                                                                ]
                                                            }, itemIndex))
                                                    })
                                                ]
                                            }, index))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        className: "bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-16 border border-white/10 text-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                className: "text-4xl font-bold mb-8 text-white",
                                                children: "Experiencia Inmersiva"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "text-xl text-gray-400 mb-12 max-w-3xl mx-auto",
                                                children: "Descubre nuestro campus a trav\xe9s de recorridos virtuales en 360\xb0 y experimenta nuestras instalaciones desde cualquier lugar."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "grid md:grid-cols-2 gap-8",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "bg-white/10 rounded-2xl p-8 border border-white/10",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                                className: "text-xl font-bold text-blue-400 mb-4",
                                                                children: "Tour Virtual 360\xb0"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                className: "text-gray-400 mb-6",
                                                                children: "Explora cada rinc\xf3n de nuestro campus con tecnolog\xeda de realidad virtual."
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                                className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300",
                                                                children: "Iniciar Tour"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "bg-white/10 rounded-2xl p-8 border border-white/10",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                                className: "text-xl font-bold text-emerald-400 mb-4",
                                                                children: "Visita Presencial"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                className: "text-gray-400 mb-6",
                                                                children: "Agenda una visita personalizada con nuestros asesores acad\xe9micos."
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                                                className: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300",
                                                                children: "Agendar Visita"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "bg-gradient-to-r from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-3xl p-20 text-center mt-32 border border-white/10 relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "absolute inset-0 opacity-10",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "absolute inset-0",
                                    style: {
                                        backgroundImage: "linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.1) 41%, rgba(59, 130, 246, 0.1) 59%, transparent 60%)",
                                        backgroundSize: "20px 20px"
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative z-10",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                        className: "text-6xl font-bold mb-8 text-white",
                                        children: "Define Tu Futuro"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-2xl mb-16 max-w-4xl mx-auto text-gray-300 leading-relaxed font-light",
                                        children: [
                                            "En Preparatoria Piaget transformamos el potencial en excelencia.",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-blue-400 font-medium",
                                                children: [
                                                    " ",
                                                    "\xdanete a la pr\xf3xima generaci\xf3n de l\xedderes."
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col sm:flex-row gap-8 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/contacto",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                    className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-6 px-16 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-500 cursor-pointer text-xl transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25",
                                                    children: "Solicitar Informaci\xf3n"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "tel:+528991234567",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                    className: "bg-transparent border-2 border-blue-400 text-blue-400 font-semibold py-6 px-16 rounded-2xl hover:bg-blue-400 hover:text-slate-900 transition-all duration-500 cursor-pointer text-xl transform hover:scale-105",
                                                    children: "Contactar Asesor"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-center items-center gap-12 mt-16 opacity-60",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-3xl font-bold text-blue-400",
                                                        children: "SEP"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-xs text-gray-400",
                                                        children: "Reconocido"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "w-px h-8 bg-gray-600"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-3xl font-bold text-blue-400",
                                                        children: "UNAM"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-xs text-gray-400",
                                                        children: "Incorporado"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "w-px h-8 bg-gray-600"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-3xl font-bold text-blue-400",
                                                        children: "IB"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-xs text-gray-400",
                                                        children: "Autorizado"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [673,874,441,684,358], () => (__webpack_exec__(4871)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);