/*
A group of two or more people wants to meet and minimize the total travel distance. 
You are given a 2D grid of values 0 or 1, where each 1 marks the home of someone in the group. 
The distance is calculated using Manhattan Distance, 
where distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|.

For example, given three people living at (0,0), (0,4), and (2,2):

1 - 0 - 0 - 0 - 1
|   |   |   |   |
0 - 0 - 0 - 0 - 0
|   |   |   |   |
0 - 0 - 1 - 0 - 0
The point (0,2) is an ideal meeting point, 
as the total travel distance of 2+2+2=6 is minimal. So return 6.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function(grid) {
    var cm_row, cm_col;
    
    var rowW = [];
    var colW = [];
    
    var rowCount = grid.length;
    var colCount = grid[0].length;
    
    for(var r=0; r<rowCount; r++){
        for(var c=0; c<colCount; c++){
            if(grid[r][c] !== 0){
                rowW.push(r);
                colW.push(c);
            }
        }
    }
    
    function median(arr) {
        if(arr.length % 2 === 1){
            return arr[Math.floor(arr.length/2)];
        }
        return (arr[arr.length/2-1] + arr[arr.length/2])/2;
    }
    
    function compare(a,b){
        return a-b;
    }
    
    rowW.sort(compare);
    colW.sort(compare);
    //console.log(rowW);
    //console.log(colW);
    cm_row = rowW.reduce(function(prev, curr, index, arr){
        return prev + curr;
    });
    //console.log(cm_row/rowW.length);
    cm_row = median(rowW);
    
    cm_col = colW.reduce(function(prev, curr, index, arr){
        return prev + curr;
    });
    //console.log(cm_col/colW.length);
    cm_col =  median(colW);
    
    console.log("r:", cm_row, " , c:", cm_col);
    
    var sum = 0;
    
    for(var i=0; i<rowW.length; i++){
        sum += ( Math.abs(rowW[i]-cm_row) + Math.abs(colW[i]-cm_col) );
    }
    
    return sum;
};

var grid = [
    [1,0,1,0,1],
    [0,0,0,0,0],
    [0,0,1,0,0]
];

var grid2 = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,1,0],
    [1,1,0,0,0,0,1,0,0],
    [0,0,0,1,1,1,0,0,0]
];

var grid3 = [
  [1,0,0,0,1],
  [0,0,0,0,0],
  [0,0,1,0,0]
];

var grid4 = [[0,0,0,1,0,1,0,0,0,1,1,0]];