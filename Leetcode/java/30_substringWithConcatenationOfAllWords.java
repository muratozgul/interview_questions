/*
You are given a string, s, and a list of words, words, that are all of the same length. 
Find all starting indices of substring(s) in s that is a concatenation of 
each word in words exactly once and without any intervening characters.

For example, given:
s: "barfoothefoobarman"
words: ["foo", "bar"]

You should return the indices: [0,9].
(order does not matter).
*/

import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;

class Main {
    public static void main(String[] args) {
        System.out.println("Starting...");

        Solution solution = new Solution();

        String input = "barfoofoobarthefoobarman";
        String[] input2 = {"bar","foo","the"};

        List<Integer> result = solution.findSubstring(input, input2);
        
        System.out.println("Result: " + result);
        
        System.out.println("DONE!");
    }
}


class Solution {
    public List<Integer> findSubstring(String s, String[] words) {
        Map<String, Integer> map = new HashMap<String, Integer>();
        Map<String, Integer> tempmap = new HashMap<String, Integer>();

        for(int i=0; i<words.length; i++) {
            
            if(map.containsKey(words[i])) {
                map.put(words[i], map.get(words[i])+1);
            } else {
                map.put(words[i], 1);
            }            
        }

        int wordLen = words[0].length();
        int totalWordLen = wordLen * words.length;

        List<Integer> results = new ArrayList<Integer>();

        String temp;
        String temp2;

        for(int i=0; i<s.length()-totalWordLen+1; i++) {
            // reset map
            tempmap.clear();
            
            temp = s.substring(i, i+totalWordLen);

            boolean isValid = true;

            for(int j=0; j<totalWordLen-wordLen+1; j+=wordLen) {
                temp2 = temp.substring(j, j+wordLen);
                if(!map.containsKey(temp2)) {
                    isValid = false;
                    break;
                } else {
                    int count = tempmap.containsKey(temp2) ? tempmap.get(temp2)+1 : 1;
                    tempmap.put(temp2, count);
                    if(map.get(temp2) < count) {
                        isValid = false;
                        break;
                    }
                }
            }

            if(isValid && map.equals(tempmap)) {
                results.add(i);
            }

        }

        return results;
    }
}









