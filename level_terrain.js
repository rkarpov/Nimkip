const terrainImage1 = new Image();
const terrainImage2 = new Image();
const terrainImage3 = new Image();
const terrainImage4 = new Image();
const terrainImage5 = new Image();
const terrainImage6 = new Image();
const terrainImage7 = new Image();

terrainImage1.src = './assets/images/greener_grass.png'
terrainImage2.src = './assets/images/water.png'
terrainImage3.src = './assets/images/water.png'
terrainImage4.src = './assets/images/rock_to_grass.png'
terrainImage5.src = './assets/images/grass.png'
terrainImage6.src = './assets/images/grass.png'
terrainImage7.src = './assets/images/greener_grass.png'

terrainTex = new Image();
terrainTex.src = './assets/images/tex_moss'

function render() {
    var rowImages = [
        terrainImage1,
        terrainImage2,
        terrainImage3,
        terrainImage4,
        terrainImage5,
        terrainImage6,
        terrainImage7
    ],
    numRows = 7,
    numCols = 8,
    row, col;

    for (row = 0; row < numRows; row++) {
        for (col = 0; col < numCols; col++) {
            ctx.drawImage(rowImages[row], col * 100, row * 100, 100, 100)
             ctx.beginPath();
             ctx.lineWidth = "1";
             ctx.strokeStyle = "black";
             ctx.rect(col * 100, row * 100, 100, 100);
             ctx.stroke();
        }
    }
}

