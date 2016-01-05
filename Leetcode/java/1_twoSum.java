/*
Given an array of integers, find two numbers such that 
they add up to a specific target number.

The function twoSum should return indices of the two numbers such that 
they add up to the target, where index1 must be less than index2. 

Please note that your returned answers (both index1 and index2) are 
not zero-based.

You may assume that each input would have exactly one solution.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;


class Main {
    public static void main(String[] args) {
        System.out.println("Started...");
        Solution solution = new Solution();
        int[] numbers = {2, 7, 11, 15};
        int target = 9;
        solution.twoSum(numbers, target);
    }
}

class Solution {
    public int[] twoSum(int[] nums, int target) {
        
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        
        for(int i=0; i<nums.length; i++) {
            int current = nums[i];
            
            if(map.containsKey(target-current)) {
                // if there is a number that can 
                //complete this number to the target
                StringBuilder sb = new StringBuilder();
                
                int index1 = map.get(target-current);
                int index2 = i;
                
                sb.append("index1=")
                  .append(index1+1)
                  .append(", index2=")
                  .append(index2+1);
                  
                System.out.println(sb.toString());
                
                return new int[]{index1+1, index2+1};
            } else {
                // save number to hashmap for future lookup
                map.put(current, i);    
            }
        }
        
        return new int[0];
    }
}