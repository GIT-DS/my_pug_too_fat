//imports
const Player = require('./scripts/player.js')
const Frames = require('./scripts/frame.js')
const Object = require('./scripts/object.js');
const Wind = require('./scripts/wind.js');
const Credits = require('./scripts/credits.js')


//sprite
let pug = new Image();
pug.src = "./src/scripts/small.png";
let player;

let players = [];

pug.onload = ()=>{
    if (players.length != 1){
        player = new Player(300, canvas.height - 500, pug);
        players.push(player)
    }
}


let winnerBackground = new Image();
winnerBackground.src = "./src/img/winnerBackground.jpg"

//audio
let vol = new Image();
vol.src = "src/volOnSmall.png"


// reverse controls indicator
const reverse = new Image();
reverse.src = "./src/reverse.png"
let revWidth = reverse.width / 6
let revHeight = reverse.height / 6

//variables
let wind;
let muted = false;
let falls = 0;

let start = true;
let game = false;
let end = false;



const quotes =[
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit – Aristotle",
    "Life must be understood backward. But it must be lived forward – Søren Kierkegaard",
    "I think therefore I am – René Descartes",
    "The greater the difficulty, the more glory in surmounting it – Epicurus",
    "Perseverance is not a long race; it is many short races one after the other - Walter Elliot",
    "By perseverance the snail reached the ark - Charles Spurgeon",
    "With pride, there are many curses. With humility, there come many blessings - Erza Taft Benson",
    "It's not what you look at that matters, it's what you see - Henry David Thoreau",
    "LOL : ^ ) - Darrick Shin",
    "Omae wa mo shinderu - Kenshiro",
    "Whatever you lose, you'll find it again. But what you throw away you'll never get back - Kenshin Himura",
    "The world isn’t perfect. But it’s there for us, doing the best it can….that’s what makes it so damn beautiful - Roy Mustang",
    "People, who can’t throw something important away, can never hope to change anything - Armin Arlert",
    "Forgetting is like a wound. The wound may heal, but it has already left a scar - Monkey D. Luffy",
]

let quotesIdx = Math.floor(Math.random() * quotes.length);

//background stuff
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

const startBG = new Image()
startBG.src = "./src/pugCookie.png"


let background = new Image();
background.src = backgrounds[0]
let backgroundIdx = 0;

//frame tracker
let currentFrame = 0;
let frames = [];



document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game');
    const header = document.getElementById('header')

    canvas.width = window.innerWidth * 0.64;
    canvas.height = window.innerHeight * 0.64 - header.offsetHeight;
    let c = canvas.getContext('2d');
    window.context = c;
    window.canvas = canvas;
    
    firstFrame = new Frames(0);
    frames.push(firstFrame);
    wind = new Wind();

    credits = new Credits();
    let reverse = new Image();
    reverse.src = "src/reverse.png"

    window.titanic = new Audio('src/titanic.mp3')
    window.titanic.volume = 0.1;
    window.windSound = new Audio('src/wind.mp3')
    window.windSound.volume = 0.1;
    window.epicMusic = new Audio('src/alexander-nakarada-superepic.mp3')
    window.epicMusic.volume = 0.05;
    window.endMusic = new Audio('src/shooting_stars.mp3')
    window.endMusic.volume = 0.05;
    window.volumeButton = new Object(canvas.width - 95, 30, 70, 55, "white")
    
    

    let mouseEvent = (event) => musicEventHandler(event)
    let startEvent = (event) => startEventHandler(event)
    window.canvas.addEventListener("click", startEvent, false)
    window.canvas.addEventListener("click", mouseEvent, false)

    // window.titatic.addEventListener('ended', e => window.epicMusic.play());

    window.setInterval(animate, 10);

});


function startEventHandler(event){

    if (mouseCollision(event, window.startButton)){
        start = false;
        game = true;
        end = false;
    }
}

function musicEventHandler(event){


    if (mouseCollision(event, window.volumeButton)){
        if (muted === true){
            vol.src = "src/volOnSmall.png"
            window.epicMusic.muted = false;
            window.windSound.muted = false;
            window.titanic.muted = false;
            window.endMusic.muted = false;
            muted = false;
        } else {
            vol.src = "src/volOffSmall.png"
            window.epicMusic.muted = true;
            window.windSound.muted = true;
            window.titanic.muted = true;
            window.endMusic.muted = true;
            muted = true;
        }
    }
}

function mouseCollision(event, object){
    let domRect = window.canvas.getBoundingClientRect();
    let mouseX = event.clientX - domRect.x;
    let mouseY = event.clientY - domRect.y;




    if (mouseY < object.y + object.height && mouseX > object.x &&
        mouseY > object.y && mouseX < object.x + object.width ){
        return true;
    }
    return false;
}


function objectCollision(player, object){
    if( inRangeY(player, object)){
        if (inRangeX(player, object)){
            player.dy = -player.originalDy;
        }
    }
    
}

