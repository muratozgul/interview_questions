//Rearrange a given array so that Arr[i] becomes Arr[Arr[i]] with O(1) extra space.

public class Solution {
  public void arrange(ArrayList<Integer> a) {
      
      int len = a.size();
      for(int i=0; i<len; i++) {
          int index = a.get(i)%len;
          int encoded = (a.get(index)%len)*len;
          a.set(i, encoded + index);
      }
      
      for(int i=0; i<len; i++) {
          int decoded = a.get(i)/len;
          a.set(i, decoded);
      }
  }
}