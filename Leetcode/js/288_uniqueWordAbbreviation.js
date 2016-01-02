/*
An abbreviation of a word follows the form <first letter><number><last letter>. 
Below are some examples of word abbreviations:

a) it                      --> it    (no abbreviation)

     1
b) d|o|g                   --> d1g

              1    1  1
     1---5----0----5--8
c) i|nternationalizatio|n  --> i18n

              1
     1---5----0
d) l|ocalizatio|n          --> l10n
Assume you have a dictionary and given a word, find whether its abbreviation 
is unique in the dictionary. A word's abbreviation is unique if no other word 
from the dictionary has the same abbreviation.

Example: 
Given dictionary = [ "deer", "door", "cake", "card" ]

isUnique("dear") -> false
isUnique("cart") -> true
isUnique("cane") -> false
isUnique("make") -> true
*/

/**
 * @constructor
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
  this.dictionary = dictionary;

  this.initHash();
};

ValidWordAbbr.prototype.abbrevify = function(word){
  if(word.length < 3) return word;
  var firstLetter = word.charAt(0);
  var lastLetter = word.charAt(word.length-1);
  var result = firstLetter + (word.length-2).toString() + lastLetter;
  return result;
};

ValidWordAbbr.prototype.initHash = function() {
  this.hash = {};

  for(var i=0; i<this.dictionary.length; i++){
    var abbr = this.abbrevify(this.dictionary[i]);
    
    if(this.hash[abbr]){
      this.hash[abbr].push(this.dictionary[i]);
    } else {
      this.hash[abbr] = [this.dictionary[i]];
    }
  }  
};

/**
 * @param {string} word
 * @return {bool}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
  var abbr = this.abbrevify(word);

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  var abbrs = this.hash[abbr].filter(onlyUnique);

  return !abbrs || (abbrs.length === 1 && abbrs[0] === word);
};


/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var vwa = new ValidWordAbbr(dictionary);
 * vwa.isUnique("word");
 * vwa.isUnique("anotherWord");
 */







