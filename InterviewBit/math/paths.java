public class Solution {
  public int uniquePaths(int a, int b) {
      if(a == 1) {
            return 1;
      }
      if(b == 1) {
          return 1;
      }
      
      return uniquePaths(a-1, b) + uniquePaths(a, b-1);
  }
}
