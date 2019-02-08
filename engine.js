console.log(canvas);

var sprites = new Image();
sprites.src = './assets/images/pikmin_sprite_sheet.png'

sprites.onload = () => init();
var canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 700;
var ctx = canvas.getContext('2d');

const scale = 1.5;
const width = 16;
const height = 39;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

// const init = () => {
//     // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
//     ctx.drawImage(sprites, 12, 14, width, height, 0, 0, scaledWidth, scaledHeight);
//     ctx.drawImage(sprites, 39, 15, width, height, scaledWidth, 0, scaledWidth, scaledHeight);
//     ctx.drawImage(sprites, 67, 14, width, height, scaledWidth * 2, 0, scaledWidth, scaledHeight);
//     // ctx.drawImage(sprites, 20, 58, width, height, scaledWidth, 0, scaledWidth, scaledHeight);
//     // ctx.drawImage(sprites, 14, 101, width, height, scaledWidth * 2, 0, scaledWidth, scaledHeight);
// }

function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(sprites, frameX, frameY, width, height, canvasX, canvasY, scaledWidth, scaledHeight);
}
        
const init = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

        // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        // drawFrame(12, 14, 0, 0);
    drawFrame(12, 14, deltaX, deltaY);
        // drawFrame(39, 15, scaledWidth, 0);
        // drawFrame(12, 14, scaledWidth * 2, 0);
        // drawFrame(67, 14, scaledWidth * 3, 0);
        // drawFrame(12, 14, scaledWidth, 14);
}



window.addEventListener("keydown", moveSomething, false);

var deltaX = 0;
var deltaY = 0;


// function drawTriangle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    // context.beginPath();
    // context.moveTo(200 + deltaX, 100 + deltaY);
    // context.lineTo(170 + deltaX, 150 + deltaY);
    // context.lineTo(230 + deltaX, 150 + deltaY);
    // context.closePath();
    
    // // the outline
    // context.lineWidth = 10;
    // context.strokeStyle = "rgba(102, 102, 102, 1)";
    // context.stroke();
    
    // // the fill color
    // context.fillStyle = "rgba(255, 204, 0, 1)";
    // context.fill();
// }

function moveSomething(e) {
    switch (e.keyCode) {
        case 37:
            deltaX -= 10;
            break;
        case 38:
            deltaY -= 10;
            break;
        case 39:
            deltaX += 10;
            break;
        case 40:
            deltaY += 10;
            break;
    }
    init();
}














// window.requestAnimationFrame(step);

// function step() {
//     // do something
//     window.requestAnimationFrame(step);
// }

// ctx.clearRect(0, 0, canvas.width, canvas.height);
// drawFrame(0, 0, 0, 0);
// repeat for each frame
            
// const cycleLoop = [0, 1, 0, 2];
// let currentLoopIndex = 0;

// function step() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
//     currentLoopIndex++;
//     if (currentLoopIndex >= cycleLoop.length) {
//         currentLoopIndex = 0;
//     }
//     window.requestAnimationFrame(step);
// }

// function init() {
//     window.requestAnimationFrame(step);
// }



// var Player = function (x, y) {
//     this.sprite = './assets/images/pikmin_sprite_sheet.png';
//     this.pos = [x, y];
//     this.size = [171, 101];
//     this.hitbox = [50, 60];
// };

// Player.prototype.render = function () {
//     ctx.drawImage(Resources.get(this.sprite), this.pos[0], this.pos[1]);
//     ctx.font = "500 40px arial";
//     ctx.fillText("Score: " + score, 0, 50);
// };

// Player.prototype.update = function (dt) {
//     if (this.pos[1] <= 40) {
//         this.pos = [200, 430];
//         score += 10;
//         ctx.canvas.width = ctx.canvas.width;
//     }

//     if (this.pos[0] < 0) {
//         this.pos[0] = 0;
//     }

//     else if (this.pos[0] > ctx.canvas.width - this.size[1]) {
//         this.pos[0] = ctx.canvas.width - this.size[1];
//     }

//     if (this.pos[1] < 0) {
//         this.pos[1] = 0;
//     }

//     else if (this.pos[1] > ctx.canvas.height - this.size[0]) {
//         this.pos[1] = ctx.canvas.height - this.size[0];
//     }
// };


// Player.prototype.handleInput = function (keys) {
//     switch (keys) {
//         case 'left':
//             this.pos[0] = this.pos[0] - 50;
//             break;

//         case 'right':
//             this.pos[0] = this.pos[0] + 50;
//             break;

//         case 'down':
//             this.pos[1] = this.pos[1] + 50;
//             break;

//         case 'up':
//             this.pos[1] = this.pos[1] - 50;
//             break;
//     }
// };


// var Booster = function (x, y) {
//     this.sprite = 'images/gem-orange.png';
//     this.pos = [x, y];
//     this.hitbox = [30, 70];
// };

// Booster.prototype.render = function () {
//     ctx.drawImage(Resources.get(this.sprite), this.pos[0], this.pos[1]);
// };

// var allBoosters = [new Booster(80, 240), new Booster(280, 350), new Booster(380, 170)];
// var allEnemies = [new Enemy(-100, 300, 250), new Enemy(-300, 380, 150), new Enemy(-500, 220, 350), new Enemy(-700, 130, 420)];
// var player = new Player(215, 460);

