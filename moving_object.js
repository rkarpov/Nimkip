class MovingObject {
    constructor(image, animationFramesX, animationFramesY, width, height, posX, posY, scaledWidth, scaledHeight, movementSpeed, frameTicks, moveDir = 'startLeft') {
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
    }

    drawMovingObject() {
        ctx.drawImage(this.image, this.animationFrameX[this.frameIndex], this.animationFrameY[this.frameIndex2], this.width, this.height, this.posX, this.posY, this.scaledWidth, this.scaledHeight);
   
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

        if (this.moveDir === 'startLeft') {
            this.posX += this.movementSpeed;
            if (this.posX > 825) {
                this.posX = -65;
            }
        } else if (this.moveDir === 'startRight') {
            this.posX -= this.movementSpeed;
            if (this.posX < -65) {
                this.posX = 825;
            }
        }

    }

}