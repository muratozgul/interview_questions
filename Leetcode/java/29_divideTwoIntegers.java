/*
Divide two integers without using multiplication, division and mod operator.

If it is overflow, return MAX_INT.
*/


class Main {
    public static void main(String[] args) {
        System.out.println("Starting...");

        Solution solution = new Solution();

        int input = -1;
        int input2 = 1;

        int k = 1;
        
        int result = solution.divide(input, input2);
        
        System.out.println("Result: " + result);
        
        System.out.println("DONE!");
    }
}

class Solution {
    public int divide(int dividend, int divisor) {
        if(divisor == 0) {
            throw new IllegalArgumentException("Div by zero");
        }

        boolean signNeg = dividend < 0 ^ divisor < 0;

        long ldend = Math.abs((long) dividend);
        long lsor = Math.abs((long) divisor);

        long result = 0;
        int multiplier = 0;

        while(ldend > lsor << multiplier+1) {
            multiplier++;
        }

        long currentDivisor;

        while(ldend >= lsor) {
            currentDivisor = lsor << multiplier;
            
            if(ldend >= currentDivisor) {
                ldend -= currentDivisor;
                result += 1 << multiplier;
            } else {
                multiplier--;
            }
        }
        
        if(!signNeg && result > Integer.MAX_VALUE) {
            return Integer.MAX_VALUE;
        }

        if(signNeg && result-1 > Integer.MAX_VALUE) {
            return Integer.MIN_VALUE;
        }

        return signNeg ? (int)-result : (int)result;

    }
}






