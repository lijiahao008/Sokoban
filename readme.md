## Sokoban

![sokoban]

### Background

Sokoban is a classic game which a player will push boxes to the target position without running into a dead-end.

1) There will be at least 3 levels for this game.
2) A box will be impossible to move once it's pushed into any corner.
3) Each level will have a different map.


### Functionality & MVP  

With this Sokoban Game of Life simulator, users will be able to:

- [ ] Start and reset the game board
- [ ] Use keyboard to control the player
- [ ] Switch levels using voice command
- [ ] Use voice control to move the player
- [ ] Have the browser listen to the user continuously and response accordingly.


### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript for overall structure and game logic,
- Google voice recognition api for enabling control over the player over voice,

There will be three scripts involved in this project:

`sokoban.js`: this script will handle the logic for creating, updating and rendering on the browser.

`voice_command.js`: this script will be responsible to respond to player's voice input.

`levels.js`: each level will be one separate file for easy management of maps for different levels.



[sokoban]: ./assets/images/sokoban.jpg
