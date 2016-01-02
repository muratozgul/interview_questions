/*
Given n pairs of parentheses, write a function to 
generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

"((()))", "(()())", "(())()", "()(())", "()()()"
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n<1) {
        return [];
    }
    
    var resultSet = [];
    
    // left: # of ")"
    // right: # of "("
    var left = 0;
    var right = 0;
    var dfs = function(str, left, right) {
        if(left>right) {
            return;
        } else {
            if(right === n && left === n) {
                resultSet.push(str);
                return;
            } else if(right === n){
                str += ')';
                left++;
                dfs(str, left, right);
            } else {
                dfs(str+')', left+1, right);
                dfs(str+'(', left, right+1);
            }
        } 
    };
    
    dfs("", 0, 0);
    
   return resultSet; 
};