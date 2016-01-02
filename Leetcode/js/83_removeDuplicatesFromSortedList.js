/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head === null){
        return null;
    }
    var origin = head;
    var current = head.next;

    while(current !== null){
      if(head.val !== current.val){
        head.next = current;
        head = current;
      } else {
        head.next = null;
      }
      current = current.next;
    }

    return origin;
};

function ListNode(val){
    this.val = val;
    this.next = null;
}

var list = new ListNode(1);
list.next = new ListNode(1);
//list.next.next = new ListNode(3);
//list.next.next.next = new ListNode(4);



