const rockImage = new Image();
rockImage.src = './assets/images/stone_terrain2.png'

function render() {

       var rowImages = [
               './assets/images/stone-block.png',
               './assets/images/stone-block.png',
               './assets/images/stone-block.png',
               './assets/images/stone-block.png',
               './assets/images/stone-block.png',
               './assets/images/stone-block.png'
           ],
           numRows = 7,
           numCols = 8,
           row, col;

        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                ctx.drawImage(rockImage, col * 100, row * 100)
            //    ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
           }
       }


    //    renderEntiti es();

    // ctx.drawImage(rockImage, 0, 0, 256, 251, 0, 0, 256, 251)
}