var canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 700;
var ctx = canvas.getContext('2d');




// ctx.imageSmoothingEnabled = false;

const image = new Image();
image.src = './assets/images/pikmin_sprite_sheet.png';
const leftImage = new Image();
leftImage.src = './assets/images/left_sprites.png';

const bulborb1 = new MovingObject(image, [22, 87, 151, 216], [630], 61, 60, -100, 560, 76.25, 75, true, false, 4, 6)
const bulborb2 = new MovingObject(image, [22, 87, 151, 216], [630], 61, 60, -1550, 560, 76.25, 75, true, false, 4, 6)
const bulborb3 = new MovingObject(image, [22, 87, 151, 216], [630], 61, 60, -570, 560, 76.25, 75, true, false, 4, 6)
// const bulborb4 = new MovingObject(image, [16, 81, 145, 210], [1406], 61, 60, -200, 480, 76.25, 75, true, false, 6, 5)
// const bulborb5 = new MovingObject(image, [16, 81, 145, 210], [1406], 61, 60, -570, 480, 76.25, 75, true, false, 6, 5)
const bulborb4 = new MovingObject(leftImage, [3672, 3607, 3543, 3478], [1406], 61, 60, 1200, 480, 76.25, 75, true, false, 6, 5, 'startRight')
const bulborb5 = new MovingObject(leftImage, [3672, 3607, 3543, 3478], [1406], 61, 60, 1570, 480, 76.25, 75, true, false, 6, 5, 'startRight')
const bulborb6 = new MovingObject(image, [19, 84, 148, 213], [1155], 61, 60, -200, 400, 76.25, 75, true, false, 7, 4)
const bulborb7 = new MovingObject(image, [19, 84, 148, 213], [1155], 61, 60, -570, 400, 76.25, 75, true, false, 7, 4)

const puffstool = new MovingObject(image, [544, 709, 868], [1507], 117, 151, -200, 300, 76.05, 98.15, true, false, 3, 6)

const whiteFlower1 = new MovingObject(image, [2106], [138], 60, 52, -150, 247, 60, 52, false, true, 2, 4)
const whiteFlower2 = new MovingObject(image, [2106], [138], 60, 52, -200, 247, 60, 52, false, true, 2, 4)
const purpleFlower1 = new MovingObject(image, [2229], [74], 60, 52, -350, 247, 60, 52, false, true, 2, 4)
const whiteFlower3 = new MovingObject(image, [2106], [138], 60, 52, -500, 247, 60, 52, false, true, 2, 4)
const whiteFlower4 = new MovingObject(image, [2106], [138], 60, 52, -550, 247, 60, 52, false, true, 2, 4)
const purpleFlower2 = new MovingObject(image, [2229], [74], 60, 52, -700, 247, 60, 52, false, true, 2, 4)
const whiteFlower5 = new MovingObject(image, [2106], [138], 60, 52, -850, 247, 60, 52, false, true, 2, 4)
const whiteFlower6 = new MovingObject(image, [2106], [138], 60, 52, -900, 247, 60, 52, false, true, 2, 4)

const wogpole1 = new MovingObject(image, [546], [911, 937, 963], 40, 23, -125, 200, 40, 23, false, true, 3, 5)
const wogpole2 = new MovingObject(image, [546], [911, 937, 963], 40, 23, -25, 200, 40, 23, false, true, 3, 5)
const wogpole9 = new MovingObject(image, [546], [911, 937, 963], 40, 23, -75, 200, 40, 23, false, true, 3, 5)

const wogpole3 = new MovingObject(image, [546], [911, 937, 963], 40, 23, -375, 200, 40, 23, false, true, 3, 5)
const wogpole7 = new MovingObject(image, [546], [911, 937, 963], 40, 23, -325, 200, 40, 23, false, true, 3, 5)
const wogpole8 = new MovingObject(image, [546], [911, 937, 963], 40, 23, -425, 200, 40, 23, false, true, 3, 5)

const wogpole4 = new MovingObject(image, [546], [911, 937, 963], 40, 23, -625, 200, 40, 23, false, true, 3, 5)
const wogpole5 = new MovingObject(image, [546], [911, 937, 963], 40, 23, -675, 200, 40, 23, false, true, 3, 5)
const wogpole6 = new MovingObject(image, [546], [911, 937, 963], 40, 23, -725, 200, 40, 23, false, true, 3, 5)

