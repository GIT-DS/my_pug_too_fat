let right;
let left;


class Player{
    constructor(x, y, src){
        this.x = x;
        this.y = y;
        this.rev = 1;
        this.dx = 3 * this.rev;
        this.dy = 6;
        this.originalDx = 3
        this.maxDx = 10;
        this.currentY = y;
        this.originalDy = 6;
        this.maxHeight = this.y - 200;
        this.friction = 0.1;
        this.maxVel = 5;
        this.wind = 5;


        this.regKeysDown = (event) => {this.keyDown(event)}
        this.regKeysUp = (event) => {this.keyUp(event)}
        this.revKeysDown = (event) => {this.revKeyDown(event)}
        this.revKeysUp = (event) => {this.revKeyUp(event)}


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

    }

    draw(){
        context.fillStyle = 'rgba(225,225,225,0)'; // clear box
        context.fillRect(this.x, this.y, this.width, this.height);
        
        window.context.drawImage(this.src, this.srcX, this.srcY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth, this.spriteHeight)
        this.animate();
    }
    
    increaseFrame(){
        if (this.timer > 0){
            this.timer -= 1;
        } else{
            this.currentFrame++;
            this.timer = 5;
        }
    }
    
    pugStep(){
        this.increaseFrame();
        this.currentFrame = this.currentFrame % this.totalFrames;
        this.srcX = this.currentFrame * this.spriteWidth;
    }
    
    windEffect(direction){
        if (direction === 'left'){
            this.x -= this.wind
        } else if (direction === 'right'){
            this.x += this.wind
        }
    }


    animate(){
        this.pugStep();

        if (left){

            //sprite direction
            if (this.src.src != "src/scripts/small_rev.png"){
                this.src.src = "src/scripts/small_rev.png";
            }

            //overwriting sprite on reverse
            if (this.rev === -1){
                this.src.src = "src/scripts/small.png"
            }

            //gradual movement
            if (this.dx < this.maxDx){
                this.dx += this.friction;
            }


            this.x -= this.dx * this.rev;
        } else if (right){

            //sprite direction
            if (this.src.src != "src/scripts/small.png"){
                this.src.src = "src/scripts/small.png"
            }

            //overwriting sprite on reverse
            if (this.rev === -1){
                this.src.src = "src/scripts/small_rev.png"
            }

            //gradual movement
            if (this.dx < this.maxDx){
            this.dx += this.friction;
            }


            this.x += this.dx * this.rev;

        } else if (!left || !right){ //resetting velocity on keyUp
            this.dx = this.originalDx;
        } 

        this.dy += this.friction;
        this.y += this.dy;
    }


    //Event Listeners
    bindInputs(){
        let that = this;

        document.addEventListener("keyup", that.regKeysUp)
        document.addEventListener("keydown", that.regKeysDown)
    }
    
    //key handlers
    keyDown(event){
        if(event.key === "ArrowRight" || event.key === "d"){
            right = true;
        } else if(event.key === "ArrowLeft" || event.key === "a"){
            left = true;
        }
    }

    keyUp(event){
        if(event.key === "ArrowRight" || event.key === "d"){
            right = false;
        } else if(event.key === "ArrowLeft" || event.key === "a"){
            left = false;
        }
    }




}

module.exports = Player;