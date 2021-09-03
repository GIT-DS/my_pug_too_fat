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

eval("const Object = __webpack_require__(/*! ./scripts/object.js */ \"./src/scripts/object.js\");\n\nconst Player = __webpack_require__(/*! ./scripts/player.js */ \"./src/scripts/player.js\"); // input variables\n\n\nlet objects = [];\nlet player;\nlet floor;\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('game');\n  canvas.width = innerWidth;\n  canvas.height = innerHeight;\n  let c = canvas.getContext('2d');\n  window.context = c;\n  window.canvas = canvas;\n  player = new Player(100, canvas.height - 200, 100, 100);\n  floor = new Object(0, canvas.height - 50, canvas.width, 50);\n  objects.push(floor);\n  window.setInterval(drawAll, 20);\n}); // function addTwoPlatforms(){\n//     let object = new Object(0,300,100,100,'black')\n//     objects.push(object)\n//     for(let i = 0; i < 2; i++){\n//         let lastObject = objects[objects.length - 1]\n//         let x = lastObject.x; // last object's x value \n//         let y = lastObject.y; // last objects's y value\n//         let width = lastObject.width; // last object's width\n//         let height = lastObject.height;\n//         let randX = Math.random()* (x + width) // random starting position based on last objects x and width\n//         let newPosArray = lastObject.validPosArray(randX, y, 1, 1) // need to refactor\n//         let idx = Math.floor(Math.random()*newPosArray.length) // selecting a random idex in newPosArray\n//         let newPos = newPosArray[idx]\n//         let randomWidth = Math.random()*100 + difficulty; // need to refactor difficulty\n//         let newObject = new Object(newPos[0],new[pos[y]], randomWidth, height)\n//         objects.push(newObject);\n//     }\n// }\n\nfunction objectCollision(player, object) {\n  if (player.y + player.height >= object.y) {\n    // player.dy = 0;\n    player.y = object.y - player.height; // player.dy = 0\n\n    player.dy = player.originalDy;\n    player.onPlatform = true;\n  } else {\n    player.onPlatform = false;\n  }\n}\n\nfunction drawAll() {\n  window.context.clearRect(0, 0, canvas.width, canvas.height);\n  player.animate();\n  objects.forEach(object => {\n    object.draw();\n    objectCollision(player, object);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQXRCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQyxvREFBRCxDQUF0QixDLENBRUE7OztBQUdBLElBQUlFLE9BQU8sR0FBRyxFQUFkO0FBRUEsSUFBSUMsTUFBSjtBQUNBLElBQUlDLEtBQUo7QUFHQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsTUFBTTtBQUNoRCxRQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixNQUF4QixDQUFmO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxHQUFlQyxVQUFmO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQkMsV0FBaEI7QUFDQSxNQUFJQyxDQUFDLEdBQUdOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixJQUFsQixDQUFSO0FBQ0FDLEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkgsQ0FBakI7QUFDQUUsRUFBQUEsTUFBTSxDQUFDUixNQUFQLEdBQWdCQSxNQUFoQjtBQUNBSixFQUFBQSxNQUFNLEdBQUcsSUFBSUYsTUFBSixDQUFXLEdBQVgsRUFBZ0JNLE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQixHQUFoQyxFQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFUO0FBQ0FQLEVBQUFBLEtBQUssR0FBRyxJQUFJTCxNQUFKLENBQVcsQ0FBWCxFQUFjUSxNQUFNLENBQUNJLE1BQVAsR0FBZ0IsRUFBOUIsRUFBa0NKLE1BQU0sQ0FBQ0UsS0FBekMsRUFBZ0QsRUFBaEQsQ0FBUjtBQUNBUCxFQUFBQSxPQUFPLENBQUNlLElBQVIsQ0FBYWIsS0FBYjtBQUVBVyxFQUFBQSxNQUFNLENBQUNHLFdBQVAsQ0FBbUJDLE9BQW5CLEVBQTRCLEVBQTVCO0FBQ0gsQ0FaRCxFLENBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxlQUFULENBQXlCakIsTUFBekIsRUFBaUNrQixNQUFqQyxFQUF3QztBQUNwQyxNQUFHbEIsTUFBTSxDQUFDbUIsQ0FBUCxHQUFXbkIsTUFBTSxDQUFDUSxNQUFsQixJQUE0QlUsTUFBTSxDQUFDQyxDQUF0QyxFQUF3QztBQUNwQztBQUNBbkIsSUFBQUEsTUFBTSxDQUFDbUIsQ0FBUCxHQUFXRCxNQUFNLENBQUNDLENBQVAsR0FBV25CLE1BQU0sQ0FBQ1EsTUFBN0IsQ0FGb0MsQ0FHcEM7O0FBQ0FSLElBQUFBLE1BQU0sQ0FBQ29CLEVBQVAsR0FBWXBCLE1BQU0sQ0FBQ3FCLFVBQW5CO0FBQ0FyQixJQUFBQSxNQUFNLENBQUNzQixVQUFQLEdBQW9CLElBQXBCO0FBQ0gsR0FORCxNQU1PO0FBQ0h0QixJQUFBQSxNQUFNLENBQUNzQixVQUFQLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSjs7QUFFRCxTQUFTTixPQUFULEdBQWtCO0FBQ2RKLEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlVSxTQUFmLENBQXlCLENBQXpCLEVBQTJCLENBQTNCLEVBQThCbkIsTUFBTSxDQUFDRSxLQUFyQyxFQUE0Q0YsTUFBTSxDQUFDSSxNQUFuRDtBQUNBUixFQUFBQSxNQUFNLENBQUN3QixPQUFQO0FBQ0F6QixFQUFBQSxPQUFPLENBQUMwQixPQUFSLENBQWdCUCxNQUFNLElBQUk7QUFDdEJBLElBQUFBLE1BQU0sQ0FBQ1EsSUFBUDtBQUVBVCxJQUFBQSxlQUFlLENBQUNqQixNQUFELEVBQVNrQixNQUFULENBQWY7QUFDSCxHQUpEO0FBTUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9wdWdfdG9vX2ZhdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE9iamVjdCA9IHJlcXVpcmUoJy4vc2NyaXB0cy9vYmplY3QuanMnKVxyXG5jb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuL3NjcmlwdHMvcGxheWVyLmpzJylcclxuXHJcbi8vIGlucHV0IHZhcmlhYmxlc1xyXG5cclxuXHJcbmxldCBvYmplY3RzID0gW107XHJcblxyXG5sZXQgcGxheWVyO1xyXG5sZXQgZmxvb3I7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IGlubmVyV2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XHJcbiAgICBsZXQgYyA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgd2luZG93LmNvbnRleHQgPSBjO1xyXG4gICAgd2luZG93LmNhbnZhcyA9IGNhbnZhcztcclxuICAgIHBsYXllciA9IG5ldyBQbGF5ZXIoMTAwLCBjYW52YXMuaGVpZ2h0IC0gMjAwLCAxMDAsIDEwMCk7XHJcbiAgICBmbG9vciA9IG5ldyBPYmplY3QoMCwgY2FudmFzLmhlaWdodCAtIDUwLCBjYW52YXMud2lkdGgsIDUwKSAgICBcclxuICAgIG9iamVjdHMucHVzaChmbG9vcilcclxuICAgIFxyXG4gICAgd2luZG93LnNldEludGVydmFsKGRyYXdBbGwsIDIwKTtcclxufSk7XHJcbiAgXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gYWRkVHdvUGxhdGZvcm1zKCl7XHJcbi8vICAgICBsZXQgb2JqZWN0ID0gbmV3IE9iamVjdCgwLDMwMCwxMDAsMTAwLCdibGFjaycpXHJcbi8vICAgICBvYmplY3RzLnB1c2gob2JqZWN0KVxyXG4vLyAgICAgZm9yKGxldCBpID0gMDsgaSA8IDI7IGkrKyl7XHJcbi8vICAgICAgICAgbGV0IGxhc3RPYmplY3QgPSBvYmplY3RzW29iamVjdHMubGVuZ3RoIC0gMV1cclxuLy8gICAgICAgICBsZXQgeCA9IGxhc3RPYmplY3QueDsgLy8gbGFzdCBvYmplY3QncyB4IHZhbHVlIFxyXG4vLyAgICAgICAgIGxldCB5ID0gbGFzdE9iamVjdC55OyAvLyBsYXN0IG9iamVjdHMncyB5IHZhbHVlXHJcbi8vICAgICAgICAgbGV0IHdpZHRoID0gbGFzdE9iamVjdC53aWR0aDsgLy8gbGFzdCBvYmplY3QncyB3aWR0aFxyXG4vLyAgICAgICAgIGxldCBoZWlnaHQgPSBsYXN0T2JqZWN0LmhlaWdodDtcclxuXHJcbi8vICAgICAgICAgbGV0IHJhbmRYID0gTWF0aC5yYW5kb20oKSogKHggKyB3aWR0aCkgLy8gcmFuZG9tIHN0YXJ0aW5nIHBvc2l0aW9uIGJhc2VkIG9uIGxhc3Qgb2JqZWN0cyB4IGFuZCB3aWR0aFxyXG5cclxuLy8gICAgICAgICBsZXQgbmV3UG9zQXJyYXkgPSBsYXN0T2JqZWN0LnZhbGlkUG9zQXJyYXkocmFuZFgsIHksIDEsIDEpIC8vIG5lZWQgdG8gcmVmYWN0b3JcclxuLy8gICAgICAgICBsZXQgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKm5ld1Bvc0FycmF5Lmxlbmd0aCkgLy8gc2VsZWN0aW5nIGEgcmFuZG9tIGlkZXggaW4gbmV3UG9zQXJyYXlcclxuLy8gICAgICAgICBsZXQgbmV3UG9zID0gbmV3UG9zQXJyYXlbaWR4XVxyXG4vLyAgICAgICAgIGxldCByYW5kb21XaWR0aCA9IE1hdGgucmFuZG9tKCkqMTAwICsgZGlmZmljdWx0eTsgLy8gbmVlZCB0byByZWZhY3RvciBkaWZmaWN1bHR5XHJcblxyXG4vLyAgICAgICAgIGxldCBuZXdPYmplY3QgPSBuZXcgT2JqZWN0KG5ld1Bvc1swXSxuZXdbcG9zW3ldXSwgcmFuZG9tV2lkdGgsIGhlaWdodClcclxuLy8gICAgICAgICBvYmplY3RzLnB1c2gobmV3T2JqZWN0KTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gb2JqZWN0Q29sbGlzaW9uKHBsYXllciwgb2JqZWN0KXtcclxuICAgIGlmKHBsYXllci55ICsgcGxheWVyLmhlaWdodCA+PSBvYmplY3QueSl7XHJcbiAgICAgICAgLy8gcGxheWVyLmR5ID0gMDtcclxuICAgICAgICBwbGF5ZXIueSA9IG9iamVjdC55IC0gcGxheWVyLmhlaWdodDtcclxuICAgICAgICAvLyBwbGF5ZXIuZHkgPSAwXHJcbiAgICAgICAgcGxheWVyLmR5ID0gcGxheWVyLm9yaWdpbmFsRHk7XHJcbiAgICAgICAgcGxheWVyLm9uUGxhdGZvcm0gPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwbGF5ZXIub25QbGF0Zm9ybSA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3QWxsKCl7XHJcbiAgICB3aW5kb3cuY29udGV4dC5jbGVhclJlY3QoMCwwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXHJcbiAgICBwbGF5ZXIuYW5pbWF0ZSgpO1xyXG4gICAgb2JqZWN0cy5mb3JFYWNoKG9iamVjdCA9PiB7XHJcbiAgICAgICAgb2JqZWN0LmRyYXcoKVxyXG4gICAgXHJcbiAgICAgICAgb2JqZWN0Q29sbGlzaW9uKHBsYXllciwgb2JqZWN0KTtcclxuICAgIH0pXHJcblxyXG59Il0sIm5hbWVzIjpbIk9iamVjdCIsInJlcXVpcmUiLCJQbGF5ZXIiLCJvYmplY3RzIiwicGxheWVyIiwiZmxvb3IiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiYyIsImdldENvbnRleHQiLCJ3aW5kb3ciLCJjb250ZXh0IiwicHVzaCIsInNldEludGVydmFsIiwiZHJhd0FsbCIsIm9iamVjdENvbGxpc2lvbiIsIm9iamVjdCIsInkiLCJkeSIsIm9yaWdpbmFsRHkiLCJvblBsYXRmb3JtIiwiY2xlYXJSZWN0IiwiYW5pbWF0ZSIsImZvckVhY2giLCJkcmF3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/object.js":
/*!*******************************!*\
  !*** ./src/scripts/object.js ***!
  \*******************************/
/***/ (function(module) {

eval("class Object {\n  constructor(x, y, width, height, color, visible = true) {\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n    this.color = color;\n    this.visible = visible;\n    this.leftCorner = [this.x, this.y];\n    this.rightCorner = [this.x + this.width, this.y];\n    this.draw();\n  }\n\n  draw() {\n    context.fillStyle = \"black\";\n    context.fillRect(this.x, this.y, this.width, this.height);\n  }\n\n  validPosArray(x, y, dx, dy, maxHeight) {\n    const pos = [];\n    x += dx;\n    y += dy;\n\n    for (let i = 1; y > 0; i++) {\n      x += dx;\n\n      if (y >= maxHeight) {\n        dy = -dy;\n      }\n\n      y += dy;\n\n      if (y > maxHeight || y < 0) {\n        continue;\n      }\n\n      if (x < 0 || x > 600) {\n        // ensuring platform is in the map x axis;\n        continue;\n      }\n\n      if (y < 5) {\n        // ensuring platform is at least 5 higher than the previous\n        continue;\n      }\n\n      pos.push([x, y]);\n    }\n\n    let mid = Math.floor(pos.length / 2);\n    return pos.slice(mid);\n  }\n\n}\n\nmodule.exports = Object;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9wdWdfdG9vX2ZhdC8uL3NyYy9zY3JpcHRzL29iamVjdC5qcz9mOWZkIl0sIm5hbWVzIjpbIk9iamVjdCIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwidmlzaWJsZSIsImxlZnRDb3JuZXIiLCJyaWdodENvcm5lciIsImRyYXciLCJjb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ2YWxpZFBvc0FycmF5IiwiZHgiLCJkeSIsIm1heEhlaWdodCIsInBvcyIsImkiLCJwdXNoIiwibWlkIiwiTWF0aCIsImZsb29yIiwibGVuZ3RoIiwic2xpY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFOLENBQWE7QUFDVEMsRUFBQUEsV0FBVyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0MsS0FBUCxFQUFjQyxNQUFkLEVBQXNCQyxLQUF0QixFQUE2QkMsT0FBTyxHQUFHLElBQXZDLEVBQTRDO0FBQ25ELFNBQUtMLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBVUEsQ0FBVjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsQ0FBQyxLQUFLTixDQUFOLEVBQVMsS0FBS0MsQ0FBZCxDQUFsQjtBQUNBLFNBQUtNLFdBQUwsR0FBbUIsQ0FBQyxLQUFLUCxDQUFMLEdBQVMsS0FBS0UsS0FBZixFQUFzQixLQUFLRCxDQUEzQixDQUFuQjtBQUNBLFNBQUtPLElBQUw7QUFDSDs7QUFFREEsRUFBQUEsSUFBSSxHQUFHO0FBQ0hDLElBQUFBLE9BQU8sQ0FBQ0MsU0FBUixHQUFvQixPQUFwQjtBQUNBRCxJQUFBQSxPQUFPLENBQUNFLFFBQVIsQ0FBaUIsS0FBS1gsQ0FBdEIsRUFBeUIsS0FBS0MsQ0FBOUIsRUFBaUMsS0FBS0MsS0FBdEMsRUFBNkMsS0FBS0MsTUFBbEQ7QUFDSDs7QUFFRFMsRUFBQUEsYUFBYSxDQUFDWixDQUFELEVBQUlDLENBQUosRUFBT1ksRUFBUCxFQUFXQyxFQUFYLEVBQWVDLFNBQWYsRUFBeUI7QUFDbEMsVUFBTUMsR0FBRyxHQUFHLEVBQVo7QUFDQWhCLElBQUFBLENBQUMsSUFBSWEsRUFBTDtBQUNBWixJQUFBQSxDQUFDLElBQUlhLEVBQUw7O0FBQ0EsU0FBSSxJQUFJRyxDQUFDLEdBQUcsQ0FBWixFQUFlaEIsQ0FBQyxHQUFHLENBQW5CLEVBQXNCZ0IsQ0FBQyxFQUF2QixFQUEwQjtBQUN0QmpCLE1BQUFBLENBQUMsSUFBSWEsRUFBTDs7QUFDQSxVQUFJWixDQUFDLElBQUljLFNBQVQsRUFBbUI7QUFDZkQsUUFBQUEsRUFBRSxHQUFHLENBQUNBLEVBQU47QUFDSDs7QUFDRGIsTUFBQUEsQ0FBQyxJQUFJYSxFQUFMOztBQUNBLFVBQUdiLENBQUMsR0FBR2MsU0FBSixJQUFpQmQsQ0FBQyxHQUFHLENBQXhCLEVBQTBCO0FBQ3RCO0FBQ0g7O0FBRUQsVUFBR0QsQ0FBQyxHQUFHLENBQUosSUFBU0EsQ0FBQyxHQUFHLEdBQWhCLEVBQW9CO0FBQUU7QUFDbEI7QUFDSDs7QUFFRCxVQUFHQyxDQUFDLEdBQUcsQ0FBUCxFQUFTO0FBQUU7QUFDUDtBQUNIOztBQUVEZSxNQUFBQSxHQUFHLENBQUNFLElBQUosQ0FBUyxDQUFDbEIsQ0FBRCxFQUFJQyxDQUFKLENBQVQ7QUFDSDs7QUFDRCxRQUFJa0IsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsR0FBRyxDQUFDTSxNQUFKLEdBQWEsQ0FBeEIsQ0FBVjtBQUNBLFdBQU9OLEdBQUcsQ0FBQ08sS0FBSixDQUFVSixHQUFWLENBQVA7QUFDSDs7QUE1Q1E7O0FBaURiSyxNQUFNLENBQUNDLE9BQVAsR0FBaUIzQixNQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE9iamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvciwgdmlzaWJsZSA9IHRydWUpe1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0gIHk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICAgIHRoaXMubGVmdENvcm5lciA9IFt0aGlzLngsIHRoaXMueV1cclxuICAgICAgICB0aGlzLnJpZ2h0Q29ybmVyID0gW3RoaXMueCArIHRoaXMud2lkdGgsIHRoaXMueV1cclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3ICgpe1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgICBcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZFBvc0FycmF5KHgsIHksIGR4LCBkeSwgbWF4SGVpZ2h0KXtcclxuICAgICAgICBjb25zdCBwb3MgPSBbXTtcclxuICAgICAgICB4ICs9IGR4XHJcbiAgICAgICAgeSArPSBkeVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IHkgPiAwOyBpKyspe1xyXG4gICAgICAgICAgICB4ICs9IGR4XHJcbiAgICAgICAgICAgIGlmICh5ID49IG1heEhlaWdodCl7XHJcbiAgICAgICAgICAgICAgICBkeSA9IC1keTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB5ICs9IGR5XHJcbiAgICAgICAgICAgIGlmKHkgPiBtYXhIZWlnaHQgfHwgeSA8IDApe1xyXG4gICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoeCA8IDAgfHwgeCA+IDYwMCl7IC8vIGVuc3VyaW5nIHBsYXRmb3JtIGlzIGluIHRoZSBtYXAgeCBheGlzO1xyXG4gICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoeSA8IDUpeyAvLyBlbnN1cmluZyBwbGF0Zm9ybSBpcyBhdCBsZWFzdCA1IGhpZ2hlciB0aGFuIHRoZSBwcmV2aW91c1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBvcy5wdXNoKFt4LCB5XSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1pZCA9IE1hdGguZmxvb3IocG9zLmxlbmd0aCAvIDIpXHJcbiAgICAgICAgcmV0dXJuIHBvcy5zbGljZShtaWQpXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Q7Il0sImZpbGUiOiIuL3NyYy9zY3JpcHRzL29iamVjdC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/object.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(module) {

eval("let right;\nlet left;\nlet space;\n\nclass Player {\n  constructor(x, y, width, height, color) {\n    this.x = x;\n    this.y = y;\n    this.dx = 15;\n    this.dy = -10;\n    this.currentY = y;\n    this.originalDy = -10;\n    this.maxHeight = this.currentY - 200;\n    this.width = width;\n    this.height = height;\n    this.friction = 0.9;\n    this.gravity = 6.81; // this.maxHeight = 50;\n\n    this.maxVel = 5;\n    this.color = color;\n    this.moving = false;\n    this.onPlatform = true;\n    this.bindInputs();\n    this.draw();\n  }\n\n  draw() {\n    context.fillStyle = \"red\";\n    context.fillRect(this.x, this.y, this.width, this.height);\n  }\n\n  animate() {\n    if (left) {\n      this.x -= this.dx;\n    } else if (right) {\n      this.x += this.dx;\n    } // if (this.onPlatform){\n\n\n    if (space && this.onPlatform) {\n      // setInterval(()=>{this.onPlatform = false}, 1000)\n      if (this.y <= this.maxHeight) {\n        this.dy += this.gravity;\n      } else {\n        this.dy *= this.friction;\n      }\n\n      this.y += this.dy;\n    } else if (!this.onPlatform) {\n      this.dy += this.gravity * this.friction;\n      this.y += this.dy;\n    } // }\n\n\n    this.draw();\n  }\n\n  bindInputs() {\n    document.addEventListener(\"keydown\", function (event) {\n      if (event.key === \"ArrowRight\" || event.key === \"d\") {\n        right = true;\n      } else if (event.key === \"ArrowLeft\" || event.key === \"a\") {\n        left = true;\n      } else if (event.key === \" \") {\n        space = true;\n      }\n    });\n    document.addEventListener(\"keyup\", function (event) {\n      if (event.key === \"ArrowRight\" || event.key === \"d\") {\n        right = false;\n      } else if (event.key === \"ArrowLeft\" || event.key === \"a\") {\n        left = false;\n      } else if (event.key === \" \") {\n        space = false;\n      }\n    });\n  }\n\n}\n\nmodule.exports = Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9wdWdfdG9vX2ZhdC8uL3NyYy9zY3JpcHRzL3BsYXllci5qcz82NDcxIl0sIm5hbWVzIjpbInJpZ2h0IiwibGVmdCIsInNwYWNlIiwiUGxheWVyIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJkeCIsImR5IiwiY3VycmVudFkiLCJvcmlnaW5hbER5IiwibWF4SGVpZ2h0IiwiZnJpY3Rpb24iLCJncmF2aXR5IiwibWF4VmVsIiwibW92aW5nIiwib25QbGF0Zm9ybSIsImJpbmRJbnB1dHMiLCJkcmF3IiwiY29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiYW5pbWF0ZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsS0FBSjtBQUNBLElBQUlDLElBQUo7QUFDQSxJQUFJQyxLQUFKOztBQUdBLE1BQU1DLE1BQU4sQ0FBWTtBQUNSQyxFQUFBQSxXQUFXLENBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxLQUFQLEVBQWNDLE1BQWQsRUFBc0JDLEtBQXRCLEVBQTRCO0FBQ25DLFNBQUtKLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtJLEVBQUwsR0FBVSxFQUFWO0FBQ0EsU0FBS0MsRUFBTCxHQUFVLENBQUMsRUFBWDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JOLENBQWhCO0FBQ0EsU0FBS08sVUFBTCxHQUFrQixDQUFDLEVBQW5CO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLRixRQUFMLEdBQWdCLEdBQWpDO0FBQ0EsU0FBS0wsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS08sUUFBTCxHQUFnQixHQUFoQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxJQUFmLENBWG1DLENBWW5DOztBQUNBLFNBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EsU0FBS1IsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS1MsTUFBTCxHQUFjLEtBQWQ7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsU0FBS0MsVUFBTDtBQUNBLFNBQUtDLElBQUw7QUFDSDs7QUFFREEsRUFBQUEsSUFBSSxHQUFFO0FBQ0ZDLElBQUFBLE9BQU8sQ0FBQ0MsU0FBUixHQUFvQixLQUFwQjtBQUNBRCxJQUFBQSxPQUFPLENBQUNFLFFBQVIsQ0FBaUIsS0FBS25CLENBQXRCLEVBQXlCLEtBQUtDLENBQTlCLEVBQWlDLEtBQUtDLEtBQXRDLEVBQTZDLEtBQUtDLE1BQWxEO0FBQ0g7O0FBRURpQixFQUFBQSxPQUFPLEdBQUU7QUFDTCxRQUFJeEIsSUFBSixFQUFTO0FBQ0wsV0FBS0ksQ0FBTCxJQUFVLEtBQUtLLEVBQWY7QUFDSCxLQUZELE1BRU8sSUFBSVYsS0FBSixFQUFVO0FBQ2IsV0FBS0ssQ0FBTCxJQUFVLEtBQUtLLEVBQWY7QUFDSCxLQUxJLENBTUw7OztBQUNJLFFBQUlSLEtBQUssSUFBSSxLQUFLaUIsVUFBbEIsRUFBNkI7QUFDekI7QUFDQSxVQUFJLEtBQUtiLENBQUwsSUFBVSxLQUFLUSxTQUFuQixFQUE2QjtBQUN6QixhQUFLSCxFQUFMLElBQVcsS0FBS0ssT0FBaEI7QUFDSCxPQUZELE1BRU87QUFDSCxhQUFLTCxFQUFMLElBQVcsS0FBS0ksUUFBaEI7QUFDSDs7QUFDRCxXQUFLVCxDQUFMLElBQVUsS0FBS0ssRUFBZjtBQUNILEtBUkQsTUFRTyxJQUFJLENBQUMsS0FBS1EsVUFBVixFQUFxQjtBQUN4QixXQUFLUixFQUFMLElBQVcsS0FBS0ssT0FBTCxHQUFlLEtBQUtELFFBQS9CO0FBQ0EsV0FBS1QsQ0FBTCxJQUFVLEtBQUtLLEVBQWY7QUFDSCxLQWxCQSxDQW1CTDs7O0FBQ0EsU0FBS1UsSUFBTDtBQUNIOztBQUVERCxFQUFBQSxVQUFVLEdBQUU7QUFDUk0sSUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFTQyxLQUFULEVBQWU7QUFDaEQsVUFBR0EsS0FBSyxDQUFDQyxHQUFOLEtBQWMsWUFBZCxJQUE4QkQsS0FBSyxDQUFDQyxHQUFOLEtBQWMsR0FBL0MsRUFBbUQ7QUFDL0M3QixRQUFBQSxLQUFLLEdBQUcsSUFBUjtBQUNILE9BRkQsTUFFTyxJQUFHNEIsS0FBSyxDQUFDQyxHQUFOLEtBQWMsV0FBZCxJQUE2QkQsS0FBSyxDQUFDQyxHQUFOLEtBQWMsR0FBOUMsRUFBa0Q7QUFDckQ1QixRQUFBQSxJQUFJLEdBQUcsSUFBUDtBQUNILE9BRk0sTUFFQSxJQUFHMkIsS0FBSyxDQUFDQyxHQUFOLEtBQWMsR0FBakIsRUFBcUI7QUFDeEIzQixRQUFBQSxLQUFLLEdBQUcsSUFBUjtBQUNIO0FBQ0osS0FSRDtBQVVBd0IsSUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFTQyxLQUFULEVBQWU7QUFDOUMsVUFBR0EsS0FBSyxDQUFDQyxHQUFOLEtBQWMsWUFBZCxJQUE4QkQsS0FBSyxDQUFDQyxHQUFOLEtBQWMsR0FBL0MsRUFBbUQ7QUFDL0M3QixRQUFBQSxLQUFLLEdBQUcsS0FBUjtBQUNILE9BRkQsTUFFTyxJQUFHNEIsS0FBSyxDQUFDQyxHQUFOLEtBQWMsV0FBZCxJQUE2QkQsS0FBSyxDQUFDQyxHQUFOLEtBQWMsR0FBOUMsRUFBa0Q7QUFDckQ1QixRQUFBQSxJQUFJLEdBQUcsS0FBUDtBQUNILE9BRk0sTUFFQSxJQUFHMkIsS0FBSyxDQUFDQyxHQUFOLEtBQWMsR0FBakIsRUFBc0I7QUFDekIzQixRQUFBQSxLQUFLLEdBQUcsS0FBUjtBQUNIO0FBQ0osS0FSRDtBQVNIOztBQXRFTzs7QUF5RVo0QixNQUFNLENBQUNDLE9BQVAsR0FBaUI1QixNQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImxldCByaWdodDtcclxubGV0IGxlZnQ7XHJcbmxldCBzcGFjZTtcclxuXHJcblxyXG5jbGFzcyBQbGF5ZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcil7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuZHggPSAxNTtcclxuICAgICAgICB0aGlzLmR5ID0gLTEwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFkgPSB5O1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxEeSA9IC0xMDtcclxuICAgICAgICB0aGlzLm1heEhlaWdodCA9IHRoaXMuY3VycmVudFkgLSAyMDA7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuZnJpY3Rpb24gPSAwLjk7XHJcbiAgICAgICAgdGhpcy5ncmF2aXR5ID0gNi44MTtcclxuICAgICAgICAvLyB0aGlzLm1heEhlaWdodCA9IDUwO1xyXG4gICAgICAgIHRoaXMubWF4VmVsID0gNTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3JcclxuICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25QbGF0Zm9ybSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5iaW5kSW5wdXRzKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZSgpe1xyXG4gICAgICAgIGlmIChsZWZ0KXtcclxuICAgICAgICAgICAgdGhpcy54IC09IHRoaXMuZHg7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyaWdodCl7XHJcbiAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLmR4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAodGhpcy5vblBsYXRmb3JtKXtcclxuICAgICAgICAgICAgaWYgKHNwYWNlICYmIHRoaXMub25QbGF0Zm9ybSl7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRJbnRlcnZhbCgoKT0+e3RoaXMub25QbGF0Zm9ybSA9IGZhbHNlfSwgMTAwMClcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnkgPD0gdGhpcy5tYXhIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHkgKz0gdGhpcy5ncmF2aXR5O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmR5ICo9IHRoaXMuZnJpY3Rpb25cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLmR5O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9uUGxhdGZvcm0pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5keSArPSB0aGlzLmdyYXZpdHkgKiB0aGlzLmZyaWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuZHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZElucHV0cygpe1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5ID09PSBcIkFycm93UmlnaHRcIiB8fCBldmVudC5rZXkgPT09IFwiZFwiKXtcclxuICAgICAgICAgICAgICAgIHJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGV2ZW50LmtleSA9PT0gXCJBcnJvd0xlZnRcIiB8fCBldmVudC5rZXkgPT09IFwiYVwiKXtcclxuICAgICAgICAgICAgICAgIGxlZnQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoZXZlbnQua2V5ID09PSBcIiBcIil7XHJcbiAgICAgICAgICAgICAgICBzcGFjZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5ID09PSBcIkFycm93UmlnaHRcIiB8fCBldmVudC5rZXkgPT09IFwiZFwiKXtcclxuICAgICAgICAgICAgICAgIHJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihldmVudC5rZXkgPT09IFwiQXJyb3dMZWZ0XCIgfHwgZXZlbnQua2V5ID09PSBcImFcIil7XHJcbiAgICAgICAgICAgICAgICBsZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihldmVudC5rZXkgPT09IFwiIFwiICl7XHJcbiAgICAgICAgICAgICAgICBzcGFjZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjsiXSwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvcGxheWVyLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

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