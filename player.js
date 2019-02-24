
const playerImage = new Image();
playerImage.src = './assets/images/pikmin_sprite_sheet.png';

let rotation = 0;
const yellow = (rotation % 3 === 1);

const playerWidth = [[16], [22], [16]]
const playerFloatposX = [6, 12, 6];

// red yellow, blue player = frames[playerRotation % 3]
const framesUpX = [[14, 41, 69], [101, 128, 156], [201, 228, 256]]
const framesUpY = [[101], [102], [101]]
const framesDownX = [[12, 39, 67], [100, 127, 155], [201, 228, 256]]
const framesDownY = [[14, 15, 14], [14, 15, 14], [13, 14, 13]]
const framesRightX = [[20, 65], [107, 129, 152], [208, 229, 253]]
const framesRightY = [[58], [60], [58]]
const framesLeftX = [[3714, 3692, 3669], [3628, 3606, 3583], [3529, 3507, 3484]]
const framesLeftY = [[58], [60], [58]]
const GhostX = [[2193], [2203], [2213]]
const GhostY = [[306, 332, 306, 359]]
// const playerWidth = [[22], []
// const playerHeight = []

class Player {
    constructor(image, animationFramesX, animationFramesY, pwidth, pheight, posX, posY, scaledWidth, scaledHeight, movementSpeed, frameTicks, moveDir) {
        this.image = image

        this.animationFrameX = animationFramesX;
        this.animationFrameY = animationFramesY;
        this.posX = posX;
        this.posY = posY;
        this.pwidth = playerWidth[rotation % 3];
        this.pheight = pheight;

        this.ghostX = GhostX[rotation % 3]
        this.ghostY = GhostY[rotation % 3]

        // this.scaledWidth = scaledWidth;
        // this.scaledHeight = scaledHeight;
        this.scaledWidth = this.pwidth * 1.5;
        this.scaledHeight = this.pheight * 1.5;

        // this.width = this.pwidth;
        this.width = playerWidth[rotation % 3]
        this.height = 58;

        this.moveDir = moveDir;
        this.movementSpeed = movementSpeed;
        this.frameTicks = 6

        this.frameIndexX = 0;
        this.frameIndexY = 0;
        this.tickCount = 0;

        this.died = false;
        this.drown = false;

        this.flowerImage = this.image;
        this.flowerX = this.posX;
        this.flowerY = this.posY - 6;
    
        this.flowerFrameX = 342;
        this.flowerFrameY = 161;

        this.animate = false;
        } 
    
    drowning() {
        // for (let i = 0; i < floatingObjects.length; i++) {
        //     const obj = floatingObjects[i];
        //     if (obj.floating === true) { 
        //         this.died = false; 
        //         break;
        //     } else {
        //         this.died = true;
        //     }
        // }
        this.died = true;
        (floatingObjects.filter(obj => {
            if (obj.floating === true) { this.died = false};
        })) 
        // else { this.died = true; }
        
        let i;
        let condition;
        let increment;

        if (player.moveDir === 'up') { i = 0, condition = i < floatingObjects.length, increment = i++ }
        else if (player.moveDir === 'down') { i = floatingObjects.length, increment = i-- }

        for (let i = 0; i < floatingObjects.length; i++) {
            const obj = floatingObjects[i];
            if (obj.posX + 3 <= (this.posX + 6) + (this.width - 8) &&
                (obj.posX + 3) + (obj.scaledWidth - 9) >= (this.posX + 6) &&
                obj.posY + obj.scaledHeight - 1 >= (this.posY + 54) &&
                obj.posY <= (this.posY + 54) + (this.height - 54)) {
                if ((this.posX + 6) < canvas.width - 30) {
                    // this.alive = true;
                    if (obj.moveDir === 'startRight') { 
                        if (player.posX - 4 < 0) {}
                        else {
                        this.posX -= obj.movementSpeed;
                        this.flowerX -= obj.movementSpeed; }
                    }
                    else if (obj.moveDir === 'startLeft') {
                        if (player.posX + 4 > 778) {}
                        else {
                        this.posX += obj.movementSpeed;
                        this.flowerX += obj.movementSpeed; }
                    }
                    break;
                }
            }

            if ((this.posY >= 0) && (this.posY <= 245) &&
                (this.posX + 4 >= 0) && (this.posX + 4 <= 800) && (this.died === true )) {
                // let drawCycle = new Ghost(image, [2193], [359, 332, 306], 9, 23, player.posX, player.posY, 9 * 2, 23 * 2, false, false, 3, 10)
                // movingObjects.push(drawCycle);
                // this.posY = 640
                // this.flowerY = 640
                this.handleDying();
            }

        };
    }

