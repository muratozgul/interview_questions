/*
13 - Roman To Integer:
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var lookup = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  
  var sum =0;
  
  for(var i=0; i<s.length; i++){
      if(i===0){
          sum += lookup[s.charAt(i)];
      } else if(i>0 && lookup[s.charAt(i)] > lookup[s.charAt(i-1)]){
          sum += lookup[s.charAt(i)] - 2*lookup[s.charAt(i-1)];
      } else{
          sum += lookup[s.charAt(i)];
      }
  }
    
  return sum;
};