/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
(you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*/
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Queue;
import java.util.Arrays;
import java.util.Iterator;

class Main {
    public static void main(String[] args) {
        System.out.println("Started...");
        Solution solution = new Solution();
        
        String input = "PAYPALISHIRING";
        int rows = 3;
        solution.convert(input, rows);
        
        System.out.println("DONE!");
    }
}

class Solution {
    public String convert(String s, int numRows) {
        // lines as Queues of chars
        ArrayList<Queue<Character>> lines = new ArrayList<Queue<Character>>(numRows);
        
        // populate Queues using ArrayDeque
        for(int i=0; i<numRows; i++) {
            lines.add(new ArrayDeque<Character>());
        }
        
        // distribute letters to lines (buckets)
        for(int i=0; i<s.length(); i++) {
            // calculate line to put (0-1-2-1-0-1-2-1-...)
            int bucket = selectBucket(i, numRows);
            // insert char to the bucket
            lines.get(bucket).add(s.charAt(i));
        }
        
        StringBuilder sb = new StringBuilder();
        
        // append chars starting from the first queue
        for(int bucket=0; bucket<numRows; bucket++) {
            Iterator iterator = lines.get(bucket).iterator();
            while(iterator.hasNext()) {
                char c = (char) iterator.next();
                sb.append(c);
            }
        }
        
        return sb.toString();
    }
    
    
    public int selectBucket(int index, int range) {
        int cycleSize = range*2-2; // (n-1) + (n-2)
        int normIndex = cycleSize > 0 ? (index%cycleSize) : 0; // prevent div by 0
        
        return normIndex < range ? normIndex : (cycleSize - normIndex);
    }
}

