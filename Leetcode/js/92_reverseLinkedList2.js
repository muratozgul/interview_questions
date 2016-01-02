/*
Reverse a linked list from position m to n. Do it in-place and in one-pass.

For example:
Given 1->2->3->4->5->NULL, m = 2 and n = 4,

return 1->4->3->2->5->NULL.

Note:
Given m, n satisfy the following condition:
1 ≤ m ≤ n ≤ length of list.
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  //Edge cases
  if(!head || !head.next || m === n){
    return head;
  }

  //if m==head (m==1)?
  var prev = m === 1 ? head : null;
  var cur = head;
  var next = head.next;
  var pos = 1;

  while(cur !== null){
    if(pos < m){
      //continue
      prev = cur;
      cur = next;
      next = next.next;
    } else if(pos >=m && pos<n){
      var temp = next.next;
      next.next = cur;
      cur = next;
      next = temp;
    } else {
      break;
    }
    pos++;
  }

  if(m === 1){
    prev.next = next;
    return cur;
  } else {
    prev.next.next = next;
    prev.next = cur;
    return head;
  }

};


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var list = new ListNode(1);
list.next = new ListNode(2);





