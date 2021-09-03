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

eval("// const Object = require('./scripts/object.js')\nconst Player = __webpack_require__(/*! ./scripts/player.js */ \"./src/scripts/player.js\"); // input variables\n// let objects = [];\n\n\nlet player;\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('game');\n  canvas.width = innerWidth;\n  canvas.height = innerHeight;\n  let c = canvas.getContext('2d');\n  window.context = c;\n  window.canvas = canvas;\n  player = new Player(100, canvas.height - 100, 100, 100); // if (objects.length < 10){s\n  //     console.log('making platforms')\n  // addTwoPlatforms()\n\n  window.setInterval(drawAll, 20); // creating object\n  // setting key binds;\n  //drawing all loop\n  // creating player\n}); // function addTwoPlatforms(){\n//     let object = new Object(0,300,100,100,'black')\n//     objects.push(object)\n//     for(let i = 0; i < 2; i++){\n//         let lastObject = objects[objects.length - 1]\n//         let x = lastObject.x; // last object's x value \n//         let y = lastObject.y; // last objects's y value\n//         let width = lastObject.width; // last object's width\n//         let height = lastObject.height;\n//         let randX = Math.random()* (x + width) // random starting position based on last objects x and width\n//         let newPosArray = lastObject.validPosArray(randX, y, 1, 1) // need to refactor\n//         let idx = Math.floor(Math.random()*newPosArray.length) // selecting a random idex in newPosArray\n//         let newPos = newPosArray[idx]\n//         let randomWidth = Math.random()*100 + difficulty; // need to refactor difficulty\n//         let newObject = new Object(newPos[0],new[pos[y]], randomWidth, height)\n//         objects.push(newObject);\n//     }\n// }\n\nfunction drawAll() {\n  // objects.forEach(object => object.draw())\n  player.animate();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBdEIsQyxDQUVBO0FBR0E7OztBQUVBLElBQUlDLE1BQUo7QUFJQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsTUFBTTtBQUNoRCxRQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixNQUF4QixDQUFmO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxHQUFlQyxVQUFmO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQkMsV0FBaEI7QUFDQSxNQUFJQyxDQUFDLEdBQUdOLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQixJQUFsQixDQUFSO0FBQ0FDLEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkgsQ0FBakI7QUFDQUUsRUFBQUEsTUFBTSxDQUFDUixNQUFQLEdBQWdCQSxNQUFoQjtBQUNBSCxFQUFBQSxNQUFNLEdBQUcsSUFBSUYsTUFBSixDQUFXLEdBQVgsRUFBZ0JLLE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQixHQUFoQyxFQUFxQyxHQUFyQyxFQUEwQyxHQUExQyxDQUFULENBUGdELENBUWhEO0FBQ0E7QUFDSTs7QUFHSkksRUFBQUEsTUFBTSxDQUFDRSxXQUFQLENBQW1CQyxPQUFuQixFQUE0QixFQUE1QixFQWJnRCxDQWNoRDtBQUVBO0FBRUE7QUFFQTtBQUNILENBckJELEUsQ0F5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLE9BQVQsR0FBa0I7QUFDZDtBQUVBZCxFQUFBQSxNQUFNLENBQUNlLE9BQVA7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL215X3B1Z190b29fZmF0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgT2JqZWN0ID0gcmVxdWlyZSgnLi9zY3JpcHRzL29iamVjdC5qcycpXHJcbmNvbnN0IFBsYXllciA9IHJlcXVpcmUoJy4vc2NyaXB0cy9wbGF5ZXIuanMnKVxyXG5cclxuLy8gaW5wdXQgdmFyaWFibGVzXHJcblxyXG5cclxuLy8gbGV0IG9iamVjdHMgPSBbXTtcclxuXHJcbmxldCBwbGF5ZXI7XHJcblxyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSBpbm5lcldpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGlubmVySGVpZ2h0O1xyXG4gICAgbGV0IGMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHdpbmRvdy5jb250ZXh0ID0gYztcclxuICAgIHdpbmRvdy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICBwbGF5ZXIgPSBuZXcgUGxheWVyKDEwMCwgY2FudmFzLmhlaWdodCAtIDEwMCwgMTAwLCAxMDApO1xyXG4gICAgLy8gaWYgKG9iamVjdHMubGVuZ3RoIDwgMTApe3NcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnbWFraW5nIHBsYXRmb3JtcycpXHJcbiAgICAgICAgLy8gYWRkVHdvUGxhdGZvcm1zKClcclxuXHJcbiAgICBcclxuICAgIHdpbmRvdy5zZXRJbnRlcnZhbChkcmF3QWxsLCAyMCk7XHJcbiAgICAvLyBjcmVhdGluZyBvYmplY3RcclxuXHJcbiAgICAvLyBzZXR0aW5nIGtleSBiaW5kcztcclxuXHJcbiAgICAvL2RyYXdpbmcgYWxsIGxvb3BcclxuICAgIFxyXG4gICAgLy8gY3JlYXRpbmcgcGxheWVyXHJcbn0pO1xyXG4gIFxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGFkZFR3b1BsYXRmb3Jtcygpe1xyXG4vLyAgICAgbGV0IG9iamVjdCA9IG5ldyBPYmplY3QoMCwzMDAsMTAwLDEwMCwnYmxhY2snKVxyXG4vLyAgICAgb2JqZWN0cy5wdXNoKG9iamVjdClcclxuLy8gICAgIGZvcihsZXQgaSA9IDA7IGkgPCAyOyBpKyspe1xyXG4vLyAgICAgICAgIGxldCBsYXN0T2JqZWN0ID0gb2JqZWN0c1tvYmplY3RzLmxlbmd0aCAtIDFdXHJcbi8vICAgICAgICAgbGV0IHggPSBsYXN0T2JqZWN0Lng7IC8vIGxhc3Qgb2JqZWN0J3MgeCB2YWx1ZSBcclxuLy8gICAgICAgICBsZXQgeSA9IGxhc3RPYmplY3QueTsgLy8gbGFzdCBvYmplY3RzJ3MgeSB2YWx1ZVxyXG4vLyAgICAgICAgIGxldCB3aWR0aCA9IGxhc3RPYmplY3Qud2lkdGg7IC8vIGxhc3Qgb2JqZWN0J3Mgd2lkdGhcclxuLy8gICAgICAgICBsZXQgaGVpZ2h0ID0gbGFzdE9iamVjdC5oZWlnaHQ7XHJcblxyXG4vLyAgICAgICAgIGxldCByYW5kWCA9IE1hdGgucmFuZG9tKCkqICh4ICsgd2lkdGgpIC8vIHJhbmRvbSBzdGFydGluZyBwb3NpdGlvbiBiYXNlZCBvbiBsYXN0IG9iamVjdHMgeCBhbmQgd2lkdGhcclxuXHJcbi8vICAgICAgICAgbGV0IG5ld1Bvc0FycmF5ID0gbGFzdE9iamVjdC52YWxpZFBvc0FycmF5KHJhbmRYLCB5LCAxLCAxKSAvLyBuZWVkIHRvIHJlZmFjdG9yXHJcbi8vICAgICAgICAgbGV0IGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpuZXdQb3NBcnJheS5sZW5ndGgpIC8vIHNlbGVjdGluZyBhIHJhbmRvbSBpZGV4IGluIG5ld1Bvc0FycmF5XHJcbi8vICAgICAgICAgbGV0IG5ld1BvcyA9IG5ld1Bvc0FycmF5W2lkeF1cclxuLy8gICAgICAgICBsZXQgcmFuZG9tV2lkdGggPSBNYXRoLnJhbmRvbSgpKjEwMCArIGRpZmZpY3VsdHk7IC8vIG5lZWQgdG8gcmVmYWN0b3IgZGlmZmljdWx0eVxyXG5cclxuLy8gICAgICAgICBsZXQgbmV3T2JqZWN0ID0gbmV3IE9iamVjdChuZXdQb3NbMF0sbmV3W3Bvc1t5XV0sIHJhbmRvbVdpZHRoLCBoZWlnaHQpXHJcbi8vICAgICAgICAgb2JqZWN0cy5wdXNoKG5ld09iamVjdCk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG5mdW5jdGlvbiBkcmF3QWxsKCl7XHJcbiAgICAvLyBvYmplY3RzLmZvckVhY2gob2JqZWN0ID0+IG9iamVjdC5kcmF3KCkpXHJcblxyXG4gICAgcGxheWVyLmFuaW1hdGUoKTtcclxufSJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJyZXF1aXJlIiwicGxheWVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImMiLCJnZXRDb250ZXh0Iiwid2luZG93IiwiY29udGV4dCIsInNldEludGVydmFsIiwiZHJhd0FsbCIsImFuaW1hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(module) {

eval("let right;\nlet left;\nlet space;\n\nclass Player {\n  constructor(x, y, width, height, color) {\n    this.x = x;\n    this.y = y;\n    this.dx = 1;\n    this.dy = 1;\n    this.width = width;\n    this.height = height;\n    this.maxHeight = 10;\n    this.maxVel = 5;\n    this.color = color;\n    this.moving = false;\n    this.bindInputs();\n    this.draw();\n  }\n\n  draw() {\n    context.fillStyle = \"red\";\n    context.fillRect(this.x, this.y, this.width, this.height);\n  }\n\n  animate() {\n    // requestAnimationFrame(animate);\n    context.clearRect(0, 0, window.canvas.width, window.canvas.height);\n\n    if (left) {\n      this.x -= this.dx;\n    } else if (right) {\n      this.x += this.dx;\n    } else if (space) {\n      if (this.y >= this.maxHeight) {\n        this.dy = -this.dy;\n      }\n\n      this.y += this.dy;\n    }\n\n    this.draw();\n  }\n\n  bindInputs() {\n    document.addEventListener(\"keydown\", function (event) {\n      if (event.key === \"ArrowRight\" || event.key === \"d\") {\n        right = true;\n      } else if (event.key === \"ArrowLeft\" || event.key === \"a\") {\n        left = true;\n      } else if (event.key === \"space\") {\n        space = true;\n      }\n    });\n    document.addEventListener(\"keyup\", function (event) {\n      if (event.key === \"ArrowRight\" || event.key === \"d\") {\n        right = false;\n      } else if (event.key === \"ArrowLeft\" || event.key === \"a\") {\n        left = false;\n      } else if (event.key === \"space\") {\n        space = false;\n      }\n    });\n  }\n\n}\n\nmodule.exports = Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9wdWdfdG9vX2ZhdC8uL3NyYy9zY3JpcHRzL3BsYXllci5qcz82NDcxIl0sIm5hbWVzIjpbInJpZ2h0IiwibGVmdCIsInNwYWNlIiwiUGxheWVyIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJkeCIsImR5IiwibWF4SGVpZ2h0IiwibWF4VmVsIiwibW92aW5nIiwiYmluZElucHV0cyIsImRyYXciLCJjb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJhbmltYXRlIiwiY2xlYXJSZWN0Iiwid2luZG93IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxLQUFKO0FBQ0EsSUFBSUMsSUFBSjtBQUNBLElBQUlDLEtBQUo7O0FBR0EsTUFBTUMsTUFBTixDQUFZO0FBQ1JDLEVBQUFBLFdBQVcsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLEtBQVAsRUFBY0MsTUFBZCxFQUFzQkMsS0FBdEIsRUFBNEI7QUFDbkMsU0FBS0osQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0ksRUFBTCxHQUFVLENBQVY7QUFDQSxTQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUNBLFNBQUtKLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtJLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFNBQUtKLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtLLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0MsVUFBTDtBQUNBLFNBQUtDLElBQUw7QUFDSDs7QUFFREEsRUFBQUEsSUFBSSxHQUFFO0FBQ0ZDLElBQUFBLE9BQU8sQ0FBQ0MsU0FBUixHQUFvQixLQUFwQjtBQUNBRCxJQUFBQSxPQUFPLENBQUNFLFFBQVIsQ0FBaUIsS0FBS2QsQ0FBdEIsRUFBeUIsS0FBS0MsQ0FBOUIsRUFBaUMsS0FBS0MsS0FBdEMsRUFBNkMsS0FBS0MsTUFBbEQ7QUFDSDs7QUFFRFksRUFBQUEsT0FBTyxHQUFFO0FBQ0w7QUFDQUgsSUFBQUEsT0FBTyxDQUFDSSxTQUFSLENBQWtCLENBQWxCLEVBQW9CLENBQXBCLEVBQXNCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2hCLEtBQXBDLEVBQTJDZSxNQUFNLENBQUNDLE1BQVAsQ0FBY2YsTUFBekQ7O0FBQ0EsUUFBSVAsSUFBSixFQUFTO0FBQ0wsV0FBS0ksQ0FBTCxJQUFVLEtBQUtLLEVBQWY7QUFDSCxLQUZELE1BRU8sSUFBSVYsS0FBSixFQUFVO0FBQ2IsV0FBS0ssQ0FBTCxJQUFVLEtBQUtLLEVBQWY7QUFDSCxLQUZNLE1BRUEsSUFBSVIsS0FBSixFQUFVO0FBQ2IsVUFBRyxLQUFLSSxDQUFMLElBQVUsS0FBS00sU0FBbEIsRUFBNEI7QUFDeEIsYUFBS0QsRUFBTCxHQUFVLENBQUMsS0FBS0EsRUFBaEI7QUFDSDs7QUFDRCxXQUFLTCxDQUFMLElBQVUsS0FBS0ssRUFBZjtBQUNIOztBQUNELFNBQUtLLElBQUw7QUFDSDs7QUFFREQsRUFBQUEsVUFBVSxHQUFFO0FBQ1JTLElBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBU0MsS0FBVCxFQUFlO0FBQ2hELFVBQUdBLEtBQUssQ0FBQ0MsR0FBTixLQUFjLFlBQWQsSUFBOEJELEtBQUssQ0FBQ0MsR0FBTixLQUFjLEdBQS9DLEVBQW1EO0FBQy9DM0IsUUFBQUEsS0FBSyxHQUFHLElBQVI7QUFDSCxPQUZELE1BRU8sSUFBRzBCLEtBQUssQ0FBQ0MsR0FBTixLQUFjLFdBQWQsSUFBNkJELEtBQUssQ0FBQ0MsR0FBTixLQUFjLEdBQTlDLEVBQWtEO0FBQ3JEMUIsUUFBQUEsSUFBSSxHQUFHLElBQVA7QUFDSCxPQUZNLE1BRUEsSUFBR3lCLEtBQUssQ0FBQ0MsR0FBTixLQUFjLE9BQWpCLEVBQXlCO0FBQzVCekIsUUFBQUEsS0FBSyxHQUFHLElBQVI7QUFDSDtBQUNKLEtBUkQ7QUFVQXNCLElBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBU0MsS0FBVCxFQUFlO0FBQzlDLFVBQUdBLEtBQUssQ0FBQ0MsR0FBTixLQUFjLFlBQWQsSUFBOEJELEtBQUssQ0FBQ0MsR0FBTixLQUFjLEdBQS9DLEVBQW1EO0FBQy9DM0IsUUFBQUEsS0FBSyxHQUFHLEtBQVI7QUFDSCxPQUZELE1BRU8sSUFBRzBCLEtBQUssQ0FBQ0MsR0FBTixLQUFjLFdBQWQsSUFBNkJELEtBQUssQ0FBQ0MsR0FBTixLQUFjLEdBQTlDLEVBQWtEO0FBQ3JEMUIsUUFBQUEsSUFBSSxHQUFHLEtBQVA7QUFDSCxPQUZNLE1BRUEsSUFBR3lCLEtBQUssQ0FBQ0MsR0FBTixLQUFjLE9BQWpCLEVBQXlCO0FBQzVCekIsUUFBQUEsS0FBSyxHQUFHLEtBQVI7QUFDSDtBQUNKLEtBUkQ7QUFTSDs7QUF6RE87O0FBNERaMEIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCMUIsTUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgcmlnaHQ7XHJcbmxldCBsZWZ0O1xyXG5sZXQgc3BhY2U7XHJcblxyXG5cclxuY2xhc3MgUGxheWVye1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3Ipe1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLmR4ID0gMTtcclxuICAgICAgICB0aGlzLmR5ID0gMTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5tYXhIZWlnaHQgPSAxMDtcclxuICAgICAgICB0aGlzLm1heFZlbCA9IDU7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yXHJcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJpbmRJbnB1dHMoKTtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCl7XHJcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInJlZFwiO1xyXG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlKCl7XHJcbiAgICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsMCx3aW5kb3cuY2FudmFzLndpZHRoLCB3aW5kb3cuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgaWYgKGxlZnQpe1xyXG4gICAgICAgICAgICB0aGlzLnggLT0gdGhpcy5keDtcclxuICAgICAgICB9IGVsc2UgaWYgKHJpZ2h0KXtcclxuICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuZHg7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzcGFjZSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMueSA+PSB0aGlzLm1heEhlaWdodCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmR5ID0gLXRoaXMuZHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuZHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRJbnB1dHMoKXtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIgfHwgZXZlbnQua2V5ID09PSBcImRcIil7XHJcbiAgICAgICAgICAgICAgICByaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihldmVudC5rZXkgPT09IFwiQXJyb3dMZWZ0XCIgfHwgZXZlbnQua2V5ID09PSBcImFcIil7XHJcbiAgICAgICAgICAgICAgICBsZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGV2ZW50LmtleSA9PT0gXCJzcGFjZVwiKXtcclxuICAgICAgICAgICAgICAgIHNwYWNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgaWYoZXZlbnQua2V5ID09PSBcIkFycm93UmlnaHRcIiB8fCBldmVudC5rZXkgPT09IFwiZFwiKXtcclxuICAgICAgICAgICAgICAgIHJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihldmVudC5rZXkgPT09IFwiQXJyb3dMZWZ0XCIgfHwgZXZlbnQua2V5ID09PSBcImFcIil7XHJcbiAgICAgICAgICAgICAgICBsZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihldmVudC5rZXkgPT09IFwic3BhY2VcIil7XHJcbiAgICAgICAgICAgICAgICBzcGFjZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjsiXSwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvcGxheWVyLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

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