var canvas = document.getElementById('canvas');
canvas.width = 1000;
canvas.height = 700;
var ctx = canvas.getContext('2d');
var sound = document.getElementById('sound');
var bgm = document.getElementById('bgm');
var startBtn = document.getElementById('startBtn');
var resetBtn = document.getElementById('resetBtn');
var muteBtn = document.getElementById('muteBtn');
var soundBtn = document.getElementById('soundBtn');

const mapImage = new Image();
mapImage.src = './assets/images/Pikmin_1_Map.png';

const pikminOlimarImage = new Image();
pikminOlimarImage.src = './assets/images/olimar_pikmin.png'
// const olimar = new MovingObject(pikminOlimarImage, [133, 223, 253], [147, 223, 149], 28, 49, 700, 0, 28, 49, false, false, 0, 12)
const redTarget = new MovingObject(pikminOlimarImage, [323, 345, 367], [304, 304, 304], 19, 19, 704, 50, 30, 30, false, true, 0, 15)
const yellowTarget = new MovingObject(pikminOlimarImage, [323, 345, 367], [304, 304, 304], 19, 19, 379, 50, 30, 30, false, true, 0, 15)
const blueTarget = new MovingObject(pikminOlimarImage, [323, 345, 367], [304, 304, 304], 19, 19, 57, 50, 30, 30, false, true, 0, 15)
const targets = [redTarget, yellowTarget, blueTarget]
let target = targets[0]

const shipImage = new Image();
shipImage.src = './assets/images/ship.png'
const ship = new ShipTimer(shipImage, [287], [236], 106, 168, 835, 750, 137.80, 218.40, false, false, 0.5, 0)

const image = new Image();
image.src = './assets/images/pikmin_sprite_sheet.png';
const leftImage = new Image();
leftImage.src = './assets/images/left_sprites.png';

const water = new Image();
water.src = './assets/images/wfall2.png';
const cliff = new Image();
cliff.src = './assets/images/cliffs.gif';

water0 = new MovingObject(water, [765], [59], 317, 426, 0, 0, 317, 426, false, false, 0, 0)
water1 = new MovingObject(water, [765], [59], 317, 426, 0, 0, 317, 426, false, false, 0, 0)
water2 = new MovingObject(water, [765], [59], 317, 426, 300, 0, 317, 426, false, false, 0, 0)
water3 = new MovingObject(water, [765], [59], 317, 426, 600, 0, 317, 426, false, false, 0, 0)

cliff1 = new MovingObject(cliff, [467], [123], 385, 63, -35, 35, 385 * .5, 63 * 1.1, false, true, 0, 0)
cliff2 = new MovingObject(cliff, [467], [123], 385, 63, 296, 35, 385 * .5, 63 * 1.1, false, true, 0, 0)
cliff3 = new MovingObject(cliff, [467], [123], 385, 63, 630, 35, 385 * .5, 63 * 1.1, false, true, 0, 0)

waterfall1 = new MovingObject(water, [14, 206, 390, 587], [375], 173, 233, 152, 0, 173 * .85, 233 * .5, false, false, 0, 4)
waterfall2 = new MovingObject(water, [14, 206, 390, 587], [375], 173, 233, 487, 0, 173 * .85, 233 * .5, false, false, 0, 4)

const redOnion = new MovingObject(image, [717], [5, 128], 111, 113, 675, 5, 88.8, 90.4, false, false, 0, 15)
const blueOnion = new MovingObject(image, [1237], [9, 125], 111, 113, 28, 5, 88.8, 90.4, false, false, 0, 15)
const yellowOnion = new MovingObject(image,[978], [9, 125], 111, 113, 350, 5, 88.8, 90.4, false, false, 0, 15)

