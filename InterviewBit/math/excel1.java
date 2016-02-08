public class Solution {
  public int titleToNumber(String a) {
      char valA = 'A';
      
      int len = a.length();
      int sum = 0;
      int counter = 0;
      
      for(int i=len-1; i>=0; i--) {
          char current = a.charAt(i);
          int value = (int) current - valA + 1; 
          sum += value*(int) Math.pow(26, counter);
          
          counter++;
      }
      
      return sum;
  }
}