
/**First Reverse
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
Examples
Input: "coderbyte"
Output: etybredoc
Input: "I Love Code"
Output: edoC evoL I
Tags
string manipulationfree */
function FirstReverse(str) { 

    var arr = str.split('');
    arr.reverse();
    return arr.join('');         
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  FirstReverse(readline());