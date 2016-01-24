/*
Write a method to replace all spaces in a string with '%20'. 
You may assume that the string has a sufficient space at the end of the string to hold the additional
caharacters, and that you are given the "true" length of the string.
(Note: if implemented in java, please use a char array so hat oyu can perform this operation in place)

EXAMPLE:
Input:  "Mr John Smith    " , 13
Output: "Mr%20John%20Smith"
*/

import java.util.Stack;

class Main {
  public static void main(String[] args) {
    String input1 = "Mr John Smith    ";
    int input2 = 13;
    Solution solution = new Solution();
    String result = solution.answer(input1, input2);
    System.out.println(result);
  }
}

class Solution {
  public String answer(String s, int len) {
    char[] cArr = s.toCharArray();
    Stack<Integer> stack = new Stack<Integer>();

    // first pass to detect spaces
    for(int i=0; i<len; i++) {
      if(cArr[i] == ' ') {
        stack.push(i);
      }
    }

    if(stack.size() == 0 ) {
      return s;
    }

    int size = stack.size();
    int next = stack.pop();
    int offset = size*2;

    for(int i=len-1; i>=0; i--) {
      if(i == next) {
        offset = (size-1)*2;
        cArr[i+offset] = '%';
        cArr[i+1+offset] = '2';
        cArr[i+2+offset] = '0';
        
        if(size > 1) {
          size--;
          next = stack.pop();
        } else {
          break;
        }
      } else {
        cArr[i+offset] = cArr[i];
      }
    }

    return new String(cArr);
  }
}



