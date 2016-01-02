/*
Given a string, determine if a permutation of the string could form a palindrome.

For example,
"code" -> False, "aab" -> True, "carerac" -> True.

Hint:

Consider the palindromes of odd vs even length. 
What difference do you notice?
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    //if even -> every char count should be even
    //if odd -> only one char count can be odd
    
    var hash = {};
    
    for(var i=0; i<s.length; i++){
        var ch = s.charAt(i); 
        if(hash.hasOwnProperty(ch)){
            hash[ch]++;
        } else {
            hash[ch] = 1;
        }
    }
    
    if(s.length % 2 === 0){
        for(var key in hash){
            if(hash[key] % 2 !== 0){
                return false;
            }
        }
    } else {
        var firstOdd = false;
        for(var key in hash){
            if(hash[key] % 2 === 1){
                if(!firstOdd){
                    firstOdd = true;
                } else {
                    return false;
                }
            }
        }
    }
    
    return true;
};





