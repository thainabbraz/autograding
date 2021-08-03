/*
1)
Create a function named
"triple" that takes one
parameter, x, and returns
the value of x multiplied
by three.
*/
const triple = x => x * 3

 console.log(triple(5));

/*
2)
Create a function named "subtract" that
takes two parameters and returns the result of
the second value subtracted from the first.
*/
const subtract = (x,y) => x - y
console.log(subtract(5, 2)); // 3
console.log(subtract(1, 3)); // -2

/*
3)
Create a function named "createArray" that
takes three arguments and returns
those arguments in an array.


Test case:

*/
const createArray = (x, y, z) => [x, y, z]
console.log(createArray(3, "a", true)); // [3, "a", true]
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
const greetPerson = x => typeof x === "string" ? `Hello, ${x}!`: "Please provide a name."
/*
5)
Create a function named "addTogether"– it takes
in an array of numbers as an argument
and returns the sum of all those numbers
added together.

Test case:
console.log(addTogether([1, 2, 3, 4, 5])); // 15
*/

const addTogether = (x) => x.reduce((a, b) => a + b, 0)

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

*/
const getIndex = (x,y) => {
  for (let i = 0; i < x.length; i++) {
    if(x[i] === y){
      return i
    }
  }
  return -1
}
console.log(getIndex([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(getIndex([1, 2, 3, 4, 5, 6], 7)); // -1
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

*/

 const includesValue = (x,y) => getIndex(x,y) >= 0
 console.log(includesValue([1, 2, 3, 4, 5, 6], 4)); // true
 console.log(includesValue([1, 2, 3, 4, 5, 6], 7)); // false
/*
8) Nested Objects
Create a function named "createObject" that
takes in an array as the argument. It should return
an object mapping the items in that array to their
data type. Use the "result" variable provided to help
you build your return value.



Test case:
console.log(createObject([3, "a", true, false, 2, true])); // { numbers: [3, 2], booleans: [true, false, true], strings: ["a"] }
*/
let result = {
  numbers: [],
  booleans: [],
  strings: []
}
const createObject = (x) => {

  result.numbers = x.filter((y) => typeof y === 'number')
  result.booleans = x.filter((y) => typeof y === 'boolean')
  result.strings = x.filter((y) => typeof y === 'string')
  return result
}

/*
9)
Create a function named "removeSpaces" that
removes all spaces from a string.

Test cases:
console.log(removeSpaces("He went to the store.")); // "Hewenttothestore"
*/

const removeSpaces = (j) => j.replace(/\s/g, '')

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

// const removeSpaces = (j) =>
//   j
//     .split(' ')
//     .map((x) => `${x.charAt(0).toUpperCase()}${x.substr(1, x.length - 1)}`)
//     .join(' ')
  module.exports = {
    triple,
    subtract, 
    createArray, 
    greetPerson, 
    addTogether,
    getIndex,
    includesValue,
    createObject,
    removeSpaces
    
  };

