import java.util.ArrayList;
import java.util.List;

/*
GCD
*/

class Main {
    public static void main(String[] args) {
        System.out.println("Starting...");

        Solution solution = new Solution();
        
        int result = solution.gcd(16,12);
        System.out.println(result);
        
        System.out.println("DONE!");
    }
}

class Solution {
  public int gcd(int x, int y) {
    if(y == 0) {
      return x;
    }
    
    return gcd(y, x%y);
  }
}












