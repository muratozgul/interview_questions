/* 
Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. 
If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). 
You are responsible to gather all the input requirements up front.
*/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if(str === null || typeof str !== 'string' || str.length<0) {
        return 0;
    }
    str = str.trim();
    var isNeg = false;
    var result = 0;
    var i=0;
    var INT32_MAX = Math.pow(2,31) - 1;
    var INT32_MIN = Math.pow(2,31)*-1;
    
    if(str.charCodeAt(i) === 45){ //"-"
        isNeg = !isNeg;
        i=1;
    } else if(str.charCodeAt(i) === 43){ //"+"
        i=1;
    }
    
    for(i; i<str.length; i++){
        var chCode = str.charCodeAt(i);
        if(chCode>= 48 && chCode <= 57) {
            chCode = chCode - 48;
            result = (result*10) + chCode;
        } else {
            return isNeg ? Math.max(-result, INT32_MIN) : Math.min(result, INT32_MAX);
        }
    }
    
    return isNeg ? Math.max(-result, INT32_MIN) : Math.min(result, INT32_MAX);
};