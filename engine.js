// import { movePlayer } from './player';
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

// const row1Flower1 = new MovingObject(image, [2106], [138], 60, 52, -150, 247, 60, 52, false, true, 2, 4)
// const row1Flower2 = new MovingObject(image, [2106], [138], 60, 52, -200, 247, 60, 52, false, true, 2, 4)
// const row1Flower3 = new MovingObject(image, [2229], [74], 60, 52, -350, 247, 60, 52, false, true, 2, 4)
// const row1Flower4 = new MovingObject(image, [2106], [138], 60, 52, -500, 247, 60, 52, false, true, 2, 4)
// const row1Flower5 = new MovingObject(image, [2106], [138], 60, 52, -550, 247, 60, 52, false, true, 2, 4)
// const row1Flower6 = new MovingObject(image, [2229], [74], 60, 52, -700, 247, 60, 52, false, true, 2, 4)
// const row1Flower7 = new MovingObject(image, [2106], [138], 60, 52, -850, 247, 60, 52, false, true, 2, 4)
// const row1Flower8 = new MovingObject(image, [2106], [138], 60, 52, -900, 247, 60, 52, false, true, 2, 4)
// const row1Flower9 = new MovingObject(image, [2106], [138], 60, 52, -950, 247, 60, 52, false, true, 2, 4)

const row1Flower1 = new MovingObject(image, [2106], [138], 60, 52, -75, 247, 60, 52, false, true, 2, 4)
const row1Flower2 = new MovingObject(image, [2106], [138], 60, 52, -125, 247, 60, 52, false, true, 2, 4)
const row1Flower3 = new MovingObject(image, [2229], [74], 60, 52, -300, 247, 60, 52, false, true, 2, 4)
const row1Flower4 = new MovingObject(image, [2229], [74], 60, 52, -350, 247, 60, 52, false, true, 2, 4)
const row1Flower5 = new MovingObject(image, [2106], [138], 60, 52, -525, 247, 60, 52, false, true, 2, 4)
const row1Flower6 = new MovingObject(image, [2106], [138], 60, 52, -575, 247, 60, 52, false, true, 2, 4)
const row1Flower7 = new MovingObject(image, [2229], [74], 60, 52, -750, 247, 60, 52, false, true, 2, 4)
const row1Flower8 = new MovingObject(image, [2229], [74], 60, 52, -800, 247, 60, 52, false, true, 2, 4)
const row1Flower9 = new MovingObject(image, [2106], [138], 60, 52, -700, 247, 60, 52, false, true, 2, 4)

const wogpole1 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1110 + 155, 150, 40, 23, false, true, 3, 5, 'startRight')
const wogpole2 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1030 + 155, 150, 40, 23, false, true, 3, 5, 'startRight')
const wogpole3 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1070 + 155, 150, 40, 23, false, true, 3, 5, 'startRight')

const wogpole4 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1370 + 155, 150, 40, 23, false, true, 3, 5, 'startRight')
const wogpole5 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1330 + 155, 150, 40, 23, false, true, 3, 5, 'startRight')
const wogpole6 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1410 + 155, 150, 40, 23, false, true, 3, 5, 'startRight')
// 146.66 spaced evenly by 3
const wogpole7 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1630 + 155, 150, 40, 23, false, true, 3, 5, 'startRight')
const wogpole8 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1670 + 155, 150, 40, 23, false, true, 3, 5, 'startRight')
const wogpole9 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1710 + 155, 150, 40, 23, false, true, 3, 5, 'startRight')


// const wogpole1 = new MovingObject(image, [546], [911, 937, 963], 40, 23, -125, 150, 40, 23, false, true, 3, 5)
// const wogpole2 = new MovingObject(image, [546], [911, 937, 963], 40, 23, -25, 150, 40, 23, false, true, 3, 5)
// const wogpole9 = new MovingObject(image, [546], [911, 937, 963], 40, 23, -75, 150, 40, 23, false, true, 3, 5)

// const wogpole3 = new MovingObject(image, [546], [911, 937, 963], 40, 23, -375, 150, 40, 23, false, true, 3, 5)
// const wogpole7 = new MovingObject(image, [546], [911, 937, 963], 40, 23, -325, 150, 40, 23, false, true, 3, 5)
// const wogpole8 = new MovingObject(image, [546], [911, 937, 963], 40, 23, -425, 150, 40, 23, false, true, 3, 5)

