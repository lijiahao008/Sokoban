function level_three(){
	num_rows=11;
	num_columns=8;
	player_x=2;
	player_y=6;
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
	grid[2][1] = 1;
	grid[2][4] = 1;
	grid[3][0] = 1;
	grid[3][1] = 1;
	grid[3][4] = 1;
	grid[3][5] = 1;
	grid[4][0] = 1;
	grid[4][2] = 10;
	grid[4][3] = 20;
	grid[4][4] = 10;
	grid[4][5] = 1;
	grid[4][6] = 1;
	grid[4][7] = 1;
	grid[5][0] = 1;
	grid[5][2] = 20;
	grid[5][4] = 20;
	grid[5][7] = 1;
	grid[6][0] = 1;
	grid[6][1] = 1;
	grid[6][2] = 110;
	grid[6][3] = 20;
	grid[6][4] = 10;
	grid[6][7] = 1;
	grid[7][1] = 1;
	grid[7][2] = 1;
	grid[7][5] = 1;
	grid[7][6] = 1;
	grid[7][7] = 1;
	grid[8][2] = 1;
	grid[8][3] = 1;
	grid[8][4] = 1;
	grid[8][5] = 1;
	
	result = mapImageToGrid(num_rows, num_columns, grid);
	return result;
}
