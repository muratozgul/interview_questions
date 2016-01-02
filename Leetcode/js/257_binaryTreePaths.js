/*
Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:
   1
 /   \
2     3
 \
  5
  
All root-to-leaf paths are: ["1->2->5", "1->3"]
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var strArr = [];
    function recurse(tree, mystr){
        mystr += tree.val.toString();
        if(tree.left === null && tree.right === null ){
            strArr.push(mystr);
        } else {
            if(tree.left !== null) {
                recurse(tree.left, mystr + "->");
            }
            if(tree.right !== null) {
                recurse(tree.right, mystr + "->");
            }
        }
    }
    
    if(root === null){
        return [];
    } else {
        recurse(root, "");
        return strArr;
    }
    
};

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

// var root = new TreeNode(1);
// var t1 = new TreeNode(2);
// var t2 = new TreeNode(3);
// var t3 = new TreeNode(5);
// root.left = t1;
// root.right = t2;
// t1.right = t3;
