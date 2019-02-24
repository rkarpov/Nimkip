
    
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
        if ((this.posX + 5) <= (player.posX + 5) + (player.width - 2) &&
            (this.posX + 5) + (this.scaledWidth - 25) >= (player.posX + 5) &&
            (this.posY + 15) + (this.scaledHeight - 35) >= (player.posY + 30) &&
            (this.posY + 15) <= (player.posY + 30) + (player.height - 30)) {
                player.handleDying()
            }

        // enemy hitbox
        // ctx.beginPath();
        // ctx.lineWidth = "2";
        // ctx.strokeStyle = "rgb(214, 214, 59)";
        // ctx.rect(this.posX + 5, this.posY + 15, this.scaledWidth - 25, this.scaledHeight - 35);
        // ctx.stroke();

        // ctx.rect(this.posX + 5, this.posY + 30, this.width - 2, this.height - 30); // player hitbox ground
    }

    handleFloat() {
        if (this.posX + 3 <= (player.posX + 6) + (player.width - 8) &&
            (this.posX + 3) + (this.scaledWidth - 5) >= (player.posX + 6) &&
            this.posY + this.scaledHeight - 4 >= (player.posY + 45) &&
            this.posY <= (player.posY + 45) + (player.height - 45)) {
            // if ((player.posX  + 6) < canvas.width - 30) {
                // player.posX += this.movementSpeed;
                this.floating = true;
            // }
        } else { 
            this.floating = false; }

        // float object hitbox
         ctx.beginPath();
         ctx.lineWidth = "1";
         ctx.strokeStyle = "red";
         ctx.rect(this.posX + 3, this.posY, this.scaledWidth -5, this.scaledHeight - 4);
         ctx.stroke();

        // player's hitbox
        // ctx.rect(this.posX + 6, this.posY + 50, this.width - 8, this.height - 50); // player hitbox water
    }
  
    drawMovingObject() {
        ctx.drawImage(this.image, this.animationFrameX[this.frameIndex], this.animationFrameY[this.frameIndex2], this.width, this.height, this.posX, this.posY, this.scaledWidth, this.scaledHeight);
        this.handleAnimation();
        this.handleMovement();
        
        if (this.collides) { this.handleCollision() }
        if (this.floats) { this.handleFloat() }
    }

}
