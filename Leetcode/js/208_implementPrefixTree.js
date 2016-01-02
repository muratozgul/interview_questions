/*
Implement a trie with insert, search, and startsWith methods.

Note:
You may assume that all inputs are consist of lowercase letters a-z.
*/

/**
 * @constructor
 * Initialize your data structure here.
 */
var TrieNode = function() {
  this.children = {};
  this.flag = false;
};

TrieNode.prototype.insert = function(word){
  if(!word || word.length < 1){
    return;
  }

  if(word.length === 1){
    if(!this.children[word]){
      this.children[word] = new TrieNode();
    }
    this.children[word].flag = true;
    return;
  }

  if(!this.children[word.charAt(0)]){
    this.children[word.charAt(0)] = new TrieNode();
  }
  this.children[word.charAt(0)].insert(word.substring(1, word.length));
};

TrieNode.prototype.search = function(word, strict){ //2nd param: true->strict(exact match), false->loose(starts with)
  if(!word || word.length < 1){
    return false;
  }
  
  if(!this.children.hasOwnProperty(word.charAt(0))){
    return false;  
  }

  if(word.length === 1){
    if(strict) {
      return this.children[word].flag;
    } else {
      return true;  
    }
  }
  
  return this.children[word.charAt(0)].search(word.substring(1,word.length), strict);
};

var Trie = function() {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word) {
  this.root.insert(word);
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function(word) {
  return this.root.search(word, true);
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function(prefix) {
  return this.root.search(prefix, false);  
};


/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */