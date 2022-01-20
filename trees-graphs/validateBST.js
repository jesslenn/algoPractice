// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
//input: root
//output: boolean

//Input: root = [2,1,3] 
// Output: true

//   2
//  / \
// 1   3

// Input: root = [5,1,4,null,null,3,6] 
// Output: false

//   5
//  / \
// 1   4  
//    / \
//    3  6
//root = []
//root = root.length[0]
//BST -- nodes have MAX 2 children
//in our array, empty children are included as null

//Testing 
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function insertLevelOrder(arr, root, i) {
  // Base case for recursion
  if (i < arr.length) {
    let temp = new TreeNode(arr[i]);
    root = temp;

    // insert left child
    root.left = insertLevelOrder(arr, root.left,
      2 * i + 1);
    // insert right child
    root.right = insertLevelOrder(arr, root.right,
      2 * i + 2);
  }
  return root;
}

let test1 = insertLevelOrder([2, 1, 3], 2, 0) //true
let test2 = insertLevelOrder([5, 1, 4, null, null, 3, 6], 5, 0) // false
let test3 = insertLevelOrder([1, 1], 1, 0) //false
let test4 = insertLevelOrder([2, 2, 2], 2, 0)// false
let test5 = insertLevelOrder([6, 3, 7, 1], 6, 0) //true

/*
test their function with these test variables
*/

//isValidBST takes root node
var isValidBST = function(root) {
    //we make a helper function to handle the recursion
    //it will take each node on each layer
    function helper(node, min, max){
        if(!node) return true;
        
        if(node.val <= min || node.val >= max) return false;
        
        let left = helper(node.left, min, node.val)
        let right = helper(node.right, node.val, max)
        
        return left && right
    }
        return helper(root, -Infinity, Infinity)
}