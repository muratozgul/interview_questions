/* Palindrome Number
Determine whether an integer is a palindrome. 
Do this without extra space.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }
    
    //find #of digits first
    var div = 1;
    while(x/div >= 10) {
        div *= 10;
    }
    
    while(x !== 0){
        var left = Math.floor(x/div);
        var right = x%10;
        //check
        if(left !== right) {
            return false;
        }
        //update
        //first, remove leftmost digit
        //then dividing by 10 remove rightmost digit
        x = Math.floor(x%div/10);
        //update div (removed 2 digits total)
        div /= 100;
    }
    return true;
    
};