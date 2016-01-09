/*
Merge two sorted linked lists and return it as a new list. 
The new list should be made by splicing together the nodes of the first two lists.
*/

class Main {
    public static void main(String[] args) {
        System.out.println("Starting...");

        Solution solution = new Solution();

        ListNode input1 = new ListNode(1);
        input.next = new ListNode(3);
        ListNode input2 = new ListNode(2);
        
        ListNode result = solution.mergeTwoLists(input1, input2);

        System.out.println("DONE!");
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
class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}

class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode head = new ListNode(-1);
        ListNode current = head;

        while(l1 != null && l2 != null) {
            if(l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        while(l1 != null) {
            current.next = l1;
            l1 = l1.next;
            current = current.next;
        }

        while(l2 != null) {
            current.next = l2;
            l2 = l2.next;
            current = current.next;
        }

        return head.next;
    }
}












