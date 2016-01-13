import java.util.Stack;

/*
Given a string containing just the characters '(' and ')', 
find the length of the longest valid (well-formed) parentheses substring.

For "(()", the longest valid parentheses substring is "()", which has length = 2.

Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.
*/

class Main {
    public static void main(String[] args) {
        System.out.println("Starting...");

        Solution solution = new Solution();

        String input = "(()";
        
        int result = solution.longestValidParentheses(input);
        
        System.out.println("Result: " + result);
        
        System.out.println("DONE!");
    }
}

class Solution {
    public int longestValidParentheses(String s) {
        int max = 0;
        int left = 0;

        Stack<Integer> stack = new Stack<>();

        for(int i = 0; i < s.length(); i++) {
            if(s.charAt(i) == '(') {
                stack.push(i);
            
            } else {
                if(stack.isEmpty()) {
                    // character will never be matched
                    left = i+1;
                } else {
                    // remove the corresponding opening paranthesis
                    stack.pop();

                    if(stack.isEmpty()) {
                        max = Math.max(max, i-left+1);
                    } else {
                        max = Math.max(max, i-stack.peek());
                    }
                }

            }
        }
        return max;
    }

}
