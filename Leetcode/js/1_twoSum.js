/*
Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hashtable =  {};
    var res = [];
    
    for(var i=0; i<nums.length; i++) {
        if(typeof(hashtable[target-nums[i]]) !== 'undefined' ){
            res.push(hashtable[target-nums[i]]);
            res.push(i+1);
            break;
        }
        hashtable[nums[i]] = i+1;
    }
    
    return res;
}

 
var twoSumBruteForce = function(nums, target) {
    //does not use extra space
    var res = [];
    
    function recurse(index) {
        for(var i=index+1; i<nums.length; i++){
            if(nums[index] + nums[i] === target) {
                if(res.length < 2) {
                    res.push(index+1);
                    res.push(i+1);
                }
            }
        }
        
    }
    
    for(var i=0; i<nums.length/2+1; i++) {
        recurse(i);
    } 
    
    return res;
};

