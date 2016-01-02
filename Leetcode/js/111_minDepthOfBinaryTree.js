/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest 
path from the root node down to the nearest leaf node.
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
var minDepth = function(root) {
  var depth = 0;
  
  if(root === null){
      return depth;
  }
  
  function dfs(node, depth){
    if(node === null){
        return Number.MAX_VALUE;
    } else if(node.left === null && node.right === null) {
        return depth;
    } else {
        return Math.min(dfs(node.left,depth+1), dfs(node.right,depth+1));
    }
  }
    
  depth = dfs(root, 1);

  return depth;
};

function TreeNode(val){
    var tree = {};
    tree.val = val;
    tree.left = null;
    tree.right = null;
    return tree;
}

var tree = TreeNode(0);
tree.left = TreeNode(1);
tree.right = TreeNode(2);
tree.right.right = TreeNode(2);
// tree.right.left = TreeNode(2);
// tree.left.right = TreeNode(2);
tree.left.left = TreeNode(2);
console.log(tree);
  
  
  
  
  
  
  
  
  