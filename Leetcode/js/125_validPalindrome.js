/*
Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? 
This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s === null) return false;
    if(s === '') return true;
    
    // check if alpha numeric
    function checkAN(code) {
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
        return true;
    }

    var left = 0;
    var right = s.length-1;

    while(right > left){
        
        while( !checkAN(s.charCodeAt(left)) && left<right){
            left++;
        }
        while( !checkAN(s.charCodeAt(right)) && right>left){
            right--;
        }
        //console.log("l:", left, " r:", right);
        
        if(left > right){
            break;
        }
        
      if( s.charAt(left).toLowerCase() !== s.charAt(right).toLowerCase() ){
        return false;
      }
      left++;
      right--;
    }
    return true;
};

