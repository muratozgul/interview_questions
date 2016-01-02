/* Given a string S, find the longest palindromic substring in S. 
You may assume that the maximum length of S is 1000, 
and there exists one unique longest palindromic substring. */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var maxLen = s.length>0 ? 1:0;
    var palinString = s.charAt(0);
    
    for(var i=0; i<s.length; i++) {
        var len = 1;
        var offset = 0;
        var isPalin = true;
        var left = i;
        var right = i;
        while(isPalin) {
            offset++;
            if(i-offset>=0 && i+offset<s.length ){
                if( s.charAt(i-offset) === s.charAt(i+offset) ){
                    len = len+2;
                    left = i-offset;
                    right = i+offset;
                } else {
                    isPalin = false;
                }
            }  else {
                isPalin = false;
            }
        }
        if(len>maxLen) {
            maxLen = len;
            palinString = s.substring(left,right+1);
        }
    }
    
    for(var i=0; i<s.length-1; i++) {
        var len = 0;
        var offset = -1;
        var isPalin = true;
        var left = i;
        var right = i;
        while(isPalin) {
            offset++;
            if(i-offset>=0 && i+offset<s.length-1 ){
                if( s.charAt(i-offset) === s.charAt(i+1+offset) ){
                    len = len+2;
                    left = i-offset;
                    right = i+1+offset;
                } else {
                    isPalin = false;
                }
            }  else {
                isPalin = false;
            }
        }
        if(len>maxLen) {
            maxLen = len;
            palinString = s.substring(left,right+1);
        }
    }
    
    return palinString;
};