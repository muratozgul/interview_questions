/*
Given a matrix of m x n elements (m rows, n columns), 
return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(!matrix || matrix.length < 1 || matrix[0].length < 1){
    return matrix;
  }

  var result = [];

  var rows = matrix.length;
  var cols = matrix[0].length;

  var direction = "right";
  var rowMin = 0;
  var rowMax = rows-1;
  var colMin = 0;
  var colMax = cols-1;

  var r = 0;
  var c = 0;
  var counter = 0;
  

  while(counter<rows*cols){
    if(direction === "right"){
      
      if(c > colMax){
        //console.log("turning down ", counter);
        direction = "down";
        c--;
        r++;
        rowMin++;
        continue;
      }
      //console.log("moving right ", counter);
      result.push(matrix[r][c++]);
    } else if(direction === "down"){
      
      if(r > rowMax){
        //console.log("turning left ", counter);
        direction = "left";
        r--;
        c--;
        colMax--;
        continue;
      }
      //console.log("moving down ", counter);
      result.push(matrix[r++][c]);
    } else if(direction === "left"){
      
      if(c < colMin){
        //console.log("turning up ", counter);
        direction = "up";
        c++;
        r--;
        rowMax--;
        continue;
      }
      //console.log("moving left ", counter);
      result.push(matrix[r][c--]);
    } else if(direction === "up"){
      
      if(r < rowMin){
        //console.log("turning right ", counter);
        direction = "right";
        r++;
        c++;
        colMin++;
        continue;
      }
      //console.log("moving left ", counter);
      result.push(matrix[r--][c]);
    } else {
        //console.log("none");
    }

    counter++;
  }

  return result;
};