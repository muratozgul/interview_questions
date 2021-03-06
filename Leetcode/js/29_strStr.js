/*
Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Update (2014-11-02):
The signature of the function had been updated to return the index instead of the pointer. 
If you still see your function signature returns a char * or String, 
please click the reload button  to reset your code definition.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack === null || needle === null || needle.length>haystack.length) {
      return -1;
    }

    for(var i=0; i<=haystack.length-needle.length; i++) {
      var str = haystack.substring(i, i+needle.length);
      
      if(str === needle) {
        return i;
      }
    }

    return -1;
};

var h = "balikesir";
var n = "kesir";