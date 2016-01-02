/*
Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
//   if(num === null || typeof num !== 'number') {
//     return "";
//   }
    var translator = {
        1000:"M",
        900:"CM",
        500:"D",
        400:"CD",
        100:"C",
        90:"XC",
        50:"L",
        40:"XL",
        10:"X",
        9:"IX",
        5:"V",
        4:"IV",
        1:"I"
    }
    var result = "";
    Object.freeze(translator);
    var keys = Object.keys(translator);
    //console.log(keys);
    for(var i=keys.length-1; i>=0; i--){
        while(num>=keys[i]) {
            result += translator[keys[i]];
            num -= keys[i];
        }
    }
    return result;
}

