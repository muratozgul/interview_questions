/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along 
the longest path from the root node down to the farthest leaf node.
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
 * @return {number}
 */
var maxDepth = function(root) {
    var max = 0;

    function updateMax(num){
      if(num>max) max = num;
    }

    function dfs(rt, depth) {
        if(rt === null) {
            updateMax(depth);
        } else {
            depth++;
            dfs(rt.left, depth);
            dfs(rt.right, depth);
        }
    }

    dfs(root, 0);

    return max;
};