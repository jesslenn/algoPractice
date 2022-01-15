//Prompt: Given a singly linked list, rotate the linked list counter-clockwise by k nodes. Where k is a given positive integer. For example, if the given linked list is 10->20->30->40->50->60 and k is 4, the list should be modified to 50->60->10->20->30->40. Each node has an integer value as well as a next value point to the next node in the list or to null if it's at the end of the list.  You can assyme the LL will always have at least one node--the head will never be null.

// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function shiftLinkedList(head, k) {
  
}

//Steps to get to the mutated linked list:
//0 > 1 > 2 > 3 > 4 > 5
//4 > 5 > 0 > 1 > 2 > 3
//Old tail has to be pointed at the old head
//New head needs to be reassigned
//New tail needs to be reassigned to null
//We only care about four nodes--the old head and tail and the new head and tail.