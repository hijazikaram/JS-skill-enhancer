// Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

// Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
// Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
// removeLeadingTrailing("230.000") ➞ "230"

// removeLeadingTrailing("00402") ➞ "402"

// removeLeadingTrailing("03.1400") ➞ "3.14"

// removeLeadingTrailing("30") ➞ "30"

// The Number JavaScript object is a wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor. A primitive type object number is created using the Number() function.

// The JavaScript Number type is double-precision 64-bit binary format IEEE 754 value. In more recent implementations, JavaScript also supports integers with arbitrary precision using the BigInt type.

function removeLeadingTrailing(str) {
    return Number(str).toString();
}
removeLeadingTrailing("230.000") // ➞ "230"

removeLeadingTrailing("00402") // ➞ "402"

removeLeadingTrailing("03.1400") // ➞ "3.14"

removeLeadingTrailing("00000.000") // ➞ "0"