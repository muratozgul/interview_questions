/*
Given a string, we can "shift" each of its letter to its successive letter, for example: 
"abc" -> "bcd". We can keep "shifting" which forms the sequence:

"abc" -> "bcd" -> ... -> "xyz"
Given a list of strings which contains only lowercase alphabets, 
group all strings that belong to the same shifting sequence.

For example, given: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"], 
Return:

[
  ["abc","bcd","xyz"],
  ["az","ba"],
  ["acef"],
  ["a","z"]
]
Note: For the return value, each inner list's elements must follow the lexicographic order.
*/

/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
  function dif(chr1, chr2){
    //122->z
    //97->a
    if(chr2>=chr1){
      return chr2.charCodeAt(0) - chr1.charCodeAt(0);
    } else {
      return (122-chr1.charCodeAt(0)) + (chr2.charCodeAt(0)-97) + 1;
    }
  }

  function compare(str1, str2){
    if(str1 === str2) return true;

    if(str1.length === 1 && str2.length ===1) return true;

    for(var i=1; i<str.length; i++){
      var prevDif = dif(str1.charAt(i-1), str2.charAt(i-1));
      var currDif = dif(str1.charAt(i), str2.charAt(i));
      if(prevDif !== currDif){
        return false;
      }
    }
    return true;
  }

  var result = [];
  var hash = {};

  if(!strings || strings.length<1) return result;

  for(var i=0; i<strings.length; i++){
    var str = strings[i];
    //check if length exists in the hash
    if(!hash[str.length]){
      //if first of its length
      hash[str.length] = [result.length];
      result.push([str]);
    } else {
      //get all the possible groups
      var checkArr = hash[str.length];
      var placed = false;
      //for each group
      for(var a=0; a<checkArr.length; a++){
        //check with first one (enough)
        var refStr = result[checkArr[a]][0];
        if(compare(str, refStr)){
          //str is from the same group
          result[checkArr[a]].push(str);
          placed = true;
          break;
        }
      }
      if(!placed){
        //str does not belong to an existing group
        hash[str.length].push(result.length);
        result.push([str]);
      }
    }
  }

  result.forEach(function(arr){
    arr.sort();
  });

  return result;

};

var arr = ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"];