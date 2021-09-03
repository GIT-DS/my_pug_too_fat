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
        context.fillStyle = "black";
        context.fillRect(this.x, this.y, this.width, this.height);   
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
            pos.push([x, y])
        }
        let mid = Math.floor(pos.length / 2)
        return pos.slice(mid)
    }


}

module.exports = Object;