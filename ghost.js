const ghostWidthScale = [18, 15, 18];
const ghostHeightScale = [49, 45, 49];

class Ghost {
    constructor(image, animationFramesX, animationFramesY, width, height, posX, posY, scaledWidth, scaledHeight,
        collides = false, floats = false, movementSpeed, frameTicks, moveDir = 'startLeft') {

        this.image = image;
        this.animationFrameY = animationFramesY;
        this.animationFrameX = animationFramesX;
        this.width =  width;
        this.height = height
   
        this.posX = posX;
        this.posY = posY;
        this.scaledWidth = ghostWidthScale[rotation % 3]
        this.scaledHeight = ghostHeightScale[rotation % 3]
        this.moveDir = moveDir;
        this.movementSpeed = movementSpeed;
        this.frameTicks = frameTicks;

        this.frameIndex = 0;
        this.tickCount = 0;

        this.frameIndex2 = 0;
        this.tickCount2 = 0;

        this.floating;
    }

    handleAnimation() {
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
            if (this.posY < -200) {
                // delete this class and remove from drawing array?
            }
        }
    }

    drawMovingObject() {
        ctx.drawImage(this.image, this.animationFrameX[this.frameIndex], this.animationFrameY[this.frameIndex2], this.width, this.height, this.posX, this.posY, this.scaledWidth, this.scaledHeight);
        this.handleAnimation();
        this.handleMovement();
    }

}
