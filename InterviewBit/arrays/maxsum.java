public class Solution {
  // DO NOT MODFIY THE LIST. 
  public int maxSubArray(final List<Integer> a) {
      int maxSoFar = 0;
      int currentMax = 0;
      int len = a.size();
      boolean isAllNegative = true;
      
      for(int i=0; i<len; i++) {
          if(a.get(i) >= 0) {
              isAllNegative = false;
              break;
          }
      }
      
      if(isAllNegative && len>0) {
          //return the minimum
          maxSoFar = a.get(0);
          for(int i=1; i<len; i++) {
              maxSoFar = Math.max(maxSoFar, a.get(i));
          }
          
      } else {
          for(int i=0; i<len; i++) {
              currentMax = Math.max(0, currentMax+a.get(i));
              maxSoFar = Math.max(currentMax, maxSoFar);
          }    
      }
      
      return maxSoFar;
  }
}