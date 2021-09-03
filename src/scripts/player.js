let right;
let left;
let space;


class Player{
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.dx = 1;
        this.dy = 1;
        this.width = width;
        this.height = height;
        this.maxHeight = 10;
        this.maxVel = 5;
        this.color = color
        this.moving = false;
        this.bindInputs();
        this.draw();
    }

    draw(){
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    animate(){
        // requestAnimationFrame(animate);
        context.clearRect(0,0,window.canvas.width, window.canvas.height);
        if (left){
            this.x -= this.dx;
        } else if (right){
            this.x += this.dx;
        } else if (space){
            if(this.y >= this.maxHeight){
                this.dy = -this.dy;
            }
            this.y += this.dy;
        }
        this.draw();
    }

    bindInputs(){
        document.addEventListener("keydown", function(event){
            if(event.key === "ArrowRight" || event.key === "d"){
                right = true;
            } else if(event.key === "ArrowLeft" || event.key === "a"){
                left = true;
            } else if(event.key === "space"){
                space = true;
            }
        });
    
        document.addEventListener("keyup", function(event){
            if(event.key === "ArrowRight" || event.key === "d"){
                right = false;
            } else if(event.key === "ArrowLeft" || event.key === "a"){
                left = false;
            } else if(event.key === "space"){
                space = false
            }
        })
    }
}

module.exports = Player;