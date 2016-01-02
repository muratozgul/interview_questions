/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, 
such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.

Notes:
You may assume pattern contains only lowercase letters, 
and str contains lowercase letters separated by a single space.
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var hash = {};
    var strArr = str.split(' ');
    
    if(pattern === null || str === null || pattern.length !== strArr.length){
        return false;
    }
    
    for(var i=0; i<strArr.length; i++){
        var word = strArr[i];
        var patLetter = pattern.charAt(i);
        var expectedWord = hash[patLetter];
        
        //console.log("i:",i,", word:",word,", ptrn:", patLetter);
        //console.log("expectedWord:", expectedWord);
        
        if(typeof expectedWord !== 'undefined'){
            if(word !== expectedWord) {
                return false;
            }
        } else {
            //check if already exists under different pattern letter
            for(var key in hash) {
                if(word === hash[key]){
                    return false;
                }
            }
            hash[patLetter] = word;
        }
    }
    
    return true;
};

var p1 = "abba";
var str1 = "dog dog dog dog";




