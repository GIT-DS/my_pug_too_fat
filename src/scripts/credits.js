let luna = new Image();
luna.src = "./src/loony.png"

class Credits{
    constructor(){
        this.x = 3 * canvas.width / 4
        this.y = canvas.height;
    }

    draw(){

        window.context.font = "100px Arial";
        window.context.fillStyle = "black"
        window.context.textAlign = "center";
        window.context.fillText("You did it!!", canvas.width / 4 - 1, canvas.height /2 - 100 + 1)


        window.context.fillStyle = "white"
        window.context.textAlign = "center";
        window.context.fillText("You did it!!", canvas.width / 4, canvas.height /2 - 100)


        window.context.font = "50px Arial"
        window.context.fillStyle = "white"
        window.context.textAlight = "center"
        window.context.fillText("Special Thanks To:", this.x, this.y)
        window.context.fillText("Vern Chao - reverse controlls idea", this.x, this.y + 120)
        window.context.fillText("Jimmy Kuang - titanic music idea", this.x, this.y + 180)
        window.context.fillText("Vincent Hsu - end screen idea", this.x, this.y + 240)


        window.context.fillText("Luna - my not so chonky dog", this.x, this.y + 360)
        window.context.drawImage(luna, this.x - luna.width / 2, this.y + 420, luna.width, luna.height)

        window.context.fillText("Created By: Darrick Shin", this.x, this.y + 920)

        window.startButton.x = canvas.width / 4 - 150;
        window.startButton.y = (canvas.height / 2) + 20
        window.startButton.draw();
        window.context.font = "30px Arial";
        window.context.fillStyle = "black"
        window.context.textAlign = "center";
        window.context.fillText("Start Over", canvas.width / 4 , canvas.height /2 + 78)

        this.y--;
    }

}

module.exports = Credits;