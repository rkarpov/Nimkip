var sprites = new Image();
sprites.src = './assets/images/pikmin_sprite_sheet.png'

sprites.onload = () => init();
var canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 700;
var ctx = canvas.getContext('2d');


// NIMKIP PLAYER CLASS

const scale = 1.5;
let width = 16;
let height = 40;
const scaledWidth = scale * width;
const scaledHeight = scale * height;


// function draw(ctx) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     this.allObjects().forEach((object) => {
//         ctx.drawImage
//     });
//   }


function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.drawImage(sprites, 22, 630, 61, 60, 100, 400, 100, 100); // bulborb
    ctx.drawImage(sprites, frameX, frameY, width, height, canvasX, canvasY, scaledWidth, scaledHeight); // Player
    ctx.drawImage(sprites, 342, 161, 18, 12, deltaX, deltaY - 5, 18 * 1.5, 12 * 1.5); // headFlower
}

let stepDown = [12, 39, 67]
let currentLoopIndex = 0;
let frameCount = 0;
let dir = 15

function step() {
    frameCount++;
    if (frameCount < 15) {
        window.requestAnimationFrame(step);
        return;
    }
    frameCount = 0;

    drawFrame(stepDown[currentLoopIndex], dir, deltaX, deltaY);
    currentLoopIndex++;
    if (currentLoopIndex >= stepDown.length) {
        currentLoopIndex = 0;
    }
}

function init() {
    window.requestAnimationFrame(step);
    window.requestAnimationFrame(bulStep);
}

window.addEventListener("keydown", moveSomething, false);

var deltaX = 0;
var deltaY = 0;

function moveSomething(e) {
    switch (e.keyCode) {
        case 37: // left
            deltaX -= 5;
            break;
        case 38: // up
            deltaY -= 5;
            dir = 101
            stepDown = [12, 39, 67]
            break;
        case 39: // right
            deltaX += 5;
            dir = 58
            stepDown = [20, 41, 65]
            break;
        case 40: // down
            deltaY += 5;
            dir = 15
            stepDown =[12, 39, 67]
            break;    }
    init();
}









//  BULBORB CLASS
// class Bulborb {
//     constructor() {
//         this.scale = 1.25;
//         this.width = 61;
//         this.height = 60;
//         this.ScaledWidth = scale * width;
//         this.ScaledHeight = scale * height;
//         this.step = [22, 87, 151, 216];
//         this.loopIndex = 0;
//         this.frameCount = 0;
//     }

//     drawBulborb(frameX, frameY, canvasX, canvasY) {
//         ctx.drawImage(sprites, frameX, frameY, width, height, canvasX, canvasY, scaledWidth, scaledHeight);
//         ctx.drawImage(sprites, 342, 161, 18, 12, canvasX, canvasY - 5, 0, 0);
//     }

//     bulStep() {
//         bulFrameCount++;
//         if (frameCount < 15) {
//             window.requestAnimationFrame(bulStep);
//             return;
//         }
//         frameCount = 0;
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         drawBulborb(bulstep[bulLoopIndex], 630, bulX, bulY);

//         bulLoopIndex++;
//         if (bulLoopIndex >= bulstep.length) {
//             bulLoopIndex = 0;
//         }
//         window.requestAnimationFrame(bulStep);
//     }

// }

const bulScale = 1.5;
const bulWidth = 61;
const bulHeight = 60;
const bulScaledWidth = bulScale * bulWidth;
const bulScaledHeight = bulScale * bulHeight;

// function drawBulFrame(frameX, frameY, canvasX, canvasY) {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     // ctx.drawImage(sprites, 22, 630, 61, 60, 100, 400, 100, 100); // bulborb
//     ctx.drawImage(sprites, frameX, frameY, bulWidth, bulHeight, canvasX, canvasY, bulScaledWidth, bulScaledHeight); // Player
//     // ctx.drawImage(sprites, 342, 161, 18, 12, deltaX, deltaY - 5, 18 * 1.5, 12 * 1.5); // headFlower
// }

function drawBulborb(frameX, frameY, canvasX, canvasY) {
    // ctx.drawImage(sprites, frameX, frameY, width, height, canvasX, canvasY, bulScaledWidth, bulScaledHeight);
    // ctx.drawImage(sprites, 342, 161, 18, 12, canvasX, canvasY - 5, 0, 0);
    
    ctx.drawImage(sprites, frameX, frameY, 61, 60, canvasX, canvasY, bulScaledWidth, bulScaledHeight); // bulborb

}

var bulX = 100;
var bulY = 400;

const bulstep = [22, 87, 151, 216]
let bulLoopIndex = 0;
let bulFrameCount = 0;

function bulStep() {
    bulFrameCount++;
    bulX += 1
    if (bulFrameCount < 15) {
        window.requestAnimationFrame(bulStep);
        return;
    }
    bulFrameCount = 0;
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBulborb(bulstep[bulLoopIndex], 630, bulX, bulY);
  
    bulLoopIndex++;
    if (bulLoopIndex >= bulstep.length) {
        bulLoopIndex = 0;
    }
    window.requestAnimationFrame(bulStep);
}
