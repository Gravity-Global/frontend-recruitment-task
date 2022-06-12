(()=>{var __webpack_modules__={"./src/js/main.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/js/popup.js");\n\r\n\r\n\r\nwindow.onload = () => {\r\n    const content = `\r\n            <div id="content">\r\n                <img id="close" src="images/x-icon.svg">\r\n                <h1>Alert!</h1>\r\n                <p>\r\n                   You have clicked <span id="calls">0 times</span> to related button.\r\n                </p>\r\n                <button name="button" id="reset">\r\n                    Reset\r\n                </button>\r\n            </div>`;\r\n\r\n    (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__["default"])({ content });\r\n}\n\n//# sourceURL=webpack://gravity-global-recruitment-task/./src/js/main.js?')},"./src/js/popup.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ content }) => {\r\n    let container = 'popup';\r\n\r\n    use(\r\n        create(container, content),\r\n        mount\r\n    )();\r\n\r\n    use(\r\n        getByIds('root', 'popup', 'content', 'open', 'close', 'reset', 'calls'),\r\n        click(openWindow(), 'open'),\r\n        click(resetCounter, 'reset'),\r\n        click(closeWindow(), 'close'),\r\n        click(closeWindow())\r\n    )();\r\n});\r\n\r\nconst setCount = (key, count) =>\r\n    localStorage.setItem(key, count);\r\n\r\nconst getCount = (key, count) =>\r\n    localStorage.getItem(key, count) || 0;\r\n\r\nconst delCount = (key) =>\r\n    localStorage.removeItem(key);\r\n\r\nconst resetCounter = ({ calls, reset }) => {\r\n    delCount('calls');\r\n    calls.innerHTML = `${0} times`;\r\n    console.log(reset)\r\n    hide(reset);\r\n}\r\n\r\nconst openWindow = () => {\r\n    return ({ root, open, popup, content, calls, reset }) => {\r\n        show(root, popup, content);\r\n        let countOpenWindowCalls = getCount('calls');\r\n        setCount('calls', ++countOpenWindowCalls);\r\n\r\n        if (+getCount('calls') >= 5) {\r\n            show(reset);\r\n        }\r\n\r\n        calls.innerHTML = `${getCount('calls')} times`;\r\n    }\r\n}\r\n\r\nconst closeWindow = () =>\r\n    ({ root, popup, content }, e) =>\r\n        (e.target === popup ||\r\n            e.target.id === 'close') ?\r\n                hide(root, popup, content) : undefined;\r\n\r\n\r\nconst click = (handler, element) =>\r\n    (components) =>\r\n        listen(handler, (components[element]) ? components[element] : document, 'click')(components);\r\n\r\nconst listen = (handler, element, type) =>\r\n    (components) => {\r\n        element.addEventListener(type, e => {\r\n            e.preventDefault();\r\n            handler(components, e);\r\n        });\r\n        return components;\r\n    }\r\n\r\nconst show = (...elements) => elements.map(el => el.classList.add('active'));\r\nconst hide = (...elements) => elements.map(el => el.classList.remove('active'));\r\n\r\nconst getByIds = (...elements) => () =>\r\n    elements.reduce((els, el) => ({ ...els, [el]: getById(el) }), {})\r\n\r\nconst getById = id => document.getElementById(id);\r\n\r\nconst create = (name, content) =>\r\n    () => {\r\n        const div = document.createElement('div');\r\n        div.id = name;\r\n        div.innerHTML = content;\r\n        return div;\r\n    }\r\n\r\nconst mount = element =>\r\n    document.body.insertBefore(element, document.getElementById('root'));\r\n\r\nconst use = (...fns) =>\r\n    (arg) =>\r\n        fns.reduce((composed, f) => f(composed), arg);\n\n//# sourceURL=webpack://gravity-global-recruitment-task/./src/js/popup.js?")}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,n)=>{for(var r in n)__webpack_require__.o(n,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__("./src/js/main.js");var __webpack_exports__=__webpack_require__("./src/js/popup.js")})();