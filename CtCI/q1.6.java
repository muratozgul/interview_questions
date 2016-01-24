/*
Given an image represented by an NxN matrix, whee each pixel in the image is 4 bytes,
write a method to rotate image by 90 degrees.

Can you do this in place?
*/

class Main {
  public static void main(String[] args) {
    int[][] input = {
      {1,2,3,4},
      {12,1,2,5},
      {11,4,3,6},
      {10,9,8,7}
    };
    int n = 4;
    Solution solution = new Solution();
    solution.answer(input, n);
    solution.printMatrix(input, n);
  }
}

class Solution {
  public void answer(int[][] mtrx, int n) {
    int layers = numOfLayers(n);

    for(int i=0; i<layers; i++) {
      for(int j=0; j<n-(2*i)-1; j++) {
        rotate(mtrx, n, i, j);
      }
    }
  }

  private void rotate(int[][] mtrx, int n, int layer, int offset) {
    int first = 0+layer;
    int last = n-1-layer;

    // save top
    int temp = mtrx[first][first+offset];

    // left -> top
    mtrx[first][first+offset] = mtrx[last-offset][first];

    // bottom -> left
    mtrx[last-offset][first] = mtrx[last][last-offset];

    // right -> bottom 
    mtrx[last][last-offset] = mtrx[first+offset][last];

    // top -> right
    mtrx[first+offset][last] = temp;    
  }

  private int numOfLayers(int n) {
    return (n+1)/2;
  }

  public void printMatrix(int[][] matrix, int n) {
    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
        System.out.print(matrix[i][j] + " ");
      }
      System.out.print("\n");
    }
  }
}