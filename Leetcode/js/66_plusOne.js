/*
Given a non-negative number represented as an array of digits, 
plus one to the number.

The digits are stored such that the most significant 
digit is at the head of the list.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if(digits === null || digits.length === 0) {
        return [1];
    }
    
    var carry = 0;
    for(var i = digits.length-1; i>=0; i--){
        var add = (i === digits.length-1 ? 1 : carry);
        carry = 0;
        digits[i] += add;
        if(digits[i] % 10 === 0){
            digits[i] = 0;
            carry = 1;
        } else {
            break;
        }
    }
    
    if(carry > 0) {
        digits.unshift(1);
    }
    
    return digits;
};

var arr1 = [1,2,3,4];
var arr2 = [1,2,3,9];
var arr3 = [9,9,9,9];