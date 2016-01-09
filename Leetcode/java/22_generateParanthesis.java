/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

"((()))", "(()())", "(())()", "()(())", "()()()"
*/

import java.util.List;
import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        System.out.println("Starting...");

        Solution solution = new Solution();

        int input = 3;
        
        List<String> result = solution.generateParenthesis(input);

        for(String s : result) {
            System.out.println(s);
        }

        System.out.println("DONE!");
    }
}

class Solution {
    public List<String> generateParenthesis(int n) {
        if(n < 1) {
            return results;
        }

        recurse("", n, n);

        return results;
    }

    private List<String> results = new ArrayList<String>();

    private void recurse(String s, int openRem, int closeRem) {
        
        // termination condition
        if(openRem == 0 && closeRem == 0) {
            results.add(s);
            return;
        } else if(openRem > closeRem) {
            return;
        }
        
        if(openRem > 0) {
            recurse(s + "(", openRem-1, closeRem);    
        }
        
        if(closeRem > 0) {
            recurse(s + ")", openRem, closeRem-1);    
        }
    }
}













