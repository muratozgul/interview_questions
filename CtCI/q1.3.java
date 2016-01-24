/*
Given two strings, write a method to decide if one is a permutation of the other
*/
import java.util.HashMap;
import java.util.Map;

class Main {
  public static void main(String[] args) {
    String input1 = "book";
    String input2 = "koob";
    Solution solution = new Solution();
    Boolean result = solution.answer(input1, input2);
    System.out.println(result);
  }
}

class Solution {
  public boolean answer(String s1, String s2) {
    Map<Character, Integer> map = new HashMap<Character, Integer>();
    
    // count characters in the first string
    for(int i=0; i<s1.length(); i++) {
      char c = s1.charAt(i);
      if(map.containsKey(c)) {
        map.put(c, map.get(c)+1);
      } else {
        map.put(c, 1);
      }
    }

    // compare the results with the second string
    for(int i=0; i<s2.length(); i++) {
      char c = s2.charAt(i);
      if(map.containsKey(c) && map.get(c) > 0) {
        map.put(c, map.get(c)-1);
      } else {
        return false;
      }
    }
    
    return true;
  }
}

/*
time: O(n),
space: O(1) (if ASCII, max 128 keys)
*/