// const wollywog1 = new MovingObject(image, 840, [798], 47, 50, -100, 150, 47, 50, true, false, 1, 4)
const row2Flower1 = new MovingObject(image, [2229], [74], 60, 52, -150, 100, 60, 52, false, true, 5, 4) // purple
const row2Flower2 = new MovingObject(image, [2229], [14], 60, 52, -200, 100, 60, 52, false, true, 5, 4) // yellow
const row2Flower3 = new MovingObject(image, [2229], [74], 60, 52, -250, 100, 60, 52, false, true, 5, 4) // purple
// const row2Flower2 = new MovingObject(image, [2106], [138], 60, 52, -200, 100, 60, 52, false, true, 5, 4) // purple
// const row2Flower2 = new MovingObject(image, [2109], [71], 60, 52, -200, 100, 60, 52, false, true, 5, 4)
// const row2Flower3 = new MovingObject(image, [2106], [138], 60, 52, -250, 100, 60, 52, false, true, 5, 4)
const row2Flower4 = new MovingObject(image, [2229], [74], 60, 52, -450, 100, 60, 52, false, true, 5, 4)
const row2Flower5 = new MovingObject(image, [2229], [14], 60, 52, -500, 100, 60, 52, false, true, 5, 4)
const row2Flower6 = new MovingObject(image, [2229], [74], 60, 52, -550, 100, 60, 52, false, true, 5, 4)
const row2Flower7 = new MovingObject(image, [2229], [74], 60, 52, -750, 100, 60, 52, false, true, 5, 4)
const row2Flower8 = new MovingObject(image, [2229], [14], 60, 52, -800, 100, 60, 52, false, true, 5, 4)
const row2Flower9 = new MovingObject(image, [2229], [74], 60, 52, -850, 100, 60, 52, false, true, 5, 4)

// const wogImage = new Image(); 
// wogImage.src = './assets/images/wollywog.png';
// // const wollywog1 = new MovingObject(wogImage, [382, 335, 286], [551, 534, 507], 31, 33, -100, 100, 31, 33, 3, 5)
// const wollywog1 = new MovingObject(wogImage, [286, 507], [507, 411], 31, 33, -100, 100, 31, 33, 3, 5)


// const whale = new Image();
// whale.src = './assets/images/tara.png'
// const wollywog1 = new MovingObject(whale, [11, 100, 201, 293, 385, 481], [95, 98, 97, 95, 96, 97], 72, 31, -100, 100, 72, 31, 3, 5)

window.addEventListener("keydown", movePlayer, false);

function movePlayer(e) {
    // debugger
    switch (e.keyCode) {
        case 37: // left
            player.posX -= 35;
            break;
        case 38: // up
            player.posY -= 35;
            player.dir = 101
            player.stepDown = [12, 39, 67]
            break;
        case 39: // right
            player.posX += 35;
            player.dir = 58
            player.stepDown = [20, 41, 65]
            break;
        case 40: // down
            player.posY += 35;
            player.dir = 15
            player.stepDown = [12, 39, 67]
            break;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    render();
    player.drawPlayer();
    bulborb1.drawMovingObject();
    bulborb2.drawMovingObject();
    bulborb3.drawMovingObject();
    bulborb4.drawMovingObject();
    bulborb5.drawMovingObject();
    bulborb6.drawMovingObject();
    bulborb7.drawMovingObject();

    puffstool.drawMovingObject();

    whiteFlower1.drawMovingObject();
    whiteFlower2.drawMovingObject();
    purpleFlower1.drawMovingObject();
    whiteFlower3.drawMovingObject();
    whiteFlower4.drawMovingObject();
    purpleFlower2.drawMovingObject();
    whiteFlower5.drawMovingObject();
    whiteFlower6.drawMovingObject();

    wogpole1.drawMovingObject();
    wogpole2.drawMovingObject();
    wogpole3.drawMovingObject();
    wogpole4.drawMovingObject();
    wogpole5.drawMovingObject();
    wogpole6.drawMovingObject();
    wogpole7.drawMovingObject();
    wogpole8.drawMovingObject();
    wogpole9.drawMovingObject();

    row2Flower1.drawMovingObject();
    row2Flower2.drawMovingObject();
    row2Flower3.drawMovingObject();
    row2Flower4.drawMovingObject();
    row2Flower5.drawMovingObject();
    row2Flower6.drawMovingObject();
    row2Flower7.drawMovingObject();
    row2Flower8.drawMovingObject();
    row2Flower9.drawMovingObject();

    // wollywog1.drawMovingObject();

    // whale.drawMovingObject();

    window.requestAnimationFrame(draw);
}

draw();