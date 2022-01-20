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
    //it will take each node on each layer and keep track of the min and max of each layer
    function helper(node, min, max){
      //once we can't find a node, we've reached the leaves of the tree without triggering false, so we return true
        if(!node) return true;
        //if the node we're checking, doesn't meet the standard for a BST, return false
        //i.e. if the value to the left is greater or the value to right is less
        if(node.val <= min || node.val >= max) return false;
        //we make our recursive calls to the left first so that we have an inorder traversal
        //our last param resets our max to the current node value
        let left = helper(node.left, min, node.val)
        //when we can no longer find left branches, we can traverse right
        //last param to right initializes min at current node value
        let right = helper(node.right, node.val, max)
        //we continue returning our recursive calls
        return left && right
    }
    //our first helper call initializes min at -Infinity and max at Infinity to start our bounds as far away as possible.
        return helper(root, -Infinity, Infinity)
}

isValidBST(test3)