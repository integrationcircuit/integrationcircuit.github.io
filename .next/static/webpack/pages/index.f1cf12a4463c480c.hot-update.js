"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Settings/SettingDialog.tsx":
/*!***********************************************!*\
  !*** ./components/Settings/SettingDialog.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SettingDialog: function() { return /* binding */ SettingDialog; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var _hooks_useCreateReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useCreateReducer */ \"./hooks/useCreateReducer.ts\");\n/* harmony import */ var _utils_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/app/settings */ \"./utils/app/settings.ts\");\n/* harmony import */ var _pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/pages/api/home/home.context */ \"./pages/api/home/home.context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SettingDialog = (param)=>{\n    let { open, onClose } = param;\n    _s();\n    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)(\"settings\");\n    const settings = (0,_utils_app_settings__WEBPACK_IMPORTED_MODULE_4__.getSettings)();\n    const { state, dispatch } = (0,_hooks_useCreateReducer__WEBPACK_IMPORTED_MODULE_3__.useCreateReducer)({\n        initialState: settings\n    });\n    const { dispatch: homeDispatch } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_pages_api_home_home_context__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleMouseDown = (e)=>{\n            if (modalRef.current && !modalRef.current.contains(e.target)) {\n                window.addEventListener(\"mouseup\", handleMouseUp);\n            }\n        };\n        const handleMouseUp = (e)=>{\n            window.removeEventListener(\"mouseup\", handleMouseUp);\n            onClose();\n        };\n        window.addEventListener(\"mousedown\", handleMouseDown);\n        return ()=>{\n            window.removeEventListener(\"mousedown\", handleMouseDown);\n        };\n    }, [\n        onClose\n    ]);\n    const handleSave = ()=>{\n        let uriElement = document.getElementById(\"taskUri\");\n        console.log(uriElement.value);\n        let tokenElement = document.getElementById(\"taskToken\");\n        console.log(tokenElement.value);\n        let uriValue = uriElement.value.toLowerCase().replace(\"http://\", \"https://\");\n        //let uriValue = uriElement.value;\n        let tokenValue = tokenElement.value;\n        localStorage.setItem(\"userUri\", uriValue);\n        localStorage.setItem(\"userToken\", tokenValue);\n        //alert(this.myRandomRef.current.value);\n        homeDispatch({\n            field: \"lightMode\",\n            value: state.theme\n        });\n        (0,_utils_app_settings__WEBPACK_IMPORTED_MODULE_4__.saveSettings)(state);\n    };\n    const getPlaceHolders = ()=>{\n        let result = {\n            \"bearerToken\": \"\",\n            \"taskUri\": \"\"\n        };\n        const bearerToken = localStorage.getItem(\"userToken\");\n        result.bearerToken = bearerToken != null ? bearerToken : \"Enter your SnapLogic Task URL\";\n        const userUri = localStorage.getItem(\"userUri\");\n        result.taskUri = userUri != null ? userUri : \"Enter your SnapLogic Task Token\";\n        return result;\n    };\n    // Render nothing if the dialog is not open.\n    if (!open) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    }\n    // Render the dialog.\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fixed inset-0 z-10 overflow-hidden\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden sm:inline-block sm:h-screen sm:align-middle\",\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: modalRef,\n                        className: \"dark:border-netural-400 inline-block max-h-[400px] transform overflow-y-auto rounded-lg border border-gray-300 bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-[#202123] sm:my-8 sm:max-h-[600px] sm:w-full sm:max-w-lg sm:p-6 sm:align-middle\",\n                        role: \"dialog\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-lg pb-4 font-bold text-black dark:text-neutral-200\",\n                                children: t(\"Settings\")\n                            }, void 0, false, {\n                                fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-sm font-bold mb-2 text-black dark:text-neutral-200\",\n                                children: t(\"Theme\")\n                            }, void 0, false, {\n                                fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-sm font-bold mb-2 text-black\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"text-neutral-700 dark:text-neutral-200\",\n                                        htmlFor: \"taskUri\",\n                                        children: \"Task URI:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"border-black border-2 w-full\",\n                                        id: \"taskUri\",\n                                        type: \"text\",\n                                        placeholder: getPlaceHolders().taskUri\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-sm font-bold mb-2 text-black\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"text-neutral-700 dark:text-neutral-200\",\n                                        htmlFor: \"taskToken\",\n                                        children: \"Task Token:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"border-black border-2 w-full\",\n                                        id: \"taskToken\",\n                                        type: \"text\",\n                                        placeholder: getPlaceHolders().bearerToken\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"w-full cursor-pointer bg-transparent p-2 text-neutral-700 dark:text-neutral-200\",\n                                value: state.theme,\n                                onChange: (event)=>dispatch({\n                                        field: \"theme\",\n                                        value: event.target.value\n                                    }),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"dark\",\n                                        children: t(\"Dark mode\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"light\",\n                                        children: t(\"Light mode\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"container flex flex-col items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    className: \"w-1/2 px-4 py-2 mt-6 border rounded-lg shadow border-neutral-500 text-neutral-900 hover:bg-neutral-100 focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-300\",\n                                    onClick: ()=>{\n                                        localStorage.removeItem(\"userUri\");\n                                        localStorage.removeItem(\"userToken\");\n                                        document.getElementById(\"taskUri\").value = \"\";\n                                        document.getElementById(\"taskUri\").placeholder = getPlaceHolders().taskUri;\n                                        document.getElementById(\"taskToken\").value = \"\";\n                                        document.getElementById(\"taskToken\").placeholder = getPlaceHolders().bearerToken;\n                                    },\n                                    children: \"Clear Saved Values\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 1\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"w-full px-4 py-2 mt-6 border rounded-lg shadow border-neutral-500 text-neutral-900 hover:bg-neutral-100 focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-300\",\n                                onClick: ()=>{\n                                    handleSave();\n                                    onClose();\n                                },\n                                children: t(\"Save\")\n                            }, void 0, false, {\n                                fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n                                lineNumber: 137,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/stan/Projects/integrationcircuit.github.io/components/Settings/SettingDialog.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SettingDialog, \"AWDheGJn5ZQRVEwt0DNL8oQY2bQ=\", false, function() {\n    return [\n        next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation,\n        _hooks_useCreateReducer__WEBPACK_IMPORTED_MODULE_3__.useCreateReducer\n    ];\n});\n_c = SettingDialog;\nvar _c;\n$RefreshReg$(_c, \"SettingDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UztvQ0FDUHhDO29DQUNBakI7Z0NBQ0Y7MENBRUNDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakIsRUFBRTtHQXJJV0g7O1FBQ0dMLHdEQUFjQTtRQUVBQyxxRUFBZ0JBOzs7S0FIakNJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2V0dGluZ3MvU2V0dGluZ0RpYWxvZy50c3g/NjcyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnbmV4dC1pMThuZXh0JztcblxuaW1wb3J0IHsgdXNlQ3JlYXRlUmVkdWNlciB9IGZyb20gJ0AvaG9va3MvdXNlQ3JlYXRlUmVkdWNlcic7XG5cbmltcG9ydCB7IGdldFNldHRpbmdzLCBzYXZlU2V0dGluZ3MgfSBmcm9tICdAL3V0aWxzL2FwcC9zZXR0aW5ncyc7XG5cbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnQC90eXBlcy9zZXR0aW5ncyc7XG5cbmltcG9ydCBIb21lQ29udGV4dCBmcm9tICdAL3BhZ2VzL2FwaS9ob21lL2hvbWUuY29udGV4dCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvcGVuOiBib29sZWFuO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgU2V0dGluZ0RpYWxvZzogRkM8UHJvcHM+ID0gKHsgb3Blbiwgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ3NldHRpbmdzJyk7XG4gIGNvbnN0IHNldHRpbmdzOiBTZXR0aW5ncyA9IGdldFNldHRpbmdzKCk7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDcmVhdGVSZWR1Y2VyPFNldHRpbmdzPih7XG4gICAgaW5pdGlhbFN0YXRlOiBzZXR0aW5ncyxcbiAgfSk7XG4gIGNvbnN0IHsgZGlzcGF0Y2g6IGhvbWVEaXNwYXRjaCB9ID0gdXNlQ29udGV4dChIb21lQ29udGV4dCk7XG4gIGNvbnN0IG1vZGFsUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAobW9kYWxSZWYuY3VycmVudCAmJiAhbW9kYWxSZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCBhcyBOb2RlKSkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlTW91c2VVcCk7XG4gICAgICBvbkNsb3NlKCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVNb3VzZURvd24pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVNb3VzZURvd24pO1xuICAgIH07XG4gIH0sIFtvbkNsb3NlXSk7XG5cbiAgY29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcbiAgICBsZXQgdXJpRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVXJpJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zb2xlLmxvZyh1cmlFbGVtZW50LnZhbHVlKTtcbiAgICBsZXQgdG9rZW5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tUb2tlbicpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc29sZS5sb2codG9rZW5FbGVtZW50LnZhbHVlKTtcbiAgICBsZXQgdXJpVmFsdWUgPSB1cmlFbGVtZW50LnZhbHVlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnaHR0cDovLycsJ2h0dHBzOi8vJyk7XG4gICAgLy9sZXQgdXJpVmFsdWUgPSB1cmlFbGVtZW50LnZhbHVlO1xuICAgIGxldCB0b2tlblZhbHVlID0gdG9rZW5FbGVtZW50LnZhbHVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyVXJpJywgdXJpVmFsdWUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyVG9rZW4nLCB0b2tlblZhbHVlKTtcbiAgICAvL2FsZXJ0KHRoaXMubXlSYW5kb21SZWYuY3VycmVudC52YWx1ZSk7XG4gICAgaG9tZURpc3BhdGNoKHsgZmllbGQ6ICdsaWdodE1vZGUnLCB2YWx1ZTogc3RhdGUudGhlbWUgfSk7XG4gICAgc2F2ZVNldHRpbmdzKHN0YXRlKTtcbiAgfTtcblxuICBjb25zdCBnZXRQbGFjZUhvbGRlcnMgPSAoKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IHtcImJlYXJlclRva2VuXCI6ICcnLCBcInRhc2tVcmlcIjogJyd9O1xuICAgIGNvbnN0IGJlYXJlclRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJUb2tlbicpO1xuICAgIHJlc3VsdC5iZWFyZXJUb2tlbiA9IGJlYXJlclRva2VuICE9IG51bGwgPyBiZWFyZXJUb2tlbiA6ICdFbnRlciB5b3VyIFNuYXBMb2dpYyBUYXNrIFVSTCc7XG4gICAgY29uc3QgdXNlclVyaSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyVXJpJyk7XG4gICAgcmVzdWx0LnRhc2tVcmkgPSB1c2VyVXJpICE9IG51bGwgPyB1c2VyVXJpIDogJ0VudGVyIHlvdXIgU25hcExvZ2ljIFRhc2sgVG9rZW4nO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBSZW5kZXIgbm90aGluZyBpZiB0aGUgZGlhbG9nIGlzIG5vdCBvcGVuLlxuICBpZiAoIW9wZW4pIHtcbiAgICByZXR1cm4gPD48Lz47XG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIGRpYWxvZy5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS01MCB6LTUwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei0xMCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gcHgtNCBwdC00IHBiLTIwIHRleHQtY2VudGVyIHNtOmJsb2NrIHNtOnAtMFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBzbTppbmxpbmUtYmxvY2sgc206aC1zY3JlZW4gc206YWxpZ24tbWlkZGxlXCJcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17bW9kYWxSZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkYXJrOmJvcmRlci1uZXR1cmFsLTQwMCBpbmxpbmUtYmxvY2sgbWF4LWgtWzQwMHB4XSB0cmFuc2Zvcm0gb3ZlcmZsb3cteS1hdXRvIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBiZy13aGl0ZSBweC00IHB0LTUgcGItNCB0ZXh0LWxlZnQgYWxpZ24tYm90dG9tIHNoYWRvdy14bCB0cmFuc2l0aW9uLWFsbCBkYXJrOmJnLVsjMjAyMTIzXSBzbTpteS04IHNtOm1heC1oLVs2MDBweF0gc206dy1mdWxsIHNtOm1heC13LWxnIHNtOnAtNiBzbTphbGlnbi1taWRkbGVcIlxuICAgICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHBiLTQgZm9udC1ib2xkIHRleHQtYmxhY2sgZGFyazp0ZXh0LW5ldXRyYWwtMjAwXCI+XG4gICAgICAgICAgICAgIHt0KCdTZXR0aW5ncycpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgbWItMiB0ZXh0LWJsYWNrIGRhcms6dGV4dC1uZXV0cmFsLTIwMFwiPlxuICAgICAgICAgICAgICB7dCgnVGhlbWUnKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIG1iLTIgdGV4dC1ibGFja1wiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSd0ZXh0LW5ldXRyYWwtNzAwIGRhcms6dGV4dC1uZXV0cmFsLTIwMCcgaHRtbEZvcj0ndGFza1VyaSc+VGFzayBVUkk6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nYm9yZGVyLWJsYWNrIGJvcmRlci0yIHctZnVsbCcgaWQ9J3Rhc2tVcmknIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPXtnZXRQbGFjZUhvbGRlcnMoKS50YXNrVXJpfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgbWItMiB0ZXh0LWJsYWNrXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbmV1dHJhbC03MDAgZGFyazp0ZXh0LW5ldXRyYWwtMjAwJyBodG1sRm9yPSd0YXNrVG9rZW4nPlRhc2sgVG9rZW46PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nYm9yZGVyLWJsYWNrIGJvcmRlci0yIHctZnVsbCcgaWQ9J3Rhc2tUb2tlbicgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9e2dldFBsYWNlSG9sZGVycygpLmJlYXJlclRva2VufSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGN1cnNvci1wb2ludGVyIGJnLXRyYW5zcGFyZW50IHAtMiB0ZXh0LW5ldXRyYWwtNzAwIGRhcms6dGV4dC1uZXV0cmFsLTIwMFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS50aGVtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IGZpZWxkOiAndGhlbWUnLCB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhcmtcIj57dCgnRGFyayBtb2RlJyl9PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsaWdodFwiPnt0KCdMaWdodCBtb2RlJyl9PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cblxuPHNwYW4gY2xhc3NOYW1lPSdjb250YWluZXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS8yIHB4LTQgcHktMiBtdC02IGJvcmRlciByb3VuZGVkLWxnIHNoYWRvdyBib3JkZXItbmV1dHJhbC01MDAgdGV4dC1uZXV0cmFsLTkwMCBob3ZlcjpiZy1uZXV0cmFsLTEwMCBmb2N1czpvdXRsaW5lLW5vbmUgZGFyazpib3JkZXItbmV1dHJhbC04MDAgZGFyazpib3JkZXItb3BhY2l0eS01MCBkYXJrOmJnLXdoaXRlIGRhcms6dGV4dC1ibGFjayBkYXJrOmhvdmVyOmJnLW5ldXRyYWwtMzAwXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyVXJpJyk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJUb2tlbicpO1xuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1VyaScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVXJpJykgYXMgSFRNTElucHV0RWxlbWVudCkucGxhY2Vob2xkZXIgPSBnZXRQbGFjZUhvbGRlcnMoKS50YXNrVXJpO1xuICAgICAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1Rva2VuJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tUb2tlbicpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnBsYWNlaG9sZGVyID0gZ2V0UGxhY2VIb2xkZXJzKCkuYmVhcmVyVG9rZW47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH19PkNsZWFyIFNhdmVkIFZhbHVlczwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTIgbXQtNiBib3JkZXIgcm91bmRlZC1sZyBzaGFkb3cgYm9yZGVyLW5ldXRyYWwtNTAwIHRleHQtbmV1dHJhbC05MDAgaG92ZXI6YmctbmV1dHJhbC0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGRhcms6Ym9yZGVyLW5ldXRyYWwtODAwIGRhcms6Ym9yZGVyLW9wYWNpdHktNTAgZGFyazpiZy13aGl0ZSBkYXJrOnRleHQtYmxhY2sgZGFyazpob3ZlcjpiZy1uZXV0cmFsLTMwMFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVTYXZlKCk7XG4gICAgICAgICAgICAgICAgb25DbG9zZSgpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dCgnU2F2ZScpfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNyZWF0ZVJlZHVjZXIiLCJnZXRTZXR0aW5ncyIsInNhdmVTZXR0aW5ncyIsIkhvbWVDb250ZXh0IiwiU2V0dGluZ0RpYWxvZyIsIm9wZW4iLCJvbkNsb3NlIiwidCIsInNldHRpbmdzIiwic3RhdGUiLCJkaXNwYXRjaCIsImluaXRpYWxTdGF0ZSIsImhvbWVEaXNwYXRjaCIsIm1vZGFsUmVmIiwiaGFuZGxlTW91c2VEb3duIiwiZSIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVNb3VzZVVwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNhdmUiLCJ1cmlFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsInRva2VuRWxlbWVudCIsInVyaVZhbHVlIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwidG9rZW5WYWx1ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJmaWVsZCIsInRoZW1lIiwiZ2V0UGxhY2VIb2xkZXJzIiwicmVzdWx0IiwiYmVhcmVyVG9rZW4iLCJnZXRJdGVtIiwidXNlclVyaSIsInRhc2tVcmkiLCJkaXYiLCJjbGFzc05hbWUiLCJhcmlhLWhpZGRlbiIsInJlZiIsInJvbGUiLCJsYWJlbCIsImh0bWxGb3IiLCJiciIsImlucHV0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzZWxlY3QiLCJvbkNoYW5nZSIsImV2ZW50Iiwib3B0aW9uIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJyZW1vdmVJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Settings/SettingDialog.tsx\n"));

/***/ })

});