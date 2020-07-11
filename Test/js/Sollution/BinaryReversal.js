/**Binary Reversal
Have the function BinaryReversal(str) take the str parameter being passed, which will be a positive integer, take its binary representation (padded to the nearest N * 8 bits), reverse that string of bits, and then finally return the new reversed string in decimal form. For example: if str is "47" then the binary version of this integer is 101111 but we pad it to be 00101111. Your program should reverse this binary string which then becomes: 11110100 and then finally return the decimal version of this string, which is 244.
Examples
Input: "213"
Output: 171
Input: "4567"
Output: 60296
Tags
string manipulationfree */

function BinaryReversal(str) {
  let num = parseInt(str, 10).toString(2);

  let length = num.length;

  //add leading zeroes to make the number an integral number of bytes
  let byteString = `${"0".repeat(    length % 8 === 0 ? 0 : 8 - (length % 8)  )}${num}`;

  let stringByte = byteString.split("").reverse().join("");

  return parseInt(stringByte, 2).toString();
}

// keep this function call here
BinaryReversal(readline());
