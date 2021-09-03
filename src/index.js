const Object = require('./scripts/object.js')
const Player = require('./scripts/player.js')

// input variables
let right;
let left;

document.addEventListener("DOMContentLoaded", () => {
    // Your code here
    const canvas = document.getElementById('game');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    let c = canvas.getContext('2d');
    window.context = c;

    document.setInterval(drawAll, interval);
    // creating object
    let object = new Object(0,0,100,100,'black')

    // creating player
    let player = new Player(100, 100, 100, 100)
});
  
function bindInputs(){
    document.addEventListener("keydown", function(event){
        if(event.key === "ArrowRight" || event.key === "d"){
            right = true;
        } else if(event.key === "Arrowleft" || event.key === "a"){
            left = true;
        }
    });

    document.addEventListener("keyup", function(event){
        if(event.key === "ArrowRight" || event.key === "d"){
            right = false;
        } else if(event.key === "Arrowleft" || event.key === "a"){
            left = false;
        }
    })
}

function drawAll(){
    
}