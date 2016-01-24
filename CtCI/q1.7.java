/*
Write an algorithm such that, if an element in an MxN matrix is 0, its entire row and column are set to 0.
*/

class Main {
  public static void main(String[] args) {
    int[][] input = {
      {0,2,3,4},
      {12,1,2,5},
      {11,0,3,6}
    };
    int n = 3;
    int m = 4;
    Solution solution = new Solution();
    solution.answer(input, n, m);
    solution.printMatrix(input, n, m);
  }
}

class Solution {
  public void answer(int[][] mtrx, int n, int m) {
    boolean[] rows = new boolean[n];
    boolean[] cols = new boolean[m];

    for(int r=0; r<n; r++) {
      for(int c=0; c<m; c++) {
        if(mtrx[r][c] == 0) {
          rows[r] = true;
          cols[c] = true;
        }
      }
    }

    for(int r=0; r<n; r++){
      if(rows[r]) {
        for(int c=0; c<m; c++) {
          mtrx[r][c] = 0;
        }
      }
    }

    for(int c=0; c<m; c++) {
      if(cols[c]) {
        for(int r=0; r<n; r++){
          mtrx[r][c] = 0;  
        }    
      }
    }
    
  }

  public void printMatrix(int[][] matrix, int n, int m) {
    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        System.out.print(matrix[i][j] + " ");
      }
      System.out.print("\n");
    }
  }
}