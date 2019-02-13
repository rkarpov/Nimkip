var canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 700;
var ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

const image = new Image();
image.src = './assets/images/pikmin_sprite_sheet.png';
const bulborb1 = new Enemy(image, [22, 87, 151, 216], 630, 61, 60, -100, 560, 76.25, 75, 4)
const bulborb2 = new Enemy(image, [22, 87, 151, 216], 630, 61, 60, -1550, 560, 76.25, 75, 4)
const bulborb3 = new Enemy(image, [22, 87, 151, 216], 630, 61, 60, -570, 560, 76.25, 75, 4)
const bulborb4 = new Enemy(image, [16, 81, 145, 210], 1406, 61, 60, -200, 480, 76.25, 75, 6)
const bulborb5 = new Enemy(image, [16, 81, 145, 210], 1406, 61, 60, -570, 480, 76.25, 75, 6)
const bulborb6 = new Enemy(image, [19, 84, 148, 213], 1155, 61, 60, -200, 400, 76.25, 75, 7)
const bulborb7 = new Enemy(image, [19, 84, 148, 213], 1155, 61, 60, -570, 400, 76.25, 75, 7)

const puffstool = new Enemy(image, [544, 709, 868], 1507, 117, 151, -200, 300, 76.05, 98.15, 3)

const whiteFlower1 = new Enemy(image, [2106], 138, 60, 52, -150, 230, 60, 52, 2)
const whiteFlower2 = new Enemy(image, [2106], 138, 60, 52, -200, 230, 60, 52, 2)
const purpleFlower1 = new Enemy(image, [2229], 74, 60, 52, -350, 230, 60, 52, 2)
const whiteFlower3 = new Enemy(image, [2106], 138, 60, 52, -500, 230, 60, 52, 2)
const whiteFlower4 = new Enemy(image, [2106], 138, 60, 52, -550, 230, 60, 52, 2)
const purpleFlower2 = new Enemy(image, [2229], 74, 60, 52, -700, 230, 60, 52, 2)
const whiteFlower5 = new Enemy(image, [2106], 138, 60, 52, -850, 230, 60, 52, 2)
const whiteFlower6 = new Enemy(image, [2106], 138, 60, 52, -900, 230, 60, 52, 2)

const tadpole1 = new Platform(image, 546, [911, 937, 963], 40, 23, -100, 200, 40, 23, 3)


window.addEventListener("keydown", movePlayer, false);

function movePlayer(e) {
    // debugger
    switch (e.keyCode) {
        case 37: // left
            player.posX -= 5;
            break;
        case 38: // up
            player.posY -= 5;
            player.dir = 101
            player.stepDown = [12, 39, 67]
            break;
        case 39: // right
            player.posX += 5;
            player.dir = 58
            player.stepDown = [20, 41, 65]
            break;
        case 40: // down
            player.posY += 5;
            player.dir = 15
            player.stepDown = [12, 39, 67]
            break;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.drawPlayer();
    bulborb1.drawEnemy();
    bulborb2.drawEnemy();
    bulborb3.drawEnemy();
    bulborb4.drawEnemy();
    bulborb5.drawEnemy();
    bulborb6.drawEnemy();
    bulborb7.drawEnemy();
    puffstool.drawEnemy();

    whiteFlower1.drawEnemy();
    whiteFlower2.drawEnemy();
    purpleFlower1.drawEnemy();
    whiteFlower3.drawEnemy();
    whiteFlower4.drawEnemy();
    purpleFlower2.drawEnemy();
    whiteFlower5.drawEnemy();
    whiteFlower6.drawEnemy();

    tadpole1.drawPlatform();

    window.requestAnimationFrame(draw);
}

draw();