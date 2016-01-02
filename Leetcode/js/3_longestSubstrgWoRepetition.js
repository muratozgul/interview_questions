/* 
Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters. 
For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3. 
For "bbbbb" the longest substring is "b", with the length of 1.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var maxLength = 0;
    var crrLength = 0; //current length
    var crrHead = 0; //current head index
    var ht = {}; //hashtable 
    
    for(var i=0; i<s.length; i++) {
        if( typeof(ht[s.charAt(i)]) === 'undefined' ) {
            ht[s.charAt(i)] = i;
        } else {
            if(ht[s.charAt(i)] >= crrHead) {
                //if part of current substring
                //update maxlength and modify current substr
                crrHead = ht[s.charAt(i)] + 1;
            }
            ht[s.charAt(i)] = i;
        }
        crrLength = i - crrHead + 1;
        if(maxLength < crrLength) maxLength = crrLength;
    }
    
    return maxLength;
};