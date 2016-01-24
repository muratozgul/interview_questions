/*
Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?
*/
import java.util.HashSet;
import java.util.Set;

class Main {
  public static void main(String[] args) {
    String input = "asdfg";
    Solution solution = new Solution();
    Boolean result = solution.answer(input);
    System.out.println(result);
  }
}

class Solution {
  public boolean answer(String answer) {
    Set<Character> set = new HashSet<Character>();
    
    for(int i=0; i<answer.length(); i++) {
        char c = answer.charAt(i);
        if(set.contains(c)) {
            return false;
        } else {
            set.add(c);
        }
    }
    
    return true;
  }
}

/*
time: O(n),
space: O(1) (if ASCII, max 128 keys)
*/