/*
Implement a function to check if a linked list is a palindrome
*/

class Node {
  int val;
  Node next = null;

  public Node(int v) {
    val = v;
  }

  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append(val);
    Node current = next;

    while(current != null) {
      sb.append("->").append(current.val);
      current = current.next;
    }
    
    return sb.toString();
  }
}

class Main {
  public static void main(String[] args) {
    Node head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);

    Solution solution = new Solution();
    solution.answer(head);
    
    System.out.println(head.toString());
  }
}

class Solution {
  public void answer(Node head) {
    
  }

}