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

// Your runtime beats 96.55% of javascript submissions. -> 120ms
var swapPairs = function(head) {
    //check input
    if(head === null || head.next === null){
        return head;
    }
    //init
    var prev = new ListNode(0);
    var n1 = head;
    var n2 = head.next;
    var after = head.next.next;
    
    var origHead = n2;
    
    function swap(f,a,b,c) {
        f.next = b;
        a.next = c;
        b.next = a;
    }
    
    //loop
    while(true){
        swap(prev, n1, n2, after);
        //update
        prev = n1;
        n1 = after;
        if(after !== null) {
            n2 = after.next;
        } else {
            break;
        }
        if(n2 !== null) {
            after = n2.next;
        } else {
            break;
        }
    }
    
    return origHead;
};