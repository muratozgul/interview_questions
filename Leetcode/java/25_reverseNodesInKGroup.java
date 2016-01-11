/*
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

You may not alter the values in the nodes, only nodes itself may be changed.

Only constant memory is allowed.

For example,
Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5
*/

import java.util.Deque;
import java.util.LinkedList;

class Main {
    public static void main(String[] args) {
        System.out.println("Starting...");

        Solution solution = new Solution();

        ListNode input = new ListNode(1);
        ListNode head = input;

        for(int i=2; i<10; i++) {
            head.next = new ListNode(i);
            head = head.next;
        }

        int k = 0;
        
        System.out.println("Before: " + input.toString());
        
        ListNode result = solution.reverseKGroup(input, k);

        System.out.println("Result: " + result.toString());
        
        System.out.println("DONE!");
    }
}


class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        if(k<1 || head == null) {
            return head;
        }
        
        ListNode preHead = new ListNode(-1);
        preHead.next = head;
        ListNode current = preHead;

        while(current != null) {
            current = reverse(current, k);
        }

        return preHead.next;
    }

    private ListNode reverse(ListNode preHead, int k) {
        Deque<ListNode> stack = new LinkedList<ListNode>();

        // nothing to operate on
        if(preHead == null) {
            return preHead;
        }

        ListNode current = preHead.next;
        int i = 0;

        while(current != null && i<k) {
            stack.push(current);
            i++;
            current = current.next;
        }

        // not enough elements to reverse
        if(i<k) {
            return null;
        }

        // save k+1 th node
        ListNode afterEnd = current;

        current = stack.pop();

        // assign k th node as new first
        preHead.next = current;
        ListNode prev = null;
        
        // reverse (we know there are k elements)
        for(i=1; i<k; i++) {
            prev = stack.pop();
            current.next = prev;
            current = prev;
        }
        
        current.next = afterEnd;

        return current;
    }
}

class ListNode {
  int val;
  ListNode next;
  ListNode(int x) {
    val = x;
  }

  public String toString() {
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