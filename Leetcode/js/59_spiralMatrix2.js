/*
Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,

You should return the following matrix:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  function initMtrx(mtrx, n){
    for(var i=0; i<n; i++){
      mtrx.push([]);
      for(var j=0; j<n; j++){
        mtrx[i].push(0);
      }
    }
  }

  var mtrx = [];
  initMtrx(mtrx,n);
  
  var startRow = 0;
  var endRow = n-1;
  var startCol = 0;
  var endCol = n-1;

  var counter = 1;

  var i;

  while(true){
    for(i=startCol; i<=endCol; i++){
      mtrx[startRow][i] = counter++;
    }
    startRow++;
    if(startCol>endCol)break;

    for(i=startRow; i<=endRow; i++){
      mtrx[i][endCol] = counter++;
    }
    endCol--;
    if(startCol>endCol) break;

    for(i=endCol; i>=startCol; i--){
      mtrx[endRow][i] = counter++;
    }
    endRow--;
    if(startCol>=endCol)break;

    for(i=endRow; i>=startRow; i--){
      mtrx[i][startCol] = counter++;
    }
    startCol++;
    if(startCol>endCol) break;
  }

  return mtrx;
};