function animate(){





    if (start === true){
        window.context.drawImage(startBG, 0, 0, canvas.width, canvas.height)
        
        window.context.fillStyle = 'rgba(225,225,225,0.1)'
        window.context.fillRect(0,0,canvas.width, 170)
        window.context.fillStyle = "black"
        window.context.fillText("Hello! Welcome to my fun little game. My pug is too fat. Help it exercise by reaching the top.", canvas.width/ 2,50)
        window.context.fillText("Watch out for some 'fun' little surprises along the way ;)", canvas.width/ 2, 90)
        window.context.fillText("If you fall, you might fall all the way to the bottom, but that's part of the fun right?", canvas.width/ 2, 130)
        

        
        window.startButton = new Object(canvas.width/2 - 177, canvas.height - 200, 300, 100, "White")
        window.startButton.draw();
        window.context.font = "30px Arial";
        window.context.fillStyle = "black"
        window.context.textAlign = "center";
        window.context.fillText("Start", canvas.width / 2 - 30, canvas.height - 150 + 13)
    } else if (game === true){

        // reset on replay
        if (player.reseted === true) {
            player.reseted = false
            player.reset();
            currentFrame = 0;
            frames = []
            firstFrame = new Frames(0);
            frames.push(firstFrame);
            backgroundIdx = 0;
            falls = 0;
            window.epicMusic.currentTime = 0;
        }
        window.endMusic.pause();
        window.endMusic.currentTime = 0;
        window.epicMusic.play();
        window.context.clearRect(0,0, canvas.width, canvas.height)

        window.context.font = "30px Arial";
        window.context.drawImage(background,0,0, canvas.width, canvas.height)

        if (player.y < 0){
            backgroundIdx += 1
            if (backgroundIdx === backgrounds.length - 1){
                game = false;
                end = true;
                return;
            }

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
            quotesIdx++;
            player.y = 0;
        }
        frames[currentFrame].plats.forEach(plat => {
            plat.draw()
            objectCollision(player, plat)
            
        })
        
        // wind
        if( currentFrame != 0 && currentFrame % 6 === 0 || currentFrame === 20){
            window.epicMusic.pause();
            wind.draw();
            window.windSound.play();
            player.windEffect(wind.state);
        } else {
            window.windSound.pause();
        }

        // conditional for reversing directions;
        if(currentFrame != 0 && currentFrame % 4 === 0){
            window.context.globalAlpha = 0.5;
            window.context.drawImage(reverse, 50, 80, revWidth, revHeight)
            window.context.globalAlpha = 1;

            player.rev = -1;
        } else {
            player.rev = 1
        }


        //quotes
        if(currentFrame === 0){
            let quote = quotes[quotesIdx % quotes.length]
            window.context.StrokeStyle = "black"
            // window.context.lineWidth = 8;
            window.context.textAlign = "center"
            window.context.strokeText(quote, canvas.width/2, canvas.height - 44)
            window.context.fillStyle = "white"
            window.context.textAlign = "center"
            window.context.fillText(quote, canvas.width/2,  canvas.height - 44)
        }



        collideSide(player)

        //fall counter & troll music && remapping first screen background.
        if(player.dy > 25) {
            window.epicMusic.volume = 0;
            // window.epicMusic.pause();
            window.titanic.currentTime = 2;
            window.titanic.play();
            
            falls++;
            if (backgrounds[0] != "src/img/yuno.jpg") backgrounds[0] = "src/img/yuno.jpg"
        }

        window.titanic.onended = () => {
            window.epicMusic.currentTime = 0;
            window.epicMusic.play();
            if (muted === false) window.epicMusic.volume = 0.05;
        }

        window.context.textAlign = "left"
        window.context.fillText("Fall Distance: ", 10, 50)
        window.context.fillText(falls, 200, 50)
        

        player.draw();
    } else if (end === true){

        player.reseted = true;

        window.titanic.pause();
        window.epicMusic.pause();
        window.endMusic.play();

        window.context.clearRect(0, 0, canvas.width, canvas.height)
        
        window.context.drawImage(winnerBackground, 0, 0, canvas.width, canvas.height)

        sideWrap(player)
        collideTop(player)
        player.friction = 0;

        credits.draw();

        
        player.draw();
    }


    window.volumeButton.draw();
    window.context.drawImage(vol, canvas.width - vol.width - 35, vol.height, vol.width, vol.height)
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
    if (player.x + player.width + player.dx > canvas.width){
        player.x = canvas.width - player.width;
        player.dx = -player.dx
    }
    if (player.x  + player.dx < 0 ){
        player.x = 0;
        player.dx = -player.dx 
    }

}

function collideTop(player){
    if (player.y + player.dy < 0 || player.y + player.dy > canvas.height){
        player.dy = -player.dy;
    }
}

function sideWrap(player){
    if (player.x + player.width > canvas.width + 50){
        player.x = -player.width
    } else if (player.x < -player.width){
        player.x = canvas.width - player.width;
    }
}