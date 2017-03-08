var box_image=new Image;
box_image.src="assets/images/box.png";
var player_image=new Image;
player_image.src="assets/images/walkdown.gif";
var player_walking_right = new Image;
player_walking_right.src="assets/images/walkright.gif";
var player_walking_left = new Image;
player_walking_left.src="assets/images/walkleft.gif";
var player_walking_down = new Image;
player_walking_down.src="assets/images/walkdown.gif";
var player_walking_up = new Image;
player_walking_up.src="assets/images/walkup.gif";
var wall_image =new Image;
wall_image.src="assets/images/bricks.png";
var empty_image=new Image;
empty_image.src="assets/images/empty.png";
var target_image=new Image;
target_image.src="assets/images/target.png";
var box_in_target_image=new Image;
box_in_target_image.src="assets/images/box_in_target.png";

var player_x;
var player_y;
var num_targets=0;
var direction=0;
var num_rows;
var num_columns;
var grid=new Array();
var box_in_target=0;
var solved=false;
var turns=0;
var moves=document.getElementById('moves');

function start() {
	document.getElementById("level").innerHTML = 1;
  newLevel().innerHTML = level_one();
	let button = document.getElementById("start-button");
	button.innerHTML = "Restart";
	button.blur();
}

function detect_key(key){
	if(document.all){
		key_code = window.event.keyCode;
	}
	else{
		key_code = key.which;
	}
	if((key_code==38)||(key_code==87)){
		direction = 1;
		move_player(0,-1);
	}
	if((key_code==37)||(key_code == 65)){
		direction = 2;
		move_player(-1,0)
	}
	if((key_code==39)||(key_code==68)){
		direction = 3;
		move_player(1,0)
	}
	if((key_code==40)||(key_code==83)){
		direction = 4;
		move_player(0,1);
	}
}

function move_player(x,y){
	if(!solved){
		turns++;
    moves.innerHTML = turns;

		if((player_y+y>-1)&&(player_x+x>-1)&&(player_y+y<num_rows)&&(player_x+x<num_columns)){
			switch(grid[player_y+y][player_x+x]){
			case  0:
				grid[player_y][player_x]-=100;
				change_image(player_y,player_x);
				player_x += x;
				player_y += y;
				grid[player_y][player_x]+=100;
				change_image(player_y,player_x);
				break;
			case 10:
				grid[player_y][player_x]-=100;
				change_image(player_y,player_x);
				player_x += x;
				player_y += y;
				grid[player_y][player_x]+=100;
				change_image(player_y,player_x);
				break;
			case 20:
				if((grid[player_y+2*y][player_x+2*x]!=1)&&(grid[player_y+2*y][player_x+2*x]!=20)&&(grid[player_y+2*y][player_x+2*x]!= 30)&&(player_y+2*y >-1)&&(player_x+2*x >-1)&&(player_y+2*y <num_rows)&&(player_x+2*x < num_columns)){
					grid[player_y][player_x]-=100;
					change_image(player_y,player_x);
					player_x += x;
					player_y += y;
					grid[player_y][player_x]+=80;
					change_image(player_y,player_x);
					grid[player_y+y][player_x+x]+=20;
					change_image(player_y+y,player_x+x);
					if(grid[player_y+y][player_x+x]==30){
						box_in_target++;
					}
				}
				break;
			case 30:
				if((grid[player_y+2*y][player_x+2*x]!= 1)&&(grid[player_y+2*y][player_x+2*x]!=20)&&(grid[player_y+2*y][player_x+2*x]!= 30)&&(player_y+2*y >-1)&&(player_x+2*x >-1)&&(player_y+2*y <num_rows)&&(player_x+2*x<num_columns)){
					grid[player_y][player_x]-=100;
					change_image(player_y,player_x);
					player_x += x;
					player_y += y;
					grid[player_y][player_x]+=80;
					change_image(player_y,player_x);
					grid[player_y+y][player_x+x]+=20;
					change_image(player_y+y,player_x+x);
					if (grid[player_y+y][player_x+x]!=30){
						box_in_target--;
					}
				}
				break;
			}
			if(box_in_target == num_targets){
				solved=true;
			}
		}

	}
	if (solved){
		gameOver();
	}
}

function gameOver() {
	var winning_message = document.createElement('div');
	winning_message.id = "winning-message";
	winning_message.innerHTML = '<h2>Nice work! Solved in '+`${turns}`+' moves! Press enter to go to the next level!</h2>';
	document.getElementById("winning").replaceWith(winning_message);
	document.addEventListener('keydown', function(event) {
		if (event.keyCode == 13) {
			winning = document.createElement('div');
			winning.id = "winning";
			document.getElementById("winning-message").replaceWith(winning)
			nextLevel();
		}
	})
}

function change_image(y,x){
	var image_number='f'+y+'_'+x;
	switch (grid[y][x]){
	case 0:
		assign_image(image_number,empty_image);
    break;
	case 10:
		assign_image(image_number,target_image);
    break;
	case 20:
		assign_image(image_number,box_image);
    break;
	case 30:
		assign_image(image_number,box_in_target_image);
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
	default:
		if (grid[y][x]>100){
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
		break;
	}

}

function assign_image(image_number,image_object){
	window.document.images[image_number].src = image_object.src;

}

function nextLevel() {
	level = document.getElementById("level").innerHTML;
  if (level < 3) {
    level++;
  }
  else {
    level=1;
  }

  document.getElementById("level").innerHTML = level;
  switch(level){
    case(1):
      newLevel().innerHTML = level_one();
      break;
    case(2):
      newLevel().innerHTML = level_two();
      break;
    case(3):
      newLevel().innerHTML = level_three();
      break;
  }
}

function newLevel() {
	num_targets=0;
	direction=0;
	grid=new Array();
	box_in_target=0;
	solved=false;
	turns=0;
	moves.innerHTML = turns;
  var new_level = document.createElement('div');
  new_level.id = "game-window";
  document.getElementById("game-window").replaceWith(new_level);
  document.onkeydown = detect_key;

  return new_level;
}

function showInstruction() {
	let instructions = document.createElement('div');
	instructions.id = "instructions";
	let instructions_holder = document.getElementById("instructions-holder");
	instructions_holder.replaceWith(instructions);
	instructions.innerHTML =
	"<h4>Instructions: </br></br>To Start the game: Click on Listen or Continuous Listen, give your browser access to your microphone and say your command (ex: start the game, next level, go up, move left...) or click on start and use your arrow keys or W, S, A, D to control the player. If everything went as expected, you should be able to see your voice command under 'Your command' section.</br></br>The goal of the game is to push all the boxes into the targets. You can not push two boxes together.</br></br><button onclick='start()'>Start the Game</button></h4>"
	instructions.addEventListener("click", ()=>{instructions.replaceWith(instructions_holder);
	})
}
