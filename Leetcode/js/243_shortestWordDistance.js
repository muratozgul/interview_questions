/*
Given a list of words and two words word1 and word2, 
return the shortest distance between these two words in the list.

For example,
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Given word1 = “coding”, word2 = “practice”, return 3.
Given word1 = "makes", word2 = "coding", return 1.

Note:
You may assume that word1 does not equal to word2, 
and word1 and word2 are both in the list.
*/

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    var pos1 = -1;
    var pos2 = -1;
    var min = Number.MAX_VALUE;
    
    for(var i=0; i<words.length; i++){
        if(words[i] === word1){pos1 = i;} 
        else if(words[i] === word2){pos2 = i;}
        
        if(words[i] === word1 && pos2>-1){
            min = Math.min(min, pos1-pos2);
        }else if(words[i] === word2 && pos1>-1){
            min = Math.min(min, pos2-pos1);
        }
    }
    
    return min;
};

var arr = ["practice", "makes", "perfect", "coding", "makes"];