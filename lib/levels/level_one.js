function level_one(){
	num_rows=11;
	num_columns=10;
	player_x=6;
	player_y=3;
	for(var x=0;x<num_rows;x++){
		grid[x] = new Array();
		for(var y=0;y<num_columns;y++){
			grid[x][y]=0;
		}
	}

	grid[1][2] = 1;
	grid[1][3] = 1;
	grid[1][4] = 1;
	grid[1][5] = 1;
	grid[1][6] = 1;
	grid[1][7] = 1;
	grid[1][8] = 1;
	grid[2][2] = 1;
	grid[2][8] = 1;
	grid[3][2] = 1;
	grid[3][4] = 20;
	grid[3][6] = 100;
	grid[3][8] = 1;
	grid[4][0] = 1;
	grid[4][1] = 1;
	grid[4][2] = 1;
	grid[4][3] = 1;
	grid[4][4] = 1;
	grid[4][6] = 1;
	grid[4][8] = 1;
	grid[5][0] = 1;
	grid[5][2] = 20;
	grid[5][8] = 1;
	grid[6][0] = 1;
	grid[6][3] = 1;
	grid[6][4] = 20;
	grid[6][5] = 1;
	grid[6][6] = 1;
	grid[6][8] = 1;
	grid[6][9] = 1;
	grid[7][0] = 1;
	grid[7][1] = 10;
	grid[7][2] = 10;
	grid[7][3] = 20;
	grid[7][6] = 1;
	grid[7][9] = 1;
	grid[8][0] = 1;
	grid[8][1] = 10;
	grid[8][2] = 10;
	grid[8][9] = 1;
	grid[9][0] = 1;
	grid[9][1] = 1;
	grid[9][2] = 1;
	grid[9][3] = 1;
	grid[9][4] = 1;
	grid[9][5] = 1;
	grid[9][6] = 1;
	grid[9][7] = 1;
	grid[9][8] = 1;
	grid[9][9] = 1;

	result = mapImageToGrid(num_rows, num_columns, grid);
	return result;
}
