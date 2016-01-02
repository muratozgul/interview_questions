/*
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    console.log("Starting");
    
    function gcd(a, b) {
        if(b===0) {
            return a;
        } else {
            return gcd(b, a%b);
        }
    }
    
    var temp, j, a;
    var len = nums.length;
    console.log("gcd: ", gcd(len,k));
    for(var i=len-1; i>len-1-gcd(len,k); i--){
        temp = nums[i];
        j = i;
        a = j;
        while(true) {
            a = (j-k)%len;
            if(a<0)
                a += len;
            if(a===i)
                break;
            nums[j] = nums[a];
            j = a;
        }
        nums[j] = temp;
    }
};


var myarr = [1,2,3,4,5,6,7];