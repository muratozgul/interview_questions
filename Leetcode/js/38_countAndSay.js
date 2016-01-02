/*
The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    
    function generate(str){
        //console.log('generate: ' + str);
        if(counter === n){
            return str;
        } else {
            var crrChar = str.charAt(0);
            var ctr = 0;
            var result = '';
            for(var i=0; i<str.length; i++){
                if(crrChar === str.charAt(i)){
                    ctr++;
                } else {
                    result += ctr + crrChar;
                    crrChar = str.charAt(i);
                    ctr = 1;
                }
                
                if(i === str.length-1){
                    result += ctr + crrChar;
                    counter++;
                }
            }
            return generate(result);
        }
    }
    
    if(n===1) {
        return '1';
    } else {
        var result = '1';
        var counter = 1;
        return generate(result);
    }
    
};