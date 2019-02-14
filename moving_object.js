class MovingObject {
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

        this.collides = collides;
        this.floats = floats;

        this.frameIndex = 0;
        this.tickCount = 0;

        this.frameIndex2 = 0;
        this.tickCount2 = 0;
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
             this.posX += this.movementSpeed;
             if (this.posX > 825) {
                 this.posX = -65;
             }
         } else if (this.moveDir === 'startRight') { // optional movement from right to left on screen
             this.posX -= this.movementSpeed;
             if (this.posX < -65) {
                 this.posX = 825;
             }
         }
    }

    handleCollision() {
        if ((this.posX + 5) <= player.posX + player.width &&
            (this.posX + 5) + (this.scaledWidth - 25) >= player.posX &&
            (this.posY + 15) + (this.scaledHeight - 25) >= player.posY &&
            (this.posY + 15) <= player.posY + player.height) {
                player.posY = 640;
            }

        // hitbox
        // ctx.beginPath();
        // ctx.lineWidth = "2";
        // ctx.strokeStyle = "red";
        // ctx.rect(this.posX + 5, this.posY + 15, this.scaledWidth - 25, this.scaledHeight - 25);
        // ctx.stroke();
    }

    handleFloat() {
        if (this.posX <= player.posX + player.width &&
            this.posX + this.scaledWidth >= player.posX &&
            this.posY + this.scaledHeight >= player.posY &&
            this.posY <= player.posY + player.height) {
                if (player.posX < canvas.width - 30) {
                    player.posX += 1;
                }
        }
    }

    drawMovingObject() {
        ctx.drawImage(this.image, this.animationFrameX[this.frameIndex], this.animationFrameY[this.frameIndex2], this.width, this.height, this.posX, this.posY, this.scaledWidth, this.scaledHeight);
        this.handleAnimation();
        this.handleMovement();
        
        if (this.collides) { this.handleCollision() }
        if (this.floats) { this.handleFloat() }
    }

}


// Red rectangle
