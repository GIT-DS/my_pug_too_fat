const WindCircles = require('./windCircles.js')

class Wind{
    constructor(){
        this.state = 'left';
        this.time = 3000;
        this.circles = [];
        this.timer = 5;
    }

    draw(){
        this.circles.forEach(circle => circle.draw());
        if (this.timer === 0){
            this.timer++;
            this.changeState;
        } else if (this.timer === 5){
            this.timer--;
        }
        
    }

    makeCircles(){
        for(let i = 0; i < 10; i++){
            let randomX = Math.random()*window.canvas.width;
            let randomY = Math.random()*window.canvas.height;
            let randomDx = Math.random()* 10;
            let randomRadius = Math.random()*10 + 5;
            let newCircle = new WindCircles(randomX, randomY, randomDx, randomRadius)
            this.circles.push(newCircle);
        }
    }

    changeState(){
        if (this.state === 'left'){
            this.state = 'right';
        } else if (this.state === 'right'){
            this.state = 'left';
            
        }
        this.circles.forEach(circle => circle.dx = -circle.dx)
    }
}

module.exports = Wind;