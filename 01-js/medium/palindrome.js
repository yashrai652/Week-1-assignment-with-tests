/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
 var str1=str.replace(/[\W_]/g, '').toLowerCase();
  var arr=[];
  for(var i =str1.length-1;i>=0;i--){
      arr.push(str1[i]);
  }
  var string1 = arr.join('');
  if(string1==str1)
  return true;
  else 
  return false;
}

module.exports = isPalindrome;