const bulborb1 = new MovingObject(image, [22, 87, 151, 216], [630], 61, 60, -100, 585, 76.25, 75, true, false, 3, 6)
const bulborb2 = new MovingObject(image, [22, 87, 151, 216], [630], 61, 60, -1645, 585, 76.25, 75, true, false, 3, 6)
const bulborb3 = new MovingObject(image, [22, 87, 151, 216], [630], 61, 60, -2040, 585, 76.25, 75, true, false, 3, 6)
const bulborb4 = new MovingObject(image, [22, 87, 151, 216], [630], 61, 60, -590, 585, 76.25, 75, true, false, 3, 6)
const bulborb5 = new MovingObject(leftImage, [3672, 3607, 3543, 3478], [1406], 61, 60, 1200, 525, 76.25, 75, true, false, 4, 4, 'startRight')
const bulborb6 = new MovingObject(leftImage, [3672, 3607, 3543, 3478], [1406], 61, 60, 1650, 525, 76.25, 75, true, false, 4, 4, 'startRight')
const bulborb7 = new MovingObject(image, [19, 84, 148, 213], [1155], 61, 60, -200, 460, 76.25, 75, true, false, 4, 4)
const bulborb8 = new MovingObject(image, [19, 84, 148, 213], [1155], 61, 60, -570, 460, 76.25, 75, true, false, 4, 4)
const bulborb9 = new MovingObject(leftImage, [3666, 3601, 3537, 3472], [630], 61, 60, 1120, 400, 76.25, 75, true, false, 3, 6, 'startRight')
const bulborb10 = new MovingObject(leftImage, [3677, 3612, 3548, 3483], [875], 61, 60, 1200, 400, 76.25, 75, true, false, 3, 6, 'startRight')
const bulborb11 = new MovingObject(leftImage, [3666, 3601, 3537, 3472], [630], 61, 60, 1280, 400, 76.25, 75, true, false, 3, 6, 'startRight')
const bulborb12 = new MovingObject(leftImage, [3666, 3601, 3537, 3472], [630], 61, 60, 1570, 400, 76.25, 75, true, false, 3, 6, 'startRight')
const bulborb13 = new MovingObject(leftImage, [3479, 3544, 3608, 3673], [1689], 61, 60, 1650, 400, 76.25, 75, true, false, 3, 6, 'startRight')
const bulborb14 = new MovingObject(leftImage, [3666, 3601, 3537, 3472], [630], 61, 60, 1730, 400, 76.25, 75, true, false, 3, 6, 'startRight')

const puffstool1 = new MovingObject(image, [544, 709, 868], [1507], 117, 151, -200, 328, 70.2, 90.6, true, false, 3, 6)
const puffstool2 = new MovingObject(image, [544, 709, 868], [1507], 117, 151, -300, 328, 70.2, 90.6, true, false, 3, 6)

const breadbug1 = new MovingObject(image, [3449, 3524, 3617], [164], 73, 65, -650, 355, 73, 65, true, false, 3, 6)
const breadbug2 = new MovingObject(image, [3449, 3524, 3617], [164], 73, 65, -750, 355, 73, 65, true, false, 3, 6)

const row1Flower1 = new MovingObject(image, [2106], [138], 60, 52, -75, 247, 60, 52, false, true, 2, 4)
const row1Flower2 = new MovingObject(image, [2106], [138], 60, 52, -125, 247, 60, 52, false, true, 2, 4)
const row1Flower3 = new MovingObject(image, [2229], [74], 60, 52, -300, 247, 60, 52, false, true, 2, 4)
const row1Flower4 = new MovingObject(image, [2229], [74], 60, 52, -350, 247, 60, 52, false, true, 2, 4)
const row1Flower5 = new MovingObject(image, [2106], [138], 60, 52, -525, 247, 60, 52, false, true, 2, 4)
const row1Flower6 = new MovingObject(image, [2106], [138], 60, 52, -575, 247, 60, 52, false, true, 2, 4)
const row1Flower7 = new MovingObject(image, [2229], [74], 60, 52, -750, 247, 60, 52, false, true, 2, 4)
const row1Flower8 = new MovingObject(image, [2229], [74], 60, 52, -800, 247, 60, 52, false, true, 2, 4)
const row1Flower9 = new MovingObject(image, [2106], [138], 60, 52, -700, 247, 60, 52, false, true, 2, 4)

