/*
Write code to partition a linked list around a value x,
such that all nodes less than x come before all nodes greater than or equal to x.
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
    Node head = new Node(4);
    head.next = new Node(2);
    head.next.next = new Node(1);
    head.next.next.next = new Node(3);

    Solution solution = new Solution();
    Node result = solution.answer(head, 4);
    
    System.out.println(result.toString());
  }
}

class Solution {
  public Node answer(Node current, int x ) {
    Node tail = current;
    Node head = current;

    while(current != null) {
      Node next = current.next;
      
      if(current.val < x) {
        //add to head
        current.next = head;
        head = current;
      } else {
        //add to tail
        tail.next = current;
        tail = current;
      }
    
      current = next;
      
    }    
    tail.next = null;

    return head;
  }
}