public class Solution {
    // X and Y co-ordinates of the points in order.
    // Each point is represented by (X.get(i), Y.get(i))
    public int coverPoints(ArrayList<Integer> X, ArrayList<Integer> Y) {
        
        int size = X.size();
        
        if(size < 2) {
            return 0;
        }
        
        int total = 0;
        
        for(int i=1; i<size; i++) {
            total += distance(X.get(i-1), Y.get(i-1), X.get(i), Y.get(i));   
        }
        
        return total;
    }
    
    public int distance(int x1, int y1, int x2, int y2) {
        return Math.max(Math.abs(x2-x1),Math.abs(y2-y1));
    }
}