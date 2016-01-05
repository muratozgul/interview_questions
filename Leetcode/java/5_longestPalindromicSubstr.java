/*
Given a string S, find the longest palindromic substring in S. 
You may assume that the maximum length of S is 1000, 
and there exists one unique longest palindromic substring.
*/

class Main {
    public static void main(String[] args) {
        System.out.println("Started...");
        Solution solution = new Solution();
        
        String input = "a";
        solution.longestPalindrome(input);
        System.out.println("DONE!");
    }
}

class Solution {
    public String longestPalindrome(String s) {
        String longest = "";
        int longestLen = 0;
        int len = s.length();
        
        int tempLen = 1;
        int offset = 0;
        
        // checks "aba"
        for(int oddIndex = 0; oddIndex<len; oddIndex++) {
            tempLen = -1;
            offset = 0;
            
            while(oddIndex - offset >= 0 && oddIndex + offset < len) {
                if(s.charAt(oddIndex-offset) == s.charAt(oddIndex + offset)){
                    tempLen += 2;
                    offset++;
                } else {
                    break;
                }
            }
            
            offset--;
            if(tempLen > longestLen) {
                String substr = s.substring(oddIndex-offset, oddIndex+offset+1);
                longestLen = tempLen;
                longest = substr;
            }
        }
        
        // checks "abba"
        for(int evenIndex = 0; evenIndex<len; evenIndex++) {
            tempLen = 0;
            offset = 0;
            
            while(evenIndex - offset >= 0 && evenIndex + 1 + offset < len) {
                if(s.charAt(evenIndex-offset) == s.charAt(evenIndex + offset + 1)){
                    tempLen += 2;
                    offset++;
                } else {
                    break;
                }
            }
            
            offset--;
            if(tempLen > longestLen) {
                String substr = s.substring(evenIndex-offset, evenIndex+1+offset+1);
                longestLen = tempLen;
                longest = substr;
            }
        }
        
        System.out.println(longest);
        return longest;
    }
}