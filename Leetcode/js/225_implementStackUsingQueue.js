/*
Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.

Notes:

You must use only standard operations of a queue -- 
which means only push to back, 
peek/pop from front, size, and is empty operations are valid.

Depending on your language, queue may not be supported natively. 

You may simulate a queue by using a list or deque (double-ended queue), 
as long as you use only standard operations of a queue.

You may assume that all operations are valid 
(for example, no pop or top operations will be called on an empty stack).
*/

var Queue = function(){
    this.arr = [];
};

Queue.prototype.enqueue = function(val){
    this.arr.push(val);
};

Queue.prototype.dequeue = function(){
    return this.arr.shift();
};

Queue.prototype.size = function(){
    return this.arr.length;
};

Queue.prototype.isEmpty = function(){
    return this.arr.length === 0;
};

Queue.prototype.peek = function(){
    return this.arr[0];
};



/**
 * @constructor
 */
var Stack = function() {
  this.q1 = new Queue();
  this.q2 = new Queue();
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    this.q1.enqueue(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    var self = this;
    while(self.q1.size() > 1){
        self.q2.enqueue(self.q1.dequeue());
    }
    
    self.q1.dequeue();
    
    var temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    var self = this;
    while(self.q1.size() > 1){
        self.q2.enqueue(self.q1.dequeue());
    }
    
    var top = self.q1.peek();
    self.q2.enqueue(self.q1.dequeue());
    
    var temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    
    return top;
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.q1.isEmpty() && this.q2.isEmpty();
};