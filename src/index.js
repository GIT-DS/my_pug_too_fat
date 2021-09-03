const Object = require('./scripts/object.js')
const Player = require('./scripts/player.js')

// input variables


let objects = [];

let player;
let floor;


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    let c = canvas.getContext('2d');
    window.context = c;
    window.canvas = canvas;
    player = new Player(100, canvas.height - 200, 100, 100);
    floor = new Object(0, canvas.height - 50, canvas.width, 50)    
    objects.push(floor)
    
    window.setInterval(drawAll, 20);
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

function objectCollision(player, object){
    if(player.y + player.height >= object.y){
        // player.dy = 0;
        player.y = object.y - player.height;
        // player.dy = 0
        player.dy = player.originalDy;
        player.onPlatform = true;
    } else {
        player.onPlatform = false;
    }
}

function drawAll(){
    window.context.clearRect(0,0, canvas.width, canvas.height)
    player.animate();
    objects.forEach(object => {
        object.draw()
    
        objectCollision(player, object);
    })

}