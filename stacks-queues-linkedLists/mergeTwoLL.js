// Interviewer Prompt
// Write a function that takes in the heads of two Singly Linked Lists that are in sorted order, respectively. The function should merge the lists in place (i.e., it shouldn't create a brand new list) and return the head of the merged list; the merged list should be in sorted order.

// Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to null if it's the tail of the list.

// Examples
// headOne = 2 -> 6 -> 7 -> 8 // the head node with value 2
// headTwo = 1 -> 3 -> 4 -> 5 -> 9 -> 10 // the head node with value 1
// mergeLinkedLists(headOne, headTwo) = 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 // the new head node with value 1

function mergeTwoLists (headOne, headTwo) {
   //if either of the heads of our linked lists are empty
  if (headOne === null || headTwo === null)
 //we will return whichever head ISN'T empty
 //translation: there's no need to merge because we actually only have one list!
  return headOne === null ? headTwo : headOne;
  //we initialize our first pointer at the smaller head
  //Translation: if headOne is less than or equal to headTwo, p1 is assigned headOne; if not we assign it headTwo
  let p1 = headOne.value <= headTwo.value ? headOne : headTwo;
  //if we've assigned headOne to p2 then p2 = headTwo.  If not, p2 = headOne
  let p2 = headOne === p1 ? headTwo : headOne;
  //let our "head" variable equal the same as our original p1
  let head = p1;
  //while p1 has a next and p2 isn't null we stay in our loop
  while (p1.next !== null && p2 !== null ) {
    //if the next node after current p1's value is less than or equal to the current p2's value
    if (p1.next.value <= p2.value) {
      //we keep p1 list in order and move our pointer to the next node after p1
      p1 = p1.next
      //if not
    } else {
      //we temporarily store the node at p1.next so we don't overwrite it
      let temp = p1.next;
      //we reassign the p1.next LOCATION with the p2 NODE
      p1.next = p2;
      //we now let the node previously at p1.next be assigned to p2
      p2 = temp;
    }
  }
  //????
  p1.next = p2;
  //we return the original p1--now the head of our list
  return head;
}