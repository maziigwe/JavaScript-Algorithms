//A <<<<<<<<<<<<<<<<<<<
// function reverseWord(word){
//   return word.split('').reverse().join('')
// }

//Without reverse() or split() methods
// NO.1 <<<<<<<<<<<<<<<
// let output = " ";
// for (let i = word.length - 1; i >= 0; i--) {
//   output = output + word[i];
// }
// return output;
// }

// NO.2 <<<<<<<<<<<<<<<<<
function reverseWord(word) {
  let output = "";
  for (let cha of word) {
    output = cha + output;
  }
  return output;
}

console.log(reverseWord("HELLO"));
