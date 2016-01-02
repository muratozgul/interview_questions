/*
Given a binary tree, check whether it is a mirror of itself 
(ie, symmetric around its center).

For example, this binary tree is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.
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
var isSymmetric = function(root) {
    return recursive(root);
};

var iterative = function(root){
    var q = [root];
    var children = [];
    
    while(q.length>0){
        // save children
        for(var ch=0; ch<q.length; ch++){
            if(q[ch] !== null){
                children.push(q[ch].left); 
                children.push(q[ch].right);
            }
        }
        // compare current q
        var left = 0;
        var right = q.length-1;
        while(left<=right){
            if(q[left] === null && q[right] === null){
                //OK
            } else if(q[left] && q[right] && q[left].val === q[right].val) {
                //OK
            } else {
                return false;
            }

            left++;
            right--;
        }
        
        // update q
        q = children;
        children = [];
    }
    
    return true;
};

var recursive = function(root){
    if(!root){
        return true;
    }
    
    function recurse(a, b){
        if(a === null){
            return b===null;
        } else if(b === null){
            return false;
        } else {
            return (a.val === b.val) && recurse(a.left, b.right) && recurse(a.right, b.left);
        }
    }
    
    return recurse (root.left, root.right);
};

function Tree(val){
    this.val = val;
    this.left = this.right = null;
}

var tree = new Tree(1);
tree.right = new Tree(2);
//tree.left = new Tree(21);
// tree.right.right = new Tree(3);











