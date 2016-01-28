/*
Implement an algorithm to find k-th to the last element of a singly linked list.
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
    Node input = new Node(1);
    input.next = new Node(2);
    input.next.next = new Node(3);

    Solution solution = new Solution();
    Node result = solution.answer(input, 2);
    if(result != null) {
        System.out.println(result.toString());    
    } else {
        System.out.println("null node");
    }
    
  }
}

class Solution {
  public Node answer(Node head, int k) {
    // last node index = 1
      
    if(k < 1) {
        return null;
    }
      
    Node slow = head;
    Node fast = head;
    int counter = 0;

    while(fast != null) {
      fast = fast.next;
      counter++;

      if(counter > k) {
        slow = slow.next;
      }
    }

    if(counter >= k) {
      return slow;
    } else {
      return null;
    }

  }

}








