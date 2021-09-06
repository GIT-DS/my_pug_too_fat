let right;
let left;


class Player{
    constructor(x, y, src){
        this.x = x;
        this.y = y;
        this.dx = 3;
        this.dy = 6;
        this.originalDx = 1
        this.maxDx = 13;
        this.currentY = y;
        this.originalDy = 6;
        this.maxHeight = this.y - 200;
        this.friction = 0.1;
        this.maxVel = 5;
        this.moving = false;
        this.onPlatform = true;
        
        
        
        // image stuff
        this.src = src;
        this.cols = 10;
        this.row = 1;
        this.totalFrames = 10;
        this.currentFrame = 0;
        this.slowFrame = 2;
        this.srcX = 0;
        this.srcY = 0;
        this.spriteWidth = this.src.width / this.cols;
        this.spriteHeight = this.src.height / this.row;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.timer = 5;



        this.bindInputs();
        this.draw();
    }

    draw(){
        context.fillStyle = 'rgba(225,225,225,0)'; // clear box
        // context.fillStyle = 'black'; // clear box
        context.fillRect(this.x, this.y, this.width, this.height);
        
        context.drawImage(this.src, this.srcX, this.srcY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth, this.spriteHeight)
    }
    
    increaseFrame(){
        if (this.timer > 0){
            this.timer -= 1;
        } else{
            this.currentFrame++;
            this.timer = 5;
        }
        // setInterval(this.increaseFrame, 1000);
        // setTimeout(this.increaseFrame, 1000);
    }
    
    pugStep(){
        this.increaseFrame();
        this.currentFrame = this.currentFrame % this.totalFrames;
        this.srcX = this.currentFrame * this.spriteWidth;
    }
    



    animate(){
        
        this.pugStep();

        if (left){
            if (this.src.src != "src/scripts/small_rev.png"){
                this.src.src = "src/scripts/small_rev.png";
            }
            if (this.dx === 0) this.dx = this.originalDx;
            if (this.dx < this.maxDx){
                this.dx += this.friction;
            }
            this.x -= this.dx;
        } else if (right){
            if (this.src.src != "src/scripts/small.png"){
                this.src.src = "src/scripts/small.png"
            }



            if (this.dx < this.maxDx){
            this.dx += this.friction;
            }
            this.x += this.dx;
        } else if (!left || !right){
            this.dx = this.originalDx;
        } else if (!right){
            this.dx = this.originalDx;
        }

        this.dy += this.friction;
        this.y += this.dy;

        this.draw();
    }


    bindInputs(){
        document.addEventListener("keydown", function(event){
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