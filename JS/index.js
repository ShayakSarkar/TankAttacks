// background canvas
let bgCanvas     = document.getElementById("bgCanvas"),
    ctxBg        = bgCanvas.getContext("2d");
    canvasWidth  = bgCanvas.width;
    canvasHeight = bgCanvas.height; 

let bgImg = new Image();
    bgImg.onload = function() {
        ctxBg.drawImage(bgImg, 0, 0);
    }
    bgImg.src = 'Assets/Sand.png';
//console.log(typeof(bgImg));

// some code
// var red_tank=document.getElementById("red_tank");
// console.log(red_tank)
// red_tank.style="rotate(20deg)";