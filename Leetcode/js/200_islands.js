var input3 = [[1,1,0,0,0],
              [1,1,0,0,0],
              [0,0,1,0,0],
              [0,0,0,1,1]]; // 3
              
var input1 = [[1,1,1,1,0],
              [1,1,0,1,0],
              [1,1,0,0,0],
              [1,0,0,0,0]]; // 1

var input1t = [[1,1,0,0,1],
               [0,1,0,1,1],
               [1,1,0,1,0],
               [1,0,0,1,0]]; // 1


var numIslands = function(grid) {
	if(!grid || grid.length === 0) return 0;

    var islands = 0;
    var rows = grid.length;
    var cols = grid[0].length;

    var mainloop = function(mymatrix){
        for(var r=0; r<rows; r++){
            for(var c=0; c<cols; c++){
                if(parseInt(mymatrix[r][c]) === 1){
                    islands++;
                    recurse(mymatrix,r,c);
                }
            }
        }
    };
    
    var recurse = function(mtrx, r, c){
        if(parseInt(mtrx[r][c]) === 1){
           mtrx[r][c] = 2;
           if(c+1 < cols) recurse(mtrx, r, c+1);
           if(c-1 >= 0) recurse(mtrx, r, c-1);
           if(r+1 < rows) recurse(mtrx, r+1, c);
           if(r-1 >= 0 ) recurse(mtrx, r-1, c);
        }
    };

    mainloop(grid);
    
    return islands;
};