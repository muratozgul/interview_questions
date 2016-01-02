/**
 * @param {number} num
 * @return {boolean}
 */
 
/*Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

Note that 1 is typically treated as an ugly number.
*/

var isUgly = function(num) {
    var toCheck = [2,3,5];
    
    function checker(num){
        //select number
            //check by looping, if it is divisible
        //after checking everything, check the remainder
        //if remainder = 0 -> ugly
        //if not -> not ugly
        
        var temp = num;
        for(var i=0; i< toCheck.length; i++){
            var divider = toCheck[i];
            while( temp % divider === 0 ){
                temp = temp/divider;
            }
        }
        return temp === 1;
    }
    
    if(num === 1){
        return true;
    } else if(num === 0){
        return false;
    } else {
        return checker(num);
    }
};