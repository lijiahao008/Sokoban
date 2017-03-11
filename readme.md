## Sokoban

[Live](https://lijiahao008.github.io/Sokoban)

Sokoban is a classic game in which a player will push boxes to a target position while avoiding running into a dead-end. This version also features voice activated commands.

![sokoban]

### How to Play

To Start the game: Click on ‘Listen’ or ‘Continuous Listen’, give your browser access to your microphone and say your command (ex: “start the game”, “next level”, “go up”, “move left”...).  Users may also click on start and use arrow keys or W, S, A, D to control the player. If everything went as expected, you should be able to see your voice command under the "Your command" section.

### Features

#### Image Mapping
This game is built with vanilla javascript and HTML.  Therefore all image rendering is done through image mapping.  After each keyboard input, an entire new map is rendered based on the player's move. By detecting the direction and assigning different images of the player, it will creating a visual effect that reflects the player's walking motion.

```javascript
change_image(y, x){
  var image_number = 'f' + y + '_' + x;
  switch (grid[y][x]){
    case 20:
      assign_image(image_number, box_image);
      break;
    case 100:
      switch(direction){
      case 1:
        assign_image(image_number,player_walking_up);
        break;
      case 2:
        assign_image(image_number,player_walking_left);
        break;
      case 3:
        assign_image(image_number,player_walking_right);
        break;
      case 4:
        assign_image(image_number,player_walking_down);
        break;
      default:
        assign_image(image_number,player_image);
        break;
      }
  }
}
```

#### Voice Command
By utilizing the Google Voice Recognition API, this game is capable of listening to a player's voice command and translating it into keyboard a input. It also provides a continuous mode which will keep listening to a player's voice and respond with the corresponding actions without the need to repeatedly click the “listen” button.

[sokoban]: ./assets/images/sokoban.jpg
