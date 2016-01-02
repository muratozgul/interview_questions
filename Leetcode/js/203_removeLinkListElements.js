/*
Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var prev = null;
    var current = head;
    
    while(current !== null){
        if(current.val === val){
            if(prev === null){
                head = current.next;
                current = head;
            } else {
                prev.next = current.next;
                current = current.next;
            }
        } else {
            //update
            prev = current;
            current = current.next;
        }
    }
    
    return head;
};