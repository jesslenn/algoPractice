#Prompt: Given a singly linked list, rotate the linked list counter-clockwise by k nodes. Where k is a given positive integer. For example, if the given linked list is 10->20->30->40->50->60 and k is 4, the list should be modified to 50->60->10->20->30->40. Each node has an integer value as well as a next value point to the next node in the list or to null if it's at the end of the list.  You can assyme the LL will always have at least one node--the head will never be null.
#Python

def shiftLinkedList(head, k):
  #we can't overwrite the head because we'll need that value later!
  listTail = head
  #we need to store the length of our LL
  listLength = 1
  #we traverse the LL until we get to the original tail (which will be None)
  while listTail is not None:
    #we reassign the new tail as we go
    listTail = listTail.next
    #we keep track of how long the list is
    listLength += 1
  
  #calculate our offset from beginning or end of LL
  #this handles if our k is negative or a number larger than the length of the LL
  #Python is cool with handling the absolute of negative numbers!
  offset = abs(k) % listLength
  # we handle if there isn't any shifting that needs to happen
  if offset == 0:
    return head

#having found the absolute number of our offset, we reassign the new tail and check in our conditional if k was negative and assign the new tail accordingly
#Note for myself on Python syntax: 
# if (k > 0){
#   listLength - offset} 
# else {
#   offset}
  newTailPosition = listLength - offset if k > 0 else offset
  newTail = head
  #here we just traverse over our list ressigning the newTail until we've traversed the entire length of the LL
  for i in range(1, newTailPosition):
    newTail = newTail.next
  #we now have all four values we need! head, listTail, newTail, and newHead
  newHead = newTail.next
  #we assign our newTail the next value of none, because it's the fail
  newTail.next = None
  #we make sure we're connecting the old tail to the old head so they connect
  listTail.next = head
  #we return our complete linked list!
  return newHead
#O(n) time | O(1) space