/*
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
*/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    //65->A
    //90->Z
    
    var result = "";
    
    while(n>0){
        var c = n%26;
        n = Math.floor(n/26);
        
        if(c !== 0){
            result = String.fromCharCode(c+64) + result;
        } else {
            result = 'Z' + result;
            n--;
        }
    }
    
    return result;
};