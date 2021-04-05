// background canvas
let bgCanvas     = document.getElementById("bgCanvas"),
    ctxBg        = bgCanvas.getContext("2d");
    canvasWidth  = bgCanvas.width;
    canvasHeight = bgCanvas.height; 

let bgImg = "./Assets/Grass.png";
    ctxBg.drawImage(bgImg, canvasWidth, canvasHeight);

// some code
// var red_tank=document.getElementById("red_tank");
// console.log(red_tank)
// red_tank.style="rotate(20deg)";