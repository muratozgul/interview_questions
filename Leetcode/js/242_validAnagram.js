/*
242 - Valid Anagram
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    //initialize array
    function fillArrayWithZero(n) {
        var arr = Array.apply(null, Array(n));
        return arr.map(function (x) { return 0 });
    }
    
    var sArr = fillArrayWithZero(26);
    var tArr = fillArrayWithZero(26);
    
    //increase letter counter
    for(var i=0; i<s.length; i++){
        sArr[s.charCodeAt(i)-'a'.charCodeAt(0)]++;
        tArr[t.charCodeAt(i)-'a'.charCodeAt(0)]++;
    }
    
    //check if they are the same
    for(i=0; i<sArr.length; i++){
        if(sArr[i] !== tArr[i]){
            return false;
        }
    }
    
    return true;
};