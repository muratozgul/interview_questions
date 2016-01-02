/*
Implement next permutation, which rearranges numbers into the 
lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange 
it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and 
its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums === null || nums.length <= 1) {
        return;
    }
    
    var p1 = nums.length-2;
    var p2 = nums.length-1;
    
    while(p1>=0){
        // start from right, look for a 
        // number smaller than the previous one
        if(nums[p1] < nums[p1+1]) {
            break;
        }
        p1 -= 1;
    }
    
    while(p2>=0){
        //look for the first number greater than p1    
        if(nums[p2] > nums[p1]){
            break;
        }
        p2 -= 1;
    }
    
    if(p1>-1){
        //switch p1 and p2;
        var temp = nums[p1];
        nums[p1] = nums[p2];
        nums[p2] = temp;
    }
    //reverse the remaining part (right of p2)
    //of the array
    p1++;
    var i = nums.length-1;
    
    while(p1<i){
        var temp2 = nums[i];
        nums[i] = nums[p1];
        nums[p1] = temp2;
        p1++;
        i--;
    }
    
    //console.log(nums);
};

var arr1 = [1,2,3];
var arr2 = [3,2,1];



