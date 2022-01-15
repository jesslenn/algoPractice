#Prompt: Given a singly linked list, rotate the linked list counter-clockwise by k nodes. Where k is a given positive integer. For example, if the given linked list is 10->20->30->40->50->60 and k is 4, the list should be modified to 50->60->10->20->30->40. Each node has an integer value as well as a next value point to the next node in the list or to null if it's at the end of the list.  You can assyme the LL will always have at least one node--the head will never be null.
#Python

def shiftLinkedList(head, k):