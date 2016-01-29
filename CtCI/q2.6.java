/*
Given a linked list, return then node at the beginning of the loop (or nul if there is no loop)
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
    head.next.next.next.next = new Node(5);
    head.next.next.next.next.next = head.next.next;

    Solution solution = new Solution();
    Node result = solution.answer(head);
    
    System.out.println(result.val);
  }
}

class Solution {
  public Node answer(Node head) {
    Node slow = head;
    Node fast = head;

    // lenght of loop: x
    // when slow enters loop after k steps:
    //  fast took 2k steps and at position x-k % x
    // they will meet meet after x-k % x steps
    // from head to loopstart = from collision to loopstart
    // move one pointer to head, both stepping 1
    // return the node when they collide again

    while(fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;

      if(slow == fast) {
        break;
      }
    }

    if(fast == null || fast.next == null) {
      return null;
    }

    slow = head;

    while(slow != fast) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow;
  }
}