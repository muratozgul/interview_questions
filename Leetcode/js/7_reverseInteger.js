/*
7 - Reverse Integer:
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

---------------------------------
Have you thought about this?
Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!

If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.

Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?

For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //assume boundaries int for 32-bit signed integer
    var MAX_INT = Math.pow(2,31) - 1;
    var MIN_INT = Math.pow(2,31) * -1;
    
    if(x>MAX_INT || x<=MIN_INT) return 0;
    var negFlag = false;
    if (x<0) {
        negFlag = true;
        x *= -1;
    }
    
    var rev = 0;
    
    while(x!==0){
        if(!(rev > MAX_INT/10 || rev < MIN_INT/10)){
            rev = rev*10 + x%10;
            x = Math.floor(x/10);
        } else {
            return 0;
        }
        
    }
    
    return negFlag? -rev : rev;
};