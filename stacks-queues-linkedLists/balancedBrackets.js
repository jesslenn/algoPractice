// Interviewer Prompt
// Write a function that determines whether an input string has balanced brackets.

// You are given an input string consisting of brackets—square [ ], round ( ), and curly { }. The input string can include other text. Write a function that returns either true if the brackets in the input string are balanced or false if they are not. Balanced means that any opening bracket of a particular type must also have a closing bracket of the same type.

// An empty input string or a string without brackets can also be considered "balanced".

// Examples
// hasBalancedBrackets('[][(){}'); // false
// hasBalancedBrackets('({)}'); // false
// hasBalancedBrackets('({[]})'); // true
// hasBalancedBrackets('text ( is allowed ){rwwrwrrww [] ()}'); // true

//regex that will select ONLY the brackets we want to search for in our input string
const bracketPattern = /[[\](){}]/g;
//keeps track of possible bracket pairings
const bracketPairs = {
  '[' : ']',
  '(' : ')',
  '{' : '}'
}

function hasBalancedBrackets (inputString) {
    //returns an array of all the brackets in the input
  const inputBrackets = inputString.match(bracketPattern);
  //we initialize an empty array to store our unmatched brackets
  const brackets = [];
  //we check for our base cases--an empty inputString or an input string with no brackets
  if (!inputString.length || !inputBrackets.length) {
    return true;
  }
  //if we don't meet either base case, then we run the following function on each bracket in our inputBrackets array
  inputBrackets.forEach(function (bracket) {
    //we find the last bracket in inputBrackets
    const lastBracket = brackets[brackets.length-1];
    //we evaluate if the last bracket is the closing bracket for the current bracket we're evaluating in our forEach loop
    //we're checking the closing bracket by finding it's key in bracketPairs and using that to evaluate to true
    if (bracketPairs[lastBracket] === bracket) {
      //if they match, we clear the opening bracket from the array and continue
      brackets.pop();
    } else {
      //if we don't find a match, we push the single bracket into the solution array
      brackets.push(bracket);
    }
  });
  //if there's nothing in the brackets array, then we have balanced brackets!  This will evaluate to/return true!
  //if there is something in the brackets array, then we have unbalanced brackets and this will evaluate to/return false!
  return brackets.length === 0;
}