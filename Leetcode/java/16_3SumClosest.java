/*
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. 
Return the sum of the three integers. You may assume that each input would have exactly one solution.

    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

import java.util.Arrays;

class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println("Starting...");

        int[] input = {1,2,4,8,16,32,64,128}; // -3, 1, 1, 3, 4, 5
        int target = 82;
        int result = solution.threeSumClosest(input, target);
        
        System.out.println("Result: " + result);
        
        System.out.println("DONE!");
    }
}

class Solution {
    public int threeSumClosest(int[] nums, int target) {
        int len = nums.length;
        if(len < 3) {
            throw new IllegalArgumentException("more than 3 elements needed");
        }
        
        Arrays.sort(nums);
        
        int posDelta = Integer.MAX_VALUE;
        int negDelta = Integer.MIN_VALUE;
        
        for(int i=0; i<len-2; i++) {
            int num = nums[i];
            int left = i+1;
            int right = len-1;
            
            //System.out.println("Num: " + num + ", left: " + nums[left] + ", right: " + nums[right]);
            //System.out.println("iNum: " + i + ", ileft: " + left + ", iright: " + right);
            
            while(left<right) {
                int sum = num + nums[left] + nums[right];
                int delta = sum - target;
                //System.out.println(" Sum: " + sum + ", delta: " + delta);
                
                if (delta == 0) {
                    return sum;  
                } else if(delta > 0) {
                    if(delta < posDelta) {
                        posDelta = delta;    
                        //System.out.println("  PosDelta :" + delta);
                    }
                    // need to decrease the sum
                    right--;
                } else if (delta < 0) {
                    if(delta > negDelta) {
                        negDelta = delta;
                        //System.out.println("  NegDelta :" + delta);
                    }
                    // need to increase the sum
                    left++;
                }
            }
        }
        
        return -posDelta > negDelta ? target+posDelta : target+negDelta;
    }
}



