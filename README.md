# Nimkip
A game inspired by Frogger and themed around Pikmin. Win by traversing terrain while avoiding hazzards and obstacles until reaching the flashing red target. The red target will appear under a tripod-object resembling the player's colored character. The player will change colors each time they lose a life by either touching enemies or water. Movement occurs upon pressing and holding the arrow keys. The player must walk on floating objects to safely cross the water towards the goal. There are infinite lives. But, a spaceship functions as a timer to beat the level before the ship completely lifts off.

## Technologies
Technologies used include javascript, canvas, and CSS. Sprites are drawn onto the canvas utilizing javascript functions and game logic. Each moving object is created by a MovingObject class that takes in many props, which determine the objects sprite frames, image width and height, image scaled width and height, canvas position, moving position, movement speed, movement direction (e.g. left to right or right to left), frame animation speed, collision options, and floating options. Menu options for starting game, playing again, muting and unmuting sounds are handled by keycode event listeners inside engine.js responsible for handling game logic. The canvas is drawn on click for start game and play again. Pressing sound option keys reassigns the id of the respective HTML element for changing display to either none or inline and vice-versa.

Collision objects will cause the player to lose a life upon contact based on the player's hitbox and the moving object's hitbox. Game logic is handled by the following function inside the MovingObject class...
``` js
  handleCollision() {
        if ((this.posX + 5) <= (player.posX + 5) + (player.width - 2) &&
            (this.posX + 5) + (this.scaledWidth - 25) >= (player.posX + 5) &&
            (this.posY + 15) + (this.scaledHeight - 35) >= (player.posY + 30) &&
            (this.posY + 15) <= (player.posY + 30) + (player.height - 30)) {
                player.handleDying()
            }
  }
```
Moreovwer, floating objects are handled using similar logic, however the key difference is that instead of causing the player to die, the player will move across the X axis in the same direction as the floating object...
```js
 handleFloat() {
  if (this.posX + 3 <= (player.posX + 6) + (player.width - 8) &&
      (this.posX + 3) + (this.scaledWidth - 10) >= (player.posX + 6) &&
      this.posY + this.scaledHeight - 1 >= (player.posY + 54) &&
      this.posY <= (player.posY + 54) + (player.height - 54)) {
          this.floating = true;
     } else { 
      this.floating = false
      }
 }
```
MovingObjects keep track of their floating states as true or false depending on weather the player is floating ontop of the object. The player class will handle a search of any floating objects to prevent calling the handleDying() function. If the player is inside the water area along the Y axis, and no MovingObjects are floating, then the player will drown

Sprite animation is acheived with arrays of values of sprite dimensions taken from a sprite sheet, and indexed into the relevant slice of the array and any given time. Each time the game loop completes a cycle, all class objects increment a tick counter. The sprite will change to a successive frame when the tick counter reaches a certain value, which is defined as frame animation speed in the constructor of a MovingObject
```js
  class MovingObject
  
  this.frameTicks = frameTicks;
  this.frameIndex = 0;
  this.tickCount = 0;

  handleAnimation() {
        if (this.animationFrameX.length > 1) {
            this.tickCount += 1;
            if (this.tickCount === this.frameTicks) {
                this.tickCount = 0;
                this.frameIndex = (this.frameIndex + 1) % this.animationFrameX.length;
            }
        } else if (this.animationFrameY.length > 1) {
            this.tickCount2 += 1;
            if (this.tickCount2 === this.frameTicks) {
                this.tickCount2 = 0;
                this.frameIndex2 = (this.frameIndex2 + 1) % this.animationFrameY.length;
            }
        }
    }

    ctx.drawImage(this.image, this.animationFrameX[this.frameIndex], this.animationFrameY[this.frameIndex2], this.width, this.height, this.posX, this.posY, this.scaledWidth, this.scaledHeight);
```


# MVPs
1) 4-directional player movement. Players will be able to move up, down, left, and right using arrow keys. Command + R resets the game
  
2) Enemies will move horizontally across certain rows in one direction. Avoid being eaten by enemies on grass
  
3) Various terrain will prevent certain movements
  Players will not be able to move through obstacles, and will lose a life if landing on water
  Players who hit various hazzards will instantly lose a life

4) Win and loss conditions
  Player wins when landing on an accessible tile of the top row on the board respective to player color
  Player loses a life when colliding with a hazzard or moving onto water tiles
  Player has inifinite lives however... time runs out when space ship leaves the area  

5) Wireframe 
  Includes game board, title, controls instruction, and Navlinks
    ![wireframes](https://i.imgur.com/nPDgwVd.jpg)
6) Score system
  Completing a level will earn player a certain score based on how many rows they traversed before game over

# Bonus
  - Bonus conditions
  Player can acquire higher score by acquiring randomly generated items on the board

  - Time limit for level completion
  Player will have limited time to complete each level, and will lose 1 life upon reaching time limit

  -Players can optionally collect items along the way to acquire additional bonus points for a high score!

  -Upon death, player will respawn as a different colored character, with a different goal target relevant to player color

# Technologies
  - Webpack
  - Javascript
  - Canvas
  

