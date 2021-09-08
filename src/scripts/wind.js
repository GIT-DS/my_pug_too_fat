const WindCircles = require('./windCircles.js')

class Wind{
    constructor(){
        this.time = 3000;
        this.circles = [];
        this.timer = 500;
        this.state = 'right';
        this.makeCircles();

    }

    draw(){
        this.circles.forEach(circle => circle.draw());
        if (this.timer < 0){
            this.changeState();
            this.timer = 500;
        } else {
            this.timer--;
        }
        this.collision();
    }

    makeCircles(){
        for(let i = 0; i < 10; i++){
            let randomX = Math.random()*window.canvas.width;
            let randomY = Math.random()*window.canvas.height;
            let randomDx = Math.random()* 10 + 10;
            let randomRadius = Math.random()*5 + 2;
            let newCircle = new WindCircles(randomX, randomY, randomDx, randomRadius)
            this.circles.push(newCircle);
        }
    }

    changeState(){
        if(this.state === "right"){
            this.state = "left"
        } else if (this.state === "left"){
            this.state = "right"
        }

        this.circles.forEach(circle => circle.dx = -circle.dx)
    
    }

    collision(){
        this.circles.forEach(circle => {
            if (circle.x > canvas.width + circle.radius){
                circle.x = -circle.radius;
            } else if (circle.x < -circle.radius){
                circle.x = canvas.width + circle.radius
            }
        })
    }
}

module.exports = Wind;