// //  BULBORB CLASS
// // class Bulborb {
// //     constructor() {
// //         this.scale = 1.25;
// //         this.width = 61;
// //         this.height = 60;
// //         this.ScaledWidth = scale * width;
// //         this.ScaledHeight = scale * height;
// //         this.step = [22, 87, 151, 216];
// //         this.loopIndex = 0;
// //         this.frameCount = 0;
// //     }

// //     drawBulborb(frameX, frameY, canvasX, canvasY) {
// //         ctx.drawImage(sprites, frameX, frameY, width, height, canvasX, canvasY, scaledWidth, scaledHeight);
// //         ctx.drawImage(sprites, 342, 161, 18, 12, canvasX, canvasY - 5, 0, 0);
// //     }

// //     bulStep() {
// //         bulFrameCount++;
// //         if (frameCount < 15) {
// //             window.requestAnimationFrame(bulStep);
// //             return;
// //         }
// //         frameCount = 0;
// //         ctx.clearRect(0, 0, canvas.width, canvas.height);
// //         drawBulborb(bulstep[bulLoopIndex], 630, bulX, bulY);

// //         bulLoopIndex++;
// //         if (bulLoopIndex >= bulstep.length) {
// //             bulLoopIndex = 0;
// //         }
// //         window.requestAnimationFrame(bulStep);
// //     }

// // }

// const bulScale = 1.5;
// const bulWidth = 61;
// const bulHeight = 60;
// const bulScaledWidth = bulScale * bulWidth;
// const bulScaledHeight = bulScale * bulHeight;

// // function drawBulFrame(frameX, frameY, canvasX, canvasY) {
// //     ctx.clearRect(0, 0, canvas.width, canvas.height);
// //     // ctx.drawImage(sprites, 22, 630, 61, 60, 100, 400, 100, 100); // bulborb
// //     ctx.drawImage(sprites, frameX, frameY, bulWidth, bulHeight, canvasX, canvasY, bulScaledWidth, bulScaledHeight); // Player
// //     // ctx.drawImage(sprites, 342, 161, 18, 12, deltaX, deltaY - 5, 18 * 1.5, 12 * 1.5); // headFlower
// // }

// function drawBulborb(frameX, frameY, canvasX, canvasY) {
//     // ctx.drawImage(sprites, frameX, frameY, width, height, canvasX, canvasY, bulScaledWidth, bulScaledHeight);
//     // ctx.drawImage(sprites, 342, 161, 18, 12, canvasX, canvasY - 5, 0, 0);

//     ctx.drawImage(sprites, frameX, frameY, 61, 60, canvasX, canvasY, bulScaledWidth, bulScaledHeight); // bulborb

// }

// var bulX = 100;
// var bulY = 400;

// const bulstep = [22, 87, 151, 216]
// let bulLoopIndex = 0;
// let bulFrameCount = 0;

// function bulStep() {
//     bulFrameCount++;
//     bulX += 1
//     if (bulFrameCount < 15) {
//         window.requestAnimationFrame(bulStep);
//         return;
//     }
//     bulFrameCount = 0;
//     // ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawBulborb(bulstep[bulLoopIndex], 630, bulX, bulY);

//     bulLoopIndex++;
//     if (bulLoopIndex >= bulstep.length) {
//         bulLoopIndex = 0;
//     }
//     window.requestAnimationFrame(bulStep);
// }




