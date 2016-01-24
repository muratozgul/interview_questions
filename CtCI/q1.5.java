/*
Implement a method to perform basic string compression using hte counts of repeated characters.
If compressed string is not smaller, then return the original string.
You can assume the string has only upper and lower case letters (A-Z, a-z)

EXAMPLE:
"aabcccccaaa" -> "a2b1c5a3"
*/

class Main {
  public static void main(String[] args) {
    String input = "aabcccccaaa";
    Solution solution = new Solution();
    String result = solution.answer(input);
    System.out.println(result);
  }
}

class Solution {
  public String answer(String s) {
    StringBuilder sb = new StringBuilder();
    int len = s.length();

    if(len < 3) {
      return s;
    }

    char current = s.charAt(0);
    int count = 1;

    for(int i=1; i<len; i++) {
      if(current == s.charAt(i)) {
        count++;
      } else {
        sb.append(current).append(count);
        current = s.charAt(i);
        count = 1;
      }
    }

    sb.append(current).append(count);
    String result = sb.toString();

    return len > result.length() ? result : s;
  }
}

