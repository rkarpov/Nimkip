
const playerImage = new Image();
playerImage.src = './assets/images/pikmin_sprite_sheet.png';

class Player {
    constructor(image, animationFramesX, animationFramesY, pwidth, pheight, posX, posY, scaledWidth, scaledHeight, movementSpeed, frameticks) {
        this.image = image

        this.animationFramesX = animationFramesX;
        this.animationFramesY = animationFramesY;
        this.posX = posX;
        this.posY = posY;
        this.pwidth = pwidth;
        this.pheight = pheight;

        this.scaledWidth = scaledWidth;
        this.scaledHeight = scaledHeight;

        this.width = 20;
        this.height = 58;

        // this.stepDown = [12, 39, 67]
        // this.stepDownIndex = 0;
        // this.dir = 15
        this.currentLoopIndex = 0;
        this.frameCount = 0;

        this.alive = true;
        this.drown = false;
        } 
    
    drowning() {
        // let alive = true;
        for (let i = 0; i < floatingObjects.length; i++) {
            const obj = floatingObjects[i];
            if (obj.floating === true) { 
                this.drown = false; 
                break;
            } else {
                this.drown = true;
            }
        }
        // floatingObjects.forEach(obj => {


        for (let i = 0; i < floatingObjects.length; i++) {
            const obj = floatingObjects[i];

            if (obj.posX + 3 <= (this.posX + 6) + (this.width - 8) &&
                (obj.posX + 3) + (obj.scaledWidth - 5) >= (this.posX + 6) &&
                obj.posY + obj.scaledHeight >= (this.posY + 45) &&
                obj.posY <= (this.posY + 45) + (this.height - 45)) {
                if ((this.posX + 6) < canvas.width - 30) {
                    this.alive = true;
                    if (obj.moveDir === 'startRight') { this.posX -= obj.movementSpeed }
                    else if (obj.moveDir === 'startLeft') { this.posX += obj.movementSpeed}
                    break;
                }
            } else { 
                // if (!(obj.posX + 3 <= (this.posX + 6) + (this.width - 8) &&
                //     (obj.posX + 3) + (obj.scaledWidth - 5) >= (this.posX + 6) &&
                //     obj.posY + obj.scaledHeight >= (this.posY + 45) &&
                //     obj.posY <= (this.posY + 45) + (this.height - 45))) {
                // this.alive = false;
            }

            if ((this.posY >= 50) && (this.posY <= 245) &&
                (this.posX + 4 >= 0) && (this.posX + 4 <= 800) && (this.drown === true )) {
                this.posY = 640
            }

        };

        // if ((this.posY >= 50) && (this.posY <= 245) && (!alive) &&
        //     (this.posX + 4 >= 0) && (this.posX + 4 <= 800)) {
        //     this.posY = 0
        // }
        // }
    }

    drawPlayer() {
        ctx.drawImage(this.image, this.animationFramesX, this.animationFramesY, this.pwidth, this.pheight, this.posX, this.posY, this.scaledWidth, this.scaledHeight); // Player scaled by 1.5
        // this.stepDown
        this.drowning();
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "rgb(214, 214, 59)";
        // ctx.rect(this.posX + 5, this.posY + 30, this.width - 2, this.height - 30); // player hitbox ground
        ctx.rect(this.posX + 6, this.posY + 45, this.width - 8, this.height - 45); // player hitbox water
        ctx.stroke();
    }
}

const player = new Player(playerImage, 12, 101, 16, 40, 300, 640, 16, 40, 7, 4)

    // update() {
    //       const movementKeys = {
    //           move: [
    //               currentlyPressedKeys.ArrowUp,
    //               currentlyPressedKeys.ArrowRight,
    //               currentlyPressedKeys.ArrowDown,
    //               currentlyPressedKeys.ArrowLeft,
    //           ]
    //       };
    // }

    // updatePosition() {
    //      if (currentlyPressedKeys.ArrowUp || currentlyPressedButtons.dUp) {
    //          this.facing = 'up';
    //          this.animate();
    //          this.move(this.facing);
    //      } else if (currentlyPressedKeys.ArrowRight || currentlyPressedButtons.dRight) {
    //          this.facing = 'right';
    //          this.animate();
    //          this.move(this.facing);
    //      } else if (currentlyPressedKeys.ArrowDown || currentlyPressedButtons.dDown) {
    //          this.facing = 'down';
    //          this.animate();
    //          this.move(this.facing);
    //      } else if (currentlyPressedKeys.ArrowLeft || currentlyPressedButtons.dLeft) {
    //          this.facing = 'left';
    //          this.animate();
    //          this.move(this.facing);
    //      }
    //      }
    
    // animate() {
    //     this.tickCount += 1;

    //     if (this.tickCount > this.ticksPerFrame) {
    //         this.tickCount = 0;

    //         if (this.frameIndex < this.numberOfFrames - 1) {
    //             this.frameIndex += 1;
    //         } else {
    //             this.frameIndex = 0;
    //         }
    //     }
    // }

   

    // move(direction, speed) {
    //     speed = speed || (this.speed * this.groundVelocity);

    //     switch (direction) {
    //         case 'up':
    //             if (!wouldCollideWithAny(direction, this, entities)) {
    //                 this.y -= (speed);
    //             }

    //             break;
    //         case 'right':
    //             if (!wouldCollideWithAny(direction, this, entities)) {
    //                 this.x += speed;
    //             }

    //             break;
    //         case 'down':
    //             if (!wouldCollideWithAny(direction, this, entities)) {
    //                 this.y += speed;
    //             }

    //             break;
    //         case 'left':
    //             if (!wouldCollideWithAny(direction, this, entities)) {
    //                 this.x -= speed;
    //             }

    //             break;
    //     }
    // }











