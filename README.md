# Nimkip
A game inspired by Frogger and themed around Pikmin. Win by traversing terrain while avoiding hazzards and obstacles until reaching the very top of the map

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
  

