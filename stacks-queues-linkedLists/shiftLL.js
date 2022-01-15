function shiftLinkedList(head, k) {
  //we initialize a value to track the length of our LL
  let listLength = 1;
  //we begin our search for our listTail at the head
  let listTail = head;

  //we loop through the nodes in the LL until we hit the one that is null (aka the tail)
  while (listTail.next !== null) {
    //we reassign the tail as we go to the next node
    listTail = listTail.next;
    //we increment our listLength to track our length
    listLength++
  }

  //we calculate our offset by finding the remainder of the absolute value of k divided by listLength
  //we need Math.abs to handle negative values
  const offset = Math.abs(k) % listLength;
  //if there's no offset, there's no need to mutate our LL and we just return it!
  if (offset === 0) return head;

  //if k is postive then the new tail will be positioned at listLength - offset--if it's negative, the position is just offset
  const newTailPosition = k > 0 ? listLength - offset : offset;
  //o reposition our tail we start at the original head
  let newTail = head;
  //we loop through the list to get to the new position
  for (let i = 1; i < newTailPosition; i++){
    //we reassign as we go so when the loop ends newTail stores the correct value
    newTail = newTail.next;
  }

  //the newHead is still linked to the newTail, so we reassign it here before we de-link the old head and tail
  const newHead = newTail.next;
  //we make the newTail by assigning it to null
  newTail.next = null;
  //we connect the old tail to the old head by pointing the tail at the head, linking them
  listTail.next = head;
  //we return our newly ordered LL!
  return newHead; 
}
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

