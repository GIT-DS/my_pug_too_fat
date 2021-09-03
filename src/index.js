// const Object = require('./scripts/object.js')
const Player = require('./scripts/player.js')

// input variables


// let objects = [];

let player;



document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    let c = canvas.getContext('2d');
    window.context = c;
    window.canvas = canvas;
    player = new Player(100, canvas.height - 100, 100, 100);
    // if (objects.length < 10){s
    //     console.log('making platforms')
        // addTwoPlatforms()

    
    window.setInterval(drawAll, 20);
    // creating object

    // setting key binds;

    //drawing all loop
    
    // creating player
});
  


// function addTwoPlatforms(){
//     let object = new Object(0,300,100,100,'black')
//     objects.push(object)
//     for(let i = 0; i < 2; i++){
//         let lastObject = objects[objects.length - 1]
//         let x = lastObject.x; // last object's x value 
//         let y = lastObject.y; // last objects's y value
//         let width = lastObject.width; // last object's width
//         let height = lastObject.height;

//         let randX = Math.random()* (x + width) // random starting position based on last objects x and width

//         let newPosArray = lastObject.validPosArray(randX, y, 1, 1) // need to refactor
//         let idx = Math.floor(Math.random()*newPosArray.length) // selecting a random idex in newPosArray
//         let newPos = newPosArray[idx]
//         let randomWidth = Math.random()*100 + difficulty; // need to refactor difficulty

//         let newObject = new Object(newPos[0],new[pos[y]], randomWidth, height)
//         objects.push(newObject);
//     }
// }


function drawAll(){
    // objects.forEach(object => object.draw())

    player.animate();
}