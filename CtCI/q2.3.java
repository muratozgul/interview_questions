/*
Implement an algorithm to delete a node in the middle of a linked list,
givn only access to that node.

Returns void
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
    
    Node input = head.next; 

    Solution solution = new Solution();
    solution.answer(input);
    
    System.out.println(head.toString());
  }
}

class Solution {
  public void answer(Node node) {
    // last node index = 1
    if(!isDeleteOK(node)) {
      return;
    }

    Node next = node.next;

    node.val = next.val;
    node.next = next.next;
  }

  public boolean isDeleteOK(Node node) {
    if(node == null || node.next == null) {
      return false;
    }
    return true;
  }

}