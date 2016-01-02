/*
Write an efficient algorithm that searches for a value in an m x n matrix. 
This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
For example,

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.
*/

/*
The main idea behind this approach:

_ Keep eliminating rows in the matrix until only 1 row is left

_ Carry out binary search in the single row that is left

To eliminate rows, or block of rows, three important characteristics of the matrix are used:

_ If the target is smaller than the element in the top left corner, 
the target must be smaller than all elements in the block and therefore is not in the block.

_If the target is larger than the element in the bottom right corner, 
the target must be larger than all elements in the block and therefore is not in the block.

_If the target is between the top left and bottom right elements, 
then the target may or may not be in the block. If the target is in the block, 
the target can be anywhere in the block.
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
};