const wogpole1 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1110 + 155, 151, 40 * 1.05, 23, false, true, 2, 5, 'startRight')
const wogpole2 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1030 + 155, 151, 40 * 1.05, 23, false, true, 2, 5, 'startRight')
const wogpole3 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1070 + 155, 151, 40 * 1.05, 23, false, true, 2, 5, 'startRight')

const wogpole4 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1370 + 155, 151, 40 * 1.05, 23, false, true, 2, 5, 'startRight')
const wogpole5 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1330 + 155, 151, 40 * 1.05, 23, false, true, 2, 5, 'startRight')
const wogpole6 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1410 + 155, 151, 40 * 1.05, 23, false, true, 2, 5, 'startRight')
const wogpole7 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1630 + 155, 151, 40 * 1.05, 23, false, true, 2, 5, 'startRight')
const wogpole8 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1670 + 155, 151, 40 * 1.05, 23, false, true, 2, 5, 'startRight')
const wogpole9 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1710 + 155, 151, 40 * 1.05, 23, false, true, 2, 5, 'startRight')

const row2Flower1 = new MovingObject(image, [2229], [74], 60, 52, -150, 173, 60, 52, false, true, 2.5, 4) // purple
const row2Flower2 = new MovingObject(image, [2229], [14], 60, 52, -200, 173, 60, 52, false, true, 2.5, 4) // yellow
const row2Flower3 = new MovingObject(image, [2229], [74], 60, 52, -250, 173, 60, 52, false, true, 2.5, 4) // purple
const row2Flower4 = new MovingObject(image, [2229], [74], 60, 52, -450, 173, 60, 52, false, true, 2.5, 4)
const row2Flower5 = new MovingObject(image, [2229], [14], 60, 52, -500, 173, 60, 52, false, true, 2.5, 4)
const row2Flower6 = new MovingObject(image, [2229], [74], 60, 52, -550, 173, 60, 52, false, true, 2.5, 4)
const row2Flower7 = new MovingObject(image, [2229], [74], 60, 52, -750, 173, 60, 52, false, true, 2.5, 4)
const row2Flower8 = new MovingObject(image, [2229], [14], 60, 52, -800, 173, 60, 52, false, true, 2.5, 4)
const row2Flower9 = new MovingObject(image, [2229], [74], 60, 52, -850, 173, 60, 52, false, true, 2.5, 4)

const row2wogpole1 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1110, 225, 40 * 1.05, 23, false, true, 2, 5, 'startRight')
const row2wogpole2 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1070, 225, 40 * 1.05, 23, false, true, 2, 5, 'startRight')
const row2wogpole3 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1030, 225, 40 * 1.05, 23, false, true, 2, 5, 'startRight')

const row2wogpole4 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1370, 225, 40 * 1.05, 23, false, true, 2, 5, 'startRight')
const row2wogpole5 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1330, 225, 40 * 1.05, 23, false, true, 2, 5, 'startRight')
const row2wogpole6 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1410, 225, 40 * 1.05, 23, false, true, 2, 5, 'startRight')
const row2wogpole7 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1630, 225, 40 * 1.05, 23, false, true, 2, 5, 'startRight')
const row2wogpole8 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1670, 225, 40 * 1.05, 23, false, true, 2, 5, 'startRight')
const row2wogpole9 = new MovingObject(leftImage, [3163], [911, 937, 963], 40, 23, 1710, 225, 40 * 1.05, 23, false, true, 2, 5, 'startRight')

const row3Flower1 = new MovingObject(image, [2229], [74], 60, 52, -180, 100, 60, 52, false, true, 2, 4)
const row3Flower2 = new MovingObject(image, [2229], [74], 60, 52, -230, 100, 60, 52, false, true, 2, 4)
const row3Flower3 = new MovingObject(image, [2106], [138], 60, 52, -405, 100, 60, 52, false, true, 2, 4)
const row3Flower4 = new MovingObject(image, [2106], [138], 60, 52, -455, 100, 60, 52, false, true, 2, 4)
const row3Flower5 = new MovingObject(image, [2229], [74], 60, 52, -630, 100, 60, 52, false, true, 2, 4)
const row3Flower6 = new MovingObject(image, [2229], [74], 60, 52, -680, 100, 60, 52, false, true, 2, 4)
const row3Flower7 = new MovingObject(image, [2106], [138], 60, 52, -855, 100, 60, 52, false, true, 2, 4)
const row3Flower8 = new MovingObject(image, [2106], [138], 60, 52, -905, 100, 60, 52, false, true, 2, 4)
const row3Flower9 = new MovingObject(image, [2106], [138], 60, 52, -700, 100, 60, 52, false, true, 2, 4)

