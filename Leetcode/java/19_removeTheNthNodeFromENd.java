/*
Given a linked list, remove the nth node from the end of list 
and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, 
   the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.
*/

class Main {
  public static void main(String[] args) {
    System.out.println("Starting...");

    Solution solution = new Solution();

    ListNode input = new ListNode(1);
    input.next = new ListNode(2);
    input.next.next = new ListNode(3);
    int n = 2;
    ListNode result = solution.removeNthFromEnd(input, n);

    System.out.println("Result: " + result.toString());

    System.out.println("DONE!");
  }
}

class ListNode {
  int val;
  ListNode next;
  ListNode(int x) {
    val = x;
  }

  public String toString(){
    StringBuilder sb = new StringBuilder();
    sb.append(this.val);
    ListNode next = this.next;

    while(next != null) {
      sb.append("->").append(next.val);
      next = next.next;
    }

    return sb.toString();
  }
}

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode current = head;
        ListNode prev = null;
        ListNode fast = current;

        try {
            for(int i=0; i<n; i++) {
                fast = fast.next;
            }
        } catch(NullPointerException e) {
            System.out.println("n > list length");
            return head;
        }

        while(fast != null) {
            prev = current;
            current = current.next;
            fast = fast.next;
        }

        if(current == head) {
            return head.next;
        } else {
            prev.next = current.next;
            return head;
        }
    }
}






