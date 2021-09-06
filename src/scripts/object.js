class Object {
    constructor(x, y, width, height, color, visible = true){
        this.x = x;
        this.y =  y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.visible = visible;
        this.leftCorner = [this.x, this.y]
        this.rightCorner = [this.x + this.width, this.y]
        this.draw();
    }

    draw (){
        context.fillStyle = this.color;
        context.lineWidth = 5;
        context.strokeStyle = "black"
        // context.shadowColor = 'blue';
        // context.shadowBlur = 20;
        context.fillRect(this.x, this.y, this.width, this.height);   
        context.strokeRect(this.x, this.y, this.width, this.height);
    }

    validPosArray(x, y, dx, dy, maxHeight){
        const pos = [];
        x += dx
        y += dy
        for(let i = 1; y > 0; i++){
            x += dx
            if (y >= maxHeight){
                dy = -dy;
            }
            y += dy
            if(y > maxHeight || y < 0){
                continue
            }

            if(x < 0 || x > 600){ // ensuring platform is in the map x axis;
                continue
            }

            if(y < 5){ // ensuring platform is at least 5 higher than the previous
                continue;
            }

            pos.push([x, y])
        }
        let mid = Math.floor(pos.length / 2)
        return pos.slice(mid)
    }


}

module.exports = Object;