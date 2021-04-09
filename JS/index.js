// background canvas
let bgCanvas        = document.getElementById("bgCanvas"),
    ctxBg           = bgCanvas.getContext("2d");
    bgCanvas.width  = innerWidth;
    bgCanvas.height = innerHeight; 

// let bgImg = new Image();
//     bgImg.onload = function() {
//         ctxBg.drawImage(bgImg, 0, 0);
//         //ctxBg.clearRect(0, 0, canvasWidth, canvasHeight);
//     }
//     bgImg.src = 'Assets/tb.svg';

class Player {
    constructor(color) {
        this.color = color;
        let tankImg = new Image();
        if(color == 'red') {
            tankImg.src = 'Assets/tr.svg';
            this.src = 'Assets/tr.svg';
            this.x = 0;
            this.y = bgCanvas.height/2;
        }
        else {
            tankImg.src = 'Assets/tb.svg';
            this.src = 'Assets/tb.svg';
            this.x = bgCanvas.width - 300;
            this.y = bgCanvas.height/2;
        }
        let posx = this.x, posy = this.y;
        tankImg.onload = function() {
            ctxBg.drawImage(tankImg, posx, posy);
            //console.log(this.src, posx, posy);
        }
    }
}

const playerRed = new Player('red');
const playerBlu = new Player('blu');

console.log(playerRed);
console.log(playerBlu);

// some code
// var red_tank=document.getElementById("red_tank");
// console.log(red_tank)
// red_tank.style="rotate(20deg)";