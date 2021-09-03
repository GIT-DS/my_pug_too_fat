class Util{
    validPosArray(x, y, dx, dy, maxHeight){
        const pos = [];
        for(let i = 1; y > 0; i++){
            x += dx
            if (y === maxHeight){
                dy = -dy;
            }
            y += dy
            pos.push[x, y]
        }
        let mid = Math.ciel(pos.length / 2)
        return pos.slice(mid)
    }
}

module.exports = Util