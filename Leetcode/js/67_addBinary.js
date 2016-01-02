/*
Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var result = "";
    var carry = false;
    var i;
    
    var maxLength = Math.max(a.length,b.length);
    var aLen = a.length-1;
    var bLen = b.length-1;
    
    for(i=0; i<=maxLength; i++){
        //console.log('i:', i);
        var digit = carry;
        carry = false;
        var da = a.charAt(aLen-i) ? a.charAt(aLen-i) === '1' : false;
        var db = b.charAt(bLen-i) ? b.charAt(bLen-i) === '1' : false;
        
        //console.log('da:', da, ', db:', db, ", crry:", carry);
        
        if(da && db){
            carry = true;
        } else if(da != db) { //Logical XOR
            digit = !digit;
            if(!digit) {
                carry = true;
            }
        }
        var digStr = digit ? '1' : '0';
        if(i !== maxLength || digit){
            result = digStr + result;
        }
    }
    
    return result;
};



