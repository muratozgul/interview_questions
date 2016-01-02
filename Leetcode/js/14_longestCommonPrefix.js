/*
Write a function to find the longest common prefix string amongst an array of strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var  result = "";
    var cont = true;
    var index = 0;
    if(strs === null || strs.length<=0) {
        return "";
    }
    
    while(cont) {
        for(var i=0; i<strs.length; i++) {
            var str = strs[i];
            if(str.length>index){
                if(strs[0].charAt(index) !== str.charAt(index)) {
                    cont = false;
                }
            } else {
                cont = false;
            }
        }
        if(cont) {
            //add the char to result
            result += strs[0].charAt([index]);
            index++
        }
    }
    
    return result;
};

var arr1 = ["abcasd", "abcfgh", "abcf"];