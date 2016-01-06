/*
Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.
*/

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import java.util.Iterator;

class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println("Starting...");

        int input = 15;
        String result = solution.intToRoman(input);
        System.out.println("Result: " + result);
        
        System.out.println("DONE!");
    }
}

class Solution {
    public String intToRoman(int num) {
        StringBuilder sb = new StringBuilder();
        
        Set set = MAP.entrySet();
        Iterator iterator = set.iterator();
        
        while(num > 0 && iterator.hasNext()) {
            Map.Entry entry = (Map.Entry) iterator.next();
            int div = (int) entry.getKey();
            while(num >= div) {
                num -= div;
                sb.append(entry.getValue());
            }
        }
        
        return sb.toString();
    }
    
    private static final Map<Integer, String> MAP = initMap();
    
    private static Map<Integer, String> initMap() {
        Map<Integer, String> map = new LinkedHashMap<Integer, String>(16, 1f);
        
        map.put(1000, "M");
        map.put(900, "CM");
        map.put(500, "D");
        map.put(400, "CD");
        map.put(100, "C");
        map.put(90, "XC");
        map.put(50, "L");
        map.put(40, "XL");
        map.put(10, "X");
        map.put(9, "IX");
        map.put(5, "V");
        map.put(4, "IV");
        map.put(1, "I");
        
        return map;
    }
}