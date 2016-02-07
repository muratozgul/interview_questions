public class Solution {
  public ArrayList<ArrayList<Integer>> generate(int a) {
      
      ArrayList<ArrayList<Integer>> results = new ArrayList<ArrayList<Integer>>();
      
      if(a >= 1) {
          results.add(generateFirstRow());
      }
      if(a >= 2) {
          results.add(generateSecondRow());
      }
      
      for(int i=2; i<a; i++) {
          ArrayList<Integer> prevRow = results.get(i-1);
          ArrayList<Integer> newRow = new ArrayList<Integer>();
          
          newRow.add(1);
      
          for(int j=1; j<prevRow.size(); j++) {
              newRow.add(prevRow.get(j-1) + prevRow.get(j));
          }
          
          newRow.add(1);
          
          results.add(newRow);
      }
      
      return results;
      
  }
  
  private ArrayList<Integer> generateFirstRow() {
      ArrayList<Integer> row = new ArrayList<Integer>();
      row.add(1);
      return row;
  }
  
  private ArrayList<Integer> generateSecondRow() {
      ArrayList<Integer> row = new ArrayList<Integer>();
      row.add(1);
      row.add(1);
      return row;
  }
}
