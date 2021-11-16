// Interviewer Prompt
// Given an array arr consisting of N integers, sorted in ascending order (least to greatest), and a separate number (a sum), determine if any 2 numbers in the array add up to the sum. Return true if any 2 different numbers within the array add up to sum. Return false if no 2 numbers in the array add up to sum.

// Examples
// pairSum([1, 1, 2, 3, 4, 5], 7) -> true (either 2+5 or 3+4)
// pairSum([1, 2, 3, 4, 5], 10) -> false
// pairSum([0, 2, 3, 6, 9, 10], 10) -> true (0 + 10)
// pairSum([1, 2, 3, 7, 8], 7) -> false
// pairSum([-2, 0, 4, 6, 10], 8) -> true (-2 + 10)
// pairSum([1, 2, 3, 4, 5], 2) -> false
// Examples - Edge cases

//MEMO:
function pairSum(arr, sum) {
  const memo = {};

  for (let num of arr) {
    //if we've seen the remainder of the sum before, then we know a pair exists!
    if (memo[sum-num]) {
      return true;
    } else {
      memo[num] = true;
    }
  }
  return false;
}

//Using Set Class in JS:
function pairSum(arr, sum) {
  //initializes a new set
  //in JS a Set is a class/data structure that only stores unique values
  //Note: sets will NOT be useful for algo problems which require counting multiples (i.e. a letter counting problem)
  const set = new Set();

  //this has the EXACT SAME logic as memo--we're just using a different storage tool
  for (let num of arr) {
    if (set.has(sum - num)) {
      return true;
    } else {
      set.add(num)
    }
  }
  return false;
}
// pairSum([1], 2) -> false
// pairSum([2], 2) -> false
// pairSum([], 1) -> false