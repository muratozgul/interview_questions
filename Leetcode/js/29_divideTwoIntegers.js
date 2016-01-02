/*
Divide two integers without using multiplication, division and mod operator.

If it is overflow, return MAX_INT.
*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(divisor === 0){
        return 0;
    }
    
    var max32 = (Math.pow(2,31)-1);
    var min32 = -Math.pow(2,31);
    
    var multiplier = 1;
    var binser = function() {
        while(dividend - (divisor*multiplier*2) >= 0 ) {
            multiplier *= 2;
        }
    };
    
    var result = 0;
    var neg = false;
    
    if(dividend<0){
        neg = !neg;
        dividend = -1*dividend;
    }
    if(divisor<0){
        neg = !neg;
        divisor = -1*divisor;
    }
    
    binser();
    while(dividend >= divisor){
        while(dividend-(divisor*multiplier) >= 0) {
            result += multiplier;
            dividend -= (divisor*multiplier);
        }
        if(multiplier>1) multiplier /= 2;
    }
    
    return neg ? Math.max(-1*result, min32) : Math.min(result, max32);
};

