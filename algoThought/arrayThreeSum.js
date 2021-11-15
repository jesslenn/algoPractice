// Interviewer Prompt
// Given an array of distinct integers and an integer representing a target sum, write a function that returns an array of all triplets in the input array that sum to the target sum.

// Examples
// arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)   //should return [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
// arrayThreeSum([5, 6 , 1, -9 , 7, 3 , 2], 35)    //should return []
// arrayThreeSum([1, 15, -5, 12 , -3, 6 , 2], 10)  //should return [[ -3, 1, 12 ]]
//sort the array!
//initialize a for loop
//we will have three pointers-- [i], [i+1], [arr.length-1]

//POINTERS:
function arrayThreeSum (arr, targetSum) {
  //sorts our array from least to most
  arr.sort((a, b) => a-b)
  //initialize our return array
  let solution = [];
  //We're going to loop through the array--if we know we'll be initializing a pointer at the end of the array, then we know we don't need to check the element at length-1 because our end pointer will catch it.  So i only has to go to length-2
  for (let i = 0; i < arr.length-2; i++) {
    //first pointer
    let element = arr[i];
    //second pointer
    let leftIndex = i + 1;
    //third pointer
    //element    leftIndex                 rightIndex
    //[1,        3,         5, 6, 8, 11,    97]
    let rightIndex = arr.length-1;
    //while our inside pointers do not yet overlap
    while (leftIndex < rightIndex) {
      //what's the current sum of all our pointers?
      let currentSum = element + arr[leftIndex] + arr[rightIndex]
      //if our current sum is the input sum we're looking for
      if (currentSum === targetSum){
        //push all current integers into our solution array
        solution.push([element, arr[leftIndex], arr[rightIndex]]);
        //move each inside pointers toward each other
        leftIndex++
        rightIndex--
      } else if (currentSum > targetSum) {
        //if our current pointer position has given us a sum that's too large, we'll move the right pointer down to lower integers
        rightIndex--;
      } else if (currentSum < targetSum){
        //if our current position gives us a sum that's too small, we'll move the left pointer up to larger integers.
        leftIndex++;
      }
    }
  }
  //if we didn't find any, we just return that empty array we initialized!
  return solution;
}

//MEMO:
function arrayThreeSum (array, sum) {
  //initializes an empty array in which we can return our solution
  const solution = [];
  //we set up an initial loop to find our first value
  for (let i = 0; i < array.length-1; i++){
    //Okay. If we already have arr[i]; what's our new target sum?
    //aka the sum we're going to have given we already know one element
    let currentSum = sum - array[i]
    //initialize our memo!
    let memo = {};
    //same as pairSum--we never want array[i] === array[j] so we initialize it one index after i
    for (let j = i + 1; j < array.length; j++) {
      //if our memo ALREADY CONTAINS the remainder that we need to get our sum
      if (memo[currentSum-array[j]]){
        //we push integers at our locations in each loop, AND the remainder integer that we found in our memo
        solution.push(array[i], currentSum-array[j], array[j])
      } else {
        //if we don't find our remainder in the memo, we'll add the value at j into our memo for use later in our loop(s)!
        memo[array[j] = true]
      }
    }
  }
}

// arrayThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0)
// arrayThreeSum([5, 6 , 1, -9 , 7, 3 , 2], 35)
// arrayThreeSum([1, 15, -5, 12 , -3, 6 , 2], 10)