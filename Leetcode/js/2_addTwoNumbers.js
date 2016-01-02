/*
You are given two linked lists representing two non-negative numbers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var res = new ListNode(0);
    var head = res;
    var carry = 0;
    
    while(l1 !== null || l2 !== null) {
        if(l1 !== null && l2 === null) {
            res.val = (l1.val + carry) % 10;
            carry = parseInt( (l1.val + carry)/10 );
            l1 = l1.next;
        } else if(l2 !== null && l1 === null) {
            res.val = (l2.val + carry) % 10;
            carry = parseInt( (l2.val + carry)/10 );
            l2 = l2.next;
        } else {
            res.val = (l1.val + l2.val + carry) % 10;
            carry = parseInt( (l1.val + l2.val + carry)/10 );
            l1 = l1.next;
            l2 = l2.next;
        }
        if(l1 !== null || l2 !== null || carry>0) {
            res.next = new ListNode(carry);
        } else {
            res.next = null;
        }
        res = res.next;
    }
    
    return head;
};

var addTwoNumbersFaster = function(l1, l2) {
    var res = new ListNode(0);
    var head = res;
    var carry = 0;
    
    while(l1 || l2) {
        if(l1) {
            res.val += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            res.val += l2.val;
            l2 = l2.next;
        }

        var sum = res.val;
        res.val = sum % 10;
        carry = parseInt(sum/10);
        
        if(l1 || l2 || carry>0) {
            res.next = new ListNode(carry);
        } else {
            res.next = null;
        }
        res = res.next;
    }
    
    return head;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var l10 = new ListNode(1);
var l11 = new ListNode(8);
l10.next = l11;

var l20 = new ListNode(0);