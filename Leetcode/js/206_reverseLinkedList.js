/*
Reverse a singly linked list.

click to show more hints.

Hint:
A linked list can be reversed either iteratively or recursively. Could you implement both?
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
var reverseList = function(head) {
    if(head === null || head.next === null){
        return head;
    }
    
    function iterative(head) {
        var current = head;
        var prev = null;
        var next;
        
        while(current){
            //save it for iteration
            next = current.next;
            //reverse "pointer"
            current.next = prev;
            //update
            prev = current;
            current = next;
        }
        return prev;
    }

    function recursive(head) {
        if(!head || !head.next){
            return head;
        }

        var reversedList = recursive(head.next);

        head.next.next = head;
        head.next = null;
        return reversedList;
    }
    
    function recursiveWeird(head) {
        function reverse(headOfReversed, headOfRemaining){
            var save = headOfRemaining.next;
            headOfRemaining.next = headOfReversed;
            if(!save){
                return headOfRemaining;
            }
            return reverse(headOfRemaining, save);
        }
        
        return reverse(null, head);
    }
    
    var result = recursive(head);
    return result;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);