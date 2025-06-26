(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[546],{

/***/ 7948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SecundariaPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5155);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6874);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2115);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function SecundariaPage() {
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('programa');
    const materias = [
        {
            categoria: "Ciencias",
            materias: [
                {
                    nombre: "Biología",
                    descripcion: "Estudio de la vida y los ecosistemas",
                    nivel: "Avanzado"
                },
                {
                    nombre: "Física",
                    descripcion: "Mecánica, energía y fenómenos naturales",
                    nivel: "Intermedio"
                },
                {
                    nombre: "Química",
                    descripcion: "Elementos, compuestos y reacciones",
                    nivel: "Avanzado"
                }
            ],
            color: "from-green-500 to-teal-600",
            icon: "🧬"
        },
        {
            categoria: "Humanidades",
            materias: [
                {
                    nombre: "Español",
                    descripcion: "Literatura, redacción y comunicación",
                    nivel: "Avanzado"
                },
                {
                    nombre: "Historia",
                    descripcion: "México y el mundo contemporáneo",
                    nivel: "Intermedio"
                },
                {
                    nombre: "Geografía",
                    descripcion: "Mundo globalizado y sustentabilidad",
                    nivel: "Intermedio"
                }
            ],
            color: "from-blue-500 to-purple-600",
            icon: "📚"
        },
        {
            categoria: "Matemáticas",
            materias: [
                {
                    nombre: "Álgebra",
                    descripcion: "Ecuaciones y funciones lineales",
                    nivel: "Avanzado"
                },
                {
                    nombre: "Geometría",
                    descripcion: "Figuras, volúmenes y trigonometría",
                    nivel: "Avanzado"
                },
                {
                    nombre: "Estadística",
                    descripcion: "Análisis de datos y probabilidad",
                    nivel: "Intermedio"
                }
            ],
            color: "from-orange-500 to-red-600",
            icon: "📊"
        },
        {
            categoria: "Idiomas y Tecnología",
            materias: [
                {
                    nombre: "Inglés",
                    descripcion: "Preparación para certificaciones internacionales",
                    nivel: "Bilingüe"
                },
                {
                    nombre: "Francés",
                    descripcion: "Segundo idioma extranjero opcional",
                    nivel: "Básico"
                },
                {
                    nombre: "Informática",
                    descripcion: "Programación, diseño y herramientas digitales",
                    nivel: "Avanzado"
                }
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
        {
            nombre: "Robótica Avanzada",
            tipo: "STEM",
            cupos: "20 estudiantes"
        },
        {
            nombre: "Debate y Oratoria",
            tipo: "Comunicación",
            cupos: "15 estudiantes"
        },
        {
            nombre: "Fotografía Digital",
            tipo: "Arte",
            cupos: "12 estudiantes"
        },
        {
            nombre: "Programación Web",
            tipo: "Tecnología",
            cupos: "18 estudiantes"
        },
        {
            nombre: "Teatro Musical",
            tipo: "Arte",
            cupos: "25 estudiantes"
        },
        {
            nombre: "Emprendimiento",
            tipo: "Negocios",
            cupos: "20 estudiantes"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "relative text-white py-24 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "container mx-auto px-4 relative z-10",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "max-w-6xl mx-auto",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid lg:grid-cols-2 gap-12 items-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                                className: "text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",
                                                children: "Secundaria Piaget"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "text-xl md:text-2xl mb-8 leading-relaxed text-gray-200",
                                                children: "Donde los adolescentes descubren su potencial, desarrollan su identidad y se preparan para liderar el futuro"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col sm:flex-row gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/contacto",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                            className: "bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition duration-300 cursor-pointer",
                                                            children: "Descubre m\xe1s"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/admisiones",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                            className: "bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold py-4 px-8 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition duration-300 cursor-pointer",
                                                            children: "Proceso de admisi\xf3n"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur rounded-xl p-6 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-3xl font-bold text-cyan-400",
                                                        children: "3"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-sm text-gray-300",
                                                        children: "A\xf1os de formaci\xf3n"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur rounded-xl p-6 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-3xl font-bold text-purple-400",
                                                        children: "15"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-sm text-gray-300",
                                                        children: "Materias especializadas"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "bg-gradient-to-r from-pink-500/20 to-red-500/20 backdrop-blur rounded-xl p-6 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-3xl font-bold text-pink-400",
                                                        children: "6"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-sm text-gray-300",
                                                        children: "Talleres especializados"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur rounded-xl p-6 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-3xl font-bold text-red-400",
                                                        children: "100%"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-sm text-gray-300",
                                                        children: "Preparaci\xf3n para bachillerato"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mx-auto px-4 py-12",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "flex flex-wrap justify-center mb-12 bg-white/10 backdrop-blur rounded-xl p-2",
                        children: [
                            {
                                id: 'programa',
                                label: 'Plan Académico'
                            },
                            {
                                id: 'perfil',
                                label: 'Perfil de Egreso'
                            },
                            {
                                id: 'proyectos',
                                label: 'Proyectos Especiales'
                            },
                            {
                                id: 'instalaciones',
                                label: 'Campus Moderno'
                            }
                        ].map((tab)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                onClick: ()=>setActiveTab(tab.id),
                                className: "px-6 py-3 rounded-lg font-medium transition duration-300 m-1 ".concat(activeTab === tab.id ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' : 'text-gray-300 hover:text-white hover:bg-white/20'),
                                children: tab.label
                            }, tab.id))
                    }),
                    activeTab === 'programa' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-12",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "text-center mb-12",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                        className: "text-4xl font-bold text-white mb-6",
                                        children: "Programa Acad\xe9mico de Vanguardia"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                        className: "text-xl text-gray-300 max-w-4xl mx-auto",
                                        children: "Un curr\xedculo dise\xf1ado para desarrollar pensadores cr\xedticos, innovadores y ciudadanos globales preparados para los desaf\xedos del siglo XXI."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "grid lg:grid-cols-2 gap-8",
                                children: materias.map((categoria, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white/10 backdrop-blur rounded-xl overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "bg-gradient-to-r ".concat(categoria.color, " p-6"),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                            className: "text-4xl mr-4",
                                                            children: categoria.icon
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                            className: "text-2xl font-bold text-white",
                                                            children: categoria.categoria
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "p-6",
                                                children: categoria.materias.map((materia, materiaIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mb-4 last:mb-0",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex justify-between items-start mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                                        className: "font-bold text-white",
                                                                        children: materia.nombre
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                        className: "text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded",
                                                                        children: materia.nivel
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                className: "text-gray-300 text-sm",
                                                                children: materia.descripcion
                                                            })
                                                        ]
                                                    }, materiaIndex))
                                            })
                                        ]
                                    }, index))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "bg-white/5 backdrop-blur rounded-xl p-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                        className: "text-3xl font-bold text-center mb-8 text-white",
                                        children: "Metodolog\xeda Innovadora"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "grid md:grid-cols-3 gap-8",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                            className: "text-3xl",
                                                            children: "\uD83E\uDDE9"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                        className: "text-xl font-bold mb-3 text-cyan-400",
                                                        children: "Aprendizaje Basado en Proyectos"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                        className: "text-gray-300",
                                                        children: "Los estudiantes resuelven problemas reales aplicando conocimientos interdisciplinarios."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                            className: "text-3xl",
                                                            children: "\uD83C\uDFAF"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                        className: "text-xl font-bold mb-3 text-purple-400",
                                                        children: "Personalizaci\xf3n"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                        className: "text-gray-300",
                                                        children: "Rutas de aprendizaje adaptadas a los intereses y fortalezas de cada estudiante."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "bg-gradient-to-r from-pink-500 to-red-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                            className: "text-3xl",
                                                            children: "\uD83C\uDF10"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                        className: "text-xl font-bold mb-3 text-pink-400",
                                                        children: "Perspectiva Global"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                        className: "text-gray-300",
                                                        children: "Conexi\xf3n con instituciones internacionales y proyectos colaborativos globales."
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                        className: "text-3xl font-bold text-center mb-8 text-white",
                                        children: "Talleres Especializados"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "grid md:grid-cols-3 gap-6",
                                        children: talleres.map((taller, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "bg-white/10 backdrop-blur rounded-lg p-6 hover:bg-white/20 transition duration-300",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                        className: "text-lg font-bold mb-2 text-white",
                                                        children: taller.nombre
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                className: "text-cyan-400 text-sm",
                                                                children: taller.tipo
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                className: "text-gray-300 text-xs",
                                                                children: taller.cupos
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
                    activeTab === 'perfil' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-12",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "text-center mb-12",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                        className: "text-4xl font-bold text-white mb-6",
                                        children: "Perfil del Egresado"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                        className: "text-xl text-gray-300 max-w-4xl mx-auto",
                                        children: "Nuestros graduados est\xe1n preparados para enfrentar los retos del bachillerato y convertirse en l\xedderes transformadores de su comunidad."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "grid md:grid-cols-2 gap-8",
                                children: perfilEgreso.map((area, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white/10 backdrop-blur rounded-xl p-8",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "".concat(area.color, " rounded-full w-16 h-16 flex items-center justify-center mr-4"),
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                            className: "text-3xl",
                                                            children: area.icon
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: [
                                                            "Desarrollo ",
                                                            area.area
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
                                                className: "space-y-3",
                                                children: area.habilidades.map((habilidad, habilidadIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "flex items-center text-gray-300",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                className: "w-2 h-2 bg-cyan-400 rounded-full mr-3"
                                                            }),
                                                            habilidad
                                                        ]
                                                    }, habilidadIndex))
                                            })
                                        ]
                                    }, index))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur rounded-xl p-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                        className: "text-3xl font-bold text-center mb-8 text-white",
                                        children: "Preparaci\xf3n para Bachillerato"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "grid md:grid-cols-4 gap-6 text-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-4xl mb-3",
                                                        children: "\uD83D\uDCC8"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                        className: "font-bold text-cyan-400 mb-2",
                                                        children: "Excelencia Acad\xe9mica"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                        className: "text-gray-300 text-sm",
                                                        children: "Promedio superior a 9.0 en ex\xe1menes de ingreso"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-4xl mb-3",
                                                        children: "\uD83C\uDF1F"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                        className: "font-bold text-purple-400 mb-2",
                                                        children: "Habilidades Blandas"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                        className: "text-gray-300 text-sm",
                                                        children: "Liderazgo, comunicaci\xf3n y trabajo en equipo"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-4xl mb-3",
                                                        children: "\uD83C\uDFAF"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                        className: "font-bold text-pink-400 mb-2",
                                                        children: "Orientaci\xf3n Vocacional"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                        className: "text-gray-300 text-sm",
                                                        children: "Claridad en la elecci\xf3n de carrera profesional"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-4xl mb-3",
                                                        children: "\uD83C\uDFC6"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                        className: "font-bold text-red-400 mb-2",
                                                        children: "Competitividad"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                        className: "text-gray-300 text-sm",
                                                        children: "Preparaci\xf3n para becas y programas especiales"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    activeTab === 'proyectos' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-12",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "text-center mb-12",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                        className: "text-4xl font-bold text-white mb-6",
                                        children: "Proyectos que Transforman"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                        className: "text-xl text-gray-300 max-w-4xl mx-auto",
                                        children: "Experiencias de aprendizaje significativas que conectan el conocimiento con la realidad y forman ciudadanos comprometidos."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "grid lg:grid-cols-2 gap-8",
                                children: proyectosEspeciales.map((proyecto, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white/10 backdrop-blur rounded-xl p-8 hover:bg-white/20 transition duration-300",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "text-5xl mr-4",
                                                        children: proyecto.icon
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: proyecto.nombre
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "text-gray-300 mb-6 leading-relaxed",
                                                children: proyecto.descripcion
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "text-cyan-400 text-sm font-medium",
                                                                children: "Participantes"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "text-white",
                                                                children: proyecto.participantes
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "text-purple-400 text-sm font-medium",
                                                                children: "Duraci\xf3n"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "text-white",
                                                                children: proyecto.duracion
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, index))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "bg-white/5 backdrop-blur rounded-xl p-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                        className: "text-3xl font-bold text-center mb-8 text-white",
                                        children: "Impacto y Reconocimientos"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "grid md:grid-cols-3 gap-8 text-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-5xl mb-4",
                                                        children: "\uD83C\uDFC5"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-3xl font-bold text-cyan-400 mb-2",
                                                        children: "15+"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-gray-300",
                                                        children: "Premios nacionales en ciencias"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-5xl mb-4",
                                                        children: "\uD83C\uDF0D"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-3xl font-bold text-purple-400 mb-2",
                                                        children: "8"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-gray-300",
                                                        children: "Pa\xedses en intercambios"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-5xl mb-4",
                                                        children: "\uD83D\uDCB0"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-3xl font-bold text-pink-400 mb-2",
                                                        children: "$500K+"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "text-gray-300",
                                                        children: "Recaudado en empresas estudiantiles"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    activeTab === 'instalaciones' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-12",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                className: "text-center mb-12",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                        className: "text-4xl font-bold text-white mb-6",
                                        children: "Campus de \xdaltima Generaci\xf3n"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                        className: "text-xl text-gray-300 max-w-4xl mx-auto",
                                        children: "Espacios dise\xf1ados para inspirar creatividad, colaboraci\xf3n e innovaci\xf3n en cada rinc\xf3n de nuestro campus."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white/10 backdrop-blur rounded-xl p-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "text-xl font-bold mb-4 text-cyan-400 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "mr-2",
                                                        children: "\uD83D\uDD2C"
                                                    }),
                                                    " Laboratorios Especializados"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "space-y-2 text-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Lab. de Biotecnolog\xeda"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Lab. de F\xedsica Avanzada"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Lab. de Qu\xedmica Org\xe1nica"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Planetario Digital"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white/10 backdrop-blur rounded-xl p-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "text-xl font-bold mb-4 text-purple-400 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "mr-2",
                                                        children: "\uD83D\uDCBB"
                                                    }),
                                                    " Tecnolog\xeda Integrada"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "space-y-2 text-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Aulas con realidad virtual"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Lab. de rob\xf3tica avanzada"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Estudio de podcasting"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Maker Space equipado"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white/10 backdrop-blur rounded-xl p-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "text-xl font-bold mb-4 text-pink-400 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "mr-2",
                                                        children: "\uD83C\uDFAD"
                                                    }),
                                                    " Espacios Creativos"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "space-y-2 text-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Teatro con 300 butacas"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Estudios de m\xfasica"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Talleres de arte"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Sala de debate"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white/10 backdrop-blur rounded-xl p-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "text-xl font-bold mb-4 text-red-400 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "mr-2",
                                                        children: "\uD83D\uDCDA"
                                                    }),
                                                    " Centro de Recursos"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "space-y-2 text-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Biblioteca digital"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Salas de estudio colaborativo"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Centro de tutor\xedas"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Recursos multimedia"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white/10 backdrop-blur rounded-xl p-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "text-xl font-bold mb-4 text-orange-400 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "mr-2",
                                                        children: "\uD83C\uDFC3"
                                                    }),
                                                    " Instalaciones Deportivas"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "space-y-2 text-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Gimnasio multicanchas"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Piscina semi-ol\xedmpica"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Pista de atletismo"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• \xc1rea de crossfit"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white/10 backdrop-blur rounded-xl p-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "text-xl font-bold mb-4 text-green-400 flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "mr-2",
                                                        children: "\uD83C\uDF31"
                                                    }),
                                                    " Espacios Sustentables"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "space-y-2 text-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Jard\xedn vertical inteligente"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Huerto hidrop\xf3nico"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Paneles solares"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                                                        children: "• Sistema de reciclaje"
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
                        className: "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur rounded-xl p-12 text-center mt-16",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                className: "text-4xl font-bold mb-6 text-white",
                                children: "Tu futuro comienza aqu\xed"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                className: "text-xl mb-8 max-w-3xl mx-auto text-gray-300",
                                children: "\xdanete a una generaci\xf3n de j\xf3venes innovadores que est\xe1n cambiando el mundo. En Secundaria Piaget, no solo preparamos estudiantes, formamos l\xedderes."
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col sm:flex-row gap-4 justify-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/contacto",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                            className: "bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition duration-300 cursor-pointer",
                                            children: "Agenda tu visita"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/admisiones",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                            className: "bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold py-4 px-8 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition duration-300 cursor-pointer",
                                            children: "Proceso de admisi\xf3n"
                                        })
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


/***/ }),

/***/ 9526:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7948));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [874,441,684,358], () => (__webpack_exec__(9526)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);