// (function () {
//     var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
//     window.requestAnimationFrame = requestAnimationFrame;
// })();

//  const currentlyPressedKeys = {};

//  const initializeControls = () => {
//     document.addEventListener('keydown', (e) => {
//         currentlyPressedKeys[e.key] = true;
//     });

//     document.addEventListener('keyup', (e) => {
//         currentlyPressedKeys[e.key] = false;
//     });
// };


//  function movePlayer() {
//     if (currentlyPressedKeys.ArrowUp) {
//         player.posY -= 1;
//     } else if (currentlyPressedKeys.ArrowDown) {
//         player.posY += 1;
//     } else if (currentlyPressedKeys.ArrowLeft) {
//         player.posX -= 1
//     } else if (currentlyPressedKeys.ArrowRight) {
//         player.posY += 1;
//     }
// }
    //     case 37: // left
    //         player.posX -= 13;
    //         break;
    //     case 38: // up
    //         player.posY -= 13;
    //         player.dir = 101
    //         player.stepDown = [12, 39, 67]
    //         break;
    //     case 39: // right
    //         player.posX += 13;
    //         player.dir = 58
    //         player.stepDown = [20, 41, 65]
    //         break;
    //     case 40: // down
    //         player.posY += 13;
    //         player.dir = 15
    //         player.stepDown = [12, 39, 67]
    //         break;
    // }
// }




// // Keyboard controls

// addEventListener('keydown', function (e) {
//     char.moving = true;
//     keysDown[e.keyCode] = true;
// }, false);

// addEventListener('keyup', function (e) {
//     char.moving = false;
//     delete keysDown[e.keyCode];
// }, false);

// // Update
// var update = function (modifier) {
//     if (37 in keysDown) {
//         char.spriteX = 170;
//         if (Math.round(char.x) > char.edgeRegion) {
//             char.x -= char.speed * modifier;
//         } else {
//             if (Math.round(background.x) < 0) {
//                 background.x += char.speed * modifier;
//             } else if (Math.round(char.x) > 0) {
//                 char.x -= char.speed * modifier;
//             }
//         }
//     }
//     if (38 in keysDown) {
//         char.spriteX = 74;
//         if (Math.round(char.y) > char.edgeRegion) {
//             char.y -= char.speed * modifier;
//         } else {
//             if (Math.round(background.y) < 0) {
//                 background.y += char.speed * modifier;
//             } else if (Math.round(char.y) > 0) {
//                 char.y -= char.speed * modifier;
//             }
//         }
//     }
//     if (39 in keysDown) {
//         char.spriteX = 148;
//         if ((Math.round(char.x) + char.width) < (canvasEl.width - char.edgeRegion)) {
//             char.x += char.speed * modifier;
//         } else {
//             if (Math.round(background.x) > (canvasEl.width - background.width)) {
//                 background.x -= char.speed * modifier;
//             } else if ((Math.round(char.x) + char.width) < canvasEl.width) {
//                 char.x += char.speed * modifier;
//             }
//         }
//     }
//     if (40 in keysDown) {
//         char.spriteX = 0;
//         if ((Math.round(char.y) + char.height) < (canvasEl.height - char.edgeRegion)) {
//             char.y += char.speed * modifier;
//         } else {
//             if (Math.round(background.y) > (canvasEl.height - background.height)) {
//                 background.y -= char.speed * modifier;
//             } else if ((Math.round(char.y) + char.height) < canvasEl.height) {
//                 char.y += char.speed * modifier;
//             }
//         }
//     }

//     if (37 in keysDown && 38 in keysDown) {
//         char.spriteX = 124;
//     }
//     if (38 in keysDown && 39 in keysDown) {
//         char.spriteX = 100;
//     }
//     if (39 in keysDown && 40 in keysDown) {
//         char.spriteX = 50;
//     }
//     if (40 in keysDown && 37 in keysDown) {
//         char.spriteX = 26;
//     }
// };

// // Render Function
// var render = function () {
//     canvas.clearRect(0, 0, canvasEl.width, canvasEl.height);

//     if (char.moving) {
//         if (char.animateTime > 0) {
//             char.animateTime--;
//         } else {
//             if (char.animateCur + 1 < char.animatePos.length) {
//                 char.animateCur++;
//                 char.spriteY = char.animatePos[char.animateCur];
//             } else {
//                 char.animateCur = 0;
//                 char.spriteY = char.animatePos[0];
//             }
//             char.animateTime = 2;
//         }
//     }

//     if (charReady) {
//         canvas.drawImage(charImg, char.spriteX, char.spriteY, char.width, char.height, char.x, char.y, char.width, char.height);
//     }
// };

// var mainInterval = function () {
//     var now = Date.now();
//     var delta = now - then;

//     update(delta / 1000);
//     render();

//     then = now;
//     requestAnimationFrame(mainInterval);
// };


// render();
// then = Date.now();
// mainInterval();