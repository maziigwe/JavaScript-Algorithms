function isPalindrome(word) {
  const stringReversed = reverseWord(word);
  return word === stringReversed;
}

function reverseWord(word) {
  let output = "";
  for (let cha of word) {
    output = cha + output;
  }
  return output;
}

console.log(isPalindrome("racecar"));
