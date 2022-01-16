#Write a function that takes in a binary tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.

#A branch sum is the sum of all values in a Binary Tree branch.  A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.

#Each node will have an integer value, a left child and a right child.

#we define our Binary tree exactly as line 5 says
class BinaryTree:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None

#branchSums will take the root node as it's parameter
def branchSums(root):
  #we initilize sums as an empty array
  sums = []
  #we call our recursive function and send down the root node, initialize runningSum as 0, and send down sums 
  calculateBranchSums(root, 0, sums)
  #once ALL of our recursive calls are done, we will return our array, which now stores all our branch sums
  return sums

#our recursive helper function actually does all the heavy lifting!  On its first call, you can think of it as calculateBranchSums(rootNode, startingSumInteger = 0; sumsArray = [])
def calculateBranchSums(node, runningSum, sums):
  #here we handle our edge case (if the tree is empty)
  if node is None:
    return

  #now we start adding the values in each node we traverse
  newRunningSum = runningSum + node.value
  #if we are at the leaf of our current branch (no children), we....
  if node.left is None and node.right is None:
    #...add the sum of this branch to our sums array
    sums.append(newRunningSum)
    return
  
  #because of how DFS works, we want to exhaust our left branches first
  calculateBranchSums(node.left, newRunningSum, sums)
  #then our right branches
  calculateBranchSums(node.right, newRunningSum, sums)
  #as the stack calls down our recursive returns, we populate the sums array and return it just by returning our function call on line 27