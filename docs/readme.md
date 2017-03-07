## Sokoban

### Background

Sokoban is a classic game which a player will push boxes to the target position without running into a deadened.

1) There will be at least 3 levels for this game.
2) A box will be impossible to move once it's pushed into any corner.
3) Each level will have a different map.

This game will create several technical challenges, outlined in the **Functionality & MVP** and **Bonus Features** sections.  

### Functionality & MVP  

With this Sokoban Game of Life simulator, users will be able to:

- [ ] Start, pause, and reset the game board
- [ ] Use keyboard to control the player
- [ ] Use voice control to move the player

In addition, this project will include:

- [ ] An About modal describing the background and rules of the game
- [ ] A production README

### Wireframes

This game will be rendered in a single screen in the format of a webpage.

![wireframes](https://github.com/lijiahao008/Sokoban/blob/master/Sokoban.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jQuery` for overall structure and game logic,
- `Easel.js` with `HTML5 Canvas` for DOM manipulation and rendering,
- Google voice recognition api for enabling control over the player over voice,
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

`board.js`: this script will handle the logic for creating and updating the necessary `Easel.js` elements and rendering them to the DOM.

`player.js`: this script will be responsible to render the player onto the screen.

`box.js`: this lightweight script will render the box onto the board.

`game.js`: this script will keep track of the state of the game. And some core logic behind the game.

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Easel.js` installed.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 3 scripts outlined above.  Learn the basics of `Easel.js`.  Goals for the day:

- Get a green bundle with `webpack`
- Learn enough `Easel.js` to render an object to the `Canvas` element

**Day 2**: Implement most of the logic behind the game and create multiple levels and setup the background for rendering.

**Day 3**: Create the main screen of the game and any rendering task in order to have a fully functional game by the end of the day.

**Day 4**: Implement Google Voice API for more interesting control of the player.


### Bonus features

There are many possibilities for this section.  Some of them may contain:

- [ ] Add more levels
- [ ] Add AI with A* algorithm to auto-play the game
- [ ] Improve the graphics of the game
