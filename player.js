class Player {
    constructor() {
        this.image = new Image();
        this.image.src = './assets/images/pikmin_sprite_sheet.png';

        // this.posX = 300;
        // this.posY = 640;

        this.posX = 0;
        this.posY = 600;

        this.width = 20;
        this.height = 58;

        this.stepDown = [12, 39, 67]
        this.stepDownIndex = 0;
        this.dir = 15
        this.currentLoopIndex = 0;
        this.frameCount = 0;
    }

    drawPlayer() {
        ctx.drawImage(this.image, this.stepDown[0], this.dir, 16, 40, this.posX, this.posY, 24, 60); // Player scaled by 1.5
        this.stepDown

        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "red";
        ctx.rect(this.posX + 5, this.posY + 10, this.width - 2, this.height - 10);
        ctx.stroke();
    }

}

const player = new Player()