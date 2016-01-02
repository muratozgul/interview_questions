/*
Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), 
return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up:
If this function is called many times, how would you optimize it?

Related problem: Reverse Integer
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var arr = [];
    var nArr = n.toString(2).split('');
    
    while(arr.length<32-nArr.length){
        arr.push("0");
    }
    
    for(var i=0; i<nArr.length; i++){
        arr.push(nArr[i]);
    }
    
    arr.reverse();
    
    var result = arr.reduce(function(a, b) {
      return a + b;
    });
    
    return parseInt(result, 2);
};