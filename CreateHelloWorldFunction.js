/*
Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
*/

// Solution
// Har doim Hello World degan valueni qaytarishi kerak bolgan function yaratdik.Yani parametrda nima kelsa ham har doim Hello World ni qaytaradi.

var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};
