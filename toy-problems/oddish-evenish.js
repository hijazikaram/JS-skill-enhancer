// Create a function that determines whether a number is Oddish or Evenish. 
// A number is Oddish if the sum of all of its digits is odd, 
// and a number is Evenish if the sum of all of its digits is even. 
// If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. 
// oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

// Examples
// oddishOrEvenish(43) ➞ "Oddish"

// oddishOrEvenish(373) ➞ "Oddish"

// oddishOrEvenish(4433) ➞ "Evenish"

function oddishOrEvenish(num) {
    // loop through the number
    // add them together
    // take the total and check if odd or even
    let zero = 0;
    num.toString().split('').forEach(n => {
        zero += Number(n);
    });
    console.log(zero);
    return zero % 2 === 0 ? "Evenish" : "Oddish";
};
console.log(oddishOrEvenish(4433))