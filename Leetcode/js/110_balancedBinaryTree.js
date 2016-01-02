/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree 
in which the depth of the two subtrees of every node never differ 
by more than 1.
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    
    
    function depth(node){
        if(node === null){
            return 0;
        }
        var left = depth(node.left);
        var right = depth(node.right);
    
        return Math.max(left, right) + 1;
    }
    
    if(root === null){
        return true;
    }
    if(Math.abs(depth(root.left)-depth(root.right)) < 2){
        return isBalanced(root.left) && isBalanced(root.right);
    } else {
        return false;
    }
};

function Tree(val){
    this.val = val;
    this.left = this.right = null;
}

var tree = new Tree(1);
tree.right = new Tree(2);
tree.left = new Tree(22);
tree.right.right = new Tree(3);
//tree.right.right.left = new Tree(33);



