

// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function shiftLinkedList(head, k) {
  
}

shiftLinkedList()
//Steps to get to the mutated linked list:
//0 > 1 > 2 > 3 > 4 > 5
//4 > 5 > 0 > 1 > 2 > 3
//Old tail has to be pointed at the old head
//New head needs to be reassigned
//New tail needs to be reassigned to null
//We only care about four nodes--the old head and tail and the new head and tail.
//We can only get the original tail in the question by traversing the entire list, so our lower 
//bound for time is O(n)
//If we can find the new tail, it will already be pointed to the new head -- so those operations
//will be tied together
//We can find the length of the list and the original tail in the same operation
//new tail is LLLength - k

