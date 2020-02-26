// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.

function reverseAndNot(num) {
    // switch the number into a string
    // add into array
    // reverse the array
    // join them together
    // add the number to str
    const reverseStr = num.toString().split("").reverse().join("") + num;
    console.log(reverseStr);
    return Number(reverseStr);
}



reverseAndNot(123) //➞ 321123

reverseAndNot(123456789) // ➞ 987654321123456789