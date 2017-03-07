function level_two(){
	num_rows=11;
	num_columns=9;
	player_x=1;
	player_y=8;
	for(var x=0;x<num_rows;x++){
		grid[x] = new Array();
		for(var y=0;y<num_columns;y++){
			grid[x][y]=0;
		}
	}
	grid[1][1] = 1;
	grid[1][2] = 1;
	grid[1][3] = 1;
	grid[1][4] = 1;
	grid[1][5] = 1;
	grid[2][1] = 1;
	grid[2][5] = 1;
	grid[2][6] = 1;
	grid[2][7] = 1;
	grid[2][8] = 1;
	grid[3][1] = 1;
	grid[3][5] = 1;
	grid[3][8] = 1;
	grid[4][1] = 1;
	grid[4][2] = 1;
	grid[4][7] = 10;
	grid[4][8] = 1;
	grid[5][0] = 1;
	grid[5][1] = 1;
	grid[5][2] = 1;
	grid[5][4] = 1;
	grid[5][5] = 1;
	grid[5][6] = 1;
	grid[5][7] = 10;
	grid[5][8] = 1;
	grid[6][0] = 1;
	grid[6][2] = 20;
	grid[6][4] = 1;
	grid[6][6] = 1;
	grid[6][7] = 10;
	grid[6][8] = 1;
	grid[7][0] = 1;
	grid[7][2] = 20;
	grid[7][3] = 20;
	grid[7][4] = 1;
	grid[7][6] = 1;
	grid[7][7] = 1;
	grid[7][8] = 1;
	grid[8][0] = 1;
	grid[8][1] = 100;
	grid[8][4] = 1;
	grid[9][0] = 1;
	grid[9][1] = 1;
	grid[9][2] = 1;
	grid[9][3] = 1;
	grid[9][4] = 1;
	result = "";
	for(var x=0;x<num_rows;x++){
		for(var y=0;y<num_columns;y++){

			var item = grid[x][y];

			switch(item){
				case 0:	result += '<img alt="floor" src="'+empty_image.src+'" name="f'+x+'_'+y+'">';
						break;
				case 1:	result += '<img alt="wall" src="'+wall_image.src+'" name="f'+x+'_'+y+'">';
						break;
				case 10:result += '<img alt="target" src="'+target_image.src+'" name="f'+x+'_'+y+'">';
						num_targets++;
						break;
				case 20:result += '<img alt="box" src="'+box_image.src+'" name="f'+x+'_'+y+'">';
						break;
				case 30:result += '<img alt="box in target" src="'+box_in_target_image.src+'" name="f'+x+'_'+y+'">';
						box_in_targets++;
						break;
				case 100:result += '<img alt="player" src="'+player_image.src+'" name="f'+x+'_'+y+'">';
						break;
				case 110:result += '<img alt="player in target" src="'+player_image.src+'" name="f'+x+'_'+y+'">';
						num_targets++;
						break;
				default:result += '<img alt="empty" src="'+empty_image.src+'" name="f'+x+'_'+y+'">';
						break;
			}
		}
		result += '<br>';

	}
	return result;
}
