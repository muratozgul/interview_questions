/*
Given an array S of n integers, are there elements a, b, c, and d in S 
such that a + b + c + d = target? 

Find all unique quadruplets in the array which gives the sum of target.

Note:
Elements in a quadruplet (a,b,c,d) must be in non-descending order.
The solution set must not contain duplicate quadruplets.
    For example, given array S = {1 0 -1 0 -2 2}, and target = 0.

    A solution set is:
    (-1,  0, 0, 1)
    (-2, -1, 1, 2)
    (-2,  0, 0, 2)
*/

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println("Starting...");

        int[] input = {-1,0,1,2,-1,-4};
        int target = -1;
        
        List<List<Integer>> result = solution.fourSum(input, target);

        System.out.println(result);
            
        System.out.println("DONE!");
    }
}


class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        List<List<Integer>> results = new ArrayList<List<Integer>>();
        
        int len = nums.length;
        
        Arrays.sort(nums);
        
        for(int i=0; i<len-3; i++) {
            int n1 = nums[i];
            if(i > 0 && n1 == nums[i-1]) {
                continue;
            }
            
            for(int j=i+1; j<len-2; j++) {
                int n2 = nums[j];
                
                if(j > i+1 && n2 == nums[j-1]) {
                    continue;
                }
                
                int left = j+1;
                int right = len-1;
                
                while(left<right) {
                    int sum = n1 + n2 + nums[left] + nums[right];
                    
                    if(sum == target) {
                        List<Integer> quartet = new ArrayList<Integer>();
                        quartet.add(n1);
                        quartet.add(n2);
                        quartet.add(nums[left]);
                        quartet.add(nums[right]);
                        results.add(quartet);
                        
                        while(left < right && nums[left] == nums[left+1])
                            left++;
                        left++;
                        while(right > left && nums[right] == nums[right-1])
                            right--;
                        right--;
                    } else if(sum > target) {
                        right--;
                    } else {
                        left++;
                    }
                }
            }
        }
        
        return results;
    }
}











