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

//this is a working but slightly less optimized solution because it will evaluate the entire string even after it's come across proof that the answer is "false"
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

//this is more optimal because it stops once it finds a bracket without a partner
//The first fifteen lines set up two helper objects
//we initialize "opens" and "closes" to an empty object
const opens = {};
const closes = {};
//we create an array of arrays which contains in each nested array a pair of complete brackets
//we use forEach and give it as a parameter a decontructed array which declares the first element in the nested array "open" and the second element "close"
([
  ['{' , '}'],
  ['[' , ']'],
  ['(' , ')'],
]).forEach(([open, close]) => {
  //inside the empty "opens" object we are placing the first element--i.e. the opening bracket--inside and then assigning it the value of "close"
  opens[open] = close;
  //we take the second element of each array and assign it the value of "open"
  closes[close] = open;
})

function hasBalancedBrackets (str) {
  //we initialize an empty array to store our unmatched brackets
  const opensStack = [];
  //ch = character -- don't name your variables this way.
  //we set up a loop through our input string, examining each character
  for (const ch of str) {
    //if our "opens" object has the current character already in it
    if (opens.hasOwnProperty(ch)) {
      //push current character into opensStack array
      opensStack.push(ch)
      //if "closes" object contains the current character
    } else if (closes.hasOwnProperty(ch)) {
      //take the last element OFF opensStack and store it in "mostRecentOpen"
      const mostRecentOpen = opensStack.pop();
      //find that corresponding bracket in the opens object
      const correspondingClose = opens[mostRecentOpen];
      //if that corresponding bracket DOESN'T match the current character, we return false
      if (ch !== correspondingClose) return false;
    }
  }
  //at the end we return the boolean evaluation of opensStack.length === 0
  return opensStack.length === 0;
}

//a similarly optimized solution which looks a little more like our first solution:
//regex that will select ONLY the brackets we want to search for in our input string
const bracketPattern = /[[\](){}]/g;
//keeps track of possible bracket pairings
const bracketPairs = {
  '[' : ']',
  '{' : '}',
  '(' : ')'
};

const hasBalancedBrackets = str => {
//we initialize an empty array to store our unmatched brackets
const bracketStack = [];
//we extricate the parts of the string which are brackets
str = str.match(bracketPattern);
//we loop through our bracket string
for(let i = 0; i < str.length; i++){
  //if the current index has a match in bracketPairs, then we add that index to the frong of our bracketStack array
  if(str[i] in bracketPairs) bracketStack.unshift(str[i]);
  //if the opposite bracket of the first index of our storing array is equal to the current character then we REMOVE it from the bracketStack array
  else if (bracketPairs[bracketStack[0]] === str[i]) bracketStack.shift();
  //if we haven't found a matched pair then it must be an unmatched pair and we return false
  else return false;
}
//at the end we return the boolean evaluation of !bracketStack.length (hint: if bracketStack is empty, we'll be returning true)
return !bracketStack.length;
};