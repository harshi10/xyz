/*Find Intersection
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
Examples
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13
Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10
Tags
arrayfree
# Input :["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
*/
/*logs
== RUNNING TEST CASES ==

== INPUT ==
"acc?7??sss?3rr1??????5"

== OUTPUT ==
true

<< CORRECT >>

== INPUT ==
"aa6?9"

== OUTPUT ==
false

<< CORRECT >>
 */
function FindIntersection(strArr) {
  // code goes here
  let str1 = strArr[0];
  let str2 = strArr[1];
  var str1Array = str1.split(",");
  var str2Array = str2.split(",");
  let length = Math.max(str1Array.length, str2Array.length);
  //console.log(length);
  for (i = 0; i < length; i++) {
    str1Array[i] = parseInt(str1Array[i], 10);
    str2Array[i] = parseInt(str2Array[i], 10);
  }
  //console.log(str1Array,str2Array);
  // code for intersection
  var result = [];
  //console.log(if(result[0]));
  for (i = 0; i < length; i++) {
    if (str2Array.includes(str1Array[i])) {
      result.push(str1Array[i]);
    }
  }
  //console.log(typeof(result.toString()));
  if (result[0]) {
    return result.toString();
  } else return false;
}

// keep this function call here
console.log(FindIntersection(readline()));

/*Questions Marks
Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
Examples
Input: "aa6?9"
Output: false
Input: "acc?7??sss?3rr1??????5"
Output: true
Tags
string manipulationsearchinghash tablefree */
function QuestionsMarks(str) {
  // code goes here
  var s = str.replace(/[^\d?-]/g, "");
  //var arrS = s.match(/\d/g);
  //console.log(s);
  var regex = /\d/g,
    result,
    indices = [];
  while ((result = regex.exec(s))) {
    indices.push(result.index);
  }
  //console.log(indices);
  if (indices.length > 0) {
    //console.log("Decision time");
    if (sumofdigits(s, indices).length > 0) {
      return checkQM(s, indices, sumofdigits(s, indices));
    } else return false;
  }
  //console.log(sumofdigits(s,indices));
  //checkQM(s,indices,sumofdigits(s,indices));
  else return false;
}
function checkQM(s, indices, pairs) {
  let tf;
  //console.log("checkQM");
  //console.log(pairs[0]);
  for (i = 0; i < pairs.length; i++) {
    if (
      Math.abs(pairs[i][0] - pairs[i][1]) >= 2 ||
      Math.abs(pairs[i][0] - pairs[i][1]) == 0
    ) {
      tf = true;
    } else {
      tf = false;
      break;
    }
  }
  return tf;
  //console.log(tf);
}
function sumofdigits(s, indices) {
  var pairs = [];
  let numArr = s.match(/\d/g);
  //numArr = parseInt(numArr,10);
  //numArr.sort();
  //console.log(numArr);
  //pair sum =10
  for (i = 0; i < numArr.length; i++) {
    let temp = 10 - parseInt(s[indices[i]], 10);
    if (s.includes(temp.toString())) {
      let pair = [indices[i], s.lastIndexOf(temp.toString())];
      pairs.push(pair);
      //console.log("pairs"+pairs.length);
      //console.table(pair);
    }
  }
  return pairs;
  /*l = 0; 
  r = numArr.length - 1; 
  while (l < r) {
    if (parseInt(numArr[l],10)+ parseInt(numArr[r],10) == 10){
      pairs.push(numArr[l]);
      pairs.push(numArr[r]);
      console.table(pairs);
      return true; }
      else if (parseInt(numArr[l],10)+ parseInt(numArr[r],10)< 10){
      l++; }
      else // A[i] + A[j] > sum 
      r--;
      }
      console.log(pairs);
      return false;
      */
}

