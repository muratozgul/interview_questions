/*
Remove duplicates from an unsorted LinkedList

How would you solve this problem if a temporary buffer is not allowed?
*/

import java.util.Set;
import java.util.HashSet;

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
    input.next.next = new Node(1);

    Solution solution = new Solution();
    Node result = solution.answer(input);
    System.out.println(result.toString());
  }
}

class Solution {
  public Node answer(Node head) {
    Set<Integer> set = new HashSet<Integer>();
    
    Node current = head;
    Node prev = null;

    while(current != null) {
      if(set.contains(current.val)) {
        //remove node
        prev.next = current.next;
      } else {
        set.add(current.val);
        prev = current;
      }
      current = current.next;
    }

    return head;
  }
  
  // other (constant memory) solution: two pointers but O(n^2) time
}