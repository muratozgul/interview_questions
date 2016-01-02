/*
Given an array nums, write a function to move all 0's to the end of it 
while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, 
nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    function swap(a, b) {
        var temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
    
    var sortCount = 0;
    
    for(var i=1; i<nums.length; i++){
        //move (by swapping) left until you hit a non-0 num
        if(nums[i] !== 0){
            for(var j=i-1; j>=sortCount; j--){
                if(nums[j] === 0){
                    swap(j, j+1);
                }
            }
            sortCount++;
        }
    }
    
};