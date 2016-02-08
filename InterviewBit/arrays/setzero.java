public class Solution {
  public void setZeroes(ArrayList<ArrayList<Integer>> a) {
      int rows = a.size();
      int cols = a.get(0).size();
      
      for(int r=0; r<rows; r++) {
          for(int c=0; c<cols; c++) {
              int val = a.get(r).get(c);
              if( isZero(val) ) {
                  // process col
                  if(!isColProcessed(val)) {
                      for(int pr=0; pr<rows; pr++) {
                          int temp = a.get(pr).get(c);
                          a.get(pr).set(c, temp | 2 );
                      }    
                  }
                  
                  // process row
                  if(!isRowProcessed(val)) {
                      for(int pc=0; pc<cols; pc++) {
                          int temp = a.get(r).get(pc);
                          a.get(r).set(pc, temp | 4 );
                      }
                  }
              }
          }
      }
      
      for(int r=0; r<rows; r++) {
          for(int c=0; c<cols; c++) {
              int temp = a.get(r).get(c);
              if(isColProcessed(temp) || isRowProcessed(temp)) {
                  a.get(r).set(c, 0);
              }
          }
      }
  }
  
  private boolean isColProcessed(int num) {
      return ((num >> 1) & 1) == 1;
  }
  
  private boolean isRowProcessed(int num) {
      return ((num >> 2) & 1) == 1;
  }
  
  private boolean isZero(int num) {
      return (num & 1) == 0;
  }
}