let gameStarted = false;
const currentlyPressedKeys = {};
window.addEventListener('keydown', (e) => {
    currentlyPressedKeys[e.key] = true;
    if ((gameStarted === false) && (currentlyPressedKeys.Enter || e.key === ' ')) { draw() }
    if ((resetBtn.style.display === 'inline') && (currentlyPressedKeys.Enter || e.key === ' ')) { reset() }
});
window.addEventListener('keyup', (e) => {
    currentlyPressedKeys[e.key] = false;
});

function mute() {
    bgm.pause();
}

const floatingObjects = [
    row1Flower1, row1Flower2, row1Flower3, row1Flower4, row1Flower5, row1Flower6, row1Flower7, row1Flower8, row1Flower9,
    wogpole3, wogpole2, wogpole1, wogpole6, wogpole5, wogpole4, wogpole9, wogpole8, wogpole7,
    row2Flower1, row2Flower2, row2Flower3, row2Flower4, row2Flower5, row2Flower6, row2Flower7, row2Flower8,
    row2wogpole1, row2wogpole2, row2wogpole9, row2wogpole3, row2wogpole7, row2wogpole8, row2wogpole4, row2wogpole5, row2wogpole6,
    row3Flower1, row3Flower2, row3Flower3, row3Flower4, row3Flower5, row3Flower6, row3Flower7, row3Flower8,
    cliff3, cliff2, cliff1
]

let movingObjects = [
    puffstool1, puffstool2, breadbug1, breadbug2, 
    bulborb14, bulborb13, bulborb12, bulborb11, bulborb10, bulborb9, bulborb8,
    bulborb7, bulborb6, bulborb5, bulborb4, bulborb3, bulborb2, bulborb1,
    row1Flower1, row1Flower2, row1Flower3, row1Flower4, row1Flower5, row1Flower6, row1Flower7, row1Flower8,
    wogpole1, wogpole2, wogpole3, wogpole4, wogpole5, wogpole6, wogpole7, wogpole8, wogpole9,
    row2Flower1, row2Flower2, row2Flower3, row2Flower4, row2Flower5, row2Flower6, row2Flower7, row2Flower8, row2Flower9,
    row2wogpole1, row2wogpole2, row2wogpole3, row2wogpole4, row2wogpole5, row2wogpole6, row2wogpole7, row2wogpole8, row2wogpole9,
    row3Flower1, row3Flower2, row3Flower3, row3Flower4, row3Flower5, row3Flower6, row3Flower7, row3Flower8,
]

// Starting Player as Red
const red = new Player(playerImage, [14], [102], 16, 40, 300, 640, 16 * 1.5, 40 * 1.5, 7, 4, 'up')
let player = red

let gameOver = false;
let gameWon = false;
let drawCycle = 0;
let playBgm = true;
let playSound = true;

