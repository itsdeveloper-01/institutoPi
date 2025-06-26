(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[716],{

/***/ 3590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PrimariaPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5155);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6874);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2115);
/* harmony import */ var _styles_page_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5109);
/* harmony import */ var _styles_page_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_page_css__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function PrimariaPage() {
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('programa');
    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [floatingElements, setFloatingElements] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setIsVisible(true);
        // Crear elementos flotantes aleatorios
        const elements = Array.from({
            length: 15
        }, (_, i)=>({
                id: i,
                emoji: [
                    '⭐',
                    '🌟',
                    '✨',
                    '🎈',
                    '🎨',
                    '📚',
                    '🚀',
                    '🌈'
                ][Math.floor(Math.random() * 8)],
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
            logros: [
                "Leo mis primeras palabras",
                "Sumo y resto como un campeón",
                "Sigo instrucciones súper bien"
            ],
            color: "from-yellow-400 to-yellow-600",
            bgPattern: "bg-gradient-to-br from-yellow-100 to-yellow-200"
        },
        {
            grado: "2° Primaria",
            edad: "7-8 años",
            emoji: "🌿",
            enfoque: "¡Consolidando mis súper poderes de aprendizaje!",
            logros: [
                "Entiendo todo lo que leo",
                "Multiplico como un ninja",
                "Trabajo genial en equipo"
            ],
            color: "from-green-400 to-green-600",
            bgPattern: "bg-gradient-to-br from-green-100 to-green-200"
        },
        {
            grado: "3° Primaria",
            edad: "8-9 años",
            emoji: "🌳",
            enfoque: "¡Desarrollo mi pensamiento de detective!",
            logros: [
                "Escribo textos increíbles",
                "Divido números sin problemas",
                "Investigo como un científico"
            ],
            color: "from-blue-400 to-blue-600",
            bgPattern: "bg-gradient-to-br from-blue-100 to-blue-200"
        },
        {
            grado: "4° Primaria",
            edad: "9-10 años",
            emoji: "🏔️",
            enfoque: "¡Aprendo solo como un explorador independiente!",
            logros: [
                "Escribo ensayos geniales",
                "Domino las fracciones",
                "Hago proyectos científicos"
            ],
            color: "from-purple-400 to-purple-600",
            bgPattern: "bg-gradient-to-br from-purple-100 to-purple-200"
        },
        {
            grado: "5° Primaria",
            edad: "10-11 años",
            emoji: "🦅",
            enfoque: "¡Me preparo para volar hacia la secundaria!",
            logros: [
                "Analizo libros como un crítico",
                "Manejo decimales perfectamente",
                "Presento como un profesional"
            ],
            color: "from-indigo-400 to-indigo-600",
            bgPattern: "bg-gradient-to-br from-indigo-100 to-indigo-200"
        },
        {
            grado: "6° Primaria",
            edad: "11-12 años",
            emoji: "👑",
            enfoque: "¡Lidero y me responsabilizo como un verdadero líder!",
            logros: [
                "Escribo textos súper convincentes",
                "Domino geometría avanzada",
                "Dirijo investigaciones importantes"
            ],
            color: "from-red-400 to-red-600",
            bgPattern: "bg-gradient-to-br from-red-100 to-red-200"
        }
    ];
    const horarioSemanal = [
        {
            materia: "Español",
            horas: "6 hrs",
            color: "bg-blue-100 text-blue-800",
            emoji: "📚"
        },
        {
            materia: "Matemáticas",
            horas: "6 hrs",
            color: "bg-green-100 text-green-800",
            emoji: "🔢"
        },
        {
            materia: "Ciencias Naturales",
            horas: "3 hrs",
            color: "bg-purple-100 text-purple-800",
            emoji: "🔬"
        },
        {
            materia: "Historia y Geografía",
            horas: "3 hrs",
            color: "bg-orange-100 text-orange-800",
            emoji: "🗺️"
        },
        {
            materia: "Inglés",
            horas: "5 hrs",
            color: "bg-red-100 text-red-800",
            emoji: "🇺🇸"
        },
        {
            materia: "Computación",
            horas: "2 hrs",
            color: "bg-indigo-100 text-indigo-800",
            emoji: "💻"
        },
        {
            materia: "Arte",
            horas: "2 hrs",
            color: "bg-pink-100 text-pink-800",
            emoji: "🎨"
        },
        {
            materia: "Deportes",
            horas: "3 hrs",
            color: "bg-teal-100 text-teal-800",
            emoji: "⚽"
        }
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
            items: [
                "Pizarras que cobran vida",
                "Proyectores de aventuras",
                "Internet súper rápido",
                "Sillas cómodas para aprender"
            ],
            color: "from-blue-400 to-blue-600"
        },
        {
            title: "🔬 Laboratorios de Ciencia",
            items: [
                "Lab de experimentos locos",
                "Computadoras súper rápidas",
                "Lab de idiomas espacial",
                "Taller de robots geniales"
            ],
            color: "from-green-400 to-green-600"
        },
        {
            title: "📚 Biblioteca del Tesoro",
            items: [
                "Más de 5,000 libros geniales",
                "Rincón de lectura súper cómodo",
                "Recursos digitales increíbles",
                "Sala de estudio silenciosa"
            ],
            color: "from-purple-400 to-purple-600"
        },
        {
            title: "🏃 Reino de los Deportes",
            items: [
                "Cancha de fútbol gigante",
                "Cancha de básquet profesional",
                "Gimnasio cubierto genial",
                "Pista de atletismo olímpica"
            ],
            color: "from-orange-400 to-orange-600"
        },
        {
            title: "🎭 Palacio del Arte",
            items: [
                "Salón musical profesional",
                "Taller de arte creativo",
                "Auditorio como cinema",
                "Estudio de baile divertido"
            ],
            color: "from-red-400 to-red-600"
        },
        {
            title: "🍽️ Centro de Servicios",
            items: [
                "Comedor súper rico",
                "Cafetería con snacks",
                "Enfermería cuidadosa",
                "Jardines hermosos"
            ],
            color: "from-indigo-400 to-indigo-600"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 relative overflow-hidden",
        children: [
            floatingElements.map((element)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "fixed pointer-events-none text-2xl animate-bounce opacity-20",
                    style: {
                        left: "".concat(element.left, "%"),
                        top: "".concat(element.top, "%"),
                        animationDuration: "".concat(element.duration, "s"),
                        animationDelay: "".concat(element.delay, "s")
                    },
                    children: element.emoji
                }, element.id)),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "relative bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white py-24 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-pink-400/20 to-purple-400/20 animate-pulse"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "absolute top-32 right-20 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-bounce delay-75"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-400 rounded-full opacity-20 animate-bounce delay-150"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "absolute bottom-32 right-1/3 w-12 h-12 bg-green-400 rounded-full opacity-20 animate-bounce delay-300"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "container mx-auto px-6 relative z-10",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "max-w-6xl mx-auto text-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-12",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                            className: "text-6xl md:text-8xl font-black mb-8 tracking-tight animate-pulse",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                    className: "bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent",
                                                    children: "\xa1PRIMARIA"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                    className: "text-white font-extrabold text-5xl md:text-7xl",
                                                    children: "PIAGET!"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: "flex justify-center space-x-4 mb-8",
                                            children: [
                                                '🌟',
                                                '🚀',
                                                '🎈',
                                                '🌈',
                                                '✨',
                                                '🎨',
                                                '📚',
                                                '⚽'
                                            ].map((emoji, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                    className: "text-5xl animate-bounce",
                                                    style: {
                                                        animationDelay: "".concat(i * 0.1, "s")
                                                    },
                                                    children: emoji
                                                }, i))
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-2xl md:text-3xl mb-8 leading-relaxed font-medium",
                                            children: [
                                                "\xa1Donde aprender es la aventura m\xe1s divertida del mundo!",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                    className: "text-yellow-300 font-bold",
                                                    children: " \xa1\xdanete a nuestra s\xfaper escuela!"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    className: "grid md:grid-cols-3 gap-8 mb-12",
                                    children: [
                                        {
                                            num: "6",
                                            desc: "Grados súper divertidos",
                                            emoji: "🎯",
                                            color: "from-yellow-400 to-orange-400"
                                        },
                                        {
                                            num: "30",
                                            desc: "Horas de diversión semanal",
                                            emoji: "⏰",
                                            color: "from-green-400 to-blue-400"
                                        },
                                        {
                                            num: "8",
                                            desc: "Materias increíbles",
                                            emoji: "📚",
                                            color: "from-pink-400 to-purple-400"
                                        }
                                    ].map((stat, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "bg-white/20 backdrop-blur-sm rounded-3xl p-8 border-4 border-white/30 hover:scale-110 transition-all duration-500 group cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                    className: "text-6xl mb-4 group-hover:animate-spin",
                                                    children: stat.emoji
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                    className: "text-5xl font-black mb-3 group-hover:animate-pulse",
                                                    children: stat.num
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                    className: "text-white/90 text-lg font-semibold",
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
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-black py-6 px-12 rounded-2xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 cursor-pointer text-xl transform hover:scale-110 hover:rotate-2 shadow-2xl hover:shadow-yellow-500/50 animate-pulse border-4 border-yellow-300",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "mr-3",
                                                        children: "\uD83C\uDF1F"
                                                    }),
                                                    "\xa1Quiero Conocer M\xe1s!",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "ml-3",
                                                        children: "\uD83C\uDF1F"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/admisiones",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "bg-transparent border-4 border-white text-white font-black py-6 px-12 rounded-2xl hover:bg-white hover:text-purple-600 transition-all duration-300 cursor-pointer text-xl transform hover:scale-110 hover:-rotate-2 shadow-2xl",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "mr-3",
                                                        children: "\uD83D\uDE80"
                                                    }),
                                                    "\xa1Quiero Inscribirme!",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "ml-3",
                                                        children: "\uD83D\uDE80"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mx-auto px-6 py-16",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "flex flex-wrap justify-center mb-16 bg-white/80 backdrop-blur-xl rounded-3xl p-4 shadow-2xl border-4 border-rainbow",
                        children: [
                            {
                                id: 'programa',
                                label: '📚 Nuestras Materias',
                                emoji: '📚'
                            },
                            {
                                id: 'grados',
                                label: '🎯 Por Grados',
                                emoji: '🎯'
                            },
                            {
                                id: 'horarios',
                                label: '⏰ Horarios',
                                emoji: '⏰'
                            },
                            {
                                id: 'instalaciones',
                                label: '🏫 Nuestro Campus',
                                emoji: '🏫'
                            }
                        ].map((tab)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: ()=>setActiveTab(tab.id),
                                className: "px-8 py-4 rounded-2xl font-bold transition-all duration-300 m-2 transform hover:scale-105 ".concat(activeTab === tab.id ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl scale-105 animate-pulse' : 'text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:shadow-lg'),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        className: "text-2xl mr-2",
                                        children: tab.emoji
                                    }),
                                    tab.label
                                ]
                            }, tab.id))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "transition-all duration-700",
                        children: [
                            activeTab === 'programa' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-16",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        className: "text-center mb-16",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                className: "text-6xl font-black text-gray-800 mb-8 flex items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "mr-4 animate-spin",
                                                        children: "\uD83C\uDFAF"
                                                    }),
                                                    "\xa1Nuestras Materias S\xfaper Geniales!",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "ml-4 animate-spin",
                                                        children: "\uD83C\uDFAF"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed",
                                                children: [
                                                    "\xa1Cada materia es una aventura incre\xedble llena de diversi\xf3n y aprendizaje!",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "text-purple-600 font-bold",
                                                        children: "\xa1Descubre todo lo que puedes lograr!"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                                        children: materias.map((materia, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:rotate-2 border-4 border-transparent hover:border-purple-300 group",
                                                style: {
                                                    animationDelay: "".concat(index * 0.1, "s")
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "bg-gradient-to-r ".concat(materia.color, " text-white p-6 text-center relative overflow-hidden"),
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "relative z-10",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                        className: "text-6xl mb-4 group-hover:animate-bounce",
                                                                        children: materia.icon
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                        className: "font-black text-xl mb-2",
                                                                        children: materia.title
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                        className: "text-sm bg-white/20 rounded-full px-3 py-1 font-bold",
                                                                        children: materia.nivel
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "p-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                className: "text-gray-700 text-sm mb-4 leading-relaxed",
                                                                children: materia.description
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "".concat(materia.textColor, " font-bold text-sm bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-3 text-center"),
                                                                children: materia.fun
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, index))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        className: "bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 rounded-3xl shadow-2xl p-12 border-4 border-purple-200",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "text-5xl font-black text-center mb-12 text-gray-800 flex items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "mr-4 animate-bounce",
                                                        children: "\uD83C\uDF93"
                                                    }),
                                                    "\xbfC\xf3mo Aprendemos?",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "ml-4 animate-bounce",
                                                        children: "\uD83C\uDF93"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "grid md:grid-cols-3 gap-12",
                                                children: [
                                                    {
                                                        icon: "🧠",
                                                        title: "Aprendemos Haciendo",
                                                        desc: "¡No solo escuchamos, experimentamos y creamos cosas increíbles!",
                                                        color: "from-blue-400 to-cyan-400"
                                                    },
                                                    {
                                                        icon: "🤝",
                                                        title: "Trabajamos en Equipo",
                                                        desc: "¡Juntos somos más fuertes y logramos cosas súper geniales!",
                                                        color: "from-green-400 to-teal-400"
                                                    },
                                                    {
                                                        icon: "💡",
                                                        title: "Pensamos como Detectives",
                                                        desc: "¡Investigamos, analizamos y resolvemos misterios del conocimiento!",
                                                        color: "from-purple-400 to-pink-400"
                                                    }
                                                ].map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "text-center group",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "bg-gradient-to-r ".concat(item.color, " rounded-full w-28 h-28 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl border-4 border-white"),
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                    className: "text-5xl group-hover:animate-bounce",
                                                                    children: item.icon
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                                className: "text-2xl font-black mb-4 text-purple-600 group-hover:text-purple-800 transition-colors",
                                                                children: item.title
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                className: "text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors",
                                                                children: item.desc
                                                            })
                                                        ]
                                                    }, index))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "text-5xl font-black text-center mb-12 text-gray-800 flex items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "mr-4 animate-pulse",
                                                        children: "\uD83C\uDFAA"
                                                    }),
                                                    "\xa1Actividades S\xfaper Divertidas!",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "ml-4 animate-pulse",
                                                        children: "\uD83C\uDFAA"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                                                children: activitadesExtracurriculares.map((actividad, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-4 border-transparent hover:border-rainbow group",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "w-20 h-20 bg-gradient-to-r ".concat(actividad.color, " rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl"),
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                    className: "text-4xl group-hover:animate-bounce",
                                                                    children: actividad.icono
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                                className: "text-xl font-black mb-4 text-center text-gray-800 group-hover:text-purple-600 transition-colors",
                                                                children: actividad.nombre
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                className: "text-gray-600 text-center text-sm mb-4 leading-relaxed",
                                                                children: actividad.descripcion
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "bg-gradient-to-r from-yellow-100 to-pink-100 rounded-xl p-3 text-center",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                    className: "text-purple-600 font-bold text-sm",
                                                                    children: actividad.fun
                                                                })
                                                            })
                                                        ]
                                                    }, index))
                                            })
                                        ]
                                    })
                                ]
                            }),
                            activeTab === 'grados' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-12",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "text-6xl font-black text-center text-gray-800 mb-16 flex items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "mr-4 animate-bounce",
                                                children: "\uD83C\uDFAF"
                                            }),
                                            "\xa1Tu Aventura por Grados!",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "ml-4 animate-bounce",
                                                children: "\uD83C\uDFAF"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "grid gap-8",
                                        children: grados.map((grado, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "".concat(grado.bgPattern, " rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-4 border-white group"),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-col md:flex-row md:items-center justify-between mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex items-center mb-6 md:mb-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                        className: "bg-gradient-to-r ".concat(grado.color, " text-white rounded-full w-24 h-24 flex items-center justify-center mr-6 font-black text-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border-4 border-white"),
                                                                        children: grado.emoji
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                                                className: "text-3xl font-black text-gray-800 group-hover:text-purple-600 transition-colors",
                                                                                children: grado.grado
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                                className: "text-gray-600 font-bold text-lg",
                                                                                children: grado.edad
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "text-center md:text-right",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                    className: "bg-white/80 backdrop-blur text-purple-800 px-6 py-3 rounded-2xl font-black border-2 border-purple-200 shadow-lg",
                                                                    children: grado.enfoque
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                                className: "font-black text-gray-700 mb-6 text-xl flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                        className: "mr-3 text-2xl",
                                                                        children: "\uD83C\uDFC6"
                                                                    }),
                                                                    "\xa1Mis s\xfaper logros!"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "grid md:grid-cols-3 gap-4",
                                                                children: grado.logros.map((logro, logroIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "flex items-center bg-white/60 backdrop-blur rounded-xl p-4 border-2 border-white shadow-lg hover:scale-105 transition-all duration-300",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                className: "w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-4 animate-pulse"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                className: "text-gray-700 font-bold",
                                                                                children: logro
                                                                            })
                                                                        ]
                                                                    }, logroIndex))
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, index))
                                    })
                                ]
                            }),
                            activeTab === 'horarios' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-12",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "text-6xl font-black text-center text-gray-800 mb-16 flex items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "mr-4 animate-spin",
                                                children: "⏰"
                                            }),
                                            "\xa1Nuestros Horarios S\xfaper Organizados!",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "ml-4 animate-spin",
                                                children: "⏰"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-2xl overflow-hidden border-4 border-white",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 p-8 relative overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "absolute inset-0 bg-white/10"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "relative z-10 text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "text-6xl mb-4",
                                                                children: "\uD83D\uDD50"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                                className: "text-4xl font-black mb-2",
                                                                children: "7:30 AM - 2:30 PM"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                className: "text-xl font-bold",
                                                                children: "\xa17 horas de diversi\xf3n y aprendizaje cada d\xeda!"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "p-8",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                    className: "grid md:grid-cols-2 gap-6",
                                                    children: horarioSemanal.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center justify-between p-6 rounded-2xl border-2 border-white bg-white/20 backdrop-blur hover:bg-white/30 transition-all duration-300 transform hover:scale-105",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                            className: "text-3xl mr-4",
                                                                            children: item.emoji
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                            className: "font-black text-white text-lg",
                                                                            children: item.materia
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                    className: "px-4 py-2 rounded-full text-sm font-black ".concat(item.color, " shadow-lg"),
                                                                    children: item.horas
                                                                })
                                                            ]
                                                        }, index))
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "grid md:grid-cols-2 gap-8",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl shadow-2xl p-8 border-4 border-green-200",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                        className: "text-3xl font-black mb-6 text-green-600 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                className: "mr-3 text-4xl",
                                                                children: "\uD83D\uDCC5"
                                                            }),
                                                            "\xa1Mi D\xeda S\xfaper Divertido!"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            {
                                                                time: "7:30 - 8:00",
                                                                activity: "¡Buenos días y actividades geniales!",
                                                                emoji: "🌅"
                                                            },
                                                            {
                                                                time: "8:00 - 10:00",
                                                                activity: "¡Primeras clases súper divertidas!",
                                                                emoji: "📚"
                                                            },
                                                            {
                                                                time: "10:00 - 10:20",
                                                                activity: "¡Recreo para jugar y hacer amigos!",
                                                                emoji: "⚽"
                                                            },
                                                            {
                                                                time: "10:20 - 12:20",
                                                                activity: "¡Más aventuras de aprendizaje!",
                                                                emoji: "🔬"
                                                            },
                                                            {
                                                                time: "12:20 - 13:00",
                                                                activity: "¡Hora de comer rico y platicar!",
                                                                emoji: "🍽️"
                                                            },
                                                            {
                                                                time: "13:00 - 14:30",
                                                                activity: "¡Últimas clases antes de ir a casa!",
                                                                emoji: "🎨"
                                                            }
                                                        ].map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex items-center justify-between bg-white/60 rounded-xl p-4 border-2 border-white shadow-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "flex items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                className: "text-2xl mr-3",
                                                                                children: item.emoji
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                className: "font-bold text-gray-700 text-sm",
                                                                                children: item.time
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                        className: "text-gray-700 font-medium text-sm",
                                                                        children: item.activity
                                                                    })
                                                                ]
                                                            }, index))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl shadow-2xl p-8 border-4 border-purple-200",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                        className: "text-3xl font-black mb-6 text-purple-600 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                className: "mr-3 text-4xl",
                                                                children: "✨"
                                                            }),
                                                            "\xa1Servicios Geniales!"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
                                                        className: "space-y-4",
                                                        children: [
                                                            {
                                                                service: "Comedor súper rico",
                                                                emoji: "🍽️"
                                                            },
                                                            {
                                                                service: "Transporte seguro y divertido",
                                                                emoji: "🚌"
                                                            },
                                                            {
                                                                service: "Ayuda extra con tareas",
                                                                emoji: "📝"
                                                            },
                                                            {
                                                                service: "Actividades después de clases",
                                                                emoji: "🎪"
                                                            }
                                                        ].map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                className: "flex items-center bg-white/60 rounded-xl p-4 border-2 border-white shadow-lg hover:scale-105 transition-all duration-300",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                        className: "text-2xl mr-4",
                                                                        children: item.emoji
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                        className: "text-gray-700 font-bold",
                                                                        children: item.service
                                                                    })
                                                                ]
                                                            }, index))
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
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "text-6xl font-black text-center text-gray-800 mb-16 flex items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "mr-4 animate-bounce",
                                                children: "\uD83C\uDFEB"
                                            }),
                                            "\xa1Nuestro Campus S\xfaper Genial!",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "ml-4 animate-bounce",
                                                children: "\uD83C\uDFEB"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                                        children: instalacionesData.map((instalacion, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "bg-white rounded-3xl shadow-2xl p-8 border-4 border-transparent hover:border-rainbow transition-all duration-500 group transform hover:scale-105 hover:rotate-1",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                        className: "text-2xl font-black mb-6 text-gray-800 group-hover:text-purple-600 transition-colors",
                                                        children: instalacion.title
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
                                                        className: "space-y-4",
                                                        children: instalacion.items.map((item, itemIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                className: "flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300 group-hover:translate-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                        className: "w-3 h-3 bg-gradient-to-r ".concat(instalacion.color, " rounded-full mr-4 animate-pulse")
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                        className: "font-medium",
                                                                        children: item
                                                                    })
                                                                ]
                                                            }, itemIndex))
                                                    })
                                                ]
                                            }, index))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                                        className: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-16 text-center text-white border-4 border-white shadow-2xl",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "text-5xl font-black mb-8 flex items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "mr-4 animate-spin",
                                                        children: "\uD83C\uDFAE"
                                                    }),
                                                    "\xa1Explora Nuestro Campus!",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "ml-4 animate-spin",
                                                        children: "\uD83C\uDFAE"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "text-2xl mb-12 max-w-4xl mx-auto font-medium",
                                                children: "\xa1Haz un recorrido s\xfaper divertido por toda nuestra escuela desde tu casa!"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "grid md:grid-cols-2 gap-8",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "bg-white/20 backdrop-blur rounded-3xl p-8 border-4 border-white/30 hover:scale-105 transition-all duration-300",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "text-6xl mb-4",
                                                                children: "\uD83D\uDD76️"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                                className: "text-2xl font-black text-yellow-300 mb-4",
                                                                children: "Tour Virtual 360\xb0"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                className: "text-white/90 mb-6 font-medium",
                                                                children: "\xa1Camina por nuestra escuela como si estuvieras aqu\xed!"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                className: "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-2xl hover:scale-110 transition-transform duration-300 font-black shadow-2xl border-2 border-yellow-300",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                        className: "mr-2",
                                                                        children: "\uD83D\uDE80"
                                                                    }),
                                                                    "\xa1Empezar Tour!"
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "bg-white/20 backdrop-blur rounded-3xl p-8 border-4 border-white/30 hover:scale-105 transition-all duration-300",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "text-6xl mb-4",
                                                                children: "\uD83D\uDC65"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
                                                                className: "text-2xl font-black text-green-300 mb-4",
                                                                children: "\xa1Ven a Visitarnos!"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                className: "text-white/90 mb-6 font-medium",
                                                                children: "\xa1Conoce nuestra escuela en persona con tu familia!"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                className: "bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-2xl hover:scale-110 transition-transform duration-300 font-black shadow-2xl border-2 border-green-300",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                        className: "mr-2",
                                                                        children: "\uD83D\uDCC5"
                                                                    }),
                                                                    "\xa1Agendar Visita!"
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
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-3xl text-white p-16 text-center mt-20 shadow-2xl border-4 border-white relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "absolute inset-0 opacity-20",
                                children: [
                                    ...Array(20)
                                ].map((_, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "absolute animate-ping",
                                        style: {
                                            left: "".concat(Math.random() * 100, "%"),
                                            top: "".concat(Math.random() * 100, "%"),
                                            animationDelay: "".concat(Math.random() * 3, "s"),
                                            animationDuration: "".concat(2 + Math.random() * 2, "s")
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: "w-6 h-6 bg-yellow-300 rounded-full"
                                        })
                                    }, i))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative z-10",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "text-6xl font-black mb-8 flex items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "mr-4 animate-bounce",
                                                children: "\uD83C\uDF1F"
                                            }),
                                            "\xa1\xdanete a Nuestra Familia Piaget!",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "ml-4 animate-bounce",
                                                children: "\uD83C\uDF1F"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-2xl mb-12 max-w-5xl mx-auto leading-relaxed font-medium",
                                        children: [
                                            "\xa1En Primaria Piaget cada d\xeda es una nueva aventura de aprendizaje!",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "text-yellow-300 font-black",
                                                children: " \xa1Ven y descubre todo lo incre\xedble que puedes lograr!"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "flex justify-center space-x-6 mb-12",
                                        children: [
                                            "🎉",
                                            "🚀",
                                            "🌈",
                                            "⭐",
                                            "🎯",
                                            "🏆",
                                            "💫",
                                            "🎪"
                                        ].map((emoji, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "text-5xl animate-bounce cursor-pointer hover:scale-150 transition-transform duration-300",
                                                style: {
                                                    animationDelay: "".concat(i * 0.2, "s")
                                                },
                                                children: emoji
                                            }, i))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col sm:flex-row gap-8 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/contacto",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-black py-6 px-16 rounded-3xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-500 cursor-pointer text-xl transform hover:scale-110 hover:rotate-2 shadow-2xl border-4 border-yellow-300 animate-pulse",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                            className: "mr-3",
                                                            children: "\uD83D\uDCDE"
                                                        }),
                                                        "\xa1Quiero M\xe1s Info!",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                            className: "ml-3",
                                                            children: "\uD83D\uDCDE"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/admisiones",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "bg-transparent border-4 border-white text-white font-black py-6 px-16 rounded-3xl hover:bg-white hover:text-purple-600 transition-all duration-500 cursor-pointer text-xl transform hover:scale-110 hover:-rotate-2 shadow-2xl",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                            className: "mr-3",
                                                            children: "\uD83C\uDF92"
                                                        }),
                                                        "\xa1Inscr\xedbeme Ya!",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                            className: "ml-3",
                                                            children: "\uD83C\uDF92"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "mt-12 bg-white/20 backdrop-blur rounded-2xl p-6 border-2 border-white/30",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-lg font-medium text-white/90",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                    className: "text-yellow-300 font-bold",
                                                    children: "Para pap\xe1s y mam\xe1s:"
                                                }),
                                                "Formamos estudiantes felices, seguros y preparados para el futuro \uD83D\uDCDA✨"
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
    });
}


/***/ }),

/***/ 5109:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 9832:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3590));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [28,874,441,684,358], () => (__webpack_exec__(9832)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);