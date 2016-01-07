/*
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
*/

import java.util.HashMap;
import java.util.Map;
import java.util.Iterator;

class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println("Starting...");

        String input = "XIV";
        int result = solution.romanToInt(input);
        System.out.println("Result: " + result);
        
        System.out.println("DONE!");
    }
}

class Solution {
    public int romanToInt(String s) {
        int sum = 0;
        int prevValue = 0;
        
        for(int i=0; i<s.length(); i++) {
            char c = s.charAt(i);
            int value = MAP.get(c);
            
            if(prevValue>0 && value>prevValue){
                sum -= 2*prevValue;   
            }
            sum += value;
            prevValue = value;
        }
        
        return sum;
    }
    
    private static final Map<Character, Integer> MAP = initMap();
    
    private static Map<Character, Integer> initMap() {
        Map<Character, Integer> map = new HashMap<Character, Integer>();
        
        map.put('M', 1000);
        map.put('D', 500);
        map.put('C', 100);
        map.put('L', 50);
        map.put('X', 10);
        map.put('V', 5);
        map.put('I', 1);
        
        return map;
    }
}