// Interviewer Prompt
// Write a function that takes in the heads of N sorted Singly Linked Lists and return the merged list. The merged list should be in sorted order.

// Each Linked List node has an integer value as well as a next node pointing to the next node in the list or to none / null if it is the tail of the list.

// Example Output
// Input =
// [
//   1->5->7,
//   1->2->4->8,
//   3->6->8
// ]

// Output = 1->1->2->3->4->5->6->7->8->8

//BRUTE FORCE
//O(n log n) time complexity, O(n) space complexity

//helper function to create a node with the value we insert as a parameter
function ListNode(val) {
  this.val = val;
  this.next = null
}

//"lists" is our array of linked lists.  Can you give this variable a more descriptive name?  ...you should.
function mergeNLists (lists) {
  //we initialize an empty array
  let nodes = [];
  //we loop through our given array of lists
  for (let listsIdx = 0; listsIdx < lists.length; listsIdx++) {
    //we isolate the list at our current index
    let currentList = lists[listsIdx];
    //while our current list has values in it
    while (currentList !== null) {
      //we are going to push each of our values into our empty array
      nodes.push(currentList.val);
      //we'll iterate down to the next value on the linked list at this current index
      currentList = currentList.next
      //we finish our while loop after we've exhausted all the values in our current index
    }
    //we finish our for loop when we've run out of lists in our array.  For loop = iterating from list to list; while loop = iterating from value to value in the same list
  }
  //okay, we've shoved EVERY POSSIBLE VALUE into nodes, but they are currently unsorted, so now we put them in ascending order
  nodes.sort((a, b) => a - b);
  //"mergedList" is a new node with a value of 0
  let mergedList = new ListNode(0);
  //"currentNode" is now assigned the reference of "mergedList"
  let currentNode = mergedList;
  //aaaaaaaaaaaaaand now we iterate through our sorted array of values
  for (let nodesIdx = 0; nodesIdx < nodes.length; nodesIdx++) {
    //we append the current value as a NEW node in order
    currentNode.next = new ListNode(nodes[nodesIdx]);
    //we move our "currentNode" location to the next new node on our list
    currentNode = currentNode.next;
  }
  //mergedList.next should actually be the first value in the sorted list, so we return that!
  return mergedList.next;
}