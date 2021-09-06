// const Object = require('./scripts/object.js')
const Player = require('./scripts/player.js')
const Frames = require('./scripts/frame.js')
// const PugSprite = require('./img/pug.png')
// input variables


let objects = [];
let currentFrame = 0;
// let lastFramePlat 
let frames = [];
const backgrounds = [
    'src/img/1.jpg',
    'src/img/2.jpg',
    'src/img/3.jpg',
    'src/img/4.jpg',
    'src/img/5.jpg',
    'src/img/6.jpg',
    'src/img/7.jpg',
    'src/img/8.jpg',
    'src/img/9.jpg',
    'src/img/11.jpg',
    'src/img/12.jpg',
    'src/img/14.jpg',
    'src/img/15.jpg',
    'src/img/16.jpg',
    'src/img/17.jpg',
    'src/img/18.jpg',
    'src/img/19.jpg',
    'src/img/20.jpg',
    'src/img/last.jpg'
]

let backgroundIdx = 0;

let player;
let floor;


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game');
    canvas.width = 1600;
    canvas.height = 1000;
    let c = canvas.getContext('2d');
    window.context = c;
    window.canvas = canvas;
    window.pug = new Image();
    pug.src = "./src/scripts/small.png"
    background = new Image();
    background.src = backgrounds[0]
    player = new Player(300, canvas.height - 500, pug);
    firstFrame = new Frames(0,backgrounds[0]);
    frames.push(firstFrame);
    
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
    window.context.drawImage(background,0,0, canvas.width, 1000)
    if (player.y < 0){
        backgroundIdx += 1
        background.src = backgrounds[backgroundIdx % backgrounds.length]
        let lastFramePlats = getLastFrame(currentFrame).plats;
        let lastPlat = lastFramePlats[lastFramePlats.length - 1];
        currentFrame += 1;
        if (!frames[currentFrame]){
            newFrame = new Frames(currentFrame, lastPlat);
            frames.push(newFrame)
        }
        player.y += canvas.height;
    } else if (player.y > canvas.height){
        backgroundIdx -= 1;
        background.src = backgrounds[backgroundIdx % backgrounds.length]
        currentFrame -= 1;
        player.y = 0;
    }
    frames[currentFrame].plats.forEach(plat => {
        plat.draw()
        objectCollision(player, plat)
    })
    collideSide(player)
    player.animate();
    
}

function getLastFrame(currentFrame){
    return frames[currentFrame];
}


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

function collideSide(player){
    if (player.x + player.width + player.dy > canvas.width){
        player.x = canvas.width - player.width;
        player.dx = player.originalDx;
        player.dx = -player.dx
    }
    if (player.x  + player.dx < 0 ){
        player.x = 0;
        player.dx = player.originalDx
        player.dx = -player.dx
    }

}
