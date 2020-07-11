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
  
    sen = sen.trim();
    sen = sen.replace(/[^a-zA-Zsd]/g, '');
    
    var arr = sen.split(' ');
    
    arr.sort(function(a, b) {return b.length - a.length});
    
    return arr.shift();
  
    // code goes here  
    return sen; 
           
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  LongestWord(readline());