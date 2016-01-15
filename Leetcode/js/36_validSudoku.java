/*
Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.


A partially filled sudoku which is valid.

Note:
A valid Sudoku board (partially filled) is not necessarily solvable. 
Only the filled cells need to be validated.
*/

class Main {
    public static void main(String[] args) {
        System.out.println("Starting...");

        Solution solution = new Solution();

        char[][] input = {
            {'1', '2', '3', '4', '5', '6', '8', '9'},
            {'1', '2', '3', '4', '5', '6', '8', '9'},
            {'1', '2', '3', '4', '5', '6', '8', '9'},
            {'1', '2', '3', '4', '5', '6', '8', '9'},
            {'1', '2', '3', '4', '5', '6', '8', '9'},
            {'1', '2', '3', '4', '5', '6', '8', '9'},
            {'1', '2', '3', '4', '5', '6', '8', '9'},
            {'1', '2', '3', '4', '5', '6', '8', '9'},
            {'1', '2', '3', '4', '5', '6', '8', '9'}
        };
        
        boolean result = solution.isValidSudoku(input);
        
        System.out.println("Result: " + result);
        
        System.out.println("DONE!");
    }
}

class Solution {
    public boolean isValidSudoku(char[][] board) {
        int r;
        int c;

        // do not use hashmap for 9 values
        int[] nums = new int[9]; 

        // check rows
        for(c=0; c<9; c++) {
            for(r=0; r<9; r++) {
                char ch = board[r][c];
                if(ch != '.') {
                    nums[Character.getNumericValue(ch)-1]++;
                }
            }
            if(!isValidArray(nums)) {
                return false;
            }
            //clear the check array
            nums = new int[9];
        }

        // check cols
        for(r=0; r<9; r++) {
            for(c=0; c<9; c++) {
                char ch = board[r][c];
                if(ch != '.') {
                    nums[Character.getNumericValue(ch)-1]++;
                }
            }
            if(!isValidArray(nums)) {
                return false;
            }
            //clear the check array
            nums = new int[9];
        }

        // check 3x3 boxes 
        for(int b=0; b<9; b++) {
            int sr = b/3*3; //starting row
            int sc = b*3%9; //starting col

            for(r=sr; r<sr+3; r++) {
                for(c=sc; c<sc+3; c++) {
                    char ch = board[r][c];
                    if(ch != '.') {
                        nums[Character.getNumericValue(ch)-1]++;
                    }    
                }
            }
            if(!isValidArray(nums)) {
                return false;
            }
            //clear the check array
            nums = new int[9];
        }

        return true;
    }

    private boolean isValidArray(int[] arr) {
        for(int i=0; i<9; i++) {
            if(arr[i] > 1) {
                return false;
            }
        }
        return true;
    }
}


