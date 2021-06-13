// test
// Easy Toy Problem
// Create a function that takes a number as an argument.
// Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples
// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300

function addUp(num) {
  let zero = 0;
  for (let index = 1; index <= num; index++) {
    zero = zero + index;
  }
  return zero;
}

console.log(addUp(10));
