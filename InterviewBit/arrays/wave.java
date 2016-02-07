public class Solution {
  public ArrayList<Integer> wave(ArrayList<Integer> a) {
      Collections.sort(a);
      int len = a.size();
      
      for(int i=0; i<len-1; i+=2) {
          swap(a, i, i+1);
      }
      
      return a;
  }
  
  private void swap(List<Integer> list, int a, int b) {
      int temp = list.get(a);
      list.set(a, list.get(b));
      list.set(b, temp);
  }
  
}