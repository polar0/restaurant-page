/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAbout": () => (/* binding */ createAbout)
/* harmony export */ });
function createAbout() {
  const about = document.createElement('div');
  about.classList.add('container');
  about.classList.add('about');

  const title = document.createElement('div');
  title.textContent = 'About';

  const desc = document.createElement('div');
  desc.textContent = 'There is nothing you really need to know about us...';
  const tease = document.createElement('div');
  tease.textContent = 'Maybe you just need to try ?';

  about.appendChild(title);
  about.appendChild(desc);
  about.appendChild(tease);

  return { about };
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHome": () => (/* binding */ createHome)
/* harmony export */ });
function createHome() {
  const home = document.createElement('div');
  home.classList.add('container');
  home.classList.add('home');

  const title = document.createElement('div');
  title.textContent = 'Welcome';
  const menuBtnLarge = document.createElement('button');
  menuBtnLarge.textContent = 'To the menu';

  home.appendChild(title);
  home.appendChild(menuBtnLarge);
  return {
    home,
    menuBtnLarge,
  };
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('container');
  menu.classList.add('menu');

  const title = document.createElement('div');
  title.textContent = 'Menu';
  menu.appendChild(title);

  const gridDish = document.createElement('div');
  gridDish.classList.add('grid');
  const gridDessert = document.createElement('div');
  gridDessert.classList.add('grid');
  const gridBeverage = document.createElement('div');
  gridBeverage.classList.add('grid');

  let aliments = [];

  for (let i = 0; i < 13; i++) {
    const item = document.createElement('i');
    const caption = document.createElement('span');
    item.classList.add('menu-item');
    item.classList.add('fa-solid');
    aliments.push(item);
    aliments[i].appendChild(caption);
  }

  aliments[0].classList.add('fa-utensils');
  aliments[0].setAttribute('value', 'Dishes');
  aliments[1].classList.add('fa-bowl-food');
  aliments[1].setAttribute('value', 'Meat bowl');
  aliments[2].classList.add('fa-fish-fins');
  aliments[2].setAttribute('value', 'Fish');
  aliments[3].classList.add('fa-burger');
  aliments[3].setAttribute('value', 'Burger');
  aliments[4].classList.add('fa-egg');
  aliments[4].setAttribute('value', 'Egg');
  aliments[5].classList.add('fa-bowl-rice');
  aliments[5].setAttribute('value', 'Rice bowl');

  for (let i = 0; i < 6; i++) {
    gridDish.appendChild(aliments[i]);
  }
  menu.appendChild(gridDish);

  aliments[6].classList.add('fa-spoon');
  aliments[6].setAttribute('value', 'Desserts');
  aliments[7].classList.add('fa-bread-slice');
  aliments[7].setAttribute('value', 'French toast');
  aliments[8].classList.add('fa-cheese');
  aliments[8].setAttribute('value', 'Cheese');

  for (let i = 6; i < 9; i++) {
    gridDessert.appendChild(aliments[i]);
  }
  menu.appendChild(gridDessert);

  aliments[9].classList.add('fa-wine-glass-empty');
  aliments[9].setAttribute('value', 'Drinks');
  aliments[10].classList.add('fa-bottle-water');
  aliments[10].setAttribute('value', 'Bottle of water');
  aliments[11].classList.add('fa-champagne-glasses');
  aliments[11].setAttribute('value', 'Glass of wine');
  aliments[12].classList.add('fa-coffee');
  aliments[12].setAttribute('value', 'Coffee');

  for (let i = 9; i < aliments.length; i++) {
    gridBeverage.appendChild(aliments[i]);
  }
  menu.appendChild(gridBeverage);

  return { menu };
}




/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNav": () => (/* binding */ createNav)
/* harmony export */ });
function createNav() {
  const nav = document.createElement('div');
  nav.classList.add('navbar');

  const btnHome = document.createElement('button');
  btnHome.classList.add('btn-home');
  btnHome.textContent = 'Home';
  const btnMenu = document.createElement('button');
  btnMenu.classList.add('btn-menu');
  btnMenu.textContent = 'Menu';
  const btnAbout = document.createElement('button');
  btnAbout.classList.add('btn-about');
  btnAbout.textContent = 'About';

  const buttons = [btnHome, btnMenu, btnAbout];

  nav.appendChild(btnHome);
  nav.appendChild(btnMenu);
  nav.appendChild(btnAbout);

  return {
    nav,
    buttons,
  };
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ "./src/navbar.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ "./src/about.js");





const content = document.querySelector('#content');
const { home, menuBtnLarge } = (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHome)();
const { menu } = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenu)();
const { about } = (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.createAbout)();
const { nav, buttons } = (0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.createNav)();
buttons[0].classList.add('active');

buttons[0].addEventListener('click', function () {
  updatePage(this, home);
});

buttons[1].addEventListener('click', function () {
  updatePage(this, menu);
});

menuBtnLarge.addEventListener('click', function () {
  updatePage(buttons[1], menu);
});

buttons[2].addEventListener('click', function () {
  updatePage(this, about);
});

