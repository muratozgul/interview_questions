/*
Write an efficient algorithm that searches for a value in an m x n matrix. 
This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
For example,

Consider the following matrix:

[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
Given target = 3, return true.
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(mtx, target) {
  var rows = mtx.length;
  var cols = mtx[0].length;

  function coord(i){
    return {r: Math.floor(i/cols), c: i%cols};
  }

  function valOf(i){
    var rc = coord(i);
    return mtx[rc.r][rc.c];
  }

  function binarySearch(left, right, x){
    
    var mid = Math.floor((left+right)/2);

    while(left<=right){
      if(valOf(mid) === x){
        return true;
      } else if(valOf(mid) > x) {
        return binarySearch(left, mid-1, x);
      } else {
        return binarySearch(mid+1, right, x);
      }
    }

    return false;
  }

  return binarySearch(0, rows*cols-1, target);
};