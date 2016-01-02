/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps.
In how many distinct ways can you climb to the top?
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var memo = {
      '1':1,
      '2':2
  };
    
  function recurse(step) {
    if(memo.hasOwnProperty(step)) {
      return memo[step];
    } else {
      var f1 = recurse(step-1);
      var f2 = 0;
      if(step-2>=0){
        f2 = recurse(step-2);
      }
      memo[step] = f1+f2;
      return f1+f2;
    }
  }
    
  return recurse(n);
};