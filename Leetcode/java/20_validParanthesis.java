/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid 
but "(]" and "([)]" are not.
*/

import java.util.Map;
import java.util.HashMap;
import java.util.Set;
import java.util.HashSet;
import java.util.Deque;
import java.util.ArrayDeque;
import java.util.Collections;

class Main {
    public static void main(String[] args) {
        System.out.println("Starting...");

        Solution solution = new Solution();

        String input = "{ murat: (123)}";
        
        boolean result = solution.isValid(input);

        System.out.println("Result: " + Boolean.toString(result));

        System.out.println("DONE!");
    }
}

class Solution {
    public boolean isValid(String s) {
        
        Deque<Character> stack = new ArrayDeque<Character>();

        int len = s.length();
        
        for(int i=0; i<len; i++) {
            char c = s.charAt(i);

            if(MAP.containsKey(c)) {
                stack.push(c);
            } else if(CLOSING.contains(c)) {
                char last;

                try {
                    last = stack.peek();    
                } catch(NullPointerException e) {
                    // closing before opening
                    return false;
                }
            
                if(MAP.get(last) == c) {
                    stack.pop();
                } else {
                    // non matching
                    return false;
                }
            }
        }

        // remaining unclosed
        if(stack.size() > 0) {
            return false;
        }

        return true;
    }

    private static final Map<Character, Character> MAP = initMap();

    private static Map<Character, Character> initMap() {
        Map<Character, Character> map = new HashMap<>(4, 1f);

        map.put('{', '}');
        map.put('(', ')');
        map.put('[', ']');

        return Collections.unmodifiableMap(map);
    }

    private static final Set<Character> CLOSING = initSet();

    private static Set<Character> initSet() {
        Set<Character> set = new HashSet<>(4, 1f);

        set.add('}');
        set.add(')');
        set.add(']');

        return Collections.unmodifiableSet(set);
    }
}