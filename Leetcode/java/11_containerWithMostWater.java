/*
Given n non-negative integers a1, a2, ..., an, 
where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container.
*/

class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println("Starting...");

        int input[] = {3,0,1,4};
        int result = solution.maxArea(input);
        System.out.println("Result: " + result);
        
        System.out.println("DONE!");
    }
}

class Solution {
    public int maxArea(int[] height) {
        int left = 0;
        int right = height.length-1;
        
        int max = 0;
        
        while(left < right){
            max = Math.max(max, calcArea(left, right, height));
            
            if(height[left] > height[right]) {
                right--;
            } else {
                left++;
            }
        }
        
        return max;
    }
    
    public int calcArea(int left, int right, int[] arr){
        return Math.min(arr[left], arr[right]) * (right-left);
    }
}


