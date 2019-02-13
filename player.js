class Player {
    constructor() {
        this.image = new Image();
        this.image.src = './assets/images/pikmin_sprite_sheet.png';

        this.posX = 300;
        this.posY = 640;

        this.stepDown = [12, 39, 67]
        this.stepDownIndex = 0;
        this.dir = 15
        this.currentLoopIndex = 0;
        this.frameCount = 0;
    }

    drawPlayer() {
        ctx.drawImage(this.image, this.stepDown[0], this.dir, 16, 40, this.posX, this.posY, 24, 60); // Player scaled by 1.5
        this.stepDown
    }

}

const player = new Player()