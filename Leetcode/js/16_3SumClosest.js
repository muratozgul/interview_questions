/*
Given an array S of n integers, find three integers in S such that 
the sum is closest to a given number, target. 
Return the sum of the three integers. 
You may assume that each input would have exactly one solution.

    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  //Your runtime beats 97.67% of javascript submissions.->128ms
    if(nums===null || target===null || nums.length<3){
        return 0;
    }
    function compareNums(a, b){
        return a-b;
    }
    nums = nums.sort(compareNums);
    
    var closest = nums[0] + nums[1] + nums[nums.length-1];
    var left, mid, right;
    
    for(left=0; left<=nums.length-3; left++) {
        mid = left+1;
        right = nums.length-1;
        while(mid<right){
            var sum = nums[left] + nums[mid] + nums[right];
            if(sum === target){
                return sum;
            } 
            var dif = Math.abs(sum-target);
            if(dif<Math.abs(closest-target)){
                closest = sum;
            } 
            if(sum<target) {
                mid++;
            } else {
                right--;
            }
        }
    }
    
    return closest;
};

var arr1 = [-1, 2, 1, -4];