/*
Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:
Elements in a quadruplet (a,b,c,d) must be in non-descending order. (ie, a ≤ b ≤ c ≤ d)
The solution set must not contain duplicate quadruplets.
    For example, given array S = {1 0 -1 0 -2 2}, and target = 0.

    A solution set is:
    (-1,  0, 0, 1)
    (-2, -1, 1, 2)
    (-2,  0, 0, 2)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if(nums === null | nums.length<4){
        return [];
    }
    
    function compareNumbers(a, b) {
      return a - b;
    }
    nums = nums.sort(compareNumbers);
    
    var leftMost, left, mid, right;
    var prevLeftMost, prevLeft, prevMid, prevRight;
    prevleftMost = null;

    var resultSet = [];
    
    for(leftMost=0; leftMost<=nums.length-4; leftMost++) {
        if(nums[leftMost] === prevLeftMost){
            continue;
        }
        left = leftMost+1;
        prevLeft = null;
        for(left;left<=nums.length-3; left++) {
            if(nums[left] === prevLeft){
                continue;
            }
            prevMid = null;
            prevRight = null;
            mid = left+1;
            right = nums.length-1;
            //console.log(">l:",left, ",m:",mid, ",r:",right);
            while(mid<right) {
                if(nums[mid] === prevMid) {
                    mid++;
                    continue;
                } else if(nums[right] === prevRight) {
                    right--;
                    continue;
                }
                //console.log("l:",left, ",m:",mid, ",r:",right);
                var sum = nums[leftMost] + nums[left] + nums[mid] + nums[right];
                if(sum === target){
                    var result = [nums[leftMost], nums[left], nums[mid], nums[right]];
                    resultSet.push(result);    
                    prevMid = nums[mid];
                    mid++;
                } else if(sum<target) {
                    prevMid = nums[mid];
                    mid++;
                } else {
                    prevRight = nums[right];
                    right--;
                }
            }
            prevLeft = nums[left];
        }
        prevLeftMost = nums[leftMost];
    }
    
    return resultSet;
};


var arr1 = [1, 0, -1, 0, -2, 2];
