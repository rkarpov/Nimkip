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



console.log(canvas);



var tilesetImage = new Image();
tilesetImage.src = './assets/images/stone_terrain.png'
debugger
tilesetImage.onload = () => getImage(); // getImage
// tilesetImage.onload = getImage; // getImage
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
const getImage = () => {

    ctx.drawImage(tilesetImage, 120, 120, 120, 120)
}

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