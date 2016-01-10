/*
Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. 
You may not modify the values in the list, only nodes itself can be changed.
*/

class Main {
    public static void main(String[] args) {
        System.out.println("Starting...");

        Solution solution = new Solution();

        ListNode input = new ListNode(1);
        input.next = new ListNode(2);
        input.next.next = new ListNode(3);
        input.next.next.next = new ListNode(4);
        
        ListNode result = solution.swapPairs(input);

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


class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode preHead = new ListNode(-1);
        ListNode current = preHead;
        preHead.next = head;

        while(current != null) {
            current = swap(current);
        }

        return preHead.next;
    }

    private ListNode swap(ListNode prev){
        // nothing to operate on
        if(prev == null || prev.next == null) {
            return null;
        }

        ListNode first = prev.next;

        // no second item to swap
        if(first.next == null) {
            return null;
        }

        ListNode second = first.next;

        prev.next = second;
        first.next = second.next;
        second.next = first;

        return first;
    }
}












