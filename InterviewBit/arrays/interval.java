/**
 * Definition for an interval.
 * public class Interval {
 *     int start;
 *     int end;
 *     Interval() { start = 0; end = 0; }
 *     Interval(int s, int e) { start = s; end = e; }
 * }
 */
public class Solution {
    public ArrayList<Interval> insert(ArrayList<Interval> intervals, Interval newInterval) {
        int len = intervals.size();
        
        //edge case cover-1
        if(newInterval.start > newInterval.end) {
            int temp = newInterval.start;
            newInterval.start = newInterval.end;
            newInterval.end = temp;
        }
        
        Queue<Integer> minQ = new ArrayDeque<Integer>();
        Queue<Integer> maxQ = new ArrayDeque<Integer>();
        
        boolean startPlaced = false;
        boolean endPlaced = false;
        
        for(int i=0; i<len; i++) {
            Interval interval = intervals.get(i);
            
            // already placed
            if(startPlaced && endPlaced) {
                minQ.add(interval.start);
                maxQ.add(interval.end);
                continue;
            }
            
            if(!isColliding(interval, newInterval)) {
                //check if smaller
                if(newInterval.end < interval.start) {
                    if(!startPlaced) {
                        minQ.add(newInterval.start);
                        startPlaced = true;
                    }
                    if(!endPlaced) {
                        maxQ.add(newInterval.end);
                        endPlaced = true;
                    }
                }
                
                minQ.add(interval.start);
                maxQ.add(interval.end);
                continue;
                
            } else {
                //there is collision
                
                //1) interval contains newInterval
                //<------interval------>
                //   <---newInter--->
                if(interval.start <= newInterval.start && newInterval.end <= interval.end) {
                    minQ.add(newInterval.start);
                    startPlaced = true;
                    maxQ.add(newInterval.end);    
                    endPlaced = true;
                
                //2)
                //   <---interval--->
                //<---newInter--->
                } else if(newInterval.start <= interval.start && newInterval.end <= interval.end) {
                    if(!startPlaced) {
                        minQ.add(newInterval.start);
                        startPlaced = true;
                    }
                    maxQ.add(interval.end);
                    endPlaced = true;
                
                //3)
                //   <---interval--->
                //      <---newInter--->
                } else if(interval.start <= newInterval.start && interval.end <= newInterval.end) {
                    minQ.add(interval.start);
                    startPlaced = true;
                
                //4)
                //   <---interval--->
                //<------newInter------>
                } else if(newInterval.start <= interval.start && interval.end <= newInterval.end) {
                    if(!startPlaced) {
                        minQ.add(newInterval.start);
                        startPlaced = true;
                    }
                
                //unhandled
                } else {
                    StringBuilder sb = new StringBuilder();
                    sb.append("int.s: ").append(interval.start);
                    sb.append("int.e: ").append(interval.end);
                    sb.append(" || ");
                    sb.append("new.s: ").append(newInterval.start);
                    sb.append("new.e: ").append(newInterval.end);
                    
                    throw new RuntimeException(sb.toString());
                }
                
            }
        }
        
        if(!startPlaced) {
            minQ.add(newInterval.start);
        }
        if(!endPlaced) {
            maxQ.add(newInterval.end);
        }
        
        return zipQueues(minQ, maxQ);

    }
    
    private boolean isColliding(Interval a, Interval b) {
        return Math.max(a.start, b.start) < Math.min(a.end, b.end);
    }
    
    private ArrayList<Interval> zipQueues(Queue<Integer> minQ, Queue<Integer> maxQ) {
        ArrayList<Interval> result = new ArrayList<Interval>();
        Iterator minIterator = minQ.iterator();
        Iterator maxIterator = maxQ.iterator();
        
        while(minIterator.hasNext()) {
            int start = (int) minIterator.next();
            int end = (int) maxIterator.next();
            Interval interval = new Interval(start, end);
            result.add(interval);
        }
        
        return result;
    }
}
