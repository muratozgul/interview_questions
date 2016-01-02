/* 
Given a sorted array, remove the duplicates in place 
such that each element appear only once and return the new length.

Do not allocate extra space for another array, 
you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, 
with the first two elements of nums being 1 and 2 respectively. 
It doesn't matter what you leave beyond the new length.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    var num = 0;
    
    for(var i=1; i<nums.length; i++){
        if(nums[i] !== nums[num]){
            num++;
            nums[num] = nums[i];
        }
    }

    return nums.length>0 ? num+1 : 0;
};

var arr1 = [1,1,2];
var arr2 = [1,1,2,2,3,3,4];