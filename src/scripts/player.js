let right;
let left;
let space;


class Player{
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.dx = 1;
        this.dy = 6;
        this.originalDx = 1
        this.maxDx = 3;
        this.currentY = y;
        this.originalDy = 6;
        this.maxHeight = this.y - 200;
        this.width = width;
        this.height = height;
        this.friction = 0.1;
        this.gravity = 0.1;
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
            if (this.dx === 0) this.dx = this.originalDx;
            if (this.dx < this.maxDx){
                this.dx += this.friction;
            }
            this.x -= this.dx;
        } else if (right){
            if (this.dx < this.maxDx){
            this.dx += this.friction;
            }
            this.x += this.dx;
        } else if (!left || !right){
            this.dx = this.originalDx;
        } else if (!right){
            this.dx = this.originalDx;
        }
        
                // this.moving = true;
                // if (this.y <= this.maxHeight){
                    // this.moving = false;
                    // this.dy *= -this.dy + this.gravity;
                    // space = false;
                    // this.moving = false;
                // } else {
                this.dy += this.friction;
                // 
                this.y += this.dy;
            // } 
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
            }
        });

        document.addEventListener("keyup", function(event){
            if(event.key === "ArrowRight" || event.key === "d"){
                right = false;
            } else if(event.key === "ArrowLeft" || event.key === "a"){
                left = false;
            }
        })
    }
}

module.exports = Player;