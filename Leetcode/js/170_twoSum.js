/*
Design and implement a TwoSum class. It should support the following operations: add and find.

add - Add the number to an internal data structure.
find - Find if there exists any pair of numbers which sum is equal to the value.

For example,
add(1); add(3); add(5);
find(4) -> true
find(7) -> false
*/

/**
 * initialize your data structure here
 * @constructor
 */
var TwoSum = function() {
  this.hash = {};
};

/**
 * Add the number to an internal data structure.
 * @param {number} input
 * @returns {void}
 */
TwoSum.prototype.add = function(input) {
  if(!this.hash[input]){
    this.hash[input] = 1;
  } else {
    this.hash[input]++;
  }
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} val
 * @returns {boolean}
 */
TwoSum.prototype.find = function(val) {
  var keys = Object.keys(this.hash);

  keys.map(function(x){
    return parseInt(x);
  });
  
  for(var i=0; i<keys.length; i++){
    var num = keys[i];
    var target = val-num;

    if( (num===target && this.hash[num]>1) || (num!==target &&this.hash[target]) ){
      return true;
    }
  }

  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var twoSum = new TwoSum();
 * twoSum.add(number);
 * twoSum.find(value);
 */
 
var a = new TwoSum();