// var score = 0;

// document.addEventListener('keyup', function (e) {
//     var allowedKeys = {
//         37: 'left',
//         38: 'up',
//         39: 'right',
//         40: 'down'
//     };

//     player.handleInput(allowedKeys[e.keyCode]);
// });














// var xPos = 0
// var yPos = 0


// var movement

// context.rect(getImage())
// context.stroke();

// function move(e){
//     switch (e.keyCode) {
//         case 39:
//             // xPlayer += 5
//             controller.up = key_state;
//             break;
//         case 37: 
//             xPlayer -= 5
//             controller.right = key_state;
        
//     }

// }

// document.onkeydown = move;




// window.addEventListener("keydown", controller.move)
// window.addEventListener("keyup", controller.move)


// asteroids

// const Util = require("./util");

// class MovingObject {
//     constructor(options) {
//         this.pos = options.pos;
//         this.vel = options.vel;
//         this.radius = options.radius;
//         this.color = options.color;
//         this.game = options.game;
//         this.isWrappable = true;
//     }

//     collideWith(otherObject) {
//         // default do nothing
//     }

//     draw(ctx) {
//         ctx.fillStyle = this.color;

//         ctx.beginPath();
//         ctx.arc(
//             this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
//         );
//         ctx.fill();
//     }

//     isCollidedWith(otherObject) {
//         const centerDist = Util.dist(this.pos, otherObject.pos);
//         return centerDist < (this.radius + otherObject.radius);
//     }

//     move(timeDelta) {
//         // timeDelta is number of milliseconds since last move
//         // if the computer is busy the time delta will be larger
//         // in this case the MovingObject should move farther in this frame
//         // velocity of object is how far it should move in 1/60th of a second
//         const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
//             offsetX = this.vel[0] * velocityScale,
//             offsetY = this.vel[1] * velocityScale;

//         this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

//         if (this.game.isOutOfBounds(this.pos)) {
//             if (this.isWrappable) {
//                 this.pos = this.game.wrap(this.pos);
//             } else {
//                 this.remove();
//             }
//         }
//     }

//     remove() {
//         this.game.remove(this);
//     }
// }

// const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

// module.exports = MovingObject;

































// var stoneImage = new Image();
// stoneImage.src = "./assets/images/stone_terrain.png"

// var canvas = document.getElementById('canvas');
// function sprite(options) {

//     var that = {};

//     that.context = options.context;
//     that.width = options.width;
//     that.height = options.height;
//     that.image = options.image;

//     return that;
// }

// var stoneTerrain = sprite({
//     context: canvas.getContext('2d'),
//     width: 100,
//     height: 100,
//     image: stoneImage
// })



// var tilesetImage = new Image();
// tilesetImage.src = './assets/images/stone_terrain.png'
// debugger
// tilesetImage.onload = () => getImage(); // getImage
// // tilesetImage.onload = getImage; // getImage
// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// const getImage = () => {

//     ctx.drawImage(tilesetImage, 16, 38)
// }

// var Engine = (function(global) {
  
//         const document = global.document;
//         const window = global.window;
//         const canvas = doc.getElementById('canvas');
//         const ctx = canvas.getContext('2d');
//         const lastTime;
    

//         function main() {
//             var now = Date.now(),
//                 dt = (now - lastTime) / 1000.0;

//             update(dt);
//             render();
//             lastTime = now;
//             win.requestAnimationFrame(main);

//         }

//     function init() {
//         reset();
//         lastTime = Date.now();
//         main();
//     }


//     function render() {

//         var rowImages = [
//                 './assets/images/water-block.png',
//                 './assets/images/stone-block.png',
//                 './assets/images/stone-block.png',
//                 './assets/images/stone-block.png',
//                 './assets/images/grass-block.png',
//                 './assets/images/grass-block.png'
//             ],
//             numRows = 6,
//             numCols = 5,
//             row, col;

//         for (row = 0; row < numRows; row++) {
//             for (col = 0; col < numCols; col++) {

//                 ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
//             }
//         }
//     }

// // function reset() {}

//     Resources.load([
//         './assets/images/stone-block.png',
//         './assets/images/water-block.png',
//         './assets/images/grass-block.png',
//         './assets/images/enemy-bug.png',
//         './assets/images/char-princess-girl.png',
//         './assets/images/gem-orange.png'
//     ]);
//     Resources.onReady(init);

//     global.ctx = ctx;
// })(this);





// ctx.fillStyle = "lime";
// ctx.fillRect(0, 440, 570, 45);

// var tileSize = 32;
// var rowTileCount = 12;
// var colTileCount = 20;
// var imageNumTiles = 12

// var tileSize = 32;
// var rowTileCount = 20; // The number of tiles in a row of our background
// var colTileCount = 32; // The number of tiles in a column of our background
// var imageNumTiles = 16; // The number of tiles per row in the tileset image
// function drawImage() {
//     for (var r = 0; r < rowTileCount; r++) {
//         for (var c = 0; c < colTileCount; c++) {
//             var tile = ground[r][c];
//             var tileRow = (tile / imageNumTiles) | 0; // Bitwise OR operation
//             var tileCol = (tile % imageNumTiles) | 0;
//             ctx.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
//         }
//     }
// }