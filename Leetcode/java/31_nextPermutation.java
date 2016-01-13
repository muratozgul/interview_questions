/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 -> 1,3,2
3,2,1 -> 1,2,3
1,1,5 -> 1,5,1
*/

import java.util.Arrays;

class Main {
    public static void main(String[] args) {
        System.out.println("Starting...");

        Solution solution = new Solution();

        int[] input = {1, 2, 3};
        
        solution.nextPermutation(input);
        
        System.out.println("Result: " + Arrays.toString(input));
        
        System.out.println("DONE!");
    }
}

class Solution {
    public void nextPermutation(int[] nums) {
        if(nums.length < 2) {
            return;
        }

        int i1 = nums.length-2;
        int i2 = nums.length-1;

        while(i1 > -1) {
            // start from right, look for a 
            // number smaller than the previous one
            if(nums[i1] < nums[i1+1]) {
                break;
            }
            i1--;
        }

        while(i2 > 0) {
            //look for the first number greater than n1  
            if(nums[i2] > nums[i1]) {
                break;
            }
            i2--;
        }

        if(i1 > -1) {
            //switch p1 and p2;
            int temp = nums[i1];
            nums[i1] = nums[i2];
            nums[i2] = temp;
        }

        //reverse the remaining part (right of n2) of the array
        i1++;
        int i = nums.length-1;
        
        while(i1 < i) {
            int temp2 = nums[i];
            nums[i] = nums[i1];
            nums[i1] = temp2;
            i1++;
            i--;
        }
    }
}







