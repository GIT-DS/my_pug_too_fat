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

eval("const Object = __webpack_require__(/*! ./scripts/object.js */ \"./src/scripts/object.js\");\n\nconst Player = __webpack_require__(/*! ./scripts/player.js */ \"./src/scripts/player.js\"); // input variables\n\n\nlet objects = [];\nlet player;\nlet floor;\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('game');\n  canvas.width = innerWidth;\n  canvas.height = innerHeight;\n  let c = canvas.getContext('2d');\n  window.context = c;\n  window.canvas = canvas;\n  player = new Player(300, canvas.height - 50, 100, 100);\n  floor = new Object(0, canvas.height - 50, canvas.width, 50);\n  plat1 = new Object(100, canvas.height - 200, 100, 50);\n  plat2 = new Object(500, canvas.height - 400, 100, 50);\n  plat3 = new Object(600, canvas.height - 600, 100, 50);\n  objects.push(floor);\n  objects.push(plat1);\n  objects.push(plat2);\n  objects.push(plat3);\n  window.setInterval(drawAll, 20);\n});\n\nfunction objectCollision(player, object) {\n  // console.log(inRangeX(player, object))\n  // if (collisionTop(player, object) && inRangeX(player, object)){\n  //     if (collisionRight(player,object)){\n  if (inRangeX(player, object) && inRangeY(player, object)) {\n    // player.dy = 0;\n    player.dy = player.originalDy;\n    player.y = object.y - player.height; // player.dy = 0\n\n    player.onPlatform = true;\n  } else {\n    player.onPlatform = false;\n  }\n}\n\nfunction drawAll() {\n  window.context.clearRect(0, 0, canvas.width, canvas.height);\n  player.animate();\n  objects.forEach(object => {\n    object.draw();\n    objectCollision(player, object);\n  });\n} // function collisionRight(player, object){\n//     if (player.x <= object.x + object.width ){\n//         return true;\n//     }\n// }\n\n\nfunction collisionTop(player, object) {\n  if (player.y + player.height >= object.y) {\n    return true;\n  }\n\n  return false;\n} // function collisionBot(player, object){\n//     if (player.y <= object.height + object.y){\n//         return true;\n//     }\n//     return false;\n// }\n// function collision(player, object){\n//     if (player.x <= object.x + object.width || \n//         player.x + player.width >= object.x)\n// }\n\n\nfunction inRangeX(player, object) {\n  let playerStart = player.x;\n  let playerEnd = player.x + player.width;\n  let objectStart = object.x;\n  let objectEnd = object.x + object.width; // if (playerStart >= objectStart && playerEnd >= objectEnd && \n  //     playerStart <= objectEnd && playerEnd >= objectStart\n  //     ||\n  //     playerEnd >= objectStart && playerEnd <= objectEnd){\n  //     return true;\n  // }\n\n  if (playerStart < objectStart && playerStart < objectEnd && playerEnd < objectStart && playerEnd < objectEnd || playerStart > objectStart && playerStart > objectEnd && playerEnd > objectStart && playerEnd > objectEnd) {\n    return false;\n  }\n\n  return true;\n}\n\nfunction inRangeY(player, object) {\n  let playerStart = player.y;\n  let playerEnd = player.y + player.height;\n  let objectStart = object.y;\n  let objectEnd = object.y + object.height; // if (playerStart >= objectStart && playerEnd >= objectEnd && \n  //     playerStart <= objectEnd && playerEnd >= objectStart\n  //     ||\n  //     playerEnd >= objectStart && playerEnd <= objectEnd){\n  //     return true;\n  // }\n\n  if (playerStart < objectStart && playerStart < objectEnd && playerEnd < objectStart && playerEnd < objectEnd || playerStart > objectStart && playerStart > objectEnd && playerEnd > objectStart && playerEnd > objectEnd) {\n    return false;\n  }\n\n  return true;\n} // function addTwoPlatforms(){\n//     let object = new Object(0,300,100,100,'black')\n//     objects.push(object)\n//     for(let i = 0; i < 2; i++){\n//         let lastObject = objects[objects.length - 1]\n//         let x = lastObject.x; // last object's x value \n//         let y = lastObject.y; // last objects's y value\n//         let width = lastObject.width; // last object's width\n//         let height = lastObject.height;\n//         let randX = Math.random()* (x + width) // random starting position based on last objects x and width\n//         let newPosArray = lastObject.validPosArray(randX, y, 1, 1) // need to refactor\n//         let idx = Math.floor(Math.random()*newPosArray.length) // selecting a random idex in newPosArray\n//         let newPos = newPosArray[idx]\n//         let randomWidth = Math.random()*100 + difficulty; // need to refactor difficulty\n//         let newObject = new Object(newPos[0],new[pos[y]], randomWidth, height)\n//         objects.push(newObject);\n//     }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBNkJILFdBQVcsR0FBR0ksU0FBM0MsSUFDREYsU0FBUyxHQUFHQyxXQURYLElBQzBCRCxTQUFTLEdBQUdFLFNBSDNDLEVBR3NEO0FBQzlDLFdBQU8sS0FBUDtBQUNIOztBQUNMLFNBQU8sSUFBUDtBQUNIOztBQUVELFNBQVNkLFFBQVQsQ0FBa0J2QixNQUFsQixFQUEwQnFCLE1BQTFCLEVBQWlDO0FBQzdCLE1BQUlZLFdBQVcsR0FBR2pDLE1BQU0sQ0FBQzBCLENBQXpCO0FBQ0EsTUFBSVMsU0FBUyxHQUFHbkMsTUFBTSxDQUFDMEIsQ0FBUCxHQUFXMUIsTUFBTSxDQUFDUSxNQUFsQztBQUNBLE1BQUk0QixXQUFXLEdBQUdmLE1BQU0sQ0FBQ0ssQ0FBekI7QUFDQSxNQUFJVyxTQUFTLEdBQUdoQixNQUFNLENBQUNLLENBQVAsR0FBV0wsTUFBTSxDQUFDYixNQUFsQyxDQUo2QixDQU03QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBS3lCLFdBQVcsR0FBR0csV0FBZCxJQUE2QkgsV0FBVyxHQUFHSSxTQUEzQyxJQUNERixTQUFTLEdBQUdDLFdBRFgsSUFDMEJELFNBQVMsR0FBR0UsU0FEdkMsSUFFQ0osV0FBVyxHQUFHRyxXQUFkLElBQTZCSCxXQUFXLEdBQUdJLFNBQTNDLElBQ0RGLFNBQVMsR0FBR0MsV0FEWCxJQUMwQkQsU0FBUyxHQUFHRSxTQUgzQyxFQUdzRDtBQUM5QyxXQUFPLEtBQVA7QUFDSDs7QUFDTCxTQUFPLElBQVA7QUFDSCxDLENBS0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlfcHVnX3Rvb19mYXQvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBPYmplY3QgPSByZXF1aXJlKCcuL3NjcmlwdHMvb2JqZWN0LmpzJylcclxuY29uc3QgUGxheWVyID0gcmVxdWlyZSgnLi9zY3JpcHRzL3BsYXllci5qcycpXHJcblxyXG4vLyBpbnB1dCB2YXJpYWJsZXNcclxuXHJcblxyXG5sZXQgb2JqZWN0cyA9IFtdO1xyXG5cclxubGV0IHBsYXllcjtcclxubGV0IGZsb29yO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSBpbm5lcldpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGlubmVySGVpZ2h0O1xyXG4gICAgbGV0IGMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHdpbmRvdy5jb250ZXh0ID0gYztcclxuICAgIHdpbmRvdy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICBwbGF5ZXIgPSBuZXcgUGxheWVyKDMwMCwgY2FudmFzLmhlaWdodCAtIDUwLCAxMDAsIDEwMCk7XHJcbiAgICBmbG9vciA9IG5ldyBPYmplY3QoMCwgY2FudmFzLmhlaWdodCAtIDUwLCBjYW52YXMud2lkdGgsIDUwKTtcclxuICAgIHBsYXQxID0gbmV3IE9iamVjdCggMTAwLCBjYW52YXMuaGVpZ2h0IC0gMjAwLCAxMDAsIDUwKTsgICAgXHJcbiAgICBwbGF0MiA9IG5ldyBPYmplY3QoIDUwMCwgY2FudmFzLmhlaWdodCAtIDQwMCwgMTAwLCA1MCk7ICAgIFxyXG4gICAgcGxhdDMgPSBuZXcgT2JqZWN0KCA2MDAsIGNhbnZhcy5oZWlnaHQgLSA2MDAsIDEwMCwgNTApOyAgICBcclxuICAgIG9iamVjdHMucHVzaChmbG9vcilcclxuICAgIG9iamVjdHMucHVzaChwbGF0MSlcclxuICAgIG9iamVjdHMucHVzaChwbGF0MilcclxuICAgIG9iamVjdHMucHVzaChwbGF0MylcclxuICAgIFxyXG4gICAgd2luZG93LnNldEludGVydmFsKGRyYXdBbGwsIDIwKTtcclxufSk7XHJcbiAgXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG9iamVjdENvbGxpc2lvbihwbGF5ZXIsIG9iamVjdCl7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhpblJhbmdlWChwbGF5ZXIsIG9iamVjdCkpXHJcblxyXG4gICAgLy8gaWYgKGNvbGxpc2lvblRvcChwbGF5ZXIsIG9iamVjdCkgJiYgaW5SYW5nZVgocGxheWVyLCBvYmplY3QpKXtcclxuICAgIC8vICAgICBpZiAoY29sbGlzaW9uUmlnaHQocGxheWVyLG9iamVjdCkpe1xyXG4gICAgaWYoIGluUmFuZ2VYKHBsYXllciwgb2JqZWN0KSAmJiBpblJhbmdlWShwbGF5ZXIsIG9iamVjdCkpe1xyXG4gICAgICAgIC8vIHBsYXllci5keSA9IDA7XHJcbiAgICAgICAgcGxheWVyLmR5ID0gcGxheWVyLm9yaWdpbmFsRHk7XHJcbiAgICAgICAgcGxheWVyLnkgPSBvYmplY3QueSAtIHBsYXllci5oZWlnaHQ7XHJcbiAgICAgICAgLy8gcGxheWVyLmR5ID0gMFxyXG4gICAgICAgIHBsYXllci5vblBsYXRmb3JtID0gdHJ1ZTtcclxuICAgICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGxheWVyLm9uUGxhdGZvcm0gPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd0FsbCgpe1xyXG4gICAgd2luZG93LmNvbnRleHQuY2xlYXJSZWN0KDAsMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxyXG4gICAgcGxheWVyLmFuaW1hdGUoKTtcclxuICAgIG9iamVjdHMuZm9yRWFjaChvYmplY3QgPT4ge1xyXG4gICAgICAgIG9iamVjdC5kcmF3KClcclxuICAgICAgICBcclxuICAgICAgICBvYmplY3RDb2xsaXNpb24ocGxheWVyLCBvYmplY3QpO1xyXG4gICAgfSlcclxuICAgIFxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBjb2xsaXNpb25SaWdodChwbGF5ZXIsIG9iamVjdCl7XHJcbi8vICAgICBpZiAocGxheWVyLnggPD0gb2JqZWN0LnggKyBvYmplY3Qud2lkdGggKXtcclxuLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjb2xsaXNpb25Ub3AocGxheWVyLCBvYmplY3Qpe1xyXG4gICAgaWYgKHBsYXllci55ICsgcGxheWVyLmhlaWdodCA+PSBvYmplY3QueSl7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGNvbGxpc2lvbkJvdChwbGF5ZXIsIG9iamVjdCl7XHJcbi8vICAgICBpZiAocGxheWVyLnkgPD0gb2JqZWN0LmhlaWdodCArIG9iamVjdC55KXtcclxuLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiBmYWxzZTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBjb2xsaXNpb24ocGxheWVyLCBvYmplY3Qpe1xyXG4vLyAgICAgaWYgKHBsYXllci54IDw9IG9iamVjdC54ICsgb2JqZWN0LndpZHRoIHx8IFxyXG4vLyAgICAgICAgIHBsYXllci54ICsgcGxheWVyLndpZHRoID49IG9iamVjdC54KVxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBpblJhbmdlWChwbGF5ZXIsIG9iamVjdCl7XHJcbiAgICBsZXQgcGxheWVyU3RhcnQgPSBwbGF5ZXIueDtcclxuICAgIGxldCBwbGF5ZXJFbmQgPSBwbGF5ZXIueCArIHBsYXllci53aWR0aDtcclxuICAgIGxldCBvYmplY3RTdGFydCA9IG9iamVjdC54O1xyXG4gICAgbGV0IG9iamVjdEVuZCA9IG9iamVjdC54ICsgb2JqZWN0LndpZHRoO1xyXG5cclxuICAgIC8vIGlmIChwbGF5ZXJTdGFydCA+PSBvYmplY3RTdGFydCAmJiBwbGF5ZXJFbmQgPj0gb2JqZWN0RW5kICYmIFxyXG4gICAgLy8gICAgIHBsYXllclN0YXJ0IDw9IG9iamVjdEVuZCAmJiBwbGF5ZXJFbmQgPj0gb2JqZWN0U3RhcnRcclxuICAgIC8vICAgICB8fFxyXG4gICAgLy8gICAgIHBsYXllckVuZCA+PSBvYmplY3RTdGFydCAmJiBwbGF5ZXJFbmQgPD0gb2JqZWN0RW5kKXtcclxuICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBpZiAoKHBsYXllclN0YXJ0IDwgb2JqZWN0U3RhcnQgJiYgcGxheWVyU3RhcnQgPCBvYmplY3RFbmQgJiZcclxuICAgICAgICBwbGF5ZXJFbmQgPCBvYmplY3RTdGFydCAmJiBwbGF5ZXJFbmQgPCBvYmplY3RFbmQpIHx8IFxyXG4gICAgICAgIChwbGF5ZXJTdGFydCA+IG9iamVjdFN0YXJ0ICYmIHBsYXllclN0YXJ0ID4gb2JqZWN0RW5kICYmXHJcbiAgICAgICAgcGxheWVyRW5kID4gb2JqZWN0U3RhcnQgJiYgcGxheWVyRW5kID4gb2JqZWN0RW5kKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5SYW5nZVkocGxheWVyLCBvYmplY3Qpe1xyXG4gICAgbGV0IHBsYXllclN0YXJ0ID0gcGxheWVyLnk7XHJcbiAgICBsZXQgcGxheWVyRW5kID0gcGxheWVyLnkgKyBwbGF5ZXIuaGVpZ2h0O1xyXG4gICAgbGV0IG9iamVjdFN0YXJ0ID0gb2JqZWN0Lnk7XHJcbiAgICBsZXQgb2JqZWN0RW5kID0gb2JqZWN0LnkgKyBvYmplY3QuaGVpZ2h0O1xyXG5cclxuICAgIC8vIGlmIChwbGF5ZXJTdGFydCA+PSBvYmplY3RTdGFydCAmJiBwbGF5ZXJFbmQgPj0gb2JqZWN0RW5kICYmIFxyXG4gICAgLy8gICAgIHBsYXllclN0YXJ0IDw9IG9iamVjdEVuZCAmJiBwbGF5ZXJFbmQgPj0gb2JqZWN0U3RhcnRcclxuICAgIC8vICAgICB8fFxyXG4gICAgLy8gICAgIHBsYXllckVuZCA+PSBvYmplY3RTdGFydCAmJiBwbGF5ZXJFbmQgPD0gb2JqZWN0RW5kKXtcclxuICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBpZiAoKHBsYXllclN0YXJ0IDwgb2JqZWN0U3RhcnQgJiYgcGxheWVyU3RhcnQgPCBvYmplY3RFbmQgJiZcclxuICAgICAgICBwbGF5ZXJFbmQgPCBvYmplY3RTdGFydCAmJiBwbGF5ZXJFbmQgPCBvYmplY3RFbmQpIHx8IFxyXG4gICAgICAgIChwbGF5ZXJTdGFydCA+IG9iamVjdFN0YXJ0ICYmIHBsYXllclN0YXJ0ID4gb2JqZWN0RW5kICYmXHJcbiAgICAgICAgcGxheWVyRW5kID4gb2JqZWN0U3RhcnQgJiYgcGxheWVyRW5kID4gb2JqZWN0RW5kKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gYWRkVHdvUGxhdGZvcm1zKCl7XHJcbi8vICAgICBsZXQgb2JqZWN0ID0gbmV3IE9iamVjdCgwLDMwMCwxMDAsMTAwLCdibGFjaycpXHJcbi8vICAgICBvYmplY3RzLnB1c2gob2JqZWN0KVxyXG4vLyAgICAgZm9yKGxldCBpID0gMDsgaSA8IDI7IGkrKyl7XHJcbi8vICAgICAgICAgbGV0IGxhc3RPYmplY3QgPSBvYmplY3RzW29iamVjdHMubGVuZ3RoIC0gMV1cclxuLy8gICAgICAgICBsZXQgeCA9IGxhc3RPYmplY3QueDsgLy8gbGFzdCBvYmplY3QncyB4IHZhbHVlIFxyXG4vLyAgICAgICAgIGxldCB5ID0gbGFzdE9iamVjdC55OyAvLyBsYXN0IG9iamVjdHMncyB5IHZhbHVlXHJcbi8vICAgICAgICAgbGV0IHdpZHRoID0gbGFzdE9iamVjdC53aWR0aDsgLy8gbGFzdCBvYmplY3QncyB3aWR0aFxyXG4vLyAgICAgICAgIGxldCBoZWlnaHQgPSBsYXN0T2JqZWN0LmhlaWdodDtcclxuXHJcbi8vICAgICAgICAgbGV0IHJhbmRYID0gTWF0aC5yYW5kb20oKSogKHggKyB3aWR0aCkgLy8gcmFuZG9tIHN0YXJ0aW5nIHBvc2l0aW9uIGJhc2VkIG9uIGxhc3Qgb2JqZWN0cyB4IGFuZCB3aWR0aFxyXG5cclxuLy8gICAgICAgICBsZXQgbmV3UG9zQXJyYXkgPSBsYXN0T2JqZWN0LnZhbGlkUG9zQXJyYXkocmFuZFgsIHksIDEsIDEpIC8vIG5lZWQgdG8gcmVmYWN0b3JcclxuLy8gICAgICAgICBsZXQgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKm5ld1Bvc0FycmF5Lmxlbmd0aCkgLy8gc2VsZWN0aW5nIGEgcmFuZG9tIGlkZXggaW4gbmV3UG9zQXJyYXlcclxuLy8gICAgICAgICBsZXQgbmV3UG9zID0gbmV3UG9zQXJyYXlbaWR4XVxyXG4vLyAgICAgICAgIGxldCByYW5kb21XaWR0aCA9IE1hdGgucmFuZG9tKCkqMTAwICsgZGlmZmljdWx0eTsgLy8gbmVlZCB0byByZWZhY3RvciBkaWZmaWN1bHR5XHJcblxyXG4vLyAgICAgICAgIGxldCBuZXdPYmplY3QgPSBuZXcgT2JqZWN0KG5ld1Bvc1swXSxuZXdbcG9zW3ldXSwgcmFuZG9tV2lkdGgsIGhlaWdodClcclxuLy8gICAgICAgICBvYmplY3RzLnB1c2gobmV3T2JqZWN0KTtcclxuLy8gICAgIH1cclxuLy8gfSJdLCJuYW1lcyI6WyJPYmplY3QiLCJyZXF1aXJlIiwiUGxheWVyIiwib2JqZWN0cyIsInBsYXllciIsImZsb29yIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImMiLCJnZXRDb250ZXh0Iiwid2luZG93IiwiY29udGV4dCIsInBsYXQxIiwicGxhdDIiLCJwbGF0MyIsInB1c2giLCJzZXRJbnRlcnZhbCIsImRyYXdBbGwiLCJvYmplY3RDb2xsaXNpb24iLCJvYmplY3QiLCJpblJhbmdlWCIsImluUmFuZ2VZIiwiZHkiLCJvcmlnaW5hbER5IiwieSIsIm9uUGxhdGZvcm0iLCJjbGVhclJlY3QiLCJhbmltYXRlIiwiZm9yRWFjaCIsImRyYXciLCJjb2xsaXNpb25Ub3AiLCJwbGF5ZXJTdGFydCIsIngiLCJwbGF5ZXJFbmQiLCJvYmplY3RTdGFydCIsIm9iamVjdEVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("let right;\nlet left;\nlet space;\n\nclass Player {\n  constructor(x, y, width, height, color) {\n    this.x = x;\n    this.y = y;\n    this.dx = 15;\n    this.dy = -10;\n    this.currentY = y;\n    this.originalDy = -10;\n    this.maxHeight = this.y - 500;\n    this.width = width;\n    this.height = height;\n    this.friction = 0.4;\n    this.gravity = 9.81; // this.maxHeight = 50;\n\n    this.maxVel = 5;\n    this.color = color;\n    this.moving = false;\n    this.onPlatform = true;\n    this.bindInputs();\n    this.draw();\n  }\n\n  draw() {\n    context.fillStyle = \"red\";\n    context.fillRect(this.x, this.y, this.width, this.height);\n  }\n\n  animate() {\n    if (left) {\n      this.x -= this.dx;\n    } else if (right) {\n      this.x += this.dx;\n    }\n\n    if (this.onPlatform && space) {\n      this.moving = true;\n    }\n\n    if (this.moving) {\n      // this.moving = true;\n      // if (this.y <= this.maxHeight){\n      // this.moving = false;\n      this.dy += this.gravity; // space = false;\n\n      this.moving = false;\n    } else {\n      this.dy += this.friction; // }\n\n      this.y += this.dy;\n    } // else if (!this.onPlatform){\n    //     this.dy += this.gravity * this.friction;\n    //     this.y += this.dy;\n    // }\n    // }\n\n\n    this.draw();\n  }\n\n  bindInputs() {\n    const keyDown = document.addEventListener(\"keydown\", function (event) {\n      if (event.key === \"ArrowRight\" || event.key === \"d\") {\n        right = true;\n      } else if (event.key === \"ArrowLeft\" || event.key === \"a\") {\n        left = true;\n      } else if (event.key === \" \") {\n        space = true;\n      }\n\n      setTimeout(keyDown, 40);\n    });\n    document.addEventListener(\"keyup\", function (event) {\n      if (event.key === \"ArrowRight\" || event.key === \"d\") {\n        right = false;\n      } else if (event.key === \"ArrowLeft\" || event.key === \"a\") {\n        left = false;\n      } else if (event.key === \" \") {\n        space = false;\n      }\n    });\n  }\n\n}\n\nmodule.exports = Player;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9wdWdfdG9vX2ZhdC8uL3NyYy9zY3JpcHRzL3BsYXllci5qcz82NDcxIl0sIm5hbWVzIjpbInJpZ2h0IiwibGVmdCIsInNwYWNlIiwiUGxheWVyIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJkeCIsImR5IiwiY3VycmVudFkiLCJvcmlnaW5hbER5IiwibWF4SGVpZ2h0IiwiZnJpY3Rpb24iLCJncmF2aXR5IiwibWF4VmVsIiwibW92aW5nIiwib25QbGF0Zm9ybSIsImJpbmRJbnB1dHMiLCJkcmF3IiwiY29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiYW5pbWF0ZSIsImtleURvd24iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleSIsInNldFRpbWVvdXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxLQUFKO0FBQ0EsSUFBSUMsSUFBSjtBQUNBLElBQUlDLEtBQUo7O0FBR0EsTUFBTUMsTUFBTixDQUFZO0FBQ1JDLEVBQUFBLFdBQVcsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLEtBQVAsRUFBY0MsTUFBZCxFQUFzQkMsS0FBdEIsRUFBNEI7QUFDbkMsU0FBS0osQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0ksRUFBTCxHQUFVLEVBQVY7QUFDQSxTQUFLQyxFQUFMLEdBQVUsQ0FBQyxFQUFYO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQk4sQ0FBaEI7QUFDQSxTQUFLTyxVQUFMLEdBQWtCLENBQUMsRUFBbkI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQUtSLENBQUwsR0FBUyxHQUExQjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtPLFFBQUwsR0FBZ0IsR0FBaEI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsSUFBZixDQVhtQyxDQVluQzs7QUFDQSxTQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFNBQUtSLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtTLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFNBQUtDLFVBQUw7QUFDQSxTQUFLQyxJQUFMO0FBQ0g7O0FBRURBLEVBQUFBLElBQUksR0FBRTtBQUNGQyxJQUFBQSxPQUFPLENBQUNDLFNBQVIsR0FBb0IsS0FBcEI7QUFDQUQsSUFBQUEsT0FBTyxDQUFDRSxRQUFSLENBQWlCLEtBQUtuQixDQUF0QixFQUF5QixLQUFLQyxDQUE5QixFQUFpQyxLQUFLQyxLQUF0QyxFQUE2QyxLQUFLQyxNQUFsRDtBQUNIOztBQUVEaUIsRUFBQUEsT0FBTyxHQUFFO0FBQ0wsUUFBSXhCLElBQUosRUFBUztBQUNMLFdBQUtJLENBQUwsSUFBVSxLQUFLSyxFQUFmO0FBQ0gsS0FGRCxNQUVPLElBQUlWLEtBQUosRUFBVTtBQUNiLFdBQUtLLENBQUwsSUFBVSxLQUFLSyxFQUFmO0FBQ0g7O0FBQ0QsUUFBSSxLQUFLUyxVQUFMLElBQW1CakIsS0FBdkIsRUFBNkI7QUFDekIsV0FBS2dCLE1BQUwsR0FBYyxJQUFkO0FBQ0g7O0FBQ0csUUFBSSxLQUFLQSxNQUFULEVBQWdCO0FBQ1o7QUFDQTtBQUNJO0FBQ0EsV0FBS1AsRUFBTCxJQUFXLEtBQUtLLE9BQWhCLENBSlEsQ0FLUjs7QUFDQSxXQUFLRSxNQUFMLEdBQWMsS0FBZDtBQUNILEtBUEwsTUFPVztBQUNILFdBQUtQLEVBQUwsSUFBVyxLQUFLSSxRQUFoQixDQURHLENBRVA7O0FBQ0EsV0FBS1QsQ0FBTCxJQUFVLEtBQUtLLEVBQWY7QUFDSCxLQXBCQSxDQXFCRDtBQUNBO0FBQ0E7QUFDQTtBQUNKOzs7QUFDQSxTQUFLVSxJQUFMO0FBQ0g7O0FBRURELEVBQUFBLFVBQVUsR0FBRTtBQUNSLFVBQU1NLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFTQyxLQUFULEVBQWU7QUFDaEUsVUFBR0EsS0FBSyxDQUFDQyxHQUFOLEtBQWMsWUFBZCxJQUE4QkQsS0FBSyxDQUFDQyxHQUFOLEtBQWMsR0FBL0MsRUFBbUQ7QUFDL0M5QixRQUFBQSxLQUFLLEdBQUcsSUFBUjtBQUNILE9BRkQsTUFFTyxJQUFHNkIsS0FBSyxDQUFDQyxHQUFOLEtBQWMsV0FBZCxJQUE2QkQsS0FBSyxDQUFDQyxHQUFOLEtBQWMsR0FBOUMsRUFBa0Q7QUFDckQ3QixRQUFBQSxJQUFJLEdBQUcsSUFBUDtBQUNILE9BRk0sTUFFQSxJQUFHNEIsS0FBSyxDQUFDQyxHQUFOLEtBQWMsR0FBakIsRUFBcUI7QUFDeEI1QixRQUFBQSxLQUFLLEdBQUcsSUFBUjtBQUNIOztBQUNENkIsTUFBQUEsVUFBVSxDQUFDTCxPQUFELEVBQVUsRUFBVixDQUFWO0FBQ0gsS0FUZSxDQUFoQjtBQVdBQyxJQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQVNDLEtBQVQsRUFBZTtBQUM5QyxVQUFHQSxLQUFLLENBQUNDLEdBQU4sS0FBYyxZQUFkLElBQThCRCxLQUFLLENBQUNDLEdBQU4sS0FBYyxHQUEvQyxFQUFtRDtBQUMvQzlCLFFBQUFBLEtBQUssR0FBRyxLQUFSO0FBQ0gsT0FGRCxNQUVPLElBQUc2QixLQUFLLENBQUNDLEdBQU4sS0FBYyxXQUFkLElBQTZCRCxLQUFLLENBQUNDLEdBQU4sS0FBYyxHQUE5QyxFQUFrRDtBQUNyRDdCLFFBQUFBLElBQUksR0FBRyxLQUFQO0FBQ0gsT0FGTSxNQUVBLElBQUc0QixLQUFLLENBQUNDLEdBQU4sS0FBYyxHQUFqQixFQUFzQjtBQUN6QjVCLFFBQUFBLEtBQUssR0FBRyxLQUFSO0FBQ0g7QUFDSixLQVJEO0FBU0g7O0FBN0VPOztBQWdGWjhCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjlCLE1BQWpCIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHJpZ2h0O1xyXG5sZXQgbGVmdDtcclxubGV0IHNwYWNlO1xyXG5cclxuXHJcbmNsYXNzIFBsYXllcntcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yKXtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5keCA9IDE1O1xyXG4gICAgICAgIHRoaXMuZHkgPSAtMTA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50WSA9IHk7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbER5ID0gLTEwO1xyXG4gICAgICAgIHRoaXMubWF4SGVpZ2h0ID0gdGhpcy55IC0gNTAwO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmZyaWN0aW9uID0gMC40O1xyXG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDkuODE7XHJcbiAgICAgICAgLy8gdGhpcy5tYXhIZWlnaHQgPSA1MDtcclxuICAgICAgICB0aGlzLm1heFZlbCA9IDU7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yXHJcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uUGxhdGZvcm0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYmluZElucHV0cygpO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKXtcclxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGUoKXtcclxuICAgICAgICBpZiAobGVmdCl7XHJcbiAgICAgICAgICAgIHRoaXMueCAtPSB0aGlzLmR4O1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLnggKz0gdGhpcy5keDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub25QbGF0Zm9ybSAmJiBzcGFjZSl7XHJcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vdmluZyl7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm1vdmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy55IDw9IHRoaXMubWF4SGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHkgKz0gdGhpcy5ncmF2aXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNwYWNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5keSArPSB0aGlzLmZyaWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuZHk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIC8vIGVsc2UgaWYgKCF0aGlzLm9uUGxhdGZvcm0pe1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5keSArPSB0aGlzLmdyYXZpdHkgKiB0aGlzLmZyaWN0aW9uO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy55ICs9IHRoaXMuZHk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZElucHV0cygpe1xyXG4gICAgICAgIGNvbnN0IGtleURvd24gPSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGlmKGV2ZW50LmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIgfHwgZXZlbnQua2V5ID09PSBcImRcIil7XHJcbiAgICAgICAgICAgICAgICByaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihldmVudC5rZXkgPT09IFwiQXJyb3dMZWZ0XCIgfHwgZXZlbnQua2V5ID09PSBcImFcIil7XHJcbiAgICAgICAgICAgICAgICBsZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGV2ZW50LmtleSA9PT0gXCIgXCIpe1xyXG4gICAgICAgICAgICAgICAgc3BhY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoa2V5RG93biwgNDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBpZihldmVudC5rZXkgPT09IFwiQXJyb3dSaWdodFwiIHx8IGV2ZW50LmtleSA9PT0gXCJkXCIpe1xyXG4gICAgICAgICAgICAgICAgcmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGV2ZW50LmtleSA9PT0gXCJBcnJvd0xlZnRcIiB8fCBldmVudC5rZXkgPT09IFwiYVwiKXtcclxuICAgICAgICAgICAgICAgIGxlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGV2ZW50LmtleSA9PT0gXCIgXCIgKXtcclxuICAgICAgICAgICAgICAgIHNwYWNlID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUGxheWVyOyJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

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