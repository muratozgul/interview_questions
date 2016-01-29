/*
You have two numbers represented by a linked list, where each node contains a single digit.
The digits are stored in reverse order, such that 1's digit is at the head of the list.
Write a function that adds the two numbers and returns the sum as a linked list.

EXAMPLE: 617+295 = 912
Input: (7-> 1-> 6) + (5 -> 9 -> 2)
Output: (2-> 1-> 9)

Follow up: What if digits are stored in forward order.
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
    Node input1 = new Node(7);
    input1.next = new Node(1);
    input1.next.next = new Node(6);

    Node input2 = new Node(5);
    input2.next = new Node(9);
    input2.next.next = new Node(2);
    

    Solution solution = new Solution();
    Node result = solution.answer(input1, input2);
    
    System.out.println(result.toString());
  }
}

class Solution {
  public Node answer(Node list1, Node list2 ) {
    Node preResult = new Node(0);
    Node current = preResult;
    int surplus = 0;
    int sum = 0;
    int digit = 0;

    while(list1 != null && list2 != null) {
      sum = list1.val + list2.val + surplus;
      digit = sum % 10;
      surplus = sum / 10;
      current.next = new Node(digit);
      current = current.next;
      list1 = list1.next;
      list2 = list2.next;
    }

    while(list1 != null) {
      sum = list1.val + surplus;
      digit = sum % 10;
      surplus = sum / 10;
      current.next = new Node(digit);
      current = current.next;
      list1 = list1.next;
    }

    while(list2 != null) {
      sum = list2.val + surplus;
      digit = sum % 10;
      surplus = sum / 10;
      current.next = new Node(digit);
      current = current.next;
      list2 = list2.next;
    }

    return preResult.next;
  }
}






