/*
Determine whether an integer is a palindrome. Do this without extra space.

click to show spoilers.

Some hints:
Could negative integers be palindromes? (ie, -1)

If you are thinking of converting the integer to string, 
note the restriction of using extra space.

You could also try reversing an integer. 
However, if you have solved the problem "Reverse Integer", 
you know that the reversed integer might overflow. How would you handle such case?

There is a more generic way of solving this problem.
*/
class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println("Starting...");

        int input = 13221;
        boolean result = solution.isPalindrome(input);
        System.out.println("Result: " + result);
        
        System.out.println("DONE!");
    }
}

class Solution {
    public boolean isPalindrome(int x) {
        if(x<0){
            return false;
        }
        
        int tens = (int) (Math.log10(x));
        
        while(x>0 && tens>0) {
            int bigDivider = (int) Math.pow(10, tens);
            
            int left = x / bigDivider;
            int right = x % 10;
            
            if(left != right) {
                return false;
            }
            
            tens = tens-2;
            x = (x % bigDivider) / 10;
        }
        
        return true;
    }
}






