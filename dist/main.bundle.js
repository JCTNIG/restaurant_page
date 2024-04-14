"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _lorem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lorem.js */ "./src/lorem.js");


function contact() {
  const content = document.getElementById('content');

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  };

  const paragraphs = [];

  for (let i = 1; i < 4; i++) {
    const paragraph = document.createElement('p');
    paragraph.textContent = (0,_lorem_js__WEBPACK_IMPORTED_MODULE_0__["default"])(12/i)
    paragraphs.push(paragraph);
  };

  paragraphs.forEach(paragraph => {content.appendChild(paragraph)});

  return content;

};

/***/ }),

/***/ "./src/home_page.js":
/*!**************************!*\
  !*** ./src/home_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _lorem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lorem.js */ "./src/lorem.js");


function home() {
  const content = document.getElementById('content');

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const h1 = document.createElement('h1');
  h1.textContent = 'JC Restaurant';
  content.appendChild(h1);

  const h2 = document.createElement('h2');
  h2.textContent = 'Best Chicken Fries';
  content.appendChild(h2);

  const paragraphs = [];

  for (let i = 1; i < 4; i++) {
    const paragraph = document.createElement('p');

    paragraph.classList.add( 'paragraph');
    paragraph.textContent = (0,_lorem_js__WEBPACK_IMPORTED_MODULE_0__["default"])(20*i);
    paragraphs.push(paragraph);
  }

  paragraphs.forEach(paragraph => {
    content.appendChild(paragraph);
  } )

  return content;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home_page.js */ "./src/home_page.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




(0,_home_page_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

const homeButton = document.getElementById('home')
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');

homeButton.addEventListener('click', _home_page_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
menuButton.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
contactButton.addEventListener('click', _contact_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./src/lorem.js":
/*!**********************!*\
  !*** ./src/lorem.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ lorem)
/* harmony export */ });
// Function to generate lorem ipsum text
function lorem(length) {
  const words = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'.split(' ');
  let loremIpsum = '';
  for (let i = 0; i < length; i++) {
      loremIpsum += words[i % words.length] + ' ';
  }
  return loremIpsum.trim();
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _lorem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lorem.js */ "./src/lorem.js");


function menu() {
  const content = document.getElementById('content');

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  const menuDiv = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = 'Menu';
  menuDiv.appendChild(h1);

  const chickenMenu = document.createElement('div');
  const chickenH2 = document.createElement('h2');
  chickenH2.textContent = 'Chicken';
  chickenMenu.appendChild(chickenH2);

  const paragraphs = [];

  for (let i = 1; i < 4; i++) {
    const paragraph = document.createElement('p');

    paragraph.classList = 'paragraph';
    paragraph.textContent = (0,_lorem_js__WEBPACK_IMPORTED_MODULE_0__["default"])(5);
    paragraphs.push(paragraph);
  }

  paragraphs.forEach(paragraph => {
    chickenMenu.appendChild(paragraph);
  } );

  menuDiv.appendChild(chickenMenu);

  const riceMenu = document.createElement('div');
  const riceH2 = document.createElement('h2');
  riceH2.textContent = 'Rice';
  riceMenu.appendChild(riceH2);

  const ricePara = [];

  for (let i = 1; i < 6; i++) {
    const paragraph = document.createElement('p');

    paragraph.classList = 'paragraph';
    paragraph.textContent = (0,_lorem_js__WEBPACK_IMPORTED_MODULE_0__["default"])(5);
    ricePara.push(paragraph);
  }

  ricePara.forEach(paragraph => {
    riceMenu.appendChild(paragraph);
  } );

  menuDiv.appendChild(riceMenu)

  content.appendChild(menuDiv);

  return content;

}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7O0FBRWY7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQSw0QkFBNEIscURBQUs7QUFDakM7QUFDQTs7QUFFQSxtQ0FBbUMsK0JBQStCOztBQUVsRTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckIrQjs7QUFFaEI7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0IsT0FBTztBQUN6Qjs7QUFFQTtBQUNBLDRCQUE0QixxREFBSztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaENrQztBQUNMO0FBQ007O0FBRW5DLHlEQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMscURBQUk7QUFDekMscUNBQXFDLGdEQUFJO0FBQ3pDLHdDQUF3QyxtREFBTzs7Ozs7Ozs7Ozs7Ozs7QUNaL0M7QUFDZTtBQUNmO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUitCOztBQUVoQjtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQixPQUFPO0FBQ3pCOztBQUVBO0FBQ0EsNEJBQTRCLHFEQUFLO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7O0FBRUE7QUFDQSw0QkFBNEIscURBQUs7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9ob21lX3BhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9sb3JlbS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9yZW0gZnJvbSBcIi4vbG9yZW0uanNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICB9O1xuXG4gIGNvbnN0IHBhcmFncmFwaHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBsb3JlbSgxMi9pKVxuICAgIHBhcmFncmFwaHMucHVzaChwYXJhZ3JhcGgpO1xuICB9O1xuXG4gIHBhcmFncmFwaHMuZm9yRWFjaChwYXJhZ3JhcGggPT4ge2NvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKX0pO1xuXG4gIHJldHVybiBjb250ZW50O1xuXG59OyIsImltcG9ydCBsb3JlbSBmcm9tICcuL2xvcmVtLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaDEudGV4dENvbnRlbnQgPSAnSkMgUmVzdGF1cmFudCc7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIudGV4dENvbnRlbnQgPSAnQmVzdCBDaGlja2VuIEZyaWVzJztcbiAgY29udGVudC5hcHBlbmRDaGlsZChoMik7XG5cbiAgY29uc3QgcGFyYWdyYXBocyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoICdwYXJhZ3JhcGgnKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBsb3JlbSgyMCppKTtcbiAgICBwYXJhZ3JhcGhzLnB1c2gocGFyYWdyYXBoKTtcbiAgfVxuXG4gIHBhcmFncmFwaHMuZm9yRWFjaChwYXJhZ3JhcGggPT4ge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgfSApXG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59IiwiaW1wb3J0IGhvbWUgZnJvbSBcIi4vaG9tZV9wYWdlLmpzXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5cbmhvbWUoKTtcblxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG5cbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBob21lKTtcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZW51KTtcbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250YWN0KTsiLCIvLyBGdW5jdGlvbiB0byBnZW5lcmF0ZSBsb3JlbSBpcHN1bSB0ZXh0XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb3JlbShsZW5ndGgpIHtcbiAgY29uc3Qgd29yZHMgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuJy5zcGxpdCgnICcpO1xuICBsZXQgbG9yZW1JcHN1bSA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBsb3JlbUlwc3VtICs9IHdvcmRzW2kgJSB3b3Jkcy5sZW5ndGhdICsgJyAnO1xuICB9XG4gIHJldHVybiBsb3JlbUlwc3VtLnRyaW0oKTtcbn1cblxuXG4iLCJpbXBvcnQgbG9yZW0gZnJvbSAnLi9sb3JlbS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGgxKTtcblxuICBjb25zdCBjaGlja2VuTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjaGlja2VuSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjaGlja2VuSDIudGV4dENvbnRlbnQgPSAnQ2hpY2tlbic7XG4gIGNoaWNrZW5NZW51LmFwcGVuZENoaWxkKGNoaWNrZW5IMik7XG5cbiAgY29uc3QgcGFyYWdyYXBocyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgcGFyYWdyYXBoLmNsYXNzTGlzdCA9ICdwYXJhZ3JhcGgnO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IGxvcmVtKDUpO1xuICAgIHBhcmFncmFwaHMucHVzaChwYXJhZ3JhcGgpO1xuICB9XG5cbiAgcGFyYWdyYXBocy5mb3JFYWNoKHBhcmFncmFwaCA9PiB7XG4gICAgY2hpY2tlbk1lbnUuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgfSApO1xuXG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY2hpY2tlbk1lbnUpO1xuXG4gIGNvbnN0IHJpY2VNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHJpY2VIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHJpY2VIMi50ZXh0Q29udGVudCA9ICdSaWNlJztcbiAgcmljZU1lbnUuYXBwZW5kQ2hpbGQocmljZUgyKTtcblxuICBjb25zdCByaWNlUGFyYSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgNjsgaSsrKSB7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgcGFyYWdyYXBoLmNsYXNzTGlzdCA9ICdwYXJhZ3JhcGgnO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IGxvcmVtKDUpO1xuICAgIHJpY2VQYXJhLnB1c2gocGFyYWdyYXBoKTtcbiAgfVxuXG4gIHJpY2VQYXJhLmZvckVhY2gocGFyYWdyYXBoID0+IHtcbiAgICByaWNlTWVudS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICB9ICk7XG5cbiAgbWVudURpdi5hcHBlbmRDaGlsZChyaWNlTWVudSlcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuXG4gIHJldHVybiBjb250ZW50O1xuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9