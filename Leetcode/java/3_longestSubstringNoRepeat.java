/*
Given a string, find the length of the longest substring without repeating characters. 

For example, the longest substring without repeating letters for "abcabcbb" is "abc", 
which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.
*/

import java.util.HashMap;

class Main {
    public static void main(String[] args) {
        System.out.println("Started...");
        Solution solution = new Solution();
        
        String input = "aa";
        solution.lengthOfLongestSubstring(input);
        System.out.println("DONE!");
    }
}

class Solution {
    public int lengthOfLongestSubstring(String s) {
        int longest = 0;
        int startIndex = 0;
        
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();
        int len = s.length();
        
        for(int i=0; i<len; i++) {
            char c = s.charAt(i);
            
            if(map.containsKey(c)) {
                int val = map.get(c) + 1;
                
                if(val > startIndex) {
                    startIndex = val;
                }
            }

            if(longest < i-startIndex+1) {
                longest = i-startIndex+1;
            }

            map.put(c, i);
        }
        
        return longest;
    }
}