function draw() {
    gameStarted = true;
    startBtn.style.display = 'none';
    resetBtn.style.display = 'none';
    if (playBgm) {
        bgm.play();
    } else { bgm.pause() }

    if (ship.posY === -220) {
        gameOver = true;
    }
    if (gameOver) {
        ctx.fillStyle = "darkblue";
        ctx.font = "150px Arial";
        ctx.fillText("Time's Up...", canvas.width - 990, 350);
        resetBtn.style.display = 'inline';
    } else if (gameWon) {
        ctx.fillStyle = "gold";
        ctx.font = "150px Arial";
        ctx.fillText("You Win!", canvas.width - 900, 350);
        blueOnion.drawMovingObject();
        redOnion.drawMovingObject();
        yellowOnion.drawMovingObject();
        resetBtn.style.display = 'inline';
    } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    movePlayer();
    render();

    waterfall1.drawMovingObject();
    waterfall2.drawMovingObject();
    movingObjects.forEach(object => {
        object.drawMovingObject();
    });

    targets[rotation % 3].drawMovingObject();
    player.drawPlayer();
    blueOnion.drawMovingObject();
    redOnion.drawMovingObject();
    yellowOnion.drawMovingObject();

    if (target.posX + 8 <= (player.posX + 12) + (player.width - 15) &&
        (target.posX + 8) + (target.scaledWidth - 17) >= (player.posX + 12) &&
        target.posY + 3 + target.scaledHeight - 12 >= (player.posY + 40) &&
        target.posY + 3 <= (player.posY + 40) + (player.height - 53)) {
            gameWon = true;
    }

    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "rgb(214, 214, 59)";
    // ctx.rect(redTarget.posX + 8, redTarget.posY + 3, redTarget.scaledWidth - 17, redTarget.scaledHeight - 12); // red winning target box
    // ctx.rect(player.posX + 12, player.posY + 40, player.width - 15, player.height - 53); // player winning box
    ctx.stroke();

    ctx.drawImage(mapImage, 800, 0, 600, 700) // background image for ship
    ship.drawMovingObject();
    ctx.beginPath();
    ctx.lineWidth = "4";
    ctx.strokeStyle = "rgb(214, 214, 59)";
    ctx.rect(802, -2, 0, 705);
    ctx.stroke();

    window.requestAnimationFrame(draw);
    drawCycle += 1
}}

function reset() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ship.posY = 900;
    player.posY = 640;
    player.posX = 300;
    player.flowerY = player.posY - 8;
    player.flowerX = player.posX;
    gameOver = false;
    gameWon = false;
    draw();
}

function movePlayer() {
     if (currentlyPressedKeys.m) {
        playBgm = false;
        playSound = false;
        soundBtn.style.display = 'none';
        muteBtn.style.display = 'inline';
     } 
     if (currentlyPressedKeys.n) {
        playBgm = true;
        playSound = true;
        soundBtn.style.display = 'inline';
        muteBtn.style.display = 'none';
     }

    if (!(currentlyPressedKeys.ArrowDown || currentlyPressedKeys.ArrowUp || currentlyPressedKeys.ArrowLeft || currentlyPressedKeys.ArrowRight)) {
        player.animate = false;
    } else {
        player.animate = true
    }
    if (currentlyPressedKeys.ArrowUp) {
        if (player.moveDir === 'right') {
            player.flowerX += 8;
        }
        player.image = image;
        player.moveDir = 'up';
        player.animationFrameX = framesUpX[rotation % 3]
        player.animationFrameY = framesUpY[rotation % 3]
        if (player.posY < 3) {} else {
            player.flowerY -= 4, player.posY -= 4
        }
    } else if (currentlyPressedKeys.ArrowDown) {
        if (player.moveDir === 'right') {
            player.flowerX += 8;
        }
        player.image = image;
        player.moveDir = 'down';
        player.animationFrameX = framesDownX[rotation % 3]
        player.animationFrameY = framesDownY[rotation % 3]
        if (player.posY + 4 > 640) {} else {
            player.flowerY += 4, player.posY += 4
        }
    } else if (currentlyPressedKeys.ArrowLeft) {
        if (player.moveDir === 'right') {
            player.flowerX += 8;
        }
        player.image = leftImage;
        player.moveDir = 'left';
        player.animationFrameX = framesLeftX[rotation % 3];
        player.animationFrameY = framesLeftY[rotation % 3];
        if (player.posX - 4 < 0) {} else {
            player.flowerX -= 4, player.posX -= 4
        }
    } else if (currentlyPressedKeys.ArrowRight) {
        player.image = image;
        if (player.moveDir != 'right') {
            player.flowerX -= 8;
        }
        player.moveDir = 'right';
        player.animationFrameX = framesRightX[rotation % 3];
        player.animationFrameY = framesRightY[rotation % 3];
        if (player.posX + 4 > 778) {} else {
            player.flowerX += 4, player.posX += 4
        }
    }
}