/**Letter Changes
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
Examples
Input: "hello*3"
Output: Ifmmp*3
Input: "fun times!"
Output: gvO Ujnft!
Tags
string manipulationfree */

function LetterChanges(str) {
  
    str = str.trim().toLowerCase();
    var len = str.length;
    var newStr = '';
    
    for (var i = 0; i < len; i++) {
      if (/[a-ce-gi-mo-su-y]/.test(str[i])) {
        newStr += String.fromCharCode(((str[i].charCodeAt(0) - 18) % 26) + 97)    
      }
      else if (/[zdhnt]/.test(str[i])) {
          newStr += String.fromCharCode(((str[i].charCodeAt(0) - 18) % 26) + 65);
      }
      else {
       newStr += str[i]; 
      }
    }
    return newStr; 
           
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  LetterChanges(readline());