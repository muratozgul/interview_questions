/*
Given a binary tree, return the bottom-up level order traversal 
of its nodes' values. 
(ie, from left to right, level by level from leaf to root).

For example:
Given binary tree {3,9,20,#,#,15,7},
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
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
var levelOrderBottom = function(root) {
    if(root === null) {
        return [];
    }
    
    var q = [root];
    var children = [];
    var result = [];
    
    while(q.length>0){
        var res = [];
        //save children && add to current level
        for(var i=0; i<q.length; i++){
            if(q[i].left) children.push(q[i].left);
            if(q[i].right) children.push(q[i].right);
            res.push(q[i].val);
        }
        
        //add level to results
        result.push(res);
        
        //update
        q = children;
        children = [];
    }    
    
    return result.reverse();
};








