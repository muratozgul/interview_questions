/*
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits === null || typeof digits !== 'string' || digits.length<1){
        return [];
    }
    
    var dial = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };
    
    digits = digits.split('').map(function(x){
        return parseInt(x);
    });
    
    var resultArr = [];
    
    function recurse(str, index){
        var chars = dial[digits[index]];
        for(var i=0; i<chars.length; i++){
            var newStr = str + chars[i];
            if(newStr.length === digits.length){
                resultArr.push(newStr);
            } else {
                recurse(newStr, index+1);
            }
        }  
    }
    
    recurse("", 0);
    
    return resultArr;
};







