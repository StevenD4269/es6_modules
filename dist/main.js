/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Wishlist.js":
/*!*************************!*\
  !*** ./src/Wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wishlist)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n\r\n\r\nclass Wishlist {\r\n  constructor() {\r\n    this.list = [];\r\n    this.nextId = 0;\r\n  }\r\n\r\n  add(make, model, year) {\r\n    const car = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](++this.nextId, make, model, year);\r\n    this.list.push(car); //adds \"const car\" to .list [] array\r\n  }\r\n  remove(carId) {\r\n    this.list = this.list.filter((car) => car.id !== carId);\r\n    //targets this.list and filters out and id that matches carId\r\n    // filter does not change the array, creates a new array\r\n    // true = keep, false = remove thing\r\n    // could also use .splice to remove the item:\r\n    // this.list.splice(x, y);, changes the array\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://es6_modules/./src/Wishlist.js?");

/***/ }),

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\r\n  constructor(id, make, model, year) {\r\n    // The constructor method is a special method of a class for creating and initializing an object instance of that class.\r\n    this.id = id; //sets each paramater to a property\r\n    this.make = make;\r\n    this.model = model;\r\n    this.year = year;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wishlist */ \"./src/Wishlist.js\");\nconsole.log(\"Hello World\");\r\n\r\n// TODO\r\n\r\nconst carForm = document.getElementById(\"submitForm\");\r\n//creates a variable i can use to select that specific id\r\nconst carMake = document.getElementById(\"makeInput\");\r\nconst carModel = document.getElementById(\"modelInput\");\r\nconst carYear = document.getElementById(\"yearInput\");\r\nconst paraMake = document.getElementById(\"car-make\");\r\nconst paraModel = document.getElementById(\"car-model\");\r\nconst paraYear = document.getElementById(\"car-year\");\r\nconst rmvButton = document.querySelector(\".removeBtn\");\r\nconst ulList = document.querySelector(\"#wishListContainer > ul\");\r\n//use querySelector to get a single element\r\n\r\nconst wishlist = new _Wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nfunction showCarDetails(car) {\r\n  // Take the variables I made and reset the elements\r\n  // index.html shows makeInput is \"Make: \"\r\n  paraMake.textContent = `Make: ${car.make}`; //reset the elements\r\n  paraModel.textContent = `Model: ${car.model}`;\r\n  paraYear.textContent = `Year: ${car.year}`;\r\n\r\n  removeBtn.disabled = false; //to disable a button you set it to true\r\n  removeBtn.setAttribute(\"data-carId\", car.id);\r\n  // \"call\" setAttributes: sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value. So this sets this on the DOM button\r\n}\r\n\r\nfunction updateDOMList() {\r\n  ulList.innerHTML = \"\";\r\n  //innerHTML removes all of the element's descendants and replaces them with nodes constructed by parsing the HTML given in the string\r\n  //ulList is a collection of elements, not a single element, so you can't do say\r\n  //ulList.textcontent(\"\")\r\n  wishlist.list.forEach((car) => {\r\n    // for each element in the array create a list item\r\n    const newLi = document.createElement(\"li\"); //use create element to make li\r\n    newLi.textContent = `${car.make}, ${car.model}`; //textcontent & string interpolation  will put make/model on every list\r\n    newLi.addEventListener(\"click\", () => showCarDetails(car));\r\n    // Syntax example: ele.addEventListener(\"click\", () => func(obj))\r\n    ulList.appendChild(newLi); //append li to uL, appendChild adds node to END of the list\r\n  });\r\n}\r\n\r\n// Function to add a new car\r\nfunction addCar(event) {\r\n  event.preventDefault(); // Prevent the default form submission behavior\r\n  const make = carMake.value; // Get the value of the make input\r\n  const model = carModel.value; // Get the value of the model input\r\n  const year = carYear.value; // Get the value of the year input\r\n  wishlist.add(make, model, year); // Add the car to the wishlist\r\n  updateDOMList(); // Update the list in the DOM\r\n}\r\n\r\n// Function to remove a car\r\nfunction removeCar() {\r\n  const carId = Number(removeBtn.getAttribute(\"data-carId\")); // Get the car ID from the remove button's data attribute\r\n  wishlist.remove(carId); // Remove the car from the wishlist\r\n  updateDOMList(); // Update the list in the DOM\r\n  paraMake.textContent = \"\"; // Reset the make display\r\n  paraModel.textContent = \"\"; // Reset the model display\r\n  paraYear.textContent = \"\"; // Reset the year display\r\n  removeBtn.disabled = true; // Disable the remove button\r\n}\r\n// Event listener for form submission to add a car\r\ncarForm.addEventListener(\"submit\", addCar);\r\n\r\n// Event listener for remove button click to remove a car\r\nremoveBtn.addEventListener(\"click\", removeCar);\r\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;