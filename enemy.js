// const enemy = new Bulborb(image, animationFramesX, animationFrameY, width, height, posX, posY, scaledWidth, scaledHeight)

class Enemy {
    constructor(image, animationFramesX, animationFrameY, width, height, posX, posY, scaledWidth, scaledHeight, movementSpeed) {
        this.image = image;
        this.posX = posX;
        this.posY = posY;
        this.animationFrameY = animationFrameY;
        this.animationFrame = animationFramesX;
        this.width = width;
        this.height = height;
        this.scaledWidth = scaledWidth;
        this.scaledHeight = scaledHeight;
        this.movementSpeed = movementSpeed;

        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = 3;
        this.numberOfFrame = this.numberOfFrames || 1;
    }

    drawEnemy() {
        ctx.drawImage(this.image, this.animationFrame[this.frameIndex], this.animationFrameY, this.width, this.height, this.posX, this.posY, this.scaledWidth, this.scaledHeight);
        this.posX += this.movementSpeed;
        this.tickCount += 1;
        if (this.tickCount === 3) {
            this.tickCount = 0;
            this.frameIndex = (this.frameIndex + 1) % this.animationFrame.length;
        }
        if (this.posX > 825) {
            this.posX = -65;
        }

    }

}


// const bulborb = new Bulborb()
// const bulborb2 = new Bulborb()