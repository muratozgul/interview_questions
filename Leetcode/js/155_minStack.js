/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
*/

/**
 * @constructor
 */
var MinStack = function() {
    this.arr = [];
    this.min = null;
    this.debug = false;
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function(x) {
    if(this.arr.length === 0){
        this.min = x;
    } else if(x<this.min){
        this.min = x;
    }
    
    var data = [x, this.min];
    this.arr.push(data);
    if(this.debug){
        console.log('push');
        console.log(this.arr);
    }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function() {
    var elem = this.arr.pop();
    if(this.arr.length === 0){
        this.min = null;
    } else {
        this.min = this.getMin();
    }
    
    if(this.debug){
        console.log('pop: ', elem);
        console.log(this.arr);
    }
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function() {
    if(this.debug){
        console.log('top: ', this.arr[this.arr.length-1][0]);
        console.log(this.arr);
    }
    return this.arr[this.arr.length-1][0];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function() {
    if(this.debug){
        console.log('getMin: ', this.arr[this.arr.length-1][1]);
        console.log(this.arr);
    }
    return this.arr[this.arr.length-1][1];
};

// var ms = new MinStack();
// ms.push(2147483646);
// ms.push(2147483646);
// ms.push(2147483647);
// ms.top();
// ms.pop();
// ms.getMin();
// ms.pop();
// ms.getMin();
// ms.pop();
// ms.push(2147483647);
// ms.top();
// ms.getMin();
// ms.push(-2147483648);
// ms.top();
// ms.getMin();
// ms.pop();
// ms.getMin();



