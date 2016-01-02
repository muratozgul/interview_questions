/*
Given a non-empty binary search tree and a target value, 
find the value in the BST that is closest to the target.

Note:
Given target value is a floating point.
You are guaranteed to have only one unique value in the BST that is closest to the target.
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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    var rootVal = root.val;
    var child = rootVal > target ? root.left : root.right;
    if(child === null) return rootVal;
    var childVal = closestValue(child, target);
    return Math.abs(rootVal-target) < Math.abs(childVal-target) ? rootVal : childVal;
};