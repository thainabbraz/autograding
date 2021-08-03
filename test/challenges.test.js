const {
  triple, 
  subtract, 
  createArray, 
  greetPerson, 
  addTogether,
  getIndex,
  includesValue,
  createObject,
  removeSpaces,
  titleCase
} = require('../challenges.js');
/*
1)
Create a function named
"triple" that takes one
parameter, x, and returns
the value of x multiplied
by three.
*/


test("Number 1", () => {  
  expect(triple(5)).toBe(15);
  
});

/*
2)
Create a function named "subtract" that
takes two parameters and returns the result of
the second value subtracted from the first.
*/

// console.log(subtract(5, 2)); // 3
// console.log(subtract(1, 3)); // -2

test("Number 2", () => {

  expect(subtract(5, 2)).toBe(3);
  expect(subtract(1, 3)).toBe(-2);
});
/*
3)
Create a function named "createArray" that
takes three arguments and returns
those arguments in an array.

Test case:
console.log(createArray(3, "a", true)); // [3, "a", true]
*/
test("Number 3", () => {
  expect(createArray(3, "a", true)).toStrictEqual([3, "a", true]);
});
/*
4)
Create a function named "greetPerson". It should
accept a string as an argument and return that
string as part of a longer sentence that says hello.
If the function is called with an argument that is
not a string, it should return "Please provide a name."

Test cases:
console.log(greetPerson("Sofia")); // "Hello, Sofia!"
console.log(greetPerson(42)); // "Please provide a name."
*/
test("Number 4", () => {
  expect(greetPerson("Sofia")).toBe("Hello, Sofia!");
  expect(greetPerson(42)).toBe("Please provide a name.");
});
/*
5)
Create a function named "addTogether"– it takes
in an array of numbers as an argument
and returns the sum of all those numbers
added together.

Test case:
console.log(addTogether([1, 2, 3, 4, 5])); // 15
*/
test("Number 5", () => {
  expect(addTogether([1, 2, 3, 4, 5])).toBe(15);
});

/*
6)
Create a function named "getIndex". It should
two take two arguments, an array and a value.
The function should return the index where
the value is found. If the value is not
found, it should return -1.

Do NOT use the array method indexOf
in your answer. Hint: Create a loop!

Test cases:
console.log(getIndex([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(getIndex([1, 2, 3, 4, 5, 6], 7)); // -1
*/
test("Number 6", () => {
  expect(getIndex([1, 2, 3, 4, 5, 6], 4)).toBe(3);
  expect(getIndex([1, 2, 3, 4, 5, 6], 7)).toBe(-1);
});
/*
7)
Create a function named "includesValue"– it should
return a boolean if x (a value) is found
in arr (an array).

To do this, use the "getIndex" function
you created in the last question. Call the
"getIndex" function within the body of your
"includesValue" function.

Test cases:
console.log(includesValue([1, 2, 3, 4, 5, 6], 4)); // true
console.log(includesValue([1, 2, 3, 4, 5, 6], 7)); // false
*/

test("Number 7", () => {
  expect(includesValue([1, 2, 3, 4, 5, 6], 4)).toBe(true);
  expect(includesValue([1, 2, 3, 4, 5, 6], 7)).toBe(false);
});

/*
8) Nested Objects
Create a function named "createObject" that
takes in an array as the argument. It should return
an object mapping the items in that array to their
data type. Use the "result" variable provided to help
you build your return value.

let result = {
  numbers: [],
  booleans: [],
  strings: []
}

Test case:
console.log(createObject([3, "a", true, false, 2, true])); // { numbers: [3, 2], booleans: [true, false, true], strings: ["a"] }
*/
test("Number 8", () => {
  expect(createObject([3, "a", true, false, 2, true])).toStrictEqual({ numbers: [3, 2], booleans: [true, false, true], strings: ["a"] });
});

/*
9)
Create a function named "removeSpaces" that
removes all spaces from a string.

Test cases:
console.log(removeSpaces("He went to the store.")); // "Hewenttothestore"
*/
test("Number 9", () => {
  expect(removeSpaces("He went to the store.")).toBe("Hewenttothestore.");
});

/*
10)
Create a function named "titleCase" that
takes a string as an argument. It should return
a string where the first letter of every word
is capitalized. Don't worry about the first word
in the sentence– assume that one is already capitalized.

Hint: the index of the letters that need to be
capitalized are 1 greater than the index of the
spaces in your string.

Test case:
console.log(titleCase("He went to the store.")); // "He Went To The Store"
*/
test("Number 10", () => {
  expect(titleCase("He went to the store.")).toBe("He Went To The Store");
});