const exaustFramesX = [[2034], [2028], [2025]]
const exaustFramesY = [[261], [280], [318]]
const exhaustWidthX = [[18], [33], [38]]
const exhaustWidthY = [[16], [30], [34]]
const exhaustPosX = [[835 + 52], [835+ 43], [835+ 37]]
const exhaustPosY = [[750 + 210], [750+ 225], [750+ 235]]
// const exhaustPosY = []
// ship.posX + 60, ship.posY + 250,

class ShipTimer {
    constructor(image, animationFramesX, animationFramesY, width, height, posX, posY, scaledWidth, scaledHeight,
        collides = false, floats = false, movementSpeed, frameTicks, moveDir = 'startLeft') {

        this.image = image;
        this.animationFrameY = animationFramesY;
        this.animationFrameX = animationFramesX;
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        this.scaledWidth = scaledWidth;
        this.scaledHeight = scaledHeight;
        this.moveDir = moveDir;
        this.movementSpeed = movementSpeed;
        this.frameTicks = frameTicks;

        this.frameIndex = 0;
        this.tickCount = 0;

        this.frameIndex2 = 0;
        this.tickCount2 = 0;
       
        this.exhaustFrameIndex = 0;
        this.exhaustTickCount = 0;

    }

    handleAnimation() {
        this.exhaustTickCount += 1;
        if (this.exhaustTickCount === 3) {
            this.exhaustTickCount = 0;
            this.exhaustFrameIndex = (this.exhaustFrameIndex += 1) % exaustFramesX.length;
        }

        if (this.animationFrameX.length > 1) {
            this.tickCount += 1;
            if (this.tickCount === this.frameTicks) {
                this.tickCount = 0;
                this.frameIndex = (this.frameIndex + 1) % this.animationFrameX.length;
            }
        } else if (this.animationFrameY.length > 1) {
            this.tickCount2 += 1;
            if (this.tickCount2 === this.frameTicks) {
                this.tickCount2 = 0;
                this.frameIndex2 = (this.frameIndex2 + 1) % this.animationFrameY.length;
            }
        }
    }

    handleMovement() {
        if (this.moveDir === 'startLeft') {
            this.posY -= this.movementSpeed;
            if (this.posY % 2 !== 0) this.posX -= 1
            if (this.posY % 2 === 0) this.posX += 3
        }
    }

    drawMovingObject() {
        ctx.drawImage(image, exaustFramesX[this.exhaustFrameIndex], exaustFramesY[this.exhaustFrameIndex], exhaustWidthX[this.exhaustFrameIndex], exhaustWidthY[this.exhaustFrameIndex], exhaustPosX[this.exhaustFrameIndex], ship.posY + [220, 210, 210][this.exhaustFrameIndex] - 25, exhaustWidthX[this.exhaustFrameIndex] * 1.5, exhaustWidthY[this.exhaustFrameIndex] * 1.5)
        ctx.drawImage(this.image, this.animationFrameX[this.frameIndex], this.animationFrameY[this.frameIndex2], this.width, this.height, this.posX, this.posY, this.scaledWidth, this.scaledHeight);
        this.handleAnimation();
        this.handleMovement();

    }

}
