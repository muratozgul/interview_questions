/*
There is a fence with n posts, each post can be painted with one of the k colors.

You have to paint all the posts such that no more than two adjacent fence posts have the same color.

Return the total number of ways you can paint the fence.
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
  if(n === 0) return 0;
  if(n === 1) return k;
  var dif = k*(k-1);
  var same = k;

  for(var i=2; i<n; i++){
    var temp = dif;
    dif = (dif+same)*(k-1);
    same = temp;
  }

  return same + dif;
};