content.appendChild(nav);
content.appendChild(home);

function updatePage(that, newPage) {
  content.children[1].remove();
  content.appendChild(newPage);

  for (const btn of buttons) {
    btn.classList.remove('active');
  }
  that.classList.add('active');
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUV1Qjs7Ozs7Ozs7Ozs7Ozs7O0FDcEJ2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0I7Ozs7Ozs7Ozs7Ozs7OztBQ2xCdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRXNCOzs7Ozs7Ozs7Ozs7Ozs7QUMxRXRCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFCOzs7Ozs7O1VDMUJyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ0Q7QUFDQTtBQUNFOztBQUV6QztBQUNBLFFBQVEscUJBQXFCLEVBQUUsb0RBQVU7QUFDekMsUUFBUSxPQUFPLEVBQUUsb0RBQVU7QUFDM0IsUUFBUSxRQUFRLEVBQUUsc0RBQVc7QUFDN0IsUUFBUSxlQUFlLEVBQUUscURBQVM7QUFDbEM7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVBYm91dCgpIHtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnQWJvdXQnO1xuXG4gIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzYy50ZXh0Q29udGVudCA9ICdUaGVyZSBpcyBub3RoaW5nIHlvdSByZWFsbHkgbmVlZCB0byBrbm93IGFib3V0IHVzLi4uJztcbiAgY29uc3QgdGVhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGVhc2UudGV4dENvbnRlbnQgPSAnTWF5YmUgeW91IGp1c3QgbmVlZCB0byB0cnkgPyc7XG5cbiAgYWJvdXQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBhYm91dC5hcHBlbmRDaGlsZChkZXNjKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQodGVhc2UpO1xuXG4gIHJldHVybiB7IGFib3V0IH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUFib3V0IH07XG4iLCJmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ1dlbGNvbWUnO1xuICBjb25zdCBtZW51QnRuTGFyZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbWVudUJ0bkxhcmdlLnRleHRDb250ZW50ID0gJ1RvIHRoZSBtZW51JztcblxuICBob21lLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChtZW51QnRuTGFyZ2UpO1xuICByZXR1cm4ge1xuICAgIGhvbWUsXG4gICAgbWVudUJ0bkxhcmdlLFxuICB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVIb21lIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBtZW51LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBjb25zdCBncmlkRGlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBncmlkRGlzaC5jbGFzc0xpc3QuYWRkKCdncmlkJyk7XG4gIGNvbnN0IGdyaWREZXNzZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdyaWREZXNzZXJ0LmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcbiAgY29uc3QgZ3JpZEJldmVyYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdyaWRCZXZlcmFnZS5jbGFzc0xpc3QuYWRkKCdncmlkJyk7XG5cbiAgbGV0IGFsaW1lbnRzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMzsgaSsrKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBjb25zdCBjYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpO1xuICAgIGFsaW1lbnRzLnB1c2goaXRlbSk7XG4gICAgYWxpbWVudHNbaV0uYXBwZW5kQ2hpbGQoY2FwdGlvbik7XG4gIH1cblxuICBhbGltZW50c1swXS5jbGFzc0xpc3QuYWRkKCdmYS11dGVuc2lscycpO1xuICBhbGltZW50c1swXS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0Rpc2hlcycpO1xuICBhbGltZW50c1sxXS5jbGFzc0xpc3QuYWRkKCdmYS1ib3dsLWZvb2QnKTtcbiAgYWxpbWVudHNbMV0uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdNZWF0IGJvd2wnKTtcbiAgYWxpbWVudHNbMl0uY2xhc3NMaXN0LmFkZCgnZmEtZmlzaC1maW5zJyk7XG4gIGFsaW1lbnRzWzJdLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnRmlzaCcpO1xuICBhbGltZW50c1szXS5jbGFzc0xpc3QuYWRkKCdmYS1idXJnZXInKTtcbiAgYWxpbWVudHNbM10uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdCdXJnZXInKTtcbiAgYWxpbWVudHNbNF0uY2xhc3NMaXN0LmFkZCgnZmEtZWdnJyk7XG4gIGFsaW1lbnRzWzRdLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnRWdnJyk7XG4gIGFsaW1lbnRzWzVdLmNsYXNzTGlzdC5hZGQoJ2ZhLWJvd2wtcmljZScpO1xuICBhbGltZW50c1s1XS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ1JpY2UgYm93bCcpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgZ3JpZERpc2guYXBwZW5kQ2hpbGQoYWxpbWVudHNbaV0pO1xuICB9XG4gIG1lbnUuYXBwZW5kQ2hpbGQoZ3JpZERpc2gpO1xuXG4gIGFsaW1lbnRzWzZdLmNsYXNzTGlzdC5hZGQoJ2ZhLXNwb29uJyk7XG4gIGFsaW1lbnRzWzZdLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnRGVzc2VydHMnKTtcbiAgYWxpbWVudHNbN10uY2xhc3NMaXN0LmFkZCgnZmEtYnJlYWQtc2xpY2UnKTtcbiAgYWxpbWVudHNbN10uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdGcmVuY2ggdG9hc3QnKTtcbiAgYWxpbWVudHNbOF0uY2xhc3NMaXN0LmFkZCgnZmEtY2hlZXNlJyk7XG4gIGFsaW1lbnRzWzhdLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQ2hlZXNlJyk7XG5cbiAgZm9yIChsZXQgaSA9IDY7IGkgPCA5OyBpKyspIHtcbiAgICBncmlkRGVzc2VydC5hcHBlbmRDaGlsZChhbGltZW50c1tpXSk7XG4gIH1cbiAgbWVudS5hcHBlbmRDaGlsZChncmlkRGVzc2VydCk7XG5cbiAgYWxpbWVudHNbOV0uY2xhc3NMaXN0LmFkZCgnZmEtd2luZS1nbGFzcy1lbXB0eScpO1xuICBhbGltZW50c1s5XS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0RyaW5rcycpO1xuICBhbGltZW50c1sxMF0uY2xhc3NMaXN0LmFkZCgnZmEtYm90dGxlLXdhdGVyJyk7XG4gIGFsaW1lbnRzWzEwXS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0JvdHRsZSBvZiB3YXRlcicpO1xuICBhbGltZW50c1sxMV0uY2xhc3NMaXN0LmFkZCgnZmEtY2hhbXBhZ25lLWdsYXNzZXMnKTtcbiAgYWxpbWVudHNbMTFdLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnR2xhc3Mgb2Ygd2luZScpO1xuICBhbGltZW50c1sxMl0uY2xhc3NMaXN0LmFkZCgnZmEtY29mZmVlJyk7XG4gIGFsaW1lbnRzWzEyXS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0NvZmZlZScpO1xuXG4gIGZvciAobGV0IGkgPSA5OyBpIDwgYWxpbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBncmlkQmV2ZXJhZ2UuYXBwZW5kQ2hpbGQoYWxpbWVudHNbaV0pO1xuICB9XG4gIG1lbnUuYXBwZW5kQ2hpbGQoZ3JpZEJldmVyYWdlKTtcblxuICByZXR1cm4geyBtZW51IH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU1lbnUgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcblxuICBjb25zdCBidG5Ib21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bkhvbWUuY2xhc3NMaXN0LmFkZCgnYnRuLWhvbWUnKTtcbiAgYnRuSG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgY29uc3QgYnRuTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5NZW51LmNsYXNzTGlzdC5hZGQoJ2J0bi1tZW51Jyk7XG4gIGJ0bk1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIGNvbnN0IGJ0bkFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bkFib3V0LmNsYXNzTGlzdC5hZGQoJ2J0bi1hYm91dCcpO1xuICBidG5BYm91dC50ZXh0Q29udGVudCA9ICdBYm91dCc7XG5cbiAgY29uc3QgYnV0dG9ucyA9IFtidG5Ib21lLCBidG5NZW51LCBidG5BYm91dF07XG5cbiAgbmF2LmFwcGVuZENoaWxkKGJ0bkhvbWUpO1xuICBuYXYuYXBwZW5kQ2hpbGQoYnRuTWVudSk7XG4gIG5hdi5hcHBlbmRDaGlsZChidG5BYm91dCk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYXYsXG4gICAgYnV0dG9ucyxcbiAgfTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTmF2IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZU5hdiB9IGZyb20gJy4vbmF2YmFyLmpzJztcbmltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVBYm91dCB9IGZyb20gJy4vYWJvdXQuanMnO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnN0IHsgaG9tZSwgbWVudUJ0bkxhcmdlIH0gPSBjcmVhdGVIb21lKCk7XG5jb25zdCB7IG1lbnUgfSA9IGNyZWF0ZU1lbnUoKTtcbmNvbnN0IHsgYWJvdXQgfSA9IGNyZWF0ZUFib3V0KCk7XG5jb25zdCB7IG5hdiwgYnV0dG9ucyB9ID0gY3JlYXRlTmF2KCk7XG5idXR0b25zWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG5idXR0b25zWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB1cGRhdGVQYWdlKHRoaXMsIGhvbWUpO1xufSk7XG5cbmJ1dHRvbnNbMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHVwZGF0ZVBhZ2UodGhpcywgbWVudSk7XG59KTtcblxubWVudUJ0bkxhcmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB1cGRhdGVQYWdlKGJ1dHRvbnNbMV0sIG1lbnUpO1xufSk7XG5cbmJ1dHRvbnNbMl0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHVwZGF0ZVBhZ2UodGhpcywgYWJvdXQpO1xufSk7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSk7XG5cbmZ1bmN0aW9uIHVwZGF0ZVBhZ2UodGhhdCwgbmV3UGFnZSkge1xuICBjb250ZW50LmNoaWxkcmVuWzFdLnJlbW92ZSgpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5ld1BhZ2UpO1xuXG4gIGZvciAoY29uc3QgYnRuIG9mIGJ1dHRvbnMpIHtcbiAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH1cbiAgdGhhdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==