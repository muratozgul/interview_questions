/*
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.

Note:
Elements in a triplet (a,b,c) must be in non-descending order.
The solution set must not contain duplicate triplets.
    For example, given array S = {-1 0 1 2 -1 -4},

    A solution set is:
    (-1, 0, 1)
    (-1, -1, 2)
*/

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println("Starting...");

        int[] input = {-1, 0, 1, 2, -1, -4};
        List<List<Integer>> result = solution.threeSum(input);
        
        for(int i=0; i<result.size(); i++) {
            List<Integer> triplet = result.get(i);
            System.out.print("Triplet " + i + ": ");
            for(int j=0; j<triplet.size(); j++) {
                System.out.print(triplet.get(j) + " ");
            }
            System.out.print("\n");
        }
        
        System.out.println("DONE!");
    }
}

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> list = new ArrayList<List<Integer>>();
        
        int len = nums.length;
        
        for(int i=0; i<len-2; i++) {
            int num = nums[i];
            
            if(i>0 && num == nums[i-1]) {
                continue;
            }
            
            int left = i+1;
            int right = len-1;
            
            while(left<right) {
                if(left > i+1 && nums[left] == nums[left-1]) { 
                    left++;
                    continue; 
                }
                if(right < len-1 && nums[right] == nums[right+1]) { 
                    right--;
                    continue; 
                }
                
                int sum = num + nums[left] + nums[right];
                if(sum == 0) {
                    List<Integer> triList = new ArrayList<Integer>();
                    triList.add(num);
                    triList.add(nums[left]);
                    triList.add(nums[right]);
                    list.add(triList);
                    left++;
                } else if(sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return list;
    }
}












