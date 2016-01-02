/*
Merge two sorted linked lists and return it as a new list. 
The new list should be made by splicing together the nodes of the first two lists.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**a
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 === null && l2 !== null) {
        return l2;
    } else if(l1 !== null && l2 === null) {
        return l1;
    } else if(l1 === null && l2 === null) {
        return null;
    }
    
    var head = null;
    if(l1.val <= l2.val){
        head = l1;
        l1 = l1.next;
    } else {
        head = l2;
        l2 = l2.next;
    }
    
    var tail = head;
    
    while(l1 !== null || l2 !== null) {
        if(l1 === null){
            tail.next = l2;
            tail = l2;
            l2 = l2.next;
        } else if(l2 === null) {
            tail.next = l1;
            tail = l1;
            l1 = l1.next;
        } else if(l1.val <= l2.val){
            tail.next = l1;
            tail = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            tail = l2;
            l2 = l2.next;
        }
    }
    
    return head;
};









