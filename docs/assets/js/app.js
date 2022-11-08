/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/accordion.js":
/*!************************************!*\
  !*** ./src/assets/js/accordion.js ***!
  \************************************/
/***/ (function() {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n    const accordion = document.getElementById('accordion');\r\n\r\n    accordion.addEventListener('click', (e) => {\r\n        const target = e.target;\r\n        const accordionItems = accordion.querySelectorAll(\".action__item\");\r\n        const isAccordionHead = target.classList.contains(\"action__head\");\r\n        const isAccordionHeadSpan = target.tagName === 'SPAN';\r\n        const isAccordionHeadH5 = target.tagName === 'H5';\r\n\r\n        if (isAccordionHead || isAccordionHeadSpan || isAccordionHeadH5) {\r\n            const accordionItem = target.closest(\".action__item\");\r\n\r\n            accordionItems.forEach((item) => {\r\n                item.classList.remove(\"active\");\r\n            });\r\n\r\n            accordionItem.classList.toggle('active');\r\n        }\r\n    })\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/accordion.js?");

/***/ }),

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("document.addEventListener('DOMContentLoaded', (e) => {\r\n\r\n    //nav\r\n    const nav = document.querySelector('.nav');\r\n    const navFooter = document.querySelector('.nav--footer');\r\n    const navSidebar = document.querySelector('.nav--sidebar');\r\n\r\n    nav.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (!e.target.classList.contains('nav__item')) return;\r\n        addActive(e.target, e.currentTarget);\r\n\r\n        const footerNav = document.querySelector('.nav--footer');\r\n        const [...footerLinks] = footerNav.querySelectorAll('.nav__item');\r\n\r\n        const neededEl = footerLinks.find((link) => link.href === e.target.href);\r\n\r\n        addActive(neededEl, footerNav);\r\n\r\n\r\n        const blockId = e.target.getAttribute('href').substring(1);\r\n\r\n        document.getElementById(blockId).scrollIntoView({\r\n            behavior: \"smooth\",\r\n            block: \"start\"\r\n        });\r\n    });\r\n\r\n    navFooter.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (!e.target.classList.contains('nav__item')) return;\r\n        addActive(e.target, e.currentTarget);\r\n\r\n        const headerNav = document.querySelector('.nav');\r\n        const [...headerLinks] = headerNav.querySelectorAll('.nav__item');\r\n\r\n        const neededEl = headerLinks.find((link) => link.href === e.target.href);\r\n\r\n        addActive(neededEl, headerNav);\r\n\r\n\r\n        const blockId = e.target.getAttribute('href').substring(1);\r\n\r\n        document.getElementById(blockId).scrollIntoView({\r\n            behavior: \"smooth\",\r\n            block: \"start\"\r\n        });\r\n    });\r\n\r\n    navSidebar.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (!e.target.classList.contains('nav__item')) return;\r\n        addActive(e.target, e.currentTarget);\r\n\r\n        const footerNav = document.querySelector('.nav--footer');\r\n        const [...footerLinks] = footerNav.querySelectorAll('.nav__item');\r\n\r\n        const neededEl = footerLinks.find((link) => link.href === e.target.href);\r\n\r\n        addActive(neededEl, footerNav);\r\n\r\n\r\n\r\n\r\n        const blockId = e.target.getAttribute('href').substring(1);\r\n\r\n        if (blockId) {\r\n            document.getElementById(blockId).scrollIntoView({\r\n                behavior: \"smooth\",\r\n                block: \"start\"\r\n            });\r\n        }\r\n\r\n        //hide sidebar\r\n        let bodyS = document.body;\r\n        bodyS.classList.remove(\"show-sidebar\");\r\n    });\r\n\r\n    function addActive(element, parent, classOfItems = 'nav__item') {\r\n        const items = parent.querySelectorAll(`.${classOfItems}`);\r\n        items.forEach((item) => {\r\n            item.classList.remove('active');\r\n        });\r\n        element.classList.add('active');\r\n    }\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/init.js":
/*!*******************************!*\
  !*** ./src/assets/js/init.js ***!
  \*******************************/
/***/ (function() {

eval("$( document ).ready(function() {\r\n    $('.slider').slick({\r\n        centerMode: true,\r\n        centerPadding: '',\r\n        slidesToShow: 3,\r\n        responsive: [\r\n\r\n        ]\r\n    });\r\n\r\n\r\n    $('.t-slider').slick({\r\n        centerMode: true,\r\n        centerPadding: '',\r\n        slidesToShow: 3,\r\n        responsive: [\r\n\r\n        ]\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/init.js?");

/***/ }),

/***/ "./src/assets/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/assets/js/mobileNav.js ***!
  \************************************/
/***/ (function() {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n    const burger = document.getElementById('burger');\r\n    const sidebar = document.getElementById('sidebar');\r\n    const body = document.body;\r\n    const pageMask = document.getElementById('pageMask');\r\n\r\n\r\n    burger.addEventListener('click', event => {\r\n       body.classList.toggle(\"show-sidebar\");\r\n    });\r\n\r\n    pageMask.addEventListener('click', event => {\r\n        body.classList.remove(\"show-sidebar\");\r\n    });\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/mobileNav.js?");

/***/ }),

/***/ "./src/assets/js/showModal.js":
/*!************************************!*\
  !*** ./src/assets/js/showModal.js ***!
  \************************************/
/***/ (function() {

eval("/*\r\nconst modalBtn = document.querySelectorAll('[data-modal]');\r\nconst body = document.body;\r\nconst modalClose = document.querySelectorAll('.modal__close');\r\nconst modal = document.querySelectorAll('.modal');\r\n\r\nmodalBtn.forEach((item) => {\r\n    item.addEventListener('click', (event) => {\r\n        let target = event.currentTarget;\r\n        let modalId = target.dataset.modal;\r\n        let modal = document.getElementById(modalId);\r\n        let modalContent = modal.querySelector('.modal__content');\r\n\r\n        modalContent.addEventListener('click', (e) => {\r\n            e.stopPropagation();\r\n        });\r\n\r\n        modal.classList.add('show');\r\n        body.classList.add('no-scroll');\r\n\r\n        setTimeout(function() {\r\n            modalContent.style.transform = 'none';\r\n            modalContent.style.opacity = '1';\r\n        }, 1);\r\n    });\r\n});\r\n\r\n\r\nmodalClose.forEach((item) => {\r\n    item.addEventListener('click', (event) => {\r\n        let currentModal = event.currentTarget.closest('.modal');\r\n\r\n        closeModal(currentModal);\r\n    });\r\n});\r\n\r\nmodal.forEach((item) => {\r\n    item.addEventListener('click', (event) => {\r\n        let currentModal = event.currentTarget;\r\n\r\n        closeModal(currentModal);\r\n    });\r\n});\r\n\r\nfunction closeModal(currentModal) {\r\n    let modalContent = currentModal.querySelector('.modal__content');\r\n    modalContent.removeAttribute('style');\r\n\r\n    setTimeout(() => {\r\n        currentModal.classList.remove('show');\r\n        body.classList.remove('no-scroll');\r\n    }, 200);\r\n}\r\n*/\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/showModal.js?");

/***/ }),

/***/ "./src/assets/js/textarea.js":
/*!***********************************!*\
  !*** ./src/assets/js/textarea.js ***!
  \***********************************/
/***/ (function() {

eval("// const textarea = document.querySelectorAll('[data-autoresize]');\r\n//\r\n// textarea.forEach((item) => {\r\n//     let textareaHeight = item.offsetHeight;\r\n//     item.addEventListener('input', event => {\r\n//         let target = event.target;\r\n//\r\n//         target.style.height = textareaHeight + 'px';\r\n//         target.style.height = target.scrollHeight + 'px';\r\n//\r\n//     });\r\n// });\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/textarea.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/accordion.js"]();
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/init.js"]();
/******/ 	__webpack_modules__["./src/assets/js/mobileNav.js"]();
/******/ 	__webpack_modules__["./src/assets/js/showModal.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/textarea.js"]();
/******/ 	
/******/ })()
;