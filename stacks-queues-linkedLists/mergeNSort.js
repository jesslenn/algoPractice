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
//that solution was ugly and I feel dirty for typing it.  Two for loops, a while loop, and a sort(), which is basically another loop under the hood. YUCK.

//DIVIDE AND CONQUER
//O(n log n) Time complexity; O(1) space complexity
//if you can't visualize it, the slide deck below does an excellent job!
//https://docs.google.com/presentation/d/1cPXje2N0VJPYj8r_RA0zBHivbTS6lL0xpRXD-ttRlFI/edit?usp=sharing

//again, this helper function just lets us create a new node with a specified value
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function merge2Lists (list1, list2) {
  //we create a new list node
  let mergedList = new ListNode(0);

  //we initialize "curr" as that new list node
  let curr = mergedList;
  //do we have a list1 and a list2?
  while (list1 !== null && list2 !== null) {
    //if the 
    if (list1 <= list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }
  curr.next = list1 !== null ? list1 : list2;
  return mergedList.next
}

function mergeNList (lists) {
  if (lists.length === 0) {
    return null;
  }
  let interval = 1;
  while (lists.length > interval) {
    let indx = 0;
    while (idx + interval < lists.length) {
      lists[idx] = merge2Lists(lists[idx], lists[idx + interval]);
      idx += interval * 2;
    }
    interval *= 2;
  }
  return lists[0];
}