(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[728],{

/***/ 945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KinderClient)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2115);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6874);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(792);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function KinderClient(param) {
    let { areasDesarrollo, actividadesDiarias, habilidades, body } = param;
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('programa');
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen",
        style: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "relative text-white py-20 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "absolute inset-0 opacity-10",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "absolute top-10 left-10 text-6xl animate-bounce",
                                children: "\uD83C\uDF08"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "absolute top-20 right-20 text-4xl animate-pulse",
                                children: "⭐"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "absolute bottom-20 left-20 text-5xl animate-bounce delay-75",
                                children: "\uD83C\uDF88"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "absolute bottom-10 right-10 text-4xl animate-pulse delay-150",
                                children: "\uD83E\uDD8B"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "container mx-auto px-4 relative z-10",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "max-w-4xl mx-auto text-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                                    className: "text-6xl font-bold mb-6 text-shadow-lg",
                                    children: "\uD83C\uDF1F Kinder Piaget \uD83C\uDF1F"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                    className: "text-2xl mb-8 leading-relaxed",
                                    children: "\xa1Un mundo m\xe1gico de aprendizaje para ni\xf1os de 3 a 6 a\xf1os! Donde cada d\xeda es una nueva aventura llena de descubrimientos"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/contacto",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "bg-yellow-400 text-purple-800 font-bold py-4 px-8 rounded-full text-lg hover:bg-yellow-300 transition duration-300 cursor-pointer shadow-lg transform hover:scale-105",
                                                children: "\uD83C\uDFAF \xa1Vis\xedtanos!"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/admisiones",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                className: "bg-white bg-opacity-20 backdrop-blur border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-purple-800 transition duration-300 cursor-pointer",
                                                children: "\uD83D\uDCDD Inscripciones"
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
                className: "container mx-auto px-4 py-12",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "flex flex-wrap justify-center mb-12 bg-white rounded-2xl shadow-xl p-4",
                        children: [
                            {
                                id: 'programa',
                                label: '🎪 Nuestro Programa'
                            },
                            {
                                id: 'actividades',
                                label: '🎮 Actividades'
                            },
                            {
                                id: 'habilidades',
                                label: '🌟 Lo que aprenderán'
                            },
                            {
                                id: 'instalaciones',
                                label: '🏰 Nuestro Castillo'
                            }
                        ].map((tab)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                onClick: ()=>setActiveTab(tab.id),
                                className: "px-6 py-3 rounded-xl font-bold transition duration-300 m-1 ".concat(activeTab === tab.id ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white transform scale-105' : 'text-purple-600 hover:text-purple-800 hover:bg-purple-50'),
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
                                        children: "\uD83C\uDF08 \xc1reas de Desarrollo"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                        className: "text-xl text-purple-100 max-w-3xl mx-auto",
                                        children: "Nuestro programa integral desarrolla todas las \xe1reas importantes para el crecimiento de tu peque\xf1o"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: "grid md:grid-cols-3 gap-6",
                                children: areasDesarrollo.map((area, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "h-32 bg-gradient-to-r ".concat(area.color, " flex items-center justify-center"),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                    className: "text-6xl",
                                                    children: area.icon
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "p-6",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                        className: "text-xl font-bold mb-3 text-gray-800",
                                                        children: area.title
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                        className: "text-gray-600",
                                                        children: area.description
                                                    })
                                                ]
                                            })
                                        ]
                                    }, index))
                            })
                        ]
                    }),
                    activeTab === 'actividades' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                className: "text-4xl font-bold text-center text-white mb-12",
                                children: "\uD83C\uDFAE Un D\xeda Lleno de Diversi\xf3n"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bg-white rounded-2xl shadow-xl overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                className: "text-2xl font-bold flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "mr-3",
                                                        children: "⏰"
                                                    }),
                                                    " Horario Diario"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "text-purple-100",
                                                children: "Cada momento es una oportunidad de aprender jugando"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "p-6",
                                        children: actividadesDiarias.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center py-4 ".concat(index !== actividadesDiarias.length - 1 ? 'border-b border-gray-200' : ''),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "w-20 text-lg mr-4",
                                                        children: item.emoji
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "w-32 text-sm font-medium text-purple-600 mr-6",
                                                        children: item.hora
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "flex-1 text-gray-800",
                                                        children: item.actividad
                                                    })
                                                ]
                                            }, index))
                                    })
                                ]
                            })
                        ]
                    }),
                    activeTab === 'habilidades' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                className: "text-4xl font-bold text-center text-white mb-12",
                                children: "\uD83C\uDF1F Habilidades que Desarrollar\xe1n"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bg-white rounded-2xl shadow-xl p-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                        className: "text-2xl font-bold text-center mb-8 text-purple-600",
                                        children: "Al finalizar Kinder, tu hijo podr\xe1:"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "grid md:grid-cols-2 gap-6",
                                        children: habilidades.map((habilidad, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "text-2xl mr-4",
                                                        children: "✅"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                        className: "text-gray-700 font-medium",
                                                        children: habilidad
                                                    })
                                                ]
                                            }, index))
                                    })
                                ]
                            })
                        ]
                    }),
                    activeTab === 'instalaciones' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-white text-center py-12",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                                className: "text-4xl font-bold",
                                children: "\uD83C\uDFF0 Nuestro Castillo M\xe1gico"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                className: "text-xl text-purple-100 mt-4",
                                children: "(Aqu\xed puedes agregar otra secci\xf3n si decides controlarla por CMS m\xe1s adelante)"
                            })
                        ]
                    }),
                    body && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "prose prose-purple max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-xl mt-12",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_markdown__WEBPACK_IMPORTED_MODULE_3__/* .Markdown */ .oz, {
                            children: body
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 6716:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 945));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [874,411,441,684,358], () => (__webpack_exec__(6716)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);