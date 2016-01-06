/*
Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. 
If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). 
You are responsible to gather all the input requirements up front.


spoilers alert... click to show requirements for atoi.

Requirements for atoi:
The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. 
Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, 
and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, 
which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, 
or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned. 
If the correct value is out of the range of representable values, INT_MAX (2147483647) or INT_MIN (-2147483648) is returned.
*/

import java.util.Map;
import java.util.Queue;
import java.util.ArrayDeque;
import java.util.HashMap;
import java.util.Iterator;

class Main {
    public static void main(String[] args) {
        System.out.println("Started...");
        Solution solution = new Solution();
        
        String input = "-2147483649";
        int result = solution.myAtoi(input);
        System.out.println(result);
        System.out.println("DONE!");
    }
}

class Solution {
    public int myAtoi(String str) {
        long result = 0L;
        boolean negativeSign = false;
        boolean positiveSign = false;
        int MAX = Integer.MAX_VALUE/10;
        
        Queue<Character> q = new ArrayDeque<Character>();
        
        for(int i=0; i<str.length(); i++) {
            char c = str.charAt(i);
            
            if(Character.isDigit(c)) {
                q.add(c);
            } else if(q.peek() == null) {
                if(negativeSign || positiveSign){
                    break;
                } else if(c == '-'){
                    negativeSign = true;    
                } else if(c == '+'){
                    positiveSign = true;
                } else if(Character.isWhitespace(c)) {
                    continue;
                } else {
                    break;
                }
            } else if(q.peek() != null) {
                break;
            }
        }
        
        Iterator iterator = q.iterator();
        while(iterator.hasNext()) {
            long digit = (char) iterator.next() - '0';
            
            result = result*10 + digit;

            if(!negativeSign && result > Integer.MAX_VALUE) {
                return Integer.MAX_VALUE;
            } 
            if (negativeSign && -result < Integer.MIN_VALUE) {
                return Integer.MIN_VALUE;
            }
        }
        
        if(negativeSign) {
            result = -result;
        }
        
        return (int) result;
    }
}














