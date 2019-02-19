const terrainImage1 = new Image();
const terrainImage2 = new Image();
const terrainImage3 = new Image();
const terrainImage4 = new Image();
const terrainImage5 = new Image();
const terrainImage6 = new Image();
const terrainImage7 = new Image();

const transition1 = new Image();

terrainImage1.src = './assets/images/greener_grass.png'
terrainImage2.src = './assets/images/water.png'
terrainImage3.src = './assets/images/water.png'
terrainImage4.src = './assets/images/rock_to_grass.png'
terrainImage5.src = './assets/images/grass.png'
terrainImage6.src = './assets/images/grass.png'
terrainImage7.src = './assets/images/greener_grass.png'

transition1.src = './assets/images/tex_moss.png'

// terrainTex = new Image();
// terrainTex.src = './assets/images/tex_moss.png'

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
            // ctx.drawImage(rowImages[row], col * 100, row * 100, 100, 100)

            // if (row === 0) {
            //     ctx.drawImage(rowImages[row], col * 200, row * 200, 200, 100)
            // } else if (row === 5) {
            //     ctx.drawImage(rowImages[0], col * 200, row * 100, 200, 200)
            // }
            // else if (row != 5 && row != 6) {
            // ctx.drawImage(rowImages[row], col * 100, row * 100, 100, 100) }
            if (row === 0) {
                ctx.drawImage(rowImages[row], col * 200, row * 200, 200, 100)
            }
            if ((row === 1) || (row === 2)) {
                ctx.drawImage(rowImages[row], col * 100, row * 100, 100, 100)
            }
            if (row === 3) {
                ctx.drawImage(rowImages[row], col * 100, row * 100, 100, 100)
            }
            // ctx.drawImage(terrainImage2, 0, 100, 800, 800)
            // ctx.drawImage(terrainImage4, 0, 300, 800, 800)

            // ctx.drawImage(terrainImage1, 0, 365, 800, 700) // 1 smooth green image

            
            if (row === 4) { ctx.drawImage(terrainImage1, 0, 360, 400, 400)}
            if (row === 4) { ctx.drawImage(terrainImage1, 400, 360, 400, 400)}

             ctx.beginPath();
             ctx.lineWidth = "1";
             ctx.strokeStyle = "black";
            //  ctx.rect(col * 100, row * 100, 100, 100);
             ctx.stroke();
        }
    }
}

