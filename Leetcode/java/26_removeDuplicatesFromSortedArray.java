/*
Given a sorted array, remove the duplicates in place such that 
each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. 
It doesn't matter what you leave beyond the new length.
*/

import java.util.Arrays;

class Main {
    public static void main(String[] args) {
        System.out.println("Starting...");

        Solution solution = new Solution();

        int[] input = {1, 1, 2, 4, 4, 5};

        int k = 0;
        
        int result = solution.removeDuplicates(input);
        
        System.out.println("Result: " + result);
        System.out.println("ResultArr: " + Arrays.toString(input));
        
        System.out.println("DONE!");
    }
}

class Solution {
    public int removeDuplicates(int[] nums) {
        int len = nums.length;
        
        if(len < 2) {
            return len;
        }

        int slow = 1;
        int fast = 1;

        while(fast < len) {
            if(nums[fast] != nums[fast-1]) {
                nums[slow] = nums[fast];
                slow++;
            }
            fast++;
        }

        return slow;
    }
}

