/* The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);

convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var rowStrArr = [];
    //initialize rowStrArr
    for(var i=0; i<numRows; i++){
        rowStrArr.push("");
    }
    
    var modifier = 1;
    var index = 0;
    
    function updateIndex(){
        // update modifier
        if(numRows === 1){
            return;
        } else if(modifier>0){
            if(index === numRows-1){
                modifier = -1;
            }
        } else if(modifier<1){
            if(index === 0){
                modifier = 1;
            }
        }
        //update index
        index += modifier;
    }
    
    //distribute chars to rows
    for(i=0; i<s.length; i++){
        rowStrArr[index] += s.charAt(i);
        updateIndex();
    }
    
    //construct output
    var result = "";
    for(i=0; i<numRows; i++){
        result += rowStrArr[i];
    }
    
    return result;
};