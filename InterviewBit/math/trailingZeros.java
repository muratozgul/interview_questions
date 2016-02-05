public class Solution {
  public int trailingZeroes(int a) {
      int fives = 0;
      int twos = 0;
      
      for(int i=a; i>1; i--) {
          int temp = i;
          
          while(temp%5 == 0) {
              fives++;
              temp /= 5;
          }
          
          while(temp%2 == 0) {
              twos++;
              temp /= 2;
          }
      }
      
      return Math.min(fives, twos);
  }
}