/*
Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

The Sudoku board could be partially filled, 
where empty cells are filled with the character '.'.

Note:
A valid Sudoku board (partially filled) is not necessarily solvable. 
Only the filled cells need to be validated.
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    function checkRow(r) {
      var hash = {};
      for(var c=0; c<9; c++){
        var char = board[r][c];
        if(char !== '.'){
          if(hash.hasOwnProperty(char)){
            return false;
          } else {
            hash[char] = true;
          }
        }
      }
      return true;
    }

    function checkCol(c) {
      var hash = {};
      for(var r=0; r<9; r++){
        var char = board[r][c];
        if(char !== '.'){
          if(hash.hasOwnProperty(char)){
            console.log('checkCol:',c, ', row:',r);
            return false;
          } else {
            hash[char] = true;
          }
        }
      }
      return true;
    }

    function checkBox(br, bc) {
        var hash = {};
        for(var r=br*3; r<(br+1)*3; r++){
            for(var c=bc*3; c<(bc+1)*3; c++){
                var char = board[r][c];
                if(char !== '.'){
                  if(hash.hasOwnProperty(char)){
                    return false;
                  } else {
                    hash[char] = true;
                  }
                }
            }   
        }
        return true;
    }
    
    var result = true;
    for(var i=0; i<9; i++){
        result = result && checkRow(i);
        if(!result) break;
        result = result && checkCol(i);
        if(!result) break;
        var boxRow = Math.floor(i/3);
        var boxCol = i%3;
        result = result && checkBox(boxRow, boxCol);
        if(!result) break;
    }
    
    return result;
};

var myboard = [
  [1,2,3,4,5,6,7,8,9],
  [2,'.',  '.','.',  '.','.',  '.','.', '.'],
  ['.','.',  '.','.',  '.','.',  '.','.', '.'],
  ['.','.',  '.','.',  '.','.',  '.','.', '.'],
  ['.','.',  '.','.',  '.','.',  '.','.', '.'],
  ['.','.',  '.','.',  '.','.',  '.','.', '.'],
  ['.','.',  '.','.',  '.','.',  '.','.', '.'],
  ['.','.',  '.','.',  '.','.',  '.','.', '.'],
  ['.','.',  '.','.',  '.','.',  '.','.', '.']
];




