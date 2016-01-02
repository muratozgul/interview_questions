/*
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.

Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
The solution set must not contain duplicate triplets.
    For example, given array S = {-1 0 1 2 -1 -4},

    A solution set is:
    (-1, 0, 1)
    (-1, -1, 2)
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums === null | nums.length<3){
        console.log("bad input");
        return [];
    }
    
    function compareNumbers(a, b) {
      return a - b;
    }
    nums = nums.sort(compareNumbers);
    
    var left, mid, right;
    var prevLeft, prevMid, prevRight;
    prevleft = null;
    var target = 0;
    var resultSet = [];
    
    for(left=0;left<=nums.length-3; left++) {
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
            var sum = nums[left] + nums[mid] + nums[right];
            if(sum === target){
                var result = [nums[left], nums[mid], nums[right]];
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
    
    return resultSet;
};

var arr1 = [-1, 0, 1, 2, -1, -4];
var arr2 = [0,0,0,0];
var arr3 = [-2,0,1,1,2];
var arr4 = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]; //[-2,-2,4]