    handleDying(){
        // let drawCycle = new Ghost(image, [2193], [359, 306, 332, 306], 9, 23, player.posX, player.posY, 9 * 2, 23 * 2, false, false, 3, 10)
        let drawCycle = new Ghost(image, GhostX[rotation % 3], [306, 332, 306, 359], 9, 23, player.posX, player.posY, 9 * 2, 23 * 2, false, false, 3, 5)
        movingObjects.push(drawCycle);
        rotation += 1
        target = targets[rotation % 3]
        this.posY = 640;
        this.flowerY = this.posY - 8;
        this.flowerX = this.posX;
        this.pwidth = playerWidth[rotation % 3];
        this.animationFrameX = framesUpX[rotation % 3];
        this.animationFrameY = framesUpY[rotation % 3];
        this.image = image ;
        this.drawPlayer();
        sound.load();
        sound.play();
    }


     handleAnimation() {
        if (this.animationFrameX.length > 1) {
            this.tickCount += 1;
            if (this.tickCount === this.frameTicks) {
                this.tickCount = 0;
                this.frameIndexX = (this.frameIndexX + 1) % this.animationFrameX.length;
            }
        } else if (this.animationFrameY.length > 1) {
            this.tickCount += 1;
            if (this.tickCount === this.frameTicks) {
                this.tickCount = 0;
                this.frameIndexY = (this.frameIndexY + 1) % this.animationFrameY.length;
            }
        }
     }

    drawPlayer() {
        if (this.animate) {
            this.handleAnimation() 
            ctx.drawImage(this.image, this.animationFrameX[this.frameIndexX], this.animationFrameY[this.frameIndexY], playerWidth[rotation % 3], this.pheight, this.posX, this.posY, playerWidth[rotation % 3] * 1.5, this.scaledHeight); // Player scaled by 1.5
            ctx.drawImage(this.flowerImage, this.flowerFrameX, this.flowerFrameY, 18, 12, this.flowerX, this.flowerY, 18 * 1.5, 12 * 1.5)
        } else { 
            ctx.drawImage(this.image, this.animationFrameX[0], this.animationFrameY[0], playerWidth[rotation % 3], this.pheight, this.posX, this.posY, playerWidth[rotation % 3] * 1.5, this.scaledHeight); // Player scaled by 1.5
            ctx.drawImage(this.flowerImage, this.flowerFrameX, this.flowerFrameY, 18, 12, this.flowerX, this.flowerY, 18 * 1.5, 12 * 1.5)
        }
        // const headFlower = new MovingObject(image, [342], [161], 18, 12, player.posX, player.posY, 18 * 1.5, 12 * 1.5, 0, 0)

        this.drowning();
        // this.surviving();
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "rgb(214, 214, 59)";
        // ctx.rect(this.posX + 5, this.posY + 30, this.width - 2, this.height - 30); // player hitbox ground
        // ctx.rect(this.posX + 6, this.posY + 45, this.width - 8, this.height - 45); // player hitbox water previously
        if (this.moveDir === 'left' && rotation % 3 === 1) {
            // ctx.rect(this.posX + playerFloatposX[rotation % 3] - 5, this.posY + 54, this.width - 8, this.height - (54)); // player hitbox water
        } else {
        // ctx.rect(this.posX + playerFloatposX[rotation % 3], this.posY + 54, this.width - 8, this.height - (54)); // player hitbox water
        }
        ctx.stroke();
    }
}
// playerFloatposX[rotation % 3];