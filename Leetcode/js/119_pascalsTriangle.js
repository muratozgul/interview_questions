/*
Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var row = [1];

    for(var i=0; i<=index; i++){
      var origRow = row;
      row.push(1);
      for(var j=1; j<row.length-1; j++){
        row[j] = origRow[j-1] + origRow[j];
      }
    }

    return row;
};