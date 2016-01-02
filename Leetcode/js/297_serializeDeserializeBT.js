/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serializeJSON = function(root) {
    var result = "null";
    if(root !== null){
      result = "{ val: " + root.val + ", right: " + serializeJSON(root.right);
      result += ", left: " + serializeJSON(root.left) + "}";
    }

    return result;
};

var serializeLC = function(root) {
    var q = [root];
    var c = [];
    var result = [];
    var buffer = [];
    
    while(q.length>0){
        var notEmpty = false;
        for(var i=0; i<q.length; i++){
            if(q[i] !== null){
                Array.prototype.push.apply(result, buffer);
                result.push(q[i].val);
                notEmpty = true;
                buffer = [];
            } else {
                buffer.push("#");
            }
            
            if(q[i]){
               c.push(q[i].left); 
               c.push(q[i].right);
            } else {
               c.push(null); 
               c.push(null);    
            }
        }
        
        if(notEmpty){
            q = c;
            c = [];
        } else {
            q = [];
        }
    }
    
    function append(prev, curr){
        return prev + "," + curr;
    }
    
    return "[" + result.reduce(append) + "]";
};

var serialize = function(root) {
  
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    
};

var deserializeJSON = function(data) {
    function isBeginning(char){
        if(char === "{")
            return true;
        return false;
    }
    
    function isEnd(char) {
        if(char === "}")
            return true;
        return false;
    }
    
    // check input
    if(data === null || data === "") {
        return null;
    }
    
    var i;
    var currObj = null;
    var currentLevel = 0;
    
    var prevBeginning = 1;
    
    var keyValPairStringQ = [];
    
    // scan data, tokenize key:val pairs
    for(i=1; i<data.length-1; i++) {
        var char = data.charAt(i);
        if(isBeginning(char)){
            currentLevel++;
        }
        if(isEnd(char)){
            currentLevel--;
        }
        if(currentLevel === 0 && (char === "," || i === data.length-2) ) {
            var substring = data.substring(prevBeginning, i).trim();
            keyValPairStringQ.push(substring);
            prevBeginning = i+1;
        }
    }
    
    // parse data from strings
    var valStr = keyValPairStringQ[0];
    var rightStr = keyValPairStringQ[1];
    var leftStr = keyValPairStringQ[2];
    
    var val = parseInt(valStr.substring(valStr.indexOf(":"), valStr.length));
    var right = deserializeJSON(rightStr.substring(rightStr.indexOf(":"), rightStr.length));
    var left = deserializeJSON(leftStr.substring(leftStr.indexOf(":"), leftStr.length));
    
    var tree = new TreeNode(valStr);
    tree.right = right;
    tree.left = left;
    
    return tree;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
var TreeNode = function(val){
  this.val = val;
  this.left = this.right = null;
};

var tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.right.right = new TreeNode(4);
console.log(tree);
var serTree = serializeJSON(tree);