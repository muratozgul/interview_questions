/*
Write a function to find the longest common prefix string amongst an array of strings
*/

class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println("Starting...");

        String[] input = {"preABC", "press", "president"};
        String result = solution.longestCommonPrefix(input);
        System.out.println("Result: " + result);
        
        System.out.println("DONE!");
    }
}

class Solution {
    public String longestCommonPrefix(String[] strs) {
        if(strs.length == 0) {
            return "";
        }
        if(strs.length == 1) {
            return strs[0];
        }
        
        StringBuilder sb = new StringBuilder();
        int i = 0;
        
        try{
            while(true) {
                char c = strs[0].charAt(i);
                for(int s=1; s<strs.length; s++) {
                    if(c != strs[s].charAt(i)) {
                        throw new DifferentCharactersFoundException("dcfe");
                    }
                }
                sb.append(c);
                i++;
            }
        } catch (IndexOutOfBoundsException e) {
            //System.out.println("IndexOutOfBoundsException");
        } catch (DifferentCharactersFoundException e) {
            //System.out.println("DifferentCharactersFoundException");
        }
        
        return sb.toString();
    }
    
    class DifferentCharactersFoundException extends Exception {
        public DifferentCharactersFoundException(String message){
            super(message);
        }
    }
}


