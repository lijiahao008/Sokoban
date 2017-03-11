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
	
	result = mapImageToGrid(num_rows, num_columns, grid);
	return result;
}
