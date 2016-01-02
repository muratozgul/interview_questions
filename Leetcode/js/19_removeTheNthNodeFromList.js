/*
19 - Remove the nth node from list:
Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
 
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    function deleteNode(node, prevNode){
        prevNode.next = node.next;
    }
    
    var currentNode = head;
    var nodeToDelete = head;
    var prev = null;
    var counter = 0;
    
    while(currentNode !== null){
        counter++;
        if(currentNode.next !== null){
            //if not the tail
            currentNode = currentNode.next;
            if(counter>=n){
                prev = nodeToDelete;
                nodeToDelete = nodeToDelete.next;
            }
        } else {
            //if it is the tail
            if(counter>=n){
                if(prev===null) return nodeToDelete.next;
                deleteNode(nodeToDelete, prev);
            }
            return head;
        }
    }
    
    return head;
};

// function printList(head){
//     var string = "";
//     while(head !== null){
//         string += head.val;
//         if(head.next!==null){
//             string += "->";
//         }
//         head = head.next;
//     }
//     console.log(string);
// }

// var n1 = new ListNode(1);
// var n2 = new ListNode(2);
// var n3 = new ListNode(3);
// var n4 = new ListNode(4);
// var n5 = new ListNode(5);

// n1.next = n2;
// n2.next = n3;
// n3.next = n4;
// n4.next = n5;

// printList(n1);
// removeNthFromEnd(n1,2);
// printList(n1);
