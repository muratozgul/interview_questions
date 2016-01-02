/*
Design and implement a data structure for Least Recently Used (LRU) cache. 
It should support the following operations: get and set.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, 
otherwise return -1.

set(key, value) - Set or insert the value if the key is not already present. 
When the cache reached its capacity, it should invalidate 
the least recently used item before inserting a new item.
*/

/**
 * @constructor
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.dll = new DoublyLinkList();
  this.hash = new HashMap();
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
  if(this.hash.contains(key)){
    var node = this.hash.get(key);
    this.dll.moveToHead(node);
    return node.val;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, val) {
  if(this.hash.contains(key)){
    var node = this.hash.get(key);
    node.val = val;
    this.dll.moveToHead(node);
  } else {
    if(this.hash.size() === this.capacity){
      var lruKey = this.dll.tail.key;
      this.hash.delete(lruKey);
      this.dll.removeNode(this.dll.tail);
    }
    this.dll.insertHead(key, val);
    this.hash.set(key, this.dll.head);  
  }
};

//#######
//HashMap
//#######

var HashMap = function(){
  this.len = 0;
  this.hash = {};
};

HashMap.prototype.size = function(){
  return this.len;
  //return Object.keys(this.hash).length;
};

HashMap.prototype.contains = function(key){
  return this.hash.hasOwnProperty(key);
};

HashMap.prototype.get = function(key){
  return this.hash[key];
};

HashMap.prototype.set = function(key, val){
  if(!this.contains(key)) this.len++;
  this.hash[key] = val;
};

HashMap.prototype.delete = function(key){
  delete this.hash[key];
  this.len--;
};

//##############
//DoublyLinkList
//##############

var DoublyLinkList = function() {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

var DLLNode = function(key, val){
  this.key = key;
  this.val = val;
  this.prev = this.next = null;
};

DoublyLinkList.prototype.insert = function(key, val) {
  var node = new DLLNode(key, val);
  
  if(!this.head){
    this.head = this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this.size++;
};

DoublyLinkList.prototype.insertHead = function(key, val) {
  var node = new DLLNode(key, val);

  if(!this.head){
    this.head = this.tail = node;
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
  this.size++;
};

DoublyLinkList.prototype.removeNode = function(node) {
  if(node){
    if(node === this.head && node === this.tail){
      this.head = null;
      this.tail = null;
    } else if(node === this.head){
      this.head = node.next;
    } else if(node === this.tail){
      this.tail = node.prev;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    this.size--;
  }

  return node;
};

DoublyLinkList.prototype.moveToHead = function(node) {
  if(node === this.head){
    return;
  }else if(node === this.tail){
    node.next = this.head;
    this.head.prev = node;
    node.prev.next= null;
    this.tail = node.prev;
    node.prev = null;
  } else {
    node.prev.next = node.next;
    node.next.prev = node.prev;

    node.next = this.head;
    this.head.prev = node;
  }
  this.head = node;
};

