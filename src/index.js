// const Object = require('./scripts/object.js')
const Player = require('./scripts/player.js')
const Frames = require('./scripts/frame.js')
// input variables


let objects = [];
let currentFrame = 0;
// let lastFramePlat 
let frames = [];

let player;
let floor;


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    let c = canvas.getContext('2d');
    window.context = c;
    window.canvas = canvas;
    player = new Player(300, canvas.height - 500, 200, 100);
    firstFrame = new Frames(0);
    frames.push(firstFrame);
    // floor = new Object(0, canvas.height - 50, canvas.width, 50, "black", );
    // plat1 = new Object( 100, canvas.height - 100, 100, 10, "black");     
    
    
    
    // objects.push(floor);
    // objects.push(plat1);
    // addPlatform();
    // let lastObject = objects[objects.length - 1]
    // console.log(lastObject)
    // if(player.y + player.height <= objects[objects.length - 1].y){
    //     setInterval(addPlatform(), 5000);
    // }
    
    window.setInterval(drawAll, 10);
});
  



function objectCollision(player, object){
    if( inRangeY(player, object)){
        // player.dx = -player.dx
        if (inRangeX(player, object)){
            player.dy = -player.originalDy;
        }
    }

}

function drawAll(){
    window.context.clearRect(0,0, canvas.width, canvas.height)
    if (player.y < 0){
        let lastFramePlats = getLastFrame(currentFrame).plats;
        let lastPlat = lastFramePlats[lastFramePlats.length - 1];
        currentFrame += 1;
        newFrame = new Frames(currentFrame, lastPlat);
        frames.push(newFrame)

        player.y += canvas.height;
    }
    if (player.y > canvas.height){
        currentFrame -= 1;
        // addPlatform()
        player.y = 0;
    }
    frames[currentFrame].plats.forEach(plat => {
        plat.draw()
        objectCollision(player, plat)
    })
    player.animate();
    // objects.forEach(object => {
    //     if (object.y < 0){
    //         object.y += canvas.height;
    //     }
    //     object.draw()
        
    //     objectCollision(player, object);
    // })
    
}

function getLastFrame(curFrameNum){
    console.log(frames);
    return frames[currentFrame];
}




// function collisionTop(player, object){
//     let playerStart = player.y;
//     let playerEnd = player.y + player.height;
//     let objectStart = object.y;
//     let objectEnd = object.y + object.height;
//     if (playerEnd >= objectStart && objectStart >= playerStart){
        
//         return true;
//     }
//     return false;
// }


// function collisionBot(player, object){
//     let playerStart = player.y;
//     let objectEnd = object.y + object.height;
//     if (playerStart < objectEnd){
//         return true;
//     }
//     return false;
// }



// function collideSide(player, object){
//     let playerStart = player.x;
//     let playerEnd = player.x + player.width;
//     let objectStart = object.x;
//     let objectEnd = object.x + object.width;
//     let distanceRight = objectStart - playerStart
//     if (distanceRight <= 0){
//         return true;
//     }
//     return false;
// }

function inRangeX(player, object){
    let playerStart = player.x;
    let playerEnd = player.x + player.width;
    let objectStart = object.x;
    let objectEnd = object.x + object.width;
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

    if ((playerStart < objectStart && playerStart < objectEnd &&
        playerEnd < objectStart && playerEnd < objectEnd) || 
        (playerStart > objectStart && playerStart > objectEnd &&
        playerEnd > objectStart && playerEnd > objectEnd)){
            return false;
        }
    return true;
}




// function addPlatform(){
//     for(let i = 0; i < Math.floor(canvas.height / (100 + 10)); i++){
//         let lastObject = objects[objects.length - 1]

//         let distance = Math.random()*500;
//         let rand = Math.random() < 0.5 ? -1 : 1;
//         let x = (lastObject.x + distance) * rand;
//         if (x >= canvas.width){
//             x = canvas.width - (x - canvas.width);
//         } else if (lastObject.x + lastObject.width < 0 ){
//             x = 100 + x;
//         }
//         let y = lastObject.y - 100;
//         let newObj = new Object(x, y, 100, 10, "black")
//         objects.push(newObj);
//     }
// }