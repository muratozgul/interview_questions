/*
Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.

Notes:
You must use only standard operations of a stack -- 
which means only push to top, peek/pop from top, size, and is empty operations are valid.

Depending on your language, stack may not be supported natively. 
You may simulate a stack by using a list or deque (double-ended queue), 
as long as you use only standard operations of a stack.

You may assume that all operations are valid 
(for example, no pop or peek operations will be called on an empty queue).
*/

var Stack = function(){
  this.arr = [];
};

Stack.prototype.push = function(x){
  this.arr.push(x);
};

Stack.prototype.peek = function(){
  return this.arr[this.arr.length-1];
};

Stack.prototype.pop = function(){
  return this.arr.pop();
};

Stack.prototype.size = function(){
  return this.arr.length;
};

Stack.prototype.isEmpty = function(){
  return this.size() <= 0;
};

/**
 * @constructor
 */
var Queue = function() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.pushStack.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    if(!this.popStack.isEmpty()){
      return this.popStack.pop();
    }

    while(!this.pushStack.isEmpty()){
      this.popStack.push(this.pushStack.pop());
    }

    return this.popStack.pop();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    if(!this.popStack.isEmpty()){
      return this.popStack.peek();
    }    

    while(!this.pushStack.isEmpty()){
      this.popStack.push(this.pushStack.pop());
    }

    return this.popStack.peek();
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.popStack.isEmpty() && this.pushStack.isEmpty();
};