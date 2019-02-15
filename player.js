
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
        ctx.rect(this.posX + 5, this.posY + 30, this.width - 2, this.height - 30); // player hitbox ground
        ctx.rect(this.posX + 6, this.posY + 45, this.width - 8, this.height - 45); // player hitbox water
        ctx.stroke();
    }
}

const player = new Player(playerImage, 12, 101, 16, 40, 300, 640, 24, 60, 7, 4)