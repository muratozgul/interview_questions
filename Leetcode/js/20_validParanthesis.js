/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid 
but "(]" and "([)]" are not.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  var map = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  }
  
  var keys = Object.keys(map);
  var vals = keys.map(function(key){
      return map[key];
  });
  
  var hash = [];
  
  for(var i=0; i<s.length; i++){
    if(keys.indexOf(s.charAt(i)) > -1){
        hash.push(map[s.charAt(i)]);
    } else if(vals.indexOf(s.charAt(i)) > -1) {
        if(s.charAt(i) !== hash.pop()) {
            return false;
        }
    }
  }
  
  return hash.length === 0;
};