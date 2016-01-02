/*
Given an array of integers and an integer k, 
find out whether there are two distinct indices i and j in the array 
such that nums[i] = nums[j] and the difference between i and j is at most k.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var hash = {};
    
    for(var i=0; i<nums.length; i++){
        if(hash.hasOwnProperty(nums[i])){
            if(i - hash[nums[i]]  <= k){
                return true;
            }
        }
        
        hash[nums[i]] = i;
    }
    
    return false;
};