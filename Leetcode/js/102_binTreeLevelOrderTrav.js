/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree {3,9,20,#,#,15,7},
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
confused what "{1,#,2,3}" means
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
   var result = [];
   
   if(root === null) {
       return result;
   }
   
   function printLevel(q){
       var level = [];
       for(var i=0; i<q.length; i++){
           level.push(q[i].val);
       }
       result.push(level);
   }
   
   function addChildren(q){
      var newQ = [];
      for(var i=0; i<q.length; i++){
          if(q[i].left) newQ.push(q[i].left);
          if(q[i].right) newQ.push(q[i].right);
      }
      return newQ;
   }
   
   var queue = [];
   var queue2;
   
   queue.push(root);
   
   while(queue.length>0) {
       queue2 = addChildren(queue);
       printLevel(queue);
       queue = queue2;
   }
   
   return result;
};

function TreeNode(val) {
 this.val = val;
 this.left = this.right = null;
}

var tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);







