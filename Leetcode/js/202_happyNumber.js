/*
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: 
Starting with any positive integer, 
replace the number by the sum of the squares of its digits, 
and repeat the process until the number equals 1 (where it will stay), 
or it loops endlessly in a cycle which does not include 
1. Those numbers for which this process ends in 1 are happy numbers.

Example: 19 is a happy number

12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function digitSqSum(num){
        var sum = 0;
        while(num>0){
            sum += Math.pow(num%10,2);
            num = Math.floor(num/10);
        }
        return sum;
    }
    
    var hash = {};
    var cont = true;
    var temp = -1;
    
    while(cont && temp !== 1){
        temp = digitSqSum(n);
        if(hash.hasOwnProperty(temp)){
            cont = false;
        } else {
            hash[temp] = true;
        }
        n = temp;
    }
    
    return cont;    
};