// const wogpole4 = new MovingObject(image, [546], [911, 937, 963], 40, 23, -625, 150, 40, 23, false, true, 3, 5)
// const wogpole5 = new MovingObject(image, [546], [911, 937, 963], 40, 23, -675, 150, 40, 23, false, true, 3, 5)
// const wogpole6 = new MovingObject(image, [546], [911, 937, 963], 40, 23, -725, 150, 40, 23, false, true, 3, 5)

const row2Flower1 = new MovingObject(image, [2229], [74], 60, 52, -150, 173, 60, 52, false, true, 4, 4) // purple
const row2Flower2 = new MovingObject(image, [2229], [14], 60, 52, -200, 173, 60, 52, false, true, 4, 4) // yellow
const row2Flower3 = new MovingObject(image, [2229], [74], 60, 52, -250, 173, 60, 52, false, true, 4, 4) // purple
// const row2Flower2 = new MovingObject(image, [2106], [138], 60, 52, -200, 173, 60, 52, false, true, 4, 4) // purple
// const row2Flower2 = new MovingObject(image, [2109], [71], 60, 52, -200, 173, 60, 52, false, true, 4, 4)
// const row2Flower3 = new MovingObject(image, [2106], [138], 60, 52, -250, 173, 60, 52, false, true, 4, 4)
const row2Flower4 = new MovingObject(image, [2229], [74], 60, 52, -450, 173, 60, 52, false, true, 4, 4)
const row2Flower5 = new MovingObject(image, [2229], [14], 60, 52, -500, 173, 60, 52, false, true, 4, 4)
const row2Flower6 = new MovingObject(image, [2229], [74], 60, 52, -550, 173, 60, 52, false, true, 4, 4)
const row2Flower7 = new MovingObject(image, [2229], [74], 60, 52, -750, 173, 60, 52, false, true, 4, 4)
const row2Flower8 = new MovingObject(image, [2229], [14], 60, 52, -800, 173, 60, 52, false, true, 4, 4)
const row2Flower9 = new MovingObject(image, [2229], [74], 60, 52, -850, 173, 60, 52, false, true, 4, 4)


const row2wogpole1 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1110, 225, 40, 23, false, true, 3, 5, 'startRight')
const row2wogpole2 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1030, 225, 40, 23, false, true, 3, 5, 'startRight')
const row2wogpole3 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1070, 225, 40, 23, false, true, 3, 5, 'startRight')

const row2wogpole4 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1370, 225, 40, 23, false, true, 3, 5, 'startRight')
const row2wogpole5 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1330, 225, 40, 23, false, true, 3, 5, 'startRight')
const row2wogpole6 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1410, 225, 40, 23, false, true, 3, 5, 'startRight')
// 146.66 spaced evenly by 3
const row2wogpole7 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1630, 225, 40, 23, false, true, 3, 5, 'startRight')
const row2wogpole8 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1670, 225, 40, 23, false, true, 3, 5, 'startRight')
const row2wogpole9 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1710, 225, 40, 23, false, true, 3, 5, 'startRight')

const row3Flower1 = new MovingObject(image, [2229], [74], 60, 52, -180, 100, 60, 52, false, true, 2, 4)
const row3Flower2 = new MovingObject(image, [2229], [74], 60, 52, -230, 100, 60, 52, false, true, 2, 4)
const row3Flower3 = new MovingObject(image, [2106], [138], 60, 52, -405, 100, 60, 52, false, true, 2, 4)
const row3Flower4 = new MovingObject(image, [2106], [138], 60, 52, -455, 100, 60, 52, false, true, 2, 4)
const row3Flower5 = new MovingObject(image, [2229], [74], 60, 52, -630, 100, 60, 52, false, true, 2, 4)
const row3Flower6 = new MovingObject(image, [2229], [74], 60, 52, -680, 100, 60, 52, false, true, 2, 4)
const row3Flower7 = new MovingObject(image, [2106], [138], 60, 52, -855, 100, 60, 52, false, true, 2, 4)
const row3Flower8 = new MovingObject(image, [2106], [138], 60, 52, -905, 100, 60, 52, false, true, 2, 4)
const row3Flower9 = new MovingObject(image, [2106], [138], 60, 52, -700, 100, 60, 52, false, true, 2, 4)

// const stationaryBridge1 = new MovingObject(image, [2229], [74], 60, 52, 100, 100, 100, 100, false, true, 1, 0)
// const stationaryBridge2 = new MovingObject(image, [2229], [74], 60, 52, 100, 200, 100, 100, false, true, 1, 0)
// const stationaryBridge2 = new MovingObject(image, [2229], [74], 60, 52, 300, 100, 200, 200, false, true, 3, 0)
// const stationaryBridge2 = new MovingObject(image, [2229], [74], 60, 52, 300, 100, 200, 200, false, true, 3, 0)

