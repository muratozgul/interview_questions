/*
Implement strStr().

Returns the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.
*/

class Main {
    public static void main(String[] args) {
        System.out.println("Starting...");

        Solution solution = new Solution();

        String input = "asddefasdasddefx";
        String input2 = "def";

        int k = 1;
        
        int result = solution.strStr(input, input2);
        
        System.out.println("Result: " + result);
        
        System.out.println("DONE!");
    }
}

class Solution {
    public int strStr(String haystack, String needle) {
        int hlen = haystack.length();
        int nlen = needle.length();
        int index = -1;

        if(hlen < nlen) {
            return index;
        }

        for(int i=0; i<hlen-nlen+1; i++) {
            if(needle.equals(haystack.substring(i, i+nlen))) {
                index = i;
                break;
            }
        }


        return index;
    }
}

