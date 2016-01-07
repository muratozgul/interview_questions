/*
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

import java.util.HashMap;
import java.util.Map;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println("Starting...");

        String input = "213";
        
        List<String> result = solution.letterCombinations(input);
        
        for(String s : result) {
            System.out.println(s);    
        }
        
        System.out.println("DONE!");
    }
}

class Solution {
    public List<String> letterCombinations(String digits) {
        List<String> list = new ArrayList<String>();
        
        // return empty list if input digits is empty
        if(digits == null || digits.length() < 1) {
            return list;
        }
        
        // get letter group of first digit as string
        String lettersStr = MAP.get(digits.charAt(0));
        List<String> letters = new ArrayList<String>();
        
        // split letter string into seperate letters
        if(lettersStr != null) {
            for(int i=0; i<lettersStr.length(); i++) {
                letters.add(Character.toString(lettersStr.charAt(i)));
            }
        }
        
        // calculate remaining string
        String remaining = digits.substring(1);
        
        // if this is the last digit, return letters
        if(remaining.isEmpty() || remaining == null) {
            return letters;
        }
        
        // if there are remaining digits, calculate the result first
        List<String> results = letterCombinations(remaining);
        
        // if there is no key corresponding to this digit (like 1)
        // return result without modifying
        if(letters.size() < 1) {
            return results;
        }
        
        // add this digit's letters to the remaining set of results
        for(String letter : letters) {
            for(String result : results) {
                list.add(letter + result);
            }
        }
        
        return list;
    }
    
    private static final Map<Character, String> MAP = initMap();
    
    private static Map<Character, String> initMap() {
        Map<Character, String> map = new HashMap<>();
        
        map.put('2', "abc");
        map.put('3', "def");
        map.put('4', "ghi");
        map.put('5', "jkl");
        map.put('6', "mno");
        map.put('7', "pqrs");
        map.put('8', "tuv");
        map.put('9', "wxyz");
        
        return map;
    }
}







