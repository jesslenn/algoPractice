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
	
	// checking leaf node	
	branchSums(root.left, sum, solutions);
	branchSums(root.right, sum, solutions);	
}

//with helper function
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
	
	// checking leaf node	
	calculateBranchSums(root.left, sum, solutions);
	calculateBranchSums(root.right, sum, solutions);
}