// keep this function call here
console.log(QuestionsMarks(readline()));

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
  // code goes here
  // padding("1000111010111");
  function reverse(strng) {
    let reversed = "";
    for (let char of strng) {
      reversed = char + reversed;
    }
    //console.log("reverse "+reversed);
    return reversed;
  }
  function padding(str) {
    var pad = 8 - (str.length % 8);
    //console.log(pad);
    while (pad > 0 && pad < 8) {
      str += "0";
      pad -= 1;
    }
    //console.log("padding"+str);
    return str;
  }
  function B2D(b) {
    var one = "1";
    var val = 0,
      p = 0;
    while (b.length > 0) {
      let dig = b.slice(-1);
      if (dig == one) {
        val += Math.pow(2, p);
        //console.log(p,b,val);
      }
      b = b.slice(0, -1);
      p += 1;
    }
    //console.log("B2D "+val);
    return val;
  }
  function D2B(d) {
    let stack = [],
      b = "";
    while (d > 0) {
      //console.log(d);
      stack.push(d % 2);
      d = Math.floor(d / 2);
    }
    //console.table(stack);
    while (stack.length > 0) {
      b += stack.pop();
    }
    //console.log("D2B "+b);
    return b;
  }
  //console.log(B2D(reverse(D2B(parseInt(str,10)))));
  return B2D(padding(reverse(D2B(parseInt(str, 10)))));
}

// keep this function call here
console.log(BinaryReversal(readline()));

/**Letter Changes
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
Examples
Input: "hello*3"
Output: Ifmmp*3
Input: "fun times!"
Output: gvO Ujnft!
Tags
string manipulationfree 
== RUNNING TEST CASES ==

== INPUT ==
"hello*3"

== OUTPUT ==
Ifmmp*3

<< CORRECT >>

== INPUT ==
"fun times!"

== OUTPUT ==
gvO Ujnft!

<< CORRECT >>*/

function LetterChanges(str) {
  // code goes here
  var nextS,
    output = "";
  for (var i in str) {
    if (/[a-zA-Z]/.test(str.charAt(i))) {
      nextS = String.fromCharCode(str.charCodeAt(i) + 1);
      //console.log("[a-zA-Z] "+nextS);
    } else {
      nextS = str.charAt(i);
      //console.log("else "+nextS);
    }
    if (/[aeiou]/.test(nextS)) {
      nextS = nextS.toUpperCase();
      //console.log("ovels "+nextS);
    }
    output += nextS;
    //console.log("output "+output);
  }

  return output;
}

// keep this function call here
console.log(LetterChanges(readline()));

/**Longest Word
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
Examples
Input: "fun&!! time"
Output: time
Input: "I love dogs"
Output: love
Tags
string manipulationsearchingfree 

== RUNNING TEST CASES ==

== INPUT ==
"I love dogs"

== OUTPUT ==
love

<< CORRECT >>

== INPUT ==
"fun&!! time"

== OUTPUT ==
time

<< CORRECT >>
*/

function LongestWord(sen) {
  // code goes here
  var arr = sen.split(" ");
  var wordarr = [];
  var index = 0;
  for (let i in arr) {
    wordarr.push(arr[i].match(/[a-z]/gi).join(""));
    //console.log(arr[i]);
  }
  for (let i in wordarr) {
    if (wordarr[i].length > wordarr[index].length) {
      index = i;
    }
  }
  return wordarr[index];
}

// keep this function call here
console.log(LongestWord(readline()));

/**First Factorial
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
Examples
Input: 4
Output: 24
Input: 8
Output: 40320
Tags
recursionmath fundamentalsfree */

function FirstFactorial(num) {
  // code goes here
  var fac = 1;
  while (num > 0) {
    fac = fac * num;
    num -= 1;
  }
  return fac;
}

// keep this function call here
console.log(FirstFactorial(readline()));


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

  // code goes here  
  var stack =new Array(str.length);var revstr = "";
  str=str.split("");
  //console.log(str);
  for(let c of str){
    stack.push(c);
  }
  for(let c of stack){
    revstr += stack.pop().toString();
  }
  return revstr; 

}
   
// keep this function call here 
console.log(FirstReverse(readline()));