/*
You are given two linked lists representing two non-negative numbers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

class Main {
    public static void main(String[] args) {
        System.out.println("Started...");
        Solution solution = new Solution();
        
        ListNode l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(3);
        
        ListNode l2 = new ListNode(5);
        l2.next = new ListNode(6);
        l2.next.next = new ListNode(4);
        
        solution.addTwoNumbers(l1, l2);
    }
}

class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
    
    public String toString(){
        StringBuilder sb = new StringBuilder();
        sb.append(val);
        ListNode current = this;
        while(current.next != null){
            sb.append("->").append(current.next.val);
            current = current.next;
        }
        return sb.toString();
    }
 }
 
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int remainder = 0;
        ListNode head = new ListNode(-1);
        ListNode current = head;
        
        while(l1 != null && l2 != null) {
            int val = l1.val + l2.val + remainder;
            current.next = new ListNode(val % 10);
            remainder = val/10;
            
            // StringBuilder sb = new StringBuilder();
            // sb.append("Val: ").append(val);
            // sb.append(", Lval: ").append(val%10);
            // sb.append(", Rem: ").append(val/10);
            
            // System.out.println(sb.toString());
            
            current = current.next;
            l1 = l1.next;
            l2 = l2.next;
        }
        
        while(l1 != null) {
            int val = l1.val + remainder;
            current.next = new ListNode(val % 10);
            remainder = val/10;
            
            current = current.next;
            l1 = l1.next;
        }
        
        while(l2 != null) {
            int val = l2.val + remainder;
            current.next = new ListNode(val % 10);
            remainder = val/10;
            
            current = current.next;
            l2 = l2.next;
        }
        
        if(remainder > 0) {
            current.next = new ListNode(remainder);
        }
        
        //System.out.println(head.toString());
        
        return head.next;
    }
}