// const wogImage = new Image(); 
// wogImage.src = './assets/images/wollywog.png';
// // const wollywog1 = new MovingObject(wogImage, [382, 335, 286], [551, 534, 507], 31, 33, -100, 100, 31, 33, 3, 5)
// const wollywog1 = new MovingObject(wogImage, [286, 507], [507, 411], 31, 33, -100, 100, 31, 33, 3, 5)


// const whale = new Image();
// whale.src = './assets/images/tara.png'
// const wollywog1 = new MovingObject(whale, [11, 100, 201, 293, 385, 481], [95, 98, 97, 95, 96, 97], 72, 31, -100, 100, 72, 31, 3, 5)


const currentlyPressedKeys = {};
window.addEventListener('keydown', (e) => {
    currentlyPressedKeys[e.key] = true;
});
window.addEventListener('keyup', (e) => {
    currentlyPressedKeys[e.key] = false;
});

function movePlayer() {
    if (currentlyPressedKeys.ArrowUp) {
        player.posY -= 4;
    } else if (currentlyPressedKeys.ArrowDown) {
        player.posY += 4;
    } else if (currentlyPressedKeys.ArrowLeft) {
        player.posX -= 4
    } else if (currentlyPressedKeys.ArrowRight) {
        player.posX += 4;
    }
}

// var floatValues = [];

const floatingObjects = [
    row1Flower1,
    row1Flower2,
    row1Flower3,
    row1Flower4,
    row1Flower5,
    row1Flower6,
    row1Flower7,
    row1Flower8,
    row1Flower9,
    wogpole1,
    wogpole2,
    wogpole9,
    wogpole3,
    wogpole7,
    wogpole8,
    wogpole4,
    wogpole5,
    wogpole6,
    row2Flower1,
    row2Flower2,
    row2Flower3,
    row2Flower4,
    row2Flower5,
    row2Flower6,
    row2Flower7,
    row2Flower8,
    row2wogpole1,
    row2wogpole2,
    row2wogpole9,
    row2wogpole3,
    row2wogpole7,
    row2wogpole8,
    row2wogpole4,
    row2wogpole5,
    row2wogpole6,
    row3Flower1,
    row3Flower2,
    row3Flower3,
    row3Flower4,
    row3Flower5,
    row3Flower6,
    row3Flower7,
    row3Flower8,
    // row3Flower9,
    // stationaryBridge1,
    // stationaryBridge2
    // stationaryBridge3,
    // stationaryBridge4,
]


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    render();
    movePlayer();
        
    bulborb1.drawMovingObject();
    bulborb2.drawMovingObject();
    bulborb3.drawMovingObject();
    bulborb4.drawMovingObject();
    bulborb5.drawMovingObject();
    bulborb6.drawMovingObject();
    bulborb7.drawMovingObject();

    puffstool.drawMovingObject();

    row1Flower1.drawMovingObject();
    row1Flower2.drawMovingObject();
    row1Flower3.drawMovingObject();
    row1Flower4.drawMovingObject();
    row1Flower5.drawMovingObject();
    row1Flower6.drawMovingObject();
    row1Flower7.drawMovingObject();
    row1Flower8.drawMovingObject();
    // row1Flower9.drawMovingObject();

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

    // row3Flower7.drawMovingObject();
    // row3Flower8.drawMovingObject();


    row2wogpole1.drawMovingObject();
    row2wogpole2.drawMovingObject();
    row2wogpole3.drawMovingObject();
    row2wogpole4.drawMovingObject();
    row2wogpole5.drawMovingObject();
    row2wogpole6.drawMovingObject();
    row2wogpole7.drawMovingObject();
    row2wogpole8.drawMovingObject();
    row2wogpole9.drawMovingObject();

    row3Flower1.drawMovingObject();
    row3Flower2.drawMovingObject();
    row3Flower3.drawMovingObject();
    row3Flower4.drawMovingObject();
    row3Flower5.drawMovingObject();
    row3Flower6.drawMovingObject();
    row3Flower7.drawMovingObject();
    row3Flower8.drawMovingObject();
    // row3Flower9.drawMovingObject();

    player.drawPlayer();

    // debugger
    // stationaryBridge1.drawMovingObject();
    // stationaryBridge2.drawMovingObject();
    // stationaryBridge3.drawMovingObject();
    // stationaryBridge4.drawMovingObject();

    // wollywog1.drawMovingObject();

    // whale.drawMovingObject();
    // player.drawPlayer();
    
    // floatValues = false;
    window.requestAnimationFrame(draw);
}

draw();