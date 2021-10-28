let luna = new Image();
luna.src = "./src/loony.png"

class Credits{
    constructor(){
        this.x = 3 * canvas.width / 4
        this.y = canvas.height;
    }

    draw(){
        let spacer = 60;
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

        window.context.fillText("Inspired By:", this.x, this.y + spacer * 0)
        window.context.fillText("Getting Over It", this.x, this.y + spacer * 2)
        window.context.fillText("Jump King", this.x, this.y + spacer * 3)





        window.context.fillText("Special Thanks To:", this.x, this.y + spacer * 7)
        window.context.fillText("David Oh - Y U NO", this.x, this.y + spacer * 9)
        window.context.fillText("Vern Chao - reverse controls idea", this.x, this.y + spacer * 10)
        window.context.fillText("Jimmy Kuang - titanic music idea", this.x, this.y + spacer * 11)
        window.context.fillText("Vincent Hsu - end screen idea", this.x, this.y + spacer * 12)
        window.context.fillText("Melissa Flynn - image debugging", this.x, this.y + spacer * 13)
        window.context.fillText("Zack Barbieri - reverse controls debugging", this.x, this.y + spacer * 14)


        window.context.fillText("Luna - my not so chonky dog", this.x, this.y + spacer * 16)
        window.context.drawImage(luna, this.x - luna.width / 2, this.y + spacer * 17, luna.width, luna.height)

        window.context.fillText("Created By: Darrick Shin", this.x, this.y + spacer * 24.5)

        window.startButton.x = canvas.width / 4 - 150;
        window.startButton.y = (canvas.height / 2) + 20
        window.startButton.draw();
        window.context.font = "30px Arial";
        window.context.fillStyle = "black"
        window.context.textAlign = "center";
        window.context.fillText("Enter to Start Over", canvas.width / 4 , canvas.height /2 + 78)
        this.y--;
    }

}

module.exports = Credits;