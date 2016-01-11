/*
Given an array and a value, remove all instances of that value in place and return the new length.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.
*/

import java.util.Arrays;

class Main {
    public static void main(String[] args) {
        System.out.println("Starting...");

        Solution solution = new Solution();

        int[] input = {1, 1, 2, 4, 4, 5};

        int k = 1;
        
        int result = solution.removeElement(input, k);
        
        System.out.println("Result: " + result);
        System.out.println("ResultArr: " + Arrays.toString(input));
        
        System.out.println("DONE!");
    }
}

class Solution {
    public int removeElement(int[] nums, int val) {
        int len = nums.length;

        int slow = 0;
        int fast = 0;

        while(fast < len) {
            if(nums[fast] != val) {
                nums[slow] = nums[fast];
                slow++;
            }
            fast++;
        }

        return slow;
    }
}