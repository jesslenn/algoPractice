// Interviewer Prompt
// const mkNode = (value, next = null) => ({ value, next })
// const nums = mkNode(1, mkNode(2, mkNode(3)))
// Given a linked list with .value (first value) and .next (remaining list) interface, log the values in reverse order.
// Write a function which returns a new reversed linked list.
// Restrictions:

// no mutation at all, 100% pure (except for console.log in Part 1)
// no built-in data structures or methods, only variables / functions / control flow
// no arrays, no objects except the (immutable) list nodes themselves
// no iterables or iteration protocol (for-of, ...)
// Example Output
// Part 1:

// const nums = mkNode(1, mkNode(2, mkNode(3)))
// logReverse(nums)
// 3
// 2
// 1
// Part 2:

// const nums = mkNode(1, mkNode(2, mkNode(3)))
// const reversed = reverse(nums)
// console.log(reversed)
// { value: 3, next: { value: 2, next: { value: 1, next: null } } }