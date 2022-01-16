#Branch Sums

###Prompt:

Write a function that takes in a Binary Tree and returns a list of it's branch sums ordered from leftmost branch sum to rightmost branch sum.  A branch sum is the sum of all values in a Binary Tree branch.  A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.

Each BinaryTree node has a value, left child node, and right child node.

##Example:

```javascript
tree =        1
            /   \
          2       3
        /   \    /  \
      4      5  6    7
     / \     /
    8   9  10

Output: [15, 16, 18, 10, 11]
```


##Solution:

Without helper function:
```javascript
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root, sum = 0, solutions = []) {
	if (!root) return; // recursion basecase
	
	sum += root.value;
	if (!root.left && !root.right) {
		solutions.push(sum);
		return;
	}

```

With helper function:
```javascript
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
	const solutions = [];
	calculateBranchSums(root, 0, solutions)
	return solutions;
}

function calculateBranchSums(root, sum, solutions){
	if (!root) return; // recursion basecase
	
	sum += root.value;
	if (!root.left && !root.right) {
		solutions.push(sum);
		return;
	}
	
```
###Time Complexity:

O(n) time | O(n) space ("n" being the number of nodes in the Binary Tree)

###Source:

[AlgoExpert:](https://www.algoexpert.io/questions/Branch%20Sums)