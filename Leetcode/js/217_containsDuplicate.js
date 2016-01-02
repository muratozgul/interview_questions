/*
Given an array of integers, find if the array contains any duplicates. 
Your function should return true if any value appears at least twice in the array, 
and it should return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var hash = {};
    
    for(var i=0; i<nums.length; i++){
        if(hash.hasOwnProperty(nums[i])){
            return true;
        }
        hash[nums[i]] = true;
    }
    return false;
};

var arr1 = [1,2,3,4];
var arr2 = [1,2,2,4];