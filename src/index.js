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
    player = new Player(300, canvas.height - 50, 100, 100);
    floor = new Object(0, canvas.height - 50, canvas.width, 50);
    plat1 = new Object( 100, canvas.height - 200, 100, 50);    
    plat2 = new Object( 500, canvas.height - 400, 100, 50);    
    plat3 = new Object( 600, canvas.height - 600, 100, 50);    
    objects.push(floor)
    objects.push(plat1)
    objects.push(plat2)
    objects.push(plat3)
    
    window.setInterval(drawAll, 20);
});
  



function objectCollision(player, object){
    // console.log(inRangeX(player, object))

    // if (collisionTop(player, object) && inRangeX(player, object)){
    //     if (collisionRight(player,object)){
    if( inRangeX(player, object) && inRangeY(player, object)){
        // player.dy = 0;
        player.dy = player.originalDy;
        player.y = object.y - player.height;
        // player.dy = 0
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

// function collisionRight(player, object){
//     if (player.x <= object.x + object.width ){
//         return true;
//     }
// }



function collisionTop(player, object){
    if (player.y + player.height >= object.y){
        return true;
    }
    return false;
}

// function collisionBot(player, object){
//     if (player.y <= object.height + object.y){
//         return true;
//     }
//     return false;
// }



// function collision(player, object){
//     if (player.x <= object.x + object.width || 
//         player.x + player.width >= object.x)
// }

function inRangeX(player, object){
    let playerStart = player.x;
    let playerEnd = player.x + player.width;
    let objectStart = object.x;
    let objectEnd = object.x + object.width;

    // if (playerStart >= objectStart && playerEnd >= objectEnd && 
    //     playerStart <= objectEnd && playerEnd >= objectStart
    //     ||
    //     playerEnd >= objectStart && playerEnd <= objectEnd){
    //     return true;
    // }

    if ((playerStart < objectStart && playerStart < objectEnd &&
        playerEnd < objectStart && playerEnd < objectEnd) || 
        (playerStart > objectStart && playerStart > objectEnd &&
        playerEnd > objectStart && playerEnd > objectEnd)){
            return false;
        }
    return true;
}

function inRangeY(player, object){
    let playerStart = player.y;
    let playerEnd = player.y + player.height;
    let objectStart = object.y;
    let objectEnd = object.y + object.height;

    // if (playerStart >= objectStart && playerEnd >= objectEnd && 
    //     playerStart <= objectEnd && playerEnd >= objectStart
    //     ||
    //     playerEnd >= objectStart && playerEnd <= objectEnd){
    //     return true;
    // }

    if ((playerStart < objectStart && playerStart < objectEnd &&
        playerEnd < objectStart && playerEnd < objectEnd) || 
        (playerStart > objectStart && playerStart > objectEnd &&
        playerEnd > objectStart && playerEnd > objectEnd)){
            return false;
        }
    return true;
}




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