let right;
let left;
let space;


class Player{
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.dx = 15;
        this.dy = -10;
        this.currentY = y;
        this.originalDy = -10;
        this.maxHeight = this.y - 500;
        this.width = width;
        this.height = height;
        this.friction = 0.4;
        this.gravity = 9.81;
        // this.maxHeight = 50;
        this.maxVel = 5;
        this.color = color
        this.moving = false;
        this.onPlatform = true;
        this.bindInputs();
        this.draw();
    }

    draw(){
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    animate(){
        if (left){
            this.x -= this.dx;
        } else if (right){
            this.x += this.dx;
        }
        if (this.onPlatform && space){
            this.moving = true;
        }
            if (this.moving){
                // this.moving = true;
                // if (this.y <= this.maxHeight){
                    // this.moving = false;
                    this.dy += this.gravity;
                    // space = false;
                    this.moving = false;
                } else {
                    this.dy += this.friction;
                // }
                this.y += this.dy;
            } 
            // else if (!this.onPlatform){
            //     this.dy += this.gravity * this.friction;
            //     this.y += this.dy;
            // }
        // }
        this.draw();
    }

    bindInputs(){
        const keyDown = document.addEventListener("keydown", function(event){
            if(event.key === "ArrowRight" || event.key === "d"){
                right = true;
            } else if(event.key === "ArrowLeft" || event.key === "a"){
                left = true;
            } else if(event.key === " "){
                space = true;
            }
            setTimeout(keyDown, 40);
        });

        document.addEventListener("keyup", function(event){
            if(event.key === "ArrowRight" || event.key === "d"){
                right = false;
            } else if(event.key === "ArrowLeft" || event.key === "a"){
                left = false;
            } else if(event.key === " " ){
                space = false
            }
        })
    }
}

module.exports = Player;