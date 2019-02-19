
const playerImage = new Image();
playerImage.src = './assets/images/pikmin_sprite_sheet.png';


class Player {
    constructor(image, animationFramesX, animationFramesY, pwidth, pheight, posX, posY, scaledWidth, scaledHeight, movementSpeed, frameTicks, moveDir) {
        this.image = image

        this.animationFrameX = animationFramesX;
        this.animationFrameY = animationFramesY;
        this.posX = posX;
        this.posY = posY;
        this.pwidth = pwidth;
        this.pheight = pheight;

        this.scaledWidth = scaledWidth;
        this.scaledHeight = scaledHeight;

        this.width = 20;
        this.height = 58;

        this.moveDir = moveDir;
        this.movementSpeed = movementSpeed;
        this.frameTicks = 6

        this.frameIndexX = 0;
        this.frameIndexY = 0;
        this.tickCount = 0;

        this.alive = true;
        this.drown = false;

        this.flowerImage = this.image;
        this.flowerX = this.posX;
        this.flowerY = this.posY - 7;
    
        this.flowerFrameX = 342;
        this.flowerFrameY = 161;

        this.animate = false;
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
            // } else { 
                // if (!(obj.posX + 3 <= (this.posX + 6) + (this.width - 8) &&
                //     (obj.posX + 3) + (obj.scaledWidth - 5) >= (this.posX + 6) &&
                //     obj.posY + obj.scaledHeight >= (this.posY + 45) &&
                //     obj.posY <= (this.posY + 45) + (this.height - 45))) {
                // this.alive = false;
            }

            if ((this.posY >= 50) && (this.posY <= 245) &&
                (this.posX + 4 >= 0) && (this.posX + 4 <= 800) && (this.drown === true )) {
                let cycle = new Ghost(image, [2193], [359, 332, 306], 9, 23, player.posX, player.posY, 9 * 2, 23 * 2, false, false, 3, 10)
                movingObjects.push(cycle);
                this.posY = 640
                this.flowerY = 640
            }

        };

        // if ((this.posY >= 50) && (this.posY <= 245) && (!alive) &&
        //     (this.posX + 4 >= 0) && (this.posX + 4 <= 800)) {
        //     this.posY = 0
        // }
        // }
    }

    // surviving() {
    //     let ghostFrameTicks = 0;
    //     if (!this.alive) {
    //         this.animationFrameX = [2193];
    //         this.animationFrameY = [359, 332, 306];
    //         this.width = 9;
    //         this.height = 22;
    //         this.scaledWidth = this.width * 1.5;
    //         this.scaledHeight = this.height * 1.5;

    //         while (ghostFrameTicks < 30) {
    //             this.handleAnimation()
    //             ctx.drawImage(this.image, this.animationFrameX[this.frameIndexX], this.animationFrameY[this.frameIndexY], this.pwidth, this.pheight, this.posX, this.posY, this.scaledWidth, this.scaledHeight); // Player scaled by 1.5
    //             ghostFrameTicks += 1;
    //         }
    //     }
    // }

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
            ctx.drawImage(this.image, this.animationFrameX[this.frameIndexX], this.animationFrameY[this.frameIndexY], this.pwidth, this.pheight, this.posX, this.posY, this.scaledWidth, this.scaledHeight); // Player scaled by 1.5
            ctx.drawImage(this.flowerImage, this.flowerFrameX, this.flowerFrameY, 18, 12, this.flowerX, this.flowerY, 18 * 1.5, 12 * 1.5)
        } else { 
            ctx.drawImage(this.image, this.animationFrameX[0], this.animationFrameY[0], this.pwidth, this.pheight, this.posX, this.posY, this.scaledWidth, this.scaledHeight); // Player scaled by 1.5
            ctx.drawImage(this.flowerImage, this.flowerFrameX, this.flowerFrameY, 18, 12, this.flowerX, this.flowerY, 18 * 1.5, 12 * 1.5)
        }
        // const headFlower = new MovingObject(image, [342], [161], 18, 12, player.posX, player.posY, 18 * 1.5, 12 * 1.5, 0, 0)

        this.drowning();
        // this.surviving();
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "rgb(214, 214, 59)";
        // ctx.rect(this.posX + 5, this.posY + 30, this.width - 2, this.height - 30); // player hitbox ground
        // ctx.rect(this.posX + 6, this.posY + 45, this.width - 8, this.height - 45); // player hitbox water
        ctx.stroke();
    }
}
const player = new Player(playerImage, [14], [102], 16, 40, 300, 640, 16 * 1.5, 40 * 1.5, 7, 4, 'up') // player starting position
// const player = new Player(playerImage, [14], [102], 16, 40, 680, 0, 16 * 1.5, 40 * 1.5, 7, 4, 'up')
// constructor(image, animationFramesX, animationFramesY, pwidth, pheight, posX, posY, scaledWidth, scaledHeight, movementSpeed, frameTicks, moveDir) {
