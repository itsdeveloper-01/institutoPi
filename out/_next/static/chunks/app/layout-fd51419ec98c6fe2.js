(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[177],{

/***/ 347:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 1889:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 347, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5494));


/***/ }),

/***/ 5494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2115);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6874);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6766);
/* harmony import */ var _barrel_optimize_names_IoIosMenu_IoMdClose_react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(748);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const links = [
    {
        label: "Maternal",
        href: "/educacion/maternal"
    },
    {
        label: "Kinder",
        href: "/educacion/kinder"
    },
    {
        label: "Primaria",
        href: "/educacion/primaria"
    },
    {
        label: "Secundaria",
        href: "/educacion/secundaria"
    },
    {
        label: "Preparatoria",
        href: "/educacion/preparatoria"
    }
];
function Navbar() {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "bg-white shadow-md fixed top-0 left-0 right-0 z-40",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-7xl mx-auto px-4 py-3 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            src: "/images/logo.png",
                            alt: "logo",
                            width: 160,
                            height: 40,
                            priority: true
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        onClick: ()=>setOpen(!open),
                        className: "md:hidden text-gray-700 focus:outline-none",
                        "aria-label": "Abrir men\xfa",
                        children: open ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_IoIosMenu_IoMdClose_react_icons_io__WEBPACK_IMPORTED_MODULE_4__/* .IoMdClose */ .WQq, {
                            size: 28
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_IoIosMenu_IoMdClose_react_icons_io__WEBPACK_IMPORTED_MODULE_4__/* .IoIosMenu */ .fF8, {
                            size: 28
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: "hidden md:flex space-x-6",
                        children: links.map((link)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: link.href,
                                className: "text-gray-700 hover:text-blue-600 transition-colors",
                                children: link.label
                            }, link.href))
                    })
                ]
            }),
            open && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "md:hidden bg-white px-4 pb-4 shadow",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
                    className: "space-y-2",
                    children: links.map((link)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: link.href,
                                className: "block text-gray-700 hover:text-blue-600 transition-colors",
                                onClick: ()=>setOpen(false),
                                children: link.label
                            })
                        }, link.href))
                })
            })
        ]
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [690,206,874,751,441,684,358], () => (__webpack_exec__(1889)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);