// Interviewer Prompt
// Write a function that takes in the heads of two Singly Linked Lists that are in sorted order, respectively. The function should merge the lists in place (i.e., it shouldn't create a brand new list) and return the head of the merged list; the merged list should be in sorted order.

// Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to null if it's the tail of the list.

// Examples
// headOne = 2 -> 6 -> 7 -> 8 // the head node with value 2
// headTwo = 1 -> 3 -> 4 -> 5 -> 9 -> 10 // the head node with value 1
// mergeLinkedLists(headOne, headTwo) = 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 // the new head node with value 1

//O(n+m) time complexity, O(1) space complexity
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

//O(n+m) time complexity, O(n+m) space complexity
function mergeLists (headOne, headTwo) {
  //if either LL is null
  if (headOne === null || headTwo === null) {
    //we just return the list that exists
    return headOne === null ? headTwo : headOne;
  }
  //assign p1 to whichever head's value is smaller
  let p1 = headOne.value <= headTwo.value ? headOne : headTwo;
  //assign p2 to whichever head's value is bigger (or in this logic, the head that we DIDN'T assign to p1)
  let p2 = p1 === headOne ? headTwo : headOne;
  //store the smallest value in the variable "head"
  const head = p1;

  //we assign the next node after "head" to the product of running our function again on p1.next and p2
  //we now can see that line 73 is our base case--once we've rearranged both LL's we'll wind up with one re-ordered linked list and... nothing.  So we'll return the one we reordered
  //our recursion works because as we call each successive set of nodes we will put them in order and then once there's nothing left to sort, we'll return those nodes back in order
  head.next = mergeLists(p1.next, p2)

  return head;
}

//O(n+m) time complexity, O(n+m) space complexity
//BLEH.  Not going to bother annotating this one.  The one down above has the same time and space complexity, is also recursive, and is elegant and easy to read.  Boooo to this helper function!
function mergeLinkedLists (headOne, headTwo) {
  recursiveMerge(headOne, headTwo, null);
  return headOne.value < headTwo.value ? headOne : headTwo;
}

function recursiveMerge (p1, p2, p1Prev) {
  if (p1 === null) {
    p1Prev.next = p2;
    return;
  }
  if (p2 === null) return;

  if (p1.value < p2.value) {
    recursiveMerge(p1.next, p2, p1);
  } else {
    if (p1Prev !== null) p1Prev.next = p2;
    const newP2 = p2.next;
    p2.next = p1;
    recursiveMerge(p1, newP2, p2);
  }
}