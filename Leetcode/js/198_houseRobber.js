/*
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them is that 
adjacent houses have security system connected and it will automatically 
contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, 
determine the maximum amount of money you can rob tonight without alerting the police.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(hArr) {
    var result = 0;
    
    if(hArr === null || hArr.length === 0){
        return result;
    }
    
    var memo = {
        0: hArr[0]
    };
    
    if(hArr.length>1){
        memo[1] = Math.max(hArr[0], hArr[1]);
    }
    
    function recurse(len){
        if(memo.hasOwnProperty(len)){
            return memo[len];
        } else {
            var temp = Math.max(recurse(len-1), hArr[len]+recurse(len-2));
            memo[len] = temp;
            return temp;
        }
    }
    
    return recurse(hArr.length-1);
};