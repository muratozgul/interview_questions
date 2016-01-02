/*
Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var result = true;
    
    if(head === null || head.next === null){
        return result;
    }
    
    //determine length
    var len = 0;
    var orig = head;
    while(head){
        len++;
        head = head.next;
    }
    
    //reverse until center
    head = orig;
    var current = head;
    var prev = null;
    var next = current.next;
    for(var i=0; i<=(len-1)/2; i++){
        current.next = prev;
        prev = current;
        current = next;
        next = current.next;
    }
    
    var midLeft = len % 2 === 0 ? prev : prev.next;
    var midRight = current;
    
    //check
    while(midRight){
        if(midRight.val !== midLeft.val){
            result = false;
            break;
        }
        midRight = midRight.next;
        midLeft = midLeft.next;
    }

    //repair
    while(prev){
        next = prev.next;
        prev.next = current;
        current = prev;
        prev = next;
    }
    
    //return
    return result;
};


function LL(val){
    this.val = val;
    this.next = null;
}

var list  = new LL(0);
list.next = new LL(1);
list.next.next = new LL(2);
list.next.next.next = new LL(3);





