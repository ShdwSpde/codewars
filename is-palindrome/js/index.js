// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(str){
  return str.toLowerCase() === str.reverse('').split().join('').toLowerCase()
}
