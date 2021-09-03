/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const Object = __webpack_require__(/*! ./scripts/object.js */ \"./src/scripts/object.js\");\n\nconst Player = __webpack_require__(/*! ./scripts/player.js */ \"./src/scripts/player.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // Your code here\n  const canvas = document.getElementById('game');\n  canvas.width = innerWidth;\n  canvas.height = innerHeight;\n  let c = canvas.getContext('2d');\n  window.context = c;\n  let object = new Object(0, 0, 100, 100, 'black');\n  let palyer = new Player(100, 100, 100, 100);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQXRCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQyxvREFBRCxDQUF0Qjs7QUFFQUUsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsTUFBTTtBQUNoRDtBQUNBLFFBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLE1BQXhCLENBQWY7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLEdBQWVDLFVBQWY7QUFDQUgsRUFBQUEsTUFBTSxDQUFDSSxNQUFQLEdBQWdCQyxXQUFoQjtBQUNBLE1BQUlDLENBQUMsR0FBR04sTUFBTSxDQUFDTyxVQUFQLENBQWtCLElBQWxCLENBQVI7QUFDQUMsRUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSCxDQUFqQjtBQUVBLE1BQUlJLE1BQU0sR0FBRyxJQUFJZixNQUFKLENBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxHQUFmLEVBQW1CLEdBQW5CLEVBQXVCLE9BQXZCLENBQWI7QUFDQSxNQUFJZ0IsTUFBTSxHQUFHLElBQUlkLE1BQUosQ0FBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLENBQWI7QUFDSCxDQVZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlfcHVnX3Rvb19mYXQvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBPYmplY3QgPSByZXF1aXJlKCcuL3NjcmlwdHMvb2JqZWN0LmpzJylcclxuY29uc3QgUGxheWVyID0gcmVxdWlyZSgnLi9zY3JpcHRzL3BsYXllci5qcycpXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICAvLyBZb3VyIGNvZGUgaGVyZVxyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IGlubmVyV2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XHJcbiAgICBsZXQgYyA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgd2luZG93LmNvbnRleHQgPSBjO1xyXG5cclxuICAgIGxldCBvYmplY3QgPSBuZXcgT2JqZWN0KDAsMCwxMDAsMTAwLCdibGFjaycpXHJcbiAgICBsZXQgcGFseWVyID0gbmV3IFBsYXllcigxMDAsIDEwMCwgMTAwLCAxMDApXHJcbn0pO1xyXG4gICJdLCJuYW1lcyI6WyJPYmplY3QiLCJyZXF1aXJlIiwiUGxheWVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImMiLCJnZXRDb250ZXh0Iiwid2luZG93IiwiY29udGV4dCIsIm9iamVjdCIsInBhbHllciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/object.js":
/*!*******************************!*\
  !*** ./src/scripts/object.js ***!
  \*******************************/
/***/ (function(module) {

eval("class Object {\n  constructor(x, y, width, height, color, visible = true) {\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n    this.color = color;\n    this.visible = visible;\n    this.leftCorner = [this.x, this.y];\n    this.rightCorner = [this.x + this.width, this.y];\n    this.draw();\n  }\n\n  draw() {\n    context.fillStyle = \"black\";\n    context.fillRect(this.x, this.y, this.width, this.height);\n  }\n\n  validPosArray(x, y, dx, dy, maxHeight) {\n    const pos = [];\n    x += dx;\n    y += dy;\n\n    for (let i = 1; y > 0; i++) {\n      x += dx;\n\n      if (y >= maxHeight) {\n        dy = -dy;\n      }\n\n      y += dy;\n\n      if (y > maxHeight || y < 0) {\n        continue;\n      }\n\n      pos.push([x, y]);\n    }\n\n    let mid = Math.floor(pos.length / 2);\n    return pos.slice(mid);\n  }\n\n}\n\nmodule.exports = Object;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9wdWdfdG9vX2ZhdC8uL3NyYy9zY3JpcHRzL29iamVjdC5qcz9mOWZkIl0sIm5hbWVzIjpbIk9iamVjdCIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwidmlzaWJsZSIsImxlZnRDb3JuZXIiLCJyaWdodENvcm5lciIsImRyYXciLCJjb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ2YWxpZFBvc0FycmF5IiwiZHgiLCJkeSIsIm1heEhlaWdodCIsInBvcyIsImkiLCJwdXNoIiwibWlkIiwiTWF0aCIsImZsb29yIiwibGVuZ3RoIiwic2xpY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFOLENBQWE7QUFDVEMsRUFBQUEsV0FBVyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0MsS0FBUCxFQUFjQyxNQUFkLEVBQXNCQyxLQUF0QixFQUE2QkMsT0FBTyxHQUFHLElBQXZDLEVBQTRDO0FBQ25ELFNBQUtMLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBVUEsQ0FBVjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsQ0FBQyxLQUFLTixDQUFOLEVBQVMsS0FBS0MsQ0FBZCxDQUFsQjtBQUNBLFNBQUtNLFdBQUwsR0FBbUIsQ0FBQyxLQUFLUCxDQUFMLEdBQVMsS0FBS0UsS0FBZixFQUFzQixLQUFLRCxDQUEzQixDQUFuQjtBQUNBLFNBQUtPLElBQUw7QUFDSDs7QUFFREEsRUFBQUEsSUFBSSxHQUFHO0FBQ0hDLElBQUFBLE9BQU8sQ0FBQ0MsU0FBUixHQUFvQixPQUFwQjtBQUNBRCxJQUFBQSxPQUFPLENBQUNFLFFBQVIsQ0FBaUIsS0FBS1gsQ0FBdEIsRUFBeUIsS0FBS0MsQ0FBOUIsRUFBaUMsS0FBS0MsS0FBdEMsRUFBNkMsS0FBS0MsTUFBbEQ7QUFDSDs7QUFFRFMsRUFBQUEsYUFBYSxDQUFDWixDQUFELEVBQUlDLENBQUosRUFBT1ksRUFBUCxFQUFXQyxFQUFYLEVBQWVDLFNBQWYsRUFBeUI7QUFDbEMsVUFBTUMsR0FBRyxHQUFHLEVBQVo7QUFDQWhCLElBQUFBLENBQUMsSUFBSWEsRUFBTDtBQUNBWixJQUFBQSxDQUFDLElBQUlhLEVBQUw7O0FBQ0EsU0FBSSxJQUFJRyxDQUFDLEdBQUcsQ0FBWixFQUFlaEIsQ0FBQyxHQUFHLENBQW5CLEVBQXNCZ0IsQ0FBQyxFQUF2QixFQUEwQjtBQUN0QmpCLE1BQUFBLENBQUMsSUFBSWEsRUFBTDs7QUFDQSxVQUFJWixDQUFDLElBQUljLFNBQVQsRUFBbUI7QUFDZkQsUUFBQUEsRUFBRSxHQUFHLENBQUNBLEVBQU47QUFDSDs7QUFDRGIsTUFBQUEsQ0FBQyxJQUFJYSxFQUFMOztBQUNBLFVBQUdiLENBQUMsR0FBR2MsU0FBSixJQUFpQmQsQ0FBQyxHQUFHLENBQXhCLEVBQTBCO0FBQ3RCO0FBQ0g7O0FBQ0RlLE1BQUFBLEdBQUcsQ0FBQ0UsSUFBSixDQUFTLENBQUNsQixDQUFELEVBQUlDLENBQUosQ0FBVDtBQUNIOztBQUNELFFBQUlrQixHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxHQUFHLENBQUNNLE1BQUosR0FBYSxDQUF4QixDQUFWO0FBQ0EsV0FBT04sR0FBRyxDQUFDTyxLQUFKLENBQVVKLEdBQVYsQ0FBUDtBQUNIOztBQW5DUTs7QUF3Q2JLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjNCLE1BQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgT2JqZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yLCB2aXNpYmxlID0gdHJ1ZSl7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSAgeTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgICAgdGhpcy5sZWZ0Q29ybmVyID0gW3RoaXMueCwgdGhpcy55XVxyXG4gICAgICAgIHRoaXMucmlnaHRDb3JuZXIgPSBbdGhpcy54ICsgdGhpcy53aWR0aCwgdGhpcy55XVxyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcgKCl7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkUG9zQXJyYXkoeCwgeSwgZHgsIGR5LCBtYXhIZWlnaHQpe1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IFtdO1xyXG4gICAgICAgIHggKz0gZHhcclxuICAgICAgICB5ICs9IGR5XHJcbiAgICAgICAgZm9yKGxldCBpID0gMTsgeSA+IDA7IGkrKyl7XHJcbiAgICAgICAgICAgIHggKz0gZHhcclxuICAgICAgICAgICAgaWYgKHkgPj0gbWF4SGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgIGR5ID0gLWR5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHkgKz0gZHlcclxuICAgICAgICAgICAgaWYoeSA+IG1heEhlaWdodCB8fCB5IDwgMCl7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvcy5wdXNoKFt4LCB5XSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1pZCA9IE1hdGguZmxvb3IocG9zLmxlbmd0aCAvIDIpXHJcbiAgICAgICAgcmV0dXJuIHBvcy5zbGljZShtaWQpXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Q7Il0sImZpbGUiOiIuL3NyYy9zY3JpcHRzL29iamVjdC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/object.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(module) {

eval("class Player {\n  constructor(x, y, width, height, color) {\n    this.x = x;\n    this.y = y;\n    this.dx = 0;\n    this.dy = 0;\n    this.width = width;\n    this.height = height;\n    this.color = color;\n    this.draw();\n  }\n\n  draw() {\n    context.fillStyle = \"red\";\n    context.fillRect(this.x, this.y, this.width, this.height);\n  }\n\n}\n\nmodule.exports = Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9wdWdfdG9vX2ZhdC8uL3NyYy9zY3JpcHRzL3BsYXllci5qcz82NDcxIl0sIm5hbWVzIjpbIlBsYXllciIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwiZHgiLCJkeSIsImRyYXciLCJjb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFOLENBQVk7QUFDUkMsRUFBQUEsV0FBVyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0MsS0FBUCxFQUFjQyxNQUFkLEVBQXNCQyxLQUF0QixFQUE0QjtBQUNuQyxTQUFLSixDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLSSxFQUFMLEdBQVUsQ0FBVjtBQUNBLFNBQUtDLEVBQUwsR0FBVSxDQUFWO0FBQ0EsU0FBS0osS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0csSUFBTDtBQUNIOztBQUVEQSxFQUFBQSxJQUFJLEdBQUU7QUFDRkMsSUFBQUEsT0FBTyxDQUFDQyxTQUFSLEdBQW9CLEtBQXBCO0FBQ0FELElBQUFBLE9BQU8sQ0FBQ0UsUUFBUixDQUFpQixLQUFLVixDQUF0QixFQUF5QixLQUFLQyxDQUE5QixFQUFpQyxLQUFLQyxLQUF0QyxFQUE2QyxLQUFLQyxNQUFsRDtBQUNIOztBQWZPOztBQWtCWlEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZCxNQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYXllcntcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yKXtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5keCA9IDA7XHJcbiAgICAgICAgdGhpcy5keSA9IDA7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvclxyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKXtcclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjsiXSwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvcGxheWVyLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9wdWdfdG9vX2ZhdC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;